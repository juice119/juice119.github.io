import { SkillItem, SkillPayload } from '../types/skill';

const programmingLanguages: SkillItem = {
  category: 'Languages',
  items: [
    { title: 'JavaScript' },
    { title: 'TypeScript' },
    { title: 'HTML & CSS' },
    { title: 'Kotlin' },
    { title: 'Java' },
  ],
};

const frameworks: SkillItem = {
  category: 'Frameworks & Libraries',
  items: [{ title: 'NestJS' }, { title: 'Express' }, { title: 'Spring Boot' }, { title: 'NextJS' }],
};

const databases: SkillItem = {
  category: 'Databases & ORM',
  items: [
    { title: 'PostgreSQL' },
    { title: 'Redis' },
    { title: 'TypeORM' },
    { title: 'Prisma' },
    { title: 'Sequelize' },
  ],
};

const infrastructure: SkillItem = {
  category: 'Infrastructure',
  items: [{ title: 'AWS' }, { title: 'Docker' }],
};

const tools: SkillItem = {
  category: 'Tools & IDEs',
  items: [
    { title: 'Cursor' },
    { title: 'Git' },
    { title: 'IntelliJ IDEA' },
    { title: 'WebStorm' },
    { title: 'DataGrip' },
  ],
};

const skill: SkillPayload = {
  disable: false,
  skills: [programmingLanguages, frameworks, databases, infrastructure, tools],
};

export default skill;
