import './globals.css'
import cn from 'classnames'
import { Header, Footer } from '@/components'
import Provider from './provider'
import type { Metadata } from 'next'
import { Roboto, Noto_Sans_KR } from 'next/font/google' // Roboto와 한글 NotoSans를 사용합니다.

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'], // 또는 preload: false
  weight: ['100', '400', '700', '900'], // 가변 폰트가 아닌 경우, 사용할 fontWeight 배열
})

const roboto = Roboto({
  subsets: ['latin'], // preload에 사용할 subsets입니다.
  weight: ['100', '400', '700'],
  variable: '--roboto', // CSS 변수 방식으로 스타일을 지정할 경우에 사용합니다.
})

export const metadata: Metadata = {
  title: 'Non-Bottle',
  description: '지구를 지키는 가장 세련된 방법',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://nonbottle.kr',
    title: 'Non-Bottle',
    description: '지구를 지키는 가장 세련된 방법',
    images: [
      {
        url: './og.png',
        width: 512,
        height: 512,
      },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Provider>
      <html>
        <body className={cn(notoSansKr.className, roboto.variable)}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </Provider>
  )
}
