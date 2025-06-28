import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getExampleBySlug, getNavigationForExample } from '@/lib/data'
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

  const navigation = getNavigationForExample(params.slug)

  return (
    <div className="main-container">
      <div className="header">
        <h1 className="main-title">
          <Link href="/">Python by Example</Link>: {example.title}
        </h1>
      </div>

      <CodeBlock
        code={example.code}
        output={example.output}
        title={example.title}
      />

      <div className="explanation">
        <p>{example.explanation}</p>
      </div>

      <div className="navigation">
        <div>
          {navigation.prev ? (
            <Link href={`/example/${navigation.prev.slug}`} className="nav-link">
              ← {navigation.prev.title}
            </Link>
          ) : (
            <span className="nav-link disabled">← 이전</span>
          )}
        </div>
        
        <div>
          <Link href="/" className="nav-link">
            목록
          </Link>
        </div>
        
        <div>
          {navigation.next ? (
            <Link href={`/example/${navigation.next.slug}`} className="nav-link">
              {navigation.next.title} →
            </Link>
          ) : (
            <span className="nav-link disabled">다음 →</span>
          )}
        </div>
      </div>

      <div className="footer">
        <p>
          <Link href="https://gobyexample.com/">Go by Example</Link>에서 영감을
          받아 제작되었습니다.
        </p>
      </div>
    </div>
  )
}