import React, { useState } from 'react';
import Link from 'next/link';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';

import {HelpHeading, HelpEmojiRow, HelpEmojiDiv} from '../../../../DashboardBusiness/business.style';
import { individualModule } from 'common/data/appData';

import helpBG from 'public/images/dashboard/Dashboard/helpcenterBG.svg';
// Emojis
import terribleFace from 'public/images/dashboard/emojis/terrible.svg';
import sadFace from 'public/images/dashboard/emojis/sadface.svg';
import mediumFace from 'public/images/dashboard/emojis/medium.svg';
import happyFace from 'public/images/dashboard/emojis/happyface.svg';
import awesomeFace from 'public/images/dashboard/emojis/awesome5.svg';

import emojiChecked from 'public/images/dashboard/emojis/emojiChecked.svg';




const HelpFeedback = () => {
  const {userOptions} = individualModule;

  const [state, setState] = useState({
  });

  const [emojiClicked, setEmojiClicked] = useState(false);
  
  const handleEmojiClick = (e) => {
    console.log("Emoji Clicked", e.target, e.target.classList)
    if(e.target.classList.contains("not_clicked")) {
      setEmojiClicked(true)
      e.target.classList.add("clicked")
      e.target.classList.remove("not_clicked")
      if(e.target.firstChild.classList.contains("not_checked")){
        e.target.firstChild.classList.add("checked")
        e.target.firstChild.classList.remove("not_checked")
      }
    }else {
      e.target.classList.remove("clicked")
      e.target.classList.add("not_clicked")
      if(e.target.firstChild.classList.contains("checked")){
        e.target.firstChild.classList.remove("checked")
        e.target.firstChild.classList.add("not_checked")
      }
    }
    // GET THE TYPE OF EMOJI FOR THE SUBMIT
  }

  return (
    <>
      <HelpHeading>
          <div>
              <Heading as="h6" content={"Give Feedback"}></Heading>
              <Text as="p" content={"We want to know how to serve you better."}></Text>                
          </div>
          <div className="help_heading_right">
              <img src={helpBG?.src}  alt="help" />
          </div>
      </HelpHeading>

      <form>
          <Heading className="help_section_heading" as="h6" content={"Feedback"}></Heading>
          <textarea className="help_section_input" rows="4" cols="50" placeholder="Share your thoughts..."></textarea>
          <Heading className="help_section_heading" as="h6" content={"How would you rate us?"} ></Heading>

          <HelpEmojiRow>
            <HelpEmojiDiv className="not_clicked" onClick={handleEmojiClick}>
              <img className="not_checked" src={emojiChecked?.src}  alt="checked" />
              <img src={terribleFace?.src}  alt="1 star" />
            </HelpEmojiDiv>
            <HelpEmojiDiv className="not_clicked" onClick={handleEmojiClick}>
              <img className="not_checked" src={emojiChecked?.src}  alt="checked" />
              <img src={sadFace?.src}  alt="2 star" />
            </HelpEmojiDiv>
            <HelpEmojiDiv className="not_clicked" onClick={handleEmojiClick}>
              <img className="not_checked" src={emojiChecked?.src}  alt="checked" />
              <img src={mediumFace?.src}  alt="3 star" />
            </HelpEmojiDiv>
            <HelpEmojiDiv className="not_clicked" onClick={handleEmojiClick}>
              <img className="not_checked" src={emojiChecked?.src}  alt="checked" />
              <img src={happyFace?.src}  alt="4 star" />
            </HelpEmojiDiv>
            <HelpEmojiDiv className="not_clicked" onClick={handleEmojiClick}>
              <img className="not_checked" src={emojiChecked?.src}  alt="checked" />
              <img src={awesomeFace?.src}  alt="5 star" />
            </HelpEmojiDiv>          
          </HelpEmojiRow>
          <button>Submit Feedback</button>
      </form>


    </>
  );
};

export default HelpFeedback;
