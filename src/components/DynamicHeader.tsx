'use client'

import Link from "next/link";
import { useTitle } from '@/contexts/TitleContext'

export default function DynamicHeader() {
  const { title } = useTitle()
  
  return (
    <div className="header">
      <h1 className="main-title">
        <Link href="/">{title}</Link>
      </h1>
    </div>
  )
}