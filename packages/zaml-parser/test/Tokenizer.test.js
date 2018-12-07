const chai = require('chai');
const fs = require('fs');
const zaml = require('../lib');
const { readFile, readJSON } = require('./util');
const { ParseError } = require('../lib/ParseError.js');
const { expect, assert } = chai;
const { Tokenizer, Node } = zaml;

describe('class Tokenizer', () => {

  const source = readFile('fixtures/sample.zaml');
  const parsed = readJSON('fixtures/parsed-ast.json');
  const stringified = readFile('fixtures/stringified.txt');

  beforeEach(() => {
  });

  it('Constructor', () => {
    const tokenizer = new Tokenizer(source);
    // tokenizer = new Tokenizer(source, {verbose: true});
    expect(tokenizer).to.be.instanceOf(Tokenizer);
  });

  it('process()', () => {
    const tokenizer = new Tokenizer(source);
    const node = tokenizer.process();
    expect(tokenizer.parsed).to.be.true;
    expect(JSON.parse(JSON.stringify(node.toJSON({ position: true })))).to.deep.equal(parsed);
  });

  it('process empty start expect throw error', () => {
    const sample = `# tag`;
    // TODO: found out why second parse go wrong
    assert.throws(() => zaml.parse(sample), ParseError);
    assert.throws(() => zaml.parse(sample), ParseError);
  });

  it('robot Q&A sample', () => {
    const sample = `
      ---
      foo: bar
      ---
      #Question
      What is your name?
      
      #Answer
      My name is [Jack]{PER}
    `;
    zaml.parse(sample);
  });

  it('contract sample', () => {

    const sample = `
      #租赁合同
      甲方：[北京星核软件有限公司]{ORG}
      组织机构代码：[345976348]{SOC}
      法定代表人：[张鸿峰]{PER}
      地址：[北京市朝阳区方恒国际D座2806]{LOC}
      乙方：[孙继顺]{PER}
      身份证号：[230101197701018888]{ID}
      手机号：[13945018888]{MOBILE}
      ---
      
      甲乙双方经友好协商，达成如下协议。
      
      #标的 #租赁物 #不动产
      一、甲方租赁{INLINE #声明与保证}乙方所有的{/INLINE}位于[北京市朝阳区南磨房路37号]{LOC}门市房一间，使用面积为[105平方米]{AREA}，{INLINE #租期 #租赁期限 #计租日}租期为[2019年1月1日]{DATE}至[2019年12月31日]{DATE}{/INLINE}，{INLINE #租金}租金为[十万元人民币]{MONEY value=100000}{/INLINE}。
      
      #用途
      二、该门市房的用途为新注册公司的经营地。
      
      #付款方式 #计费方式 #按月结算 #支付时间
      三、租金按月结算。{INLINE #义务}甲方[每月一日]{DATE}向乙方指定账户一次汇入当月租金。{/INLINE}
      
      #定金
      四、{INLINE #义务 #支付}甲方应于合同生效起[五日内]{DATE}向乙方支付定金[一万元整]{MONEY}。{/INLINE}
      
      #交付租赁物 #免租期
      五、乙方应在收到定金给交给乙方钥匙用于提前装修。装修费用由甲方自行承担。
      
      #押金
      六、{INLINE #义务 #支付}甲方应于计租日前向乙方支付押金[一万元整]{MONEY}。{/INLINE} {INLINE #义务 #返还}租赁期满或合同解除后[两日内]{DATE}，乙方应无息返还。{/INLINE}
      
      {#违约责任
        七、违约责任
      
        #逾期付款
        1. 付款方未按照约定付款的，每逾期[一天]{DATE}，应按逾期金额的1%向收款方支付违约金。
      
        #预期交付租赁物
        2. 乙方延迟交房的，每逾期一天，应向甲方支付违约金[100元]{DATE}，并将租期做相应的顺延。
      }

      {#不可抗力
        八、发生如下情形，任何一方有权解除合同，并不承担违约责任：
      
        #政府行为 #拆迁
        1. 该门市房被政府列入拆迁范围；
      
        2. 发生地震、火灾等不可抗力。
      }

      #争议解决 #法院起诉
      七、双方发生争议协调不成的，应向甲方所在地人民法院起诉。
    `;
    const node = zaml.parse(sample);
    // console.log(JSON.stringify(node.toJSON(), null, 2));
    // console.log(node.toSource())
    // console.log(node.toString())
  });

  describe('feature: front matter & block metadata', () => {

    it('front matter without leading marker', () => {
      const sample = `
        hello: world
        foo: bar
        ---
        The leading marker of front matter could be ignored
      `;
      const node = zaml.parse(sample);
      expect(node.metadata).deep.equal({
        hello: 'world',
        foo: 'bar'
      });
    });

    it('front matter without ending marker', () => {
      const sample = `
        hello: world
        foo: bar

        The leading marker of front matter could be ignored
      `;
      const node = zaml.parse(sample);
      expect(node.metadata).deep.equal({
        hello: 'world',
        foo: 'bar'
      });
    });

    // it('front matter without marker', () => {
    //   const sample = `
    //     hello: world
    //     foo: bar

    //     The marker of front matter could be ignored
    //   `;
    //   const node = zaml.parse(sample);
    //   expect(node.attributes).deep.equal({
    //     hello: 'world',
    //     foo: 'bar'
    //   });
    // });

    it('block metadata', () => {
      const sample = `
      {BLOCK}
        hello: world
        foo: bar
        ---
        Block content
      {/BLOCK}
      `;
      const node = zaml.parse(sample);
      expect(node.firstChild).to.be.instanceOf(Node);
      expect(node.firstChild.metadata).deep.equals({
        hello: 'world',
        foo: 'bar',
      });
    });

    it('front matter assignment with full width character "："', () => {
      const sample = `
      ---
      语言：中文
      字符：全角
      ---
      `;
      const node = zaml.parse(sample);
      expect(node.metadata).deep.equals({
        '语言': '中文',
        '字符': '全角',
      });
    });
  
  });

  describe('feature: simple block', () => {

    it('simple block', () => {
      const sample = `
        {
          This is a simple block
        }
      `;
      const node = zaml.parse(sample);
      expect(node.childNodes[0].is('BLOCK')).equals(true);
    });

    it('simple block with labels', () => {
      const sample = `
        {#FOO #BAR #标签
          This is a simple block with labels
        }
      `;
      const node = zaml.parse(sample);
      expect(node.childNodes[0].is('BLOCK')).equals(true);
      expect(node.childNodes[0].labels.sort()).deep.equal(['BAR', 'FOO', '标签']);
    });

    it('simple block with attributes', () => {
      const sample = `
        {A=1 属性1=2 attr_1=3
          This is a simple block with attributes
        }
      `;
      const node = zaml.parse(sample);
      expect(node.childNodes[0].is('BLOCK')).equals(true);
      expect(node.childNodes[0].attributes).deep.equal({A: 1, 属性1: 2, attr_1: 3 });
    });

    it('simple block with attributes and labels', () => {
      const sample = `
        {foo=1 #L1 bar=2 #L2
          This is a simple block with attributes and labels
        }
      `;
      const node = zaml.parse(sample);
      expect(node.childNodes[0].is('BLOCK')).equals(true);
      expect(node.childNodes[0].attributes).deep.equal({foo: 1, bar: 2 });
      expect(node.childNodes[0].labels.sort()).deep.equal(['L1', 'L2']);
    });

    it('simple block with labels and attributes', () => {
      const sample = `
        {#L1 foo=1 bar=2 #L2
          This is a simple block with labels and attributes  
        }
      `;
      const node = zaml.parse(sample);
      expect(node.childNodes[0].is('BLOCK')).equals(true);
      expect(node.childNodes[0].attributes).deep.equal({foo: 1, bar: 2 });
      expect(node.childNodes[0].labels.sort()).deep.equal(['L1', 'L2']);
    });

    it('simple block with labels and without bracket', () => {
      const sample = `
        #FOO #BAR
        This is a simple block with labels
        And no start and end marker

        Another paragraph
      `;
      const node = zaml.parse(sample);
      expect(node.childNodes[0].is('BLOCK')).equals(true);
      expect(node.childNodes[0].labels.sort()).deep.equal(['BAR', 'FOO']);
    });

  });

  describe('feature: embedded entity & tag in metadata', () => {
    
    it('embedded tag parsing', () => {
      const sample = `
        ---
        foo: {INLINE #tag attr1=value1}Embedded block content{/INLINE}
        ---
        Main text content
      `;
      const node = zaml.parse(sample);
      expect(node.metadata.foo).to.be.instanceOf(Node);
      expect(node.metadata.foo.type).to.equal(Node.Types.TAG);
      expect(node.metadata.foo.hasLabel('tag')).to.be.true;
      expect(node.metadata.foo.getAttribute('attr1')).to.equal('value1');
      expect(node.metadata.foo.firstChild.content).to.equal('Embedded block content');
    });
    
    it('embedded entity parsing', () => {
      const sample = `
        ---
        foo: [Jack]{PER lang=English}
        ---
        Main text content
      `;
      const node = zaml.parse(sample);
      expect(node.metadata.foo).to.be.instanceOf(Node);
      expect(node.metadata.foo.type).to.equal(Node.Types.ENTITY);
      expect(node.metadata.foo.firstChild.content).to.equal('Jack');
      expect(node.metadata.foo.getAttribute('lang')).to.equal('English');
    });

  });
  
});
