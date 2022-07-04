import React, {FC} from 'react';
import { NavLink } from "react-router-dom";
import {IconContext} from "react-icons";
import {BsBasket} from "react-icons/bs";
import MyButton from "./UI/button/MyButton";

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
                        <MyButton style={{background: "#fff", padding: 0, border: "none"}}>
                            <div className='header-basket'>
                                <IconContext.Provider value={{className: "basket-icon"}}>
                                    <div>
                                        <BsBasket />
                                    </div>
                                </IconContext.Provider>
                                <div className='basket-price'>0 UAH</div>
                            </div>
                        </MyButton>
                    </div>
                </div>
            </div>
        </header>

    );
};

export default Header;