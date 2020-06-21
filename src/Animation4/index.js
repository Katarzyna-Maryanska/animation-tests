import React, {useRef, useEffect} from "react";
import gsap from "gsap";

import {ReactComponent as Scene} from "./fun.svg";
import {Title, Wrapper, AnimationContainer} from "../Typography";
import {Button} from "../components/Button";

export const Animation4 = () => {
  const wrapper = useRef(null);

  let tl;

  useEffect(() => {
    const [elements] = wrapper.current.children;

    const filter = elements.getElementById('filter');
    const stars = elements.getElementById('stars');
    const dog = elements.getElementById('dog');
    const ball = elements.getElementById('ball');
    const something = elements.getElementById('something');
    const guy = elements.getElementById('guy');
    const girl = elements.getElementById('girl');
    const trees = elements.getElementById('trees');
    const leaves1 = elements.getElementById('leaves1');
    const leaves2 = elements.getElementById('leaves2');
    const leaves3 = elements.getElementById('leaves3');
    const mountains = elements.getElementById('mountains');
    const sun = elements.getElementById('sun');
    const ground = elements.getElementById('ground');

    gsap.set([...stars.children, ...something.children, dog, ball], {autoAlpha: 0});
    gsap.set([ guy, girl, ...trees.children, mountains, trees, ...leaves1.children, ...leaves2.children, ...leaves3.children, sun, ground], {autoAlpha: 1});
    // gsap.set(rocket, {transformOrigin: '30% 34%'});
    // gsap.set(signal, {rotate: '180%', transformOrigin: '50% 30%'});

    tl = gsap.timeline({defaults: {ease: 'power3.inOut'}})
    tl.fromTo(leaves1.children, {x: '-=10', y: '-=5', scale: 0.95, rotate: '0%'}, {duration: 3, x: '+=10', y: '+=5', scale: 1, rotate: '3%', autoAlpha: 1, stagger: 0.2, yoyo: true,  repeat: -1}, 1)
    tl.fromTo(leaves2.children, {x: '-=11', y: '-=4', scale: 0.95, rotate: '0%'}, {duration: 3, x: '+=11', y: '+=4', scale: 1, rotate: '2%', autoAlpha: 1, stagger: 0.3, yoyo: true,  repeat: -1}, 1)
    tl.fromTo(leaves3.children, {x: '-=9', y: '-=3', scale: 0.95, rotate: '2%'}, {duration: 3, x: '+=9', y: '+=3', scale: 1, rotate: '3%', autoAlpha: 1, stagger: 0.2, yoyo: true,  repeat: -1}, 1)
    // tl.fromTo(guy, {x: '-=10', y: '-=200', scale: 0, rotate: '360%'}, {duration: 5, x: '-=10', y: '+=200', scale: 1, rotate: '0%', autoAlpha: 1},1)
    tl.fromTo(guy, {x: '-=300', rotate: '0%'}, {duration: 5, x: '+=200', rotate: '-5%'}, 1)
    .fromTo(guy, {x: '+=200', rotate: '0%'}, {duration: 5, x: '+=400', rotate: '-5%'}, 5)
    .fromTo(guy, {x: '+=400', rotate: '0%'}, {duration: 5, x: '+=700', rotate: '-5%'}, 10)
    // tl.fromTo(guy, {rotate: '0%'}, {duration: 5, rotate: '10%', yoyo: true}, 5)
    // tl.fromTo(moon, {y: '+=100'}, {duration: 3, y: '-=100', autoAlpha: 1}, 1)
    // tl.fromTo(rocket, {y: '-=30', rotate: '2%' }, {duration: 4, y: '+=30', rotate: '0' })
    // tl.to(sky.children, {duration: 5, autoAlpha: 1, stagger: 0.3},1)
    // tlElastic.fromTo(astronaut, {x: '-=300', scale: 0.75}, {duration: 3, x: '+=300', scale: 0.85, autoAlpha: 1}, 9)
    // tlElastic.fromTo(astronaut, {y: '-=10'}, { duration: 2, y: '+=90', yoyo: true, repeat: -1}, 11)
    // tlElastic.fromTo(signal, {x: '-=100', scale: 0}, {delay: 0.33, duration: 2, x: '+=100', scale: 1, yoyo: true, repeat: -1, autoAlpha: 1})
  }, [])

  const handleAnimation = (e) => {
    tl.paused(!tl.paused());
    e.target.innerHTML = tl.paused() ? "play" : "pause";
  }

  return (
    <AnimationContainer>
      <Title>All day fun</Title>
      <Wrapper ref={wrapper}>
        <Scene/>
      </Wrapper>
      <Button onClick={handleAnimation}>pause</Button>
    </AnimationContainer>
  )
};
