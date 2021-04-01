import React, {  useState } from 'react';
import '../scss/darkmode.scss'

const DarkMode = ({styleDark, setStyleDark }) => {
    const [dark, setDark] = useState('🌙 Dark Mode')
    
    const onDarkMode = () => {
        setDark(dark==='🌙 Dark Mode' ? '☀️Light Mode' : '🌙 Dark Mode')
        setStyleDark(styleDark==='Light' ? 'Dark' : 'Light')
    }
    
    return(
        <div className="darkmode">
            <button className="darkmodeBtn" onClick={onDarkMode} >{dark}</button>       
        </div>
    )
}

export default DarkMode