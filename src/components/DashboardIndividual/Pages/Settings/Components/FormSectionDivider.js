import { AddOutlined } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components';

export const FormSectionDividerStyle = styled.div`
    width: 100%;
    height: 40px; 
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0 10px 0;
    p{
        color: rgba(173, 168, 190, 1);
        font-weight: 500;
    }
    .add_div{
      :hover{ 
        cursor:pointer;
        transform: scale(1.02);
      }

      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
      transition: all 0.3s ease-in-out;
    }
    .add_div.small_wh{
        width: 30px;
        height: 30px;
        border-radius: 6px;
      }
    .add_div.primary {
        background-color: rgba(88, 50, 218, 1);
        svg { color: #fff; }
      }
`;


export default function FormSectionDivider(props) {
  const { content, className, handleClick, addBool, variant, size} = props;

  return (
    <FormSectionDividerStyle className={className}>
        <p>{content}</p>
        { addBool === true &&
        <div onClick={handleClick} className={`add_div ${variant + " " + size}`}>
          <AddOutlined />
        </div>
        }
    </FormSectionDividerStyle>
  )
}
