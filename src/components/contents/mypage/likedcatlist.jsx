import React from 'react';
import LikedCats from './likedcats';

const LikedCatList = ({catsHistory, onClickCat, display}) => (
    <div className="listsection">
        <ul className="catimage">
            {catsHistory&&catsHistory.map(images=><LikedCats key={images.id} imagesCats={images} onClickCat={onClickCat} display={display} />)}
        </ul> 
    </div>
       
    );

export default LikedCatList;