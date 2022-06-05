import React from 'react';
import SkillsModalWrapper, { SkillsModalOverlay, SkillsSectionHeader, SkillsSectionTitle, EachSkillRow, SkillBubble, SkillsButtonRow } from './skillmatching.style'
import { Close } from '@mui/icons-material'
import Heading from 'components/Layout/Heading';
import Text from 'components/Layout/Text';
import BillingButton from '../Pages/Settings/Billings/BillingButton';

const SkillsMatchingModal = ({togglePopUp}) => {
    console.log("Show Pop Up")
    return (
        <SkillsModalOverlay>
        <SkillsModalWrapper>
            <SkillsSectionHeader>
                <Heading as="h3" content={"Skills Matching"} />
                <Close onClick={() => togglePopUp} />
            </SkillsSectionHeader>
            <Text as="p" content={"Get the right recommendations for the courses you should study for the career path you have in mind. Tell us what career you want and we will show you the best in-demand skills for professionals in that space."} />
            <SkillsSectionTitle>
                <Heading as="h6" content={"Select a Career Path"} />
            </SkillsSectionTitle>
            <EachSkillRow>
                <SkillBubble className="selected">Science</SkillBubble>
                <SkillBubble className="not_selected">Science</SkillBubble>

            </EachSkillRow>
            <SkillsSectionTitle>
                <Heading as="h6" content={"Now let’s identify a specific categorsy that resonates with you"} />
            </SkillsSectionTitle>
            <EachSkillRow></EachSkillRow>

            <SkillsButtonRow>
                <BillingButton 
                    variant={"skills"}
                    position={"beginning rejected_btn"}
                    text={"Cancel"}
                />
                <BillingButton 
                    variant={"skills"}
                    position={"end white_btn"}
                    text={"Refine Selection"}
                />
                <BillingButton 
                    variant={"skills"}
                    position={"end"}
                    text={"Proceed"}
                />
            </SkillsButtonRow>
        </SkillsModalWrapper>
        </SkillsModalOverlay>

    );
}

export default SkillsMatchingModal;