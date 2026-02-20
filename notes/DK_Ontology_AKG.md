---
aliases:
created at: 2026-02-05
tags:
  - document
type:
  - document
author:
share_link: https://share.note.sx/rfqje166#/VX8sZqVXmKWw36wc6xuBpsoWxa29Wgmplu6ZfNTCXU
share_updated: 2026-02-05T17:31:41+09:00
---

## [Phase 1] Macro Analysis and Planning (Top-Down)

### 1. The Core Thesis (S-E-S: 구조적 변동의 정의)

이 프롬프트 전체를 관통하는 핵심 논증 구조는 **"모호성의 해상"과 "통찰의 체계화"** 입니다.

- **S1 (Initial State - 혼돈과 모호성):** 사용자의 질문이 비정형적이고 단편적이며, 문제의 본질이나 인과관계가 드러나지 않은 초기 상태입니다.
- **E (Intervention - 구조화 엔진):** 5단계로 구성된 '온톨로지 및 팔란티어(Palantir) 방법론'을 적용하여, 정적인 개념 정의와 동적인 시스템 역학을 순차적으로 투입하는 인지적 개입입니다.
- **S2 (Final State - 구조화된 지혜):** 단순한 정보가 아닌, 다차원적 통찰과 실행 가능한 의사결정 프레임워크가 확보된 상태로, 사용자가 문제의 본질을 꿰뚫고 행동할 수 있는 상태입니다.

### 2. Argument Blocks (논증 블록 정의)

이 프레임워크는 명확한 5단계 파이프라인을 가지고 있으므로, 각 단계를 하나의 독립적인 **논증 블록(Argument Block)** 으로 설정합니다.

- **M_01 [Block 1: 온톨로지 구축]:** 문제를 정의하고 개념 간의 관계(정적 구조)를 매핑하여 지식의 뼈대를 세우는 단계.
- **M_02 [Block 2: 시스템 역학]:** 정적 구조에 시간과 인과관계(동적 흐름)를 부여하여 피드백 루프를 발견하는 단계.
- **M_03 [Block 3: 다차원 심층 분석]:** 현상 이면의 근본 원인과 패턴을 찾아내어 통찰을 추출하는 단계.
- **M_04 [Block 4: 솔루션 및 의사결정]:** 추출된 통찰을 바탕으로 실행 가능한 대안과 리스크를 평가하는 단계.
- **M_05 [Block 5: 종합 및 맥락화]:** 모든 분석을 통합하여 사용자 질문에 대한 직관적인 해답과 미래 전망을 제시하는 단계.

### 3. Macro Abstract Knowledge Graph (시각화)

```merlight
flowchart TD
    %% S1: 초기 상태
    S1((S1 - 비구조적 질문)) --> M_01

    %% Argument Blocks: 5단계 프로세스
    M_01[M_01: 온톨로지 구축] --> M_02[M_02: 시스템 역학]
    M_02 --> M_03[M_03: 다차원 통찰]
    M_03 --> M_04[M_04: 솔루션 설계]
    M_04 --> M_05[M_05: 종합 및 맥락화]

    %% S2: 최종 상태
    M_05 --> S2((S2 - 구조화된 지혜))

    %% 스타일링
    style S1 fill:#a5d8ff, stroke:#0288d1, stroke-width:3px
    style S2 fill:#ffe0b2, stroke:#ff5722, stroke-width:3px

    %% 블록 스타일
    style M_01 stroke-width:2px
    style M_02 stroke-width:2px
    style M_03 stroke-width:2px
    style M_04 stroke-width:2px
    style M_05 stroke-width:2px
```

### 4. Key Citations (거시적 흐름의 증거)

> "The goal of this framework is not simply to provide information, but to provide deep understanding and insight... Through an ontology-based approach, it clarifies the structure of the problem... and derives deep insights... Ultimately, it provides practical support for users to make better decisions."
>
> _(단순 정보 제공이 아닌, 온톨로지 접근을 통해 구조를 명확히 하고 심층 통찰을 도출하여 의사결정을 지원하는 것이 목표임을 명시)_

## Block 1: Problem Understanding and Ontology Construction

**"비정형 텍스트를 정형화된 지식 객체로 변환"**

이 단계는 단순한 '독해'가 아니라, 텍스트에서 **'존재(Entity)'와 '관계(Relationship)'를 추출**하여 지식의 정적인 골격을 세우는 과정입니다.

#### 1. Micro Analysis Diagram (B1)

