'use client'

import { StepSection } from '@/components/step-section'
import { PageHeader } from '@/components/page-header'
import { InfoCard } from '@/components/info-card'
import { PageNavigation } from '@/components/page-navigation'
import { CardGroup } from '@/components/card-group'
import { Settings } from 'lucide-react'
import { useUnlock } from '@/lib/unlock-context'
import { LockedContent } from '@/components/locked-content'
import { PageWrapper } from '@/components/page-wrapper'

export default function IntegrationPage() {
  const { isUnlocked } = useUnlock()

  if (!isUnlocked) {
    return (
      <PageWrapper isLocked>
        <LockedContent
          icon={Settings}
          title="拉取平台订单"
          description="了解如何进行店铺授权和产品配对，实现电商平台订单的自动拉取。开户后，您将获得详细的授权指引和配对教程。"
        />
      </PageWrapper>
    )
  }

  return (
    <PageWrapper>
      <PageNavigation position="top" />
      
      <PageHeader
        stepNumber={7}
        title="拉取平台订单"
        description="如果你的订单来自主流电商平台，请在一件代发前完成店铺授权和产品配对设置。"
      />

      <StepSection title="店铺授权" description="店铺授权细节较多，请严格按照指引设置。">
        <CardGroup columns={2}>
          <InfoCard
            title="从电商平台拉取（推荐）"
            description="如果你希望从电商平台拉取订单，请进行平台授权，同一平台的多家店铺须进行多次授权。"
            primaryAction={{ text: '进行平台授权', href: 'https://oms.xlwms.com/system/platform/account' }}
            secondaryAction={{ text: '查看指引', href: 'https://help-oms.xlwms.com/aad8/f400/5f52' }}
          />

          <InfoCard
            title="从第三方ERP拉取"
            description="如果你希望从第三方ERP系统拉取订单，请进行ERP授权，部分ERP系统会收取授权费用。"
            primaryAction={{ text: '进行ERP授权', href: 'https://oms.xlwms.com/system/platform/account' }}
            secondaryAction={{ text: '查看指引', href: 'https://help-oms.xlwms.com/aad8/f400/4940' }}
          />
        </CardGroup>
      </StepSection>

      <StepSection title="产品配对" description="不同店铺中的同种商品需要分别配对，否则将无法发货。">
        <CardGroup columns={2}>
          <InfoCard
            title="自动配对（推荐）"
            description="如果OMS和电商平台中的商品SKU一致，可以在OMS中勾选自动创建配对关系，实现自动配对。"
            primaryAction={{ text: '立即配对', href: 'https://oms.xlwms.com/system/platform/product' }}
            secondaryAction={{ text: '查看指引', href: 'https://help-oms.xlwms.com/aad8/bf28/ed20/e976' }}
          />

          <InfoCard
            title="手动配对"
            description="如果OMS和电商平台中的商品SKU不一致，请进行手动配对。"
            primaryAction={{ text: '立即配对', href: 'https://oms.xlwms.com/system/platform/product' }}
            secondaryAction={{ text: '查看指引', href: 'https://help-oms.xlwms.com/aad8/bf28/ed20/e976' }}
          />
        </CardGroup>
      </StepSection>

      <StepSection title="进行可用性测试" description="完成店铺授权和产品配对设置后，请使用真实订单进行测试。">
        <CardGroup columns={2}>
          <InfoCard
            title="如果设置正确"
            description="可以在OMS中看到5天内的全部平台订单，且没有红色报错。"
            primaryAction={{ text: '查看平台订单', href: 'https://oms.xlwms.com/platform/order/list' }}
          />

          <InfoCard
            title="如果设置错误"
            description="无法看到平台订单，或数量不符、出现红色报错。"
            primaryAction={{ text: '联系OMS客服', href: 'https://oms.xlwms.com/' }}
          />
        </CardGroup>
      </StepSection>

      <PageNavigation />
    </PageWrapper>
  )
}
