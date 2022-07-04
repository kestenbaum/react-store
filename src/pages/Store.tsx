import React, {FC} from 'react';
import StoreList from "../components/StoreList";

const Store:FC = () => {
    return (
        <div className='store-page'>
            <div className='container'>
                <StoreList/>
            </div>
        </div>
    );
};

export default Store;