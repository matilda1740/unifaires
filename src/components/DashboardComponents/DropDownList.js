import React from 'react'
import styled from 'styled-components';


const DropDownStyle = styled.div`

    /* To place div over parent div */
    position: absolute;

    /* SHOW DROPDOWN */
    &.show_dropdown {
        display: flex;
    }
    &.hide_dropdown {
        display: none
    }
    &.funding {
        width: 140px;
        height: 78px;
        background: #fff;
        margin-top: 125px;
        margin-left: 650px;

        ul{
            background: #fff;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: #12355B;
            font-weight: 500;
            li {
                width: 100%;
                height: 39px;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 5px 0;
                transition: all 0.3s ease-in-out;
                :hover {
                background: rgba(247, 245, 253, 1);
                cursor: pointer;
                }
            }
        }
    }
    

`;


export default function DropDownList({data, variant}) {

  return (
    <DropDownStyle className={`${variant}`}>
        <ul>
            {
                data.map((item) => (
                    <li>{item}</li>
                ))
            }
        </ul>
    </DropDownStyle>
  )
}
