import React from 'react';

const LikedCats = ({imagesCats}) => {

    return(
       <li>
           <img src={imagesCats.url} alt=""/>
       </li>   
    )}

export default LikedCats;