```merlight
flowchart TD
    %% Subgraph: Context (Input)
    subgraph Context [초기 상태: 비정형 질문]
        direction TB
        B1_01(사용자 입력 데이터)
    end

    %% Key Intervention (Event)
    B1_02{{온톨로지 모델링 수행<br>개념 추출 및 관계 정의}}

    %% Subgraph: Result (Output Structure)
    subgraph Structure [결과: 구조화된 정적 지식]
        direction TB
        B1_03[문제 정의<br>의도/맥락/목표]
        B1_04[핵심 개념 객체<br>정의/속성/중요도]
        B1_05[개념 관계 매핑<br>주체-관계-객체]
        B1_06(지식 공백 식별<br>불확실 영역)
    end

    %% Links
    B1_01 --"맥락 파악"--> B1_02
    B1_02 == "구조화" ==> B1_03 & B1_04 & B1_05
    B1_04 & B1_05 -.-> B1_06

    %% Styles
    style B1_01 fill:#a5d8ff, stroke:#0288d1, stroke-width:2px
    style B1_02 fill:#fff9c4, stroke:#fbc02d, stroke-width:4px
    style B1_03 fill:#ffe0b2, stroke:#ff5722
    style B1_04 fill:#ffe0b2, stroke:#ff5722
    style B1_05 fill:#ffe0b2, stroke:#ff5722
    style B1_06 fill:#e1bee7, stroke:#8e24aa, stroke-dasharray: 5 5
```

#### 2. Key Elements & Citations

- **The Context (입력):** 사용자의 문제나 질문. 아직 구조가 없는 원석 상태입니다.
  - > "Input: User's question or problem to be solved"
- **The Intervention (개입 - 온톨로지 엔진):** 텍스트를 읽는 것이 아니라, 문제 도메인의 핵심 개념과 속성을 '식별(Identify)'하고 모델을 '구축(Build)'하는 행위입니다.
  - > "Identify the core concepts, relationships, and properties... Build an ontology model based on this."
- **The Result (결과 - JSON 구조):** 단순 줄글 답변이 아닌, 명확한 키(Key)와 값(Value)을 가진 JSON 데이터로 출력됩니다.
  - **문제 정의:** `core_question`, `background_context`, `goal`
  - **개념과 관계:** `core_concepts` (Name, Definition, Properties), `concept_relationships` (Subject, Relationship, Object)
  - **지식의 한계:** `knowledge_gaps` (현재 명확하지 않은 영역)

#### 3. Summary of Structural Shift (S-E-S)

이 블록은 "모호한 문장($S_{start}$)"을 "개념 추출 및 관계 정의($e_1$)"라는 필터를 통과시켜 "상호 연결된 지식 그래프($S_{end}$)"로 변환합니다. 이는 이후 단계에서 시스템 역학(시간/인과)을 시뮬레이션하기 위한 '지도(Map)'를 그리는 필수적인 기초 작업입니다.

## Block 2: System Dynamics Analysis

**"정적 지도에 '시간'과 '인과'의 숨결을 불어넣다"**

이 단계는 앞서 정의된 정적인 개념들(Step 1)이 실제 세계에서 어떻게 상호작용하며 움직이는지를 분석합니다. 단편적인 인과관계를 넘어, 순환하는 피드백 루프(Feedback Loops)와 시스템 전체를 움직이는 지렛대 포인트(Leverage Points)를 찾아내는 것이 핵심입니다.

#### 1. Micro Analysis Diagram (B2)

```merlight
flowchart TD
    %% Subgraph: Context (Input from Step 1)
    subgraph Context [입력: 정적 지식 모델]
        direction TB
        B2_01(Step 1: 온톨로지 모델)
    end

    %% Key Intervention (Event)
    B2_02{{동적 상호작용 분석<br>인과성 및 시간차 추적}}

    %% Subgraph: Result (Output Structure)
    subgraph Structure [결과: 동적 시스템 모델]
        direction TB
        B2_03[핵심 변수 식별<br>원인/결과/매개]
        B2_04(인과 관계망<br>강도 및 지연 효과)
        B2_05{피드백 루프<br>강화 R / 균형 B}
        B2_06{{지렛대 포인트<br>최적 개입 지점}}
    end

    %% Links
    B2_01 --"변수 데이터"--> B2_02
    B2_02 == "역학 모델링" ==> B2_03
    B2_03 --> B2_04
    B2_04 --"패턴 형성"--> B2_05
    B2_05 --"시스템 제어점 발견"--> B2_06

    %% Styles
    style B2_01 fill:#a5d8ff, stroke:#0288d1, stroke-width:2px, stroke-dasharray: 5 5
    style B2_02 fill:#fff9c4, stroke:#fbc02d, stroke-width:4px
    style B2_03 fill:#ffe0b2, stroke:#ff5722
    style B2_04 fill:#ffe0b2, stroke:#ff5722
    style B2_05 fill:#ffccbc, stroke:#d84315
    style B2_06 fill:#e1bee7, stroke:#8e24aa, stroke-width:3px
```

