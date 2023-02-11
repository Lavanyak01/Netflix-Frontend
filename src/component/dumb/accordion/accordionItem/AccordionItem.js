import React from "react";
import "./AccordionItem.css";

function AccordionItem({ children, ...restProps}) {
    return (
        <div className="accordion-item" {...restProps}>
            {children}
        </div>
    )
}

export default AccordionItem