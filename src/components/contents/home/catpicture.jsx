import React, { useCallback, useEffect, useState } from 'react';

const CatPicture = ({catImage, setAlretedModal, onHistoryState, like, setLike }) => {

    const onModalClick = useCallback((e)=>{
        if(onHistoryState===undefined){
            setAlretedModal(true)
        }else if(onHistoryState.id){
            setLike('favorite')
        }    
    },[setLike])

    

    return(
        <li>
            <span className="material-icons" onClick={onModalClick} >{like}</span>
            <img src={catImage.url} alt={catImage.breeds.id}  />
        </li>    
    );}

export default CatPicture;