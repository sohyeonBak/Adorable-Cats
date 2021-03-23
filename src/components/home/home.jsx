import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Header from '../header';
import CatList from './catlist';

const Home = ({catfetch, onCatsList, addLikedImage}) => {
    const [ initImage, setInitImage ] = useState([]);
    const historyState = useHistory().location.state;

    useEffect(()=>{
        catfetch.pickCat().then(initImage => setInitImage(initImage))
    },[catfetch])

    const onImage = useCallback(query=>{
        catfetch.pickChangeCat(query).then(initImage=> setInitImage(initImage))
    },[catfetch])

    return(
        <>
            <Header historyState={historyState} />
            <CatList 
                onCatsList={onCatsList} 
                onImage={onImage} 
                onCatImage={initImage}
                onHistoryState={historyState}
                addLikedImage={addLikedImage}
            />
        </>
    )
}

export default Home;