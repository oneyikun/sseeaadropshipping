import { StepSection } from '@/src/components/step-section'
import { PageHeader } from '@/src/components/page-header'
import { SectionHeader } from '@/src/components/section-header'
import { DetailCard } from '@/src/components/detail-card'
import { SectionDescription } from '@/src/components/section-description'
import { PageNavigation } from '@/src/components/page-navigation'
import { CardGroup } from '@/src/components/card-group'
import { NoteCard } from '@/src/components/note-card'
import { AlertTriangle, Truck, Warehouse, Plane, Settings } from 'lucide-react'

export default function SupportPage() {
  return (
    <>
      <PageHeader
        stepNumber={9}
        title="处理异常情况"
        description="物流履约、OMS使用问题的解决方案"
      />

      <div className="space-y-8">
          <StepSection title="物流履约">
            <div className="space-y-8">
              {/* 国际物流 */}
              <div className="space-y-4">
                <SectionHeader icon={Plane} title="国际物流" />

                <CardGroup columns={2}>
                  <DetailCard
                    title="国际物流延误"
                    description="海运普货或敏货超过30天工作日、空运超过10天工作日仍未送达海外仓"
                    primaryAction={{ text: '催促', href: 'https://work.weixin.qq.com/ca/cawcdef7cd05264c7a' }}
                    secondaryAction={{ text: '查看承诺', href: '/guide/promise#international-shipping' }}
                  />

                  <DetailCard
                    title="商品被查没"
                    description="商品和申报信息完全合规，但在国际物流环节被监管部门查没"
                    primaryAction={{ text: '索赔', href: 'https://work.weixin.qq.com/ca/cawcdef7cd05264c7a' }}
                    secondaryAction={{ text: '查看承诺', href: '/guide/promise#seized-goods' }}
                  />

                  <DetailCard
                    title="国际物流丢件"
                    description="商品已被集货仓签收但在运输途中丢失"
                    primaryAction={{ text: '索赔', href: 'https://work.weixin.qq.com/ca/cawcdef7cd05264c7a' }}
                    secondaryAction={{ text: '查看承诺', href: '/guide/promise#lost-goods' }}
                  />
                </CardGroup>
              </div>

              {/* 海外仓 */}
              <div className="space-y-4">
                <SectionHeader icon={Warehouse} title="海外仓" />

                <CardGroup columns={2}>
                  <DetailCard
                    title="海外仓延迟入库"
                    description="海外仓确认收货后超过5个工作日仍未上架"
                    primaryAction={{ text: '催促', href: 'https://work.weixin.qq.com/ca/cawcdef7cd05264c7a' }}
                    secondaryAction={{ text: '查看承诺', href: '/guide/promise#warehouse-receipt' }}
                  />

                  <DetailCard
                    title="海外仓延迟出库"
                    description="工作日上午11:00前下单未当天出库，或其他时间下单超过48小时仍未出库"
                    primaryAction={{ text: '催促', href: 'https://work.weixin.qq.com/ca/cawcdef7cd05264c7a' }}
                    secondaryAction={{ text: '查看承诺', href: '/guide/promise#warehouse-shipment' }}
                  />

                  <DetailCard
                    title="海外仓丢件"
                    description="商品在海外仓丢失，或海外快递显示已签收但海外仓实际未收到"
                    primaryAction={{ text: '索赔', href: 'https://work.weixin.qq.com/ca/cawcdef7cd05264c7a' }}
                    secondaryAction={{ text: '查看承诺', href: '/guide/promise#lost-goods' }}
                  />

                  <DetailCard
                    title="海外仓损毁商品"
                    description="商品入库后已按要求逐件清点，后续发现丢失或损坏"
                    primaryAction={{ text: '索赔', href: 'https://work.weixin.qq.com/ca/cawcdef7cd05264c7a' }}
                    secondaryAction={{ text: '查看承诺', href: '/guide/promise#damaged-goods' }}
                  />
                </CardGroup>
              </div>

              {/* 海外快递 */}
              <div className="space-y-4">
                <SectionHeader icon={Truck} title="海外快递" />

                <CardGroup columns={2}>
                  <DetailCard
                    title="一件代发的商品无轨迹"
                    description="出库后长时间无物流轨迹更新，影响平台要求"
                    primaryAction={{ text: '补发', href: 'https://work.weixin.qq.com/ca/cawcdef7cd05264c7a' }}
                    secondaryAction={{ text: '查看指引', href: '/guide/promise#assist-tracking' }}
                  />

                  <DetailCard
                    title="一件代发的商品未送达"
                    description="海外快递显示已签收但买家未收到，或长时间无配送进展"
                    primaryAction={{ text: '联系客服', href: 'https://work.weixin.qq.com/ca/cawcdef7cd05264c7a' }}
                    secondaryAction={{ text: '免责声明', href: '/guide/promise#assist-claim' }}
                  />

                  <DetailCard
                    title="海外快递面单被判定为虚假"
                    description="通过海海购买的快递面单被快递公司判定为虚假且申诉无效"
                    primaryAction={{ text: '索赔', href: 'https://work.weixin.qq.com/ca/cawcdef7cd05264c7a' }}
                    secondaryAction={{ text: '查看承诺', href: '/guide/promise#fake-label' }}
                  />
                </CardGroup>
              </div>
            </div>
          </StepSection>

          <StepSection title="OMS使用">
            <div className="space-y-8">
              {/* 创建入库单 */}
              <div className="space-y-4">
                <SectionHeader icon={Settings} title="创建入库单" />

                <CardGroup columns={2}>
                  <DetailCard
                    title="入库：入库单无法提交"
                    description="入库单中的商品未完成审核，请联系人工客服@袁萱加急审核"
                    primaryAction={{ text: '联系客服', href: 'https://work.weixin.qq.com/ca/cawcdef7cd05264c7a' }}
                  />
                </CardGroup>
              </div>

              {/* 创建出库单 */}
              <div className="space-y-4">
                <SectionHeader icon={Settings} title="创建出库单" />

                <CardGroup columns={2}>
                  <DetailCard
                    title="出库：平台订单获取失败"
                    description="OMS中的店铺授权、产品配对设置不正确，请对照本手册中的指引检查"
                    primaryAction={{ text: '联系OMS客服', href: 'https://oms.xlwms.com/' }}
                    secondaryAction={{ text: '查看指引', href: '/guide/integration' }}
                  />

                  <DetailCard
                    title="出库：海海面单请求失败"
                    description="海海快递销售系统故障，请联系人工客服@袁萱解决"
                    primaryAction={{ text: '联系客服', href: 'https://work.weixin.qq.com/ca/cawcdef7cd05264c7a' }}
                  />

                  <DetailCard
                    title="出库：平台面单请求失败"
                    description="面单已在平台中被打印，OMS无法再次请求，请在电商平台中取消该面单"
                    primaryAction={{ text: '联系客服', href: 'https://work.weixin.qq.com/ca/cawcdef7cd05264c7a' }}
                    secondaryAction={{ text: '查看指引', href: '/guide/operations' }}
                  />
                </CardGroup>
              </div>

              {/* 其他 */}
              <div className="space-y-4">
                <SectionHeader icon={Settings} title="其他" />

                <CardGroup columns={2}>
                  <DetailCard
                    title="财务：扣费金额错误"
                    description="对应商品、入库单、出库单、退件单中的数量、尺寸、重量错误"
                    primaryAction={{ text: '查看费用流水', href: 'https://oms.xlwms.com/account/costFlow' }}
                    secondaryAction={{ text: '联系客服', href: 'https://work.weixin.qq.com/ca/cawcdef7cd05264c7a' }}
                  />

                  <DetailCard
                    title="其他报错和问题"
                    description="如遇到其他报错和问题，请联系OMS客服机器人获取帮助"
                    primaryAction={{ text: '联系OMS客服', href: 'https://oms.xlwms.com/' }}
                  />
                </CardGroup>
              </div>
            </div>
          </StepSection>

        <PageNavigation
          previousPage={{ href: '/guide/operations', label: '上一步：你的日常业务' }}
        />
      </div>
    </>
  )
}
