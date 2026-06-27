import { ExperiencePayload } from '../types/experience';

const experience: ExperiencePayload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '인프런',
      positions: [
        {
          startedAt: '2020-12',
          endedAt: '2022-11',
          title: '인프런 서비스 개발',
          descriptions: [
            {
              content:
                '기존 외부 PG사의 잦은 장애 문제를 해결하기 위해 네이버 페이로 이관 작업 수행하여 프로세스의 예외 발생율을 낮추고 서비스 안정성을 확보',
            },
            { content: '멘토링 서비스 초기 버전 개발' },
            { content: 'B2B 서비스 개발 및 확장' },
            {
              content:
                'AWS SES, SQS, Lambda로 이벤트 기반 대량 이메일 발송 시스템을 구축하여 서버 부하를 최소화하고, 최대 50만 건 이상의 이메일을 안정적으로 발송할 수 있도록 개선',
            },
          ],
          skillKeywords: ['NestJS', 'PostgreSQL', 'TypeORM', 'AWS', 'Docker-Compose'],
        },
        {
          startedAt: '2022-11',
          endedAt: '2023-08',
          title: '인프런 B2B 신규 서버 추가 및 테스트 코드 도입',
          descriptions: [
            {
              content:
                '통합 테스트 시간 단축을 위해 pg-mem을 도입하여 테스트 시간 4.3초 -> 1.8초로 약 67% 단축',
            },
          ],
          skillKeywords: ['NestJS', 'PostgreSQL', 'TypeORM', 'AWS', 'Docker-Compose'],
        },
        {
          title: '인프런 B2B 모노리스 서비스 분리',
          startedAt: '2022-10',
          endedAt: '2022-11',
          descriptions: [
            {
              content:
                '로딩 및 빌드 시 12초 이상 소요되던 대형 모노리스 프로젝트에서 B2B 서비스를 성공적으로 분리, 레거시 코드 제거, Node.js 버전 업그레이드,  SWC를 도입하여 로딩시간을 12 -> 1.4초, 빌드시간 22초 -> 5.4초로 약 88% 단축했습니다.',
            },
          ],
          skillKeywords: ['Express', 'TypeScript', 'webpack'],
        },
      ],
    },
    {
      title: '고박스 주식회사',
      positions: [
        {
          title: '배송 경로 추천 서비스 개발',
          startedAt: '2020-07',
          endedAt: '2020-09',
          descriptions: [
            {
              content:
                '대량의 퀵 배송지 데이터를 기반으로, 이동 동선을 고려한 최적의 배송 경로 추천 알고리즘 및 서비스를 개발',
            },
          ],
          skillKeywords: ['Express', 'MySQL', 'Sequelize', 'AWS'],
        },
      ],
    },
  ],
};

export default experience;
