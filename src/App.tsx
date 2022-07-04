import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import './style/index.css'
import Header from "./components/Header";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";

const App:FC = () => {
    return (
        <div className='app'>
            <Header logo={"Logo"}/>
            <div className='wrapper-content'>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/store" element={<Store/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default App;