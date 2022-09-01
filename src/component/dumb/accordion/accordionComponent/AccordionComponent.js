import React, {useState} from "react";
import SubscribeButton from "../../forms/subscribe/SubscribeButton/SubscribeButton";
import SubscribeEmail from "../../forms/subscribe/SubscribeEmail/SubscribeEmail";
import SubscribeWrapper from "../../forms/subscribe/SubscribeWrapper/SubscribeWrapper";
import FeatureTitle from "../../header/FeatureTitle/FeatureTitle";
import AccordionItem from "../accordionItem/AccordionItem";
import AccordionText from "../accordionText/AccordionText";
import AccordionTitle from "../accordionTitle/AccordionTitle";
import "./AccordionComponent.css";

const data=[
    {
        'title': 'What is Netflix?',
        'text': 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.\n'+
                 '\n'+
                 'You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There\'s always something new to discover, and new TV shows and movies are added every week!'
    },
    {
        'title':'How much does Netflix cost?',
        'text': 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.'
    },
    {
        'title': 'Where can I watch?',
        'text': 'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.\n'+
                 '\n'+
                 'You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you\'re on the go and without an internet connection. Take Netflix with you anywhere.'
    },
    {
        'title': 'How do I cancel?',
        'text': 'Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.'
    },
    {
        'title': 'What can I watch on Netflix?',
        'text': 'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.'
    },
    {
        'title': 'Is Netflix good for kids?',
        'text': 'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.\n'
                 +'\n'+
                 'Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.'
    }

];
function AccordionComponent({ children, ...restProps}) {
    const [accordionState, setAccordionState] = useState(data.map(()=> false));

    return (
      <div className="accordion-component" {...restProps}>
        <h1 className="accordion-heading">Frequesntly Asked Questions</h1>
        <div className="accordion-wrapper" >
          {
              data.map((item, index)=> (
                  <AccordionItem >
                    <AccordionTitle 
                     isOpen={accordionState[index]}
                     handleClick={()=>{
                        let currentValue = accordionState[index];
                        let newValue = !currentValue;
                        let newAccordionState = [...accordionState];
                        for(let i=0; i<accordionState.length; i++){
                            newAccordionState[i] = false;
                        }
                        newAccordionState[index] =newValue;
                        setAccordionState(newAccordionState);
                    }}> {item.title} </AccordionTitle>
                    <AccordionText isOpen={accordionState[index]}> {item.text} </AccordionText>
                  </AccordionItem>
              ))
          }
        </div>
        <FeatureTitle className='form-title'>
            Ready to watch? Enter your email to create or restart your membership.
        </FeatureTitle>
        <SubscribeWrapper>
            <SubscribeEmail type='email' placeholder='Email address' />
            <SubscribeButton>Get Started</SubscribeButton>
        </SubscribeWrapper>
      </div>
    )
}

export default AccordionComponent;