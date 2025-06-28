'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Language = 'ko' | 'en' | 'ja' | 'zh'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// 번역 데이터
const translations = {
  ko: {
    'site.title': 'Python by Example',
    'site.description': 'Python을 예제를 통해 배워보세요',
    'site.inspiration': 'Go by Example에서 영감을 받았습니다',
    'nav.index': '목록',
    'nav.prev': '이전',
    'nav.next': '다음',
    'button.copy': '복사',
    'button.run': '실행',
    'button.copied': '복사됨!',
    'example.output': '출력:',
    'example.explanation': '설명',
    'language.korean': '한국어',
    'language.english': 'English',
    'language.japanese': '日本語',
    'language.chinese': '中文',
    'home.intro.python': 'Python은 단순함과 다양성으로 유명한 강력한 오픈소스 프로그래밍 언어입니다. 웹 개발, 데이터 사이언스, 자동화, AI 등에 널리 사용됩니다. 더 깊은 통찰을 위해서는',
    'home.intro.docs': '공식 문서',
    'home.intro.refer': '를 참고해주세요.',
    'home.intro.about': 'Python by Example은 주석이 달린 예제 프로그램을 통해 Python을 실습할 수 있는 입문서입니다.',
    'home.intro.start': '첫 번째 예제',
    'home.intro.start2': '로 시작하거나 아래 전체 목록을 둘러보세요.',
    'home.intro.version': '별도로 명시되지 않는 한, 예제들은',
    'home.intro.latest': '최신 메이저 버전의 Python',
    'home.intro.version2': '을 가정하며 최신 언어 기능을 포함할 수 있습니다. 예제가 예상대로 작동하지 않으면 최신 버전을 사용하고 있는지 확인하세요.',
  },
  en: {
    'site.title': 'Python by Example',
    'site.description': 'Learn Python through practical examples',
    'site.inspiration': 'Inspired by Go by Example',
    'nav.index': 'Index',
    'nav.prev': 'Previous',
    'nav.next': 'Next',
    'button.copy': 'Copy',
    'button.run': 'Run',
    'button.copied': 'Copied!',
    'example.output': 'Output:',
    'example.explanation': 'Explanation',
    'language.korean': '한국어',
    'language.english': 'English',
    'language.japanese': '日本語',
    'language.chinese': '中文',
    'home.intro.python': 'Python is a powerful, open-source programming language known for its simplicity and versatility. It is widely used in web development, data science, automation, AI, and more. Please refer to the',
    'home.intro.docs': 'official documentation',
    'home.intro.refer': 'for deeper insights.',
    'home.intro.about': 'Python by Example is a practical introduction to Python through annotated example programs.',
    'home.intro.start': 'first example',
    'home.intro.start2': 'or explore the full list below.',
    'home.intro.version': 'Unless otherwise noted, the examples assume the',
    'home.intro.latest': 'latest major version of Python',
    'home.intro.version2': 'and may include recent language features. If an example does not work as expected, make sure you\'re using the latest version.',
  },
  ja: {
    'site.title': 'Python by Example',
    'site.description': '実例でPythonを学びましょう',
    'site.inspiration': 'Go by Exampleからインスパイアされました',
    'nav.index': '一覧',
    'nav.prev': '前へ',
    'nav.next': '次へ',
    'button.copy': 'コピー',
    'button.run': '実行',
    'button.copied': 'コピーしました！',
    'example.output': '出力：',
    'example.explanation': '説明',
    'language.korean': '한국어',
    'language.english': 'English',
    'language.japanese': '日本語',
    'language.chinese': '中文',
    'home.intro.python': 'Pythonはシンプルさと汎用性で知られる強力なオープンソースプログラミング言語です。ウェブ開発、データサイエンス、自動化、AIなどに広く使用されています。詳細については',
    'home.intro.docs': '公式ドキュメント',
    'home.intro.refer': 'を参照してください。',
    'home.intro.about': 'Python by Exampleは、注釈付きサンプルプログラムを通じてPythonを実用的に学習できる入門書です。',
    'home.intro.start': '最初の例',
    'home.intro.start2': 'から始めるか、下記の完全なリストをご覧ください。',
    'home.intro.version': '特に明記されていない限り、例は',
    'home.intro.latest': 'Pythonの最新メジャーバージョン',
    'home.intro.version2': 'を想定しており、最新の言語機能を含む場合があります。例が期待通りに動作しない場合は、最新バージョンを使用していることを確認してください。',
  },
  zh: {
    'site.title': 'Python by Example',
    'site.description': '通过实例学习Python',
    'site.inspiration': '灵感来自Go by Example',
    'nav.index': '索引',
    'nav.prev': '上一个',
    'nav.next': '下一个',
    'button.copy': '复制',
    'button.run': '运行',
    'button.copied': '已复制！',
    'example.output': '输出：',
    'example.explanation': '说明',
    'language.korean': '한국어',
    'language.english': 'English',
    'language.japanese': '日本語',
    'language.chinese': '中文',
    'home.intro.python': 'Python是一种强大的开源编程语言，以其简洁性和多功能性而闻名。它广泛用于Web开发、数据科学、自动化、AI等领域。如需了解更多详情，请参考',
    'home.intro.docs': '官方文档',
    'home.intro.refer': '。',
    'home.intro.about': 'Python by Example是通过带注释的示例程序实用地学习Python的入门指南。',
    'home.intro.start': '第一个示例',
    'home.intro.start2': '开始，或浏览下面的完整列表。',
    'home.intro.version': '除非另有说明，示例假设使用',
    'home.intro.latest': 'Python的最新主要版本',
    'home.intro.version2': '并可能包含最新的语言功能。如果示例不能按预期工作，请确保您使用的是最新版本。',
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ko')

  // 브라우저 언어 감지 및 로컬 스토리지에서 불러오기
  useEffect(() => {
    const savedLanguage = localStorage.getItem('python-by-example-language') as Language
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage)
    } else {
      // 브라우저 언어 감지
      const browserLang = navigator.language.toLowerCase()
      if (browserLang.startsWith('en')) {
        setLanguage('en')
      } else if (browserLang.startsWith('ja')) {
        setLanguage('ja')
      } else if (browserLang.startsWith('zh')) {
        setLanguage('zh')
      } else {
        setLanguage('ko') // 기본값
      }
    }
  }, [])

  // 언어 변경 시 로컬 스토리지에 저장
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('python-by-example-language', lang)
  }

  // 번역 함수
  const t = (key: string): string => {
    const translation = translations[language] as Record<string, string>
    return translation[key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}