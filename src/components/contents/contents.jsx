import React, { useCallback, useEffect, useState } from 'react';
import { Route, useHistory, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import Home from './home/home';
import MyPage from './mypage/mypage';
import '../../scss/header.scss';

const Contents = ({catfetch}) => {
    const {path, url} = useRouteMatch()
    const history = useHistory();
    const historyState = useHistory().location.state

    const [showMyPage, setShowMyPage] = useState(false)
    const [ like, setLike ] = useState('favorite_border');
    const [ pickedImage, setPickedImage ] = useState([])
    
    useEffect(()=>{
        if(historyState===undefined){
            setShowMyPage(false)
        }else if(historyState!==undefined){
            setShowMyPage(true)
        }
    },[historyState])

    const onLoginClick = useCallback((e) =>{
        if(historyState===undefined){
            history.push({
                pathname : '/login'
            })
            
        }else if(historyState!==undefined){
            history.push({
                pathname : '/home',
                state : undefined
            })
            setShowMyPage(false)
            setLike('favorite_border')
        }
    },[history,historyState])

    const onHomeClick = useCallback(()=>{
        history.push({
            pathname: '/home',
            state : historyState
        })
        
    },[history,historyState])
    
    const lovecat = (cat) =>{
        setPickedImage(cats => {
            const choice = [...cats]
            choice.push(cat)
            return choice
            })
    }
    
    

    return(
        <>  
            <header>
                <div className="header">
                    <h1 className="mainTitle" onClick={onHomeClick}>Adorable Cats</h1>
                    <span className="login" onClick={onLoginClick}>{historyState===undefined?"Log in" : "Log out"}</span>
                    {showMyPage&&
                        <Link className="personalPage" to={{
                            pathname:`${url}/mypage`,
                            state : historyState, pickedImage

                        }}>
                            <span className="material-icons personal ">perm_identity</span>
                        </Link>
                    }
                </div>
            </header>
            <Route exact path={path}>
                <Home 
                    catfetch={catfetch} 
                    onHistoryState={historyState} 
                    like={like} 
                    setLike={setLike} 
                    setPickedImage={setPickedImage}
                    lovecat={lovecat}
                    />
            </Route>
            <Route path={`${path}/:id`} >
                <MyPage />
            </Route>
        </>
    );}

export default Contents;