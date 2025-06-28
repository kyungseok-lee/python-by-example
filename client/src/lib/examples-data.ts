export const categoryColors = {
  blue: "bg-blue-500",
  green: "bg-green-500", 
  purple: "bg-purple-500",
  orange: "bg-orange-500",
  red: "bg-red-500",
  indigo: "bg-indigo-500",
} as const;

export function getCategoryColorClass(color: string): string {
  return categoryColors[color as keyof typeof categoryColors] || "bg-gray-500";
}

export function highlightPythonCode(code: string): string {
  // Simple syntax highlighting for Python
  let highlighted = code;
  
  // Keywords
  const keywords = ['def', 'if', 'else', 'elif', 'for', 'while', 'return', 'import', 'from', 'as', 'class', 'try', 'except', 'finally', 'with', 'and', 'or', 'not', 'in', 'is', 'True', 'False', 'None'];
  keywords.forEach(keyword => {
    const regex = new RegExp(`\\b${keyword}\\b`, 'g');
    highlighted = highlighted.replace(regex, `<span class="keyword">${keyword}</span>`);
  });
  
  // Strings
  highlighted = highlighted.replace(/(["'])((?:\\.|(?!\1)[^\\])*?)\1/g, '<span class="string">$1$2$1</span>');
  
  // Comments
  highlighted = highlighted.replace(/(#.*$)/gm, '<span class="comment">$1</span>');
  
  // Numbers
  highlighted = highlighted.replace(/\b(\d+\.?\d*)\b/g, '<span class="number">$1</span>');
  
  // Function calls
  highlighted = highlighted.replace(/(\w+)(\s*\()/g, '<span class="function">$1</span>$2');
  
  return highlighted;
}
