import { DateTime } from 'luxon';
import { PropsWithChildren } from 'react';
import { IExperience } from './IExperience';
import Util from '../common/Util';
import {
  ActiveBadge,
  BadgeGroup,
  CompanyBlock,
  CompanyDate,
  CompanyHeader,
  ContentColumn,
  DateColumn,
  DescriptionList,
  DurationBadge,
  ExperienceRowLayout,
  PositionTitle,
  SkillKeywordList,
  SkillKeywordPill,
  SkillKeywordsBlock,
  SkillKeywordsTitle,
  StatusDot,
  SubDate,
} from './styles';

type PositionWithDates = IExperience.Position & {
  startedAtDate: DateTime;
  endedAtDate: DateTime | null;
  isCurrent: boolean;
};

export default function ExperienceRow({
  item,
}: PropsWithChildren<{ item: IExperience.Item; index: number }>) {
  const positionsWithDates: PositionWithDates[] = item.positions.map((position) => ({
    ...position,
    startedAtDate: DateTime.fromFormat(position.startedAt, Util.LUXON_DATE_FORMAT.YYYY_LL),
    endedAtDate: position.endedAt
      ? DateTime.fromFormat(position.endedAt, Util.LUXON_DATE_FORMAT.YYYY_LL)
      : null,
    isCurrent: !position.endedAt,
  }));

  const sortedPositions = positionsWithDates
    .slice()
    .sort((a, b) => b.startedAtDate.toMillis() - a.startedAtDate.toMillis());

  const minStartedAt = DateTime.min(...sortedPositions.map((position) => position.startedAtDate));
  const isCurrentlyEmployed = sortedPositions.some((position) => position.isCurrent);

  function hasEndedAtDate(
    position: PositionWithDates,
  ): position is PositionWithDates & { endedAtDate: DateTime } {
    return position.endedAtDate !== null;
  }

  const endedAtDates = sortedPositions
    .filter(hasEndedAtDate)
    .map((position) => position.endedAtDate);

  let maxEndedAt: DateTime;
  if (isCurrentlyEmployed) {
    maxEndedAt = DateTime.local();
  } else if (endedAtDates.length > 0) {
    maxEndedAt = DateTime.max(...endedAtDates);
  } else {
    maxEndedAt = DateTime.local();
  }

  const periodTitle = createOverallWorkingPeriod(sortedPositions);
  const hasMultiplePositions = sortedPositions.length > 1;

  return (
    <CompanyBlock>
      <ExperienceRowLayout>
        <DateColumn>
          <CompanyDate>{periodTitle}</CompanyDate>
        </DateColumn>
        <ContentColumn>
          <CompanyHeader>
            {isCurrentlyEmployed && <StatusDot />}
            <span>{item.title}</span>
            <BadgeGroup>
              {isCurrentlyEmployed && <ActiveBadge>재직 중</ActiveBadge>}
              <DurationBadge>{Util.getFormattingDuration(minStartedAt, maxEndedAt)}</DurationBadge>
            </BadgeGroup>
          </CompanyHeader>
        </ContentColumn>
      </ExperienceRowLayout>

      {sortedPositions.map((position, posIndex) => (
        <ExperienceRowLayout key={posIndex.toString()}>
          <DateColumn>
            {hasMultiplePositions && (
              <SubDate>{createWorkingPeriod(position.startedAtDate, position.endedAtDate)}</SubDate>
            )}
          </DateColumn>
          <ContentColumn>
            <PositionTitle>{position.title}</PositionTitle>
            <DescriptionList>
              {position.descriptions.map((description, descIndex) => (
                <li key={descIndex.toString()}>{description}</li>
              ))}
            </DescriptionList>
            {createSkillKeywords(position.skillKeywords)}
          </ContentColumn>
        </ExperienceRowLayout>
      ))}
    </CompanyBlock>
  );
}

function createOverallWorkingPeriod(positions: PositionWithDates[]) {
  const DATE_FORMAT = Util.LUXON_DATE_FORMAT.YYYY_DOT_LL;
  const startedAt = positions[positions.length - 1].startedAtDate;
  const isCurrentlyEmployed = positions.some((position) => position.isCurrent);

  if (isCurrentlyEmployed) {
    return `${startedAt.toFormat(DATE_FORMAT)} ~`;
  }

  function hasEndedAtDate(
    position: PositionWithDates,
  ): position is PositionWithDates & { endedAtDate: DateTime } {
    return position.endedAtDate !== null;
  }

  const endedAtDates = positions.filter(hasEndedAtDate).map((position) => position.endedAtDate);

  let endedAt: DateTime;
  if (endedAtDates.length > 0) {
    endedAt = DateTime.max(...endedAtDates);
  } else {
    endedAt = DateTime.local();
  }

  return `${startedAt.toFormat(DATE_FORMAT)} ~ ${endedAt.toFormat(DATE_FORMAT)}`;
}

function createSkillKeywords(skillKeywords?: string[]) {
  const keywords = skillKeywords?.filter((keyword) => keyword.trim()) ?? [];
  if (keywords.length === 0) {
    return null;
  }

  return (
    <SkillKeywordsBlock>
      <SkillKeywordsTitle>Skill Keywords</SkillKeywordsTitle>
      <SkillKeywordList>
        {keywords.map((keyword, index) => (
          <SkillKeywordPill key={index.toString()}>{keyword}</SkillKeywordPill>
        ))}
      </SkillKeywordList>
    </SkillKeywordsBlock>
  );
}

function createWorkingPeriod(startedAt: DateTime, endedAt?: DateTime | null) {
  const DATE_FORMAT = Util.LUXON_DATE_FORMAT.YYYY_DOT_LL;

  if (!endedAt) {
    return `${startedAt.toFormat(DATE_FORMAT)} ~`;
  }

  return `${startedAt.toFormat(DATE_FORMAT)} ~ ${endedAt.toFormat(DATE_FORMAT)}`;
}
