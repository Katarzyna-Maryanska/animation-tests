import styled from "styled-components";

export const StyledInput = styled.input`
  margin: 1px;
  width: 25px;
  height: 25px;
  position: absolute;
  pointer-events: none;
  opacity: 0;

  @media (min-width: 960px) {
    width: 30px;
    height: 30px;
  }
`;

export const Container = styled.span`
  text-align: center;
  margin: auto;
`;

export const Wrapper = styled.div`
  //margin: 0 auto;
  //margin: 0;
  //font-size: 0;
  //overflow: hidden;
  //display: flex;
  //position: fixed;
  height: 100vh;
`;

