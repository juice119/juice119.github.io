import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import image from '../asset/sample_tux.png';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  image,
  name: {
    title: '김주열',
    small: '(주스)',
    subtitle: 'Backend Developer',
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
    // {
    //   link: 'https://www.facebook.com/groups/ubuntu.ko',
    //   icon: faFacebook,
    // },
  ],
  notice: {
    title: '이메일로 연락 부탁합니다.',
    icon: faBell,
  },
  stats: [
    // { value: '5+', label: 'YEARS OF EXPERIENCE' },
    // { value: '10+', label: 'PROJECTS' },
    // { value: '3+', label: 'TECH STACK' },
  ],
};

export default profile;
