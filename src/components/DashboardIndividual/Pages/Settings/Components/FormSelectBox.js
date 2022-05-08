import React from 'react'
import styled from 'styled-components';
// React-Select from MUI
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase'; //To Style the Component

export const FormSelectBoxStyle = styled.div`
    font-weight: 300;
    display: flex;
    flex-direction: column;
    width: 100%;
    label{
        color: rgba(18, 53, 91, 0.5);
        margin-bottom: 5px;
        
    }
    .MuiFormControl-root {
        margin: 0 ;
        .MuiInputBase-root{
            width: 99%;
        border-bottom: 1px solid rgba(18, 53, 91, 0.2);

        }
    }
    .MuiInput-root:before {
        border-bottom: 1px solid rgba(18, 53, 91, 0.2) !important;
    }
    .MuiInput-root:hover {
        border-bottom: 1px solid rgba(88, 50, 218, 1);

    }
    .MuiInput-root:after {
        border-bottom: 1px solid rgba(88, 50, 218, 1);
        color: rgba(88, 50, 218, 1);

    }
    .MuiInput-input:focus {
        background-color: rgba(255, 255,255, 1); 
            color: rgba(88, 50, 218, 1);
    }
`;

export default function FormSelectBox(props) {
    const { label, name, placeholder } = props;
    const [gender, setGender] = React.useState('');
    const handleChange = (event) => {
        setGender(event.target.value);
    };    

    const selectionItems = ["Female", "Male"]; 
    return (
    <FormSelectBoxStyle>
        <label>{label}</label>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={gender}
            onChange={handleChange}
            label={label}
        >
        {
            selectionItems.map( item => (
                <MenuItem value={item}>{item}</MenuItem>
            ))
        }
        </Select>
        </FormControl>
    </FormSelectBoxStyle>
  )
}
