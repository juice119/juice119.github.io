import { ISkill } from '../component/skill/ISkill';

const programmingLanguages: ISkill.Skill = {
  category: 'Languages',
  items: [
    {
      title: 'JavaScript',
    },
    {
      title: 'TypeScripte',
    },
    {
      title: 'HTML & CSS',
    },
    {
      title: 'Kotlin',
    },
    {
      title: 'Java',
    },
  ],
};

const kernelDevelopment: ISkill.Skill = {
  category: 'Fameworks & Libraries',
  items: [
    {
      title: 'NestJS',
    },
    {
      title: 'Express',
    },
    {
      title: 'Spring Boot',
    },
    {
      title: 'NextJS',
    },
  ],
};

const automation: ISkill.Skill = {
  category: 'Databases & ORM',
  items: [
    {
      title: 'PostgreSQL',
    },
    {
      title: 'Redis',
    },
    {
      title: 'TypeORM',
    },
    {
      title: 'Prisma',
    },
    {
      title: 'Sequelize',
    },
  ],
};

const networkSecurity: ISkill.Skill = {
  category: 'Infrastructure',
  items: [
    {
      title: 'AWS',
      level: 3,
    },
    {
      title: 'Docker',
      level: 3,
    },
  ],
};

const misc: ISkill.Skill = {
  category: 'Tools & IDEs',
  items: [
    {
      title: 'Cursor',
    },
    {
      title: 'Git',
    },
    {
      title: 'IntelliJ IDEA ',
    },
    {
      title: 'WebStorm ',
    },
    {
      title: 'DataGrip',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [programmingLanguages, kernelDevelopment, automation, networkSecurity, misc],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
