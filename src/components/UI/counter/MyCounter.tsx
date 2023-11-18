import React, {FC, useState} from 'react';
import {IconContext} from "react-icons";
import {IoMdArrowDropright, IoMdArrowDropleft} from "react-icons/io"

import MyButton from "../button/MyButton";
import {ICounter} from "../../../types/types";

import style from './MyCounter.module.css'

const MyCounter:FC<ICounter> = ({count, onChangeCounter}) => {
    const [disabled, setDisabled] = useState<boolean>(false)
    const addToCounter = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        onChangeCounter(count + 1)
    }
    const removeFromCounter = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        count >= 1
            ? onChangeCounter(count - 1)
            : setDisabled(true)
    }

    return (
        <div className={style.counter}>
            <MyButton
                className={style.counterBtn}
                onClick={removeFromCounter}
            >
                <IconContext.Provider value={{ color: "black", size: '1.5em', className: "arrow-up" }}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <IoMdArrowDropleft />
                    </div>
                </IconContext.Provider>
            </MyButton>

            {/*---- counter ----*/}
            <div className='counter-price'>
                {count}
            </div>

            <MyButton
                onClick={addToCounter}
                className={style.counterBtn}
                disabled={false}
            >
                <IconContext.Provider value={{ className: "arrow-up", size: '1.5em', style: {height: 25} }}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <IoMdArrowDropright />
                    </div>
                </IconContext.Provider>
            </MyButton>
        </div>
    );
};

export default MyCounter;