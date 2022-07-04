import React, {FC} from 'react';
import MyButton from "./UI/button/MyButton";
import MyImage from "./UI/image/MyImage";

interface IStoreItem {
    props?: any
}

const StoreItem:FC<IStoreItem> = ({props}) => {
    return (
        <div className='store-item'>
            <h2 className='title-item'>{props.title}</h2>
            <MyImage
                style={{maxWidth: 200}}
                src={props.img}
            />
            <span className='price-item'>Стоимость:{props.price} UAH</span>
            <MyButton>В корзину</MyButton>
        </div>
    );
};

export default StoreItem;