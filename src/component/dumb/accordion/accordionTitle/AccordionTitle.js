import React from "react";
import "./AccordionTitle.css";

function AccordionTitle({ children, isOpen, handleClick, ...restProps}) {
    return (
      <div className='accordion-title' {...restProps} onClick={()=>handleClick()}>
        {children}
        {
            isOpen === true && (
                <img className='accordion-icon' src={'images/icons/close.png'} />
            )
        }
        {
            isOpen === false && (
                <img className="accordion-icon" src={"images/icons/plus.png"} />
            )
        }
      </div>
    )
}

export default AccordionTitle;