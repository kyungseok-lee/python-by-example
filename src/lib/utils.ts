export function cn(...inputs: (string | undefined | null | boolean)[]) {
  return inputs.filter(Boolean).join(' ')
}

export function getColorClasses(color: string) {
  const colorMap: Record<string, string> = {
    blue: 'bg-blue-100 text-blue-800 border-blue-200',
    green: 'bg-green-100 text-green-800 border-green-200',
    purple: 'bg-purple-100 text-purple-800 border-purple-200',
    orange: 'bg-orange-100 text-orange-800 border-orange-200',
    red: 'bg-red-100 text-red-800 border-red-200',
    indigo: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    pink: 'bg-pink-100 text-pink-800 border-pink-200',
    yellow: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    teal: 'bg-teal-100 text-teal-800 border-teal-200',
    gray: 'bg-gray-100 text-gray-800 border-gray-200',
  }
  
  return colorMap[color] || colorMap.gray
}