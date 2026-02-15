# step 1

**Lead Design System Architect**로서, 귀하가 제공한 'Urban ThinkTank' 웹페이지 UI를 [Design Benchmarking Protocol V5.0]에 의거하여 정밀 분석한 명세서입니다.

이 디자인은 **"Swiss International Style"**을 기반으로 한 미니멀리즘, 강력한 타이포그래피 계층 구조, 그리고 엄격한 그리드 시스템이 특징입니다. 개발자가 즉시 `variables.css` 또는 `tailwind.config.js`에 적용할 수 있는 구체적인 값으로 변환하였습니다.

---

### 1. Color DNA & Semantic Naming (색상 및 의미론적 명명)

색상 팔레트는 극도로 절제된 흑백(Monochrome) 기반이며, 이미지를 통해서만 색채를 전달하는 전략을 취하고 있습니다. 명도 대비는 AAA 등급을 충족합니다.

| 변수명 (Variable Name) | Hex Code | 역할 (Role) | 사용처 (Usage) | 명도 대비 (Contrast) |
| --- | --- | --- | --- | --- |
| `--color-surface-base` | `#FFFFFF` | **Surface (Bg)** | 전체 페이지 배경 | N/A |
| `--color-surface-muted` | `#F4F4F4` | **Surface (Alt)** | 하단 스크롤 영역 또는 호버 상태 (추정) | Pass |
| `--color-text-primary` | `#000000` | **Text-Title** | 로고, 메인 헤더(H1~H3), 네비게이션 | AAA (21:1) |
| `--color-text-body` | `#333333` | **Text-Body** | 본문 설명 텍스트 (About description) | AAA (12.6:1) |
| `--color-text-meta` | `#666666` | **Text-Caption** | 날짜, 장소 등 메타 정보 | AA (5.7:1) |
| `--color-border-strong` | `#000000` | **Border** | 섹션 구분선 (Divider) | 뚜렷한 구분감 |
| `--color-icon-bg` | `#000000` | **Action** | '+' 아이콘 배경 | AAA (White Icon) |

---

### 2. Typography & Vertical Rhythm (서체 및 수직 리듬)

강렬한 산세리프(Sans-serif) 폰트를 사용하여 모던함과 가독성을 확보했습니다.

* **Primary Font (추정):** `Helvetica Now` 또는 `Akzidenz-Grotesk`
* **Dev Replacement (Google Fonts):** `Inter` (추천) 또는 `Roboto` (대안)
* **Base Size:** 16px (Desktop 기준)

| 등급 (Token) | Size (px/rem) | Weight | Line-Height | Letter-spacing | 사용 예시 |
| --- | --- | --- | --- | --- | --- |
| `text-display-1` | 64px / 4rem | 700 (Bold) | 1.1 (Tight) | -0.02em | 우측 상단 'ETH TEACHING' |
| `text-heading-2` | 24px / 1.5rem | 700 (Bold) | 1.3 | -0.01em | 로고 'Urban ThinkTank' |
| `text-heading-3` | 18px / 1.125rem | 700 (Bold) | 1.4 | 0 | 섹션 타이틀 (About, Projects) |
| `text-heading-4` | 16px / 1rem | 700 (Bold) | 1.4 | 0 | 카드 타이틀 (Open Village 등) |
| `text-body-1` | 16px / 1rem | 400 (Regular) | 1.5 (Relaxed) | 0 | 본문 설명 텍스트 |
| `text-caption` | 14px / 0.875rem | 400 (Regular) | 1.4 | 0 | 날짜, 세미나 정보 |

**Vertical Rhythm Rule:**

* 기본 줄 간격(Line-height)은 **4px 그리드**에 맞춰져 있습니다.
* Body 텍스트의 행간은 `24px` (16px * 1.5)로 설정하여 가독성을 높였습니다.

---

### 3. Asset Treatment Protocol (이미지/아이콘 처리 규칙)

이미지와 아이콘은 장식적 요소를 배제하고 정보 전달에 집중된 'Brutalism' 경향을 보입니다.

| 항목 (Category) | 규칙 (Rule) | 상세 값 (Values) | 비고 (Notes) |
| --- | --- | --- | --- |
| **Image Ratio** | **3:2 (Landscape)** | Width: 100%, Height: Auto | 'Projects' 썸네일 기준. 꽉 찬 직사각형 비율. |
| **Border Radius** | **0px (Sharp)** | `border-radius: 0;` | 모든 이미지와 버튼에 둥근 모서리 없음. |
| **Hover Effect** | **Dimmed (추정)** | `opacity: 0.8` or `filter: grayscale(100%)` | 마우스 오버 시 시각적 피드백 예상. |
| **Iconography** | **Solid Circle** | Size: 24x24px, Bg: Black, Icon: White | 우측 하단 `(+)` 버튼. Stroke가 아닌 Fill 스타일. |
| **Lines** | **Solid Divider** | Height: 2px, Color: Black | 섹션 제목 아래에 굵은 구분선 적용. |

