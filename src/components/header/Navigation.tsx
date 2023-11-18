import React, {FC, useState} from 'react';
import {NavLink} from "react-router-dom";
import {BsBasket} from "react-icons/bs";
import {IconContext} from "react-icons";

import MyButton from "../UI/button/MyButton";
import MyModal from "../UI/modal/MyModal";
import Basket from "../Basket";

import {data} from "../../data";

const Navigation:FC = () => {
    const [modal, setModal] = useState<boolean>(false)

    return (
        <div className='header-nav'>
            <MyModal
                visible={modal}
                setVisible={setModal}
            >
                <Basket/>
            </MyModal>

            {data.map(element => {
                return  <NavLink
                    className='nav-link'
                    to= {element?.to}
                >{element?.title}</NavLink>
            })}

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