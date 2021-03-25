import React, { useCallback } from 'react';

const CatContents = ({cats, setCatData, onImage, setListButton}) => {
    
    const handlerImage = () => {
        const value = cats.id
        onImage(value)
    }

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