---

### 4. Layout & Spacing Token (공간 규칙)

비대칭 그리드(Asymmetrical Grid)를 사용하여 동적인 레이아웃을 구성하고 있습니다.

* **Container Max-width:** `1440px` (대형 데스크탑 기준) 또는 `90%` Fluid.
* **Spacing Base:** **8px** (8-point Grid System 적용 추정)

| 항목 (Item) | 값 (Value) | 설명 (Description) |
| --- | --- | --- |
| **Grid System** | **12 Column** | 좌측 사이드바(3 Col) + 메인 콘텐츠(9 Col) 구조. |
| **Grid Gutter** | **32px (2rem)** | 컬럼 사이의 간격이 넓어 시원한 느낌을 줌. |
| **Section Gap** | **64px ~ 80px** | 'About' 섹션과 'Projects' 섹션 사이의 수직 간격. |
| **Component Gap** | **16px ~ 24px** | 텍스트와 이미지, 타이틀과 본문 사이의 간격. |
| **Divider Spacing** | **Padding-bottom: 16px** | 텍스트(About/Projects)와 하단 검은 줄(Border) 사이 간격. |

---

### 💡 Developer Implementation Tips (구현 조언)

1. **Grid Layout (CSS Grid):**
* 전체 레이아웃은 `grid-template-columns: 1fr 3fr;` (사이드바 : 메인) 비율로 잡는 것을 추천합니다.
* 모바일에서는 `grid-template-columns: 1fr;`로 Stack 되는 구조입니다.


2. **Borders:**
* `HR` 태그를 사용하는 대신, 섹션 헤더(Header) 요소에 `border-bottom: 2px solid var(--color-border-strong);`을 적용하여 시맨틱 마크업을 유지하십시오.


3. **Typography:**
* 영문 폰트의 경우 `Helvetica`가 없을 시 `Inter`를 사용하되, `letter-spacing`을 조금 좁게(-0.01em ~ -0.02em) 조정하면 원본의 단단한 느낌을 재현할 수 있습니다.


# step 2
**Lead Design System Architect**로서, STEP 1의 파운데이션 분석을 바탕으로 [Protocol V5.0 - Layer B & C] 단계인 심화 분석 및 전략 제안을 수행합니다.

이 문서는 정적인 그래픽을 '살아있는 인터페이스'로 전환하기 위한 **Engineering Spec Sheet**입니다. 개발자는 이 문서를 통해 컴포넌트의 구조, 동작, 반응형 규칙을 명확히 이해하고 구현할 수 있습니다.

---

### 1. Atomic Component Anatomy (핵심 컴포넌트 해부)

화면 내 가장 정보 밀도가 높은 **'Project Card Module'**을 Atomic Design 방법론으로 해부하여, 재사용 가능한 코드로 정의합니다.

#### **Target Component: `Card_Project_V1**`

* **Structure:** `[Atom: Image] + [Atom: Badge/Label] + [Molecule: Text Group] + [Atom: Action Button]`

| Level | Component | CSS Specification (Fixed Values) | 비고 |
| --- | --- | --- | --- |
| **Container** | `Card Wrapper` | `display: flex; flex-direction: column; gap: 16px;` | 카드 전체 컨테이너 |
| **Atom** | `Thumbnail` | `aspect-ratio: 3 / 2; object-fit: cover; width: 100%;`<br>

<br>`border-radius: 0px; background-color: #F4F4F4;` | 이미지 로딩 전 배경색 지정 필수 |
| **Molecule** | `Header Group` | `display: flex; flex-direction: column; gap: 4px;` | 타이틀과 서브타이틀 그룹 |
| **Atom** | `Title` | `font-size: 1rem (16px); font-weight: 700; line-height: 1.4;`<br>

<br>`color: var(--color-text-primary);` | 2줄 말줄임(`line-clamp: 2`) 권장 |
| **Atom** | `Subtitle` | `font-size: 0.875rem (14px); font-weight: 400; font-style: italic;`<br>

<br>`color: var(--color-text-meta);` | 이탤릭체 스타일 적용 |
| **Atom** | `Meta Info` | `font-size: 0.875rem (14px); margin-top: 8px;`<br>

<br>`color: var(--color-text-body);` | 날짜 및 장소 정보 |
| **Atom** | `Fab Button` | `width: 24px; height: 24px; border-radius: 50%;`<br>

<br>`background: #000; color: #fff; display: grid; place-items: center;` | 우측 하단 또는 별도 배치 |

---

### 2. Interaction & Motion Choreography (동작 제안)

스위스 스타일의 건조함을 보완하고, 사용자의 행동에 명확한 피드백을 주기 위한 '절제된(Restrained)' 모션 전략입니다.

#### **A. Hover State Strategy (Mouse Over)**

