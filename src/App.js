import React from 'react';
import { Body, MainTitle } from "./Typography";

import * as A from "./animations";

function App() {
  return (
    <Body>
     <MainTitle>Animations 2019</MainTitle>
     <A.Animation1 />
     <A.Animation2 />
     <MainTitle>Animations 2020</MainTitle>
     <A.Animation3 />
     <A.Animation4 />
     <A.Animation5 />
     <A.Animation6 />
    </Body>
  );
}

export default App;
