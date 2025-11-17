import { StepSection } from '@/src/components/step-section'
import { PageHeader } from '@/src/components/page-header'
import { SectionHeader } from '@/src/components/section-header'
import { DetailCard } from '@/src/components/detail-card'
import { CardGroup } from '@/src/components/card-group'
import { SectionDescription } from '@/src/components/section-description'
import { PageNavigation } from '@/src/components/page-navigation'
import { InfoCard } from '@/src/components/info-card'
import { ChecklistItem } from '@/src/components/checklist-item'
import { ChecklistGroup } from '@/src/components/checklist-group'
import { LinkButton } from '@/src/components/link-button'
import { NoteCard } from '@/src/components/note-card'
import { Package, Box, Tags } from 'lucide-react'

export default function PreparePage() {
  return (
    <>
      <PageHeader
        stepNumber={5}
        title="准备你的商品"
        description="创建商品、打包、装箱、粘贴箱唛，完成发货前的所有准备工作"
      />

      <div className="space-y-8">
          <StepSection title="在OMS中创建商品" description="OMS中的商品（SKU）可以是一件货，也可以是多件货的组合">
            <SectionDescription>
              例如，包含两款不同穿戴甲的促销套装，就是一个商品。<span className="font-semibold">将组合商品发往海外仓时，必须打包至可以直接发货的状态。</span>
            </SectionDescription>

            <InfoCard>
              <h4 className="font-semibold text-sm mb-3">创建商品时必须填写以下13项信息：</h4>
              <ChecklistGroup columns={2}>
                <ChecklistItem>产品图片：真实的商品照片</ChecklistItem>
                <ChecklistItem>产品名称：自定义商品名称</ChecklistItem>
                <ChecklistItem>SKU：商品自定义编码</ChecklistItem>
                <ChecklistItem>产品描述：商品材质和品牌名</ChecklistItem>
                <ChecklistItem>尺寸：商品打包后的尺寸</ChecklistItem>
                <ChecklistItem>重量：商品打包后的重量</ChecklistItem>
                <ChecklistItem>产品条码：EAN/UPC条码</ChecklistItem>
                <ChecklistItem>申报中文名：准确描述材质品类</ChecklistItem>
                <ChecklistItem>申报英文名：与中文名对应</ChecklistItem>
                <ChecklistItem>申报价格：补税和赔付依据</ChecklistItem>
                <ChecklistItem>原产地：实际生产国</ChecklistItem>
                <ChecklistItem>所属危险品：特别是带电池商品</ChecklistItem>
                <ChecklistItem>海关编码</ChecklistItem>
              </ChecklistGroup>
              <p className="text-xs text-red-600 mt-3">这些数据（特别是尺寸、重量、申报价格）是所有环节操作和计费的依据，请务必准确提供。</p>
            </InfoCard>

            <div className="flex gap-3">
              <LinkButton
                href="https://oms.xlwms.com/product/list"
                variant="default"
                className="flex-1"
              >
                前往 OMS 创建商品
              </LinkButton>
              <LinkButton
                href="https://hsciq.com/HSCN"
                variant="outline"
                className="flex-1"
              >
                查询海关编码
              </LinkButton>
            </div>

            <NoteCard>
              填写后请提交审核，草稿状态的商品无效。
            </NoteCard>
          </StepSection>

          <StepSection title="准备包装材料" description="海外人工和耗材成本极高，请在国内完成所有打包工作">
            <SectionDescription>
              让海外仓在一件代发时，仅负责拣货、粘贴快递面单、交付快递公司3件事。
            </SectionDescription>

            <SectionHeader icon={Box} title="必备耗材" />

            <CardGroup columns={1}>
              <DetailCard
                title="商品包装材料"
                description="必须使用不透明快递袋、气泡袋或纸箱，避免损坏和快递漏扫"
              />

              <DetailCard
                title="国际物流纸箱"
                description="建议使用50×40×40cm左右的标准纸箱，过小、过大或异形可能产生额外费用"
              />

              <DetailCard
                title="热敏打印机"
                description="用于打印商品条码和箱唛，最大装纸宽度应大于100mm"
              />

              <DetailCard
                title="热敏打印纸"
                description="应准备30×50mm和100×150mm两种尺寸"
              />
            </CardGroup>

            <NoteCard variant="warning">
              如果你可能存在一票多件订单，需要海外仓将多个商品合并发货，建议采购足量的大号快递袋随商品发往海外仓，以节省在海外采购耗材的成本。
            </NoteCard>
          </StepSection>

          <StepSection title="商品打包" description="请严格按照以下流程和要求打包，避免额外收费">
            <div className="space-y-4">
              <SectionHeader icon={Package} title="逐一打包商品" />

              <InfoCard>
                <h4 className="font-semibold text-sm mb-3">每件商品都必须进行独立包装，并同时满足以下要求：</h4>
                <ChecklistGroup columns={1}>
                  <ChecklistItem>必须使用不透明的快递袋、气泡袋或纸箱包装</ChecklistItem>
                  <ChecklistItem>必须达到可直接发货的标准，无需海外仓进一步加工</ChecklistItem>
                  <ChecklistItem>包装后必须有一面大于快递面单（100×150mm）且不易弯折</ChecklistItem>
                </ChecklistGroup>
                <p className="text-xs text-red-600 mt-3">如果包装无法达到以上标准，我们将收取额外的包装费用。</p>
              </InfoCard>
            </div>

            <div className="space-y-4 mt-12">
              <SectionHeader icon={Tags} title="粘贴或印刷商品条码" />

              <SectionDescription>
                每件商品的包装上，都必须粘贴或印刷可被OMS扫描的条码，你可以使用以下任意一种形式的条码。
              </SectionDescription>

              <DetailCard
                title="OMS生成的条码（推荐）"
                description="为确保条码可被扫描，无论商品是否自带条码，都建议统一使用OMS生成并粘贴。打印尺寸：50×30mm，条码类型：条形码，编码类型：SKU。"
              />

              <DetailCard
                title="商品自带的EAN/UPC条码"
                description="如果你的商品包装自带印刷的EAN/UPC条码，必须确保该条码可被扫描，且扫描结果（12或13位数字）与你在OMS中填写的产品条码完全一致。"
              />

              <LinkButton
                href="https://oms.xlwms.com/product/list"
                variant="default"
                className="w-full"
              >
                前往 OMS 打印条码
              </LinkButton>

              <NoteCard variant="warning">
                如果包装上没有可被扫描的正确条码，我们将收取额外的贴标费用。
              </NoteCard>
            </div>
          </StepSection>

          <StepSection title="商品装箱" description="为降低丢货风险，请按以下要求进行装箱">
            <SectionDescription>
              一个纸箱中最多混装4种商品，且必须采用以下任意方式进行物理分隔：
            </SectionDescription>

            <CardGroup columns={1}>
              <DetailCard
                title="在纸箱中放置挡板"
                description="在纸箱中放置坚硬稳固的挡板，划分出多个区域，每个区域仅放置一种商品"
              />

              <DetailCard
                title="用不同颜色的口袋包裹"
                description="将纸箱中的多种商品，分别装入不同颜色的独立口袋，在口袋上粘贴商品条码"
              />
            </CardGroup>

            <NoteCard>
              我们强烈建议你同时采用以上2种方式混装，以减少运输过程中的颠簸，确保海外仓开箱时看到的商品状态与打包时一致。
            </NoteCard>

            <NoteCard variant="warning">
              如果未按要求进行物理分隔，我们将收取额外的清点费用。
            </NoteCard>
          </StepSection>

          <StepSection title="在OMS中创建入库单" description="入库单是你向海外仓发货的唯一凭证和国际物流的计费依据">
            <SectionDescription>
              每次发货都必须创建一张入库单，请按实际装箱情况准确填写以下4项信息：
            </SectionDescription>

            <CardGroup columns={1}>
              <DetailCard
                title="仓库"
                description="选择你要将商品送达的海外仓"
              />

              <DetailCard
                title="到仓方式"
                description="集装箱整柜到仓：选择对应尺寸的货柜；其他方式到仓：选择箱"
              />

              <DetailCard
                title="入库类型"
                description="选择常规入库"
              />

              <InfoCard>
                <h4 className="font-semibold text-sm mb-3">入库产品</h4>
                <p className="text-xs text-gray-500 mb-3">先添加箱子，再在箱子中添加产品。每添加一个箱子，都必须填写以下4项数据：</p>
                <ChecklistGroup columns={1}>
                  <ChecklistItem>箱子数量：相同装法的纸箱有几个</ChecklistItem>
                  <ChecklistItem>单箱数量：该纸箱中有几个该商品</ChecklistItem>
                  <ChecklistItem>箱子尺寸：完成装箱后的尺寸</ChecklistItem>
                  <ChecklistItem>箱子重量：完成装箱后的重量</ChecklistItem>
                </ChecklistGroup>
              </InfoCard>
            </CardGroup>

            <LinkButton
              href="https://oms.xlwms.com/warehouse/list"
              variant="default"
              className="w-full"
            >
              前往 OMS 创建入库单
            </LinkButton>

            <NoteCard>
              填写后请提交审核，草稿状态的入库单无效。
            </NoteCard>
          </StepSection>

          <StepSection title="粘贴箱唛和海海标识" description="箱唛和海海标识是各环节接收商品的依据，每个纸箱都必须粘贴">
            <CardGroup columns={1}>
              <DetailCard
                title="打印国际物流箱唛"
                description="海运无需国际物流箱唛，空运请在提交入库单8小时后，联系人工客服@袁萱获取，并使用100×150mm的热敏纸打印。"
              />

              <DetailCard
                title="打印海外仓箱唛"
                description="在OMS中，点击入库单右侧的「更多 - 打印箱唛」即可打印每个纸箱的箱唛。打印尺寸：100×150mm，列表行高：单行，编码类型：系统箱类型号。"
                note="附加信息：必须勾选Made in China（未勾选将面临海关罚款）"
              />

              <DetailCard
                title="打印海海标识"
                description="使用100×150mm的热敏纸打印。"
              />

              <div className="flex gap-2">
                <LinkButton
                  href="https://file.zuopin.cloud/SSEEAA_Label.jpg"
                  variant="outline"
                  className="flex-1"
                >
                  下载海海标识
                </LinkButton>
                <LinkButton
                  href="https://oms.xlwms.com/warehouse/list"
                  variant="default"
                  className="flex-1"
                >
                  前往 OMS
                </LinkButton>
              </div>

              <DetailCard
                title="粘贴箱唛和海海标识"
                description="为降低丢货风险，请在纸箱相邻两面各粘贴1张国际物流箱唛（如有）、1张海外仓箱唛和1张海海标识，共4张或6张。"
              />
            </CardGroup>
          </StepSection>

          <StepSection title="准备报关材料（仅针对部分大卖）">
            <SectionDescription>
              海海默认提供双清包税的国际物流服务，海运和空运价格均已包含报关费用和各项进出口税费。如果你有单独报关的需求，请在发货至海外仓前向人工客服@袁萱提供以下6份材料：
            </SectionDescription>

            <CardGroup columns={2}>
              <DetailCard title="货物出口合同" description="需要单独报关时提供" />
              <DetailCard title="出口商业发票" description="需要单独报关时提供" />
              <DetailCard title="出口货物装箱单" description="需要单独报关时提供" />
              <DetailCard title="出口货物报关单" description="需要单独报关时提供" />
              <DetailCard title="出口货物报关委托书" description="需要单独报关时提供" />
              <DetailCard title="进出口货物规范申报要素" description="需要单独报关时提供" />
            </CardGroup>
          </StepSection>

        <PageNavigation
          previousPage={{ href: '/guide/warehouse-info', label: '上一步：获得海外仓地址和资质' }}
          nextPage={{ href: '/guide/shipping', label: '下一步：发货至海外仓' }}
        />
      </div>
    </>
  )
}
