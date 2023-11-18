import React, {FC} from 'react';
import style from './MyButton.module.css'
import {IButtonProps} from "../../../types/types";

const MyButton:FC<IButtonProps> = ({children,  ...rest}) => {
    return (
        <button
            className={style.btn}
            {...rest}
        >
            {children}
        </button>
    );
};

export default MyButton;