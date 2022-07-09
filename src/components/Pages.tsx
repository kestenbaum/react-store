import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Store from "../pages/Store";
import About from "../pages/About";

const Pages:FC = () => {
    return (
        <div className='wrapper-content'>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/store" element={<Store/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </div>
    );
};

export default Pages;