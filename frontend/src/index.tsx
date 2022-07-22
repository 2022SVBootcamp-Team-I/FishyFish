import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {store as registerStore} from "./redux/Register/store";
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  //<React.StrictMode>
  <Provider store={registerStore}>
    <App />
  </Provider>
  //</React.StrictMode>
);
