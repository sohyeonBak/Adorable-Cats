import { BrowserRouter, Switch, Route } from "react-router-dom";
import DarkMode from './components/darkmode'
import Login from './components/login/login'
import Contents from "./components/contents/contents";
import './App.scss'


function App({catfetch, authservice}) {
  

  return(
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/home" >
            <Contents catfetch={catfetch} />
          </Route>
          <Route exact path="/login">
            <Login authservice={authservice} />
          </Route>
        </Switch>
      </BrowserRouter>
      <DarkMode />

    </div>
  )
}

export default App;