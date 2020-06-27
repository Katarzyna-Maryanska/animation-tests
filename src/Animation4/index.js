import React, {useRef, useEffect} from "react";
import gsap from "gsap";

import {ReactComponent as Scene} from "./fun.svg";
import {Title, Wrapper, AnimationContainer} from "../Typography";
import {Button} from "../components/Button";

export const Animation4 = () => {
  const wrapper = useRef(null);

  let tlStars, tlSky, tlSun, tlGuy, tlBall, tlDog, tlFilter, tlLeaves;

  useEffect(() => {
    const [elements] = wrapper.current.children;

    const filter = elements.getElementById('filter');
    const sky = elements.getElementById('sky');
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
    const ground = elements.getElementById('ground_2');

    gsap.set([...something.children, sunpath], {autoAlpha: 0});
    gsap.set([filter, sky, ...stars.children, guy, girl, dog, ball, ...trees.children, mountains, trees, ...leaves1.children, ...leaves2.children, ...leaves3.children, sun, ground], {autoAlpha: 1});
    gsap.set(ball, {transformOrigin: '50% 50%'});

    tlFilter = gsap.timeline({defaults: {ease: 'slowMo', repeat: -1, yoyo: true, repeatDelay: 5}})
    tlSky = gsap.timeline({defaults: {ease: 'slowMo', repeat: -1, yoyo: true, repeatDelay: 5}})
    tlStars = gsap.timeline({defaults: {ease: 'slowMo', repeat: -1, yoyo: true, repeatDelay: 7}})
    tlGuy = gsap.timeline({defaults: {ease: 'slowMo', duration: 2, repeat: -1, repeatDelay: 18}})
    tlSun = gsap.timeline({defaults: {ease: 'power0', repeat: -1, repeatDelay: 10}})
    tlLeaves = gsap.timeline({defaults: {ease: 'power0', duration: 3, stagger: 0.1, yoyo: true,  repeat: -1}})
    tlBall = gsap.timeline( {defaults: {ease: 'none'}})
    tlDog = gsap.timeline( {ease: 'power0'})

    tlFilter.fromTo(filter, {x: '+=0', opacity: 0.3}, {duration: 5, x: '-=1000', autoAlpha: 0})
        .to(filter, {duration: 5, x: '-=0',opacity: 0.3, autoAlpha: 1, paused:true})
    tlSky.to(sky, {duration: 5, opacity: 0.3, fill: '#C0ECFF'},1)
    tlSky.to(ground, {duration: 5, opacity: 0.3, fill: '#808689'},1)
    tlSun.to(sun, {duration: 10, motionPath:{
            path: sunpath,
            align: sunpath,
            autoRotate: true,
            alignOrigin: [0, 0.4],
            start: 0,
            end: 1.
          }})
    tlStars.to(stars.children,  {duration: 3, stagger: 0.2, autoAlpha: 0})
    tlLeaves.fromTo(leaves1.children, {x: '-=10', y: '-=5', scale: 0.95}, {x: '+=10', y: '+=5', scale: 1}, 1)
    tlLeaves.fromTo(leaves2.children, {x: '-=11', y: '-=4', scale: 0.95}, {x: '+=11', y: '+=4', scale: 1}, 1)
    tlLeaves.fromTo(leaves3.children, {x: '-=9', y: '-=3', scale: 0.95}, { x: '+=9', y: '+=3', scale: 1}, 1)
    tlGuy.fromTo(guy, {x: '-=300', rotate: '2%'}, { x: '+=200', rotate: '-2%'}, 1)
        .to(guy,{ x: '+=400', rotate: '2%'})
        .to(guy,{ x: '+=700', rotate: '-2%'})
    tlBall.fromTo(ball, {x: '+=300'}, {duration: 5, x: '-=1000'},1)
        .to(ball,  { duration: 5, x: '-=850'})     .fromTo(ball, {y: '-=30'}, {y: '+=50', yoyo: true, repeat: -1}, 1)
        .to(ball,  {duration: 0.3, rotate: '360%', repeat: -1}, 1)
    tlDog.fromTo(dog, {x: '+=300'}, { duration: 5, x: '-=340'},1)
        .to(dog, {duration: 5, x: '-=850'})
        .fromTo(dog, {y: '-=50', rotate: '-5%'}, {y: '+=50', rotate: '+5%', yoyo: true, repeat: -1}, 1)


  }, [])
  const handleAnimation = (e) => {
    tlFilter.paused(!tlFilter.paused());
    tlSky.paused(!tlSky.paused());
    tlStars.paused(!tlStars.paused());
    tlGuy.paused(!tlGuy.paused());
    tlSun.paused(!tlSun.paused());
    tlLeaves.paused(!tlLeaves.paused());
    tlBall.paused(!tlBall.paused());
    tlDog.paused(!tlDog.paused());
    e.target.innerHTML = tlFilter.paused() ? ">>" : "||";
  }

  const handleRestart = (e) => {
    tlFilter.restart();
    tlSky.restart();
    tlStars.restart();
    tlGuy.restart()
    tlSun.restart();
    tlLeaves.restart();
    tlBall.restart()
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
