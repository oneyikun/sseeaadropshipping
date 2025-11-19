'use client'

import { StepSection } from '@/components/step-section'
import { PageHeader } from '@/components/page-header'
import { SectionHeader } from '@/components/section-header'
import { InfoCard } from '@/components/info-card'
import { PageNavigation } from '@/components/page-navigation'
import { ChecklistItem, ChecklistGroup } from '@/components/checklist-item'
import { LinkButton } from '@/components/link-button'
import { DollarSign, CreditCard, UserPlus } from 'lucide-react'
import { useUnlock } from '@/lib/unlock-context'
import { LockedContent } from '@/components/locked-content'
import { PageWrapper } from '@/components/page-wrapper'

export default function AccountPage() {
  const { isUnlocked } = useUnlock()

  if (!isUnlocked) {
    return (
      <PageWrapper isLocked>
        <LockedContent
          icon={UserPlus}
          title="在海海开户"
          description="了解如何开通OMS系统、完成首次充值，开启一件代发服务。完成开户后，您将解锁完整的操作指南和详细流程说明。"
        />
      </PageWrapper>
    )
  }

  return (
    <PageWrapper>
      <PageNavigation position="top" />
      
      <PageHeader
        stepNumber={3}
        title="在海海开户"
        description="开通OMS系统，完成充值"
      />

      <StepSection title="开通OMS账户" description="联系客服开通你的专属操作系统">
        <InfoCard 
          icon={UserPlus} 
          variant="default" 
          title="联系海海客服"
        >
          <p className="text-sm text-muted-foreground mb-2">
            添加海海客服微信，提供你的店铺信息和业务需求，客服将为你开通OMS账户。
          </p>
        </InfoCard>

        <InfoCard 
          icon={CreditCard} 
          variant="default" 
          title="获取账户信息"
        >
          <p className="text-sm text-muted-foreground mb-2">
            开通成功后，你将收到OMS登录地址、账号和初始密码。首次登录后请及时修改密码。
          </p>
        </InfoCard>
      </StepSection>

      <StepSection title="完成首次充值" description="为你的账户充值，开启一件代发服务">
        <InfoCard 
          icon={DollarSign} 
          variant="default" 
          title="充值到OMS"
        >
          <p className="text-sm text-muted-foreground mb-2">
            登录OMS系统，进入充值页面，选择充值金额并完成支付。充值成功后即可使用所有服务。
          </p>
          <ChecklistGroup>
            <ChecklistItem>最低充值金额：1000元人民币</ChecklistItem>
            <ChecklistItem>支持支付宝、微信支付、银行转账</ChecklistItem>
            <ChecklistItem>充值金额实时到账，可立即使用</ChecklistItem>
          </ChecklistGroup>
        </InfoCard>
      </StepSection>

      <PageNavigation />
    </PageWrapper>
  )
}
