import React from "react";
import FooterComponent from "../component/dumb/footer/footer Component/FooterComponent";
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
      <FooterComponent />
      </HeaderWrapper>
    </>  
    )
}

export default SignupPage;