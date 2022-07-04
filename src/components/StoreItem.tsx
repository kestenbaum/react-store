import React, {FC, useState} from 'react';
import MyButton from "./UI/button/MyButton";
import MyImage from "./UI/image/MyImage";
import {useSelector} from "react-redux";

interface IStoreItem {
    props?: any
}

const StoreItem:FC<IStoreItem> = ({props}) => {
    {/*---- state button ----*/}
    const [disabled, setDisabled] = useState<boolean>(false)

    {/*---- Add item to basket ----*/}
    const addItemToBasket = (event:React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setDisabled(true)
    }

    return (
        <div className='store-item'>
            <h2 className='title-item'>{props.title}</h2>
            <MyImage
                style={{maxWidth: 200, minHeight: 300}}
                src={props.img}
            />
            <span className='price-item'>Стоимость:{props.price} UAH</span>
            <MyButton
                onClick={addItemToBasket}
                disabled={disabled}
            >В корзину</MyButton>
        </div>
    );
};

export default StoreItem;