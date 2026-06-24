import styled from 'styled-components';
import { PropsWithChildren } from 'react';

import { EmptyRowCol, HrefTargetBlank } from '../common';

import { IFooter } from './IFooter';

const FooterCover = styled.div`
  margin-top: 3rem;
  padding: 2rem 0;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 12px;
  text-align: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.85rem;
`;

export const Footer = {
  Component,
};

function Component({ payload }: PropsWithChildren<{ payload: IFooter.Payload }>) {
  return (
    <FooterCover>
      <EmptyRowCol>
        <small>
          v.{`${payload.version} / `}
          <HrefTargetBlank url="https://github.com/uyu423/resume-nextjs" text="Github" />
          {' / '}
          Thanks for <HrefTargetBlank url="https://blog.outsider.ne.kr/1234" text="Outsider" />
        </small>
      </EmptyRowCol>
    </FooterCover>
  );
}
