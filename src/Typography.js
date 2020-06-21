import styled from "styled-components";

import {theme} from './styles/theme'

export const Body = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainTitle = styled.h1`
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.darkGray};
`;

export const AnimationContainer = styled.div`
  width: 100%;
  margin: 1rem 0 4rem 0;
`;

export const Title = styled.h2`
  padding: 1rem 0;
  margin-bottom: 3rem;
  font-size: ${theme.fontSizes.md};
  color: ${theme.colors.midGray};
  background-color: ${theme.colors.neutralLight};
`;

export const Wrapper = styled.div`
  margin-bottom: 3rem;
  & svg {
     width: ${props => props.width ? props.width : '70%'};
     height: auto;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
`;

