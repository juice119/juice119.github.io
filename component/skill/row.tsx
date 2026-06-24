import styled from 'styled-components';
import { PropsWithChildren } from 'react';

import { ISkill } from './ISkill';

const RowContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 1.25rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

const Category = styled.h4`
  flex: 0 0 30%;
  margin: 0;
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  text-align: right;

  @media (max-width: 767px) {
    flex: none;
    width: 100%;
    text-align: left;
  }
`;

const SkillList = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const SkillPill = styled.span`
  display: inline-block;
  padding: 0.35rem 0.85rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 999px;
  background-color: ${({ theme }) =>
    theme.mode === 'light' ? '#ffffff' : theme.colors.cardBackground};
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.4;
`;

export default function SkillRow({ skill }: PropsWithChildren<{ skill: ISkill.Skill }>) {
  return (
    <RowContainer>
      <Category>{skill.category}</Category>
      <SkillList>
        {skill.items.map((item, skillIndex) => (
          <SkillPill key={skillIndex.toString()}>{item.title}</SkillPill>
        ))}
      </SkillList>
    </RowContainer>
  );
}
