import React from "react";
import JumboTitle from "../jumboTitle/JumboTitle";
import JumboImage from "../jumboImage/JumboImage";
import JumboSubHeading from "../jumboSubheading/JumboSubHeading";

import "./JumboItem.css";

function JumboItem({children, alignment, title, subheading, imageSrc, imageAlt, ...restProps}) {
     return (
        <div className="jumbo-item" >
            {
                alignment === true && 
                (
                    <div>
                      <JumboTitle> {title} </JumboTitle>
                      <JumboSubHeading> { subheading} </JumboSubHeading>
                    </div>
                )
            }
            {
                alignment === false && (
                    <div className="jumbo-image-wrapper">
                      <JumboImage  src={imageSrc} alt={imageAlt} />
                    </div>
                )
            }
            {
                alignment === true && (
                    <div>
                      <JumboImage  src={imageSrc} alt={imageAlt} />
                    </div>
                )
            }
            {
                alignment === false && (
                    <div>
                    <JumboTitle> {title} </JumboTitle>
                    <JumboSubHeading> { subheading} </JumboSubHeading>
                  </div>
                )
            }
            
        </div>
     )
}

export default JumboItem;