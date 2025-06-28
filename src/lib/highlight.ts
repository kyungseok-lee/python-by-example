export function highlightPythonCode(code: string): string {
  // HTML escape first to prevent issues
  const escaped = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
  
  // Go by Example 스타일의 Python 구문 하이라이팅
  return escaped
    .replace(/^#.*$/gm, '<span class="comment">$&</span>') // 주석
    .replace(/\b(def|if|else|elif|for|while|in|return|import|from|as|class|try|except|finally|with|break|continue|pass|True|False|None)\b/g, 
             '<span class="keyword">$1</span>') // 키워드
    .replace(/\b(print|len|range|enumerate|int|str|float|list|dict|set|tuple|type)\b/g, 
             '<span class="builtin">$1</span>') // 내장함수
    .replace(/(&#x27;)((?:\\.|(?!\1)[^\\])*?)\1/g, 
             '<span class="string">$&</span>') // 작은따옴표 문자열
    .replace(/(&quot;)((?:\\.|(?!\1)[^\\])*?)\1/g, 
             '<span class="string">$&</span>') // 큰따옴표 문자열
    .replace(/\b\d+(\.\d+)?\b/g, 
             '<span class="number">$&</span>'); // 숫자
}