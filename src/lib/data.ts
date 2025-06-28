import examplesData from "@/data/examples.json";

export interface Example {
  id: number;
  title: string;
  slug: string;
  description: string;
  code: string;
  explanation: string;
  output: string;
  order: number;
}

export const getExamples = (): Example[] => {
  return examplesData.sort((a, b) => a.order - b.order);
};

export const getExampleBySlug = (slug: string): Example | undefined => {
  return examplesData.find((example) => example.slug === slug);
};

export const getNavigationForExample = (
  slug: string
): { prev: Example | null; next: Example | null } => {
  const allExamples = getExamples();
  const currentIndex = allExamples.findIndex(
    (example) => example.slug === slug
  );

  return {
    prev: currentIndex > 0 ? allExamples[currentIndex - 1] : null,
    next:
      currentIndex < allExamples.length - 1
        ? allExamples[currentIndex + 1]
        : null,
  };
};
