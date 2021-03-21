import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home/home';
import Login from './components/login/login';
import MyPage from './components/mypage/mypage';
import DarkMode from './components/darkmode';

const App = ({catfetch}) => {


  return(
    <div class="App">
      <DarkMode />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home catfetch={catfetch} />
          </Route>
          <Route path="login">
            <Login />
          </Route>
          <Route path="mypage">
            <MyPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;