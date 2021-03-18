import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home/home';
import Login from './components/login/login';
import MyPage from './components/mypage/mypage';
import DarkMode from './components/darkmode';

const App = ({catfetch}) => {
  const [name, setName ] = useState([])
  const [image,setImage] = useState([])

  useEffect(()=>{
    catfetch.cat().then(name => setName(name))
  },[catfetch])

  useEffect(()=>{
    catfetch.pickCat().then(image => setImage(image))
  },[catfetch])

  return(
    <div class="App">
      <DarkMode />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home catname={name} catimage={image}/>
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