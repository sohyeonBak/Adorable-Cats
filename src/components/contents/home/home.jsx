import React, { useCallback, useEffect, useState } from 'react';

import CatList from './catlist';


const Home = ({catfetch, onHistoryState, listButton, setListButton, like, setLike, lovecat }) => {
    const [ initCats, setInitCats ] = useState([]);
    const [ initImage, setInitImage ] = useState([]);

    useEffect(()=>{
        catfetch.cat().then(initCats=>setInitCats(initCats))
      },[catfetch]);

      useEffect(()=>{
          return () => setInitCats(false)
      },[])
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
                lovecat={lovecat}
                listButton={listButton}
                setListButton={setListButton}
            />
            
        </>
    )
}

export default Home;