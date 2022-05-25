import React from 'react'
import styled from 'styled-components';
import { Add, Remove } from '@mui/icons-material';

const AddRemoveGroupStyle = styled.section`
width: 100%;
height: 30px;
margin: 10px 0; 
display: flex; 
align-items: center;

p { margin-left: 10px; }
font-weight: 300;
:hover{cursor: pointer;}
&.add { svg, p { color : #5832DA; } }
&.remove { svg, p { color: rgba(18, 53, 91, 0.5);} }

`;


export function RemoveGroup({ text }) {
    return (
        <AddRemoveGroupStyle className="remove">
                <Remove />
                <p>{ text }</p>      
        </AddRemoveGroupStyle>
    )
}

export default function AddGroup({ text }) {
    return (
        <AddRemoveGroupStyle className="add">
                <Add />
                <p>{ text }</p>      
        </AddRemoveGroupStyle>
    )
}
