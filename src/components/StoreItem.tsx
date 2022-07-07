import React, {FC} from 'react';
import MyButton from "./UI/button/MyButton";
import MyImage from "./UI/image/MyImage";
import {useDispatch} from "react-redux";
import {addItemToBasketAction} from "../store/reducers/basketReducer";

interface IStoreItem {
    props?: any
}

const StoreItem:FC<IStoreItem> = ({props}) => {
    {/*---- used dispatch ----*/}
    const dispatch = useDispatch()

    {/*---- Add item to basket ----*/}
    const addItemToBasket = (event:React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        dispatch(addItemToBasketAction(props))
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
            >В корзину</MyButton>
        </div>
    );
};

export default StoreItem;