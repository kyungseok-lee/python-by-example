'use client'

import { useState } from 'react'
import { highlightPythonCode } from '@/lib/highlight'

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

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('복사 실패:', err)
    }
  }

  return (
    <div>
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
                {copied ? '복사됨!' : '복사'}
              </button>
            )}
          </div>
        )}
        <div className="code-content">
          <pre>
            <code dangerouslySetInnerHTML={{ 
              __html: highlightPythonCode(code) 
            }} />
          </pre>
        </div>
      </div>

      {/* 출력 결과 */}
      {output && (
        <div className="output-block">
          {output}
        </div>
      )}
    </div>
  )
}