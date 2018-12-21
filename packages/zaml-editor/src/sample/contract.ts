export default 
`#各方基本信息
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
九、双方发生争议协调不成的，应向甲方所在地人民法院起诉。
`;
