'use client'

import { useEffect } from 'react'
import { useAppState } from '@/contexts/AppContext'

interface PageTitleProps {
  title: string
}

export default function PageTitle({ title }: PageTitleProps) {
  const { setTitle, resetTitle } = useAppState()
  
  useEffect(() => {
    setTitle(title)
    
    // 컴포넌트가 언마운트될 때 기본 제목으로 복원
    return () => {
      resetTitle()
    }
  }, [title]) // setTitle과 resetTitle은 안정적이므로 의존성에서 제거
  
  return null // 이 컴포넌트는 UI를 렌더링하지 않음
}