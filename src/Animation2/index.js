import React, {useEffect} from "react";
import { gsap } from "gsap";

import { StyledText, StyledFlower } from "./styles";
import {Title, FlexWrapper, AnimationContainer} from "../Typography";
import {Button} from "../components/Button";

export const Animation2 = () => {
  let tl;

  useEffect(() => {

    const flower = document.getElementById('flower');
    const blossom = document.getElementById('blossom');

    gsap.set([flower, blossom], {autoAlpha: 0});

    tl = gsap.timeline({defaults: {ease: 'power3.inOut'}})

    tl.fromTo(flower, {scale: 0}, {duration: 5, scale: 1, rotate: '360%', autoAlpha: 1})
    tl.fromTo(flower, {rotate: '0'}, {duration: 5, rotate: '360%', yoyo: true, repeat: -1})
    tl.fromTo(blossom, {scale: 0.7}, {duration: 5, scale: 1 , autoAlpha: 1}, 1)
  });

  const handleAnimation = (e) => {
    tl.paused(!tl.paused());
    e.target.innerHTML = tl.paused() ? "play" : "pause";
  }

  return (
    <AnimationContainer>
      <Title>Blossom</Title>
      <FlexWrapper>
        <StyledFlower id="flower"/>
        <StyledText id="blossom">Blossom</StyledText>
      </FlexWrapper>
      <Button onClick={handleAnimation}>pause</Button>
    </AnimationContainer>
  )
};
