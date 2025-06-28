import Link from "next/link";
import type { Metadata } from 'next'
import './globals.css'
import DynamicHeader from '@/components/DynamicHeader'

export const metadata: Metadata = {
  title: 'Python by Example',
  description: 'Python by Example은 주석이 달린 예제 프로그램을 통해 파이썬을 실습할 수 있는 입문서입니다.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <div className="main-container">
          <DynamicHeader />
          <div className="body">
            {children}
          </div>
          <div className="footer">
              <p>
                <Link href="https://gobyexample.com/">Go by Example</Link>에서 영감을
                받아 제작되었습니다.
              </p>
            </div>
          </div>        
      </body>
    </html>
  )
}