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
    <>
      <div className="header">
        <h1>
          <Link href="/">Python by Example</Link>
        </h1>
      </div>
      
      <div className="container">
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: 'normal', 
          marginBottom: '30px',
          color: '#f2f2f2'
        }}>
          {example.title}
        </h2>

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
      </div>
    </>
  )
}