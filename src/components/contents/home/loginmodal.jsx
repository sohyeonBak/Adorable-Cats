import React, { useCallback } from 'react';
import { useHistory } from 'react-router';

const LoginModal = ({setAlretedModal}) => {
    const history = useHistory();
    const onCancelModal = useCallback(()=>{
        setAlretedModal(false)
    },[setAlretedModal])

    const onLoginClick = () => {
        history.push({
            pathname : '/login'
        })
    }
    return(
        <div className="alretModal">
            <div className="modalcontents">
                <p>You need to login<br />if you want to save this picture. </p>
                <button className="nologin" onClick={onCancelModal}>No, Thanks</button>
                <button className="onlogin" onClick={onLoginClick}>Log in</button>
            </div>
        </div>       
    )}

export default LoginModal;