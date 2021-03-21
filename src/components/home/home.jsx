import React, { useCallback, useEffect, useState } from 'react';
import Header from '../header';
import CatList from './catlist';

const Home = ({catfetch}) => {
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
            <Header />
            <CatList 
                onCatsList={initCats} 
                onImage={onImage} 
                onCatImage={initImage}
            />
        </>
    )
}

export default Home;