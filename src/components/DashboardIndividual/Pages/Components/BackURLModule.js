import React from 'react'
import styled from 'styled-components';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';

// IMAGES AND ICONS
import ArrowBackIcon from 'public/images/dashboard/Dashboard/ArrowLeft.svg'
// -----------------

export const BackUrlWrapper = styled.a`
    display: flex;
    align-items: center;
    width: 30%;
    height: 100%;

    :hover{ cursor: pointer; }

    img {
        width: 12px;
        height: 12px;
        margin-right: 8px;
    }

    p{
        /* color: rgba(184, 188, 202, 1); */
        color: rgba(18, 53, 91, 0.8);
    }
`;


const BackURLModule = ({prevPath, text = "Back"}) => {

    return (
        <BackUrlWrapper href={prevPath}>
            <img src={ArrowBackIcon?.src} alt="Back" /> 
            <Text as={"p"} content={text} />
        </BackUrlWrapper>
    )
}
export default BackURLModule