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
    },[onHistoryState,setAlretedModal,onLikeImage,catImage.id])

    
    return(
        <li >
            <img src={catImage.url} alt={catImage.breeds.id} />
            <span className="material-icons like" onClick={onModalClick} >{onHistoryState===undefined ? `${like}`: `${pickedLikey}` }</span>
        
        </li>    
    );}

export default CatPicture;