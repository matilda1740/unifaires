import React from 'react'
import styled from 'styled-components';

export const FormSectionDividerStyle = styled.div`
    width: 100%;
    height: 40px; 
    text-align: left;
    display: flex;
    align-items: center;
    margin: 20px 0 10px 0;
    p{
        color: rgba(173, 168, 190, 1);
        font-weight: 500;
    }
`;


export default function FormSectionDivider(props) {
    const { content, className } = props;

  return (
    <FormSectionDividerStyle className={className}>
        <p>{content}</p>
    </FormSectionDividerStyle>
  )
}
