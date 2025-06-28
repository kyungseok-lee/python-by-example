'use client'

import { useState } from 'react'
import { Copy, Play } from 'lucide-react'
import { highlightPythonCode } from '@/lib/highlight'

interface CodeBlockProps {
  code: string
  output?: string
  title?: string
  showCopy?: boolean
  showRun?: boolean
}

export default function CodeBlock({ 
  code, 
  output, 
  title = "Python 코드",
  showCopy = true,
  showRun = false 
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const [showOutput, setShowOutput] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('클립보드 복사 실패:', err)
    }
  }

  const handleRun = () => {
    setShowOutput(!showOutput)
  }

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
      {/* 헤더 */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-50 border-b border-gray-200">
        <h3 className="text-sm font-medium text-gray-700">{title}</h3>
        <div className="flex items-center gap-2">
          {showRun && output && (
            <button
              onClick={handleRun}
              className="flex items-center gap-1 px-2 py-1 text-xs bg-green-100 text-green-700 rounded hover:bg-green-200 transition-colors"
            >
              <Play size={12} />
              실행
            </button>
          )}
          {showCopy && (
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
            >
              <Copy size={12} />
              {copied ? '복사됨!' : '복사'}
            </button>
          )}
        </div>
      </div>

      {/* 코드 영역 */}
      <div className="relative">
        <pre className="p-4 overflow-x-auto bg-gray-50 text-sm">
          <code 
            className="text-gray-800 font-mono"
            dangerouslySetInnerHTML={{ __html: highlightPythonCode(code) }}
          />
        </pre>
      </div>

      {/* 출력 영역 */}
      {showOutput && output && (
        <div className="border-t border-gray-200">
          <div className="px-4 py-2 bg-blue-50 border-b border-blue-200">
            <h4 className="text-xs font-medium text-blue-700">실행 결과</h4>
          </div>
          <pre className="p-4 bg-black text-green-400 text-sm font-mono overflow-x-auto">
            {output}
          </pre>
        </div>
      )}
    </div>
  )
}