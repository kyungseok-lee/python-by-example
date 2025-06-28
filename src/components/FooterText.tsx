'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function FooterText() {
  const { t } = useLanguage()

  return (
    <p>
      {t('site.inspiration')} <Link href="https://gobyexample.com">Go by Example</Link>
    </p>
  )
}