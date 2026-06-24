import { latestUpdatedAt } from '../package.json';
import { IntroducePayload } from '../types/introduce';

const introduce: IntroducePayload = {
  disable: false,

  contents: [
    'IT 교육 플랫폼 인프런(인프랩)에서 약 3년간 백엔드 개발을 담당했습니다. Express, NestJS, TypeScript를 기반으로 PostgreSQL, Redis, AWS 환경에서 B2B 서비스 확장, 멘토링 서비스 초기 개발, 결제 및 이메일 등 핵심 인프라 개선 업무를 수행해 왔습니다.',

    '가파른 서비스 성장 과정에서 기술 부채가 개발 생산성과 시스템 안정성에 미치는 영향을 체감했고, 이를 해결하는 구조 개선에 깊은 관심을 두고 있습니다.',

    '대형 모노리스 아키텍처에서 B2B 서비스를 분리·독립시켜 로딩 및 빌드 시간을 약 88% 단축했으며, pg-mem을 도입하여 인메모리 기반으로 통합 테스트 시간을 67% 줄이고 Git 커밋 시 90% 이상의 테스트 커버리지를 강제하는 안정적인 프로젝트를 구축했습니다. 또한 네이버페이 결제 이관, AWS SES 기반의 50만 건 이상 대량 이메일 발송 시스템 구축 등을 통해 복잡한 비즈니스 도메인을 안정화하는 데 기여했습니다.',

    '동료가 안심하고 개발할 수 있는 안정적인 환경과 명확한 서비스 경계를 만드는 것을 중요하게 생각합니다. 기술과 비즈니스의 균형을 함께 고민하며, 적극적인 소통과 협업으로 제품의 성장에 기여하고 싶습니다.',
  ],
  sign: '김주열',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: latestUpdatedAt,
};

export default introduce;
