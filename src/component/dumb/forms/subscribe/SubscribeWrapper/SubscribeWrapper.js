import React from "react";
import './SubscribeWrapper.css';

function SubscribeWrapper({ children, ...restProps}) {
    return (
        <div className='subscribe-wrapper' {...restProps} >
            {children}
        </div>
    )
}

export default SubscribeWrapper;