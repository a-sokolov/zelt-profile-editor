import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Button from '@mui/material/Button';

export const AsideStyled = styled.aside`
  grid-area: aside;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #d3d3d3;

  @media (max-width: 600px) {
    display: none !important;
  }
`;

export const LogoutButtonStyled = styled(Button)`
  margin: 0 16px 16px !important;
`;

export const LinkStyled = styled(NavLink)`
  color: black;
  text-decoration: none;
`;
