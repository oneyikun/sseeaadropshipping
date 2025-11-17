import { Card, CardContent } from '@/src/components/ui/card'
import { Badge } from '@/src/components/ui/badge'
import { Separator } from '@/src/components/ui/separator'
import { InfoCard } from '@/src/components/info-card'
import { AlertBox } from '@/src/components/alert-box'
import { Clock, Shield, CheckCircle2, AlertCircle, XCircle, Timer, Package, Plane, Ship, Warehouse } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/src/components/ui/button'

export default function PromisePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="container py-12 max-w-5xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <Badge variant="secondary" className="px-4 py-1.5">
            海海承诺
          </Badge>
          <h1 className="text-4xl font-bold">时效保证 · 赔偿保障</h1>
          <p className="text-muted-foreground text-lg">
            明确的时效承诺和透明的赔偿标准，让你安心开展业务
          </p>
        </div>

        {/* 时效保证 */}
        <Card className="mb-8">
          <div className="p-6 border-b">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">时效保证</h2>
                <p className="text-sm text-muted-foreground">以当地时间为准，工作日不含当地法定假期和周六日</p>
              </div>
            </div>
          </div>
          <CardContent className="space-y-6 pt-6">
            {/* 国际物流 */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Ship className="h-5 w-5 text-blue-600" />
                <h3 className="font-semibold text-lg">国际物流（进达集货 - 出集货仓）</h3>
              </div>
              <p className="text-sm text-muted-foreground pl-7">
                取决于下单时的航次或班次密度，具体请咨询人工客服@袁萱
              </p>
            </div>

            <Separator />

            {/* 国际物流送达 */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Plane className="h-5 w-5 text-blue-600" />
                <h3 className="font-semibold text-lg">国际物流（出集货仓 - 进美西海外仓）</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-4 pl-7">
                <InfoCard title="海运普货" variant="primary">
                  <div className="text-2xl font-bold text-blue-600">30天</div>
                  <div className="text-xs text-muted-foreground mt-1">工作日内送达</div>
                </InfoCard>
                <InfoCard title="海运敏货" variant="primary">
                  <div className="text-2xl font-bold text-blue-600">30天</div>
                  <div className="text-xs text-muted-foreground mt-1">工作日内送达</div>
                </InfoCard>
                <InfoCard title="空运" variant="primary">
                  <div className="text-2xl font-bold text-blue-600">10天</div>
                  <div className="text-xs text-muted-foreground mt-1">工作日内送达</div>
                </InfoCard>
              </div>
            </div>

            <Separator />

            {/* 海外仓入库 */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Warehouse className="h-5 w-5 text-blue-600" />
                <h3 className="font-semibold text-lg">海外仓（入库）</h3>
              </div>
              <InfoCard title="确认收货后上架时间" variant="primary">
                <div className="text-xl font-bold text-blue-600">5个工作日</div>
              </InfoCard>
            </div>

            <Separator />

            {/* 海外仓出库 */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Package className="h-5 w-5 text-blue-600" />
                <h3 className="font-semibold text-lg">海外仓（出库）</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4 pl-7">
                <InfoCard title="工作日出库单" variant="primary">
                  <div className="text-2xl font-bold text-blue-600 mb-1">48小时</div>
                  <div className="text-xs text-muted-foreground mb-3">内出库</div>
                  <Separator className="my-3" />
                  <div className="text-xs text-muted-foreground">
                    非旺季工作日上午11:00前的出库单，最快当天出库
                  </div>
                </InfoCard>
                <InfoCard title="非工作日出库单" variant="primary">
                  <div className="text-2xl font-bold text-blue-600 mb-1">48小时</div>
                  <div className="text-xs text-muted-foreground">假期后内出库</div>
                </InfoCard>
              </div>
            </div>

            <Separator />

            {/* 海外快递 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Timer className="h-5 w-5 text-blue-600" />
                <h3 className="font-semibold text-lg">海外快递（上网和送达）</h3>
              </div>
              <AlertBox variant="warning">
                <p className="text-sm">
                  你通过海海和电商平台购买的快递产品，均可满足电商平台对时效的要求。上网和送达时间以实际物流轨迹为准，我们无法做出保证。
                </p>
              </AlertBox>
            </div>
          </CardContent>
        </Card>

        {/* 赔偿和协助范围 */}
        <Card className="mb-8">
          <div className="p-6 border-b">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">赔偿和协助范围</h2>
                <p className="text-sm text-muted-foreground">海外仓一件代发服务环节众多，以下是我们在不同情况下的责任范围</p>
              </div>
            </div>
          </div>
          <CardContent className="space-y-8 pt-6">
            {/* 可以赔偿的事项 */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6 text-blue-600" />
                <h3 className="font-semibold text-xl">我们可以赔偿的事项</h3>
              </div>

              <AlertBox variant="info">
                <div className="font-medium text-sm mb-2">索赔方式</div>
                <p className="text-sm">
                  在问题出现后的<span className="font-bold">60天内</span>向人工客服@袁萱提出申请，申请通过后，赔付金额将充值至你的OMS，逾期恕不受理。
                </p>
              </AlertBox>

              <div className="space-y-4">
                {[
                  {
                    title: '1) 国际物流丢件',
                    content: '如果商品已被集货仓签收，在送达海外仓前丢失，我们将按申报价格承担对应商品的赔偿责任。在海外快递运输途中丢件，赔偿金额不超过100美元；在其他环节丢件，赔偿金额不超过该笔国际物流费用的2倍。',
                    note: '如果海外快递系统显示已签收，但海外仓实际未收到，也视为在海外快递运输途中丢件。'
                  },
                  {
                    title: '2) 国际物流扣货',
                    content: '如果你的商品和申报信息完全合规，因我们的过错被监管部门查没，我们将按申报价格承担对应商品的赔偿责任，赔偿金额不超过该笔国际物流费用的2倍。'
                  },
                  {
                    title: '3) 海外仓延迟入库',
                    content: '如果商品未在承诺时间内送达海外仓或上架（以OMS记录时间为准），并对你造成损失，我们将按0.5元人民币/KG/天承担国际物流的赔偿责任，赔偿金额不超过该笔国际物流费用。',
                    note: '此项赔偿不适用于在国际物流环节丢件或被扣货的商品。'
                  },
                  {
                    title: '4) 海外仓延迟出库',
                    content: '一件代发时，如果订单未在承诺时间内出库（以OMS记录时间为准），导致你被电商平台处罚，我们将按40元人民币/订单承担赔偿责任。'
                  },
                  {
                    title: '5) 海外仓错发商品',
                    content: '一件代发时，如果出现了错发、漏发的情况，我们将全额承担对应海外快递的赔偿责任。如果商品无法追回，还将按申报价格承担对应商品的赔偿责任，赔偿金额不超过商品零售价格的20%。'
                  },
                  {
                    title: '6) 海外仓损毁商品',
                    content: '如果商品入库后按你的要求进行了逐件清点，后续发现丢失或损坏，我们将按申报价格承担对应商品的赔偿责任，赔偿金额不超过商品零售价格的20%。'
                  },
                  {
                    title: '7) 海外快递虚假面单',
                    content: '如果你通过海海购买的面单被快递公司判定为虚假且申诉无效，我们将按面单售价2倍的标准承担对应海外快递的赔偿责任。'
                  }
                ].map((item, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                    <h4 className="font-semibold text-sm mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{item.content}</p>
                    {item.note && (
                      <AlertBox variant="info">
                        <p className="text-xs">{item.note}</p>
                      </AlertBox>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* 可以协助的事项 */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-blue-600" />
                <h3 className="font-semibold text-xl">我们可以协助的事项</h3>
              </div>

              <AlertBox variant="info">
                <p className="text-sm mb-4">
                  如果出现以下2种情况，我们将协助你处理，但不在赔偿范围内。
                </p>
              </AlertBox>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h4 className="font-semibold text-sm mb-2">1) 海外快递无物流轨迹</h4>
                  <p className="text-sm text-muted-foreground">
                    在规定时间内提供物流轨迹是部分电商平台对卖家的要求，不是海外快递公司的义务，任何机构或个人都无法通过合法方式对该时效做出保证。我们可以免费协助你进行补发或催促快递公司，但无法保证结果。
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h4 className="font-semibold text-sm mb-2">2) 海外快递丢件或延误</h4>
                  <p className="text-sm text-muted-foreground">
                    海外快递公司的赔偿政策因产品和保险购买情况不同而异，我们可以协助你进行补发或准备索赔材料，但无法替你申请赔偿。
                  </p>
                </div>
              </div>
            </div>

            <Separator />

            {/* 无法担责的事项 */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <XCircle className="h-6 w-6 text-red-600" />
                <h3 className="font-semibold text-xl">我们无法担责的事项</h3>
              </div>

              <AlertBox variant="warning">
                <p className="text-sm mb-4">
                  除以上列明的事项外，其他原因导致的损失均不在我们的赔偿或协助范围内，包括但不限于以下事项。
                </p>
              </AlertBox>

              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4 py-2">
                  <h4 className="font-semibold text-sm mb-2">1) 不可抗力</h4>
                  <p className="text-sm text-muted-foreground">
                    因自然灾害、政治活动、战争、罢工等不可抗因素造成的损失。
                  </p>
                </div>

                <div className="border-l-4 border-red-500 pl-4 py-2">
                  <h4 className="font-semibold text-sm mb-2">2) 你的过错</h4>
                  <div className="text-sm text-muted-foreground space-y-2">
                    <p>因你的过错造成的损失：</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>商品不合规：侵权、质量问题、资质问题、涉及违禁品或反倾销等</li>
                      <li>申报不合规：填写的申报价格、材质、品牌名不正确等</li>
                      <li>未按本手册的要求操作：打包不规范、OMS操作不规范等</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-red-500 pl-4 py-2">
                  <h4 className="font-semibold text-sm mb-2">3) 无法判断过错方的损失</h4>
                  <p className="text-sm text-muted-foreground">
                    如：商品在外包装无破损情况下的丢失或损坏。
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center space-y-4">
          <p className="text-sm text-muted-foreground">
            了解详细的服务流程，开始你的一件代发业务
          </p>
          <Button size="lg" asChild>
            <Link href="/guide/account">
              查看服务流程
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
