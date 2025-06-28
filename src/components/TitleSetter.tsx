'use client'

import { useEffect } from 'react'
import { useTitle } from '@/contexts/TitleContext'

interface TitleSetterProps {
  title: string
}

export default function TitleSetter({ title }: TitleSetterProps) {
  const { setTitle } = useTitle()
  
  useEffect(() => {
    setTitle(title)
    
    // 컴포넌트가 언마운트될 때 기본 제목으로 복원
    return () => {
      setTitle("Python by Example")
    }
  }, [title, setTitle])
  
  return null // 이 컴포넌트는 UI를 렌더링하지 않음
}