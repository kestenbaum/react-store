import React, {FC, useMemo, useState} from 'react';
import { NavLink } from "react-router-dom";
import {IconContext} from "react-icons";
import {BsBasket} from "react-icons/bs";
import MyButton from "./UI/button/MyButton";
import MyModal from "./UI/modal/MyModal";
import Basket from "./Basket";
import {useTypedSelectors} from "../hooks/useTypedSelector";

interface headerProps {
    logo: string
}

const Header:FC<headerProps> = (props) => {

    {/*---- state modal ----*/}
    const [modal, setModal] = useState<boolean>(false)

    {/*---- functions to basket----*/}
    const openBasket = (event:React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setModal(true)
    }

    return (
        <header className='header'>
            {/*---- modal window ----*/}
            <MyModal
                visible={modal}
                setVisible={setModal}
            >
                <Basket/>
            </MyModal>

            {/*---- content ----*/}
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
                        <MyButton
                            onClick={openBasket}
                            style={{background: "#fff", padding: 0, border: "none"}}
                        >
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