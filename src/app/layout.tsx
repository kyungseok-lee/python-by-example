import Link from "next/link";
import type { Metadata } from 'next'
import './globals.css'
import DynamicHeader from '@/components/DynamicHeader'
import LanguageSelector from '@/components/LanguageSelector'
import FooterText from '@/components/FooterText'
import { AppProvider } from '@/contexts/AppContext'
import { LanguageProvider } from '@/contexts/LanguageContext'

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
        <LanguageProvider>
          <AppProvider>
            <div className="main-container">
              <div className="header-container">
                <DynamicHeader />
                <LanguageSelector />
              </div>
              <div className="body">
                {children}
              </div>
              <div className="footer">
                <FooterText />
              </div>
            </div>
          </AppProvider>
        </LanguageProvider>        
      </body>
    </html>
  )
}