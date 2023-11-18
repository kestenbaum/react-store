import React, {FC, useMemo, useState} from 'react';
import {useDispatch} from "react-redux";

import {removeItemToBasketAction} from "../store/reducers/basketReducer";

import MyImage from "./UI/image/MyImage";
import MyButton from "./UI/button/MyButton";
import MyCounter from "./UI/counter/MyCounter";

import {IBasketItem, IItem} from "../types/types";


const BasketItem:FC<IBasketItem> = (props) => {
    const dispatch = useDispatch()
    const [state, setState] = useState<number>(0)

    const getAll = useMemo(() => {
        return state * props.props.price
    }, [state])

    useMemo(() => {
        setState(state + 1)
    }, [props.props.count])
    const deleteItem = (item:IItem) => dispatch(removeItemToBasketAction(item.id))

    return (
        <div className='basket-item'>
            <div className='basket-information'>
                <div className='basket-title'>{props.props.title}</div>
                <MyImage
                    style={{maxWidth: 50}}
                    src={props.props.img}
                    alt={"images"}
            />
            </div>
            <MyCounter
               count={state}
               onChangeCounter={setState}
            />
            <div className='basket-option'>
                <div className='basket-price'>Стоимость: {getAll} UAH</div>
                <MyButton
                    onClick={() => deleteItem(props.props)}
                >Delete</MyButton>
            </div>

        </div>
    );
};

export default BasketItem;