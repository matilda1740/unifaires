import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components';

const FormEducationGroupStyle = styled.section`
    width: 100%;
    height: 100%;
`;

const FormEducationGroup = (props) => {

    const {children} = props;

    return (
        <FormEducationGroupStyle>
            {children}
        </FormEducationGroupStyle>
    );
}
export default FormEducationGroup