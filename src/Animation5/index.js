import React, {useRef, useEffect} from "react";
import gsap from "gsap";
import MorphSVGPlugin from "gsap/MotionPathPlugin";

import {ReactComponent as Scene} from "./scene.svg";
import {Title, Wrapper, AnimationContainer} from "../Typography";
import {Button} from "../components/Button";

gsap.registerPlugin(MorphSVGPlugin);

export const Animation5 = () => {
  const wrapper = useRef(null);

  let tl;

  useEffect(() => {
    const [elements] = wrapper.current.children;

    tl = gsap.timeline({ defaults: {duration: 1, ease: 'power3.inOut'}})

    const circle = elements.getElementById('circle');
    const hippo = elements.getElementById('hippo');
    const star = elements.getElementById('star');
    const elephant = elements.getElementById('elephant');

    tl.to(circle, {morphSVG: hippo},"+=1")
        .to(circle, {morphSVG: star}, "+=1")
        .to(circle, {morphSVG: elephant}, "+=1")
        .to(circle, {morphSVG:circle}, "+=1");
  }, [])

  const handleAnimation = (e) => {
    tl.paused(!tl.paused());
    e.target.innerHTML = tl.paused() ? ">>" : "||";
  }

  const handleRestart = (e) => {
    tl.restart();
  }

  return (
    <AnimationContainer>
      <Title>Morph</Title>
      <Wrapper ref={wrapper}>
        <Scene/>
      </Wrapper>
      <Button onClick={handleAnimation}>||</Button>
      <Button onClick={handleRestart}>restart</Button>
    </AnimationContainer>
  )
};
