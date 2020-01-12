import React, {useEffect} from "react";

import { Flower } from "./Flower";
import { StyledText, StyledDiv, Container } from "./styles";
import { TimelineMax, TweenLite, TweenMax } from "gsap";

export const Animation2 = () => {
  const timeLine = new TimelineMax();

  useEffect(() => {
    timeLine
      .fromTo("#flower", 2, { y: 50 }, { y: 0 })
      .to("#flower", 1, { y: 13 });
    TweenLite
      .to("#flower", 2, {rotation:360});
    TweenMax.from("#blossom", 3, {css:{scale:.8, opacity:.5}})
  });

  return (
    <Container>
      <p>Blossom</p>
      <StyledDiv>
        <Flower />
        <StyledText id="blossom">Blossom</StyledText>
      </StyledDiv>
    </Container>
  )
};
