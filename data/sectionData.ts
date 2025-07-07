import { ProjectDetails } from "@/types/type";

export const section1Data = {
  subtitle: "낭만을 추구하는 웹 개발자",
  title: "안녕하세요? 신윤성입니다.",
  description: {
    heading: '왜 "낭만을 추구하는" 웹 개발자인가?',
    points: [
      {
        title: "사용자 경험을 위한 섬세한 설계",
        description:
          "단순한 화면이 아니라, 사용자가 편안하게 머물고 싶은 인터페이스를 만듭니다. 마치 한 편의 시처럼 자연스럽고 아름다운 UX를 고민합니다.",
      },
      {
        title: "개발자 경험을 위한 코드의 미학",
        description:
          "유지보수하기 쉬운 구조, 일관된 패턴, 가독성을 고려한 네이밍까지 깔끔한 코드가 만들어내는 개발의 아름다움을 소중히 여깁니다.",
      },
      {
        title: "감성적인 코드와 논리적인 사고",
        description:
          "최신 기술을 빠르게 습득하고 적용하는 것이 사람들이 시각적으로 재미있는 인터페이스를 만들 수 있다고 믿습니다.",
      },
    ],
    conclusion:
      "기술과 예술, 논리와 감성이 균형을 이루는 개발을 꿈꾸며, 사용자에게 더 좋은 경험을 제공하기 위해 끊임없이 고민하고 도전하는 개발자가 되겠습니다.",
  },
};

export const section2Data = [
  {
    question: "Q. 어떤 웹 프런트엔드 개발자가 되고 싶으신가요?",
    answer:
      "A. 단순한 화면을 구현하는 개발자를 넘어, [사용자 경험]을 설계하고 서비스의 방향성을 이끄는 [프런트엔드 리더]가 되고 싶습니다. [기술]과 [디자인], [소통]의 경계를 넘나들며 사람들의 일상에 긍정적인 영향을 주는 웹 서비스를 만드는 것이 제 꿈입니다.",
  },
  {
    question: "Q. 평소에 어떤 성격인가요?",
    answer:
      "A. 목표를 정하면 끝까지 책임지고 완수하려는 [끈기]가 있으며, 팀 내에서는 [주도적으로] 흐름을 정리하고 [유연하게 소통]하는 역할을 자주 맡습니다. 갈등보다는 [조율], 경쟁보다는 [협업]을 중시하며 팀워크를 자연스럽게 이끌어가는 성격입니다.",
  },
  {
    question: "Q. 자기 계발을 위해 어떤 노력을 해왔나요?",
    answer:
      "A. 다양한 [사이드 프로젝트]를 통해 [기술 스택]을 실제로 적용하고, 프로젝트 전 과정을 [스스로 주도]해보며 경험을 쌓았습니다. 특히 [반응형 디자인], [인터랙션 구현], [애니메이션] 등을 꾸준히 학습하며 기술적 디테일을 채워나가고 있습니다.",
  },
];

