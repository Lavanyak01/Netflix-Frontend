import React from "react";
import "./SignInput.css";

function SignInput({ ...restProps}){
    return (
    <input className="sign-input" {...restProps} />
    )
}

export default SignInput;