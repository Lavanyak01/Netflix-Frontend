import React from "react";
import SubscribeButton from "../dumb/forms/subscribe/SubscribeButton/SubscribeButton";
import SubscribeEmail from "../dumb/forms/subscribe/SubscribeEmail/SubscribeEmail";
import SubscribeWrapper from "../dumb/forms/subscribe/SubscribeWrapper/SubscribeWrapper";
import FeatureTitle from "../dumb/header/FeatureTitle/FeatureTitle";
import FeatureWrapper from "../dumb/header/FeatureWrapper/FeatureWrapper";
import HeaderWrapper from "../dumb/header/HeaderWrapper/HeaderWrapper";
import Logo from "../dumb/header/Logo/Logo";
import NavBar from "../dumb/header/NavBar/NavBar";
import SigninButton from "../dumb/header/SigninButton/SigninButton";

function HeaderComponent(){
     return (
        <>
        <HeaderWrapper>
            <NavBar className='navbar-home'>
                <Logo />
                <SigninButton />
            </NavBar>
            <FeatureWrapper className='feature-wrapper-home'>
                <FeatureTitle className='feature-title-home'>
                    Unlimited movies, Tv Shows & More.
                </FeatureTitle>
                <FeatureTitle className='feature-title-tag'>
                    Watch anywhere. Cancel anytime.
                </FeatureTitle>
                <FeatureTitle className='form-title'>
                  Ready to watch? Enter your email to create or restart your membership.
                </FeatureTitle>
              <SubscribeWrapper>
                <SubscribeEmail type='email' placeholder='Email address' />
                <SubscribeButton>Get Started</SubscribeButton>
              </SubscribeWrapper>
            </FeatureWrapper>
        </HeaderWrapper>
        </>
     ) 
}

export default HeaderComponent;