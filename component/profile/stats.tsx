import styled from 'styled-components';
import { PropsWithChildren } from 'react';

import { IProfile } from './IProfile';

const StatsCard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 1.5rem;
  padding: 1.5rem;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.cardBackground};

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accent};
  line-height: 1.2;
`;

const StatLabel = styled.div`
  margin-top: 0.35rem;
  font-size: 0.65rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export default function ProfileStats({ stats }: PropsWithChildren<{ stats: IProfile.Stat[] }>) {
  return (
    <StatsCard>
      {stats.map((stat, index) => (
        <StatItem key={index.toString()}>
          <StatValue>{stat.value}</StatValue>
          <StatLabel>{stat.label}</StatLabel>
        </StatItem>
      ))}
    </StatsCard>
  );
}
