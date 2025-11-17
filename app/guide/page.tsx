import { Badge } from '../../components/ui/badge'
import { Shield, Calculator, UserPlus, MapPin, Package, Ship, LinkIcon, Activity, AlertTriangle } from 'lucide-react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'

const steps = [
  {
    id: 1,
    title: '了解海海一件代发优势',
    icon: Shield,
    href: '/guide/promise',
    items: ['时效保证和承诺', '赔偿和协助范围', '透明的责任标准']
  },
  {
    id: 2,
    title: '试算一件代发精确成本',
    icon: Calculator,
    href: '#',
    items: ['即将推出：在线成本计算器', '精确计算物流、仓储、快递费用', '帮助你评估业务可行性'],
    disabled: true
  },
  {
    id: 3,
    title: '在海海开户',
    icon: UserPlus,
    href: '/guide/account',
    items: ['开通OMS系统', '完成首次充值（100美元）']
  },
  {
    id: 4,
    title: '获得海外仓地址和资质',
    icon: MapPin,
    href: '/guide/warehouse-info',
    items: ['完成预充值前：获得模糊地址', '预充值完成后：获得完整地址', '申诉资质：水电账单等']
  },
  {
    id: 5,
    title: '准备你的商品',
    icon: Package,
    href: '/guide/prepare',
    items: ['在OMS中创建商品信息', '商品独立包装并粘贴条码', '装箱并创建入库单', '粘贴箱唛和海海标识']
  },
  {
    id: 6,
    title: '发货至海外仓',
    icon: Ship,
    href: '/guide/shipping',
    items: ['发货前检查清单', '发往国内集货仓（华南/华东/空运）', '支付国际物流费用', '等待海外仓上架（5个工作日）']
  },
  {
    id: 7,
    title: '拉取平台订单',
    icon: LinkIcon,
    href: '/guide/integration',
    items: ['完成平台或ERP授权', '进行产品配对设置', '测试订单拉取功能']
  },
  {
    id: 8,
    title: '你的日常业务',
    icon: Activity,
    href: '/guide/operations',
    items: ['一件代发（自动/手动）', '特殊操作（截单、补发）', '退货处置', '滞销处理']
  },
  {
    id: 9,
    title: '处理异常情况',
    icon: AlertTriangle,
    href: '/guide/support',
    items: ['履约异常处理', '系统异常解决方案', '人工客服联系方式']
  }
]

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12 max-w-5xl">
        <div className="mb-12">
          <Badge variant="secondary" className="mb-4">服务流程</Badge>
          <h1 className="text-4xl font-bold mb-4 text-foreground">一件代发完整流程</h1>
          <p className="text-secondary text-lg">
            严格按照以下流程和要求，开始你的一件代发业务
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step) => {
            const Icon = step.icon
            const isDisabled = step.disabled
            return (
              <Card key={step.id} className={isDisabled ? 'opacity-60' : 'hover:shadow-lg transition-shadow'}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      isDisabled ? 'bg-secondary/20' : 'bg-[#4682b4]'
                    }`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">步骤 {step.id}</Badge>
                        {isDisabled && <Badge variant="secondary">即将推出</Badge>}
                      </div>
                      <CardTitle className="text-2xl mb-2">{step.title}</CardTitle>
                      <ul className="space-y-1 text-sm text-secondary">
                        {step.items.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className={`mt-1 ${isDisabled ? 'text-secondary' : 'text-[#4682b4]'}`}>•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {isDisabled ? (
                    <button disabled className="px-4 py-2 bg-secondary/20 text-secondary rounded-lg cursor-not-allowed">
                      即将推出
                    </button>
                  ) : (
                    <Link href={step.href}>
                      <button className="px-4 py-2 bg-[#4682b4] text-white rounded-lg hover:bg-[#4682b4]/80 transition-all">
                        查看详细流程 →
                      </button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Link href="/" className="text-sm text-secondary hover:text-[#4682b4]">
            ← 返回首页
          </Link>
        </div>
      </div>
    </div>
  )
}
