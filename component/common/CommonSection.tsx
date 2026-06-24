import { PropsWithChildren } from 'react';

import { SectionHeader } from './SectionHeader';
import { Section } from './PageLayout';

export function CommonSection({ title, children }: PropsWithChildren<{ title: string }>) {
  return (
    <Section>
      <SectionHeader title={title} />
      {children}
    </Section>
  );
}
