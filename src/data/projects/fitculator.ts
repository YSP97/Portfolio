import { Project } from "@/types/project";

export const fitculator: Project = {
    id:'2',
    title: 'Fitculator',
    thumbnail: 'src/assets/Project/fitculator.png',
    role: '팀장',
    teamSize: '프론트엔드 4인',
    period: '2025년 1월 31일 - 2025년 2월 28일',
    summary: '헬스케어 앱 서비스 Fitculator의 B2C 웹 페이지',
    techStack: ['Next.js', 'TailwindCSS','TypeScript', 'Zustand', 'Supabase', 'Motion one', 'Vercel' ],
    features: [

    ],
    github: 'https://github.com/YSP97/Team1_FE_B2C',
    deployLink:'https://team1-fe-b2-c.vercel.app/',
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
                            name: 'Next.js',
                            icon: 'Next.js',
                            description: '검색엔진 최적화(SEO)에 유리하고 초기 로딩 속도가 빠른 SSR을 제공하고 이미지 최적화 등 네트워크 사용량 역시 감소를 기대할 수 있어 선택'
                        },
                        {
                            name: 'TailwindCSS',
                            icon: 'TailwindCSS',
                            description: '클래스 기반의 스타일링으로 CSS를 따로 작성할 필요가 없으며 반응형 디자인에 유리하여 선택'
                        },
                        {
                            name: 'Zustand',
                            icon: 'Zustand',
                            description: '전역에서 관리해야하는 상태관리가 필요했고, 상태관리 라이브러리 중에서도 간편하고 가벼운 라이브러리여서 사용'
                        },
                        {
                            name: 'TypeScript',
                            icon: 'TypeScript',
                            description: '엄격한 타입 제한으로 런타임 에러를 방지할 수 있으며 가독성과 유지보수에 유리하기 때문에 선택'
                        },
                        {
                            name: 'Supabase',
                            icon: 'Supabase',
                            description: '소규모의 프로젝트에 손쉽게 데이터 베이스 관리가 가능하여 선택'
                        },
                        {
                            name: 'Motion one',
                            icon: 'MotionOne',
                            description: '빠르고 가벼운 라이브러리로 CSS와 유사한 문법으로 사용하기 간편한 애니메이션 라이브러리라서 선택'
                        },
                        {
                            name: 'Vercel',
                            icon: 'Vercel',
                            description: 'Next.js에 최적화되어있으며 CI/CD를 지원하여 팀 협업 시 편리하게 사용이 가능하여 선택'
                        }
                    ]
                }
            ]
        },
        // 2. 아키텍쳐
        {
            id: 'slide-02',
                title: '아키텍쳐',
                blocks: [
                    {
                        type: 'image',
                        src: 'src/assets/Project/fitculator/architecture.png',
                        caption: '아키텍쳐'
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
                        src: 'src/assets/Project/fitculator/landing.png'
                    },
                    {
                        type: 'paragraphBox',
                        icon: '🏠',
                        paragraph: {
                        title: '랜딩 페이지',
                        paragraph: '• 헤더, 푸터, 앱 소개 섹션 프론트엔드\n • 앱 소개 섹션 애니메이션\n • 반응형 디자인'
                        }
                    },
                    {
                        type: 'image',
                        src: 'src/assets/Project/fitculator/form.png'
                    },
                    {
                        type: 'paragraphBox',
                        icon: '📝',
                        paragraph: {
                        title: '폼 작성 페이지',
                        paragraph: '• 프론트엔드\n • DB를 활용한 CRUD(form 데이터)\n • form 데이터 상태관리(zustand store) \n• 커스텀 달력 제작 \n • 반응형 디자인'
                        }
                    },
                    {
                        type: 'paragraphBox',
                        icon: '📁',
                        paragraph: {
                        title: 'ETC',
                        paragraph: '• 프론트엔드\n• DB를 활용한 CRUD(form 데이터)\n• form 데이터 상태관리(zustand store) \n• 커스텀 달력 제작\n • 반응형 디자인'
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
                        text: '문제 정의'
                    },
                    {
                        type: 'paragraph',
                        text: '빌드 시 랜딩 페이지의 앱 소개 섹션 컴포넌트에서 ReferenceError: document is not defined가 발생 '
                    },
                    {
                        type: 'H2',
                        text: '원인'
                    },
                    {
                        type: 'paragraph',
                        text: '컴포넌트 내부에서 document.addEventListener와 이벤트 제거하는 코드를 추가했는데 해당 코드가 렌더링 시점에 바로 실행되면서, document가 서버에 존재하지 않는 SSR 단계에서 에러 발생'
                    },
                    {
                        type: 'H2',
                        text: '해결방법'
                    },
                    {
                        type: 'paragraph',
                        text: '브라우저 전용 API(document, window)를 사용하는 로직(IntersectionObserver, scroll 이벤트, 애니메이션 실행)을 전부 useEffect 내부로 이동 → 컴포넌트는 여전히 SSR로 렌더링되지만, 해당 로직만 하이드레이션 이후 브라우저에서 실행되도록 분리'
                    },
                    {
                        type: 'badge',
                        text: 'Before',
                        description: 'SSR',
                        variant: 'before',
                        },
                    {
                        type: 'image',
                        src: 'src/assets/Project/fitculator/before.png'
                    },
                    {
                        type: 'badge',
                        text: 'After',
                        description: 'SSR + 하이드레이션 후 실행 (브라우저 API 접근을 useEffect로 지연)',
                        variant: 'after',
                        },
                    {
                        type: 'image',
                        src: 'src/assets/Project/fitculator/after.png'
                    },
                    // 회고 및 프로젝트 성과

                        ]
                    },
                    {
                        id: 'slide-05',
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
                                text: '• 시간이 부족하여 백엔드와의 협업이 부족했다.\n• 초기 기획에서 많이 어려움을 겪다 보니 개발할 시간이 부족했다.'
                            },
                            {
                                type: 'H3',
                                text: '잘한 점'
                            },
                            {
                                type: 'paragraph',
                                text: '• 사용자 경험에서 서비스의 다운로드에 더 유리하도록 헤더에 다운로드 버튼을 고정\n• 모바일 사용자의 경우 화면에서 헤더가 따라오면 답답한 느낌을 받을 수 있기에 스크롤 시 헤더가 사라지도록 구현\n• 엄격한 컨벤션과 타입 제한, 잦은 회의로 통일성 있는 코드 구현'
                            },
                            {
                                type: 'H3',
                                text: '프로젝트를 통해 배운 점'
                            },
                            {
                                type: 'paragraph',
                                text: '• 기획의 관점에서 고객에게 더 매력적인 서비스가 무엇인지 고민하게 됨\n• 사용자에게 불편함을 줄 수 있는 부분을 더 깊게 생각하게 됨\n• SSR과 CSR의 차이를 이해하고 적용하게 됨'
                            },
                            {
                                type: 'H3',
                                text: '프로젝트 성과'
                            },
                            {
                                type: 'circleSummary',
                                title: "'기획부터 회의에 참여하여 만들어간 개발 경험'",
                                circles: [
                                    '기획부터 디자인, 개발까지 다양한 협업, 개발 경험',
                                    '최신 기술 스택활용',
                                    '사용자의 지표데이터 추적 설계 경험',
                                ],
                                },
                            {
                                type: 'H3',
                                text: '개선할 점'
                            },
                            {
                                type: 'paragraph',
                                text: '• form 작성 미완료시 버튼 비활성화\n• 토스 결제 기능\n• 상세한 리뷰 모달 추가'
                            }

                        ]
                    },
    ]
}