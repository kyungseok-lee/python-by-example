export function highlightPythonCode(code: string): string {
  // 간단한 Python 구문 하이라이팅
  return code
    .replace(/^#.*$/gm, '<span class="text-green-600">$&</span>') // 주석
    .replace(/\b(def|if|else|elif|for|while|in|return|import|from|as|class|try|except|finally|with|break|continue|pass|True|False|None)\b/g, 
             '<span class="text-blue-600 font-semibold">$1</span>') // 키워드
    .replace(/\b(print|len|range|enumerate|int|str|float|list|dict|set|tuple|type)\b/g, 
             '<span class="text-purple-600">$1</span>') // 내장함수
    .replace(/(["'])((?:\\.|(?!\1)[^\\])*?)\1/g, 
             '<span class="text-orange-600">$&</span>') // 문자열
    .replace(/\b\d+(\.\d+)?\b/g, 
             '<span class="text-red-600">$&</span>') // 숫자
}