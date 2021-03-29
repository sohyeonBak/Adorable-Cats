import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthService from './service/auth_service';
import CatFetch from './service/thecat_api';


const catfetch = new CatFetch()
const authservice = new AuthService();
ReactDOM.render(
  <React.StrictMode>
    <App catfetch={catfetch} authservice={authservice}/>
  </React.StrictMode>,
  document.getElementById('root')
);
