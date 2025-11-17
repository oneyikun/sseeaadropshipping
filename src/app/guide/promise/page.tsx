import { StepSection } from '../../../components/step-section'
import { PageHeader } from '../../../components/page-header'
import { SectionHeader } from '../../../components/section-header'
import { DetailCard } from '../../../components/detail-card'
import { SectionDescription } from '../../../components/section-description'
import { PageNavigation } from '../../../components/page-navigation'
import { InfoCard } from '../../../components/info-card'
import { CheckCircle2, AlertCircle, XCircle, Ship, Warehouse, Truck } from 'lucide-react'

export default function PromisePage() {
  return (
    <>
      <PageHeader
        stepNumber={1}
        title="了解海海一件代发优势"
        description="明确的时效承诺和透明的赔偿标准，让你安心开展业务"
      />

      <div className="space-y-8">
          <StepSection id="time-guarantee" title="时效保证" description="以当地时间为准，工作日不含当地法定假期和周六日">
            <div className="space-y-4">
              <SectionHeader icon={Ship} title="国际物流" />

              <DetailCard
                id="international-shipping"
                title="集货"
                value="以实际航次为准"
                description="国内发货至集货仓，具体请咨询人工客服@袁萱"
              />

              <DetailCard
                title="海运普货"
                value="30天工作日"
                description="集货仓发往美西海外仓"
              />

              <DetailCard
                title="海运敏货"
                value="30天工作日"
                description="集货仓发往美西海外仓"
              />

              <DetailCard
                title="空运"
                value="10天工作日"
                description="集货仓发往美西海外仓"
              />
            </div>

            <div className="space-y-4 mt-12">
              <SectionHeader icon={Warehouse} title="海外仓" />

              <DetailCard
                id="warehouse-receipt"
                title="入库"
                value="5个工作日"
                description="海外仓确认收货后上架"
              />

              <DetailCard
                id="warehouse-shipment"
                title="出库"
                value="48小时内"
                description="工作日上午11:00前最快当天出库"
              />
            </div>

            <div className="space-y-4 mt-12">
              <SectionHeader icon={Truck} title="海外快递" />

              <DetailCard
                title="上网和送达"
                value="以实际轨迹为准"
                description="我们无法做出时效保证，但可满足电商平台要求"
              />
            </div>
          </StepSection>

          <StepSection title="赔偿和协助范围" description="海外仓一件代发服务环节众多，以下是我们在不同情况下的责任范围">
            <div className="space-y-4">
              <SectionHeader icon={CheckCircle2} title="我们可以赔偿的事项" />

              <SectionDescription>
                在问题出现后的<span className="font-bold">60天内</span>向人工客服@袁萱提出申请，申请通过后，赔付金额将充值至你的OMS，逾期恕不受理。
              </SectionDescription>

              <DetailCard
                id="lost-goods"
                title="国际物流丢件"
                value="≤申报价或物流费2倍"
                description="如果商品已被集货仓签收，在送达海外仓前丢失，我们将按申报价格承担对应商品的赔偿责任。在海外快递运输途中丢件，赔偿金额不超过100美元；在其他环节丢件，赔偿金额不超过该笔国际物流费用的2倍。"
                note="如果海外快递系统显示已签收，但海外仓实际未收到，也视为在海外快递运输途中丢件。"
              />

              <DetailCard
                id="seized-goods"
                title="国际物流扣货"
                value="≤申报价或物流费2倍"
                description="如果你的商品和申报信息完全合规，因我们的过错被监管部门查没，我们将按申报价格承担对应商品的赔偿责任，赔偿金额不超过该笔国际物流费用的2倍。"
              />

              <DetailCard
                title="海外仓延迟入库"
                value="0.5元/KG/天"
                description="如果商品未在承诺时间内送达海外仓或上架（以OMS记录时间为准），并对你造成损失，我们将按0.5元人民币/KG/天承担国际物流的赔偿责任，赔偿金额不超过该笔国际物流费用。"
                note="此项赔偿不适用于在国际物流环节丢件或被扣货的商品。"
              />

              <DetailCard
                title="海外仓延迟出库"
                value="40元/订单"
                description="一件代发时，如果订单未在承诺时间内出库（以OMS记录时间为准），导致你被电商平台处罚，我们将按40元人民币/订单承担赔偿责任。"
              />

              <DetailCard
                title="海外仓错发商品"
                value="全额快递费+≤零售价20%"
                description="一件代发时，如果出现了错发、漏发的情况，我们将全额承担对应海外快递的赔偿责任。如果商品无法追回，还将按申报价格承担对应商品的赔偿责任，赔偿金额不超过商品零售价格的20%。"
              />

              <DetailCard
                id="damaged-goods"
                title="海外仓损毁商品"
                value="≤零售价20%"
                description="如果商品入库后按你的要求进行了逐件清点，后续发现丢失或损坏，我们将按申报价格承担对应商品的赔偿责任，赔偿金额不超过商品零售价格的20%。"
              />

              <DetailCard
                id="fake-label"
                title="海外快递虚假面单"
                value="面单售价2倍"
                description="如果你通过海海购买的面单被快递公司判定为虚假且申诉无效，我们将按面单售价2倍的标准承担对应海外快递的赔偿责任。"
              />
            </div>

            <div className="space-y-4 mt-12">
              <SectionHeader icon={AlertCircle} title="我们可以协助的事项" />

              <SectionDescription>
                如果出现以下2种情况，我们将协助你处理，但不在赔偿范围内。
              </SectionDescription>

              <DetailCard
                id="assist-tracking"
                title="海外快递无物流轨迹"
                description="在规定时间内提供物流轨迹是部分电商平台对卖家的要求，不是海外快递公司的义务，任何机构或个人都无法通过合法方式对该时效做出保证。我们可以免费协助你进行补发或催促快递公司，但无法保证结果。"
              />

              <DetailCard
                id="assist-claim"
                title="海外快递丢件或延误"
                description="海外快递公司的赔偿政策因产品和保险购买情况不同而异，我们可以协助你进行补发或准备索赔材料，但无法替你申请赔偿。"
              />
            </div>

            <div className="space-y-4 mt-12">
              <SectionHeader icon={XCircle} title="我们无法担责的事项" iconColor="text-red-600" />

              <SectionDescription>
                除以上列明的事项外，其他原因导致的损失均不在我们的赔偿或协助范围内，包括但不限于以下事项。
              </SectionDescription>

              <DetailCard
                title="不可抗力"
                description="因自然灾害、政治活动、战争、罢工等不可抗因素造成的损失。"
              />

              <DetailCard
                title="你的过错"
                description="因你的过错造成的损失：商品不合规（侵权、质量问题、资质问题、涉及违禁品或反倾销等）、申报不合规（填写的申报价格、材质、品牌名不正确等）、未按本手册的要求操作（打包不规范、OMS操作不规范等）。"
              />

              <DetailCard
                title="无法判断过错方的损失"
                description="如：商品在外包装无破损情况下的丢失或损坏。"
              />
            </div>
          </StepSection>

        <PageNavigation
          previousPage={{ href: '/guide', label: '返回流程总览' }}
          nextPage={{ href: '/guide/account', label: '下一步：在海海开户' }}
        />
      </div>
    </>
  )
}
