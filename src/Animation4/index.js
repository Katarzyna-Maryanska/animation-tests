import React, {useRef, useEffect} from "react";
import gsap from "gsap";

import {ReactComponent as Scene} from "./fun.svg";
import {Title, Wrapper, AnimationContainer} from "../Typography";
import {Button} from "../components/Button";

export const Animation4 = () => {
  const wrapper = useRef(null);

  let tl, tlSun, tlDog, tlFilter;

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
    const sunpath = elements.getElementById('sunpath');
    const ground = elements.getElementById('ground');

    gsap.set([ ...stars.children, ...something.children, sunpath], {autoAlpha: 0});
    gsap.set([filter, guy, girl, dog, ball, ...trees.children, mountains, trees, ...leaves1.children, ...leaves2.children, ...leaves3.children, sun, ground], {autoAlpha: 1});
    gsap.set(ball, {transformOrigin: '50% 50%'});

    tlFilter = gsap.timeline({defaults: {ease: 'power3.inOut', repeat: -1, yoyo: true, repeatDelay: 5}})
    tl = gsap.timeline({defaults: {ease: 'power3.inOut'}})
    tlSun = gsap.timeline({defaults: {ease: 'power0', repeat: -1, repeatDelay: 10}})
    tlDog = gsap.timeline( {ease: 'power0'})


    tlFilter.fromTo(filter, {x: '+=0', opacity: 0.3, autoAlpha: 1}, {duration: 5, x: '-=1000', autoAlpha: 0})
        .to(filter, {duration: 5, x: '-=0',opacity: 0.3, autoAlpha: 1})
    tlSun.to(sun, {duration: 10, motionPath:{
            path: sunpath,
            align: sunpath,
            autoRotate: true,
            alignOrigin: [0, 0.4],
            start: 0,
            end: 1.
          }})
    tl.fromTo(leaves1.children, {x: '-=10', y: '-=5', scale: 0.95}, {duration: 3, x: '+=10', y: '+=5', scale: 1, autoAlpha: 1, stagger: 0.1, yoyo: true,  repeat: -1}, 1)
    tl.fromTo(leaves2.children, {x: '-=11', y: '-=4', scale: 0.95}, {duration: 3, x: '+=11', y: '+=4', scale: 1, autoAlpha: 1, stagger: 0.1, yoyo: true,  repeat: -1}, 1)
    tl.fromTo(leaves3.children, {x: '-=9', y: '-=3', scale: 0.95}, {duration: 3, x: '+=9', y: '+=3', scale: 1, autoAlpha: 1, stagger: 0.1, yoyo: true,  repeat: -1}, 1)
    tl.fromTo(guy, {x: '-=300', rotate: '2%'}, {duration: 3, x: '+=200', rotate: '-2%'}, 1)
        .to(guy,{duration: 3, x: '+=400', rotate: '2%'})
        .to(guy,{duration: 3, x: '+=700', rotate: '-2%'})
    tlDog.fromTo(ball, {x: '+=300'}, {duration: 5, x: '-=300'},1)
        .to(ball, {delay: 1, duration: 5, x: '-=850'})
        .fromTo(ball, {y: '-=30'}, {y: '+=50', yoyo: true, repeat: -1, ease: 'none'}, 1)
        .to(ball,  {duration: 0.3, rotate: '360%', repeat: -1, ease: 'none'}, 1)
    tlDog.fromTo(dog, {x: '+=300'}, { delay: 0.5, duration: 5, x: '-=340'},1)
        .to(dog, {duration: 5, x: '-=850'})
        .fromTo(dog, {y: '-=50', rotate: '-5%'}, {delay: 0.2, y: '+=50', rotate: '+5%', yoyo: true, repeat: -1}, 1)


  }, [])
  const handleAnimation = (e) => {
    tlFilter.paused(!tlFilter.paused());
    tl.paused(!tl.paused());
    tlSun.paused(!tlSun.paused());
    tlDog.paused(!tlDog.paused());
    e.target.innerHTML = tl.paused() ? ">>" : "||";
  }

  const handleRestart = (e) => {
    tlFilter.restart();
    tl.restart();
    tlSun.restart();
    tlDog.restart()
  }

  return (
    <AnimationContainer>
      <Title>All day fun</Title>
      <Wrapper ref={wrapper}>
        <Scene/>
      </Wrapper>
      <Button onClick={handleAnimation}>||</Button>
      <Button onClick={handleRestart}>restart</Button>
    </AnimationContainer>
  )
};
