import React from 'react';
import { StyledDiv } from "./styles";

import { Animation1 } from "./Animation1";
import { Animation2 } from "./Animation2";

function App() {
  return (
    <StyledDiv>
     <h1>Animations</h1>
     <Animation1 />
     <Animation2 />
    </StyledDiv>
  );
}

export default App;
