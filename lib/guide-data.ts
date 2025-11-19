import { Shield, Calculator, UserPlus, MapPin, Package, Ship, LinkIcon, Activity, AlertTriangle, Type as type, type LucideIcon } from 'lucide-react'

export interface GuideStep {
  id: number
  title: string
  icon: LucideIcon
  href: string
  items: string[]
  disabled?: boolean
}

export const guideSteps: GuideStep[] = [
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
    href: '/guide/calculate',
    items: ['即将推出：在线成本计算器', '精确计算物流、仓储、快递费用', '帮助你评估业务可行性']
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
    title: '获得海外仓地址',
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
    title: '处理日常业务',
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
