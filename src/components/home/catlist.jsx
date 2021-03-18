import React from 'react';
import CatContents from './catcontents';

const CatList = ({catname, catimage}) => {

    return(
        <div>
            <button></button>
            <ul>
                {catname.map(cat=>(
                    <li key={cat.id}><button>{cat.name}</button></li>
                ))}
            </ul>
            <CatContents catimage={catimage} />
        </div>
    )}

export default CatList;