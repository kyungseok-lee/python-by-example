'use client'

import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

interface CodeBlockProps {
  code: string
  output?: string
  title?: string
  showCopy?: boolean
}

export default function CodeBlock({ 
  code, 
  output, 
  title, 
  showCopy = true 
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const codeRef = useRef<HTMLElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    const loadPrism = async () => {
      if (typeof window !== 'undefined' && codeRef.current) {
        try {
          const Prism = (await import('prismjs')).default
          // Python 언어 지원 로드
          await import('prismjs/components/prism-python.js')
          Prism.highlightElement(codeRef.current)
        } catch (error) {
          console.log('Prism.js 로딩 실패, 기본 텍스트로 표시')
        }
      }
    }
    loadPrism()
  }, [code])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('복사 실패:', err)
    }
  }

  const handleRunCode = () => {
    // 더 나은 Python playground인 Replit을 사용
    const encodedCode = encodeURIComponent(code)
    // Replit의 Python 환경으로 코드 전송
    window.open(`https://replit.com/languages/python3?code=${encodedCode}`, '_blank')
  }

  return (
    <>
      {/* 코드 블록 */}
      <div className="code-block">
        {title && (
          <div className="code-header">
            <div className="code-title">
              {title}
            </div>
            {showCopy && (
              <button 
                onClick={handleCopy}
                className="copy-button"
              >
                {copied ? t('button.copied') : t('button.copy')}
              </button>
            )}
          </div>
        )}
        <div className="code-content">
          <pre>
            <code ref={codeRef} className="language-python">{code}</code>
          </pre>
        </div>
        <div className="code-actions">
          {showCopy && (
            <button 
              onClick={handleCopy}
              className="action-button copy-button"
              title={t('button.copy')}
            >
              {copied ? `✓ ${t('button.copied')}` : `📋 ${t('button.copy')}`}
            </button>
          )}
          <button 
            onClick={handleRunCode}
            className="action-button run-button"
            title={t('button.run')}
          >
            ▶️ {t('button.run')}
          </button>
        </div>
      </div>

      {/* 출력 결과 */}
      {output && (
        <div className="output-block">
          {output}
        </div>
      )}
    </>
  )
}