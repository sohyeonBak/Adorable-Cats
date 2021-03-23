import React, { useCallback } from 'react';
import { useHistory } from 'react-router';

const Header = ({historyState}) => {
    const history = useHistory();

    const onLoginClick = useCallback((e) =>{
        if(historyState===undefined){
            history.push({
                pathname : '/login'
            })
        }else if(historyState!==undefined){
            history.push({
                pathname : '/'
            })
        }
    },[])
    
    return(
         <header>
            <h1>Adorable Cats</h1>
            <span onClick={onLoginClick}>{historyState===undefined?"Log in" : "Log out"}</span>
            <span className="material-icons">perm_identity</span>
         </header>       
    )}

export default Header;