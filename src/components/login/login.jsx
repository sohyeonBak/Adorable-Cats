import React from 'react';
import { useHistory } from 'react-router';

const Login = ({authservice}) => {
    const history = useHistory();

    const goToMain = (userId) =>{
        history.push({
            pathname: '/',
            state: {id: userId}
        })
    }

    const onLogin = (e) => {
        const value = e.target.innerHTML
        authservice.login(value).then(data => goToMain(data.user.uid))
    }
    
    return(
        <>
        <div>
            <h1>login</h1>
            <div>
                <button onClick={onLogin} >Google</button>
                <button onClick={onLogin} >Github</button>
            </div>
            <p></p>
        </div>
        </>
    )}

export default Login;