import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '운영을 위한 테스트 앱',
  description: '운영을 위한 nextJs 테스트 앱',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <header>
          <Link href="/">홈으로 가자</Link>
          <Link href="/react-practice">리액트 연습페이지</Link>
          <Link href="/react-high-quality">TODOLIST</Link>
          <Link href="/react-high-quality">nextjs 동적 라우팅 페이지</Link>
        </header>
          {children}
      </body>
    </html>
  )
}
