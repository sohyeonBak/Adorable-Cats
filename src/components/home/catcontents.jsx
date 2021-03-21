import React, { useCallback } from 'react';

const CatContents = ({cats, catData, setCatData, onImage}) => {
   
    const handlerImage = () => {
        const value = cats.id
        onImage(value)
    }

    const onClick = useCallback(()=>{
        setCatData({
            ...catData,
            origin : cats.origin,
            name : cats.name,
            description : cats.description,
            temperament : cats.temperament})
        handlerImage()
    },[setCatData, handlerImage])

   
    return(
         <li><button onClick={onClick}>{cats.name}</button></li> 
    )
}

export default CatContents;