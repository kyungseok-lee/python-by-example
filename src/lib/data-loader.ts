import categoriesData from '../data/categories.json';
import examplesData from '../data/examples.json';

export interface Category {
  id: number;
  name: string;
  nameKo: string;
  description: string | null;
  color: string;
  order: number;
}

export interface Example {
  id: number;
  slug: string;
  title: string;
  titleKo: string;
  description: string;
  code: string;
  explanation: string;
  additionalExamples: Array<{
    title: string;
    code: string;
  }> | null;
  categoryId: number | null;
  order: number;
  prevSlug: string | null;
  nextSlug: string | null;
}

// 데이터를 직접 import하여 사용
export const getCategories = (): Category[] => {
  return categoriesData.sort((a, b) => a.order - b.order);
};

export const getCategoryById = (id: number): Category | undefined => {
  return categoriesData.find(category => category.id === id);
};

export const getExamples = (): Example[] => {
  return examplesData.sort((a, b) => a.order - b.order);
};

export const getExamplesByCategory = (categoryId: number): Example[] => {
  return examplesData
    .filter(example => example.categoryId === categoryId)
    .sort((a, b) => a.order - b.order);
};

export const getExampleBySlug = (slug: string): Example | undefined => {
  return examplesData.find(example => example.slug === slug);
};

export const searchExamples = (query: string): Example[] => {
  const lowercaseQuery = query.toLowerCase();
  return examplesData.filter(example =>
    example.title.toLowerCase().includes(lowercaseQuery) ||
    example.titleKo.toLowerCase().includes(lowercaseQuery) ||
    example.description.toLowerCase().includes(lowercaseQuery)
  );
};