import React, {FC} from 'react';

import Navigation from "./Navigation";
import Logo from "./Logo";

const Header:FC = () => {
    return (
        <header className='header'>
            <div className='container'>
                <div className='header-wrapper'>
                    <Logo logo={"Logo"}/>
                    <Navigation/>
                </div>
            </div>
        </header>
    );
};

export default Header;