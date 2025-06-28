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
  description: 'Python by Example is a hands-on introduction to Python using annotated example programs.',
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
    <html lang="en">
      <body>
        <LanguageProvider>
          <AppProvider>
            <div className="main-container">
              <div className="header">
                <DynamicHeader />
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