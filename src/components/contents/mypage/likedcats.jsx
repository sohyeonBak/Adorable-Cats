import React, { useCallback } from 'react';

const LikedCats = ({imagesCats}) => {
    
    const onlistImage = useCallback(()=>{

    },[])
    
    return(
       <li onClick={onlistImage}>
           <img src={imagesCats.url} alt=""/>
       </li>   
    )}

export default LikedCats;