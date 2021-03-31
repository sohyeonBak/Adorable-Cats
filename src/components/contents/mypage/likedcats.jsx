import React from 'react';

const LikedCats = ({imagesCats, onClickCat, display}) => {
    const displayType = (display) === 'list' ? 'catsgrid' : 'catslist'
    
    return(
       <li className={displayType} onClick={()=>{onClickCat(imagesCats)}}>
           <img src={imagesCats.url} alt=""/>
           <span>{imagesCats.breeds[0].name}</span>
       </li>   
    )}

export default LikedCats;