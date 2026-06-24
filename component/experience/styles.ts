import styled from 'styled-components';

export const ExperienceRowLayout = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 0.75rem;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 0.35rem;
  }
`;

export const DateColumn = styled.div`
  flex: 0 0 25%;
  text-align: right;
  font-size: 0.95rem;
  line-height: 1.6;

  @media (max-width: 767px) {
    flex: none;
    width: 100%;
    text-align: left;
  }
`;

export const ContentColumn = styled.div`
  flex: 1;
  min-width: 0;
`;

export const CompanyBlock = styled.div`
  margin-bottom: 1.5rem;

  &:not(:first-child) {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

export const CompanyHeader = styled.h4`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
`;

export const CompanyDate = styled.div`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

export const SubDate = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const TotalLabel = styled.div`
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const StatusDot = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #22c55e;
  flex-shrink: 0;
`;

export const BadgeGroup = styled.span`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.35rem;
`;

const pillBase = `
  display: inline-block;
  padding: 0.15rem 0.55rem;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 500;
  line-height: 1.5;
  white-space: nowrap;
`;

export const ActiveBadge = styled.span`
  ${pillBase}
  border: 1px solid #86efac;
  background-color: ${({ theme }) => (theme.mode === 'light' ? '#f0fdf4' : '#14532d')};
  color: ${({ theme }) => (theme.mode === 'light' ? '#15803d' : '#86efac')};
`;

export const DurationBadge = styled.span`
  ${pillBase}
  border: 1px solid ${({ theme }) => (theme.mode === 'light' ? '#93c5fd' : '#38bdf8')};
  background-color: ${({ theme }) => (theme.mode === 'light' ? '#eff6ff' : '#0c4a6e')};
  color: ${({ theme }) => (theme.mode === 'light' ? '#2563eb' : '#7dd3fc')};
`;

export const TotalBadge = styled.span`
  ${pillBase}
  padding: 0.25rem 0.75rem;
  font-size: 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.cardBackground};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const PositionTitle = styled.div`
  margin-bottom: 0.35rem;
  font-style: italic;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const DescriptionList = styled.ul`
  margin: 0;
  padding-left: 1.1rem;

  li {
    margin-bottom: 0.15rem;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const SkillKeywordsBlock = styled.div`
  margin-top: 0.85rem;
`;

export const SkillKeywordsTitle = styled.strong`
  display: block;
  margin-bottom: 0.45rem;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const SkillKeywordList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
`;

export const SkillKeywordPill = styled.span`
  ${pillBase}
  padding: 0.2rem 0.65rem;
  font-size: 0.78rem;
  font-weight: 400;
  border: 1px solid ${({ theme }) => (theme.mode === 'light' ? '#93c5fd' : '#38bdf8')};
  background-color: ${({ theme }) => (theme.mode === 'light' ? '#eff6ff' : '#0c4a6e')};
  color: ${({ theme }) => (theme.mode === 'light' ? '#2563eb' : '#7dd3fc')};
`;
