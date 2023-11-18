import React, {FC} from 'react';
import {ILogo} from "../../types/types";

const Logo:FC<ILogo> = ({logo}) => {
    return (
        <div className='header-logo'>{logo}</div>
    );
};

export default Logo;