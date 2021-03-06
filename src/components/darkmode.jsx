import React, {  useState } from 'react';
import '../scss/darkmode.scss'

const DarkMode = ({styleDark, setStyleDark }) => {
    const [dark, setDark] = useState('π Dark Mode')
    
    const onDarkMode = () => {
        setDark(dark==='π Dark Mode' ? 'βοΈLight Mode' : 'π Dark Mode')
        setStyleDark(styleDark==='Light' ? 'Dark' : 'Light')
    }
    
    return(
        <div className="darkmode">
            <button className="darkmodeBtn" onClick={onDarkMode} >{dark}</button>       
        </div>
    )
}

export default DarkMode