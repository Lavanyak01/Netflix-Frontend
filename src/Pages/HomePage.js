import React from "react";
import Seperator from "../component/dumb/Seperator/Seperator";
import JumboComponent from "../component/dumb/jumbo/jumboComponent/JumboComponent";
import HeaderComponent from "../component/smart/HeaderComponent";
import AccordionComponent from "../component/dumb/accordion/accordionComponent/AccordionComponent";
import FooterComponent from "../component/dumb/footer/footer Component/FooterComponent";


function HomePage(){
    return (
      <>
        <HeaderComponent /> 
        <Seperator />
        <JumboComponent />
        <AccordionComponent />
        <Seperator />
        <FooterComponent />
      </>
    )
}

export default HomePage;