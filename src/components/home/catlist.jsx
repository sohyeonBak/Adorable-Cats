import React, { useState } from 'react';
import CatContents from './catcontents';
import CatPicture from './catpicture';

const CatList = ({onCatsList, onCatImage, onImage}) => {
    const [catData, setCatData] = useState({
        origin : "Egypt",
        name : "Abyssinian",
        description : "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
        temperament: "Active, Energetic, Independent, Intelligent, Gentle"
    });
    

    
    return(
        <div>
            <button>{catData.name}</button>
            <ul>
                {onCatsList.map(cats=>
                    <CatContents key={cats.id} cats={cats} catData={catData} setCatData={setCatData} onImage={onImage} />
                )}
            </ul>
            <ul>
                {onCatImage.map(image=>
                    <CatPicture key={image.id} catImage={image} />
                )}
            </ul>
            <div>
                <p>{catData.origin}</p>
                <h3>{catData.name}</h3>
                <p>{catData.description}</p>
                <em>{catData.temperament}</em>
            </div>
        </div>
    )}

export default CatList;