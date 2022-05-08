import React from 'react'
import styled from 'styled-components';


const FilterDropDownStyle = styled.div`

    /* To place div over parent div */
    position: absolute;

    /* SHOW DROPDOWN */
    &.show_dropdown {
        display: flex;
    }
    &.hide_dropdown {
        display: none
    }

    /* Global Styles */
    &.filter {
        flex-direction: column;
        align-items: flex-start;
        min-width: 97px;
        width: fit-content;
        height: fit-content;
        padding: 0px 0;

        background: #DCDCDC;
        border-radius: 8px;
        margin-left: 684px;
        color: #12355B;
        ul {
            width: 100%;
            height: 100%;

            li {
                width: 100%;
                height: 39px;
                padding: 6px 12px;
                transition: all 0.3s ease-in-out;

                :hover { 
                    cursor: pointer; 
                    background-color: rgba( 255, 255, 255, 0.9)
                }
            }
        }
    }
    &.courses{
        margin-left: 695px;
    }
    &.jobs{
        margin-left: 700px;
    }
    @media screen and (max-width: 480px) {
        &.courses, &.jobs { margin-left: 150px }
    }
`;


export default function FilterDropDownComponent({data, variant}) {

  return (
    <FilterDropDownStyle className={`${variant}`}>
        <ul>
            {
                data?.map((item) => (
                    <li>{item}</li>
                ))
            }
        </ul>
    </FilterDropDownStyle>
  )
}
