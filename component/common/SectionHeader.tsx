import styled from 'styled-components';
import { PropsWithChildren, ReactNode } from 'react';

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 1.25rem;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  color: ${({ theme }) => theme.colors.accent};
  white-space: nowrap;
`;

const Line = styled.div`
  flex: 1;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.border};
`;

export function SectionHeader({
  title,
  children,
}: PropsWithChildren<{ title: string; children?: ReactNode }>) {
  return (
    <Header>
      <Title>{title}</Title>
      <Line />
      {children}
    </Header>
  );
}
