import { StepSection } from '../../../components/step-section'
import { PageHeader } from '../../../components/page-header'
import { SectionHeader } from '../../../components/section-header'
import { DetailCard } from '../../../components/detail-card'
import { SectionDescription } from '../../../components/section-description'
import { PageNavigation } from '../../../components/page-navigation'
import { InfoCard } from '../../../components/info-card'
import { ChecklistItem } from '../../../components/checklist-item'
import { ChecklistGroup } from '../../../components/checklist-group'
import { LinkButton } from '../../../components/link-button'
import { NoteCard } from '../../../components/note-card'
import { DollarSign, MapPin, CreditCard, Building2 } from 'lucide-react'

export default function AccountPage() {
  return (
    <>
      <PageHeader
        stepNumber={3}
        title="在海海开户"
        description="开通OMS系统，完成充值"
      />

      <div className="space-y-8">
          <StepSection title="开通OMS" description="我们使用领星OMS（订单管理系统）管理你的订单和商品">
            <SectionDescription>
              请提供以下信息完成开户：
            </SectionDescription>

            <InfoCard>
              <ChecklistGroup columns={1}>
                <ChecklistItem>姓名</ChecklistItem>
                <ChecklistItem>电话</ChecklistItem>
                <ChecklistItem>自定义用户名（数字或字母组合）</ChecklistItem>
              </ChecklistGroup>
            </InfoCard>

            <DetailCard
              title="账户开通后"
              description="你可以使用自定义用户名和我们提供的初始密码登录OMS系统。"
            />

            <LinkButton href="https://oms.xlwms.com/" variant="default" className="w-full">
              登录 OMS 系统
            </LinkButton>
          </StepSection>

          <StepSection title="充值" description="开通账号后，请进行以下2项操作，完成首次充值">
            <div className="space-y-4">
              <SectionHeader icon={DollarSign} title="通过以下任意方式向我们转账100美元" />

              <DetailCard
                title="美元（通过Zelle）"
                description="手续费：无"
                note="First name: Jiahao | Last name: Yang | Email: yangjh569632176@gmail.com"
              />

              <DetailCard
                title="美元（通过电汇）"
                description="从空中云汇、万里汇、派安盈汇款无中间行手续费。从国内银行汇款每笔收取15～30美元中间行手续费。"
                note="Bank Name: Middlesex Federal Savings, F.A | Account number: 103000460 | ABA Routing: 211370150 | SWIFT code: MFEDUS42 | Name: Sseeaa Inc | Bank Address: Middlesex Federal Savings One College Avenue Somerville, MA 02144"
              />

              <DetailCard
                title="人民币（通过支付宝）"
                description="手续费：无。如使用人民币，请先确认要充值的美元金额，再换算后充值。"
                note="姓名：周胜男 | 账号：18600609233"
              />

              <LinkButton href="https://m.unionpayintl.com/cn/rate/" variant="outline" className="w-full">
                查询汇率
              </LinkButton>
            </div>

            <div className="space-y-4 mt-12">
              <SectionHeader icon={CreditCard} title="在OMS中提交充值单" />

              <SectionDescription>
                以下3项为必填信息，务必按要求填写：
              </SectionDescription>

              <InfoCard>
                <div className="space-y-3">
                  <div>
                    <span className="font-semibold text-sm text-gray-900">付款方式：</span>
                    <span className="text-xs text-gray-500 ml-2">美元充值选择银行转账，人民币充值选择支付宝</span>
                  </div>
                  <div>
                    <span className="font-semibold text-sm text-gray-900">充值金额：</span>
                    <span className="text-xs text-gray-500 ml-2">币种须选择美元（USD）。人民币充值请换算为美元填写</span>
                  </div>
                  <div>
                    <span className="font-semibold text-sm text-gray-900">充值凭证：</span>
                    <span className="text-xs text-gray-500 ml-2">上传美元或人民币付款成功的截图</span>
                  </div>
                </div>
              </InfoCard>

              <LinkButton href="https://oms.xlwms.com/account/my/list" variant="default" className="w-full">
                前往 OMS 提交充值单
              </LinkButton>

              <NoteCard>
                <span className="font-semibold">温馨提示：</span>收到充值单后，我们会对照到账金额进行审核。为避免服务中断，请确保账户余额始终大于100美元。日常充值方式与首次相同。
              </NoteCard>

              <NoteCard variant="warning">
                若开户后未发货，首次充值的100美元不予退还。
              </NoteCard>
            </div>
          </StepSection>

        <PageNavigation
          previousPage={{ href: '/guide/promise', label: '上一步：了解海海一件代发优势' }}
          nextPage={{ href: '/guide/warehouse-info', label: '下一步：获得海外仓地址和资质' }}
        />
      </div>
    </>
  )
}
