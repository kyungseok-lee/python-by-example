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
          <Link href="https://python.org/">Python</Link>은 읽기 쉽고 배우기 쉬운 
          오픈 소스 프로그래밍 언어입니다. 더 자세한 내용은{' '}
          <Link href="https://docs.python.org/3/tutorial/">공식 튜토리얼</Link>을 
          참고하세요.
        </p>
        
        <p>
          <em>Python by Example</em>은 주석이 달린 예제 프로그램을 통해 
          파이썬을 실습할 수 있는 입문서입니다.{' '}
          <Link href="/example/hello-world">첫 번째 예제</Link>를 확인하거나 
          아래 전체 목록을 둘러보세요.
        </p>
        
        <p>
          별도의 언급이 없는 한, 여기의 예제들은{' '}
          <Link href="https://www.python.org/downloads/">최신 파이썬 버전</Link>을 
          가정하며 새로운 언어 기능을 사용할 수 있습니다. 
          뭔가 작동하지 않는다면 최신 버전으로 업그레이드해 보세요.
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
    </div>
  )
}