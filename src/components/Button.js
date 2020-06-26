import styled from "styled-components";

import {theme} from '../styles/theme'

export const Button = styled.button`
  height: 2.5rem;
  width: 6rem;
  font-size: ${theme.fontSizes.xs};
  color: ${theme.colors.midGray};
  border-radius: ${theme.radii.xl};
  padding: 0.5rem 0.8rem;
  border: 1px solid ${theme.colors.neutralMedium};
  background-color:  ${theme.colors.neutralLight};
  outline: none;
  transition: all 200ms;
  cursor: pointer;
  margin-left: 1rem;

  &:hover {
    box-shadow: 0 0.5rem 1.3rem 0 rgba(0,0,0,.1);
    border: 1px solid ${theme.colors.neutralMedium};
  }
`;