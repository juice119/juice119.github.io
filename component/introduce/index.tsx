import styled from 'styled-components';
import { PropsWithChildren } from 'react';
import { DateTime } from 'luxon';

import { SectionHeader } from '../common/SectionHeader';
import Util from '../common/Util';
import { IIntroduce } from './IIntroduce';
import { PreProcessingComponent } from '../common/PreProcessingComponent';
import { Section } from '../common/PageLayout';

type Payload = IIntroduce.Payload;

const Content = styled.div`
  p {
    margin: 0 0 1rem;
    color: ${({ theme }) => theme.colors.text};
  }
`;

const Meta = styled.div`
  margin-top: 1.5rem;
  text-align: right;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Sign = styled.p`
  margin: 0.5rem 0 0;
  text-align: right;
  font-family: 'Parisienne', cursive;
  font-size: 1.5em;
  color: ${({ theme }) => theme.colors.text};
`;

const UpdatedBadge = styled.span`
  display: inline-block;
  margin-left: 0.35rem;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  font-size: 0.8rem;
`;

export const Introduce = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  const latestUpdated = DateTime.fromFormat(
    payload.latestUpdated,
    Util.LUXON_DATE_FORMAT.YYYY_LL_DD,
  );
  const latestUpdatedByNow = Math.floor(
    DateTime.local().diff(latestUpdated).milliseconds / 1000 / 60 / 60 / 24,
  );

  return (
    <Section>
      <SectionHeader title="INTRODUCE" />
      <Content>
        {payload.contents.map((content, index) => (
          <p key={index.toString()}>{content}</p>
        ))}
        <Meta>
          <small>Latest Updated</small>
          <UpdatedBadge>
            {`${latestUpdated.toFormat(
              Util.LUXON_DATE_FORMAT.YYYY_DOT_LL_DOT_DD,
            )} (D+${latestUpdatedByNow})`}
          </UpdatedBadge>
        </Meta>
        <Sign>{payload.sign}</Sign>
      </Content>
    </Section>
  );
}
