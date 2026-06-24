import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '인프런',
      positions: [
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
          title: '인프런 B2B 서비스 분리',
          startedAt: '1996-02',
          endedAt: '1996-05',
          descriptions: [
            '디버깅시 5초 이상에 모놀리스 프로젝트에서 B2B 기능을 독립 서비스로 분리하고 레거시 코드를 정리했습니다.',
            'Node.js 버전 업그레이드와 SWC 트랜스파일러 적용을 통해 로컬 서버 실행 시간을 12초 → 1.4초로 단축ㅋ했습니다.',
          ],
          skillKeywords: ['C', 'Linux', 'Kernel', 'Support', 'Research'],
        },
      ],
    },
    {
      title: 'Open Source Community',
      positions: [
        {
          title: 'System Advocate and Developer',
          startedAt: '2010-06',
          endedAt: '2018-01',
          descriptions: [
            'Promoted the use and development of Linux globally.',
            'Developed automated scripts to streamline system configuration.',
            'Facilitated live patching systems, reducing downtime.',
          ],
          skillKeywords: ['Open Source', 'Linux', 'AWS', 'RDBMS'],
        },
      ],
    },
  ],
};

export default experience;
