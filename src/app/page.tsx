import Link from 'next/link'
import { getExamples } from '@/lib/data'

export default function HomePage() {
  const examples = getExamples()

  return (
    <div className="main-container">
      <h1 className="main-title">
        <Link href="/">Python by Example</Link>
      </h1>
      
      <div className="intro">
        <p>
          <Link href="https://python.org/">Python</Link> is a powerful, open-source programming language known for its simplicity and versatility. It is widely used in web development, data science, automation, AI, and more. Please refer to the{' '}
          <Link href="https://docs.python.org/3/tutorial/">official documentation</Link> for 
          deeper insights.
        </p>
        
        <p>
          <em>Python by Example</em> is a practical introduction to Python through annotated example programs. Start with the{' '}
          <Link href="/example/hello-world">first example</Link> or 
          explore the full list below.
        </p>
        
        <p>
          Unless otherwise noted, the examples assume the{' '}
          <Link href="https://www.python.org/downloads/">latest major version of Python</Link> and 
          may include recent language features. 
          If an example does not work as expected, make sure you're using the latest version.
        </p>
      </div>

      <ul className="examples-list">
        {examples.map((example) => (
          <li key={example.id}>
            <Link href={`/example/${example.slug}`}>
              {example.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="footer">
        <p>
          <Link href="https://gobyexample.com/">Go by Example</Link>에서 영감을 받아 제작되었습니다.
        </p>
      </div>
    </div>
  )
}