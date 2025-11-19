'use client'

import { StepSection } from '@/components/step-section'
import { PageHeader } from '@/components/page-header'
import { SectionHeader } from '@/components/section-header'
import { InfoCard } from '@/components/info-card'
import { PageNavigation } from '@/components/page-navigation'
import { ChecklistItem, ChecklistGroup } from '@/components/checklist-item'
import { useUnlock } from '@/lib/unlock-context'
import { LockedContent } from '@/components/locked-content'
import { PageWrapper } from '@/components/page-wrapper'

export default function PreparePage() {
  const { isUnlocked } = useUnlock()

  if (!isUnlocked) {
    return (
      <PageWrapper isLocked>
        <LockedContent
          title="准备你的商品"
          description="了解如何在OMS系统中创建商品信息、准备包装材料、打包商品并创建入库单。开户后,您将获得详细的操作指南。"
        />
      </PageWrapper>
    )
  }

  return (
    <PageWrapper>
      <PageNavigation position="top" />
      
      <PageHeader
        stepNumber={5}
        title="准备你的商品"
        description="在OMS中创建商品、准备包装材料、完成打包并创建入库单"
      />

      <StepSection title="在OMS中创建商品" description="在系统中录入商品信息，为发货做准备">
        <InfoCard>
          <p className="text-sm text-muted-foreground">
            OMS中的商品（SKU）可以是一件货，也可以是多件货的组合。例如，包含两款不同穿戴甲的促销套装，就是一个商品。将组合商品发往海外仓时，必须打包至可以直接发货的状态。
          </p>
        </InfoCard>

        <InfoCard title="必填信息（13项）">
          <ChecklistGroup>
            <ChecklistItem>产品图片：真实的商品照片</ChecklistItem>
            <ChecklistItem>产品名称：自定义商品名称</ChecklistItem>
            <ChecklistItem>SKU：商品自定义编码，建议与电商平台中的商品自定义SKU保持一致</ChecklistItem>
            <ChecklistItem>产品描述：填写商品材质和品牌名2项信息</ChecklistItem>
            <ChecklistItem>尺寸：商品打包后的尺寸</ChecklistItem>
            <ChecklistItem>重量：商品打包后的重量</ChecklistItem>
            <ChecklistItem>产品条码：商品EAN/UPC条码（12或13位数字），没有条码的商品此处与SKU保持一致</ChecklistItem>
            <ChecklistItem>申报中文名：必须准确描述商品材质和品类</ChecklistItem>
            <ChecklistItem>申报英文名：必须与申报中文名对应</ChecklistItem>
            <ChecklistItem>申报价格：发生补税和赔付时以此为依据</ChecklistItem>
            <ChecklistItem>原产地：实际生产国</ChecklistItem>
            <ChecklistItem>所属危险品：必须如实选择，特别是带电池商品，不支持修改</ChecklistItem>
            <ChecklistItem>海关编码：准确填写对应的HS编码</ChecklistItem>
          </ChecklistGroup>
        </InfoCard>

        <InfoCard variant="warning" size="sm">
          这些数据（特别是尺寸、重量、申报价格）是所有环节操作和计费的依据，请务必准确提供。填写后请提交审核，草稿状态的商品无效。
        </InfoCard>
      </StepSection>

      <StepSection title="准备包装材料" description="准备商品打包和国际物流所需的各类材料">
        <InfoCard>
          <p className="text-sm text-muted-foreground">
            海外人工和耗材成本极高，请在国内完成所有打包工作，让海外仓在一件代发时，仅负责拣货、粘贴快递面单、交付快递公司3件事。
          </p>
        </InfoCard>

        <InfoCard title="商品包装材料">
          <p className="text-sm text-muted-foreground">
            用于打包商品，必须使用不透明快递袋、气泡袋或纸箱，避免损坏和快递漏扫。
          </p>
        </InfoCard>

        <InfoCard title="国际物流纸箱">
          <p className="text-sm text-muted-foreground">
            用于将商品发往海外仓，建议使用50×40×40cm左右的标准纸箱，过小、过大或异形都可能产生额外费用。如果你可能存在一票多件订单，建议采购足量的大号快递袋随商品发往海外仓。
          </p>
        </InfoCard>

        <InfoCard title="热敏打印机和打印纸">
          <ChecklistGroup>
            <ChecklistItem>热敏打印机：用于打印商品条码和箱唛，最大装纸宽度应大于100mm</ChecklistItem>
            <ChecklistItem>打印纸：准备30×50mm和100×150mm两种尺寸</ChecklistItem>
          </ChecklistGroup>
        </InfoCard>

        <InfoCard title="其他包装材料">
          <p className="text-sm text-muted-foreground">
            泡沫、缠绕膜等常用包装耗材。
          </p>
        </InfoCard>
      </StepSection>

      <StepSection title="商品打包" description="按照标准流程打包商品，确保符合海外仓要求">
        <InfoCard variant="warning" size="sm">
          请严格按照以下流程和要求打包，避免额外收费。
        </InfoCard>

        <InfoCard title="逐一打包商品">
          <p className="text-sm text-muted-foreground mb-3">
            每件商品都必须进行独立包装，并同时满足以下要求：
          </p>
          <ChecklistGroup columns={1}>
            <ChecklistItem>必须使用不透明的快递袋、气泡袋或纸箱包装</ChecklistItem>
            <ChecklistItem>必须达到可直接发货的标准，无需海外仓进一步加工</ChecklistItem>
            <ChecklistItem>包装后必须有一面大于快递面单（100×150mm）且不易弯折</ChecklistItem>
          </ChecklistGroup>
          <p className="text-sm text-muted-foreground mt-3">
            如果包装无法达到以上标准，我们将收取额外的包装费用。
          </p>
        </InfoCard>

        <InfoCard title="粘贴或印刷商品条码">
          <p className="text-sm text-muted-foreground mb-3">
            为确保条码可被扫描，无论商品是否自带条码，都建议统一使用OMS生成并粘贴。
          </p>
        </InfoCard>
        
        <InfoCard title="OMS生成的条码（推荐）">
          <p className="text-sm text-muted-foreground mb-3">
            在OMS的产品管理中，点击商品右侧的「更多 - 打印条码」即可生成。
          </p>
          <ChecklistGroup columns={1}>
            <ChecklistItem>打印尺寸：50×30mm</ChecklistItem>
            <ChecklistItem>条码类型：条形码</ChecklistItem>
            <ChecklistItem>编码类型：SKU</ChecklistItem>
            <ChecklistItem>产品名称：产品名称</ChecklistItem>
            <ChecklistItem>附加信息：勾选Made in China</ChecklistItem>
            <ChecklistItem>打印份数：每件商品都要贴</ChecklistItem>
          </ChecklistGroup>
        </InfoCard>

        <InfoCard title="商品自带的EAN/UPC条码">
          <p className="text-sm text-muted-foreground">
            如果你的商品包装自带印刷的EAN/UPC条码，必须确保该条码可被扫描，且扫描结果（12或13位数字）与你在OMS中填写的产品条码完全一致。如果包装上没有可被扫描的正确条码，我们将收取额外的贴标费用。
          </p>
        </InfoCard>

        <InfoCard title="商品装箱">
          <p className="text-sm text-muted-foreground mb-3">
            为降低丢货风险，一个纸箱中最多混装4种商品，且必须采用以下任意方式进行物理分隔，否则我们将收取额外的清点费用：
          </p>
          <ChecklistGroup columns={1}>
            <ChecklistItem>在纸箱中放置挡板：划分出多个区域，每个区域仅放置一种商品</ChecklistItem>
            <ChecklistItem>用不同颜色的口袋包裹：将多种商品分别装入不同颜色的独立口袋，在口袋上粘贴商品条码</ChecklistItem>
          </ChecklistGroup>
          <p className="text-sm text-muted-foreground mt-3">
            我们强烈建议你同时采用以上2种方式混装，以减少运输过程中的颠簸。
          </p>
        </InfoCard>
      </StepSection>

      <StepSection title="在OMS中创建入库单" description="生成发货凭证和国际物流计费依据">
        <InfoCard>
          <p className="text-sm text-muted-foreground">
            入库单是你向海外仓发货的唯一凭证和国际物流的计费依据，每次发货都必须创建一张入库单。
          </p>
        </InfoCard>

        <InfoCard title="必填信息（4项）">
          <ChecklistGroup columns={1}>
            <ChecklistItem>仓库：选择你要将商品送达的海外仓</ChecklistItem>
            <ChecklistItem>到仓方式：集装箱整柜到仓选择对应尺寸的货柜，其他方式选择箱</ChecklistItem>
            <ChecklistItem>入库类型：选择常规入库</ChecklistItem>
            <ChecklistItem>入库产品：先添加箱子，再在箱子中添加产品</ChecklistItem>
          </ChecklistGroup>
        </InfoCard>

        <InfoCard variant="info" size="sm">
          每添加一个箱子，都必须填写箱子数量、单箱数量、箱子尺寸、箱子重量，必须与实际装箱情况完全一致。填写后请提交审核，草稿状态的入库单无效。
        </InfoCard>
      </StepSection>

      <StepSection title="粘贴箱唛和海海标识" description="为每个纸箱粘贴必要的标识标签">
        <InfoCard>
          <p className="text-sm text-muted-foreground">
            箱唛（即纸箱中的商品清单）和海海标识是各环节接收商品的依据，每个纸箱都必须粘贴，否则存在遗失风险。
          </p>
        </InfoCard>

        <InfoCard title="打印流程">
          <ChecklistGroup columns={1}>
            <ChecklistItem>打印国际物流箱唛：海运无需，空运请在提交入库单8小时后联系人工客服获取，使用100×150mm热敏纸打印</ChecklistItem>
            <ChecklistItem>打印海外仓箱唛：在OMS的入库中，点击入库单右侧的「更多 - 打印箱唛」</ChecklistItem>
            <ChecklistItem>打印海海标识：下载后使用100×150mm热敏纸打印</ChecklistItem>
          </ChecklistGroup>
        </InfoCard>

        <InfoCard title="打印箱唛设置">
          <ChecklistGroup columns={1}>
            <ChecklistItem>打印范围：按系统默认</ChecklistItem>
            <ChecklistItem>打印份数：按系统默认</ChecklistItem>
            <ChecklistItem>打印尺寸：100×150mm</ChecklistItem>
            <ChecklistItem>列表行高：单行</ChecklistItem>
            <ChecklistItem>编码类型：系统箱类型号</ChecklistItem>
            <ChecklistItem>附加信息：勾选Made in China（未勾选将面临海关罚款）</ChecklistItem>
            <ChecklistItem>其他：无需勾选</ChecklistItem>
          </ChecklistGroup>
        </InfoCard>

        <InfoCard variant="warning" size="sm">
          为降低丢货风险，请在纸箱相邻两面各粘贴1张国际物流箱唛（如有）、1张海外仓箱唛和1张海海标识，共4张或6张。
        </InfoCard>
      </StepSection>

      <StepSection title="准备报关材料（仅针对部分大卖）" description="独立清关商家需准备的报关文件">
        <InfoCard>
          <p className="text-sm text-muted-foreground mb-3">
            海海默认提供双清包税的国际物流服务，海运和空运价格均已包含报关费用和各项进出口税费。如果你有单独报关的需求，请在发货至海外仓前向人工客服@袁萱提供以下6份材料。
          </p>
        </InfoCard>

        <InfoCard title="所需材料">
          <ChecklistGroup columns={1}>
            <ChecklistItem>货物出口合同</ChecklistItem>
            <ChecklistItem>出口商业发票</ChecklistItem>
            <ChecklistItem>出口货物装箱单</ChecklistItem>
            <ChecklistItem>出口货物报关单</ChecklistItem>
            <ChecklistItem>出口货物报关委托书</ChecklistItem>
            <ChecklistItem>进出口货物规范申报要素</ChecklistItem>
          </ChecklistGroup>
        </InfoCard>
      </StepSection>

      <PageNavigation />
    </PageWrapper>
  )
}
