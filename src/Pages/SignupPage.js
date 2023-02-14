import React from "react";
import HeaderWrapper from "../component/dumb/header/HeaderWrapper/HeaderWrapper";
import Logo from "../component/dumb/header/Logo/Logo";
import NavBar from "../component/dumb/header/NavBar/NavBar";
import SignupComponent from "../component/smart/SignupComponent/SignupComponent";

function SignupPage(){
    return (
    <>
      <HeaderWrapper>
        <NavBar className='navbar-home'>
            <Logo />
        </NavBar>
      <SignupComponent />
      </HeaderWrapper>
    </>  
    )
}

export default SignupPage;
