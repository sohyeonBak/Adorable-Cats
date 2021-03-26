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
        <div>
            <div>
                <p>You need to login if you want to save this picture. </p>
                <button onClick={onCancelModal}>No, Thanks</button>
                <button onClick={onLoginClick}>Log in</button>
            </div>
        </div>       
    )}

export default LoginModal;