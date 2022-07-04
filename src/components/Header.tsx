import React, {FC} from 'react';
import { NavLink } from "react-router-dom";

interface headerProps {
    logo: string
}

const Header:FC<headerProps> = (props) => {
    return (

        <header className='header'>
            <div className='container'>
                <div className='header-wrapper'>
                    <div className='header-logo'>{props.logo}</div>
                    <div className='header-nav'>
                        <NavLink
                            className='nav-link'
                            to= "/"
                        >HOME</NavLink>
                        <NavLink
                            className='nav-link'
                            to= "/store"
                        >STORE</NavLink>
                        <NavLink
                            className='nav-link'
                            to="/about"
                        >ABOUT</NavLink>
                    </div>
                </div>
            </div>
        </header>

    );
};

export default Header;