import styled from 'styled-components';

export const ProfileFormStyled = styled.div<{ $disabled: boolean }>`
  min-width: 300px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : undefined)};
`;

export const ButtonsBlockStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

export const TextFieldsBlockStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