#### 2. Key Elements & Citations

- **The Context (입력):** 1단계에서 구축된 온톨로지 모델이 입력값이 됩니다.
  - > "Input: Ontology model built in Step 1"
- **The Intervention (개입 - 시스템 사고):** 단순한 상관관계가 아닌, 시간에 따른 변화와 지연(Delay), 그리고 순환 구조를 파악합니다.
  - > "Analyze the dynamic characteristics... Identify causal relationships and feedback loops... Identify leverage points"
- **The Result (결과 - 구조적 통찰):** 시스템을 움직이는 매커니즘을 JSON으로 시각화합니다.
  - **변수(Variables):** 성격(원인/결과/매개) 규명.
  - **피드백 루프(Feedback Loops):** 시스템을 성장시키는 강화(Reinforcing) 루프인지, 안정시키는 균형(Balancing) 루프인지 식별.
  - **지렛대 포인트(Leverage Points):** 가장 적은 노력으로 시스템 전체에 가장 큰 영향을 줄 수 있는 결정적 개입 지점.

#### 3. Summary of Structural Shift (S-E-S)

이 블록은 "정지된 지식 객체($S_{start}$)"에 "시간축과 인과율($e_2$)"을 적용하여, 스스로 작동하고 변화하는 "동적 시스템 모델($S_{end}$)"로 진화시킵니다. 이제 우리는 무엇이 문제인지(Step 1)를 넘어, 그 문제가 왜 반복되는지(Step 2)를 이해하게 되었습니다.

## Block 3: Multi-dimensional Analysis and Insight Derivation

**"표면적 현상 너머의 심층적 패턴과 본질 규명"**

이 단계는 Step 1(구조)과 Step 2(역학)에서 얻은 데이터를 입체적으로 해석하는 과정입니다. 기계적인 시스템 분석을 넘어, 다양한 차원(기술, 사회, 경제 등)의 렌즈를 통해 '근본 원인(Root Causes)'을 파고들고, 반복되는 '패턴(Patterns)'을 감지하여 실행을 위한 '통찰(Insight)'로 정제합니다.

#### 1. Micro Analysis Diagram (B3)

```merlight
flowchart TD
    %% Subgraph: Context (Input from Step 1 & 2)
    subgraph Context [입력: 시스템 모델 & 역학]
        direction TB
        B3_01(Step 1&2: 온톨로지 및 루프)
    end

    %% Key Intervention (Event)
    B3_02{{다차원 렌즈 적용<br>및 패턴 인식}}

    %% Subgraph: Result (Output Structure)
    subgraph Structure [결과: 정제된 통찰]
        direction TB
        B3_03[분석 차원 확장<br>기술/사회/심리 등]
        B3_04(근본 원인 규명<br>표면 현상 이면)
        B3_05(패턴 및 트렌드<br>반복적 맥락)
        B3_06{{핵심 통찰 도출<br>Insight & Basis}}
    end

    %% Links
    B3_01 --"데이터 통합"--> B3_02
    B3_02 == "심층 해석" ==> B3_03
    B3_03 & B3_04 & B3_05 --> B3_06
    B3_02 -.-> B3_04 & B3_05

    %% Styles
    style B3_01 fill:#a5d8ff, stroke:#0288d1, stroke-width:2px, stroke-dasharray: 5 5
    style B3_02 fill:#fff9c4, stroke:#fbc02d, stroke-width:4px
    style B3_03 fill:#ffe0b2, stroke:#ff5722
    style B3_04 fill:#ffe0b2, stroke:#ff5722
    style B3_05 fill:#ffe0b2, stroke:#ff5722
    style B3_06 fill:#e1bee7, stroke:#8e24aa, stroke-width:3px
```

#### 2. Key Elements & Citations

