import React from 'react';

import { normalize } from 'polished';
import { css, Global } from '@emotion/core';

import { theme } from './theme';

export const GlobalStyles = () => (
  <Global
    styles={css`
      ${normalize()};

      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
      html {
        font-size: 16px;
        box-sizing: border-box;
      }
      body {
        color: ${theme.colors.darkGray};
        font-family: ${theme.fontFamilies.regular};
        font-weight: 400;
        background: ${theme.colors.whiteLilac};
      }
      ul {
        padding: 0;
        margin: 0;
      }
      li {
        list-style-type: none;
      }
      a {
        text-decoration: none;
        color: ${theme.colors.darkGray};
      }
      button {
        border: none;
        background: none;
        cursor: pointer;
      }
      h1 {
        font-size: 2rem;
      }
      h2 {
        font-size: 1.75rem;
      }
      h3 {
        font-size: 1.5rem;
      }
      h4 {
        font-size: 1.25rem;
      }
      h5 {
        font-size: 1rem;
      }
    `}
  />
);
