import { StepSection } from '@/src/components/step-section'
import { PageHeader } from '@/src/components/page-header'
import { DetailCard } from '@/src/components/detail-card'
import { PageNavigation } from '@/src/components/page-navigation'
import { CardGroup } from '@/src/components/card-group'
import { NoteCard } from '@/src/components/note-card'
import { InfoCard } from '@/src/components/info-card'
import { ChecklistGroup } from '@/src/components/checklist-group'
import { ChecklistItem } from '@/src/components/checklist-item'
import { Ship, Plane, Package } from 'lucide-react'

export default function ShippingPage() {
  return (
    <>
      <PageHeader
        stepNumber={6}
        title="发货至海外仓"
        description="将商品发至集货仓，支付物流费用，等待海外仓上架"
      />

      <div className="space-y-8">
        <StepSection title="发货前检查" description="发货前请仔细检查以下各项，确保符合要求">
          <InfoCard title="OMS中的商品信息">
            <ChecklistGroup columns={1}>
              <ChecklistItem>尺寸、重量、申报价格准确</ChecklistItem>
              <ChecklistItem>SKU与电商平台的SKU一致（推荐）</ChecklistItem>
            </ChecklistGroup>
          </InfoCard>

          <InfoCard title="OMS中的入库单信息">
            <ChecklistGroup columns={1}>
              <ChecklistItem>海外仓、到仓方式、入库类型正确</ChecklistItem>
              <ChecklistItem>箱子和产品的数量、尺寸、重量准确</ChecklistItem>
              <ChecklistItem>入库单已提交审核</ChecklistItem>
            </ChecklistGroup>
          </InfoCard>

          <InfoCard title="商品">
            <ChecklistGroup columns={1}>
              <ChecklistItem>均已使用不透明包材独立包装</ChecklistItem>
              <ChecklistItem>包好的商品有一面大于100×150mm</ChecklistItem>
              <ChecklistItem>包装上的条码都可以被扫描</ChecklistItem>
            </ChecklistGroup>
          </InfoCard>

          <InfoCard title="纸箱">
            <ChecklistGroup columns={1}>
              <ChecklistItem>每个纸箱上至少有一处Made in China</ChecklistItem>
              <ChecklistItem>每个海运纸箱上应有4张标签，空运应有6张标签</ChecklistItem>
              <ChecklistItem>每个纸箱混装不超过4种商品，并已做好物理分隔</ChecklistItem>
            </ChecklistGroup>
          </InfoCard>
        </StepSection>

        <StepSection title="发货与运费" description="将商品发往国内集货仓，支付国际物流费用">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">国内集货仓地址</h3>
              <p className="text-sm text-gray-600 mb-4">根据物流方式选择对应的集货仓地址</p>
              <div className="space-y-3">
                <InfoCard>
                  <div className="flex items-center gap-2 mb-3">
                    <Ship className="h-5 w-5 text-blue-600" />
                    <span className="font-semibold text-base">海运普货（华南）</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">收件人：</span>
                      <span className="font-medium">周毅转海海</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">电话：</span>
                      <span className="font-medium">13423409759</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">地址：</span>
                      <span className="font-medium text-right text-xs">深圳市宝安区福海街道塘尾社区南玻大道4号南玻集团绿色产业园6栋优仓</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">收货时间：</span>
                      <span className="font-medium">周一至周六（9:00～21:00）</span>
                    </div>
                  </div>
                </InfoCard>

                <InfoCard>
                  <div className="flex items-center gap-2 mb-3">
                    <Ship className="h-5 w-5 text-blue-600" />
                    <span className="font-semibold text-base">海运普货（华东）</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">收件人：</span>
                      <span className="font-medium">周毅转海海</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">电话：</span>
                      <span className="font-medium">13423409759</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">地址：</span>
                      <span className="font-medium text-right text-xs">金华市金东区宏业路1800号京东园区2期4库1楼1号优仓</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">收货时间：</span>
                      <span className="font-medium">周一至周六（9:00～21:00）</span>
                    </div>
                  </div>
                </InfoCard>

                <InfoCard>
                  <div className="flex items-center gap-2 mb-3">
                    <Package className="h-5 w-5 text-blue-600" />
                    <span className="font-semibold text-base">海运敏货（华南）</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">收件人：</span>
                      <span className="font-medium">朱生转海海</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">电话：</span>
                      <span className="font-medium">13828834471</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">地址：</span>
                      <span className="font-medium text-right text-xs">深圳市宝安区福海街道展城社区景芳路152号来事达工业园综合楼104号</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">收货时间：</span>
                      <span className="font-medium">周一至周六（9:00～21:00）</span>
                    </div>
                  </div>
                </InfoCard>

                <InfoCard>
                  <div className="flex items-center gap-2 mb-3">
                    <Plane className="h-5 w-5 text-blue-600" />
                    <span className="font-semibold text-base">空运</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">收件人：</span>
                      <span className="font-medium">袁先生转海海</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">电话：</span>
                      <span className="font-medium">13934547849</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">地址：</span>
                      <span className="font-medium text-right text-xs">东莞市洪梅镇尧均工业路1号之二工业园区</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">收货时间：</span>
                      <span className="font-medium">周一至周日（9:00～24:00）</span>
                    </div>
                  </div>
                </InfoCard>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">支付运费</h3>
              <p className="text-sm text-gray-600 mb-4">商品到达国内集货仓后，我们将复核品类、尺寸和重量</p>
              <DetailCard
                title="自动扣费"
                description="我们将出具国际物流的最终报价。国际物流费用请充值至OMS，系统将自动扣除。费用将从您的OMS账户余额中自动扣除，请确保账户余额充足。"
              />
            </div>
          </div>
        </StepSection>

        <StepSection title="等待海外仓上架" description="确认收货时，系统会自动扣除入库费">
          <CardGroup columns={2}>
            <DetailCard
              title="商品包装未贴条码"
              description="海外仓代为处理，并扣除对应费用"
            />
            <DetailCard
              title="商品未按要求包装"
              description="海外仓代为处理，并扣除对应费用"
            />
            <DetailCard
              title="商品未按要求混装"
              description="海外仓代为处理，并扣除对应费用"
            />
            <DetailCard
              title="要求核实商品后上架"
              description="海外仓代为处理，并扣除对应费用"
              secondaryAction={{ text: '查看海外仓费用标准', href: 'https://sseeaa.cc/warehouse-landing' }}
            />
          </CardGroup>

          <NoteCard>
            上架后：上架时，海外仓可能会复核商品尺寸和重量，并在OMS中予以修正，确保一件代发时扣除正确的海外快递费用。
          </NoteCard>

          <CardGroup columns={2}>
            <DetailCard
              title="查看商品信息"
              description="确认商品的尺寸、重量等信息是否正确"
              secondaryAction={{ text: '前往商品列表', href: 'https://oms.xlwms.com/product/list' }}
            />
            <DetailCard
              title="查看库存报表"
              description="查看海外仓的实时库存情况"
              primaryAction={{ text: '前往库存报表', href: 'https://oms.xlwms.com/report/stock' }}
            />
          </CardGroup>
        </StepSection>

        <PageNavigation
          previousPage={{ href: '/guide/prepare', label: '上一步：准备你的商品' }}
          nextPage={{ href: '/guide/integration', label: '下一步：拉取平台订单' }}
        />
      </div>
    </>
  )
}
