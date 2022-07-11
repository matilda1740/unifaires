import React, { useState } from 'react';
import styled from 'styled-components';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const UserSelectBoxStyle = styled.div`

    #select-container{
        background: #EEEAFB;
        border-radius: 1.75rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        color: rgba(88, 50, 218, 1);
        font-weight: 500;
    }
    #select-container{
        width: 75%;
        margin: 0.5rem 1.5rem 0.75rem 1.5rem;
        height: 2rem;
        padding: 0.5rem 1rem;
    }
    #select-box{
        width: 100%;
        color: rgba(88, 50, 218, 1);
        font-size: 14px;
        font-weight: 500;
        text-transform: capitalize;
        fieldset {
            border: none !important;
            width: 100%;
        }
    }
        fieldset {
            border: none !important;
            width: 100%;
        }    
/* 
    .MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper{
        background: #EEEAFB;
        border-radius: 1.75rem;   
        min-width: 200px;
        left: 25px;
    } */
    #menu-item {
        text-transform: capitalize;
    }
`;

const usertypes = ["personal", "individual", "business"];

const UserSelectBox = (props) => {

    const { userType } = props;

    const [type, setType] = React.useState(userType);

    const handleChange = (event) => {
    setType(event.target.value);
    };
    return (
    <UserSelectBoxStyle>
    <Box id="select-container" sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
        <InputLabel id="selectbox-label"></InputLabel>
        <Select
            labelId="selectbox-label"
            id="select-box"
            value={type}
            label="user-account"
            onChange={handleChange}           
        >       
        {
            usertypes?.map((type) => (
                <MenuItem 
                id="menu-item"
                key={type} 
                value={type}
                style={{ textTransform: 'capitalize' }}
                >{type} Account</MenuItem>           
            ))
        }
        </Select>
        </FormControl>
    </Box>
    </UserSelectBoxStyle>
  );
};

export default UserSelectBox;
