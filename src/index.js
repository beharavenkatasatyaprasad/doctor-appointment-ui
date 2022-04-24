import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import './assets/vendor/fontawesome-free/css/all.min.css';
import './assets/css/sb-admin.css';
// import './assets/vendor/jquery/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
