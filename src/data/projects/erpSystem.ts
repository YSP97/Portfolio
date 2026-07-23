import { Project } from '@/types/project';
import erpThumbnail from '@/assets/Project/erpSystem.png';

export const erpSystem: Project = {
  id: '1',
  title: 'ERP 시스템',
  period: '2025년 9월 10일 - 2026년 2월 20일',
  thumbnail: erpThumbnail,
  role: '프론트엔드',
  teamSize: '총 6인',
  techStack: [
    'React',
    'TailwindCSS',
    'TypeScript',
    'Express.js',
    'React-Router-Dom',
    'MySQL',
    'Python',
  ],
  summary: 'Jira 티켓 관리와 온보딩을 위한 ERP 시스템',
  slides: [
    {
      id: 'slide-01',
      title: '서비스 소개',
      blocks: [
        {
                    type: 'image',
                    src: 'src/assets/Project/erpSystem.png'
                },
        {
          type: 'H2',
          text: '기획의도'
        },
        {
          type: 'paragraphBox',
          icon: '📊',
          paragraph:{
            title: '수많은 Jira 티켓, 파편화된 데이터 접근',
            paragraph: '팀원 전용 통합 대시보드 구축'
          }
        },
        {
          type: 'paragraphBox',
          icon: '📃',
          paragraph:{
            title: '정적 문서로 존재하던 업무 매뉴얼',
            paragraph: '온보딩 가이드 시스템 내 통합, 신규 입력 오류 최소화'
          }},

          {
          type: 'paragraphBox',
          icon: '⚙️',
          paragraph:{
            title: '티켓 데이터 수동 입력 반복',
            paragraph: '엑셀 기반 운영 데이터 자동 수급 파이프라인'
          }
          
        },
        {
          type: 'paragraphBox',
          icon: '👨‍👩‍👧‍👦',
          paragraph:{
            title: '팀별 업무 부하 파악 어려움',
            paragraph: '실시간 워크로드 기반 티켓 배정 관리자 기능'
          },
          
        },
        {
          type: 'H2',
          text: '주요 기능'
        },
        {
          type: 'paragraphBox',
          paragraph: {
            title: '티켓 관리 대시보드',
            paragraph: '• 권한별 맞춤형 업무 뷰(관리자/팀원)\n• 인터랙티브 데이터 핸들링\n• 인원별 티켓 배정 및 상태 확인'
          }
        },
        {
          type: 'paragraphBox',
          paragraph: {
            title: '온보딩 가이드 시스템',
            paragraph: '• 업무 프로세스 & 매뉴얼 중앙 집중화\n• 구조화된 데이터로 손쉬운 업데이트\n• 인터랙티브 UI로 직관적 가이드 탐색'
          }
        }
      ]

    },
    // 2 - 사용기술
    {
      id: 'slide-02',
      title: '사용 기술',
      blocks: [
        {
          type: 'stacks',
          items: [
            {
              name: 'React',
              icon: 'React',
              description:
                '대량의 티켓 데이터를 엑셀처럼 인라인으로 직접 수정하고 추가할 때, 화면 전체를 다시 그리지 않고 변경된 데이터의 행(Row)만 가상 DOM을 통해 선별적으로 렌더링함으로써 브라우저 부하를 최소화하고 빠른 반응 속도를 확보.',
            },
            {
              name: 'TailwindCSS',
              icon: 'TailwindCSS',
              description:
                '클래스 기반의 스타일링으로 CSS를 따로 작성할 필요가 없으며 반응형 디자인에 유리하여 선택.',
            },
            {
              name: 'TypeScript',
              icon: 'TypeScript',
              description:
                '수많은 컬럼과 복잡한 객체 구조를 가진 티켓 데이터를 다룰 때, 명확한 인터페이스를 정의하여 데이터 누락이나 타입 불일치로 인한 런타임 에러를 사전에 방지',
            },
            {
              name: 'Express.js',
              icon: 'Express',
              description:
                'Node.js 기반의 경량 백엔드 프레임워크로, REST API 설계가 직관적이고 유연한 미들웨어 구성이 가능하여 선택',
            },
            {
              name: 'React-Router-Dom',
              icon: 'Reactrouter',
              description:
                '소규모의 프로젝트에 손쉽게 데이터 베이스 관리가 가능하여 선택',
            },
            {
              name: 'MySQL',
              icon: 'MySQL',
              description:
                '티켓, 사용자, 권한 등 구조화된 관계형 데이터를 안정적으로 저장하고 조회하기 위해 선택',
            },
            {
              name: 'Python',
              icon: 'Python',
              description:
                '사내 보안 정책(DRM)으로 엑셀 파일 접근이 제한된 환경에서, xlwings로 엑셀 데이터를 직접 읽어 DB에 전달하는 자동화 파이프라인 구축을 위해 선택',
            },
          ],
        },
      ],
    },
    // 3 - 아키텍쳐 & ERD
    {
      id: 'slide-03',
      title: '아키텍쳐 & ERD',
      blocks: [
        {
          type: 'image',
          src: 'src/assets/Project/erp/architecture.png',
          caption: '아키텍쳐',
        },
        {
          type: 'image',
          src: 'src/assets/Project/erp/erd.png',
          caption: 'ERD',
        },
      ],
    },
    // 4 - 수행 업무 및 기여 - 사용자 등록 Jira 티켓 관리 페이지 1
    {
      id: 'slide-04',
      title: '수행 업무 및 기여',
      blocks: [
        {
          type: 'H2',
          text: '사용자 등록 Jira 티켓 관리 페이지',
        },
        {
          type: 'image',
          src: 'src/assets/Project/erp/erp0.png',
          caption: '※ 실제 화면이 아닌 재구성한 와이어프레임 입니다.',
        },
        {
          type: 'paragraphBox',
          icon: '📝',
          paragraph: {
            title: '모달 기반 CRUD + 수정 모드 전환',
            paragraph:
              '테이블 셀을 클릭하면 바로 입력 가능한 인라인 에디터로 전환. 수정·추가·삭제를 한 화면에서 처리',
          },
        },
        { type: 'divider' },
        {
          type: 'H2',
          text: '사용자 등록 Jira 티켓 관리 페이지',
        },
        {
          type: 'image',
          src: 'src/assets/Project/erp/erp1.png',
          caption: '※ 실제 화면이 아닌 재구성한 와이어프레임 입니다.',
        },
        {
          type: 'paragraphBox',
          icon: '⚡',
          paragraph: {
            title: 'React Query 캐싱',
            paragraph:
              'React Query 캐싱 전략으로 변경된 행만 업데이트. 테이블 깜빡임 없이 자연스러운 UX 구조',
          },
        },
        {
          type: 'paragraphBox',
          icon: '🖱️',
          paragraph: {
            title: '드래그앤드롭 정렬',
            paragraph:
              '행(Row) 드래그로 순서 변경. 중간값(Float) 계산으로 DB order 컬럼 업데이트 → 재정렬 없이 순서 유지',
          },
        },
        {
          type: 'flowChart',
          title: '드래그앤드롭 order 계산 방식',
          items: [
            { label: 'Row A', sublabel: 'order: 1.0' },
            {
              label: 'Row C 삽입',
              sublabel: 'order: 1.5',
              highlight: true,
              note: '(A + B) ÷ 2',
            },
            { label: 'Row B', sublabel: 'order: 2.0' },
          ],
        },
        { type: 'divider' },
        {
          type: 'H2',
          text: '엑셀 자동 등록 Jira 티켓 관리 페이지',
        },
        {
          type: 'image',
          src: 'src/assets/Project/erp/erp4.png',
          caption: '※ 실제 화면이 아닌 재구성한 와이어프레임 입니다.',
        },
        {
          type: 'paragraphBox',
          icon: '💾',
          paragraph: {
            title: '엑셀 파싱 자동 테이블 생성',
            paragraph:
              'Jira에서 추출한 엑셀 파일을 업로드하면 xlwings로 파싱, DB에 일괄 저장 후 테이블 자동 생성. 수동 입력 대비 대폭 시간 단축',
          },
        },
        {
          type: 'flowChart',
          title: '엑셀 업로드 및 데이터 자동화 파이프라인',
          items: [
            {
              label: '사용자',
              sublabel: '엑셀 업로드',
              caption: '프론트엔드 파일 선택',
            },
            { label: 'REST API', sublabel: '파일 전송' },
            {
              label: 'Python·xlwings',
              sublabel: '파싱',
              caption: 'ORM 보안 환경 작업 데이터 추출',
            },
            {
              label: 'MySQL',
              sublabel: '일괄 저장',
              caption: '하위 단계 DB INSERT',
            },
            {
              label: '테이블',
              sublabel: '자동 렌더링',
              caption: '수정·삭제 가능한 UI',
            },
          ],
        },
        { type: 'divider' },
        {
          type: 'H2',
          text: '엑셀 자동 등록 Jira 티켓 관리 페이지',
        },
        {
          type: 'image',
          src: 'src/assets/Project/erp/erp5.png',
          caption: '※ 실제 화면이 아닌 재구성한 와이어프레임 입니다.',
        },
        {
          type: 'paragraphBox',
          icon: '♾️',
          paragraph: {
            title: '무한 스크롤 - Lazy Loading',
            paragraph:
              '무한 스크롤로 뷰포트 진입 시점에 데이터 추가 로드. 초기 렌더링 비용 최소화로 빠른 페이지 응답 유지',
          },
        },
        {
          type: 'paragraphBox',
          icon: '✏️',
          paragraph: {
            title: '실시간 인라인 편집',
            paragraph:
              '테이블 셀을 클릭하면 바로 입력 가능한 인라인 에디터로 전환. 수정·추가·삭제를 한 화면에서 처리',
          },
        },
        { type: 'divider' },
         {
          type: 'H2',
          text: '온보딩 가이드 페이지',
        },
        {
          type: 'image',
          src: 'src/assets/Project/erp/erp6.png',
          caption: '※ 실제 화면이 아닌 재구성한 와이어프레임 입니다.',
        },
        {
          type: 'paragraphBox',
          icon: '🧱',
          paragraph: {
            title: '확장성 있는 JSON 기반 컴포넌트 렌더러 설계',
            paragraph:
              '단순 타이틀과 본문 텍스트 파싱을 넘어, 링크 이동 버튼, 모달 팝업 버튼 등 다양한 인터랙티브 요소를 컴포넌트화하여 동적으로 렌더링되도록 설계',
          },
        },
        {
          type: 'paragraphBox',
          icon: '🧭',
          paragraph: {
            title: 'Breadcrumbs(탐색 경로)를 통한 사용자 경험(UX) 최적화',
            paragraph:
              '신규 입사자가 방대한 가이드 속에서 길을 잃지 않도록, 현재 위치와 이전 탐색 발자취를 직관적으로 보여주는 Breadcrumbs 네비게이션을 구현',
          },
        },
        {
          type: 'paragraphBox',
          icon: '🤖',
          paragraph: {
            title: '비개발 직군을 고려한 운영 효율화 및 안정성 확보',
            paragraph:
              '운영 가이드가 추가되거나 수정될 때 구조화된 JSON으로 손쉬운 콘텐츠 업데이트로 협업 리소스를 절감',
          },
        },
      ],
    },

    // 5 - 트러블 슈팅
    {
      id: 'slide-05',
      title: '트러블 슈팅',
      blocks: [
        {
          type: 'H2',
          text: '보안 환경에서의 데이터 수급 문제 해결'
        },
        {
          type: 'H3',
          text: '문제 정의',
        },
        {
          type: 'paragraph',
          text: 'Jira API 접근 및 크롤링이 사내 보안 문제로 불가능하여 엑셀 파싱 방식을 선택하였으나 역시 보안(DRM)이 걸려 데이터 파싱이 불가능한 상황.',
        },
        {
          type: 'H3',
          text: '해결방법',
        },
        {
          type: 'paragraph',
          text: '1. 데이터 수급 방식의 한계를 인정하고 우회 경로 탐색.\n2. Python의 xlwings 라이브러리가 엑셀 프로세스를 직접 제어하여 보안 레이어를 통과할 수 있다는 점에 착안.\n3. 직접 보안 해제 로직을 코드로 구현하여 검증 후 백엔드 개발자에게 공유.',
        },
        {
          type: 'H3',
          text: '결과',
        },
        {
          type: 'paragraph',
          text: '수동으로 입력해야 했던 대량의 티켓 데이터를 자동 업로드할 수 있는 파이프라인 구축.\n\n',
        },
        {
          type: 'badge',
          text: 'Before',
          description: '데이터 수급 3가지 시도 - 모두 한계 존재',
          variant: 'before',
        },
        {
          type: 'image',
          src: 'src/assets/Project/erp/before.png',
        },
        {
          type: 'badge',
          text: 'After',
          description: 'xlwings 우회 파이프라인',
          variant: 'after',
        },
        {
          type: 'image',
          src: 'src/assets/Project/erp/after.png',
        },
        { type: 'divider' },
        {
          type: 'H2',
          text: '데이터 업데이트 시 사용자 경험(UX) 저하 해결'
        },
        {
          type: 'H3',
          text: '문제 정의',
        },
        {
          type: 'paragraph',
          text: 'Jira 티켓 수정 후 서버 데이터와 동기화하기 위해 invalidateQueries를 호출할 때, 테이블의 isLoading 상태가 true로 변하면서 데이터가 순간적으로 사라졌다 다시 나타나는 깜빡임 현상 발생. 이는 사용자 집중도를 흐트러뜨리고 서비스의 완성도를 낮춤.',
        },
        {
          type: 'H3',
          text: '원인',
        },
        {
          type: 'paragraph',
          text: "React Query는 기본적으로 캐시된 데이터가 있더라도 invalidate 시 'stale' 상태로 판단하여 백그라운드에서 페칭을 시작하는데, 이때 UI 로직에서 isLoading을 사용하여 스피너를 보여주거나 빈 화면을 렌더링하도록 설정되어 있었기 때문.",
        },
        {
          type: 'H3',
          text: '해결방법',
        },
        {
          type: 'paragraph',
          text: "1. placeholderData (또는 keepPreviousData: true) 활용: 새 데이터를 가져오는 동안 기존 데이터를 화면에 유지하도록 설정하여 '빈 화면' 노출을 방지.\n2. isFetching과 isLoading의 분리: 초기 로딩 시에만 스피너를 보여주고, 업데이트(refetch) 시에는 사용자가 작업하던 테이블 UI를 그대로 유지한 채 백그라운드에서 데이터만 교체되도록 로직 수정.\n3. 성능 최적화: react-table의 memo 처리를 통해 데이터가 교체될 때 변경된 행(Row)만 다시 그리도록 최적화.\n\n",
        },
        {
          type: 'badge',
          text: 'Before',
          variant: 'before',
        },
        {
          type: 'image',
          src: '/src/assets/Project/erp/erp7.png',
        },
        {
          type: 'badge',
          text: 'After',
          variant: 'after',
        },
        {
          type: 'image',
          src: '/src/assets/Project/erp/erp8.png',
        },
      ],
    },
    // 6 - 회고
    {
      id: 'slide-6',
      title: '회고 및 프로젝트 성과',
      blocks: [
        {
          type: 'H2',
          text: '회고',
        },
        {
          type: 'H3',
          text: '아쉬웠던 점',
        },
        {
          type: 'paragraph',
          text: '• 엄격한 사내 보안 정책(Jira API 차단, DRM 등)으로 인해 초기 데이터 수급 파이프라인을 설계하는 데 예상보다 많은 시간이 소요되었다.\n• 실무 환경의 제약 조건을 미리 파악하지 못해 초기 기획 단계에서 시행착오를 겪었고, 이로 인해 후속 고도화 작업을 진행할 물리적 시간이 부족했다.',
        },
        {
          type: 'H3',
          text: '잘한 점',
        },
        {
          type: 'paragraph',
          text: '• 기술적 제약에 부딪혔을 때 포기하지 않고, OS 레벨에서 엑셀을 제어하는 xlwings 라이브러리를 직접 서칭 및 제안하여 막혀있던 데이터 수급 문제를 창의적으로 해결했다.\n• react-table과 React Query의 캐싱 전략을 적절히 조합하여, 대용량 데이터를 다루면서도 화면 깜빡임이 없는 부드러운 사용자 경험을 제공했다.\n• 기획 단계부터 티켓 관리자 및 리더들의 리소스 관리 니즈를 파악하고, 역할 기반 권한 제어(RBAC)를 녹여내어 실무 중심의 대시보드를 완성했다.',
        },
        {
          type: 'H2',
          text: '프로젝트 성과',
        },
        {
          type: 'paragraph',
          text: '• 단순한 기능 구현을 넘어, 회사의 보안 정책과 실무자의 업무 동선을 함께 고려하는 비즈니스 관점의 개발이 왜 중요한지 깊이 깨닫게 되었다.\n• 데이터가 변경될 때 컴포넌트의 렌더링 범위와 서버 상태 관리(stale, fetching)의 메커니즘을 깊이 이해하고 최적화하는 경험을 쌓았다.',
        },
        {
          type: 'circleSummary',
          title: "'실제 업무 현장의 병목을 기술과 아이디어로 해결한 개발 경험'",
          circles: [
            '실무 보안 제약을 극복한 창의적 문제 해결 경험',
            '대용량 데이터 최적화 및 UX 개선 경험',
            '확장성을 고려한 컴포넌트 주도 설계',
          ],
        },
      ],
    },
  ],
};
