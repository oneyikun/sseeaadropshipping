import { StepSection } from '@/src/components/step-section'
import { PageHeader } from '@/src/components/page-header'
import { SectionHeader } from '@/src/components/section-header'
import { DetailCard } from '@/src/components/detail-card'
import { SectionDescription } from '@/src/components/section-description'
import { PageNavigation } from '@/src/components/page-navigation'
import { CardGroup } from '@/src/components/card-group'
import { NoteCard } from '@/src/components/note-card'
import { CheckCircle2, Settings } from 'lucide-react'

export default function IntegrationPage() {
  return (
    <>
      <PageHeader
        stepNumber={7}
        title="拉取平台订单"
        description="请在发货前完成店铺授权和产品配对设置。"
      />

      <div className="space-y-8">
        <StepSection title="店铺授权设置" description="店铺授权细节较多，请严格按照指引进行设置">
          <CardGroup columns={2}>
            <DetailCard
              title="平台授权（推荐）"
              description="如果你希望直接从电商平台拉取订单，请进行平台授权。"
              note="注意事项：平台授权以店铺为单位。如果在同一平台有多家店铺，须进行多次授权。"
              primaryAction={{ text: '前往店铺授权', href: 'https://oms.xlwms.com/system/platform/account' }}
              secondaryAction={{ text: '查看授权指引', href: 'https://help-oms.xlwms.com/aad8/f400/5f52' }}
            />

            <DetailCard
              title="ERP授权"
              description="如果你希望通过第三方ERP系统拉取平台订单，请进行ERP授权。"
              note="注意事项：ERP授权的流程更加复杂。部分ERP系统会收取授权费用。"
              secondaryAction={{ text: '查看ERP授权指引', href: 'https://help-oms.xlwms.com/aad8/f400/4940' }}
            />
          </CardGroup>
        </StepSection>

        <StepSection title="产品配对设置" description="不同店铺中的同种商品需要分别配对，否则将无法发货。">
          <CardGroup columns={2}>
            <DetailCard
              title="自动配对（推荐）"
              description="1) 确保SKU一致：确保OMS中的商品SKU和电商平台中的商品自定义SKU完全一致。2) 开启自动创建配对关系：在OMS中勾选「自动创建配对关系」"
              primaryAction={{ text: '前往产品配对设置', href: 'https://oms.xlwms.com/system/platform/product' }}
            />

            <DetailCard
              title="手动配对"
              description="如果OMS中的商品SKU和电商平台中的商品自定义SKU不一致，请进行手动配对。"
              secondaryAction={{ text: '查看手动配对指引', href: 'https://help-oms.xlwms.com/aad8/bf28/ed20/e976' }}
            />
          </CardGroup>
        </StepSection>

        <StepSection title="测试" description="完成以上2项设置后，建议使用真实订单进行测试">
          <CardGroup columns={2}>
            <DetailCard
              title="设置正确"
              description="你可以在OMS中看到待发货的全部订单，且没有红色报错。"
              primaryAction={{ text: '查看平台订单列表', href: 'https://oms.xlwms.com/platform/order/list' }}
            />

            <DetailCard
              title="设置错误"
              description="无法看到待发货订单，或订单数量不符，或出现红色报错。"
              primaryAction={{ text: '联系OMS客服', href: 'https://oms.xlwms.com/' }}
            />
          </CardGroup>

          <NoteCard>
            遇到问题？请对照本手册中的指引检查，或联系OMS客服机器人获取帮助。
          </NoteCard>
        </StepSection>

        <PageNavigation
          previousPage={{ href: '/guide/shipping', label: '上一步：发货至海外仓' }}
          nextPage={{ href: '/guide/operations', label: '下一步：你的日常业务' }}
        />
      </div>
    </>
  )
}