- **The Context (입력):** 이전 단계에서 규명된 시스템의 작동 방식(Ontology + Dynamics).
  - > "Input: Results from Steps 1 and 2"
- **The Intervention (개입 - 해석적 깊이):** 단일 관점이 아닌 다각도(Multi-dimensional)에서 문제를 바라보고, 숨겨진 의미를 발굴합니다.
  - > "Analyze the problem from various perspectives... Identify root causes and patterns beyond surface phenomena."
- **The Result (결과 - 통찰의 결정체):** 문제 해결의 열쇠가 되는 핵심 발견들을 구조화합니다.
  - **분석 차원(Dimensions):** 기술적, 사회적, 경제적 등 다각도 조명.
  - **근본 원인(Root Causes):** 증상(Symptom)이 아닌 원인(Cause) 식별.
  - **핵심 통찰(Key Insights):** 단순 사실 나열이 아닌, "그래서 이것이 무엇을 의미하는가?"에 대한 답.

#### 3. Summary of Structural Shift (S-E-S)

이 블록은 "작동 원리에 대한 지식($S_{start}$)"을 "다차원적 해석과 패턴 인식($e_3$)"이라는 프리즘에 통과시켜, 문제의 본질을 꿰뚫는 "심층적 통찰($S_{end}$)"로 승화시킵니다. 이제 시스템이 '어떻게' 도는지 알 뿐만 아니라, '왜' 그렇게 도는지에 대한 철학적/실질적 이해를 갖게 되었습니다.

## Block 4: Solution Design and Decision Support

**"통찰을 실행 가능한 전략과 선택의 지도로 변환"**

이 단계는 앞서 도출된 심층 통찰(Step 3)을 바탕으로 구체적인 해결책을 설계하는 '공학적' 단계입니다. 단순한 해결책 제시에 그치지 않고, 실행에 필요한 **자원과 리스크를 평가**하고, 여러 대안 중 최적의 선택을 할 수 있도록 **의사결정 기준(Framework)**을 제공하는 것이 핵심입니다.

#### 1. Micro Analysis Diagram (B4)

```merlight
flowchart TD
    %% Subgraph: Context (Input from Step 3)
    subgraph Context [입력: 심층 통찰 및 원인]
        direction TB
        B4_01(Step 3: 핵심 통찰)
    end

    %% Key Intervention (Event)
    B4_02{{솔루션 엔지니어링<br>및 가치 평가}}

    %% Subgraph: Result (Output Structure)
    subgraph Structure [결과: 실행 전략 및 판단 기준]
        direction TB
        B4_03[구체적 솔루션<br>자원/장단점/리스크]
        B4_04{의사결정 프레임워크<br>우선순위/트레이드오프}
        B4_05(실행 로드맵<br>즉시/단기/장기)
        B4_06(리스크 완화 전략<br>대응책)
    end

    %% Links
    B4_01 --"통찰 기반 설계"--> B4_02
    B4_02 == "전략 수립" ==> B4_03
    B4_03 --> B4_06
    B4_02 --"판단 기준 수립"--> B4_04
    B4_04 -.-> B4_05

    %% Styles
    style B4_01 fill:#a5d8ff, stroke:#0288d1, stroke-width:2px, stroke-dasharray: 5 5
    style B4_02 fill:#fff9c4, stroke:#fbc02d, stroke-width:4px
    style B4_03 fill:#ffe0b2, stroke:#ff5722
    style B4_04 fill:#ffccbc, stroke:#d84315
    style B4_05 fill:#ffe0b2, stroke:#ff5722
    style B4_06 fill:#e1bee7, stroke:#8e24aa
```

#### 2. Key Elements & Citations

- **The Context (입력):** 3단계에서 얻은 '왜(Why)'에 대한 답(Insight)이 입력됩니다.
  - > "Input: Results from Steps 1-3"
- **The Intervention (개입 - 전략적 구체화):** 통찰을 현실적인 대안으로 바꾸고, 각 대안의 타당성을 검증합니다. 특히 '결정을 내리는 방법' 자체를 설계합니다.
  - > "Design possible solutions... Evaluate the pros and cons... Provide a framework for decision making."
- **The Result (결과 - 행동 지침):** 실행을 위한 구체적인 청사진과 내비게이션을 제공합니다.
  - **구체적 솔루션(Specific Solutions):** 필요한 자원, 장단점, 리스크 요인 상세화.
  - **의사결정 프레임워크(Decision Framework):** 상충 관계(Trade-offs)를 고려한 평가 기준 및 우선순위 선정 방법.
  - **추천 행동(Recommended Actions):** 시계열(즉시/단기/장기)에 따른 실행 계획.

