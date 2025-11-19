'use client'

import { StepSection } from '@/components/step-section'
import { PageHeader } from '@/components/page-header'
import { SectionHeader } from '@/components/section-header'
import { InfoCard } from '@/components/info-card'
import { PageNavigation } from '@/components/page-navigation'
import { CardGroup } from '@/components/card-group'
import { useUnlock } from '@/lib/unlock-context'
import { LockedContent } from '@/components/locked-content'
import { PageWrapper } from '@/components/page-wrapper'

export default function SupportPage() {
  const { isUnlocked } = useUnlock()

  if (!isUnlocked) {
    return (
      <PageWrapper isLocked>
        <LockedContent
          title="处理异常情况"
          description="了解如何处理物流异常、OMS系统问题等特殊情况，掌握索赔和协助流程。开户后，您将获得完整的异常处理指南。"
        />
      </PageWrapper>
    )
  }

  return (
    <PageWrapper>
      <PageNavigation position="top" />
      
      <PageHeader
        stepNumber={9}
        title="处理异常情况"
        description="轻松应对物流履约、OMS使用过程中的特殊情况。"
      />

      <StepSection title="物流异常">
        <SectionHeader icon="✈️" title="国际物流" />

        <CardGroup columns={2}>
          <InfoCard
            title="商品丢失"
            description="商品在运输途中丢失。"
            primaryAction={{ text: '索赔', href: 'https://work.weixin.qq.com/ca/cawcdef7cd05264c7a' }}
            secondaryAction={{ text: '规则', href: '/guide/promise#lost-goods' }}
          />
          <InfoCard
            title="商品被查没"
            description="商品和申报信息完全合规，但被海关等监管部门查没。"
            primaryAction={{ text: '索赔', href: 'https://work.weixin.qq.com/ca/cawcdef7cd05264c7a' }}
            secondaryAction={{ text: '规则', href: '/guide/promise#seized-goods' }}
          />
          <InfoCard
            title="延误送达"
            description="海运超过30天、空运超过10天仍未送达海外仓。"
            primaryAction={{ text: '催促', href: 'https://work.weixin.qq.com/ca/cawcdef7cd05264c7a' }}
            secondaryAction={{ text: '规则', href: '/guide/promise#international-shipping' }}
          />
        </CardGroup>

        <SectionHeader icon="🏭" title="海外仓" />

        <CardGroup columns={2}>
          <InfoCard
            title="延迟入库"
            description="收货超过5个工作日仍未上架。"
            primaryAction={{ text: '催促', href: 'https://work.weixin.qq.com/ca/cawcdef7cd05264c7a' }}
            secondaryAction={{ text: '规则', href: '/guide/promise#warehouse-receipt' }}
          />
          <InfoCard
            title="延迟出库"
            description="提交入库单超过48小时仍未出库。"
            primaryAction={{ text: '催促', href: 'https://work.weixin.qq.com/ca/cawcdef7cd05264c7a' }}
            secondaryAction={{ text: '规则', href: '/guide/promise#warehouse-shipment' }}
          />

          <InfoCard
            title="商品丢失"
            description="商品在海外仓丢失。"
            primaryAction={{ text: '索赔', href: 'https://work.weixin.qq.com/ca/cawcdef7cd05264c7a' }}
            secondaryAction={{ text: '规则', href: '/guide/promise#lost-goods' }}
          />

          <InfoCard
            title="商品损坏"
            description="商品在海外仓损坏。"
            primaryAction={{ text: '索赔', href: 'https://work.weixin.qq.com/ca/cawcdef7cd05264c7a' }}
            secondaryAction={{ text: '规则', href: '/guide/promise#damaged-goods' }}
          />
        </CardGroup>

        <SectionHeader icon="🚚" title="海外快递" />

        <CardGroup columns={2}>
          <InfoCard
            title="出库后无轨迹"
            description="长时间无物流轨迹。"
            primaryAction={{ text: '补发', href: 'https://work.weixin.qq.com/ca/cawcdef7cd05264c7a' }}
            secondaryAction={{ text: '规则', href: '/guide/promise#assist-tracking' }}
          />

          <InfoCard
            title="出库后未送达"
            description="轨迹长时间未更新，或快递公司显示已签收但买家未收到。"
            primaryAction={{ text: '补发', href: 'https://work.weixin.qq.com/ca/cawcdef7cd05264c7a' }}
            secondaryAction={{ text: '规则', href: '/guide/promise#assist-claim' }}
          />

          <InfoCard
            title="虚假面单"
            description="通过海海购买的快递面单被快递公司判定为虚假且申诉无效"
            primaryAction={{ text: '索赔', href: 'https://work.weixin.qq.com/ca/cawcdef7cd05264c7a' }}
            secondaryAction={{ text: '规则', href: '/guide/promise#fake-label' }}
          />
        </CardGroup>
      </StepSection>

      <StepSection title="OMS异常">
        <SectionHeader icon="📦" title="创建入库单" />

        <CardGroup columns={2}>
          <InfoCard
            title="入库单无法提交"
            description="入库单中的商品未审核导致，请联系海海客服。"
            primaryAction={{ text: '联系海海客服', href: 'https://work.weixin.qq.com/ca/cawcdef7cd05264c7a' }}
          />
        </CardGroup>

        <SectionHeader icon="📤" title="创建出库单" />

        <CardGroup columns={2}>
          <InfoCard
            title="平台订单获取失败"
            description="店铺授权、产品配对不正确导致，请重新设置。"
            primaryAction={{ text: '操作指引', href: '/guide/integration' }}
            secondaryAction={{ text: '联系OMS客服', href: 'https://oms.xlwms.com/' }}
          />
          
          <InfoCard
            title="平台面单请求失败"
            description="面单已在平台中被打印导致，请在电商平台中取消该面单。"
            primaryAction={{ text: '操作指引', href: '/guide/integration' }}
            secondaryAction={{ text: '联系OMS客服', href: 'https://oms.xlwms.com/' }}
          />

          <InfoCard
            title="海海面单请求失败"
            description="海海快递系统故障导致，请联系海海客服。"
            primaryAction={{ text: '联系海海客服', href: 'https://work.weixin.qq.com/ca/cawcdef7cd05264c7a' }}
          />

        </CardGroup>

        <SectionHeader icon="⚙️" title="其他" />

        <CardGroup columns={2}>
          <InfoCard
            title="扣费金额错误"
            description="商品、入库单、出库单、退件单中的数量、尺寸、重量错误导致，请联系海海客服修改。"
            primaryAction={{ text: '联系海海客服', href: 'https://work.weixin.qq.com/ca/cawcdef7cd05264c7a' }}
          />

          <InfoCard
            title="其他报错和问题"
            description="请联系OMS右上角的客服机器人获取帮助。"
            primaryAction={{ text: '联系OMS客服', href: 'https://oms.xlwms.com/' }}
          />
        </CardGroup>
      </StepSection>

      <PageNavigation />
    </PageWrapper>
  )
}
