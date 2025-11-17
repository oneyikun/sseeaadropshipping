import { StepSection } from '@/components/step-section'
import { PageHeader } from '@/components/page-header'
import { SectionHeader } from '@/components/section-header'
import { DetailCard } from '@/components/detail-card'
import { SectionDescription } from '@/components/section-description'
import { PageNavigation } from '@/components/page-navigation'
import { InfoCard } from '@/components/info-card'
import { CardGroup } from '@/components/card-group'
import { LinkButton } from '@/components/link-button'
import { NoteCard } from '@/components/note-card'
import { Package, RotateCcw, Settings } from 'lucide-react'

export default function OperationsPage() {
  return (
    <>
      <PageHeader
        stepNumber={8}
        title="你的日常业务"
        description="一件代发、退货处置、滞销处理等日常运营操作"
      />

      <div className="space-y-8">
          <StepSection title="一件代发" description="商品售出后，请创建出库单通知我们发货">
            <div className="space-y-4">
              <SectionHeader icon={Package} title="平台订单（自动创建出库单）- 推荐" />

              <SectionDescription>
                为了降低出错率，OMS默认需要经过多次审核，才能完成平台订单一件代发。如果你认为没有必要，可以通过以下设置跳过所有审核，实现自动创建出库单和自动发货。
              </SectionDescription>

              <InfoCard>
                <div className="space-y-4">
                  <div>
                    <div className="font-semibold text-sm mb-2 text-gray-900">1) 自动分配仓库和物流</div>
                    <div className="text-xs text-gray-500 space-y-1 ml-4">
                      <p>• 在OMS中创建规则</p>
                      <p>• 使用海海面单请选择「SSEEAA海海 · 海外快递」</p>
                      <p>• 使用平台面单请选择「同步从电商平台购买的面单」</p>
                      <p>• 创建规则时，还须勾选「自动审核」</p>
                    </div>
                  </div>

                  <div>
                    <div className="font-semibold text-sm mb-2 text-gray-900">2) 跳过所有审核</div>
                    <div className="text-xs text-gray-500 space-y-1 ml-4">
                      <p>• 在平台订单列表中勾选「审核成功自动提交仓库」</p>
                      <p>• 在出库单管理中勾选「自动提交已获取面单和无需面单的出库单」</p>
                    </div>
                  </div>
                </div>
              </InfoCard>

              <div className="flex gap-2">
                <LinkButton href="https://oms.xlwms.com/system/orderRule/list" variant="default" className="flex-1">
                  创建规则
                </LinkButton>
                <LinkButton href="https://oms.xlwms.com/platform/order/list" variant="outline" className="flex-1">
                  平台订单
                </LinkButton>
              </div>
            </div>

            <div className="space-y-4 mt-12">
              <SectionHeader icon={Settings} title="平台订单（手动创建出库单）" />

              <SectionDescription>
                如果你想在发货前进行审核，则请关闭以上设置，在各环节进行手动操作。
              </SectionDescription>

              <InfoCard>
                <div className="space-y-2">
                  <div className="font-semibold text-sm mb-2 text-gray-900">使用海海的快递面单</div>
                  <ol className="text-xs text-gray-500 space-y-1 ml-4 list-decimal list-inside">
                    <li>在「待处理」中点击「分配仓库&物流」</li>
                    <li>物流选择「SSEEAA海海 · 海外快递」</li>
                    <li>在「草稿-待获取面单」中提交出库单</li>
                    <li>在「草稿-获取中」中留意面单获取情况</li>
                    <li>获取成功后在「草稿-待提交」中提交入库单</li>
                  </ol>
                </div>
              </InfoCard>

              <LinkButton href="https://oms.xlwms.com/warehouse/packet" variant="default" className="w-full">
                出库单管理
              </LinkButton>
            </div>

            <div className="space-y-4 mt-12">
              <SectionHeader icon={Package} title="非平台订单" />

              <SectionDescription>
                如果你的订单无法被OMS自动获取，或需要进行补发、重发等操作，请在OMS中点击「新建」或「导入」按钮，手动创建出库单。
              </SectionDescription>

              <InfoCard>
                <p className="font-semibold text-sm mb-3 text-gray-900">填写出库单时只能填写以下4项信息：</p>
                <div className="text-xs text-gray-500 space-y-1 ml-4">
                  <p>• 仓库：发货仓库</p>
                  <p>• 物流渠道：SSEEAA海海 · 海外快递</p>
                  <p>• 收件信息：如实填写</p>
                  <p>• 产品信息：如实选择</p>
                </div>
              </InfoCard>

              <NoteCard variant="warning">
                出库后，OMS会将平台订单的物流跟踪号自动同步至电商平台，非平台面单的物流跟踪号无法同步。
              </NoteCard>
            </div>
          </StepSection>

          <StepSection title="一件代发的特殊操作">
            <CardGroup columns={2}>
              <DetailCard
                title="出库前截单"
                description="遇到以下情况时，请在OMS中操作截单：实际库存不足以出库、客户取消下单或入库单填写错误、快递公司长时间未取件。"
              />

              <DetailCard
                title="出库后补发"
                description="遇到以下情况时，可以进行补发：长时间无物流轨迹（免费补发）、错发或海外快递丢件（收费补发）。补发操作请联系人工客服@袁萱。"
              />
            </CardGroup>
          </StepSection>

          <StepSection title="退货处置" description="商品出库后，可能会出现买家退货或快递退件的情况">
            <SectionDescription>
              <span className="font-semibold">买家退货：</span>当你收到退货申请后，请先判断该商品是否有二次销售价值。
            </SectionDescription>

            <CardGroup columns={2}>
              <DetailCard
                title="希望二次销售"
                description="在OMS中提交退件单。我们会拍照询问你的最终处置意见。可以二次销售的将上架，无法二次销售的将销毁。"
              />

              <DetailCard
                title="无需二次销售"
                description="如果你认为退货可以不经查验直接销毁，或退货的价值低于退货处理费，则无需提交退件单。我们一旦收到退货会将其直接销毁，过程中不产生任何费用。"
              />
            </CardGroup>

            <LinkButton href="https://oms.xlwms.com/returns/list" variant="default" className="w-full">
              前往退货管理
            </LinkButton>

            <NoteCard>
              <span className="font-semibold">快递退件：</span>当出库的商品因地址错误等原因被快递公司退回时，我们会询问你是否希望进行二次销售，并根据你的意见，按买家退货流程进行后续处置。
            </NoteCard>
          </StepSection>

          <StepSection title="滞销处置">
            <SectionDescription>
              如果商品出现滞销，为避免持续产生仓储费用，你可以向人工客服@袁萱申请批量出库或销毁。我们将根据费用标准扣除对应费用。
            </SectionDescription>

            <DetailCard
              title="强制销毁情况"
              description="如果存在以下情况，我们可能会单方面销毁你的商品，并扣除对应的批量销毁费："
              note="监管部门要求销毁 | 账户欠费超过30天且无法与你取得联系"
            />

            <LinkButton href="https://sseeaa.cc/warehouse-landing" variant="outline" className="w-full">
              查看海外仓费用标准
            </LinkButton>
          </StepSection>

          <StepSection title="其他非标准化业务">
            <SectionDescription>
              为提高履约效率，海外仓在入库和出库阶段只执行入库单、出库单、退件单中列明的标准化操作。
            </SectionDescription>

            <InfoCard>
              <p className="font-semibold text-sm mb-3 text-gray-900">如果你存在以下特殊需求：</p>
              <div className="text-xs text-gray-500 space-y-1 ml-4">
                <p>• 出库时检查商品是否破损</p>
                <p>• 出库时在商品包装上写字</p>
                <p>• 接收退货时进行商品质检或维修</p>
                <p>• 其他定制化服务...</p>
              </div>
            </InfoCard>

            <NoteCard>
              请联系人工客服@袁萱，我们会在入库和出库之外的时段帮你集中处理，并根据费用标准扣除对应费用。
            </NoteCard>
          </StepSection>

        <PageNavigation
          previousPage={{ href: '/guide/integration', label: '上一步：拉取平台订单' }}
          nextPage={{ href: '/guide/support', label: '下一步：处理异常情况' }}
        />
      </div>
    </>
  )
}
