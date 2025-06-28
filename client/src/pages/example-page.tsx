import { useRoute, Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import CodeBlock from "@/components/code-block";
import Navigation from "@/components/navigation";
import { getExampleBySlug, type Example } from "@/lib/data-loader";

export default function ExamplePage() {
  const [match, params] = useRoute("/:slug");
  const slug = params?.slug;
  
  const example = slug ? getExampleBySlug(slug) : undefined;

  if (!match) return null;

  if (!example) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6 text-center">
            <h1 className="text-2xl font-bold text-destructive mb-4">404 - 예제를 찾을 수 없습니다</h1>
            <p className="text-muted-foreground mb-4">
              요청하신 예제가 존재하지 않습니다.
            </p>
            <Link href="/" className="text-primary hover:text-primary/80">
              홈으로 돌아가기 →
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div>
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-primary">홈</Link>
        <span>›</span>
        <span className="text-foreground">{example.titleKo}</span>
      </nav>

      {/* SEO Meta Tags */}
      <div style={{ display: 'none' }}>
        <title>{example.titleKo} - Python by Example</title>
        <meta name="description" content={example.description} />
        <meta property="og:title" content={`${example.titleKo} - Python by Example`} />
        <meta property="og:description" content={example.description} />
      </div>

      {/* Two Column Layout */}
      <div className="lg:grid lg:grid-cols-2 lg:gap-12 space-y-8 lg:space-y-0">
        {/* Left Column - Explanation */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-4">{example.titleKo}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {example.description}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">설명</h3>
            <div 
              className="prose prose-slate max-w-none text-foreground"
              dangerouslySetInnerHTML={{ 
                __html: example.explanation.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br/>') 
              }}
            />
          </div>
        </div>

        {/* Right Column - Code */}
        <div className="space-y-6">
          <CodeBlock 
            code={example.code}
            filename={`${example.slug}.py`}
            showRunButton={true}
          />

          {/* Additional Examples */}
          {example.additionalExamples && example.additionalExamples.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">다른 예제들</h3>
              <div className="grid gap-4">
                {example.additionalExamples.map((additionalExample, index) => (
                  <Card key={index} className="bg-muted/30">
                    <CardContent className="p-4">
                      <h4 className="font-medium text-foreground mb-2">{additionalExample.title}</h4>
                      <CodeBlock 
                        code={additionalExample.code}
                        filename={`example-${index + 1}.py`}
                        showRunButton={true}
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <Navigation prevSlug={example.prevSlug} nextSlug={example.nextSlug} />
    </div>
  );
}
