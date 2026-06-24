import { GlobalPayload } from '../types/global';

const favicon = '/favicon.ico';
const previewImage = '/preview.jpg';

const title = '김주열 | Backend Developer';
const description = '기술 부채 관리에 관심이 많은 백엔드 개발자 김주열의 이력서입니다.';

export const _global: GlobalPayload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage,
          width: 800,
          height: 600,
          alt: '김주열 이력서 미리보기',
        },
      ],
      type: 'profile',
      profile: {
        firstName: '주열',
        lastName: '김',
        username: 'juice119',
        gender: 'male',
      },
    },
  },
  jsonLd: {
    name: '김주열',
    jobTitle: 'Backend Developer',
    worksFor: '인프런',
    url: 'https://juice119.github.io',
    sameAs: ['https://github.com/juice119'],
    knowsAbout: ['TypeScript', 'NestJS', 'PostgreSQL', 'AWS'],
  },
};
