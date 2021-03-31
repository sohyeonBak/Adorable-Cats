import React, { useCallback, useState } from 'react';
import CatContents from './catcontents';
import CatPicture from './catpicture';
import LoginModal from './loginmodal';
import '../../../scss/home.scss'

const CatList = ({onCatsList, onCatImage, onImage, onHistoryState, like, setLike, lovecat }) => {
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

    
    const handlerCats = (image) => {
        lovecat(image)
    }
    

    return(
        <section>
        <div className="catlistBtn">
            <p>Choice  your cats!</p>
            <button className="listBtn" onClick={onListClick}>
                <em>{catData.name}</em>
                <span class="material-icons">
                    arrow_drop_down
                </span>
            </button>   
            <div className="listOption">
                {listButton&&
                <ul className="options">
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
            </div>         
        </div>
        
        <div className="catpicturelist">
            <ul className="catslist" >
                {onCatImage.map(image=>
                    <CatPicture 
                        key={image.id} 
                        catImage={image} 
                        setAlretedModal={setAlretedModal} 
                        onHistoryState={onHistoryState}
                        like={like} 
                        setLike={setLike}
                        handlerCats={handlerCats}
                    />
                )}
            </ul>
        </div>

        <div className="catsubscribe">
            <div className="catscontents">
                <p className="origin">{catData.origin}</p>
                <h3 className="name">{catData.name}</h3>
                <p className="subs">{catData.description}</p>
                <em className="tempt">{catData.temperament}</em>
            </div>
            
        </div>
        {alretModal&&<LoginModal setAlretedModal={setAlretedModal} />}
        </section>
    )}

export default CatList;