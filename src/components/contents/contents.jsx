import React, { useCallback, useEffect, useState } from 'react';
import { Route, useHistory, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import Home from './home/home';
import MyPage from './mypage/mypage';


const Contents = ({catfetch}) => {
    const {path, url} = useRouteMatch()
    const history = useHistory();
    const historyState = useHistory().location.state
    const [showMyPage, setShowMyPage] = useState(false)
    const [ like, setLike ] = useState('favorite_border')
    
    useEffect(()=>{
        if(historyState===undefined){
            setShowMyPage(false)
        }else if(historyState!==undefined){
            setShowMyPage(true)
        }
    },[])

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
    },[])
    
    console.log(historyState)
    return(
        <>  
            <header>
                <h1 onClick={onHomeClick}>Adorable Cats</h1>
                <span onClick={onLoginClick}>{historyState===undefined?"Log in" : "Log out"}</span>
                {showMyPage&&
                    <Link to={{
                        pathname:`${url}/mypage`,
                        state : historyState
                    }}>
                        <span className="material-icons">perm_identity</span>
                    </Link>
                }
            </header>
            <Route exact path={path}>
                <Home catfetch={catfetch} onHistoryState={historyState} like={like} setLike={setLike} />
            </Route>
            <Route path={`${path}/:id`} >
                <MyPage />
            </Route>
        </>
    );}

export default Contents;