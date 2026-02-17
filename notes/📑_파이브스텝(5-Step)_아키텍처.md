---
created: 2026-02-17
type: YouTube
url: https://www.youtube.com/watch?v=tY3gDSTOtIA
title: 파이브스텝(5-Step) 아키텍처 - 에이전틱 AI와 협업을 위한 완벽 가이드
description: AI 에이전트(Agentic AI)와 협업하며 백엔드 시스템을 개발하기 위해 고안된 '5-Step 아키텍처'의 철학, 프로세스, 코드 예시를 상세히 다룬다. DDD, 헥사고날 아키텍처를 실무적으로 재해석하여 모듈 중심의 개발 방법론을 제시한다.
tags:
- "#Knowledge_Management"
- "#Software_Architecture"
- "#Agentic_AI"
- "#DDD"
- "#Spring_Boot"
---

# 📑 파이브스텝(5-Step) 아키텍처: 에이전틱 AI와 협업을 위한 완벽 가이드

![](https://www.youtube.com/watch?v=tY3gDSTOtIA)

> [!ABSTRACT] 3줄 요약
>
> 1. **에이전틱 AI(Agentic AI)** 시대에 맞춰, AI가 맥락(Context)을 잃지 않고 인간 의도를 정확히 구현하도록 돕는 표준화된 공정인 **[[5-Step Architecture]]**를 제안한다.
> 2. 기존의 [[Layered Architecture]]와 달리, **도메인 모델(AR)**을 중심으로 규칙(Policy), 행위(Activity), 조율(Service)을 명확히 분리하여 비즈니스 로직이 서비스 레이어에 유출되는 것을 방지한다.
> 3. **모듈(Module)** 단위의 개발과 테스트(Slice Test)를 지향하며, 이를 통해 AI에게 좁은 범위의 명확한 컨텍스트를 제공하여 개발 생산성을 극대화한다.

## 목차

- [[#1. AI 트렌드 변화와 파이브스텝 아키텍처의 탄생 배경]]
- [[#2. 파이브스텝 아키텍처의 핵심 철학]]
- [[#3. 상세 프로세스: 5단계 표준 공정]]
- [[#4. 기존 아키텍처와의 비교 및 실무 가이드]]
- [[#결론 및 액션 아이템]]

---

## 1. AI 트렌드 변화와 파이브스텝 아키텍처의 탄생 배경

> _단순 생성형 AI를 넘어, 목표를 달성하는 에이전틱 AI 시대로의 전환과 이에 대응하기 위한 아키텍처의 필요성을 설명한다._

- **Gen AI vs. Agentic AI**:

  - **[[Gen AI]] (생성형 AI)**: ChatGPT, Gemini와 같이 컨텐츠 생성에 초점을 맞춘다. 질문과 답변 형식에 머무른다.
  - **[[Agentic AI]] (에이전틱 AI)**: [[Claude Code]], Gemini Agent와 같이 **목표 달성(Goal-oriented)**이 목적이다. 스스로 계획(Plan)을 짜고, 도구(Tool)를 사용하며, 코딩이나 복잡한 리포트 작성에 특화되어 있다.

- **컨텍스트 유지의 중요성**:

  - AI에게 일을 시킬 때 가장 중요한 것은 **맥락(Context)**을 유지하고 새로운 맥락을 업데이트하는 것이다.
  - **파이브스텝 아키텍처**는 AI가 내 의도를 정확히 파악할 수 있도록 **설계 공정(Process)**과 **아키텍처 스펙**을 표준화하여, AI와의 '바이브(Vibe)'를 맞추기 위해 고안되었다.

- **[[Claude Code]]의 강력함 (Feat. Skill)**:
  - **Skill**: 단순한 함수 호출(Tool)을 넘어, 일반 텍스트 파일로 관리되는 컨텍스트와 보조 스크립트, 리소스를 아우르는 개념이다.
  - AI가 스스로 언제 어떤 맥락을 로드할지 판단하여 **토큰(Token)**을 절약하고 효율성을 높인다.

## 2. 파이브스텝 아키텍처의 핵심 철학

> _DDD와 헥사고날 아키텍처를 실무적으로 변형하여, 모듈성과 책임의 분리를 극대화한다._

- **철학적 기반**:

  - **[[Hexagonal Architecture]] & [[DDD]] (도메인 주도 설계)**: 이를 실무적으로 변형하고, 폭포수 모델의 공정을 접목하여 반복 공정이 가능하도록 했다.
  - **모듈러 모놀리스(Modular Monolith)**: 전체 시스템이 아닌 **모듈(Module)** 단위의 완결성을 추구한다.

- **설계 원칙**:
  - **책임의 명확한 분리**: 모델(Model), 규칙(Policy/RuleSet), 서비스(Service)를 명확히 구분한다.
    - 특히 **서비스(Service)에는 절대로 비즈니스 로직을 넣지 않는다.**
  - **탈 프레임워크 (Framework Agnostic)**: 도메인 모델(Model)은 스프링 등 특정 프레임워크에 종속되지 않고 순수성을 유지해야 한다.

## 3. 상세 프로세스: 5단계 표준 공정

> _실제 코드 예시(첨부 파일 업로드 모듈)를 통해 5단계 프로세스를 구체적으로 분석한다._

### Step 1: 도메인 자아 확립 (Model Discovery)

- **핵심**: **[[Aggregate Root]] (AR)** 정의 및 캡슐화.
- **구현 디테일**:
  - **생성자 규칙**: 기본 생성자는 `Entity ID`와 `Operator`(조작자)를 받는다.
  - **복원 메서드 (`reconstitute`)**: DB에서 데이터를 불러와 AR을 재구성하는 `static` 메서드를 제공하며, 이를 위해 `private` 풀 생성자를 둔다.
  - **불변성 보장**: AR 내부 컬렉션을 외부로 내보낼 때는 `Collections.unmodifiableList` 등을 사용하여 방어적 복사를 수행한다.

### Step 2: 규칙과 정책 (Policy & RuleSet)

- **개념**: AR 내부 상태 변경 시 필요한 제약 조건(예: 파일 개수 제한, 확장자 체크)을 처리한다.
- **구현 방식**:
  - **인터페이스(Interface) 활용**: `AttachFilePolicy`와 같이 인터페이스로 정의하여 AR이 특정 구현체(스프링 설정 등)에 오염되지 않도록 보호한다.
  - **메서드 주입 (Method Injection)**: AR 생성 시점이 아니라, 비즈니스 행위가 일어나는 메서드 호출 시점에 Policy를 파라미터로 주입받는다.

### Step 3: 액티비티 (Activity & Port)

- **개념**: 도메인이 외부 세계(DB, 스토리지, API)와 소통하기 위한 구체적인 기술적 행위. [[Use Case]]와 밀접하다.
- **구조 (CQRS 적용)**:
  - **Command Activity**: 상태 변경 (저장, 삭제).
  - **Query Activity**: 조회.
  - **Storage/Stream Activity**: 물리적 파일 저장소나 스트림 처리.
- **어댑터(Adapter)**: `Activity` 인터페이스를 구현한 구현체(Impl)에서 실제 JPA Repository나 AWS S3 SDK 등을 사용한다.

### Step 4: 오케스트레이션 (Service)

- **핵심 역할**: **오직 흐름 제어(Orchestration)만 담당한다.**
  > [!WARNING] 주의
  > 서비스 레이어에는 비즈니스 로직(분기 처리, 계산 등)이 절대 들어가서는 안 된다. 이는 AI가 가장 헷갈려하는 부분이기도 하다.
- **기능**:
  - 트랜잭션 경계 설정 (`@Transactional`).
  - AR을 복원(`reconstitute`)하고, 적절한 `Activity`를 호출하여 작업을 위임하는 역할만 수행한다.

### Step 5: 반복 공정 검증 (Testing)

- **전략**: 공정의 마지막 단계지만, 실제로는 각 단계(Step 1~4) 중간에 수시로 수행된다.
- **테스트 유형**:
  - **Slice Test 지향**: 전체 통합 테스트보다는 모듈 단위의 슬라이스 테스트를 권장한다.
  - **Controller Test**: [[Spring REST Docs]]를 활용하여 테스트와 동시에 API 문서를 생성한다. 이는 프론트엔드 개발자(혹은 AI)에게 명확한 맥락을 제공한다.
  - **Logic Test**: 서비스 레이어 테스트는 거의 생략 가능하며, 대신 모델(AR)과 정책(Policy) 테스트에 집중한다.
  - **File IO Test**: JUnit의 `@TempDir`을 활용하여 가상 임시 디렉토리에서 파일 업로드를 검증한다.

## 4. 기존 아키텍처와의 비교 및 실무 가이드

### vs. Layered Architecture

- **Layered Architecture**: 서비스 레이어에 비즈니스 로직이 집중되어 '거대 서비스(Fat Service)'와 '빈약한 도메인 모델(Anemic Domain Model)'을 양산한다. 프레임워크 종속적이다.
- **5-Step Architecture**: 로직은 AR과 Policy에, 흐름은 Service에, 기술은 Activity에 분산되어 있다. 모듈 단위 테스트가 용이하여 AI 협업 시 컨텍스트 오염을 줄인다.

### 실무 적용 가이드

1. **모듈 구성**: `Application`(Activity), `Model`, `Port`, `Infrastructure`(Adapter), `API` 패키지로 명확히 나눈다.
2. **필수 도구**:
   - **[[Spring Modulith]]**: 모듈 간 경계 강제 및 이벤트 기반 연동.
   - **[[Spring REST Docs]]**: 문서화를 통한 컨텍스트 공유.
   - **[[Testcontainers]]**: DB 등 인프라 의존성 테스트.

## 결론 및 액션 아이템

> _파이브스텝 아키텍처는 사람이 코딩할 때도 명확한 가이드를 제공하지만, AI 에이전트와 협업할 때 그 진가가 발휘된다. 표준화된 공정은 AI에게 '좋은 프롬프트' 그 자체가 된다._

- **핵심 시사점**: AI 시대를 맞아 아키텍처는 기계(AI)가 이해하기 쉬운 구조, 즉 **명시적이고 책임이 세분화된 구조**로 진화해야 한다.
- **Action Items**:
  - [ ] **샘플 코드 분석**: GitHub에 공개된 예제 코드(첨부 파일 모듈)를 클론하여 패키지 구조와 책임 분리를 직접 확인한다.
  - [ ] **작은 모듈 적용**: 현재 진행 중인 프로젝트의 작은 기능(예: 댓글, 좋아요) 하나를 선정하여 5-Step 공정으로 리팩토링해본다.
  - [ ] (Thinking): 서비스 레이어에서 비즈니스 로직을 완전히 제거했을 때의 장단점을 팀원들과 토론해본다.

---

### 🔗 참고 자료

- 관련 노트: [[Hexagonal Architecture]], [[Domain-Driven Design]], [[Spring Modulith]]
- 언급된 도구: [[Claude Code]], [[Gemini]], [[Testcontainers]], [[Spring REST Docs]]
