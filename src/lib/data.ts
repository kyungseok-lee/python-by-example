import categoriesData from '@/data/categories.json'
import examplesData from '@/data/examples.json'

export interface Category {
  id: number
  title: string
  slug: string
  description: string
  order: number
  color: string
}

export interface Example {
  id: number
  title: string
  slug: string
  categoryId: number
  description: string
  code: string
  explanation: string
  output: string
  order: number
}

export const getCategories = (): Category[] => {
  return categoriesData.sort((a, b) => a.order - b.order)
}

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categoriesData.find(category => category.slug === slug)
}

export const getCategoryById = (id: number): Category | undefined => {
  return categoriesData.find(category => category.id === id)
}

export const getExamples = (): Example[] => {
  return examplesData.sort((a, b) => a.order - b.order)
}

export const getExamplesByCategory = (categoryId: number): Example[] => {
  return examplesData
    .filter(example => example.categoryId === categoryId)
    .sort((a, b) => a.order - b.order)
}

export const getExampleBySlug = (slug: string): Example | undefined => {
  return examplesData.find(example => example.slug === slug)
}

export const searchExamples = (query: string): Example[] => {
  const lowercaseQuery = query.toLowerCase()
  return examplesData.filter(example =>
    example.title.toLowerCase().includes(lowercaseQuery) ||
    example.description.toLowerCase().includes(lowercaseQuery) ||
    example.explanation.toLowerCase().includes(lowercaseQuery)
  )
}

export const getNavigationForExample = (slug: string): { prev: Example | null, next: Example | null } => {
  const allExamples = getExamples()
  const currentIndex = allExamples.findIndex(example => example.slug === slug)
  
  return {
    prev: currentIndex > 0 ? allExamples[currentIndex - 1] : null,
    next: currentIndex < allExamples.length - 1 ? allExamples[currentIndex + 1] : null
  }
}