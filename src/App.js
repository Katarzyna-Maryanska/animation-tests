import React from 'react';
import { Body, MainTitle } from "./Typography";

import { Animation1 } from "./Animation1";
import { Animation2 } from "./Animation2";
import { Animation3 } from "./Animation3";

function App() {
  return (
    <Body>
     <MainTitle>Animations 2019</MainTitle>
     <Animation1 />
     <Animation2 />
     <MainTitle>Animations 2020</MainTitle>
     <Animation3 />
    </Body>
  );
}

export default App;
