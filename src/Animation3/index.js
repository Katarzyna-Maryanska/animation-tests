import React, {useRef, useEffect} from "react";
import gsap from "gsap";

import {ReactComponent as Scene} from "./moon-scene.svg";
import {Title, Wrapper, AnimationContainer} from "../Typography";
import {Button} from "../components/Button";

export const Animation3 = () => {
  const wrapper = useRef(null);

  let tl, tlElastic;

  useEffect(() => {
    const [elements] = wrapper.current.children;

    const sky = elements.getElementById('sky');
    const background = elements.getElementById('background-color');
    const signal = elements.getElementById('signal');
    const rocket = elements.getElementById('rocket');
    const astronaut = elements.getElementById('astronaut');
    const moon = elements.getElementById('moon');
    const earth = elements.getElementById('earth');

    gsap.set([earth, background, rocket], {autoAlpha: 1});
    gsap.set([...sky.children, moon, signal, astronaut], {autoAlpha: 0});
    gsap.set(rocket, {transformOrigin: '30% 34%'});
    gsap.set(signal, {rotate: '180%', transformOrigin: '50% 30%'});

    tl = gsap.timeline({defaults: {ease: 'power3.inOut'}})
    tlElastic = gsap.timeline({defaults: {ease: 'elastic.easeIn'}})
    tl.fromTo(rocket, {x: '-=20', scale: 0, rotate: '360%'}, {duration: 5, x: '+=18', scale: 1, rotate: '2%'})
    tl.fromTo(moon, {y: '+=100'}, {duration: 3, y: '-=100', autoAlpha: 1}, 1)
    tl.fromTo(rocket, {y: '-=30', rotate: '2%' }, {duration: 4, y: '+=30', rotate: '0' })
    tl.to(sky.children, {duration: 5, autoAlpha: 1, stagger: 0.3},1)
    tlElastic.fromTo(astronaut, {x: '-=300', scale: 0.75}, {duration: 3, x: '+=300', scale: 0.85, autoAlpha: 1}, 9)
    tlElastic.fromTo(astronaut, {y: '-=10'}, { duration: 2, y: '+=90', yoyo: true, repeat: -1}, 11)
    tlElastic.fromTo(signal, {x: '-=100', scale: 0}, {delay: 0.33, duration: 2, x: '+=100', scale: 1, yoyo: true, repeat: -1, autoAlpha: 1})
  }, [])

  const handleAnimation = (e) => {
    tl.paused(!tl.paused());
    tlElastic.paused(!tlElastic.paused());
    e.target.innerHTML = tl.paused() && tlElastic.paused() ? ">>" : "||";
  }

  const handleRestart = (e) => {
    tl.restart();
    tlElastic.restart();
  }

  return (
    <AnimationContainer>
      <Title>To The Moon</Title>
      <Wrapper ref={wrapper}>
        <Scene/>
      </Wrapper>
      <Button onClick={handleAnimation}>||</Button>
      <Button onClick={handleRestart}>restart</Button>
    </AnimationContainer>
  )
};
