import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getCategoryBySlug, getExamplesByCategory } from '@/lib/data'
import { getColorClasses } from '@/lib/utils'

interface CategoryPageProps {
  params: {
    slug: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategoryBySlug(params.slug)
  
  if (!category) {
    notFound()
  }

  const examples = getExamplesByCategory(category.id)

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
            <span className="text-gray-900">{category.title}</span>
          </nav>
          
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-3xl font-bold text-gray-900">
              {category.title}
            </h1>
            <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getColorClasses(category.color)}`}>
              {examples.length}개 예제
            </span>
          </div>
          
          <p className="text-lg text-gray-600">
            {category.description}
          </p>
        </div>
      </header>

      {/* 메인 컨텐츠 */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {examples.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">이 카테고리에는 아직 예제가 없습니다.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {examples.map((example, index) => (
              <Link
                key={example.id}
                href={`/example/${example.slug}`}
                className="group block p-6 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-mono text-gray-500">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h2 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {example.title}
                      </h2>
                    </div>
                    
                    <p className="text-gray-600 mb-4">
                      {example.description}
                    </p>

                    {/* 코드 미리보기 */}
                    <div className="bg-gray-50 rounded-md p-3 border">
                      <pre className="text-sm text-gray-700 font-mono overflow-x-auto">
                        {example.code.split('\n').slice(0, 3).join('\n')}
                        {example.code.split('\n').length > 3 && '\n...'}
                      </pre>
                    </div>
                  </div>
                  
                  <div className="ml-4 text-gray-400 group-hover:text-gray-600 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}