#### 3. Summary of Structural Shift (S-E-S)

이 블록은 "추상적인 깨달음($S_{start}$)"을 "전략적 엔지니어링과 가치 평가($e_4$)"\*\* 과정을 통해 "검증된 실행 계획과 판단 도구($S_{end}$)"로 물질화시킵니다. 사용자는 이제 무엇을 해야 할지 알 뿐만 아니라, '어떤 기준으로 선택해야 하는지'에 대한 메타 인지적 도구까지 확보하게 됩니다.

## [Phase 2] Micro Abstract Knowledge Graph

**[M_05: 종합 및 맥락화]** 단계에 대한 정밀 분석을 수행합니다.

---

### Block 5: Synthesis and Contextualization

**"복잡한 분석을 명쾌한 해답과 미래의 전망으로 통합"**

이 마지막 단계는 지금까지 수행한 방대한 분석(Step 1~4)을 사용자가 소화 가능한 형태로 재조립하는 과정입니다. 단순히 요약하는 것이 아니라, 사용자의 원래 질문에 대한 직답(Direct Answer)을 제시하고, 논의를 더 넓은 맥락(Broader Context)으로 확장하여 문제 해결 이후의 미래까지 조망합니다.

#### 1. Micro Analysis Diagram (B5)

```merlight
flowchart TD
    %% Subgraph: Context (Input from Steps 1-4)
    subgraph Context [입력: 분석 결과 집합체]
        direction TB
        B5_01(Step 1~4: 구조/역학/통찰/전략)
    end

    %% Key Intervention (Event)
    B5_02{{통합 및 재맥락화<br>Synthesis & Contextualization}}

    %% Subgraph: Result (Output Structure)
    subgraph Structure [결과: 통합된 지혜]
        direction TB
        B5_03[질문 재정의<br>본질적 의도 명확화]
        B5_04[핵심 답변<br>Core Answer]
        B5_05(확장적 함의<br>미래 전망/연관 분야)
        B5_06(한계 및 다음 단계<br>Next Steps)
    end

    %% Links
    B5_01 --"모든 데이터 집약"--> B5_02
    B5_02 == "최종 정제" ==> B5_03
    B5_03 --> B5_04
    B5_04 --> B5_05 & B5_06
    B5_05 -.-> B5_06

    %% Styles
    style B5_01 fill:#a5d8ff, stroke:#0288d1, stroke-width:2px, stroke-dasharray: 5 5
    style B5_02 fill:#fff9c4, stroke:#fbc02d, stroke-width:4px
    style B5_03 fill:#ffe0b2, stroke:#ff5722
    style B5_04 fill:#ffccbc, stroke:#d84315, stroke-width:3px
    style B5_05 fill:#ffe0b2, stroke:#ff5722
    style B5_06 fill:#e1bee7, stroke:#8e24aa
```

#### 2. Key Elements & Citations

- **The Context (입력):** 앞선 모든 단계의 산출물(온톨로지, 시스템 모델, 통찰, 솔루션)이 입력됩니다.
  - > "Input: Results from Steps 1-4"
- **The Intervention (개입 - 통합적 사고):** 분석 조각들을 모아 하나의 완성된 이야기로 엮어내고, 질문의 맥락을 재해석합니다.
  - > "Synthesize all analyses and solutions... Consider the meaning of the problem and solution in a broader context."
- **The Result (결과 - 최종 답변):** 사용자가 취해야 할 명확한 행동과 그 의미를 전달합니다.
  - **핵심 답변(Core Answer):** 사용자의 원래 질문에 대한 명확하고 직접적인 대답.
  - **확장적 함의(Broader Implications):** 이 문제가 미래나 다른 분야에 미칠 영향(Future Outlook).
  - **다음 단계(Next Steps):** 사용자가 당장 수행해야 할 구체적인 행동 제안.

#### 3. Summary of Structural Shift (S-E-S)

이 블록은 "분산된 분석 결과물들($S_{start}$)"을 "종합 및 맥락화($e_5$)"\*\* 과정을 통해, 사용자의 질문에 화답하는 "완결된 서사 및 지혜($S_{end}$)"로 통합합니다. 이로써 사용자는 분석의 미로에서 빠져나와, 명확한 결론을 손에 쥐고 현실로 복귀하게 됩니다.
