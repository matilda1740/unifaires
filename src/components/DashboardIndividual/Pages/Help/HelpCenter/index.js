import React, { useState } from 'react';
import Link from 'next/link';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';
import { HelpHeading, HelpOptionsRow, HelpCard, HelpBottomSection, HelpBottomOptions } from '../../../../DashboardBusiness/business.style';
import { individualModule } from 'common/data/appData';

import helpBG from 'public/images/dashboard/Dashboard/helpcenterBG.svg';
import helpIcon from 'public/images/dashboard/Dashboard/helpcenter.svg';
import arrowRight from 'public/images/dashboard/Dashboard/ArrowRight.svg';
import arrowDown from 'public/images/dashboard/Dashboard/ArrowDown.svg';

const HelpCenter = () => {
    const {userOptions} = individualModule;

    const [state, setState] = useState({
    });

    const [imgExpanded, setImgExpanded] = useState(false);

    
    const handleHelpClick = (e) => {
        if(e.target.classList.contains("not_clicked")) {
            e.target.classList.add("clicked")
            e.target.classList.remove("not_clicked")
        }else {
            e.target.classList.remove("clicked")
            e.target.classList.add("not_clicked")
        }
    }

    const handleExpansion = (e) => {
         
        // Check if child or parent
        if(e.target.classList.contains("not_expanded")){
            e.target.classList.add("expanded")
            e.target.classList.remove("not_expanded")
            setImgExpanded(true) // Toggle Arrow Direction
        }else if(e.target?.parentElement?.parentElement.classList.contains("not_expanded")){
            e.target?.parentElement?.parentElement.classList.add("expanded")
            e.target?.parentElement?.parentElement.classList.remove("not_expanded")
            setImgExpanded(true)
        }else if(e.target.classList.contains("expanded")) {
            e.target.classList.remove("expanded")
            e.target.classList.add("not_expanded")
            setImgExpanded(false)
        }else if(e.target?.parentElement?.parentElement.classList.contains("expanded")){
            e.target?.parentElement?.parentElement.classList.remove("expanded")
            e.target?.parentElement?.parentElement.classList.add("not_expanded")
            setImgExpanded(false)
        }
    }


  return (
    <>
        <HelpHeading>
            <div>
                <Heading as="h6" content={"How can we help you?"}></Heading>
                <Text as="p" content={"Everything you need to know about Unifaires. "}></Text>                
            </div>
            <div className="help_heading_right">
                <img src={helpBG?.src}  alt="help" />
                <Link href="/individual/help/feedback">
                Give Feedback</Link>
            </div>
        </HelpHeading>
        {
            userOptions.map(( section => (
                section.helpOptions?.length > 0 &&
                <HelpOptionsRow>
                    {
                        section.helpOptions.map(( help => (
                            <HelpCard onClick={handleHelpClick} className="module_row_jobs_card not_clicked">
                                <img src={helpIcon?.src}  alt="Help" />                                    
                                <Heading as="h6" content={help.title}></Heading>
                                <Text as="p" content={help.description}></Text>
                            </HelpCard>
                        )))
                    }
                </HelpOptionsRow>
            )))
        }

        <HelpBottomSection>
        {
            userOptions.map(( section => (
                section.helpBottom.map(( help => (
                    <HelpBottomOptions onClick={handleExpansion} className="not_expanded">
                        <div>
                            <Heading as="h6" content={help.heading}></Heading>
                            {
                                imgExpanded ? 
                                <img src={arrowDown?.src}  alt="Help" /> 
                                : <img src={arrowRight?.src}  alt="Help" /> 
                            }
                                   
                        </div>
                        <Text as="p" content={help.paragraph}></Text>
                    </HelpBottomOptions>
                )))
            )))
        }      
        <div className="help_heading_right mobile_section">
            <img src={helpBG?.src}  alt="help" />
            <Link href="/individual/help/feedback">
            Give Feedback</Link>
        </div>    
        </HelpBottomSection>
    </>
  );
};

export default HelpCenter;
