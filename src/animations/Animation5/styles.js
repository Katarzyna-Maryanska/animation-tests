import styled from "styled-components";

export const StyledInput = styled.input`
  margin: 1px;
  width: 25px;
  height: 25px;
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
  opacity: 0;

  @media (min-width: 960px) {
    width: 30px;
    height: 30px;
  }
`;

export const Container = styled.div`
  text-align: center;
  margin: auto;
`;

export const Wrapper = styled.div`
  margin: 0 auto 3rem auto;
  //margin: 0;
  font-size: 0;
  overflow: hidden;
  //height: 100vh;
  display: flex;
  position: fixed;
  height: 100%;
`;

