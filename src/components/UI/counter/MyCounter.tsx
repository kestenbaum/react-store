import React, {FC, useState} from 'react';
import style from './MyCounter.module.css'
import MyButton from "../button/MyButton";
import {IconContext} from "react-icons";
import {IoMdArrowDropright, IoMdArrowDropleft} from "react-icons/io"

interface ICounter {
    count: number
}

const MyCounter:FC<ICounter> = (props) => {
    {/*---- state button counter ----*/}
    const [disabled, setDisabled] = useState<boolean>(false)

    {/*---- state counter ----*/}
    const [counter, setCounter] = useState<number>(0)

    const getState = () => {
       return counter + props.count
    }
    console.log(getState())
    {/*---- function click counter----*/}
    const addToCounter = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setCounter(counter + 1)
    }

    const removeFromCounter = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        counter >= 0
            ? setCounter(counter - 1)
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
                {getState()}
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