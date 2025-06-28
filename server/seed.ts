import { db } from "./db";
import { categories, examples } from "@shared/schema";

async function seed() {
  console.log("Seeding database...");

  // Insert categories
  const categoryData = [
    { name: "basics", nameKo: "기초 문법", description: "파이썬의 기본 문법과 개념", color: "blue", order: 1 },
    { name: "control-flow", nameKo: "제어 구조", description: "조건문과 반복문", color: "green", order: 2 },
    { name: "data-structures", nameKo: "자료구조", description: "리스트, 딕셔너리, 튜플 등", color: "purple", order: 3 },
    { name: "functions", nameKo: "함수", description: "함수 정의와 활용", color: "orange", order: 4 },
    { name: "oop", nameKo: "객체지향", description: "클래스와 객체지향 프로그래밍", color: "red", order: 5 },
    { name: "advanced", nameKo: "고급 주제", description: "제너레이터, 데코레이터, 비동기 등", color: "indigo", order: 6 },
  ];

  const insertedCategories = await db.insert(categories).values(categoryData).returning();
  console.log(`Inserted ${insertedCategories.length} categories`);

  // Insert examples
  const exampleData = [
    {
      slug: "hello-world",
      title: "Hello World",
      titleKo: "헬로 월드",
      description: "첫 번째 파이썬 프로그램으로 기본적인 출력을 배웁니다.",
      code: `# 기본적인 Hello World 프로그램
print("Hello, World!")

# 여러 줄 출력
print("파이썬으로")
print("프로그래밍하기")

# 한 줄에 여러 값 출력
print("Hello", "Python", "World")`,
      explanation: `첫 번째 프로그램은 전통적인 "hello world" 메시지를 출력합니다. 파이썬의 가장 기본적인 출력 함수인 print()를 사용합니다.

print() 함수는 파이썬에서 가장 기본적이고 중요한 내장 함수 중 하나입니다. 이 함수는 괄호 안에 있는 내용을 화면에 출력하고, 자동으로 줄바꿈을 추가합니다.

문자열은 큰따옴표(") 또는 작은따옴표(')로 감싸서 표현할 수 있습니다.`,
      additionalExamples: [
        {
          title: "변수와 문자열",
          code: `# 변수를 사용한 출력
name = "파이썬"
print(f"안녕하세요, {name}!")`
        },
        {
          title: "숫자와 계산",
          code: `# 간단한 계산 결과 출력
print("2 + 3 =", 2 + 3)
print("10 * 5 =", 10 * 5)`
        }
      ],
      categoryId: insertedCategories[0].id,
      order: 1,
      prevSlug: null,
      nextSlug: "variables"
    },
    {
      slug: "variables",
      title: "Variables",
      titleKo: "변수",
      description: "파이썬에서 변수를 정의하고 사용하는 방법을 학습합니다.",
      code: `# 변수 정의
message = "안녕하세요!"
age = 25
height = 175.5
is_student = True

# 변수 출력
print("메시지:", message)
print("나이:", age)
print("키:", height)
print("학생 여부:", is_student)

# 변수 값 변경
age = age + 1
print("다음 해 나이:", age)

# 여러 변수 동시 할당
x, y, z = 1, 2, 3
print(f"x={x}, y={y}, z={z}")`,
      explanation: `변수는 데이터를 저장하는 컨테이너입니다. 파이썬에서는 변수 타입을 명시적으로 선언할 필요가 없습니다.

파이썬의 주요 데이터 타입:
- 정수 (int): 123, -456
- 실수 (float): 3.14, -2.5
- 문자열 (str): "안녕하세요", 'Hello'
- 불린 (bool): True, False

변수명 규칙:
- 문자, 숫자, 밑줄(_)만 사용 가능
- 숫자로 시작할 수 없음
- 대소문자 구분
- 예약어 사용 불가`,
      additionalExamples: [
        {
          title: "변수명 규칙",
          code: `# 올바른 변수명
user_name = "김철수"
age2 = 30
_private_var = "숨겨진 값"

# 잘못된 변수명 (사용하지 마세요)
# 2age = 30  # 숫자로 시작
# user-name = "김철수"  # 하이픈 사용
# class = "A"  # 예약어 사용`
        }
      ],
      categoryId: insertedCategories[0].id,
      order: 2,
      prevSlug: "hello-world",
      nextSlug: "data-types"
    },
    {
      slug: "if-else",
      title: "If/Else",
      titleKo: "조건문",
      description: "조건에 따라 다른 코드를 실행하는 방법을 배웁니다.",
      code: `# 기본 if 문
age = 18

if age >= 18:
    print("성인입니다.")
else:
    print("미성년자입니다.")

# elif 사용
score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"

print(f"점수: {score}, 등급: {grade}")

# 중첩 조건문
weather = "비"
temperature = 15

if weather == "비":
    if temperature < 10:
        print("우산과 따뜻한 옷을 준비하세요.")
    else:
        print("우산을 준비하세요.")
else:
    print("좋은 날씨네요!")`,
      explanation: `조건문은 특정 조건이 참(True)인지 거짓(False)인지에 따라 다른 코드를 실행합니다.

파이썬의 조건문 구조:
- if: 조건이 참일 때 실행
- elif: 이전 조건이 거짓이고 새 조건이 참일 때 실행
- else: 모든 조건이 거짓일 때 실행

비교 연산자:
- == (같음), != (다름)
- < (작음), > (큼)
- <= (작거나 같음), >= (크거나 같음)

논리 연산자:
- and (그리고), or (또는), not (아님)`,
      additionalExamples: [
        {
          title: "논리 연산자",
          code: `# and, or, not 사용
age = 20
has_license = True

if age >= 18 and has_license:
    print("운전할 수 있습니다.")

if age < 18 or not has_license:
    print("운전할 수 없습니다.")`
        }
      ],
      categoryId: insertedCategories[1].id,
      order: 1,
      prevSlug: "data-types",
      nextSlug: "for-loops"
    },
    {
      slug: "lists",
      title: "Lists",
      titleKo: "리스트",
      description: "파이썬의 가장 유용한 자료구조인 리스트를 학습합니다.",
      code: `# 리스트 생성
fruits = ["사과", "바나나", "오렌지"]
numbers = [1, 2, 3, 4, 5]
mixed = ["안녕", 42, True, 3.14]

print("과일:", fruits)
print("숫자:", numbers)

# 리스트 접근
print("첫 번째 과일:", fruits[0])
print("마지막 과일:", fruits[-1])

# 리스트 수정
fruits[1] = "딸기"
print("수정된 과일:", fruits)

# 리스트에 요소 추가
fruits.append("포도")
print("추가 후:", fruits)

# 리스트에서 요소 제거
fruits.remove("사과")
print("제거 후:", fruits)

# 리스트 슬라이싱
numbers = [0, 1, 2, 3, 4, 5]
print("처음 3개:", numbers[:3])
print("마지막 3개:", numbers[-3:])
print("중간 부분:", numbers[2:5])`,
      explanation: `리스트는 여러 개의 값을 순서대로 저장하는 자료구조입니다. 대괄호([])를 사용하여 생성합니다.

주요 특징:
- 순서가 있음 (인덱스로 접근 가능)
- 변경 가능 (mutable)
- 서로 다른 타입의 데이터 저장 가능
- 중복 값 허용

주요 메서드:
- append(): 끝에 요소 추가
- remove(): 특정 값 제거
- pop(): 마지막 요소 제거 및 반환
- insert(): 특정 위치에 요소 삽입
- len(): 리스트 길이 반환`,
      additionalExamples: [
        {
          title: "리스트 컴프리헨션",
          code: `# 리스트 컴프리헨션으로 간단하게 리스트 생성
squares = [x**2 for x in range(5)]
print("제곱수:", squares)

even_numbers = [x for x in range(10) if x % 2 == 0]
print("짝수:", even_numbers)`
        }
      ],
      categoryId: insertedCategories[2].id,
      order: 1,
      prevSlug: "for-loops",
      nextSlug: "dictionaries"
    }
  ];

  const insertedExamples = await db.insert(examples).values(exampleData).returning();
  console.log(`Inserted ${insertedExamples.length} examples`);

  console.log("Seeding completed!");
}

seed().catch(console.error);