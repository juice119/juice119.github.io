import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropsWithChildren } from 'react';

import { IProfile } from './IProfile';
import { HrefTargetBlank } from '../common';

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
`;

const Icon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.colors.accent};
  width: 14px;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px 16px;
  margin-top: 1rem;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export function ProfileContactGrid({
  contacts,
}: PropsWithChildren<{ contacts: IProfile.Contact[] }>) {
  return (
    <ContactGrid>
      {contacts.map((contact, index) => (
        <ProfileContact key={index.toString()} payload={contact} />
      ))}
    </ContactGrid>
  );
}

function ProfileContact({ payload }: PropsWithChildren<{ payload: IProfile.Contact }>) {
  return (
    <ContactItem>
      <Icon icon={payload.icon} />
      {createLink(payload)}
    </ContactItem>
  );
}

function createLink(payload: IProfile.Contact) {
  if (payload.badge) {
    return <span>{payload.title || payload.link}</span>;
  }
  return payload.link ? (
    <HrefTargetBlank url={payload.link} text={payload.title} />
  ) : (
    <span>{payload.title}</span>
  );
}
