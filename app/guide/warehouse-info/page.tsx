'use client'

import { StepSection } from '@/components/step-section'
import { PageHeader } from '@/components/page-header'
import { InfoCard } from '@/components/info-card'
import { PageNavigation } from '@/components/page-navigation'
import { ChecklistGroup, ChecklistItem } from '@/components/checklist-item'
import { MapPin, FileText } from 'lucide-react'
import { useUnlock } from '@/lib/unlock-context'
import { LockedContent } from '@/components/locked-content'
import { PageWrapper } from '@/components/page-wrapper'

export default function WarehouseInfoPage() {
  const { isUnlocked } = useUnlock()

  if (!isUnlocked) {
    return (
      <PageWrapper isLocked>
        <LockedContent
          icon={MapPin}
          title="获得海外仓地址和资质"
          description="了解如何获取海外仓地址、申请水电账单等资质文件。开户后，您将获得详细的地址信息和完整的申请流程指导。"
        />
      </PageWrapper>
    )
  }

  return (
    <PageWrapper>
      <PageNavigation position="top" />
      
      <PageHeader
        stepNumber={4}
        title="获得海外仓地址和资质"
        description="部分电商平台要求卖家在开店时提供海外仓地址等信息"
      />

      <StepSection title="申请资质" description="根据克值情况提供不同级别的地址信息">
        <InfoCard 
          icon={MapPin} 
          variant="default" 
          title="申报资质"
        >
          <ChecklistGroup>
            <ChecklistItem>当店铺被电商平台要求进行身份验证时，我们可以提供海外仓的水电账单、供你申请使用。</ChecklistItem>
            <ChecklistItem>完成预充值后，请联系海海客服申请。</ChecklistItem>
          </ChecklistGroup>
        </InfoCard>

        <InfoCard 
          icon={FileText} 
          variant="default" 
          title="完成预充值前"
        >
          <ChecklistGroup>
            <ChecklistItem>可以向你提供海外仓的地址信息</ChecklistItem>
          </ChecklistGroup>
        </InfoCard>
      </StepSection>

      <PageNavigation />
    </PageWrapper>
  )
}
