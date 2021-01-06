import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  height: 100vh;
  width: 600px;
  overflow: hidden;
`;

export const Line = styled.line`
  stroke-width: 1;
  stroke: #3c3c3c;
`;

export const Wave = styled.polyline`
  fill: none;
  stroke-width: 4;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: #56acf4;
`;

export const StyledSVG = styled.svg`
  width: 800px;
  height: 100%;
  padding: 50px;
`;