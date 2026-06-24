import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
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
            '잦은 문제가 발생하는 PG사 서비스를 네이버 페이로 이관하여 결제 시 안정성을 확보했습니다.',
            '멘토링 서비스 초기 버전 개발',
            'B2B 서비스 개발 및 확장',
            '최대 50만건 이상의 이메일 발송 시스템 구축',
          ],
          skillKeywords: ['NestJS', 'PostgreSQL', 'TypeORM', 'AWS', 'Docker-Compose'],
        },
        {
          startedAt: '2022-08',
          endedAt: '2022-11',
          title: '인프런 B2B 신규 서버 추가 및 테스트 코드 도입',
          descriptions: [
            'unit 테스트, pg-mem을 통한 통합 테스트 환경을 구축하여 프로젝트 안정성 확보',
            '.husky로 커밋시 테스트 커버리지를 검사하여 90% 이상을 유지하며 테스트 코드 품질 관리',
          ],
          skillKeywords: ['NestJS', 'PostgreSQL', 'TypeORM', 'AWS', 'Docker-Compose'],
        },
        {
          title: '인프런 B2B 모노리스 서비스 분리',
          startedAt: '2022-10',
          endedAt: '2022-11',
          descriptions: [
            '디버깅시 8초 이상에 모노리스 프로젝트에서 B2B 서비스를 분리하고 레거시 코드 제거, Node.js 버전 업그레이드, SWC를 적용하여  디버깅 실행 시간을 12초 → 1.4초로 단축했습니다.',
            '외부 의존성이 높은 코드를 리팩토링하여 단위 테스트 환경을 구축해 서비스 안정성을 높였습니다.',
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
          descriptions: ['대량의 퀵 배송지를 최적의 경로 최적화하는 서비스를 개발했습니다.'],
          skillKeywords: ['Express', 'MySQL', 'Sequelize', 'AWS', ''],
        },
      ],
    },
  ],
};

export default experience;
