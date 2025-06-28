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
          <p className="text-lg text-gray-600">
            {totalExamples}개의 예제
          </p>
        </div>
      </header>

      {/* 메인 컨텐츠 */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* 소개 섹션 */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            파이썬 기초 학습
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Go by Example에서 영감을 받은 파이썬 학습 사이트입니다. 
            각 예제는 실행 가능한 코드와 상세한 설명으로 구성되어 있습니다.
          </p>
        </div>

        {/* 카테고리 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const categoryExamples = examples.filter(ex => ex.categoryId === category.id)
            
            return (
              <Link
                key={category.id}
                href={`/category/${category.slug}`}
                className="group block p-6 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className={`px-3 py-1 rounded-full text-sm font-medium border ${getColorClasses(category.color)}`}>
                    {categoryExamples.length}개 예제
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {category.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4">
                  {category.description}
                </p>

                {/* 대표 예제들 미리보기 */}
                {categoryExamples.length > 0 && (
                  <div className="space-y-1">
                    {categoryExamples.slice(0, 3).map((example) => (
                      <div key={example.id} className="text-xs text-gray-500">
                        • {example.title}
                      </div>
                    ))}
                    {categoryExamples.length > 3 && (
                      <div className="text-xs text-gray-400">
                        ... 및 {categoryExamples.length - 3}개 더
                      </div>
                    )}
                  </div>
                )}
              </Link>
            )
          })}
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