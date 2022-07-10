import React, {FC, useState} from 'react';
import {NavLink} from "react-router-dom";
import MyButton from "../UI/button/MyButton";
import {IconContext} from "react-icons";
import {BsBasket} from "react-icons/bs";
import MyModal from "../UI/modal/MyModal";
import Basket from "../Basket";

const Navigation:FC = () => {
    {/*---- state modal ----*/}
    const [modal, setModal] = useState<boolean>(false)

    return (

        <div className='header-nav'>
            {/*---- modal window ----*/}
            <MyModal
                visible={modal}
                setVisible={setModal}
            >
                <Basket/>
            </MyModal>

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
                onClick={() => setModal(true)}
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
    );
};

export default Navigation;