import { latestUpdatedAt } from '../package.json';
import { IntroducePayload } from '../types/introduce';

const introduce: IntroducePayload = {
  disable: false,

  contents: [
    'IT 교육 플랫폼 인프런(인프랩)에서 약 3년간 NestJS, TypeScript를 기반으로 PostgreSQL, Redis, AWS 환경에서 백엔드 개발을 담당했습니다. 레거시 시스템 개선과 신규 서비스 구축을 통해 안정적이고 지속 가능한 서비스 운영 환경을 만드는 데 집중했습니다.',

    '30만 줄 이상의 레거시 모노리스 환경에서 신규 B2B 서비스의 백엔드 설계와 구현을 담당하여 로딩 및 빌드 시간을 약 88% 단축했습니다. 또한 AWS SQS 기반 이벤트 처리 시스템을 구축해 하루 50만 건 이상의 이메일을 안정적으로 처리하고, 네이버페이 결제 이관을 수행하며 운영 환경의 안정성을 높였습니다.',

    '개발 생산성 역시 서비스 품질의 일부라고 생각합니다. 서비스 구조를 고려한 테스트 전략을 적용하고 인메모리 기반 통합 테스트 환경을 구축하여 테스트 시간을 67% 단축했습니다. 앞으로도 운영 환경과 유지보수성을 함께 고려하며 지속 가능한 시스템을 만드는 백엔드 엔지니어로 성장하고 싶습니다.',
  ],

  sign: '김주열',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: latestUpdatedAt,
};

export default introduce;
