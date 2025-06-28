import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { getCategoryColorClass } from "@/lib/examples-data";
import Search from "@/components/search";
import { getCategories, getExamples, getExamplesByCategory, type Category, type Example } from "@/lib/data-loader";

export default function Homepage() {
  const categories = getCategories();
  const examples = getExamples();

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">Python by Example</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          파이썬을 실제 예제를 통해 배워보세요. 각 예제는 설명과 함께 브라우저에서 직접 실행할 수 있습니다.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">브라우저에서 실행</span>
          <span className="px-3 py-1 bg-green-500/10 text-green-600 rounded-full text-sm">코드 복사</span>
          <span className="px-3 py-1 bg-purple-500/10 text-purple-600 rounded-full text-sm">상세한 설명</span>
        </div>
      </div>

      {/* Search */}
      <div className="max-w-md mx-auto">
        <Search />
      </div>

      {/* Categories */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category: Category) => {
          const categoryExamples = getExamplesByCategory(category.id);
          
          return (
            <Card key={category.id} className="bg-muted/30">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <span className={`w-2 h-2 ${getCategoryColorClass(category.color)} rounded-full mr-3`}></span>
                  {category.nameKo}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {categoryExamples.map((example: Example) => (
                    <li key={example.id}>
                      <Link 
                        href={`/${example.slug}`}
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        {example.titleKo}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border mt-16 py-8">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">
            Python by Example는{" "}
            <a 
              href="https://gobyexample.com/" 
              className="text-primary hover:text-primary/80"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go by Example
            </a>
            에서 영감을 받아 제작되었습니다.
          </p>
          <p className="text-sm text-muted-foreground">
            파이썬을 쉽고 재미있게 배워보세요. 모든 예제는 브라우저에서 직접 실행할 수 있습니다.
          </p>
        </div>
      </footer>
    </div>
  );
}
