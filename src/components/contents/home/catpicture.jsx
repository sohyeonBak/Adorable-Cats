import React, { useCallback, useState } from 'react';

const CatPicture = ({catImage, setAlretedModal, onHistoryState, like, onLikeImage }) => {
    const [pickedLikey, setPickedLikey] = useState('favorite_border')
    
    const onModalClick = useCallback((e)=>{
        if(onHistoryState===undefined){
            setAlretedModal(true)
        } else {
            setPickedLikey('favorite')
        }
        onLikeImage(catImage.id)
    },[onHistoryState,setAlretedModal])

    
    
    return(
        <li >
            <span className="material-icons" onClick={onModalClick} >{onHistoryState===undefined ? `${like}`: `${pickedLikey}` }</span>
            <img src={catImage.url} alt={catImage.breeds.id} />
        </li>    
    );}

export default CatPicture;