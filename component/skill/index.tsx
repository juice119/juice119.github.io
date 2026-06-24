import { Tooltip } from 'reactstrap';
import { PropsWithChildren, useState } from 'react';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ISkill } from './ISkill';
import SkillRow from './row';
import { EmptyRowCol } from '../common';
import { PreProcessingComponent } from '../common/PreProcessingComponent';
import { SectionHeader } from '../common/SectionHeader';
import { Section } from '../common/PageLayout';

type Payload = ISkill.Payload;

export const Skill = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <Section>
      <EmptyRowCol>
        <SectionHeader title="SKILL">{createTooltip(payload.tooltip)}</SectionHeader>
        {payload.skills.map((skill, index) => (
          <SkillRow key={index.toString()} skill={skill} />
        ))}
      </EmptyRowCol>
    </Section>
  );
}

function createTooltip(content?: string) {
  if (!content) {
    return null;
  }

  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <>
      {' '}
      <FontAwesomeIcon icon={faQuestionCircle} id="skill-tooltip" />
      <Tooltip
        style={{ whiteSpace: 'pre-wrap' }}
        placement="right"
        target="skill-tooltip"
        isOpen={tooltipOpen}
        toggle={toggle}
      >
        {content}
      </Tooltip>
    </>
  );
}
