import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { ProfilePayload } from '../types/profile';

const profile: ProfilePayload = {
  disable: false,

  image: '/sample_tux.png',
  name: {
    title: '김주열',
    small: '(주스)',
  },
  contact: [
    {
      title: '3221ju@gmail.com',
      link: 'mailto:3221ju@gmail.com',
      icon: faEnvelope,
    },
    {
      link: 'https://github.com/juice119',
      icon: faGithub,
    },
  ],
  notice: {
    title: '이메일로 연락 부탁합니다.',
    icon: faBell,
  },
  tagline: 'Backend Developer',
};

export default profile;
