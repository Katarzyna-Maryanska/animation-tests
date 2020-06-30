import React, {useEffect, useRef} from "react";
import gsap from "gsap";

import {Title, AnimationContainer} from "../../Typography";
import {Canvas, CanvasWrapper} from "./styled"
import {Button} from "../../components/Button";

export const Animation6 = () => {
  const wrapper = useRef(null);

  let tl;
  useEffect(() => {
    // Customize these...
    const n = 800, //points in the line
        speed = 30,
        amp = 400, // base amplitude
        rand = 0, //modifies amp
        cycles = 7,
        pan = window.innerWidth; //adjust panning to make a smoother lateral movement

    // ...not these
    const c = document.getElementById("c"),
        ctx = c.getContext("2d"),
        cw = (c.width = window.innerWidth),
        ch = (c.height = window.innerHeight),
        particles = [],
        Particle = function(index) {
          this.x = this.y = this.index = this.alpha = index;
          this.dur = 100/speed;
          this.draw = function(){ ctx.globalAlpha = this.alpha; ctx.lineTo(this.x, this.y); }
        };

    function setParticle(p) {
        tl = gsap.timeline({defaults:{duration:p.dur}, repeat: -1, yoyo: true })
          .fromTo(p, {
            x:(pan+cw)/n*(p.index+1),
            y:ch/2 + (gsap.utils.random(amp,amp+rand)*Math.cos(p.index/n*cycles)),
            alpha:0.9,
          },{
            y:ch/2 - (gsap.utils.random(amp,amp+rand)*Math.cos(p.index/n*cycles)),
            yoyo:true,
            repeat:1,
            ease: 'easeInOut'
          })
          .to(p, {
            duration:p.dur*2,
            x:'-='+(pan-n),
            ease: 'easeInOut'
          }, 0)
    }

    // First run & handle resize
    for (let i=0; i<n; i++) particles.push(new Particle(i));
    window.addEventListener('resize', init);
    init();

    function init() {
      const cw = c.width = window.innerWidth;
      const ch = c.height = window.innerHeight;
      for (let i=0; i<n; i++) {
        gsap.killTweensOf(particles[i]);
        setParticle(particles[i]);
      }
    }
    let colorBase = 240;

    gsap.ticker.add(function(){
      colorBase+=0.2;
      ctx.globalAlpha = 0.05;
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = 'hsl('+colorBase+', 100%,80% )';//"#a00070";
      ctx.fillRect(0, 0, cw, ch);
      ctx.globalCompositeOperation = 'lighter';
      ctx.strokeStyle = "#aaa";
      ctx.beginPath();
      ctx.moveTo(-n,ch/2);
      for (let i=0; i<n; i++) particles[i].draw();
      ctx.stroke();
    });
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
      <Title>Bounce</Title>
      <CanvasWrapper ref={wrapper}>
        <Canvas id="c" />
      </CanvasWrapper>
      <Button onClick={handleAnimation}>||</Button>
      <Button onClick={handleRestart}>restart</Button>
    </AnimationContainer>
  )
};
