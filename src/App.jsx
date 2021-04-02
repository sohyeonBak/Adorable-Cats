import { BrowserRouter, Switch, Route } from "react-router-dom";
import DarkMode from './components/darkmode'
import Login from './components/login/login'
import Contents from "./components/contents/contents";
import './App.scss'
import { useState } from "react";


function App({catfetch, authservice}) {
  const [ listButton, setListButton ] = useState(false);
  const [ styleDark, setStyleDark ] = useState('Light')
  
  const offlistClick = (e) => {
    if(e.target.classList[0]!=="listBtn" && e.target.classList[0]!== "listTitle"){
      setListButton(false)
    }
  }

  return(
    <div className={`App ${styleDark}`} onClick={offlistClick}>
      
      <BrowserRouter>
        <Switch>
        
          <Route path="/home" >
            <Contents catfetch={catfetch} listButton={listButton} setListButton={setListButton} styleDark={styleDark} />
          </Route>
          <Route exact path="/login">
            <Login authservice={authservice} />
          </Route>
        </Switch>
      </BrowserRouter>
      <DarkMode styleDark={styleDark} setStyleDark={setStyleDark}  />

    </div>
  )
}

export default App;