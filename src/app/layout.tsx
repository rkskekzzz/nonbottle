import './globals.css'
import cn from 'classnames'
import { Header, Footer } from '@/components'
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
  title: 'Nonbottle',
  description: 'Nonbottle',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className={cn(notoSansKr.className, roboto.variable)}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
