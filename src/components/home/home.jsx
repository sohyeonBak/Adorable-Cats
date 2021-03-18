import React from 'react';
import Header from '../header';
import CatList from './catlist';

const Home = ({catname, catimage}) => {
    return(
        <>
        <Header />
        <CatList catname={catname} catimage={catimage}/>
        </>
    )
}

export default Home;