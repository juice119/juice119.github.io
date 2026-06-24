import styled from 'styled-components';
import { PropsWithChildren } from 'react';

export const PageContainer = styled.div`
  max-width: 820px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem 5rem;
  font-family: Pretendard, sans-serif;
  font-weight: 300;
  word-wrap: break-word;
  word-break: keep-all;
  line-height: 1.8;
`;

export const Section = styled.section`
  margin-top: 3rem;
`;

export function PageLayout({ children }: PropsWithChildren<{}>) {
  return <PageContainer>{children}</PageContainer>;
}
