import React from 'react';

const CatContents = ({catimage}) => {
    return(
        <>
            <ul>
                {catimage.map(value=>(
                    <li key={value.id}>
                        <span class="material-icons">favorite_border</span>
                        <img src={value.url}/>
                    </li>
                ))}    
            </ul>     
        </>    
    )
}

export default CatContents;