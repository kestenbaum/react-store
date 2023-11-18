import React, {FC} from 'react';
import {useDispatch} from "react-redux";

import {addItemToBasketAction} from "../store/reducers/basketReducer";
import {useTypedSelectors} from "../hooks/useTypedSelector";

import MyButton from "./UI/button/MyButton";
import MyImage from "./UI/image/MyImage";

import {IStoreItem} from "../types/types";


const StoreItem:FC<IStoreItem> = ({props}) => {
    const dispatch = useDispatch()
    const state = useTypedSelectors(item => item.basket.basket)
    const addItemToBasket = (event:React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        const name = {
            id: props.id,
            count: 1
        }

        const checkedId = () => {
            const idxItem = state.findIndex(item => item.id === props.id)
            if (idxItem > -1){
                state[idxItem].count++
            } else {
                dispatch(addItemToBasketAction(name))
            }
        }
        checkedId()
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