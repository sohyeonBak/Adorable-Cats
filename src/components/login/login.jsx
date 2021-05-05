import React from 'react';
import { useHistory } from 'react-router';
import '../../scss/login.scss'
const Login = ({authservice}) => {
    const history = useHistory();

    const goToMain = (userId) =>{
        
        history.push({
            pathname: '/home',
            state: {id: userId}
        })
    }

    const onLogin = (e) => {
        const value = e.target.innerHTML
        authservice.login(value).then(data => goToMain(data.user.uid))
    }

    const onNoLogin = () => {
        history.push({
            pathname: '/home'
        })
    }
    
    return(
        <>
        <div className="logincontent">
            <h1>Adoroble Cats</h1>
            <div className="kindlogin">
                <button onClick={onLogin} >Google</button>
                <button onClick={onLogin} >Github</button>
            </div>
            <button className="nologin" onClick={onNoLogin} >I don’t want login</button>
        </div>
        </>
    )}

export default Login;