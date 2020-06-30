import React, {useEffect} from "react";
import gsap from "gsap";

import {Title, AnimationContainer} from "../../Typography";
import {StyledInput, Wrapper, Container} from "./styled";

export const Animation5 = () => {
  let tl;
  useEffect(() => {
      function onInputChange (e) {
          tl = gsap.timeline()
          tl.to(els, {
              stagger: {
                  grid: [rows, cols],
                  from: e.target.index,
                  each: 0.07,
                  onStart: function () {
                      if (e.target !== this.targets()[0]) {
                          this.targets()[0].checked = !this.targets()[0].checked;
                      }
                  },
              }
          });
      }

      let els = [];
      const el = document.getElementById('model');
      const container = document.getElementById('container');
      let width = el.offsetWidth;
      let height = el.offsetHeight;
      let cols = 0;
      let rows = 0;
      function createGrid () {
          width = el.offsetWidth + 2;
          height = el.offsetHeight + 2;
          els.forEach(_el => _el.remove());

          const ww = window.innerWidth;
          const wh = window.innerHeight;
          cols = Math.floor(ww / width);
          rows = Math.floor(wh / height) - 1;
          els = [];
          for (let i = 0; i < rows; i++) {
              for (let j = 0; j < cols; j++) {
                  const _el = document.createElement('input');
                  _el.type = 'checkbox';
                  _el.addEventListener('change', onInputChange);
                  _el.index = (i + j * cols);
                  container.append(_el);
                  els.push(_el);
              }
          }
      }

      let resizeDebounce = null;
      window.addEventListener('resize', () => {
          resizeDebounce = window.clearTimeout(resizeDebounce);
          resizeDebounce = window.setTimeout(createGrid, 200);
      });
      createGrid();
  }, [])

  return (
    <AnimationContainer>
      <Title>Checked</Title>
      <Wrapper>
        <StyledInput type="checkbox" id="model"/>
        <Container id="container"/>
      </Wrapper>
    </AnimationContainer>
  )
};