* **Trigger:** 카드 전체 영역 (`.card-project:hover`)
* **Action 1 (Image):** 이미지가 미세하게 확대되는 'Scale Up' 효과. 과도한 움직임은 배제.
* `transform: scale(1.03);`
* `transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);`


* **Action 2 (Title):** 타이틀 텍스트에 밑줄(`text-decoration`) 대신, 색상 반전이나 명도 변화보다는 **Opacity 유지**에 집중 (이미지만 강조).
* **Action 3 (Fab Button):** 배경색이 반전되거나 회전.
* `transform: rotate(90deg);` (십자가가 돌아가는 효과)
* `transition: transform 0.3s ease-out;`



#### **B. Entrance Animation (Page Load)**

* **Logic:** **Staggered Fade-in Up** (순차적 등장)
* **Sequence:** 썸네일 → 텍스트 그룹 → 버튼 순서로 0.1s 시차 적용.
* **CSS Keyframe:**
```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.card-project { animation: fadeInUp 0.6s ease-out forwards; }

```



---

### 3. Responsive & Fluid Strategy (반응형 전략)

Desktop(1440px)에서 Mobile(375px)로 전환 시, 레이아웃 파괴를 막기 위한 구체적인 Breakpoint 전략입니다.

#### **Breakpoint System**

* **Tablet (Max: 1024px):** 2 Column Grid
* **Mobile (Max: 768px):** 1 Column Grid (Stacking)

#### **Layout Transformation Rules**

1. **Sidebar Navigation (Left Pannel):**
* **Strategy: Off-canvas (Drawer)**
* 데스크탑의 좌측 고정 사이드바는 모바일에서 **상단 'GNB(Global Navigation Bar)'로 변형**됩니다.
* 스크롤 시 상단에 고정(`position: sticky`)되며, 햄버거 메뉴 아이콘 클릭 시 좌측에서 슬라이드(`translateX(0)`)되어 나옵니다.


2. **Grid System (Main Content):**
* **Desktop:** `grid-template-columns: repeat(3, 1fr); gap: 32px;`
* **Tablet:** `grid-template-columns: repeat(2, 1fr); gap: 24px;`
* **Mobile:** `grid-template-columns: 1fr; gap: 40px;`
* *Note:* 모바일에서는 카드 간 간격을 넓혀(`40px`) 시각적 피로도를 줄입니다.


3. **Typography Fluidity:**
* 타이틀 폰트 크기는 고정 px 대신 `clamp()` 함수를 사용하여 유동적으로 조절합니다.
* `font-size: clamp(2rem, 5vw, 4rem);` (Mobile H1 ~ Desktop Display H1)



---

### 4. Gap Analysis & System Quality (빈틈 분석)

현재 디자인 시안에서 개발 시 문제가 될 수 있는 '누락된 상태(Missing States)'와 '접근성(A11y)' 이슈를 보완합니다.

#### **A. Missing States (상태 정의)**

1. **Image Loading (Skeleton UI):**
* 이미지가 로딩되기 전, 흰 화면이 뜨는 것을 방지하기 위해 회색 박스(`background: #F4F4F4`)에 은은한 펄스 애니메이션(`opacity: 0.6 <-> 1.0`)을 적용한 스켈레톤 UI를 배치해야 합니다.


2. **Image Fallback (Error State):**
* 이미지 로드 실패 시, 깨진 아이콘 대신 **'패턴이 들어간 회색 박스'** 또는 **'로고 워터마크'**를 노출하여 브랜드 톤을 유지합니다.


3. **Text Overflow (긴 텍스트 처리):**
* 카드 타이틀이 3줄을 넘어갈 경우 레이아웃이 깨질 수 있습니다.
* CSS: `display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;`



#### **B. Accessibility (A11y Check & Fix)**

1. **Touch Target Size:**
* *Problem:* 사이드바의 카테고리 링크(`text-body-1`) 간격이 좁아 모바일 터치 시 오작동 가능성.
* *Fix:* `a` 태그에 `padding: 12px 0;`을 추가하여 터치 영역 높이를 **최소 44px** 이상 확보하십시오.


2. **Focus Indicator:**
* *Problem:* 브라우저 기본 파란색 아웃라인은 디자인과 이질적임.
* *Fix:* 키보드 네비게이션 사용자를 위해 커스텀 포커스 링 적용.
* `outline: 2px solid #000; outline-offset: 4px;` (고대비 모드 지원)


3. **Contrast Ratio:**
* *Check:* `Category` 섹션의 회색 텍스트가 `#999`일 경우 흰 배경에서 가독성 실패 가능성.
* *Fix:* 최소 `#767676` (4.5:1 Ratio) 이상으로 명도를 낮춰야 합니다.



---

### 🚀 Next Action for Developer

위 명세서를 바탕으로 **Storybook**에 `ProjectCard` 컴포넌트를 등록하고, **Mobile Viewport**에서의 스택킹(Stacking) 동작을 우선적으로 프로토타이핑 하십시오.
