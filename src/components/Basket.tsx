import React, {FC} from 'react';
import {useTypedSelectors} from "../hooks/useTypedSelector";
import BasketItem from "./BasketItem";

const Basket:FC = () => {
    {/*---- get state basket ----*/}
    const state = useTypedSelectors(item => item.basket.basket)

    return (
        <div className='basket-wrapper'>
            {/*---- checked basket ----*/}
            {
                state.length === 0
                    ? <div>Корзина пуста!!!</div>
                    : state.map(item =>
                        <BasketItem
                            key={item.id}
                            props={item}
                        />
                    )
            }
        </div>
    );
};

export default Basket;