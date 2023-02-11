import React from "react";
import "./SignInComponent.css";
import SignTitle from "../../dumb/SignTitle/SignTitle";
import SignInput from "../../dumb/SignInput/SignInput";
import SignButton from "../../dumb/SignButton/SignButton";
import SignText from "../../dumb/SignText/SignText";
import SignLink from "../../dumb/SignLink/SignLink";
import SignCaptcha from "../../dumb/SignCaptcha/SignCaptcha";
import { Link } from "react-router-dom";

function SignInComponent({ children, ...restProps}) {
    return (
        <div className="sign-form-wrapper" {...restProps}>
           <form className="sign-form-base">
             <SignTitle> Sign In</SignTitle>
             <SignInput
                type='text'
                placeholder='Email Address'
             />
             <SignInput
                type='password'
                placeholder='Password'
                autoComplete='off'
             />
             <SignButton> Sign In</SignButton>
             <SignText> New to Netflix? <Link to='/signup'><SignLink> Signup Now</SignLink></Link></SignText>
             <SignCaptcha>This page is protected by Google reCAPTCHA to ensure you're not a bot.</SignCaptcha>
           </form>
        </div>
    )
}

export default SignInComponent;
