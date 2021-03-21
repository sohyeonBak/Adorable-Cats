import React from 'react';

const CatPicture = ({catImage}) => {
    
    return(
        <li>
            <span className="material-icons" >favorite_border</span>
            <img src={catImage.url} alt=""/>
        </li>    
    );}

export default CatPicture;