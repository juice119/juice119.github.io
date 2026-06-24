import styled from 'styled-components';
import { PropsWithChildren } from 'react';

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-end;
  }
`;

const Image = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center center;
  border: 2px solid ${({ theme }) => theme.colors.profileImageBorder};
`;

export default function ProfileImage({ src }: PropsWithChildren<{ src: string }>) {
  return (
    <ImageWrapper>
      <Image src={src} alt="Profile" />
    </ImageWrapper>
  );
}
