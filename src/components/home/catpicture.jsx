import React, { useCallback, useState } from 'react';

const CatPicture = ({catImage, setAlretedModal, onHistoryState, addLikedImage}) => {
    const [ like, setLike ] = useState('favorite_border')
    const [ likedImage, setLikedImage ] = useState(catImage.id)
    
    const onModalClick = useCallback((e)=>{
        if(onHistoryState===undefined){
            setAlretedModal(true)
        }else if(onHistoryState.id){
            setLike('favorite')
            addLikedImage(likedImage)
        }    
    },[])

    return(
        <li>
            <span className="material-icons" onClick={onModalClick} >{like}</span>
            <img src={catImage.url} alt={catImage.breeds.id}  />
        </li>    
    );}

export default CatPicture;