import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Python by Example',
  description: 'Python by Example은 주석이 달린 예제 프로그램을 통해 파이썬을 실습할 수 있는 입문서입니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  )
}