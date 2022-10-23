import styled from 'styled-components';

export const LayoutStyled = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  grid-template-rows: 80px auto;
  grid-template-columns: 200px auto;
  grid-template-areas:
    'aside header'
    'aside content';

  @media (max-width: 600px) {
    grid-template-columns: auto;
    grid-template-areas:
      'header'
      'content';
  }
`;

export const ContentStyled = styled.div`
  grid-area: content;
  padding: 1rem 2rem;
  overflow: auto;
`;
