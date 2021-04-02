import React from 'react';
import { useHistory } from 'react-router';
import '../scss/start.scss'
const Start = (props) => {
    const history = useHistory();

    const onStart = () => {
        history.push({
            pathname: '/home'
        })
    }
    return(
        <div className="starter">
            <button className="startcon" onClick={onStart} >🐈 Adorable Cats's Start</button>
        </div>        
    );}

export default Start;