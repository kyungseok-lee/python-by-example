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
    <div className="example-container">
      <CodeBlock
        code={example.code}
        output={example.output}
        title={example.title}
      />

      <div className="explanation">
        <p>{example.explanation}</p>
      </div>

      <div className="example-nav">
        {navigation.prev ? (
          <Link href={`/example/${navigation.prev.slug}`} className="example-nav-prev">
            {navigation.prev.title}
          </Link>
        ) : (
          <div className="example-nav-prev-placeholder"></div>
        )}
        
        <Link href="/" className="example-nav-index">
          index
        </Link>
        
        {navigation.next ? (
          <Link href={`/example/${navigation.next.slug}`} className="example-nav-next">
            {navigation.next.title}
          </Link>
        ) : (
          <div className="example-nav-next-placeholder"></div>
        )}
      </div>
    </div>
  )
}