export const section3Data = {
  skillSets: [
    {
      title: "Vue.js로 시작한 프론트엔드 개발 여정",
      subTitle: "Vue.js",
      description:
        "Vue.js를 활용하여 컴포넌트 기반 아키텍처를 익히고, Vuetify를 사용한 UI 구축을 경험했습니다. 반응형 데이터 바인딩과 상태 관리를 적용하며, 유지보수성이 뛰어난 웹 애플리케이션을 개발했습니다.",
      skills: [
        {
          name: "Vue.js",
          description:
            "컴포넌트 기반 개발 방식과 Vue의 반응형 시스템을 활용하여 효율적인 UI를 구축했습니다.",
        },
        {
          name: "Javascript",
          description:
            "ES6+ 문법을 활용해 동적 기능을 구현하고, 성능 최적화 기법을 적용했습니다.",
        },
        {
          name: "Vuetify",
          description:
            "Vuetify를 사용하여 빠르고 일관된 Material Design UI를 설계했습니다.",
        },
        {
          name: "VueX",
          description:
            "전역 상태 관리를 Vuex로 구현하여 데이터 흐름을 효율적으로 관리했습니다.",
        },
        {
          name: "Netlify",
          description:
            "Netlify를 활용한 자동 배포 환경을 구축하고, CI/CD를 적용했습니다.",
        },
        {
          name: "AWS",
          description:
            "AWS S3와 CloudFront로 정적 파일을 배포하고, Lambda를 활용한 서버리스 환경을 구현했습니다.",
        },
      ],
    },
    {
      title: "React.js와 상태 관리로 확장한 프론트엔드 개발",
      subTitle: "React.js",
      description:
        "React의 선언형 UI 패턴을 활용하여 재사용성이 높은 컴포넌트를 제작했습니다. Redux를 통한 상태 관리와 Bootstrap을 이용한 반응형 디자인을 적용하여 사용자 경험을 최적화했습니다.",
      skills: [
        {
          name: "React.js",
          description:
            "컴포넌트 기반 구조와 상태 관리를 적용하여 유지보수성을 높였습니다.",
        },
        {
          name: "Javascript",
          description:
            "이벤트 핸들링과 비동기 처리 최적화를 통해 성능을 개선했습니다.",
        },
        {
          name: "Bootstrap",
          description:
            "반응형 UI를 신속하게 구축하고, 다양한 디바이스에 최적화된 화면을 제공했습니다.",
        },
        {
          name: "Redux",
          description:
            "Redux를 활용하여 전역 상태를 체계적으로 관리하고, 복잡한 데이터 흐름을 최적화했습니다.",
        },
        {
          name: "AWS",
          description:
            "AWS Amplify를 사용하여 React 프로젝트를 클라우드 환경에 배포했습니다.",
        },
      ],
    },
    {
      title: "Next.js를 활용한 SSR과 SEO 최적화",
      subTitle: "Next.js",
      description:
        "Next.js의 서버사이드 렌더링(SSR)과 정적 사이트 생성(SSG)을 활용하여 성능과 SEO를 최적화했습니다. Tailwind CSS와 Zustand를 결합하여 스타일과 상태 관리를 효율적으로 개선했습니다.",
      skills: [
        {
          name: "Next.js",
          description:
            "SSR과 SSG를 활용하여 SEO 친화적이고 성능이 뛰어난 웹사이트를 구축했습니다.",
        },
        {
          name: "TypeScript",
          description: "타입 안정성을 보장하여 유지보수성을 향상시켰습니다.",
        },
        {
          name: "Tailwind CSS",
          description:
            "유틸리티 퍼스트(Utility-First) 접근 방식으로 디자인을 효율적으로 적용했습니다.",
        },
        {
          name: "Zustand",
          description:
            "가벼운 상태 관리 라이브러리를 활용하여 전역 상태를 효과적으로 관리했습니다.",
        },
        {
          name: "GraphQL",
          description:
            "Apollo Client와 함께 GraphQL을 사용하여 최적화된 데이터 요청을 구현했습니다.",
        },
        {
          name: "Framer Motion",
          description:
            "부드러운 UI 애니메이션을 추가하여 사용자 경험을 향상시켰습니다.",
        },
        {
          name: "Vercel",
          description:
            "Vercel을 활용하여 빠르고 안정적인 Next.js 프로젝트 배포 환경을 구축했습니다.",
        },
      ],
    },
    {
      title: "데이터 시각화 및 맵 서비스 활용",
      subTitle: "라이브러리",
      description:
        "Leaflet.js를 활용한 지도 시각화와 Chart.js를 이용한 데이터 분석을 통해 인터랙티브한 UI를 구축했습니다.",
      skills: [
        {
          name: "Leaflet.js",
          description:
            "지도 기반 UI를 개발하고, 사용자 인터랙션을 최적화했습니다.",
        },
        {
          name: "Recoil",
          description:
            "React 프로젝트에서 효율적인 상태 관리를 위해 Recoil을 적용했습니다.",
        },
        {
          name: "Chart.js",
          description: "데이터 시각화를 위한 동적인 그래프를 구현했습니다.",
        },
        {
          name: "Sheet.js",
          description:
            "엑셀 파일을 다루기 위한 데이터 처리 로직을 개발했습니다.",
        },
      ],
    },
    {
      title: "백엔드 연동 및 데이터 처리 경험",
      subTitle: "분석/적재",
      description:
        "Python 기반의 FastAPI를 활용하여 백엔드 API를 개발하고, PostgreSQL을 이용한 데이터 저장 및 처리 로직을 설계했습니다.",
      skills: [
        {
          name: "Python",
          description:
            "웹 스크래핑 및 데이터 분석, 백엔드 API 개발을 수행했습니다.",
        },
        {
          name: "PostgreSQL",
          description:
            "관계형 데이터베이스를 설계하고, 최적화된 SQL 쿼리를 작성했습니다.",
        },
        {
          name: "Jupyter",
          description:
            "데이터 분석 및 머신러닝 모델 실험을 위한 환경을 구축했습니다.",
        },
        {
          name: "Scrapy",
          description: "웹 크롤러를 개발하여 대량의 데이터를 수집했습니다.",
        },
        {
          name: "Pandas",
          description:
            "데이터 처리 및 분석을 수행하여 비즈니스 인사이트를 도출했습니다.",
        },
        {
          name: "FastAPI",
          description:
            "비동기 REST API 개발을 통해 빠르고 안정적인 서버 환경을 구축했습니다.",
        },
        {
          name: "Postman",
          description:
            "API 테스트 및 문서화를 진행하여 개발 효율성을 향상시켰습니다.",
        },
      ],
    },
    {
      title: "협업과 배포를 위한 DevOps 경험",
      subTitle: "ETC",
      description:
        "GitHub을 활용한 협업과 Docker를 이용한 컨테이너 기반 환경을 구축하여 지속적 통합/배포(CI/CD) 파이프라인을 설계했습니다.",
      skills: [
        {
          name: "GitHub",
          description:
            "Git을 활용한 버전 관리 및 협업을 통해 효율적인 개발 프로세스를 운영했습니다.",
        },
        {
          name: "Docker",
          description:
            "컨테이너 기반의 환경을 구축하여 개발 및 배포 과정을 자동화했습니다.",
        },
      ],
    },
  ],
};

