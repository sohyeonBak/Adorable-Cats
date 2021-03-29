import React from 'react';
import { useHistory } from 'react-router';
import LikedCats from './likedcats';
import '../../../scss/mypage.scss'

const MyPage = () => {
    
    const catsHistory = useHistory().location.pickedImage

    return( 
        <div className="saveimage">
            <div className="imagecontents">
                <h2>Adorable my cats</h2>
                <ul className="catimage">
                {catsHistory&&catsHistory.map(images=><LikedCats key={images.id} imagesCats={images}/>)}
                </ul>
            </div>
            
        </div>

    )}

export default MyPage;