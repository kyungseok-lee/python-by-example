'use client'

import Link from 'next/link'
import LanguageSelector from '@/components/LanguageSelector'
import { useLanguage } from '@/contexts/LanguageContext'

export default function FooterText() {
  const { t } = useLanguage()

  return (
    <div className="footer-content">
      <p>
        {t('site.inspiration')} <Link href="https://gobyexample.com">Go by Example</Link>
      </p>
      <LanguageSelector />
    </div>
  )
}