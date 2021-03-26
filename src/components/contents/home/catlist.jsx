import React, { useCallback, useState } from 'react';
import CatContents from './catcontents';
import CatPicture from './catpicture';
import LoginModal from './loginmodal';

const CatList = ({onCatsList, onCatImage, onImage, onHistoryState, onLikeImage, like, setLike }) => {
    const [catData, setCatData] = useState({
        origin : "Egypt",
        name : "Abyssinian",
        description : "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
        temperament: "Active, Energetic, Independent, Intelligent, Gentle"
    });
    const [ listButton, setListButton ] = useState(false);
    const [ alretModal, setAlretedModal ] = useState(false);
    
    const onListClick = useCallback(()=>{
        setListButton(true)
    },[])

    return(
        <>
        <div>
            <button onClick={onListClick}>{catData.name}</button>
            {listButton&&<ul>
                {onCatsList.map(cats=>
                    <CatContents 
                        key={cats.id} 
                        cats={cats} 
                        catData={catData} 
                        setCatData={setCatData} 
                        onImage={onImage} 
                        setListButton={setListButton} 
                    />
                )}
            </ul>}
            <ul>
                {onCatImage.map(image=>
                    <CatPicture 
                        key={image.id} 
                        catImage={image} 
                        setAlretedModal={setAlretedModal} 
                        onHistoryState={onHistoryState}
                        onLikeImage={onLikeImage}
                        like={like} 
                        setLike={setLike}
                    />
                )}
            </ul>
            <div>
                <p>{catData.origin}</p>
                <h3>{catData.name}</h3>
                <p>{catData.description}</p>
                <em>{catData.temperament}</em>
            </div>
        </div>
        {alretModal&&<LoginModal setAlretedModal={setAlretedModal} />}
        </>
    )}

export default CatList;