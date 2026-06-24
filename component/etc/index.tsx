import { PropsWithChildren } from 'react';
import { EtcItem, EtcPayload } from '../../types/etc';
import { RowPayload } from '../../types/row';
import { EmptyRowCol } from '../common';
import { CommonRows } from '../common/CommonRow';
import { CommonSection } from '../common/CommonSection';
import { Section } from '../common/Section';
import { ShowMoreWrapper } from '../common/ShowMoreWrapper';
import Util from '../common/Util';

type Payload = EtcPayload;
type Item = EtcItem;

export function EtcSection({ payload }: { payload: Payload }) {
  return (
    <Section payload={payload}>
      <EtcContent payload={payload} />
    </Section>
  );
}

function EtcContent({ payload }: { payload: Payload }) {
  return (
    <CommonSection title="ETC">
      <EtcRow payload={payload} />
    </CommonSection>
  );
}

function EtcRow({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <EmptyRowCol>
      <ShowMoreWrapper showMoreCount={payload.showMoreCount}>
        {payload.list.map((item, index) => {
          return <CommonRows key={index.toString()} payload={serialize(item)} index={index} />;
        })}
      </ShowMoreWrapper>
    </EmptyRowCol>
  );
}

function serialize(item: Item): RowPayload {
  return {
    left: {
      title: Util.formatDateRange(item.startedAt, item.endedAt, item.noProgress),
    },
    right: {
      ...item,
    },
  };
}
