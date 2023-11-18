import React, {FC} from 'react';

import style from './MyModal.module.css'
import {IModal} from "../../../types/types";


const MyModal:FC<IModal> = (props) => {
    const rootClasses = [style.modal]
    const {children, visible, setVisible} = props
    if (visible) rootClasses.push(style.active)

    return (
        <div
            className={rootClasses.join(' ')}
            onClick = {() => setVisible(false)}
        >
            <div className={style.modalWrapper}
                onClick={event => event.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default MyModal;