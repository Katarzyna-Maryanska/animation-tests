import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
import { darken, desaturate } from "polished";

import { ReactComponent as Scene } from "./savanna_scene.svg";
import { Title, Wrapper, AnimationContainer } from "../../Typography";
import { Button } from "../../components/Button";

gsap.registerPlugin(MotionPathPlugin);

export const Animation8 = () => {
  const wrapper = useRef(null);

  let tlMain;

  const generateNightColor = (color) => {
    let newColor = desaturate(1, color);
    newColor = darken(0.25, newColor);

    return newColor;
  };

  useEffect(() => {
    //select elements
    const [elements] = wrapper.current.children;

    const filter = elements.getElementById("filter");
    const daySky = elements.getElementById("day_sky");
    const cloud1 = elements.getElementById("cloud_1");
    const cloud2 = elements.getElementById("cloud_2");
    const cloud3 = elements.getElementById("cloud_3");
    const cloud4 = elements.getElementById("cloud_4");
    const sun = elements.getElementById("sun");
    const sunPath = elements.getElementById("sun_path");
    const path = elements.getElementById("path");
    const elephant = elements.getElementById("elephant");
    const elephantPath = elements.getElementById("elephant_path");
    const stars = elements.getElementById("stars");
    const giraffe = elements.getElementById("giraffe");
    const zebraMessage = elements.getElementById("zebra_message");
    const zebraMessage2 = elements.getElementById("zebra_message_2");
    const elephantMessage = elements.getElementById("elephant_message");
    const bushes = elements.getElementById("bushes");
    const sand = elements.getElementById("sand");
    const mountains = elements.getElementById("mountains");
    const mountainsSun = elements.getElementById("mountains_sun");
    const treesFarAway = elements.getElementById("trees_far_away");
    const leaves1stPlan = elements.getElementById("leaves_1st_plan");
    const leaves2ndPlan = elements.getElementById("leaves_2nd_plan");
    const leaves3rdPlan = elements.getElementById("leaves_3rd_plan");

    //change elements default values
    gsap.set([filter], { autoAlpha: 1 });
    gsap.set(sunPath, { autoAlpha: 0 });
    gsap.set(elephantPath, { autoAlpha: 0 });
    gsap.set([zebraMessage, zebraMessage2, elephantMessage], { autoAlpha: 0 });
    gsap.set([cloud1, cloud2, cloud3, cloud4], { x: "-=200", autoAlpha: 0.1 });

    // create animations
    const tlDayToNight = () => {
      const tl = gsap.timeline({
        defaults: { ease: "slowMo", repeat: -1 },
      });

      tl.fromTo(
        filter,
        { x: "+=0", opacity: 0.5 },
        { duration: 3, x: "-=500", autoAlpha: 0, yoyo: true, repeatDelay: 10 }
      )
        .fromTo(
          daySky,
          { autoAlpha: 0 },
          { duration: 2, autoAlpha: 1, yoyo: true, repeatDelay: 11 },
          1
        )
        .to(sun, {
          duration: 20,
          repeatDelay: 6,
          motionPath: {
            path: sunPath,
            align: sunPath,
            autoRotate: true,
            alignOrigin: [0, 0.4],
            start: 1,
            end: 0,
          },
        })
        .fromTo(
          [bushes.children, treesFarAway.children],
          { fill: generateNightColor("#BB6324") },
          {
            duration: 2,
            fill: "#BB6324",
            yoyo: true,
            repeatDelay: 11,
          },
          1
        )
        .fromTo(
          sand,
          { fill: generateNightColor("#E9A53F") },
          {
            duration: 2,
            fill: "#E9A53F",
            yoyo: true,
            repeatDelay: 11,
          },
          1
        )
        .fromTo(
          [mountains.children, mountainsSun.children],
          { fill: generateNightColor("#D99539") },
          {
            duration: 2,
            fill: "#D99539",
            yoyo: true,
            repeatDelay: 11,
          },
          1
        )
        .fromTo(
          [
            leaves1stPlan.children,
            leaves2ndPlan.children,
            leaves3rdPlan.children,
          ],
          { fill: generateNightColor("#886E2A") },
          {
            duration: 2,
            fill: "#886E2A",
            yoyo: true,
            repeatDelay: 11,
          },
          1
        )
        .fromTo(
          path.children,
          { fill: generateNightColor("#F4CF92") },
          {
            duration: 2,
            fill: "#F4CF92",
            yoyo: true,
            repeatDelay: 11,
          },
          1
        );

      return tl;
    };

    const tlClouds = () => {
      const tl = gsap.timeline({
        defaults: { ease: "power0", repeat: -1 },
      });

      tl.to(
        cloud4,
        { x: "+=700", autoAlpha: 1, duration: 10, repeatDelay: 16 },
        1
      )
        .to(
          [cloud1, cloud3],
          { x: "+=900", autoAlpha: 1, duration: 15, repeatDelay: 11 },
          1
        )
        .to(
          cloud2,
          { x: "+=700", autoAlpha: 1, duration: 20, repeatDelay: 6 },
          1
        );
      return tl;
    };

    const tlStars = () => {
      const tl = gsap.timeline({
        defaults: { ease: "power0", repeat: -1, yoyo: true, repeatDelay: 6 },
      });
      tl.to(stars.children, { stagger: 0.04, autoAlpha: 0.3 });

      return tl;
    };

    const tlAnimals = () => {
      const tl = gsap.timeline({
        defaults: { ease: "power0", repeat: -1, repeatDelay: 21 },
      });

      tl.to(elephant, {
        duration: 6,
        scale: 6,
        motionPath: {
          path: elephantPath,
          align: elephantPath,
          autoRotate: false,
          alignOrigin: [0.3, 0.85],
          start: 0,
          end: 1,
        },
      })
        .set(zebraMessage, { autoAlpha: 1 })
        .to(zebraMessage, { delay: 2, autoAlpha: 0 })
        .set(elephantMessage, { autoAlpha: 1 })
        .to(elephantMessage, { delay: 2, autoAlpha: 0 })
        .set(zebraMessage2, { autoAlpha: 1 })
        .to(zebraMessage2, { delay: 2, autoAlpha: 0 })

        .fromTo(giraffe, { y: "+=0" }, { y: "-=80", duration: 1 })
        .to(giraffe, { y: "+=80", delay: 1, duration: 1 });

      return tl;
    };

    tlMain = gsap
      .timeline()
      .add(tlDayToNight(), 0)
      .add(tlClouds(), 0)
      .add(tlStars(), 0)
      .add(tlAnimals(), 0);
  }, []);

  const handlePause = (e) => {
    tlMain.paused(!tlMain.paused());
    e.target.innerHTML = tlMain.paused() ? ">>" : "||";
  };

  const handleRestart = (e) => {
    tlMain.restart();
  };

  return (
    <AnimationContainer>
      <Title>Savanna</Title>
      <Wrapper ref={wrapper}>
        <Scene />
      </Wrapper>
      <Button onClick={handlePause}>||</Button>
      <Button onClick={handleRestart}>restart</Button>
    </AnimationContainer>
  );
};
