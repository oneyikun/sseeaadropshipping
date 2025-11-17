import { StepSection } from '@/components/step-section'
import { PageHeader } from '@/components/page-header'
import { DetailCard } from '@/components/detail-card'
import { PageNavigation } from '@/components/page-navigation'
import { CardGroup } from '@/components/card-group'

export default function WarehouseInfoPage() {
  return (
    <>
      <PageHeader
        stepNumber={4}
        title="获得海外仓地址和资质"
        description="部分电商平台要求卖家在开店时提供海外仓地址等信息"
      />

      <div className="space-y-8">
        <StepSection title="海外仓地址获取" description="根据充值情况提供不同级别的地址信息">
          <CardGroup columns={2}>
            <DetailCard
              title="完成预充值前"
              description="可以向你提供精确到街道的模糊地址"
            />

            <DetailCard
              title="预充值完成后"
              description="将提供完整地址"
            />
          </CardGroup>
        </StepSection>

        <StepSection title="申诉资质" description="当店铺被电商平台处罚时可用的申诉材料">
          <DetailCard
            title="水电账单等资质文件"
            description="当你的店铺被电商平台处罚时，我们可以提供海外仓的水电账单，供你申诉使用。"
          />
        </StepSection>

        <PageNavigation
          previousPage={{ href: '/guide/account', label: '上一步：在海海开户' }}
          nextPage={{ href: '/guide/prepare', label: '下一步：准备你的商品' }}
        />
      </div>
    </>
  )
}
