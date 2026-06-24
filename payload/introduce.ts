import { IntroducePayload } from '../types/introduce';
import { latestUpdatedAt } from '../package.json';

const introduce: IntroducePayload = {
  disable: false,

  contents: [
    '기술 부채 관리에 관심이 많은 개발자 김주열 입니다.',

    '인프랩에서 B2B 서비스 개선을 중심으로 PG 결제사 이관과 이메일 대량 발송 시스템 구축 등의 업무를 담당했습니다.',

    '주로 Express와 NestJS 기반 서버를 개발했으며 PostgreSQL, Redis, AWS 환경에서 서비스를 운영했습니다.',

    '프로젝트를 진행하며 빠른 기능 개발 과정에서 기술 부채가 누적되면 개발 생산성과 팀 전체의 안정성이 크게 떨어질 수 있다는 것을 경험했습니다. 이후 레거시 코드 정리와 서비스 구조 개선, 테스트 환경 구축 등을 통해 기술 부채를 줄이고 안정적인 개발 환경을 만드는 것에 관심을 가지게 되었습니다.',

    '앞으로도 서비스 구조와 코드 품질을 함께 개선하며 지속적으로 성장하는 백엔드 개발자가 되고 싶습니다.',
  ],
  sign: '김주열',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: latestUpdatedAt,
};

export default introduce;
