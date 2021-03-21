import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import Root from './Components/App';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <StrictMode>
    <Root />
  </StrictMode>,
  rootElement,
);
