import React, {FC} from 'react';
import StoreItem from "./StoreItem";
import {useTypedSelectors} from "../hooks/useTypedSelector";

const StoreList:FC = () => {
    const state = useTypedSelectors(item => item.store.data)

    return (
        <div className='store-list'>
            {state.map(item =>
                <StoreItem
                    key={item.id}
                    props={item}
                />
            )}
        </div>
    );
};

export default StoreList;