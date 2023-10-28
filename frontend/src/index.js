// index.js (veya başlangıç noktanız)
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Provider'ı içe aktarın
import { store } from "./stores/index"; // Redux mağazanızı içe aktarın
import App from './App'; // Ana uygulama bileşeninizi içe aktarın
import './index.css';
import './tailwind.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
