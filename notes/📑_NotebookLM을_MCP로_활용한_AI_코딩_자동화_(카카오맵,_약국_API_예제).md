---
created: 2026-02-11
source_type: YouTube
url: https://www.youtube.com/embed/o_5nEm1ALIM?si=yir-xCowfBMWIpoy
channel: AI 앱 스토리
status: 🌲 Permanent Note
tags:
  - "#Knowledge_Management"
  - "#AI_Coding"
  - "#NotebookLM"
  - "#MCP"
  - "#API_Integration"
---

![](https://www.youtube.com/embed/o_5nEm1ALIM?si=yir-xCowfBMWIpoy)

> [!ABSTRACT] 3줄 요약
>
> 1. **NotebookLM의 역할 진화**: 단순 요약 도구가 아니라, API 문서와 기술 레퍼런스를 학습시켜 AI 코딩 에이전트에게 실시간으로 문맥을 제공하는 **MCP(Model Context Protocol)** 서버로 활용한다.
> 2. **개발 워크플로우 혁신**: 개발자가 문서를 직접 읽는 대신, NotebookLM이 문서를 분석해 '구현 로직'과 '최적화된 프롬프트'를 생성하고 이를 코딩 툴(Anti-Gravity)에 주입한다.
> 3. **환각 최소화**: AI가 학습된 일반 지식이 아닌, NotebookLM에 업로드된 최신/특정 문서를 참조(Retrieval)하여 코딩하므로 **[[Hallucination]]**이 현저히 줄어든다.

## 목차

- [[#1. NotebookLM: AI를 위한 동적 지식 베이스 구축]]
- [[#2. MCP 연결: 노트북과 코딩 에이전트의 브리지]]
- [[#3. 실전 개발: 트러블슈팅과 모델 스위칭 전략]]
- [[#4. 핵심 원리: RAG를 통한 환각 방지]]
- [[#결론 및 액션 아이템]]

---

## 1. NotebookLM: AI를 위한 동적 지식 베이스 구축

> _개발자가 API 문서를 정독하는 시간을 제거하고, AI가 참조할 수 있는 '전용 도서관'을 만드는 단계다._

- **문서화의 자동화**: 기존에는 개발자가 샘플 예제나 레퍼런스 문서를 일일이 분석해야 했으나, 이제는 [[NotebookLM]]에 관련 URL과 문서를 업로드하는 것으로 대체한다.
- **Data Ingestion (데이터 주입)**:
  - **타겟 프로젝트**: 내 위치 반경 100m 약국 조회 앱.
  - **필요 소스**:
    1. **Kakao Map API**: 기본 가이드, 마커 샘플 예제, 레퍼런스 문서 (총 3개 URL).
    2. **공공 데이터 포털**: 약국 정보 서비스 API 가이드 (PDF/DOC 다운로드 후 업로드).
  - **주의사항**: API Key는 보안상 노트북에 직접 업로드하지 않고, [[Environment Variable]](환경 변수)로 관리해야 한다.

## 2. MCP 연결: 노트북과 코딩 에이전트의 브리지

### 프롬프트 엔지니어링의 위임

- **메타 프롬프팅 (Meta-Prompting)**: 개발자가 직접 코딩 프롬프트를 작성하는 것이 아니라, NotebookLM에게 "이 앱을 만들 건데 필요한 핵심 기능 로직과 URL을 분석해서 **코딩 에이전트(Anti-Gravity)에 넣을 프롬프트를 써줘**"라고 요청한다.
  - _이점:_ 문서의 핵심 제약 사항이 반영된 정교한 기술 명세서를 얻을 수 있다.

### MCP(Model Context Protocol) 설정

- **연동 과정**:
  1. NotebookLM에서 '공유 링크'를 생성한다.
  2. AI 코딩 툴(Anti-Gravity)의 MCP 설정 섹션에 해당 노트북 링크를 등록한다.
  3. 프롬프트 입력 시 "등록한 노트북을 참고하라"는 지시어를 추가한다.
- **[[MCP]]의 역할**: 단순한 복사-붙여넣기가 아니라, 코딩 에이전트가 작업 도중 모르는 내용이 생기면 연결된 노트북(지식 베이스)에 실시간으로 '질문'하여 답을 얻어내는 **동적 연결 고리** 역할을 한다.

## 3. 실전 개발: 트러블슈팅과 모델 스위칭 전략

> _AI가 코드를 작성하는 동안 발생하는 문제 해결(Debugging)과 최적화 과정이다._

- **환경 설정의 중요성**:
  - **API Key 관리**: `.env` 파일에 발급받은 키를 저장하여 깃허브 등에 유출되지 않도록 한다.
  - **도메인 화이트리스트**: 카카오 API 등은 실행 도메인 등록이 필수다. 로컬 테스트 시 포트 번호(예: `localhost:3000` vs `5174`)가 프레임워크(React vs Vite)마다 다르므로, 실행 후 뜨는 주소를 정확히 등록해야 맵이 렌더링된다.
- **Iterative Debugging (반복적 디버깅)**:
  - `F12` 개발자 도구의 콘솔 에러 메시지를 그대로 긁어서 AI에게 전달한다.
  - "이 에러가 났으니 수정해줘"라고 반복 요청하며 완성도를 높인다.
- **모델 스위칭 (Model Switching)**:
  > [!TIP] 가성비 vs 지능
  >
  > - **Gemini 3/Flash**: 속도가 빠르고 저렴하여 초기 구성이나 간단한 수정에 적합하다.
  > - **Claude Sonnet (3.5/4.5)**: AI가 멍청하게 굴거나 해결 못 하는 복잡한 로직(Logic) 문제 발생 시, 더 똑똑하지만 비싼 모델로 교체하여 해결한다.

## 4. 핵심 원리: RAG를 통한 환각 방지

### 로그 분석을 통한 검증

- 작업이 끝난 후 안티그래비티(Anti-Gravity)의 로그를 확인해보면, AI가 코드를 짜다가 막힐 때마다 **"NotebookLM에게 질문(Query)을 던지고 답변을 받아온 기록"**이 남아있다.
- **[[RAG]] (Retrieval-Augmented Generation) 효과**:
  - LLM이 사전에 학습한 낡은 지식이 아니라, 사용자가 방금 업로드한 '최신 API 문서'를 근거로 코딩한다.
  - 결과적으로 **Hallucination(환각)**이 줄어들고, 실행 가능한(Executable) 코드가 나올 확률이 비약적으로 상승한다.

## 결론 및 액션 아이템

> _양질의 문서를 노트북에 채워 넣는 것이 곧 코딩의 품질을 결정한다._

- **핵심 시사점**: AI 코딩의 미래는 '누가 더 코드를 잘 짜나'가 아니라, '누가 더 AI에게 **정확한 문맥(Context)**을 제공하느냐'에 달려 있다. NotebookLM은 가장 강력한 문맥 주입 도구다.
- **Action Items**:
  - [ ] 진행 중인 프로젝트의 기술 문서(API Docs, 라이브러리 가이드)를 수집하여 NotebookLM 소스로 추가하기.
  - [ ] AI 코딩 툴(Cursor, Windsurf 등)이나 MCP 지원 도구에 해당 노트북을 연동해보기.
  - [ ] (Thinking): [[Prompt Engineering]]보다 [[Knowledge Curation]](지식 큐레이션) 능력이 더 중요해지는 시점에 어떻게 대비할 것인가?

---

### 🔗 참고 자료

- 관련 노트: [[MCP (Model Context Protocol)]], [[RAG Implementation]], [[AI-Assisted Development]]
- 언급된 도구/리소스: [[Google NotebookLM]], [[Anti-Gravity]] (AI Coding Tool), [[Kakao Map API]], [[Public Data Portal]]
