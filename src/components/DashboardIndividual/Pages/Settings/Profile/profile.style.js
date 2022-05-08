import styled from 'styled-components';

export const SkillsWrapper = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row wrap;
    margin: 5px 0 10px 0;

    @media screen and (max-width:480px){
        flex-flow: column wrap;
        justify-content: flex-start;
        height: 50px;
        overflow-x: scroll;
        margin: -10px 0 10px 0;
        ::-webkit-scrollbar{
            display: none; /* This works */
        }
    }
`;

export const SkillsButton = styled.div`
    background: #EEEAFB;
    border-radius: 36px;
    height: 30px;
    width: fit-content;
    max-width: 200px;
    /* min-width: 100px; */
    display: flex;
    align-items: center;
    margin: 10px;
    font-weight: 500;
    padding: 5px 10px;
    /* flex-flow: row wrap; */
    transition: all 0.3s ease-in-out;
    :hover { 
        cursor: pointer;
        transform: scale(1.02);
    }
    p{
        color: #5832DA;
        font-size: 12px;
        margin: 0 5px 0 0;
        /* line-height: 150%; */
    }
    img {
        width: 14px;
        height: 14px;
    }

`;

export const ButtonWrapper = styled.div`
width: 100%
display: flex;
margin: 30px 0 20px 0;

`;

export const Button = styled.button`

    border-radius: 8px !important;
    width: 150px !important;
    height: 40px !important;
    background: transparent !important;
    margin: 0 !important;
    &.purple {
        border: 1px solid #5832DA;
        color: #5832DA;
    }
    &.beginning {
        align-self: flex-start;
    }
    &.end {
        align-self: flex-end;
    }
`;

