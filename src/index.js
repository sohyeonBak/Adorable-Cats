import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CatFetch from './service/thecat_api';

const catfetch = new CatFetch()
ReactDOM.render(
  <React.StrictMode>
    <App catfetch={catfetch}/>
  </React.StrictMode>,
  document.getElementById('root')
);
