import React, {FC} from 'react';

import {imageProps} from "../../../types/types";

const MyImage:FC<imageProps> = ({...props}) => {
    return (
        <img {...props}/>
    );
};

export default MyImage;