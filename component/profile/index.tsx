import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

import { PreProcessingComponent } from '../common/PreProcessingComponent';
import { ProfileContactGrid } from './contact';
import ProfileImage from './image';
import { IProfile } from './IProfile';
import ProfileStats from './stats';

type Payload = IProfile.Payload;

const NameHeading = styled.h1`
  margin: 0;
  font-size: 1.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.3;

  small {
    font-size: 0.65em;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

const Subtitle = styled.p`
  margin: 0.35rem 0 0;
  font-size: 1rem;
  color: ${({ theme }) =>
    theme.mode === 'dark' ? theme.colors.accent : theme.colors.textSecondary};
`;

const NoticeBar = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 1.5rem;
  padding: 0.85rem 1rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.noticeBackground};
  border: 1px solid ${({ theme }) => theme.colors.noticeBorder};
  border-left: 4px solid ${({ theme }) => theme.colors.noticeBorder};
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
`;

const ProfileLayout = styled.div`
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 1.5rem 2rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
  }
`;

const ProfileInfo = styled.div`
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Profile = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  const { image, contact, name, notice, stats } = payload;

  return (
    <section>
      <ProfileLayout>
        <ProfileImage src={image} />
        <ProfileInfo>
          <NameHeading>
            {name.title} {name.small ? <small>{name.small}</small> : null}
          </NameHeading>
          {name.subtitle ? <Subtitle>{name.subtitle}</Subtitle> : null}
          <ProfileContactGrid contacts={contact} />
        </ProfileInfo>
      </ProfileLayout>
      {notice ? (
        <NoticeBar>
          {notice.icon ? <FontAwesomeIcon icon={notice.icon} /> : null}
          {notice.title}
        </NoticeBar>
      ) : null}
      {stats && stats.length > 0 ? <ProfileStats stats={stats} /> : null}
    </section>
  );
}
