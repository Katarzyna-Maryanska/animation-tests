import React, {useEffect, useRef} from "react";
import { TweenMax } from "gsap";

import {Title, Wrapper, AnimationContainer} from "../Typography";

export const Animation1 = () => {
  const wrapper = useRef(null);

  const first = useRef(null);
  const second = useRef(null);
  const third = useRef(null);
  const fourth = useRef(null);

  useEffect(() => {
    TweenMax.fromTo(
      [first.current, third.current],
      0.6,
      { y: 18 },
      { y: -18, yoyo: true, repeat: -1 }
    );
    TweenMax.fromTo(
      [second.current, fourth.current],
      0.6,
      { y: -18 },
      { y: 18, repeat: -1, yoyo: true }
    );
  });
  return (
    <AnimationContainer>
      <Title>Pantone 2020</Title>
      <Wrapper ref={wrapper}>
        <svg viewBox="0 0 150 33.2" width="180" height="150">
          <circle ref={first} cx="16.1" cy="16.6" r="16.1" fill="#2A2C2B" />
          <circle ref={second} cx="55.2" cy="16.6" r="16.1" fill="#014C85" />
          <circle ref={third} cx="94.3" cy="16.6" r="16.1" fill="#6C848E" />
          <circle ref={fourth} cx="133.4" cy="16.6" r="16.1" fill="#5A677D" />
        </svg>
      </Wrapper>
    </AnimationContainer>
  )
};
