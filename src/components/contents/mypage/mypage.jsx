import React from 'react';
import { useHistory } from 'react-router';
import LikedCats from './likedcats';


const MyPage = () => {
    const catsHistory = useHistory().location.pickedImage
    
    return(
        <>  
            <h2>Adorable my cats</h2>
            <ul>
            {catsHistory.map(images=><LikedCats key={images.id} imagesCats={images}/>)}
            </ul>
        </>
    )}

export default MyPage;