'use client'

import { useEffect } from 'react'
import { StepSection } from '@/components/step-section'
import { PageHeader } from '@/components/page-header'
import { SectionHeader } from '@/components/section-header'
import { InfoCard, TimeCommitmentCard } from '@/components/info-card'
import { PageNavigation } from '@/components/page-navigation'
import { CardGroup } from '@/components/card-group'
import { PageWrapper } from '@/components/page-wrapper'

export default function PromisePage() {
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const id = hash.substring(1)
      const element = document.getElementById(id)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' })
          
          const isCollapsed = element.querySelector('[data-collapsed="true"]')
          if (isCollapsed) {
            element.click()
          }
        }, 100)
      }
    }
  }, [])

  return (
    <PageWrapper>
      <PageNavigation position="top" />
      
      <PageHeader
        stepNumber={1}
        title="了解海海一件代发优势"
        description="明确的时效承诺和透明的赔偿标准，让你安心开展业务。"
      />

      <StepSection id="time-guarantee" title="我们承诺的时效" description="以当地时间为准，工作日不含当地法定假期和周六日。">
        <SectionHeader icon="🚢" title="国际物流" />

        <CardGroup columns={2}>
          <TimeCommitmentCard
            variant="time"
            title="海运 · 普通商品"
            timeValue="30个工作日"
            description="从开船到海外仓收货。"
          />

          <TimeCommitmentCard
            variant="time"
            title="海运 · 敏感商品"
            timeValue="30个工作日"
            description="从开船到海外仓收货。"
          />

          <TimeCommitmentCard
            variant="time"
            title="空运"
            timeValue="10个工作日"
            description="从起飞到海外仓收货。"
          />
        </CardGroup>

        <SectionHeader icon="🏭" title="海外仓" />

        <CardGroup columns={2}>
          <TimeCommitmentCard
            variant="time"
            id="warehouse-receipt"
            title="入库"
            timeValue="5个工作日"
            description="从海外仓收货到商品可用。"
          />

          <TimeCommitmentCard
            variant="time"
            id="warehouse-shipment"
            title="出库"
            timeValue="48小时"
            description="从提交入库单到商品出库，工作日上午11:00前的入库单最快当天出库。"
          />
        </CardGroup>

        <SectionHeader icon="🚚" title="海外快递" />

        <CardGroup columns={2}>
          <TimeCommitmentCard
            variant="time"
            title="上网和送达"
            timeValue="无轨迹免费补发"
            description="海海和电商平台销售的快递产品均可满足平台的时效要求。但上网和送达时间以实际物流轨迹为准，我们无法做出保证，但可以协助补发。"
          />
        </CardGroup>
      </StepSection>

      <StepSection title="我们可以赔偿的事项" description="60天内向海海客服提出申请，赔付金额将充值至OMS。">

        <SectionHeader icon="✈️" title="国际物流" />

        <CardGroup>
          <InfoCard
            id="lost-goods"
            title="国际物流丢件"
            value="≤申报价或物流费2倍"
            description="如果商品已被集货仓签收，在送达海外仓前丢失，我们将按申报价格承担对应商品的赔偿责任。在海外快递运输途中丢件，赔偿金额不超过100美元；在其他环节丢件，赔偿金额不超过该笔国际物流费用的2倍。"
            note="如果海外快递系统显示已签收，但海外仓实际未收到，也视为在海外快递运输途中丢件。"
            collapsible={true}
          />

          <InfoCard
            id="seized-goods"
            title="国际物流扣货"
            value="≤申报价或物流费2倍"
            description="如果你的商品和申报信息完全合规，因我们的过错被监管部门查没，我们将按申报价格承担对应商品的赔偿责任，赔偿金额不超过该笔国际物流费用的2倍。"
            collapsible={true}
          />

          <InfoCard
            title="海外仓延迟入库"
            value="0.5元/KG/天"
            description="如果商品未在承诺时间内送达海外仓或上架（以OMS记录时间为准），并对你造成损失，我们将按0.5元人民币/KG/天承担国际物流的赔偿责任，赔偿金额不超过该笔国际物流费用。"
            note="此项赔偿不适用于在国际物流环节丢件或被扣货的商品。"
            collapsible={true}
          />
        </CardGroup>

        <SectionHeader icon="🏭" title="海外仓" />

        <CardGroup>
          <InfoCard
            id="warehouse-delay-shipment"
            title="海外仓延迟出库"
            value="40元/订单"
            description="一件代发时，如果订单未在承诺时间内出库（以OMS记录时间为准），导致你被电商平台处罚，我们将按40元人民币/订单承担赔偿责任。"
            collapsible={true}
          />

          <InfoCard
            title="海外仓错发商品"
            value="全额快递费+≤零售价20%"
            description="一件代发时，如果出现了错发、漏发的情况，我们将全额承担对应海外快递的赔偿责任。如果商品无法追回，还将按申报价格承担对应商品的赔偿责任，赔偿金额不超过商品零售价格的20%。"
            collapsible={true}
          />

          <InfoCard
            id="damaged-goods"
            title="海外仓损毁商品"
            value="≤零售价20%"
            description="如果商品入库后按你的要求进行了逐件清点，后续发现丢失或损坏，我们将按申报价格承担对应商品的赔偿责任，赔偿金额不超过商品零售价格的20%。"
            collapsible={true}
          />
        </CardGroup>

        <SectionHeader icon="🚚" title="海外快递" />

        <CardGroup>
          <InfoCard
            id="fake-label"
            title="海外快递虚假面单"
            value="面单售价2倍"
            description="如果你通过海海购买的面单被快递公司判定为虚假且申诉无效，我们将按面单售价2倍的标准承担对应海外快递的赔偿责任。"
            collapsible={true}
          />
        </CardGroup>
      </StepSection>

      <StepSection title="我们可以协助的事项" description="在以下情况下，我们将协助你处理，但不在赔偿范围内">
        <CardGroup>
          <InfoCard
            id="assist-tracking"
            title="海外快递无物流轨迹"
            description="在规定时间内提供物流轨迹是部分电商平台对卖家的要求，不是海外快递公司的义务，任何机构或个人都无法通过合法方式对该时效做出保证。我们可以免费协助你进行补发或催促快递公司，但无法保证结果。"
            collapsible={true}
          />

          <InfoCard
            id="assist-claim"
            title="海外快递丢件或延误"
            description="海外快递公司的赔偿政策因产品和保险购买情况不同而异，我们可以协助你进行补发或准备索赔材料，但无法替你申请赔偿。"
            collapsible={true}
          />
        </CardGroup>
      </StepSection>

      <StepSection title="我们无法担责的事项" description="除以上列明的事项外，其他原因导致的损失均不在我们的赔偿或协助范围内">
        <CardGroup>
          <InfoCard
            title="不可抗力"
            description="因自然灾害、政治活动、战争、罢工等不可抗因素造成的损失。"
            collapsible={true}
          />

          <InfoCard
            title="你的过错"
            description="商品不合规：侵权、质量问题、资质问题、涉及违禁品或反倾销等。申报不合规：填写的申报价格、材质、品牌名不正确等。未按本手册的要求操作：打包不规范、OMS操作不规范等。"
            collapsible={true}
          />

          <InfoCard
            title="无法判断过错方的损失"
            description="如：商品在外包装无破损情况下的丢失或损坏。"
            collapsible={true}
          />
        </CardGroup>
      </StepSection>

      <PageNavigation />
    </PageWrapper>
  )
}
