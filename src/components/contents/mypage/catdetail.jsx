import React, { useCallback } from 'react';

const CatDetail = ({selectedCats, selected}) => {
    
    const onList = useCallback(()=>{
        selected(null)
    },[])

    return(
        <div className="detailsection">
            <img src={selectedCats.url} />
            <div className="catscontents">
                <p className="origin">{selectedCats.breeds[0].origin}</p>
                <h3 className="name">{selectedCats.breeds[0].name}</h3>
                <p className="subs">{selectedCats.breeds[0].description}</p>
                <em className="tempt">{selectedCats.breeds[0].temperament}</em>
            </div>
            <button onClick={onList}>
                go to list
                <span class="material-icons">arrow_right_alt</span>
            </button>
        </div>
    );}

export default CatDetail;