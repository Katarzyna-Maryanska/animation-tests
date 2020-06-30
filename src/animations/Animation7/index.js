import React, {useEffect} from "react";
import gsap from "gsap";

import {Wrapper, Line, Wave, StyledSVG} from "./styled";
import {Title, AnimationContainer} from "../../Typography";

export const Animation7 = () => {
  let tl, newTl;

  useEffect(() => {
    const svg = document.getElementById('svg')
    const wave = document.getElementById('wave')
    const line = document.getElementById('line')

    const width = 5000;

    gsap.set([line, wave], { y: window.innerHeight / 2 });

    tl = gsap.timeline({defaults: {ease: 'ease-in-out-sine', repeat: -1, yoyo: true, repeatDelay: 5}})

    const amplitude = 400;
    const frequency = 6;
    const segments  = 200;
    const interval  = width / segments;

    for (let i = 0; i < segments; i++) {

      const norm  = i / (segments - 1);
      const point = wave.points.appendItem(svg.createSVGPoint());

      point.x = i * interval;
      point.y = amplitude / 2;

      newTl = gsap.timeline()
      newTl.to(point,{ duration: 2, y: -point.y, repeat: -1, yoyo: true }).progress(norm * frequency);
    }
  }, [])

  return (
    <AnimationContainer>
      <Title>Spider legs</Title>
      <Wrapper>
        <StyledSVG id='svg'>
          <g>
            <Line id='line' x1="0" x2="100%" />
            <Wave id='wave' />
          </g>
        </StyledSVG>
      </Wrapper>
    </AnimationContainer>
  )
};
