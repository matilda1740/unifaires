import React from 'react'
import styled from 'styled-components';
import { Add } from '@mui/icons-material';

const AddGroupStyle = styled.section`
width: 100%;
height: 30px;
margin: 10px 0; 
display: flex; 
align-items: center;
svg, p { color : #5832DA; }
p {
    margin-left: 10px;
}
font-weight: 300;
    :hover{cursor: pointer;}
`;

export default function AddGroup({ text }) {
    return (
        <AddGroupStyle>
                <Add/>
                <p>{ text }</p>      
        </AddGroupStyle>
    )
}
