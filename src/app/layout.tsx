import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Python by Example',
  description: '실제 예제로 배우는 파이썬 프로그래밍',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-white">
        {children}
      </body>
    </html>
  )
}