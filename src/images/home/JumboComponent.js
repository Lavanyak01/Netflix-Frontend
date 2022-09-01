import React from "react";
import Seperator from "../../Seperator/Seperator";
import JumboItem from "../jumboItem/JumboItem";
import "./JumboComponent.css";


function JumboComponent(){
    const data=[
        {
           'title': 'Enjoy on your TV',
           'subheading': 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
           'imageSrc':''
        },
        {
           'title':'Download your shows to watch offline.',
           'subheading':'Save your favourites easily and always have something to watch.' ,
           'imageSrc':''
        },
        {
           'title': 'Watch everywhere.',
           'subheading': 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
           'imageSrc':'images/home/home-tv.png' 
        },
        {
            'title': 'Create profiles for children.',
            'subheading': 'Send children on adventures with their favourite characters in a space made just for them—free with your membership.',
            'imageSrc':'images/home/children.png'
        }
    ];
    return (
        <div className="jumbo-component">
      { data.map(item => (
        <>
        <JumboItem title={item.title} subheading={item.subheading} imageSrc={item.imageSrc} />
        <Seperator />
        </>
      ))}
      </div>
    )
}

export default JumboComponent;