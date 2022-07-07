import React, {FC} from 'react';
import {useTypedSelectors} from "../hooks/useTypedSelector";
import BasketItem from "./BasketItem";


const Basket:FC = () => {
    {/*---- get state basket ----*/}
    const state = useTypedSelectors(item => item.basket.basket)
    const stateCard = useTypedSelectors(item => item.store.data)
    //Todo fix code naming

    const resultMass = state.map(item => {
        const result = stateCard.filter(element => element.id === item.id)[0]
        result.count = item.count
        return result
    })

    return (
        <div className='basket-wrapper'>
            {/*---- checked basket ----*/}
            {
                state.length === 0
                    ? <div>Корзина пуста!!!</div>
                    : resultMass.map(item =>
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