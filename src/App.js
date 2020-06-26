import React from 'react';
import { Body, MainTitle } from "./Typography";

import { Animation1 } from "./Animation1";
import { Animation2 } from "./Animation2";
import { Animation3 } from "./Animation3";
import { Animation4 } from "./Animation4";
import { Animation5 } from "./Animation5";

function App() {
  return (
    <Body>
     <MainTitle>Animations 2019</MainTitle>
     <Animation1 />
     <Animation2 />
     <MainTitle>Animations 2020</MainTitle>
     <Animation3 />
     <Animation4 />
     <Animation5 />
    </Body>
  );
}

export default App;
