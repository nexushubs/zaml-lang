const chai = require('chai');
chai.use(require('chai-datetime'));
const fs = require('fs');
const zaml = require('..');
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

  it('entity sample', () => {
    const sample = `
      This is a link without schema: [www.google.com]{LINK url=http://www.google.com}

      This is a link with schema: [https://www.example.com/hello/world]{LINK url=https://www.example.com/hello/world}

      This line contains multiple links: [http://example.com/dir1]{LINK url=http://example.com/dir1} [http://example.com/dir1]{LINK url=http://example.com/dir1}

      This is a email address: [someone@example.com]{EMAIL url=mailto:someone@example.com}

      This is a mention: [@someone]{MENTION username=someone}

      This is a mention followed by a link: [@someone]{MENTION username=someone} [www.example.com]{LINK url=http://www.example.com}

      This is a link followed by mention: [www.example.com]{LINK url=http://www.example.com} [@someone]{MENTION username=someone}

      这是一个法条: [劳动法第13条]{LAW_ARTICLE}，[《未成年人保护]{LAW}法》第134条

      End of the sample file
    `;
    zaml.parse(sample);
  });

  describe('attribute parsing', () => {

    it.only('string, number, boolean literal', () => {
  
      const sample = `
        {BLOCK
          string1=unwrapped_string
          string2="wrapped string with escaped quote \\""
          string3=2cats
          int1=0
          int2=1
          int3=-56
          bigInt=${Number.MAX_SAFE_INTEGER}0
          float1=3.1415926
          float2=.618
          float3=1e3
          float4=-1e-3
          bool1=true
          bool2=True
          bool3=TRUE
          bool4
          bool5=false
          bool6=False
          bool7=FALSE
        }
          the sample text
        {/BLOCK}
      `
      const node = zaml.parse(sample);
      expect(node.firstChild.attributes).to.deep.equal({
        string1: 'unwrapped_string',
        string2: 'wrapped string with escaped quote \"',
        string3: '2cats',
        int1: 0,
        int2: 1,
        int3: -56,
        bigInt: `${Number.MAX_SAFE_INTEGER}0`,
        float1: 3.1415926,
        float2: .618,
        float3: 1e3,
        float4: -1e-3,
        bool1: true,
        bool2: true,
        bool3: true,
        bool4: true,
        bool5: false,
        bool6: false,
        bool7: false,
      });

    });


    it('datetime', () => {
  
      const sample = `
        {BLOCK
          date1=1985-05-18
          date2=1985-05-18T23:30:00.000Z
        }
          the sample text
        {/BLOCK}
      `
      const node = zaml.parse(sample);
      const {
        date1,
        date2,
      } = node.firstChild.attributes;
      expect(date1).to.equalTime(new Date('1985-05-18'));
      expect(date2).to.equalTime(new Date('1985-05-18T23:30:00Z'));
    });

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
      #各方基本信息
      甲方：[北京星核软件有限公司]{ORG}
      统一社会信用代码：[345976348]{SOC}
      法定代表人：[张鸿峰]{PER}
      地址：[北京市朝阳区方恒国际D座2806]{LOC}
      乙方：[孙继顺]{PER}
      身份证号：[230101197701018888]{ID}
      手机号：[13945018888]{MOBILE}
      ---
      
      甲乙双方经友好协商，达成如下协议。
      
      #标的.租赁 #描述
      一、{#标的.租赁 #描述.地址 #描述.数量 甲方租赁乙方所有的位于[北京市朝阳区南磨房路37号]{LOC}门市房[一间]{QT}}。{#描述.面积 使用面积为[105平方米]{AREA}}。{#标的.租赁.租期 租期为[2019年1月1日]{DATE}至[2019年12月31日]{DATE}}；{#标的.租赁.租金 租金为[十万元人民币]{MONEY value=100000}}。
      
      #标的.租赁.用途
      二、该门市房的用途为新注册公司的经营地。
      
      #标的.付款方式.银行 #标的.租赁.计费方式.按月结算
      三、租金按月结算。{#约定.承租方.支付.租金 甲方每月[一日]{DATE}向乙方指定账户一次汇入当月租金。}
      
      #约定.承租方.支付.定金 #事件.合同生效
      四、甲方应于合同生效起[五日内]{DUE}向乙方支付定金[一万元整]{MONEY}。
      
      #约定.出租方.交付.租赁物 #事件.履约.出租方.交付
      五、乙方应在收到定金给交给乙方钥匙用于提前装修。装修费用由甲方自行承担。
      
      #约定
      六、{#约定.承租方.支付.押金 甲方应于[计租日前]{DUE}向乙方支付押金[一万元整]{MONEY}。}{#约定.出租方.返还押金 #事件.合同期满 #事件.合同解除 租赁期满或合同解除后[两日内]{DUE}，乙方应无息返还。}
      
      {#事件.违约 #违约责任
      七、违约责任
      
        #事件.违约 #违约.付款方.付款 #违约责任.补偿.违约金 #违约责任.补偿.违约金.计算方式.每逾期一天
        1. 付款方未按照约定付款的，每逾期[一天]{PERIOD}，应按逾期金额的[1%]{RATE}向收款方支付违约金。
      
        #事件.违约 #违约.出租方.交付.租赁物 #违约责任.补偿.违约金.计算方式.每逾期一天 #违约责任.补偿.顺延
        2. 乙方延迟交房的，每逾期[一天]{PERIOD}，应向甲方支付违约金[100元]{DATE}，并将租期做相应的顺延。
      }
      
      {#事件.不可抗力 #约定.解除合同
      八、发生如下情形，任何一方有权解除合同，并不承担违约责任：
      
        #事件.不可抗力.政府行为.拆迁
        1. 该门市房被政府列入拆迁范围；
      
        #事件.不可抗力.重大灾害
        2. 发生地震、火灾等不可抗力。
      }
      
      #争议解决 #争议解决.方式.法院起诉 #争议解决.地点.合同一方所在地
      七、双方发生争议协调不成的，应向甲方所在地人民法院起诉。
    `;
    const node = zaml.parse(sample);
    // console.log(JSON.stringify(node.toJSON(), null, 2));
    // console.log(node.toSource({ simple: true }))
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

  describe('feature: comments', () => {
    
    it('single line comments', () => {
      const sample = `
        ~comment text

        Main text content ~comment text
      `;
      const node = zaml.parse(sample);
      // console.log(JSON.stringify(node.toJSON(), null, 2));
    });
    
    it('multiple line comments', () => {
      const sample = `
        ~~~
        multiple line
        comments
        ~~~

        ~~~~
        another
        comment
        block
        ~~~~
      `;
      const node = zaml.parse(sample);
      // console.log(JSON.stringify(node.toJSON(), null, 2));
    });

  });
  
});
