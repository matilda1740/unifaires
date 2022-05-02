import React, { useState } from 'react';
import Link from 'next/link';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';
import { SectionHeader } from '../../../../globalApp.style';
import SectionWrapper, { ModuleRow, ModuleRowEmpty, BadgesCard, ModuleSectionHeader, ModuleSectionContainer, ModuleSectionWrapper, SectionDivider, HelpBottomOptions, WhereToSection, HelpBottomSection, InformationContainer, SectionTitle } from '../../../../DashboardBusiness/business.style';
import RecommendedFundingCard, { FundingSectionWrapper } from '../../Components/RecommendedFunding'
import BillingButton from '../../Settings/Billings/BillingButton';
import DropDownList from '../../Components/DropDownList';

import { userModule } from 'common/data/appData';

import arrowLeft from 'public/images/dashboard/Dashboard/ArrowLeft.svg'
import arrowRight from 'public/images/dashboard/Dashboard/ArrowRight.svg';
import arrowDown from 'public/images/dashboard/Dashboard/ArrowDown.svg';
import optionsIcon from 'public/images/dashboard/dotIcon.svg';

import FundingThumbnail from 'public/images/dashboard/fundingCompany.png'
import FundingBG from 'public/images/dashboard/VideoControls/VideoBG.png'

import { useRouter } from "next/router";

const SpecificFundingSection = () => {
  const {userOptions} = userModule;

  const router = useRouter();
  const { query, state } = router;
  console.log(router, query, state)

  const fundingStatus = {
      granted: false,
      rejected: false,
      waiting: true,
  } 
  const statusCategories = {
      rejected: ["Re-apply", "Delete"],
      waiting: ["Cancel", "Delete"],
  } 

  const [show, setShow ] = useState(false);
  const toggleDropDown = () => setShow(!show)

  const [imgExpanded, setImgExpanded] = useState(false);

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
    <ModuleSectionWrapper>
      <ModuleSectionHeader>
        <div className="left_div">
          <img src={arrowLeft?.src} alt="Back" /> 
          <p>Funding</p>
        </div>
        <div className="right_div funding">
        <BillingButton 
          variant={ fundingStatus.granted ? "granted" : fundingStatus.rejected ? "rejected" :  fundingStatus.waiting && "waiting"}
          text={fundingStatus.granted ? "Granted" : fundingStatus.rejected ? "Rejected" :  fundingStatus.waiting && "Waiting"}
        />
        <img onClick={toggleDropDown} src={optionsIcon?.src} alt="Options" />
        </div> 
       
        <DropDownList 
          data={statusCategories.rejected ? statusCategories.rejected : statusCategories.waiting && statusCategories.waiting}
          variant={ show ? "show_dropdown funding" : "hide_dropdown funding"}
        />
      </ModuleSectionHeader>

      <ModuleSectionContainer className="fundingSectionContainer">
        <div className="col1">
          <div className="module_thumbnail">
            <img src={FundingBG?.src} alt="Thumbnail" /> 
          </div>
        </div>
        <div className="col2">
          <Heading as="h5" content={"50% Off: JavaScript Complete Beginners Course For Web 2.0"}/>
          <Text as="p" content={"IBM is recognized as a cognitive solutions and cloud platform company with one purpose - to be essential to the world. We do this in part through innovative learning and credentialing programs that help develop and recognize the talent that fuels innovation to change the world. IBM's Digital Badge Program represents our latest endeavor for recognizing this talent through secure, verifiable digital credentials representing skill, achievement, and contribution. Earn and share your badge today!"} />
        </div>
      </ModuleSectionContainer>

      <InformationContainer className="funding">
        <Heading as="h5" content={"What you’ll learn"}/>   
        <ul>
          <li>IBM is recognized as a cognitive solutions and cloud platform company with one purpose - to be </li>
          <li>IBM is recognized as a cognitive solutions and cloud platform company with one purpose - to be </li>
          <li>IBM is recognized as a cognitive solutions and cloud platform company with one purpose - to be </li>
          <li>IBM is recognized as a cognitive solutions and cloud platform company with one purpose - to be </li>
          <li>IBM is recognized as a cognitive solutions and cloud platform company with one purpose - to be </li>
          <li>IBM is recognized as a cognitive solutions and cloud platform company with one purpose - to be </li>
        </ul>
      </InformationContainer> 

      <SectionTitle className="funding">You might also like</SectionTitle>

      <FundingSectionWrapper>
        <RecommendedFundingCard 
          thumbnail={FundingThumbnail}
          company={"IBM"}
          title={"First Steps in Creating Meaningful Designs for Best Practices"}
          description={"First steps in creating meaningful designs for best practices First steps in creating meaningful designs for best practices First steps in creating meaningful designs for best practices"}
          duration={"4 weeks"}
          amount={"$50"}
        />
        <RecommendedFundingCard 
          thumbnail={FundingThumbnail}
          company={"IBM"}
          title={"First Steps in Creating Meaningful Designs for Best Practices"}
          description={"First steps in creating meaningful designs for best practices First steps in creating meaningful designs for best practices First steps in creating meaningful designs for best practices"}
          duration={"4 weeks"}
          amount={"$50"}
        />
        {/* <RecommendedFundingCard 
          thumbnail={FundingThumbnail}
          company={"IBM"}
          title={"First Steps in Creating Meaningful Designs for Best Practices"}
          description={"First steps in creating meaningful designs for best practices First steps in creating meaningful designs for best practices First steps in creating meaningful designs for best practices"}
          duration={"4 weeks"}
          amount={"$50"}
        /> */}
      </FundingSectionWrapper>
    </ModuleSectionWrapper>    
    </>
  );
};

export default SpecificFundingSection;
