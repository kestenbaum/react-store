import React, {FC} from 'react';
import './style/index.css'
import Header from "./components/header/Header";
import Pages from "./components/Pages";


const App:FC = () => {
    return (
        <div className='app'>
            <Header/>
            <Pages/>
        </div>
    );
};

export default App;