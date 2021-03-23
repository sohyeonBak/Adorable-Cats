import { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home/home';
import Login from './components/login/login';
import MyPage from './components/mypage/mypage';
import DarkMode from './components/darkmode';

function App({catfetch, authservice}) {
  const [ initCats, setInitCats ] = useState([]);
  const [ savedImage, setSavedImage ] = useState([]);

  useEffect(()=>{
    catfetch.cat().then(initCats=>setInitCats(initCats))
  },[catfetch]);

const addLikedImage = (image) => {
  setSavedImage(savedImage=>{
    const saveCats = [...savedImage]
    saveCats.push(image)
    return saveCats;
  })
}

// console.log(initCats[0].image.id)
// console.log(savedImage)


  return(
    <div class="App">
      <DarkMode />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home catfetch={catfetch} onCatsList={initCats} addLikedImage={addLikedImage}/>
          </Route>
          <Route path="/login">
            <Login authservice={authservice} />
          </Route>
          <Route path="/mypage">
            <MyPage initCats={initCats} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;