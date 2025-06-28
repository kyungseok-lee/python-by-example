import React from "react";
import { Switch, Route, Link } from "wouter";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/">
            <h1 className="text-2xl font-bold text-blue-600">Python by Example</h1>
          </Link>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Switch>
          <Route path="/" component={Homepage} />
          <Route path="/example/:slug" component={ExamplePage} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  );
}

function Homepage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">파이썬 예제로 배우기</h1>
      <p className="text-lg text-gray-600 mb-8">
        실제 예제를 통해 파이썬을 배워보세요. 각 예제는 설명과 함께 브라우저에서 직접 실행할 수 있습니다.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-xl font-semibold mb-3 text-blue-600">기초 문법</h3>
          <p className="text-gray-600 mb-4">파이썬의 기본 문법을 배워보세요</p>
          <Link href="/example/hello-world">
            <span className="text-blue-500 hover:text-blue-700">예제 보기 →</span>
          </Link>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-xl font-semibold mb-3 text-green-600">제어 구조</h3>
          <p className="text-gray-600 mb-4">조건문과 반복문을 마스터하세요</p>
          <Link href="/example/if-else">
            <span className="text-blue-500 hover:text-blue-700">예제 보기 →</span>
          </Link>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-xl font-semibold mb-3 text-purple-600">자료 구조</h3>
          <p className="text-gray-600 mb-4">리스트, 딕셔너리 등을 활용하세요</p>
          <Link href="/example/lists">
            <span className="text-blue-500 hover:text-blue-700">예제 보기 →</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function ExamplePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Hello World</h1>
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-xl font-semibold mb-4">코드 예제</h2>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{`print("Hello, World!")
print("파이썬으로 첫 프로그램을 작성해보세요!")`}</code>
        </pre>
        
        <h2 className="text-xl font-semibold mb-4 mt-6">설명</h2>
        <p className="text-gray-700">
          이것은 파이썬의 가장 기본적인 프로그램입니다. print() 함수를 사용하여 
          텍스트를 화면에 출력할 수 있습니다.
        </p>
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">페이지를 찾을 수 없습니다</h1>
      <Link href="/">
        <span className="text-blue-500 hover:text-blue-700">홈으로 돌아가기</span>
      </Link>
    </div>
  );
}

export default App;