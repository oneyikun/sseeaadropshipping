import Link from 'next/link'

export function GuideBanner() {
  return (
    <div className="flex items-center justify-center w-full max-w-2xl">
      {/* 移动端：带橙色边框 */}
      <div className="lg:hidden">
        <div className="bg-card rounded-3xl p-8 shadow-sm">
          <BannerContent />
        </div>
      </div>

      {/* PC端：无边框 */}
      <div className="hidden lg:block">
        <BannerContent />
      </div>
    </div>
  )
}

function BannerContent() {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-8">
        <svg width="120" height="98" viewBox="0 0 109 89" className="w-32 h-26 md:w-40 md:h-32" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <polygon fill="#FFB63C" points="107.914391 30.5678156 57.8422113 1.47594002 57.8422113 0.585496867 107.914391 29.6895703"/>
            <path d="M107.914391,29.6895703 L57.8422113,0.585496867 L58.8668308,0 L108.951209,29.1040734 L107.914391,29.6895703 Z M94.2162041,32.3852954 L44.1318263,3.28122202 L57.8422113,1.47594002 L107.914391,30.5800134 L94.2162041,32.3852954 Z" fill="#FFDE9B"/>
            <polygon fill="#FFB63C" points="80.5424127 46.3884288 30.4580349 17.2843554 44.1318263 3.28122202 94.2162041 32.3852954"/>
            <polygon fill="#FFDE9B" points="79.5177932 46.0956804 29.4334154 16.991607 30.4580349 16.3939123 80.5424127 45.4979857"/>
            <polygon fill="#7D534A" points="79.5665846 71.7599597 29.4944047 42.6558863 29.4334154 16.991607 79.5177932 46.0956804"/>
            <polygon fill="#FFCA6C" points="94.2162041 32.3852954 107.914391 30.5800134 107.914391 29.6895703 108.951209 29.1040734 109 54.7683527 79.5665846 71.7599597 79.5177932 46.0956804 80.5424127 45.4979857 80.5424127 46.3884288"/>
            <polygon fill="#486D7D" points="78.4809758 47.5716204 28.4087959 18.467547 28.4087959 17.5893017 78.4809758 46.6933751"/>
            <path d="M78.4809758,46.6933751 L28.396598,17.5893017 L29.4334154,16.991607 L79.5177932,46.0956804 L78.4809758,46.6933751 Z M64.7705909,49.3769024 L14.6984109,20.272829 L28.4087959,18.467547 L78.4809758,47.5716204 L64.7705909,49.3769024 Z" fill="#87CEEB"/>
            <polygon fill="#4682B4" points="51.1089973 63.3800358 1.02461952 34.2759624 14.6984109 20.272829 64.7705909 49.3769024"/>
            <polygon fill="#FFA20D" points="40.3992838 15.9913832 38.3378469 16.1377574 61.3795882 29.5309982 62.2212399 28.6649508"/>
            <polygon fill="#FFCA6C" points="46.2054611 10.0510295 44.9734781 9.33135631 38.3378469 16.1377574 40.3992838 15.9913832"/>
            <polygon fill="#3D4449" points="46.2054611 10.0510295 40.3992838 15.9913832 62.2212399 28.6649508 68.0152193 22.7245971"/>
            <polygon fill="#22537C" points="10.9658684 33.0561773 8.90443151 33.2025515 31.9461728 46.5957923 32.7756267 45.7419427"/>
            <polygon fill="#87CEEB" points="10.9658684 33.0561773 16.7598478 27.1158236 15.5278648 26.4083483 8.90443151 33.2025515"/>
            <polygon fill="#3D4449" points="16.7598478 27.1158236 10.9658684 33.0561773 32.7756267 45.7419427 38.5696061 39.8015891"/>
            <polygon fill="#486D7D" points="50.0721799 63.0872874 0 33.983214 1.02461952 33.3977171 51.0967995 62.4895927"/>
            <polygon fill="#87CEEB" points="50.1331692 88.7515667 0.0487914056 59.6474933 0 33.983214 50.0721799 63.0872874"/>
            <polygon fill="#6FAEC7" points="64.7705909 49.3769024 78.4809758 47.5716204 78.4809758 46.6933751 79.5177932 46.0956804 79.5665846 71.7599597 50.1331692 88.7515667 50.0721799 63.0872874 51.0967995 62.4895927 51.1089973 63.3800358"/>
          </g>
        </svg>
      </div>

      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-4 text-foreground leading-tight">
        极致简单的
        <br />
        海外仓一件代发服务
      </h1>

      <p className="text-sm md:text-base text-muted-foreground text-center mb-8 leading-relaxed px-4 max-w-lg">
        选择海海一件代发服务，你将拥有2项极致体验：仅需10秒钟即可获得任意商品的一件代发总成本，把商品就近交给集货仓后不用再操心任何事。
      </p>

      <Link href="/guide/account">
        <button className="px-12 py-3.5 bg-primary text-primary-foreground rounded-full hover:opacity-80 transition-all font-medium text-base shadow-lg">
          立即开户
        </button>
      </Link>
    </div>
  )
}
