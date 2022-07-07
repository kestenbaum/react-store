import React, {FC, useState} from 'react';
import {IItem} from "../types/types";
import MyImage from "./UI/image/MyImage";
import MyButton from "./UI/button/MyButton";
import {useDispatch} from "react-redux";
import {removeItemToBasketAction} from "../store/reducers/basketReducer";
import MyCounter from "./UI/counter/MyCounter";

{/*---- interface ----*/}
interface IBasketItem {
    props: IItem
}
const BasketItem:FC<IBasketItem> = (props) => {
    {/*---- get state counter ----*/}
    const [state, setState] = useState<number>(props.props.count)

    {/*---- used dispatch----*/}
    const dispatch = useDispatch()

    {/*---- logic delete item to basket ----*/}
    const deleteItem = (item:IItem) => {
        dispatch(removeItemToBasketAction(item.id))
    }

    return (
        <div className='basket-item'>

            {/*---- basket title and image ----*/}
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
            {/*---- basket price and option button----*/}
            <div className='basket-option'>
                <div className='basket-price'>Стоимость: {state * props.props.price } UAH</div>
                <MyButton
                    onClick={() => deleteItem(props.props)}
                >Delete</MyButton>
            </div>

        </div>
    );
};

export default BasketItem;