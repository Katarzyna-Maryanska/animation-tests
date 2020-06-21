import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { GlobalStyles } from './styles/globalStyles';

ReactDOM.render(
    <React.Fragment>
        <GlobalStyles />
        <App />
    </React.Fragment>,
    document.getElementById('root'),
);