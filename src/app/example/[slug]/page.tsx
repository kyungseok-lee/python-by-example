import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getExampleBySlug, getNavigationForExample, getCategoryById } from '@/lib/data'
import CodeBlock from '@/components/CodeBlock'

interface ExamplePageProps {
  params: {
    slug: string
  }
}

export default function ExamplePage({ params }: ExamplePageProps) {
  const example = getExampleBySlug(params.slug)
  
  if (!example) {
    notFound()
  }

  const { prev, next } = getNavigationForExample(params.slug)
  const category = getCategoryById(example.categoryId)

  return (
    <div className="min-h-screen bg-white">
      {/* 헤더 */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-gray-700">
              홈
            </Link>
            <span className="mx-2">→</span>
            <Link href={`/category/${category?.slug || ''}`} className="hover:text-gray-700">
              {category?.title || '카테고리'}
            </Link>
            <span className="mx-2">→</span>
            <span className="text-gray-900">{example.title}</span>
          </nav>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {example.title}
          </h1>
          
          <p className="text-lg text-gray-600">
            {example.description}
          </p>
        </div>
      </header>

      {/* 메인 컨텐츠 */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* 코드 블록 */}
        <div className="mb-8">
          <CodeBlock 
            code={example.code}
            output={example.output}
            title={`${example.title} 예제`}
            showRun={true}
          />
        </div>

        {/* 설명 */}
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">설명</h2>
          <div className="text-gray-700 leading-relaxed whitespace-pre-line">
            {example.explanation}
          </div>
        </div>

        {/* 네비게이션 */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200">
          <div className="flex-1">
            {prev && (
              <Link
                href={`/example/${prev.slug}`}
                className="group flex items-center text-blue-600 hover:text-blue-700"
              >
                <svg className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <div>
                  <div className="text-sm text-gray-500">이전</div>
                  <div className="font-medium">{prev.title}</div>
                </div>
              </Link>
            )}
          </div>

          <div className="flex-1 text-right">
            {next && (
              <Link
                href={`/example/${next.slug}`}
                className="group flex items-center justify-end text-blue-600 hover:text-blue-700"
              >
                <div className="text-right">
                  <div className="text-sm text-gray-500">다음</div>
                  <div className="font-medium">{next.title}</div>
                </div>
                <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}