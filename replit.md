# Python by Example - Replit Project Guide

## Overview

Python by Example은 Go by Example에서 영감을 받은 파이썬 학습 플랫폼입니다. Next.js 14와 TypeScript를 사용하여 구축되었으며, 실행 가능한 예제와 상세한 설명을 통해 파이썬을 체계적으로 학습할 수 있도록 설계되었습니다.

## System Architecture

**Frontend Framework**: Next.js 14 with App Router
**Language**: TypeScript
**Styling**: Tailwind CSS with custom components
**Data Source**: Static JSON files (categories.json, examples.json)
**Code Highlighting**: Custom syntax highlighting for Python

### Key Features
- 10개 주요 카테고리별 파이썬 예제
- 실행 가능한 코드 블록과 출력 결과
- 반응형 디자인
- 카테고리별 네비게이션
- 예제 간 이동 네비게이션

## Key Components

### Pages
- `/` - 홈페이지 (카테고리 그리드, 최근 예제)
- `/category/[slug]` - 카테고리별 예제 목록
- `/example/[slug]` - 개별 예제 상세 페이지

### Components
- `CodeBlock.tsx` - 코드 표시, 복사, 실행 결과 기능
- Custom layout with navigation breadcrumbs

### Data Structure
- **Categories**: 파이썬 학습 주제별 분류 (자료형, 제어문, 함수 등)
- **Examples**: 각 카테고리별 실제 코드 예제와 설명

## Data Flow

1. Static JSON 파일에서 카테고리와 예제 데이터 로드
2. Next.js App Router로 동적 라우팅 처리
3. 클라이언트 사이드에서 코드 하이라이팅 및 상호작용

## External Dependencies

### Core Frameworks
- next@14 - React 기반 풀스택 프레임워크
- react, react-dom - UI 라이브러리
- typescript - 타입 안전성

### Styling & UI
- tailwindcss - 유틸리티 CSS 프레임워크
- @tailwindcss/typography - 타이포그래피 플러그인
- lucide-react - 아이콘 라이브러리

### Code Highlighting
- 커스텀 Python 구문 하이라이팅 구현

## Deployment Strategy

**Development**: `npx next dev -p 5000`
**Production**: Next.js static export 또는 Vercel 배포
**Port**: 5000 (Replit 환경 호환)

## Recent Changes

- June 28, 2025: 프로젝트 초기 설정 완료
  - Next.js 14 프로젝트 구조 생성
  - 10개 카테고리, 10개 예제 데이터 작성
  - 홈페이지, 카테고리 페이지, 예제 페이지 구현
  - 코드 블록 컴포넌트와 구문 하이라이팅 구현
  - 반응형 UI 디자인 완성
  - TailwindCSS 버전 충돌 해결을 위해 순수 CSS 구현으로 변경
  - 사용자 요청에 따라 사이트 제목 및 헤더 문구 간소화

## User Preferences

- 언어: 한국어 응답 선호
- 코드 스타일: TypeScript, 함수형 컴포넌트
- 디자인: 깔끔하고 읽기 쉬운 인터페이스
- 학습 방식: 실제 예제 중심의 단계적 학습