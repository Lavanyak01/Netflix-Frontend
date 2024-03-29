import React from "react";
import './SubscribeButton.css';

function SubscribeButton({ children, ...restProps}){
    return (
        <div className='subscribe-button'>
            <a  href='' {...restProps}>
                {children}
            
            <img className='subscribe-button-image' src='../../../../../images/icons/right-arrow.png' alt='Try Now' />
            </a>
        </div>
    )
}

export default SubscribeButton;
