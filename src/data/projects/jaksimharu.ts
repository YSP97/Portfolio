import { Project } from "@/types/project";

export const jaksimharu: Project = {
    id:'3',
    title: '작심하루',
    thumbnail: 'src/assets/Project/jacksimharu.png',
    role: '조장',
    teamSize: '프론트엔드 3인',
    period: '2024년 8월 26일 - 2024년 9월 24일',
    summary: '우리동네 스터디원 구하기 플랫폼',
    techStack: ['React', 'TailwindCSS','React-Router-Dom', 'Zustand', 'Pocketbase', 'Vite', 'React-Helmet', 'Netlify','GSAP' ],
    features: [
        'a','b'
    ],
    github: 'https://github.com/FRONTENDSCHOOL10/seven-11',
    deployLink:'https://jaksim-haru.netlify.app/',
    slides: [
        // 1. 사용 기술
        {
            id: 'slide-01',
            title: '사용 기술',
            blocks: [
                { 
                    type: 'stacks',
                    items: [
                        {
                            name: 'React',
                            icon: 'React',
                            description: '아토믹 컴포넌트를 제작하여 재사용이 가능하도록 하고 SPA를 통해 유연한 UI를 제공하기 위해 선택'
                        },
                        {
                            name: 'TailwindCSS',
                            icon: 'TailwindCSS',
                            description: '클래스 기반의 스타일링으로 CSS를 따로 작성할 필요가 없으며 반응형 디자인에 유리하여 선택'
                        },
                        {
                            name: 'Zustand',
                            icon: 'Zustand',
                            description: '전역에서 관리해야 하는 상태관리가 필요했고, 상태관리 라이브러리 중에서도 간편하고 가벼운 라이브러리여서 사용'
                        },
                        {
                            name: 'Pocketbase',
                            icon: 'Pocketbase',
                            description: '프론트엔드끼리만 하는 프로젝트였기 때문에 간편하게 DB 관리할 수 있는 포켓베이스를 선택'
                        },
                        {
                            name: 'React-Router-Dom',
                            icon: 'Reactrouter',
                            description: 'SPA에서 동적 페이지 전환이 가능하고 navigate와 같은 웹 전용 기능을 사용하기 위해 선택'
                        },
                        {
                            name: 'GSAP',
                            icon: 'Gsap',
                            description: 'CSS보다 부드럽고 timeline과 같은 순차적 애니메이션 기능이 적용 가능하여 선택'
                        },
                        {
                            name: 'React-Helmet',
                            icon: 'ReactHelmet',
                            description: 'React의 경우 메타 태그 설정이 어렵기 때문에 SEO와 메타 태그 관리를 위하여 사용'
                        },
                        {
                            name: 'Vite',
                            icon: 'Vite',
                            description: '빠른 빌드 속도와 HMR을 지원하여 변경된 모듈만 확인할 수 있다는 장점으로 선택'
                        },
                        {
                            name: 'Netlify',
                            icon: 'Netlify',
                            description: '이전 프로젝트에서도 사용해본 경험이 있고 무료로 쉽게 배포할 수 있기 때문에 선택'
                        }
                    ]
                }
            ]
        },
        // 2. 아키텍쳐
        {
            id: 'slide-02',
                title: '아키텍쳐 & ERD',
                blocks: [
                    {
                        type: 'image',
                        src: 'src/assets/Project/jaksimharu/architecture.png',
                        caption: '아키텍쳐'
                    },
                    {
                        type: 'image',
                        src: 'src/assets/Project/jaksimharu/erd.png',
                        caption: 'ERD'
                    },
                ]
        },
        // 3. 수행업무 및 기여
        {
                id: 'slide-03',
                title: '수행 업무 및 기여',
                blocks: [
                    {
                        type: 'image',
                        src: 'src/assets/Project/jaksimharu/chat.png'
                    },
                    {
                        type: 'paragraphBox',
                        icon: '💬',
                        paragraph: {
                        title: '채팅 페이지',
                        paragraph: '• 프론트엔드\n• 사용자가 입장한 채팅방 리스트 렌더\n• WebSocket 프로토콜을 기반으로 하는 pocketbase의 subscribe를 활용한 단체 채팅 기능\n• 채팅방 나가기, 유저정보 확인 기능\n• 채팅 작성 시 스크롤 자동 내려가기\n• 채팅방 생성시 해당 스터디원 모집 게시글 정보 불러오기'
                        }
                    },
                    {
                        type: 'image',
                        src: 'src/assets/Project/jaksimharu/map.png'
                    },
                    {
                        type: 'paragraphBox',
                        icon: '🗺️',
                        paragraph: {
                        title: '내 근처 페이지',
                        paragraph: '• 프론트엔드\n• 카카오맵 API를 통한 사용자 설정 위치 정보에 따른 근처 공부할만한 곳 추천 리스트 렌더링\n• 검색 기능을 통한 장소 검색 기능'
                        }
                    },
                    {
                        type: 'image',
                        src: 'src/assets/Project/jaksimharu/login.png'
                    },
                    {
                        type: 'paragraphBox',
                        icon: '🔒',
                        paragraph: {
                        title: '로그인 페이지',
                        paragraph: '• 프론트엔드\n• 로그인 유효성 검사\n• 로그인 조건 만족 시 로그인 버튼 활성화(default: 비활성화)\n• 로그인 기능'
                        }
                    },
                    {
                        type: 'image',
                        src: 'src/assets/Project/jaksimharu/qna.png'
                    },
                    {
                        type: 'paragraphBox',
                        icon: '✍️',
                        paragraph: {
                        title: '질문 게시글 작성 페이지',
                        paragraph: '• 프론트엔드\n• 이미지, 제목, 텍스트, 관심분야 게시 기능'
                        }
                    },
                     {
                        type: 'paragraphBox',
                        icon: '🔍',
                        paragraph: {
                        title: '질문 상세 페이지, 수정',
                        paragraph: '• 프론트엔드\n• 게시글 삭제, 수정\n • 댓글 기능(게시, 삭제, 수정)'
                        }
                    },
                    {
                        type: 'image',
                        src: 'src/assets/Project/jaksimharu/mypage.png'
                    },
                    {
                        type: 'paragraphBox',
                        icon: '👤',
                        paragraph: {
                        title: '마이 페이지',
                        paragraph: '• 프론트엔드\n• 프로필 정보 불러오기\n• 로그아웃 기능 구현\n• 프로필 정보 수정 구현'
                        }
                    },
                    {
                        type: 'paragraphBox',
                        icon: '📁',
                        paragraph: {
                        title: 'ETC',
                        paragraph: '• 조장 - 데일리 스크럼, 스프린트 회고 진행\n• github wiki, README.md 작성\n• 팀 컨벤션 및 규칙 정리 등 프로젝트 총괄\n• DB 설계\n• 회원가입 시 SMTP를 활용한 Email 인증 메일 전송'
                        }
                    },

                ]
                
            },
            // 4 - 트러블 슈팅
            {
                id: 'slide-04',
                title: '트러블 슈팅',
                blocks: [
                    {
                        type: 'H2',
                        text: '페이지 이동·새로고침 시 상태 초기화 문제 해결 (Zustand Persist 활용)'
                    },
                    {
                        type: 'H3',
                        text: '문제 정의'
                    },
                    {
                        type: 'paragraph',
                        text: '• 홈페이지 접근 → 게시판 페이지 접근 (정상적인 렌더링)\n • 다른 페이지 → 게시판 페이지 (정상적인 렌더링 X)\n • 새로고침 → 정상적인 렌더링 X'
                    },
                    {
                        type: 'H3',
                        text: '원인'
                    },
                    {
                        type: 'paragraph',
                        text: 'store로 관리되던 categories 상태의 경우 state가 새로고침하면 초기화 되기 때문에 카테고리 데이터가 초기화 되어 게시판 페이지의 게시글 렌더링이 정상적으로 이루어지지 않는 문제였다.'
                    },
                    {
                        type: 'H3',
                        text: '해결방법'
                    },
                    {
                        type: 'paragraph',
                        text: '• 글로벌 페이지(App.tsx)에서 상태 업데이트 되도록 수정 \n • 잦은 네트워크 요청 감소를 위해 zustand persist 적용하여 캐싱'
                    },
                    {
                        type: 'H3',
                        text: '기대효과'
                    },
                    {
                        type: 'paragraph',
                        text: '• 요청 시간 감소 \n • 요청 횟수 감소'
                    },
                    {
                        type: 'image',
                        src: 'src/assets/Project/jaksimharu/trouble.png'
                    },
                    {
                        type: 'paragraph',
                        text: '\n'
                    },
                    { type: 'divider' },
                    {
                        type: 'H2',
                        text: 'PocketBase 관계형 데이터(expand) 구조 불일치에 따른 렌더링 에러 개선'
                    },
                    {
                        type: 'H3',
                        text: '문제 정의'
                    },
                    {
                        type: 'paragraph',
                        text: '댓글 렌더링을 하는 과정에서 user 데이터를 expand를 하는 경우 user을 reading 할 수 없다는 type error가 발생'
                    },
                    {
                        type: 'H3',
                        text: '원인'
                    },
                    {
                        type: 'paragraph',
                        text: '클라이언트에서 댓글 작성\n → 새로 생성된 데이터에 expand가 없음\n → 이 데이터로 상태 업데이트됨\n → 리렌더링을 할 때 replies에 expand가 없어서 typeError 발생'
                    },
                    {
                        type: 'H3',
                        text: '해결방법'
                    },
                    {
                        type: 'paragraph',
                        text: '데이터 create시 expand를 전달하도록 변경'
                    },
                    {
                        type: 'image',
                        src: 'src/assets/Project/jaksimharu/trouble2.png'
                    }
                        ]
                    },
                    // 5 - 사용자 경험을 위해 한 노력
                    {
                id: 'slide-05',
                title: '사용자 경험을 위해 한 노력',
                blocks: [
                    {
                        type: 'H2',
                        text: '성능'
                    },
                    {
                        type: 'paragraph',
                        text: '• svg sprite 사용\n • CDN link font: @font-face 형식은 서버에 존재하는 폰트이기 때문에 성능 저하의 원인이 되어 pretendard와 같이 CDN을 지원하는 폰트는 CDN 방식으로 폰트를 설정\n • Lazy Loading: 특정 페이지 방문 시에만 렌더링하도록 하여 성능 개선'
                    },
                    {
                        type: 'H2',
                        text: '접근성'
                    },
                    {
                        type: 'paragraph',
                        text: '• symentic 마크업 준수\n • 버튼 aria-label 추가\n • HTML의 title 속성 사용: 버튼의 title을 추가하여 아이콘의 의미를 알 수 있도록 함'
                    },
                    {
                        type: 'H2',
                        text: '사용자 경험 개선'
                    },
                    {
                        type: 'paragraph',
                        text: '• favicon link: 다양한 브라우저, 플랫폼에서의 호환성을 위하여 다양한 용도의 favicon을 설정\n • react-spinners: 비동기 작업(예: 데이터 로드, API 호출 등)이 진행 중일 때 아무런 피드백 없이 빈 화면이 나타날 경우 사용자 혼란을 완화하기 위하여 React-spinner를 설치하여 로딩 스피너를 추가함'
                    },
                    {
                        type: 'image',
                        src: 'src/assets/Project/jaksimharu/lighthouse.png'
                    }
                        ]
                    },
                    // 6 - 회고 및 프로젝트 성과
                    {
                        id: 'slide-06',
                        title: '회고 및 프로젝트 성과',
                        blocks: [
                            {
                                type: 'H2',
                                text: '회고'
                            },
                            {
                                type: 'H3',
                                text: '아쉬웠던 점'
                            },
                            {
                                type: 'paragraph',
                                text: '• 시간이 부족하다 보니 코드 가독성을 고려하지 못함\n • 캐싱에 대한 부분을 간과하여 잦은 데이터 요청이 일어남 react-query와 같은 비동기 데이터 관리 라이브러리 학습을 통해 보완하고 싶음\n • 디자인할 시간이 부족하여 반응형으로 디자인하지 못함\n • 데이터 통신할 때의 보안에 대한 고려 X'
                            },
                            {
                                type: 'H3',
                                text: '잘한 점'
                            },
                            {
                                type: 'paragraph',
                                text: '• 컴포넌트 index 파일을 통한 export, import로 코드 길이를 줄임\n• zustand 상태관리를 통한 프롭스 드릴링 방지 -> 코드 간결화'
                            },
                            {
                                type: 'H3',
                                text: '프로젝트를 통해 배운 점'
                            },
                            {
                                type: 'paragraph',
                                text: '• 개발자에게 필요한 figma 사용 방법을 익힘\n• 원하는 목표 달성을 위한 팀원들과의 의견 조율의 중요성\n• SPA의 장점과 단점'
                            },
                            {
                                type: 'H3',
                                text: '프로젝트 성과'
                            },
                            {
                                type: 'circleSummary',
                                title: "'새로운 기술 스택의 학습 및 적용'",
                                circles: [
                                    '다양한  라이브러리 활용',
                                    '다영한 api 활용',
                                    '기획부터 개발까지의 프로젝트 경험',
                                ],
                                },
                            {
                                type: 'paragraph',
                                text: '• 다양한 라이브러리 활용\n• 다양한 api 활용\n• 기획부터 개발까지의 프로젝트 경험'
                            },
                            {
                                type: 'H3',
                                text: '개선할 점'
                            },
                            {
                                type: 'paragraph',
                                text: '• 회원 탈퇴 기능\n• 주소 변경 기능\n• 지도 위치 추적\n• 카테고리 변경\n• 잦은 데이터 요청 -> 캐시 적용'
                            }

                        ]
                    },
    ]
}