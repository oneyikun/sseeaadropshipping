import { DetailCard } from '../components/detail-card'
import { Badge } from '../components/ui/badge'
import { Package } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="container py-12 max-w-4xl">
        <div className="mb-12">
          <Badge variant="secondary" className="mb-4">组件展示</Badge>
          <h1 className="text-4xl font-bold mb-4">DetailCard 双按钮设计</h1>
          <p className="text-muted-foreground text-lg">
            展示主按钮（行动）和次按钮（查看详情）的各种组合
          </p>
        </div>

        <div className="space-y-8">
          {/* 同时有主按钮和次按钮 */}
          <section>
            <h2 className="text-2xl font-bold mb-4">1. 主按钮 + 次按钮（推荐）</h2>
            <p className="text-sm text-gray-500 mb-4">最常用的组合，主按钮用于行动，次按钮用于查看详细规则</p>

            <div className="space-y-3">
              <DetailCard
                title="国际物流延误"
                description="异常情况：海运普货或敏货超过30天工作日、空运超过10天工作日仍未送达海外仓"
                primaryAction={{ text: '催促', href: 'https://work.weixin.qq.com/ca/cawcdef7cd05264c7a' }}
                secondaryAction={{ text: '查看承诺', href: '/guide/promise#international-shipping' }}
              />

              <DetailCard
                title="商品被查没"
                description="异常情况：商品和申报信息完全合规，但在国际物流环节被监管部门查没"
                primaryAction={{ text: '索赔', href: 'https://work.weixin.qq.com/ca/cawcdef7cd05264c7a' }}
                secondaryAction={{ text: '查看承诺', href: '/guide/promise#seized-goods' }}
              />

              <DetailCard
                title="出库：平台订单获取失败"
                description="原因：通常是OMS中的店铺授权、产品配对设置不正确导致"
                primaryAction={{ text: '联系OMS客服', href: 'https://oms.xlwms.com/' }}
                secondaryAction={{ text: '查看指引', href: '/guide/integration' }}
              />
            </div>
          </section>

          {/* 只有主按钮 */}
          <section>
            <h2 className="text-2xl font-bold mb-4">2. 只有主按钮</h2>
            <p className="text-sm text-gray-500 mb-4">当不需要额外的详情链接时</p>

            <div className="space-y-3">
              <DetailCard
                title="入库：入库单无法提交"
                description="原因：通常是入库单中的商品未完成审核导致。解决方案：请联系人工客服@袁萱加急审核。"
                primaryAction={{ text: '联系客服', href: 'https://work.weixin.qq.com/ca/cawcdef7cd05264c7a' }}
              />

              <DetailCard
                title="物流履约和费用问题"
                description="联系方式：人工客服 @袁萱 | 服务时间：周一至周六，10:00～22:00（北京时间）"
                primaryAction={{ text: '联系客服', href: 'https://work.weixin.qq.com/ca/cawcdef7cd05264c7a' }}
              />
            </div>
          </section>

          {/* 只有次按钮 */}
          <section>
            <h2 className="text-2xl font-bold mb-4">3. 只有次按钮</h2>
            <p className="text-sm text-gray-500 mb-4">当主要目的是跳转到详情页面时</p>

            <div className="space-y-3">
              <DetailCard
                title="海外仓延迟入库赔偿标准"
                description="如果商品未在承诺时间内送达海外仓或上架，并对你造成损失，我们将按标准进行赔偿"
                secondaryAction={{ text: '查看详细赔偿标准', href: '/guide/promise#warehouse-receipt' }}
              />
            </div>
          </section>

          {/* 传统样式：带 value 和 rightLink */}
          <section>
            <h2 className="text-2xl font-bold mb-4">4. 传统样式（带 value 和 rightLink）</h2>
            <p className="text-sm text-gray-500 mb-4">用于展示数据和提供右上角链接</p>

            <div className="space-y-3">
              <DetailCard
                title="海运普货"
                value="30天工作日"
                description="集货仓发往美西海外仓"
                rightLink={{ text: '查看详情 ›', href: '/guide/promise#time-guarantee' }}
              />

              <DetailCard
                title="海外仓入库"
                value="5个工作日"
                description="海外仓确认收货后上架"
                rightLink={{ text: '查看详情 ›', href: '/guide/promise#warehouse-receipt' }}
              />
            </div>
          </section>

          {/* 设计说明 */}
          <section className="mt-12 bg-blue-50 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Package className="h-5 w-5" />
              设计说明
            </h2>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><span className="font-semibold">主按钮（primaryAction）：</span>蓝色填充样式，用于主要行动（索赔、催促、补发、联系客服等）</li>
              <li><span className="font-semibold">次按钮（secondaryAction）：</span>蓝色轮廓样式，用于跳转到详细规则或指引</li>
              <li><span className="font-semibold">两个按钮：</span>并排显示，各占50%宽度，间隔8px</li>
              <li><span className="font-semibold">右上角链接（rightLink）：</span>保留用于数据展示场景，如"查看详情 ›"</li>
              <li><span className="font-semibold">应用场景：</span>步骤9（处理异常情况）页面全面使用双按钮设计</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
