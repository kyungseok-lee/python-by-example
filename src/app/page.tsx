import Link from 'next/link'
import { getCategories, getExamples } from '@/lib/data'
import { getColorClasses } from '@/lib/utils'

export default function HomePage() {
  const categories = getCategories()
  const examples = getExamples()
  const totalExamples = examples.length

  return (
    <div className="min-h-screen bg-white">
      {/* 헤더 */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Python by Example
          </h1>

        </div>
      </header>

      {/* 메인 컨텐츠 */}
      <main className="max-w-6xl mx-auto px-4 py-8">


        {/* 예제 리스트 */}
        <div className="max-w-2xl mx-auto">
          {examples.map((example) => (
            <Link
              key={example.id}
              href={`/example/${example.slug}`}
              className="group block py-3 px-4 hover:bg-gray-100 transition-colors duration-200 border-b border-gray-200"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-blue-600 group-hover:text-blue-700">
                    {example.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {example.description}
                  </p>
                </div>
                <svg 
                  className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* 최근 예제 섹션 */}
        <div className="mt-16">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            최근 추가된 예제
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {examples.slice(0, 6).map((example) => {
              const category = categories.find(cat => cat.id === example.categoryId)
              
              return (
                <Link
                  key={example.id}
                  href={`/example/${example.slug}`}
                  className="group block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    {category && (
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getColorClasses(category.color)}`}>
                        {category.title}
                      </span>
                    )}
                  </div>
                  <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                    {example.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {example.description}
                  </p>
                </Link>
              )
            })}
          </div>
        </div>
      </main>

      {/* 푸터 */}
      <footer className="mt-16 border-t border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center text-gray-600">
          <p>Python by Example • 실제 예제로 배우는 파이썬</p>
          <p className="text-sm mt-2">
            <a href="https://gobyexample.com" className="text-blue-600 hover:underline">
              Go by Example
            </a>에서 영감을 받아 제작되었습니다
          </p>
        </div>
      </footer>
    </div>
  )
}