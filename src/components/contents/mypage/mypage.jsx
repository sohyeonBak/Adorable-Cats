import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router';
import '../../../scss/mypage.scss'
import CatDetail from './catdetail';
import LikedCatList from './likedcatlist';

const MyPage = () => {
    const catsHistory = useHistory().location.pickedImage
    const [ listStyle, setListStyle ] = useState(null)

    const selected = (cats) => {
        setListStyle(cats)
    }
    console.log(listStyle)
    return( 
        <section className="saveimage">
            <div className="imagecontents">
                <h2>Adorable my cats</h2>
                <div className="likezone">
                    {listStyle&&(
                        <CatDetail 
                            selectedCats={listStyle}
                            selected={selected}
                        />
                    )}
                    <LikedCatList 
                        catsHistory={catsHistory} 
                        onClickCat={selected}
                        display={listStyle ? 'grid' : 'list'} 
                    />
                </div>
            </div>
        </section>

    )}

export default MyPage;