export const projects = [
  {
    id: "portfolioSite",
    title: "포트폴리오 사이트 제작",
    mainImg: "/projects-img/project-main-1.webp",
    skill: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "zustand",
    ],
  },
  {
    id: "diseaseDashboard",
    title: "해외 감염병\n연구 대시보드 구축",
    mainImg: "/projects-img/project-main-2.webp",
    skill: ["Vue.js", "Chart.js", "Leaflet.js", "Vuex", "Vuetify"],
  },
  {
    id: "companyWebsite",
    title: "사내 홈페이지 리뉴얼",
    mainImg: "/projects-img/project-main-3.webp",
    skill: [
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "GraphQL",
      "TypeScript",
    ],
  },
  {
    id: "discordMusicBot",
    title: "디스코드 노래봇 개발",
    mainImg: "/projects-img/project-main-4.webp",
    skill: [
      "Node.js",
      "TypeScript",
      "Discord.js",
      "discord-player",
      "Docker",
      "GitHub Actions",
    ],
  },
  {
    id: "logisticsSystem",
    title: "물류센터 최적입지\n선정 시스템 구축",
    mainImg: "/projects-img/project-main-5.webp",
    skill: [
      "Python",
      "Pandas",
      "PostgreSQL",
      "Vue.js",
      "Vuex",
      "Vuetify",
      "Chart.js",
      "Leaflet.js",
    ],
  },
  {
    id: "luxuryCrawling",
    title: "웹 크롤링\n(명품 패션 검색엔진 구축)",
    mainImg: "/projects-img/project-main-6.webp",
    skill: [
      "Python",
      "Scrapy",
      "Selenium",
      "BeautifulSoup",
      "PostgreSQL",
      "Pandas",
    ],
  },
  {
    id: "dataVoucherDashboard",
    title: "데이터 바우처 사업\n대시보드 개발",
    mainImg: "/projects-img/project-main-7.webp",
    skill: ["React", "Vue.js", "Next.js", "Leaflet.js"],
  },
];

