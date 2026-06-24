import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faPrint, faSun } from '@fortawesome/free-solid-svg-icons';

import { useTheme } from './ThemeContext';

const Container = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 1000;
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: 1px solid ${({ theme }) => theme.colors.fabBorder};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.fabBackground};
  color: ${({ theme }) => theme.colors.text};
  box-shadow: ${({ theme }) => theme.colors.fabShadow};
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.15s ease;

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export function FloatingActions() {
  const { mode, toggleTheme } = useTheme();

  return (
    <Container className="no-print">
      <ActionButton type="button" onClick={() => window.print()} aria-label="Print">
        <FontAwesomeIcon icon={faPrint} />
      </ActionButton>
      <ActionButton type="button" onClick={toggleTheme} aria-label="Toggle theme">
        <FontAwesomeIcon icon={mode === 'light' ? faMoon : faSun} />
      </ActionButton>
    </Container>
  );
}
