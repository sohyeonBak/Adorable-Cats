import React, { useCallback, useEffect, useState } from 'react';

import CatList from './catlist';


const Home = ({catfetch, onHistoryState,onLikeImage, like, setLike }) => {
    const [ initCats, setInitCats ] = useState([]);
    const [ initImage, setInitImage ] = useState([]);

    useEffect(()=>{
        catfetch.cat().then(initCats=>setInitCats(initCats))
      },[catfetch]);

    useEffect(()=>{
        catfetch.pickCat().then(initImage => setInitImage(initImage))
    },[catfetch])

    const onImage = useCallback(query=>{
        catfetch.pickChangeCat(query).then(initImage=> setInitImage(initImage))
    },[catfetch])

    return(
        <>
            
            <CatList 
                onCatsList={initCats} 
                onImage={onImage} 
                onCatImage={initImage}
                onHistoryState={onHistoryState}
                like={like} 
                setLike={setLike}
                onLikeImage={onLikeImage}
            />
            
        </>
    )
}

export default Home;