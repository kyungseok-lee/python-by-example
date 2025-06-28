'use client'

import Link from "next/link";
import { getExamples } from "@/lib/data";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HomePage() {
  const examples = getExamples();
  const { t } = useLanguage();

  return (
<>
      <div className="intro">
        <p>
          <Link href="https://python.org/">Python</Link>{t('home.intro.python')}{" "}
          <Link href="https://docs.python.org/3/tutorial/">
            {t('home.intro.docs')}
          </Link>{" "}
          {t('home.intro.refer')}
        </p>

        <p>
          <em>Python by Example</em> {t('home.intro.about')}{" "}
          <Link href="/example/hello-world">{t('home.intro.start')}</Link> {t('home.intro.start2')}
        </p>

        <p>
          {t('home.intro.version')}{" "}
          <Link href="https://www.python.org/downloads/">
            {t('home.intro.latest')}
          </Link>{" "}
          {t('home.intro.version2')}
        </p>
      </div>

      <ul className="examples-list">
        {examples.map((example) => (
          <li key={example.id}>
            <Link href={`/example/${example.slug}`}>{example.title}</Link>
          </li>
        ))}
      </ul>
  </>
     
  );
}
