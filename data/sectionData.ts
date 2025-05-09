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
      "Typescript",
    ],
  },
  {
    id: "discordMusicBot",
    title: "디스코드 노래봇 개발",
    mainImg: "/projects-img/project-main-4.webp",
    skill: ["Node.js", "Discord.js", "discord-player"],
  },
  {
    id: "logisticsSystem",
    title: "물류센터 최적입지\n선정 시스템 구축",
    mainImg: "/projects-img/project-main-5.webp",
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
    skill: ["Vue.js", "Chart.js", "Leaflet.js", "Vuex", "Vuetify"],
  },
];

export const projectDetails: ProjectDetails = {
  portfolioSite: {
    title: "포트폴리오 사이트 제작",
    duration: "2023.08 - 진행 중",
    team: "1인 (솔로)",
    type: ["솔로", "반응형", "포트폴리오"],
    description:
      "Next.js와 Framer Motion을 활용하여 직관적인 UX를 제공하는 포트폴리오 사이트를 개발. 심플한 디자인과 애니메이션을 결합하여 브랜드 아이덴티티를 강화.",
    contributions: [
      { role: "기획 & 디자인", details: "UI/UX 설계 및 브랜드 컨셉 디자인" },
      { role: "프론트엔드 개발", details: "Next.js와 Tailwind CSS 활용" },
      { role: "SEO 최적화", details: "SSR/SSG를 활용한 성능 최적화" },
    ],
    features: [
      "GitHub, Velog 바로가기",
      "프로젝트 상세보기 모달",
      "반응형 웹 디자인 적용",
    ],
    skills: {
      NextJS: {
        purpose: "SEO 최적화 및 서버사이드 렌더링",
        reason: "빠른 로딩 속도와 검색 엔진 노출 향상을 위해 사용",
      },
      TypeScript: {
        purpose: "정적 타입 시스템 제공",
        reason: "코드 안정성을 높이고 유지보수를 용이하게 하기 위해 사용",
      },
      TailwindCSS: {
        purpose: "유틸리티 기반 스타일링",
        reason: "반응형 디자인과 빠른 개발을 위해 적용",
      },
      FramerMotion: {
        purpose: "부드러운 애니메이션 효과 제공",
        reason: "사용자 경험(UX) 개선을 위해 활용",
      },
    },
    retrospective: [
      { title: "디자인 개선 과정", content: "유저 피드백을 반영해 UI 개선" },
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
    title: "해외 감염병\n연구 대시보드 구축",
    duration: "2024.02 - 진행 중",
    team: "2인",
    type: ["데이터 시각화", "대시보드"],
    description:
      "질병 발생 데이터를 시각화하여 인사이트를 제공하는 대시보드 개발. 실시간 API 연동을 통해 최신 데이터를 반영.",
    contributions: [
      { role: "백엔드 API 설계", details: "FastAPI로 데이터 처리" },
      {
        role: "프론트엔드 개발",
        details: "React와 Recharts 활용한 데이터 시각화",
      },
    ],
    features: ["실시간 데이터 반영", "대시보드 UI/UX 최적화"],
    skills: {
      React: {
        purpose: "컴포넌트 기반 UI 개발",
        reason: "재사용성이 높은 UI 구성 및 상태 관리를 위해 사용",
      },
      TypeScript: {
        purpose: "정적 타입 검사를 통한 안정성 확보",
        reason: "런타임 오류를 줄이고 유지보수를 쉽게 하기 위해 적용",
      },
      Recharts: {
        purpose: "데이터 시각화 라이브러리",
        reason: "심플한 구조의 차트를 빠르게 구현하기 위해 활용",
      },
      LeafletJS: {
        purpose: "지도 시각화 라이브러리",
        reason: "질병 발생 지역을 지도 위에 시각적으로 표현하기 위해 사용",
      },
      FastAPI: {
        purpose: "백엔드 API 서버 구축",
        reason: "빠르고 효율적인 Python 기반 API 서버 구현을 위해 사용",
      },
    },
    retrospective: [
      {
        title: "실시간 데이터 처리 최적화",
        content: "API 요청 수를 줄이는 캐싱 적용",
      },
    ],
    mainImg: "/projects-img/project-main-2.webp",
    screenshots: [
      {
        description: "대시보드 메인 화면",
        imageUrl: "https://example.com/disease_dashboard.png",
      },
    ],
  },
  companyWebsite: {
    title: "사내 홈페이지 리뉴얼",
    duration: "2023.11 - 2023.12",
    team: "3인",
    type: ["팀 프로젝트", "웹사이트 리뉴얼"],
    description:
      "기존 정적 웹사이트를 React 기반으로 리뉴얼하여 유지보수성과 반응성을 개선하고, 관리자 페이지를 추가해 콘텐츠 관리 효율화.",
    contributions: [
      { role: "프론트엔드 개발", details: "공통 컴포넌트 및 라우팅 구조 설계" },
      { role: "디자인 개선", details: "UI 요소 정리 및 반응형 구조 개선" },
    ],
    features: [
      "관리자 페이지 구축",
      "반응형 레이아웃",
      "팀원 간 코드 리뷰 및 Git Flow 적용",
    ],
    skills: {
      React: {
        purpose: "재사용 가능한 UI 구현",
        reason: "컴포넌트 기반 개발로 유지보수를 쉽게 하기 위해 사용",
      },
      TypeScript: {
        purpose: "정적 타입으로 안정성 확보",
        reason: "팀 프로젝트에서 협업 시 오류를 줄이기 위해 적용",
      },
      Zustand: {
        purpose: "전역 상태 관리",
        reason: "복잡하지 않은 상태를 간결하게 관리하기 위해 선택",
      },
      SCSS: {
        purpose: "스타일링",
        reason: "모듈화된 스타일 적용과 유지보수를 위해 사용",
      },
    },
    retrospective: [
      {
        title: "협업 프로세스 개선",
        content: "PR 리뷰 기반으로 코드 품질과 커뮤니케이션 능력 향상",
      },
    ],
    mainImg: "/projects-img/project-main-3.webp",
    screenshots: [
      {
        description: "홈페이지 리뉴얼 메인 화면",
        imageUrl: "https://example.com/company_main.png",
      },
    ],
  },
  discordMusicBot: {
    title: "디스코드 노래봇 개발",
    duration: "2024.01 - 2024.01",
    team: "1인 (솔로)",
    type: ["봇 개발", "커뮤니티 툴"],
    description:
      "특정 채널에 명령어를 입력하면 YouTube 영상을 재생하는 디스코드 봇을 개발. 명령어 처리와 음악 재생 기능을 분리하여 구조화.",
    contributions: [
      { role: "봇 기획 및 설계", details: "명령어 구조 및 큐 시스템 구성" },
      {
        role: "개발",
        details: "`discord.js`와 `discord-player`를 활용한 음악 재생 기능 구현",
      },
    ],
    features: ["유튜브 기반 음악 검색 및 재생", "재생목록 큐 시스템"],
    skills: {
      NodeJS: {
        purpose: "백엔드 실행 환경",
        reason: "비동기 기반의 빠른 명령 처리와 봇 운영을 위해 사용",
      },
      DiscordJS: {
        purpose: "디스코드 봇 프레임워크",
        reason: "사용자 명령어 처리와 이벤트 제어를 위해 사용",
      },
      discordPlayer: {
        purpose: "음악 스트리밍 라이브러리",
        reason: "YouTube와 Spotify 재생 기능을 손쉽게 구현하기 위해 사용",
      },
      TypeScript: {
        purpose: "타입 안정성 확보",
        reason: "명령어 관리와 봇 구조의 유지보수를 위해 적용",
      },
    },
    retrospective: [
      {
        title: "명령어 구조화",
        content: "기능별로 파일을 분리하여 유지보수성과 확장성을 높임",
      },
    ],
    mainImg: "/projects-img/project-main-4.webp",
    screenshots: [
      {
        description: "봇 명령어 입력 예시",
        imageUrl: "https://example.com/discord_bot.png",
      },
    ],
  },
  logisticsSystem: {
    title: "물류센터 최적입지 선정 시스템 구축",
    duration: "2023.06 - 2023.08",
    team: "3인",
    type: ["데이터 수집 및 분석", "시스템 개발"],
    description:
      "전국 마트 및 배송정보 데이터를 수집하여, 물류 거점의 최적 입지를 도출하는 분석 시스템을 구축. 파이썬 기반으로 데이터 수집 및 전처리, 시각화를 수행.",
    contributions: [
      {
        role: "크롤러 개발",
        details: "Scrapy와 Selenium을 이용해 전국 마트 및 배송 정보 수집",
      },
      {
        role: "데이터 분석",
        details: "Pandas 기반 전처리 및 입지 분석 알고리즘 개발",
      },
      {
        role: "DB 연동 및 결과 시각화",
        details: "PostgreSQL과 연계하여 시각화 기반 대시보드 구축",
      },
    ],
    features: [
      "마트/배송 정보 수집 자동화",
      "입지 선정 알고리즘 구현",
      "시각화 기반 대시보드 제공",
    ],
    skills: {
      Python: {
        purpose: "전체 시스템 구현",
        reason: "빠른 프로토타이핑과 데이터 처리에 적합해서 사용",
      },
      Scrapy: {
        purpose: "정형 크롤링",
        reason: "구조화된 웹 페이지에서 마트 위치 데이터 수집을 위해 사용",
      },
      Selenium: {
        purpose: "동적 데이터 수집",
        reason: "동적으로 로드되는 배송 정보 페이지 크롤링을 위해 사용",
      },
      BeautifulSoup: {
        purpose: "HTML 파싱",
        reason: "간단한 텍스트 추출과 HTML 구조 분석을 위해 사용",
      },
      PostgreSQL: {
        purpose: "DB 저장 및 쿼리",
        reason: "지리정보 및 대용량 데이터 처리에 적합하여 선택",
      },
      Pandas: {
        purpose: "데이터 전처리 및 분석",
        reason: "복잡한 데이터 가공 및 분석 알고리즘 적용을 위해 사용",
      },
    },
    retrospective: [
      {
        title: "데이터 수집 자동화 경험",
        content:
          "정적/동적 웹 페이지 크롤링 자동화를 구현하며 크롤링 환경에 따라 도구를 적절히 선택하는 능력을 길렀습니다.",
      },
    ],
    mainImg: "/projects-img/project-main-5.webp",
    screenshots: [
      {
        description: "수집된 마트/배송 정보 시각화",
        imageUrl: "https://example.com/logistics_map.png",
      },
    ],
  },
  luxuryCrawling: {
    title: "웹 크롤링 - 명품 패션 검색엔진 구축",
    duration: "2024.06 - 2024.07",
    team: "1인 (솔로)",
    type: ["웹 크롤링", "데이터 수집 및 처리"],
    description:
      "여러 명품 브랜드 사이트로부터 제품 정보를 크롤링하고, 품목/가격/이미지 기반으로 정제하여 검색 가능한 형태로 가공. 카테고리 분류 및 브랜드별 인기 상품 분석 기능도 구현.",
    contributions: [
      {
        role: "데이터 수집 자동화",
        details: "브랜드별 크롤링 로직 설계 및 유지보수",
      },
      {
        role: "검색엔진 기초 설계",
        details: "브랜드/카테고리/가격 필터링 기능 구현",
      },
    ],
    features: [
      "명품 브랜드별 정보 수집",
      "검색 필터 기능",
      "카테고리 기반 분류",
    ],
    skills: {
      Python: {
        purpose: "전체 크롤링 시스템 구현",
        reason: "다양한 크롤링 라이브러리와 연계해 사용",
      },
      Selenium: {
        purpose: "동적 페이지 처리",
        reason: "자바스크립트 기반 사이트에서 데이터 추출을 위해 사용",
      },
      BeautifulSoup: {
        purpose: "HTML 정적 파싱",
        reason: "간단한 구조의 페이지에서 빠른 크롤링을 위해 사용",
      },
      Pandas: {
        purpose: "데이터 정제 및 구조화",
        reason: "상품 속성 정리와 통계 기반 분류 작업에 사용",
      },
    },
    retrospective: [
      {
        title: "유지보수 가능한 크롤링 구조 설계",
        content: "브랜드별 스크래퍼 클래스를 분리하여 관리 비용을 줄임",
      },
    ],
    mainImg: "/projects-img/project-main-6.webp",
    screenshots: [
      {
        description: "명품 브랜드 검색 페이지",
        imageUrl: "https://example.com/luxury_search.png",
      },
    ],
  },
  dataVoucherDashboard: {
    title: "데이터 바우처 사업 대시보드 개발",
    duration: "2024.09 - 2024.10",
    team: "개인",
    type: ["사내 프로젝트", "프론트엔드 대시보드"],
    description:
      "정부의 데이터 바우처 사업을 지원하기 위한 대시보드를 개발. 이 대시보드는 데이터를 효율적으로 관리하고, 사용자가 필요한 정보를 빠르게 확인할 수 있도록 다양한 필터와 차트를 제공.",
    contributions: [
      {
        role: "전체 개발",
        details: "프론트엔드 프로젝트 설계 및 구현",
      },
      {
        role: "차트 및 대시보드 구성",
        details:
          "사용자에게 직관적으로 데이터를 시각화하기 위해 다양한 차트와 필터 기능을 개발",
      },
    ],
    features: [
      "실시간 데이터 시각화",
      "다양한 필터 기능 제공",
      "사용자 맞춤형 대시보드 구성",
      "정부 데이터 바우처 사업 지원",
    ],
    skills: {
      VueJS: {
        purpose: "프론트엔드 개발",
        reason: "빠르고 효율적인 SPA 개발을 위해 사용",
      },
      Vuex: {
        purpose: "상태 관리",
        reason:
          "애플리케이션의 상태를 관리하고 효율적으로 데이터를 처리하기 위해 사용",
      },
      ChartJS: {
        purpose: "차트 시각화",
        reason:
          "데이터를 시각적으로 표현하여 사용자가 쉽게 이해할 수 있도록 도입",
      },
      LeafletJS: {
        purpose: "지도 시각화",
        reason: "위치 기반 데이터를 지도에 표시하기 위해 사용",
      },
      Vuetify: {
        purpose: "UI 컴포넌트 라이브러리",
        reason: "빠르고 일관성 있는 UI 개발을 위해 사용",
      },
    },
    retrospective: [
      {
        title: "차트 및 데이터 시각화 최적화",
        content:
          "대시보드의 차트를 최적화하여 데이터 로딩 속도를 개선하고, 많은 데이터를 효율적으로 처리할 수 있도록 성능을 향상시킴",
      },
    ],
    mainImg: "/projects-img/project-main-7.webp",
    screenshots: [],
  },
};
