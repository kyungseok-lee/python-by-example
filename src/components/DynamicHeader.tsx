'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function DynamicHeader() {
  const pathname = usePathname()
  const [title, setTitle] = useState("Python by Example")
  
  useEffect(() => {
    const isExamplePage = pathname.startsWith('/example/')
    
    if (isExamplePage) {
      const slug = pathname.split('/')[2]
      if (slug) {
        // 동적 import를 사용하여 SSR 문제 방지
        import('@/lib/data').then(({ getExampleBySlug }) => {
          const example = getExampleBySlug(slug)
          if (example) {
            setTitle(`Python by Example: ${example.title}`)
          } else {
            setTitle("Python by Example")
          }
        })
      }
    } else {
      setTitle("Python by Example")
    }
  }, [pathname])
  
  return (
    <div className="header">
      <h1 className="main-title">
        <Link href="/">{title}</Link>
      </h1>
    </div>
  )
}