export const projectDetails: ProjectDetails = {
  portfolioSite: {
    title: "포트폴리오 사이트 제작",
    duration: "2025.02 - 진행 중",
    team: "1인 (솔로)",
    type: ["솔로", "반응형", "포트폴리오"],
    description:
      "Next.js App Router와 Framer Motion을 활용해 섹션 기반 인터랙션과 사용자 맞춤 색상 경험을 제공하는 포트폴리오 사이트를 제작. 직관적인 레이아웃과 동적인 애니메이션을 통해 포트폴리오의 정보를 효과적으로 전달",
    contributions: [
      { role: "기획 & 디자인", details: "UI/UX 설계 디자인" },
      { role: "프론트엔드 개발", details: "Next.js와 Tailwind CSS 활용" },
      {
        role: "접근성 & 최적화",
        details: "커스텀 훅 기반 반응형 처리 및 SSR 기반 렌더링 퍼포먼스 개선",
      },
    ],
    features: [
      "Framer Motion 기반의 섹션 전환 및 진입 애니메이션 구현",
      "Array의 길이에 맞는 N각형 SVG 생성 및 회전 효과로 시각적 몰입도 향상",
      "커스텀 훅으로 이미지 기반 최빈 색상 추출 후 텍스트 대비 자동 조정",
      "모바일/데스크탑에 따른 ScrollWrapper 분기처리 및 반응형 대응",
    ],
    skills: {
      NextJS: {
        purpose: "서버사이드 렌더링과 앱 라우터 기반의 구조적인 페이지 설계",
        reason:
          "폴더 기반 라우팅과 컴포넌트 재사용성을 통해 유지보수성과 개발 생산성을 높이기 위해 사용",
      },
      TypeScript: {
        purpose: "정적 타입 시스템 도입을 통한 코드 안정성 확보",
        reason:
          "타입 기반 개발을 통해 런타임 에러를 사전에 방지하고 협업 및 리팩토링을 용이하게 하기 위해 사용",
      },
      TailwindCSS: {
        purpose: "유틸리티 클래스 기반의 빠르고 일관된 스타일링 제공",
        reason:
          "반응형 웹 구현과 유틸리티 기반 스타일링과 빠르고 일관된 스타일링을 위해 사용",
      },
      FramerMotion: {
        purpose:
          "페이지 전환, 섹션 진입, 인터랙션 효과 등 다양한 애니메이션 처리",
        reason:
          "자연스럽고 부드러운 모션을 통해 사용자 경험(UX)을 향상시키기 위해 사용",
      },
      zustand: {
        purpose: "경량 상태 관리 라이브러리로 컴포넌트 간 상태 공유 처리",
        reason:
          "Redux 대비 설정이 간단하고, 전역 상태를 가볍게 관리할 수 있어 유지보수성과 확장성 향상을 위해 사용",
      },
    },
    retrospective: [
      {
        title: "동적 색상 추출 로직의 난이도와 성취감",
        content: [
          "useDominantColor와 useTextColor 커스텀 훅 구현",
          "캔버스를 사용하여 이미지에서 최빈색 추출",
          "휘도(Y = 0.299R + 0.587G + 0.114B) 계산을 기반으로 텍스트 색상 자동 결정",
        ],
        result: [
          "어두운 배경엔 밝은 텍스트, 밝은 배경엔 어두운 텍스트 제공",
          "시각적 가독성 개선 + 사용자 맞춤 스킬셋 색상 제공",
        ],
      },
      {
        title: "SVG 애니메이션을 통한 시각적 몰입감 향상",
        content: [
          "배열 길이에 맞는 N각형 SVG 생성 및 회전 애니메이션 구현",
          "Framer Motion과 결합하여 시각적 인터랙션 강화",
        ],
        result: [
          "사용자에게 몰입감 있는 인터랙티브 시각 효과 제공",
          "단순한 UI 구성요소를 동적인 비주얼로 확장",
        ],
      },
      {
        title: "Framer Motion의 확장성과 퍼포먼스 최적화 경험",
        content: [
          "섹션 전환 및 등장 애니메이션에 Framer Motion 적극 활용",
          "스크롤 트리거와 뷰포트 진입 감지를 통한 애니메이션 최적화",
        ],
        result: [
          "퍼포먼스에 영향을 최소화하면서 부드러운 사용자 경험 제공",
          "재사용 가능한 애니메이션 컴포넌트 구조 확립",
        ],
      },
    ],
    mainImg: "/projects-img/project-main-1.webp",
    screenshots: [
      {
        description: "메인 페이지",
        imageUrl: "https://example.com/portfolio_main.png",
      },
    ],
  },
  diseaseDashboard: {
    title: "해외 감염병 연구 대시보드 구축",
    duration: "2020.07 - 2021.01",
    team: "2인",
    type: ["팀", "대시보드", "시각화", "실시간 데이터"],
    description:
      "세계 각국의 감염병 관련 문서를 수집하고, 이를 실시간으로 시각화하여 질병 발생 현황을 모니터링할 수 있는 대시보드를 구축. Leaflet.js와 Chart.js를 활용하여 국가별 질병 발생량과 다양한 인사이트를 시각적으로 제공",
    contributions: [
      { role: "프론트엔드 개발", details: "Vue 및 Vuetify 기반 대시보드 구성" },
      {
        role: "데이터 시각화",
        details: "Leaflet.js와 Chart.js를 통한 지도 및 차트 시각화 구현",
      },
      {
        role: "API 연동",
        details: "REST API를 통한 실시간 질병 데이터 연동 및 자동 갱신 처리",
      },
    ],
    features: [
      "Leaflet.js를 활용한 국가별 질병 발생률 색상 시각화",
      "Chart.js 기반의 감염병 통계 차트 구성 (라인, 바, 파이)",
      "Vuetify 기반 반응형 UI 설계 및 사용자 편의성 고려한 대시보드 배치",
      "Vuex를 활용한 전역 상태 관리 및 실시간 데이터 동기화",
    ],
    skills: {
      Vue: {
        purpose: "컴포넌트 기반 UI 개발을 위한 프레임워크",
        reason: "복잡한 대시보드 UI를 효율적으로 구성하고 관리하기 위해 사용",
      },
      Vuetify: {
        purpose: "Material Design 기반의 UI 컴포넌트 제공",
        reason: "일관된 디자인 시스템과 반응형 레이아웃 구성을 위해 사용",
      },
      LeafletJS: {
        purpose: "인터랙티브한 지도 시각화를 위한 JavaScript 라이브러리",
        reason:
          "국가별 감염병 데이터를 직관적으로 표현하고 공간적 인사이트 제공을 위해 사용",
      },
      ChartJS: {
        purpose: "감염병 통계를 시각적으로 전달하기 위한 차트 라이브러리",
        reason:
          "다양한 데이터 유형에 맞춘 시각화로 사용자의 이해를 돕기 위해 사용",
      },
      Vuex: {
        purpose: "전역 상태 관리 및 컴포넌트 간 데이터 공유 처리",
        reason: "실시간 데이터 갱신 및 상태 변화에 대한 통합 관리를 위해 사용",
      },
    },
    retrospective: [
      {
        title: "지도 시각화를 통한 공간적 인사이트 제공",
        content: [
          "Leaflet.js를 사용해 세계 지도를 구성하고 감염병 발생 수를 색상으로 시각화",
          "각 국가에 마우스를 올리면 발생 질병 정보 툴팁 제공",
        ],
        result: [
          "사용자가 국가별 감염병 현황을 한눈에 파악 가능",
          "공간 기반 정보 전달의 효과적 구현 경험",
        ],
      },
      {
        title: "Chart.js 기반 통계 시각화 경험",
        content: [
          "월별, 연도별 감염병 발생 추이 라인 차트 구현",
          "질병 분류별 비율을 파이 차트로 구성",
        ],
        result: [
          "데이터를 시각적으로 전달하여 인사이트 도출 가능",
          "차트 간 연동 및 필터링 기능 구현 경험 축적",
        ],
      },
      {
        title: "실시간 데이터 갱신 처리",
        content: [
          "REST API에서 일정 주기로 데이터를 자동 갱신",
          "Vuex로 상태 관리하여 컴포넌트 간 동기화 처리",
        ],
        result: [
          "최신 데이터를 지속적으로 반영하여 신뢰성 확보",
          "API 트래픽 및 렌더링 성능 고려한 최적화 경험",
        ],
      },
    ],
    mainImg: "/projects-img/project-main-2.webp",
    screenshots: [
      {
        description: "질병 발생 지도 시각화 페이지",
        imageUrl: "https://example.com/disease_map.png",
      },
      {
        description: "감염병 추이 분석 차트 페이지",
        imageUrl: "https://example.com/disease_chart.png",
      },
    ],
  },
  companyWebsite: {
    title: "사내 홈페이지 리뉴얼",
    duration: "2024.07 - 2024.09",
    team: "2인",
    type: ["팀", "홈페이지 리뉴얼", "관리자 페이지"],
    description:
      "AI 기반 디자인 검색엔진 서비스를 소개하는 공식 홈페이지를 구축. 사용자가 직관적으로 서비스를 이해할 수 있도록 구성된 메인 페이지와, 내부 운영자가 콘텐츠를 직접 관리할 수 있는 관리자 페이지를 함께 개발. Next.js, GraphQL, Tailwind CSS, Framer Motion 등 최신 프론트엔드 기술을 활용하여 퍼포먼스와 유지보수성을 높인 프로젝트",
    contributions: [
      {
        role: "프론트엔드 개발",
        details: "전체 페이지 구현 및 반응형 대응, 디자인 제외 전담",
      },
      {
        role: "관리자 페이지 개발",
        details: "사내 콘텐츠를 수정할 수 있는 관리자 UI 개발",
      },
      {
        role: "GraphQL 연동",
        details: "GraphQL 기반 API 통신 및 데이터 바인딩 구현",
      },
    ],
    features: [
      "AI 디자인 검색엔진의 주요 기능과 흐름을 소개하는 구조적 페이지 구성",
      "Framer Motion을 활용한 인터랙션 중심의 애니메이션 효과 적용",
      "GraphQL을 통해 필요한 데이터만 효율적으로 요청 및 렌더링",
      "관리자 페이지에서 페이지 콘텐츠(텍스트, 이미지 등) 직접 수정 가능",
      "Tailwind 기반 반응형 레이아웃으로 모든 디바이스에 대응",
    ],
    skills: {
      NextJS: {
        purpose: "정적/동적 페이지 구성과 최적화된 렌더링 처리",
        reason:
          "빠른 페이지 전환과 SEO 대응을 위해 App Router 기반의 구조를 사용",
      },
      TypeScript: {
        purpose: "정적 타입 기반 안정적인 코드 구현",
        reason:
          "런타임 오류 예방과 협업 및 유지보수의 용이성을 확보하기 위해 사용",
      },
      TailwindCSS: {
        purpose: "클래스 기반의 빠르고 일관된 스타일링 제공",
        reason: "디자인 시스템 없이도 유연하고 일관성 있는 UI 구현을 위해 사용",
      },
      FramerMotion: {
        purpose: "부드러운 섹션 전환과 인터랙션 효과 구현",
        reason:
          "자연스러운 모션을 통해 사용자 몰입도를 높이고 현대적인 UI를 표현하기 위해 사용",
      },
      GraphQL: {
        purpose: "선택적 데이터 요청 및 클라이언트 최적화",
        reason:
          "불필요한 데이터 요청을 줄이고 컴포넌트 단위로 필요한 데이터를 효율적으로 불러오기 위해 사용",
      },
    },
    retrospective: [
      {
        title: "서비스 흐름을 중심으로 한 구조적 설계 경험",
        content: [
          "AI 디자인 검색엔진의 특징과 사용 흐름을 시각적으로 강조",
          "단순한 소개가 아닌 기능 중심의 이해를 돕는 콘텐츠 배치",
        ],
        result: [
          "사용자가 서비스 목적과 기능을 직관적으로 이해할 수 있는 구조 완성",
          "브랜드 메시지를 명확하게 전달하는 데 성공",
        ],
      },
      {
        title: "GraphQL 기반 데이터 설계와 클라이언트 최적화",
        content: [
          "GraphQL 쿼리 및 뮤테이션 설계와 데이터 연동 로직 구현",
          "불필요한 네트워크 요청을 줄이고 UI 성능 최적화",
        ],
        result: [
          "컴포넌트별 필요한 데이터만 효율적으로 로드",
          "API 설계와 클라이언트 렌더링의 유연성 확보",
        ],
      },
      {
        title: "관리자 페이지 UI 구성 및 기능 구현",
        content: [
          "비개발자가 직접 콘텐츠를 수정할 수 있도록 UI/UX 구성",
          "섹션별 텍스트 및 이미지 업로드/수정 기능 구현",
        ],
        result: [
          "운영팀의 실시간 콘텐츠 관리 가능",
          "홈페이지 유지보수 비용 절감 및 효율화",
        ],
      },
    ],
    mainImg: "/projects-img/project-main-3.webp",
    screenshots: [
      {
        description: "사내 홈페이지 메인 화면",
        imageUrl: "https://example.com/company_main.png",
      },
      {
        description: "관리자 페이지 콘텐츠 수정 화면",
        imageUrl: "https://example.com/company_admin.png",
      },
    ],
  },
  discordMusicBot: {
    title: "디스코드 노래봇 개발",
    duration: "2024.02 - 2024.03",
    team: "1인 (토이 프로젝트)",
    type: ["토이 프로젝트", "디스코드 봇", "음악 스트리밍"],
    description:
      "친구들과 디스코드 상에서 코드 리뷰를 하면서 음악을 함께 듣기 위해 개발한 개인용 노래봇. 사용자가 채널에 음악 제목을 입력하면 유튜브에서 검색하여 스트리밍 재생이 가능하며, 대기열, 일시정지, 스킵 등 다양한 컨트롤 기능도 제공. `discord.js` 및 `discord-player` 기반으로 개발되었으며, GitHub Actions와 Docker를 활용해 개인 서버에 배포하여 24시간 안정적으로 운영 중.",
    contributions: [
      {
        role: "봇 개발 및 배포",
        details: "디스코드 봇의 명령어 처리 및 음악 재생 기능 구현",
      },
      {
        role: "유저 인터랙션 설계",
        details:
          "슬래시 명령어 기반의 UX 설계 및 사용자 친화적 인터페이스 구축",
      },
      {
        role: "CI/CD 및 서버 호스팅",
        details:
          "GitHub Actions + Docker 조합으로 개인 서버에 자동 배포 및 24시간 호스팅",
      },
    ],
    features: [
      "디스코드 채널 내에서 명령어 입력을 통한 음악 검색 및 재생 기능",
      "슬래시 명령어 기반의 직관적인 명령 시스템",
      "재생/정지/스킵/대기열 등 다양한 컨트롤 명령 제공",
      "Docker 기반 이미지로 패키징하여 안정적인 서버 운영 가능",
      "GitHub Actions를 활용한 자동 테스트 및 서버 배포",
    ],
    skills: {
      discordJS: {
        purpose: "디스코드 봇의 핵심 기능 구현",
        reason: "디스코드 API와의 통합을 위해 공식 라이브러리 사용",
      },
      discordPlayer: {
        purpose: "유튜브 음악 스트리밍 및 재생 컨트롤 기능 구현",
        reason: "복잡한 음악 큐 및 재생 관리를 효율적으로 구현하기 위해 사용",
      },
      TypeScript: {
        purpose: "코드의 안정성과 유지보수성 향상",
        reason: "런타임 에러를 줄이고 명확한 타입 기반 개발을 위해 도입",
      },
      NodeJS: {
        purpose: "봇 서버 구동 및 비동기 로직 처리",
        reason: "이벤트 기반 서버 사이드 처리를 위해 사용",
      },
      Docker: {
        purpose: "봇을 컨테이너로 패키징하여 배포 환경 일관성 확보",
        reason: "서버 재시작에도 안정적으로 봇을 운영하기 위해 사용",
      },
      GitHubActions: {
        purpose: "CI/CD 자동화 및 서버 배포 프로세스 구성",
        reason: "개발 후 자동 빌드/배포 과정을 통해 운영 효율성 향상",
      },
    },
    retrospective: [
      {
        title: "슬래시 명령어와 큐 관리 구현 경험",
        content: [
          "명령어 입력 시 실시간 음악 재생 및 큐 상태 반영",
          "예외 상황에 대한 메시지 피드백 처리",
        ],
        result: [
          "사용자에게 직관적이고 반응성 높은 인터페이스 제공",
          "디스코드 봇 개발의 기초부터 운영까지 전반적 경험 확보",
        ],
      },
      {
        title: "CI/CD 자동화 및 안정적인 봇 운영",
        content: [
          "GitHub Actions로 코드 푸시 시 자동으로 Docker 빌드 및 배포",
          "개인 서버에서 Docker 컨테이너 기반으로 24시간 안정적 운영",
        ],
        result: [
          "버전 관리 및 배포 효율성 대폭 향상",
          "개인 서버의 자원을 활용한 서비스 운영 경험 확보",
        ],
      },
    ],
    mainImg: "/projects-img/project-main-4.webp",
    screenshots: [
      {
        description: "디스코드 채널 내 음악 명령 사용 예시",
        imageUrl: "https://example.com/discord_music_command.png",
      },
    ],
  },
  logisticsSystem: {
    title: "물류센터 최적입지 선정 시스템 구축",
    duration: "2024.03 - 2024.05",
    team: "2인",
    type: ["팀", "시각화", "데이터 전처리", "입지 분석"],
    description:
      "전국 공장 부지 데이터를 기반으로 최적 입지를 선정할 수 있는 대시보드를 구축. 구조가 제각각인 다양한 CSV 파일을 전처리 후 PostgreSQL에 적재하고, 이를 Vue 기반의 대시보드에서 시각화하여 정책 결정과 입지 판단에 도움을 주는 시스템 개발",
    contributions: [
      {
        role: "데이터 전처리 및 적재",
        details:
          "Python과 Pandas를 활용해 다양한 구조의 CSV 데이터를 정제하고, 스키마를 통합하여 PostgreSQL에 적재",
      },
      {
        role: "프론트엔드 개발",
        details:
          "Vue, Vuetify 기반의 반응형 대시보드 구축 및 상태 관리를 위한 Vuex 활용",
      },
      {
        role: "지도 및 차트 시각화",
        details:
          "Leaflet.js와 Chart.js를 활용하여 지도 기반 입지 시각화 및 주요 수치 정보 제공",
      },
    ],
    features: [
      "구조가 제각각인 CSV 파일 통합 전처리 및 스키마 정규화",
      "PostgreSQL 기반 데이터 저장 및 쿼리 최적화",
      "Leaflet.js 기반 공장 부지 밀도 시각화 (색상 기반 시각 인사이트 제공)",
      "Chart.js 기반 지표별 시계열 그래프 구현",
      "Vuex 기반 사용자 인터랙션 반영 실시간 필터 및 정보 조회 기능",
    ],
    skills: {
      Python: {
        purpose: "데이터 파싱, 정제 및 자동화된 전처리 스크립트 개발",
        reason:
          "복잡한 CSV 구조를 자동으로 정리하고 통합할 수 있도록 스크립트 기반 자동화를 위해 사용",
      },
      Pandas: {
        purpose: "데이터 정제 및 통계 분석",
        reason:
          "누락값 처리, 열 변환, 그룹핑 등의 데이터 전처리를 효율적으로 수행하기 위해 사용",
      },
      PostgreSQL: {
        purpose: "정제된 데이터를 저장하고 쿼리를 통한 데이터 활용",
        reason:
          "구조화된 데이터 저장과 빠른 질의 응답을 위한 관계형 데이터베이스 사용",
      },
      Vue: {
        purpose: "대시보드 UI 구축을 위한 프론트엔드 프레임워크",
        reason:
          "컴포넌트 기반 개발로 유지보수가 용이하고, 빠르게 데이터 시각화 화면을 구성하기 위해 사용",
      },
      Vuetify: {
        purpose: "디자인 시스템 기반의 빠른 UI 구성",
        reason:
          "Vue에 최적화된 머티리얼 디자인 컴포넌트를 통해 일관된 UI 구현을 위해 사용",
      },
      Vuex: {
        purpose: "상태 관리 및 컴포넌트 간 데이터 공유",
        reason:
          "복잡한 데이터 흐름을 예측 가능하게 만들고, 컴포넌트 간 상태 공유를 효율적으로 처리하기 위해 사용",
      },
      Leaflet: {
        purpose: "지도 기반의 입지 데이터 시각화",
        reason:
          "공장 위치 및 밀도를 직관적으로 보여주기 위한 시각화 도구로 사용",
      },
      ChartJS: {
        purpose: "지표 기반 차트 시각화",
        reason: "데이터 흐름과 비교 분석을 시각적으로 표현하기 위해 사용",
      },
    },
    retrospective: [
      {
        title: "복잡한 CSV 전처리를 통한 데이터 통합 경험",
        content: [
          "지역별 구조가 상이한 CSV 파일 다수를 Pandas로 파싱 및 정제",
          "단일 스키마로 통일하고 누락된 값 보정, 이상치 제거 처리",
          "PostgreSQL 테이블 스키마 설계 및 대량 삽입(Bulk Insert) 자동화",
        ],
        result: [
          "데이터 일관성 확보 및 확장성 있는 DB 구조 완성",
          "재사용 가능한 데이터 파이프라인 템플릿 확보",
        ],
      },
      {
        title: "지도 시각화를 통한 입지 분석 강화",
        content: [
          "Leaflet을 통해 공장 위치 및 밀도 시각화",
          "시군구 기준 색상 범례 구성 및 필터 기능 구현",
          "차트 기반의 시간별 공장 가동률 등 부가 지표 구현",
        ],
        result: [
          "정책 결정에 도움되는 시각적 인사이트 제공",
          "사용자 중심의 직관적인 정보 전달 구현",
        ],
      },
    ],
    mainImg: "/projects-img/project-main-5.webp",
    screenshots: [
      {
        description: "입지 후보지 분포 시각화 화면",
        imageUrl: "https://example.com/logistics_map.png",
      },
    ],
  },
  luxuryCrawling: {
    title: "웹 크롤링 - 명품 패션 검색엔진 구축",
    duration: "2024.05 - 2024.07",
    team: "3인",
    type: ["팀", "데이터 수집", "크롤링 시스템"],
    description:
      "국내외 명품 브랜드 공식 사이트 및 유통 채널을 대상으로 크롤링 시스템을 구축하고, 매일 생성되는 데이터를 수집, 전처리, 가공 후 DB에 적재하는 파이프라인을 구축. 추후 검색 기반 서비스를 위한 기초 데이터를 안정적으로 확보하기 위해 설계",
    contributions: [
      {
        role: "웹 크롤링",
        details: "Python 기반의 Scrapy 및 Selenium 활용한 크롤링 로직 구현",
      },
      {
        role: "데이터 전처리",
        details:
          "Pandas를 활용해 다양한 구조의 HTML/JSON 데이터를 정제 및 통합",
      },
      {
        role: "DB 연동",
        details: "PostgreSQL 스키마 설계 및 데이터 적재 자동화 파이프라인 구현",
      },
    ],
    features: [
      "브랜드별 크롤러를 모듈화하여 확장성과 유지보수 용이성 확보",
      "일일 자동 실행을 위한 스케줄링 시스템 구성 (cron)",
      "카테고리/가격/색상/브랜드 기준 정규화된 DB 저장 구조 설계",
      "크롤링 실패나 구조 변경에 대응하는 예외 처리 로직 포함",
    ],
    skills: {
      Python: {
        purpose: "웹 크롤러 및 데이터 가공 스크립트 구현",
        reason:
          "Scrapy, Selenium, Pandas 등 다양한 라이브러리를 활용하기 위해 선택",
      },
      Scrapy: {
        purpose: "크롤링 프레임워크로 브랜드별 크롤러 구성",
        reason:
          "비동기 방식의 효율적인 데이터 수집과 구조화된 코드 설계를 위해 사용",
      },
      Selenium: {
        purpose: "동적 로딩 사이트에서의 데이터 수집",
        reason: "JavaScript 렌더링이 필요한 브랜드 페이지 크롤링을 위해 사용",
      },
      Pandas: {
        purpose: "데이터 정제 및 통합 처리",
        reason:
          "다양한 형식의 수집 데이터를 정규화된 구조로 변환하기 위해 사용",
      },
      PostgreSQL: {
        purpose: "정제된 데이터의 저장 및 검색 최적화",
        reason:
          "정규화된 데이터 구조와 확장 가능한 쿼리 환경을 제공하기 위해 사용",
      },
      cron: {
        purpose: "일일 크롤링 자동 실행을 위한 스케줄링",
        reason: "지속적인 데이터 수집을 자동화하기 위해 사용",
      },
    },
    retrospective: [
      {
        title: "데이터 파이프라인 설계 경험",
        content: [
          "Scrapy → Pandas → PostgreSQL 흐름의 자동화 파이프라인 설계",
          "매일 실행되어도 중복 없이 누적되는 구조 설계",
        ],
        result: [
          "안정적인 데이터 적재 및 검색 서비스 기반 확보",
          "운영 단계에서도 유지보수가 쉬운 구조 확립",
        ],
      },
      {
        title: "웹 구조 변화 대응을 위한 전략 설계",
        content: [
          "XPath, CSS Selector 병행 사용으로 유연한 구조 대응",
          "에러 로깅 및 크롤링 실패 자동 감지 기능 추가",
        ],
        result: [
          "변화하는 브랜드 웹 구조에도 유연하게 대처 가능",
          "시스템 장애 최소화 및 데이터 신뢰성 확보",
        ],
      },
    ],
    mainImg: "/projects-img/project-main-6.webp",
    screenshots: [
      {
        description: "브랜드별 데이터 구조를 시각화한 다이어그램",
        imageUrl: "https://example.com/luxury_data_architecture.png",
      },
    ],
  },
  dataVoucherDashboard: {
    title: "데이터 바우처 사업 대시보드 개발",
    duration: "2023.04 - 2024.12",
    team: "1인 (솔로)",
    type: ["솔로", "대시보드", "기업 프로젝트"],
    description:
      "데이터 바우처 사업의 다양한 수혜기업들을 대상으로 프로젝트 성격에 맞는 대시보드를 구축. React, Vue, Next.js 등 기술 스택을 유연하게 선택해 데이터 시각화 및 사용자 친화적인 인터페이스 제공. 모든 개발은 단독으로 진행되었으며, 데이터 구조 분석부터 UI 설계, 배포까지 전 과정을 책임.",
    contributions: [
      {
        role: "프론트엔드 개발",
        details: "React, Vue, Next.js 기반의 유연한 대시보드 설계 및 구축",
      },
      {
        role: "데이터 시각화",
        details:
          "Chart.js, Leaflet.js 등을 활용한 데이터 시각화 및 지도 기반 표현",
      },
      {
        role: "설계 및 유지보수",
        details: "다양한 클라이언트 요구에 따라 구조 및 UI 커스터마이징",
      },
    ],
    features: [
      "다양한 기술 스택 기반의 대시보드 템플릿 구성 및 프로젝트별 맞춤 개발",
      "클라이언트 요구사항에 맞는 인터페이스와 데이터 흐름 구성",
      "React/Vue의 컴포넌트 구조를 기반으로 빠른 유지보수 및 확장성 확보",
      "Next.js 기반 SSR을 활용한 검색 최적화 및 초기 로딩 속도 개선",
      "Leaflet.js를 활용한 지도 기반 데이터 시각화 기능 구현",
    ],
    skills: {
      React: {
        purpose: "컴포넌트 기반 구조를 통한 UI 설계",
        reason: "재사용성과 생산성을 높이기 위해 사용",
      },
      Vue: {
        purpose: "직관적인 템플릿 기반 프레임워크로 유연한 구성 제공",
        reason: "빠른 구현과 유지보수가 필요한 프로젝트에 적합하여 사용",
      },
      NextJS: {
        purpose: "SSR 및 App Router 기반의 구조적 페이지 구성",
        reason: "빠른 초기 로딩 속도 및 SEO 최적화를 위해 사용",
      },
      TypeScript: {
        purpose: "정적 타입으로 코드 안정성과 유지보수성 확보",
        reason: "런타임 에러 방지 및 협업 효율 향상을 위해 사용",
      },
      ChartJS: {
        purpose: "데이터 기반의 시각화 제공",
        reason:
          "막대, 선형, 파이 등 다양한 형태의 데이터 시각화가 가능하여 사용",
      },
      LeafletJS: {
        purpose: "지도 기반 인터페이스로 위치 기반 데이터 시각화",
        reason:
          "지역/지리적 요소를 시각적으로 표현하여 사용자의 이해도를 높이기 위해 사용",
      },
    },
    retrospective: [
      {
        title: "단독 개발로 얻은 전체 프로세스 경험",
        content: [
          "프레임워크 선정, 구조 설계, 상태관리, 시각화, 배포 등 전체 흐름을 주도",
          "프로젝트별 요구사항에 따른 UI/UX 조정 및 기능 최적화",
        ],
        result: [
          "대시보드 개발 역량 강화 및 다양한 기술 스택에 대한 실전 경험 축적",
          "클라이언트 만족도 높은 결과물을 지속적으로 제공",
        ],
      },
      {
        title: "복수 프레임워크 운영의 유연성 확보",
        content: [
          "React, Vue, Next.js 각각의 강점을 이해하고 요구사항에 맞게 선택 적용",
          "코드 구조와 상태관리 방식에 대한 비교 경험 확보",
        ],
        result: [
          "기술 선택의 유연성을 바탕으로 다양한 프로젝트 대응 가능",
          "기술 스택 확장성과 개인 성장에 큰 도움",
        ],
      },
      {
        title: "Leaflet.js 기반 시각화의 효용성",
        content: [
          "지역 단위의 데이터 분포를 시각적으로 표현",
          "사용자가 즉시 인사이트를 얻을 수 있도록 지도 중심의 UI 구성",
        ],
        result: [
          "복잡한 데이터를 직관적으로 전달 가능",
          "클라이언트의 만족도와 이해도를 높이는 요소로 작용",
        ],
      },
    ],
    mainImg: "/projects-img/project-main-7.webp",
    screenshots: [
      {
        description: "Vue 기반 대시보드 예시",
        imageUrl: "https://example.com/voucher_vue_dashboard.png",
      },
      {
        description: "Next.js 기반 대시보드 예시",
        imageUrl: "https://example.com/voucher_next_dashboard.png",
      },
    ],
  },
};
