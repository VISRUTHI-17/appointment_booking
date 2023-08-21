import React from 'react';
import Header from './Header';
import Home from './Home';

const Main = ()=>{
    return(
        <div
        style={{
            height:"100vh",
            width:"100%",
            display:"flex",
            flexDirection:"column"
        }}>
        <Header/>
        <Home/>
    </div>
    );
    
}

export default Main;