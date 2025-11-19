import { PageHeader } from '@/components/page-header'
import { PageNavigation } from '@/components/page-navigation'
import { PageWrapper } from '@/components/page-wrapper'

export default function CalculatePage() {
  return (
    <PageWrapper>
      <PageNavigation position="top" />
      
      <PageHeader
        stepNumber={2}
        title="试算一件代发精确成本"
        description="使用在线计算器精确计算物流、仓储、快递费用，帮助你评估业务可行性。"
      />

      {/* 页面内容暂时留空 */}

      <PageNavigation />
    </PageWrapper>
  )
}
