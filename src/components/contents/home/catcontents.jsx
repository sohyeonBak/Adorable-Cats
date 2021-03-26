import React, { useCallback } from 'react';

const CatContents = ({cats, setCatData, onImage, setListButton}) => {
    
    const handlerImage = useCallback(() => {
        const value = cats.id
        onImage(value)
    },[onImage, cats.id])

    const onClick = useCallback(()=>{
        setCatData({
            ...cats,
            })
        handlerImage()
        setListButton(false)
        
    },[setCatData, cats, handlerImage, setListButton])

   
    return(
         <li><button onClick={onClick}>{cats.name}</button></li> 
    )
}

export default CatContents;