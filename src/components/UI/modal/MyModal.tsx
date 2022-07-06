import React, {FC} from 'react';
import style from './MyModal.module.css'

{/*---- interface ----*/}
interface IModal {
    props?: any
    children: React.ReactNode
    visible: boolean
    setVisible?: any
}

const MyModal:FC<IModal> = (props) => {
    {/*---- styles ----*/}
    const rootClasses = [style.modal]

    {/*---- get props----*/}
    const {children, visible, setVisible} = props

    {/*---- checked state modal ----*/}
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