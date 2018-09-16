import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Root from './Root';
import App from 'components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import 'typeface-roboto'

ReactDOM.render(
  <Root>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Root>
  , document.getElementById('root'));
registerServiceWorker();
