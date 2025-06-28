import Link from "next/link";
import type { Metadata } from 'next'
import './globals.css'
import DynamicHeader from '@/components/DynamicHeader'
import { AppProvider } from '@/contexts/AppContext'

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
        <AppProvider>
          <div className="main-container">
            <DynamicHeader />
            <div className="body">
              {children}
            </div>
            <div className="footer">
                <p>
                  by Mark McGranaghan and Eli Bendersky | {' '}
                  <Link href="https://github.com/mmcgrana/gobyexample">source</Link> | {' '}
                  <Link href="https://creativecommons.org/licenses/by/3.0/">license</Link>
                </p>
              </div>
            </div>
        </AppProvider>        
      </body>
    </html>
  )
}