import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getExampleBySlug, getNavigationForExample } from "@/lib/data";
import CodeBlock from "@/components/CodeBlock";
import PageTitle from "@/components/PageTitle";

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

  return (
    <div className="example-container">
      <PageTitle title={`Python by Example: ${example.title}`} />
      
      <p className="example-description">{example.description}</p>
      
      <CodeBlock code={example.code} output={example.output} />
      
      <div className="example-explanation">
        <p>{example.explanation}</p>
      </div>

      <div className="example-nav">
        <Link href="/" className="example-nav-index">
          Home
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
          {navigation.prev && navigation.next && (
            <span className="example-nav-separator"> | </span>
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
