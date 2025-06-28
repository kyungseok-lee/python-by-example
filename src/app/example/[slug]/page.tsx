import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getExampleBySlug, getNavigationForExample } from "@/lib/data";
import ExampleContent from "@/components/ExampleContent";
import PageTitle from "@/components/PageTitle";
import { parseCodeSections, getFullCode } from "@/lib/codeParser";

interface ExamplePageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: ExamplePageProps): Promise<Metadata> {
  const example = getExampleBySlug(params.slug);

  if (!example) {
    return {
      title: "Python by Example",
    };
  }

  return {
    title: `Python by Example: ${example.title}`,
    description: example.explanation,
  };
}

export default function ExamplePage({ params }: ExamplePageProps) {
  const example = getExampleBySlug(params.slug);

  if (!example) {
    notFound();
  }

  const navigation = getNavigationForExample(params.slug);

  // 코드를 섹션으로 파싱
  const codeSections = parseCodeSections(example.code, example.explanation);
  const fullCode = getFullCode(codeSections);

  return (
    <div className="example-container">
      <PageTitle title={`Python by Example: ${example.title}`} />
      
      <ExampleContent
        title={example.title}
        description={example.description}
        codeSections={codeSections}
        output={example.output}
        fullCode={fullCode}
      />

      <div className="example-nav">
        <Link href="/" className="example-nav-index">
          index
        </Link>

        <div className="example-nav-examples">
          {navigation.prev && (
            <Link
              href={`/example/${navigation.prev.slug}`}
              className="example-nav-prev"
            >
              {navigation.prev.title}
            </Link>
          )}
          {navigation.next && (
            <Link
              href={`/example/${navigation.next.slug}`}
              className="example-nav-next"
            >
              {navigation.next.title}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
