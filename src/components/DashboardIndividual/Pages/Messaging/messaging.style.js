import styled from 'styled-components';

export const MessagingSectionWrapper = styled.section`
    background: rgba(245, 247, 249, 0.5);
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 70%;   

    /* SLIDING LEFT AND RIGHT */
    transition: all 0.3s ease-in-out;
    .not_visible{
        /* left: -480px; */
    }
    @keyframes slide_left {
        0%{
            left: 0;
            visibility:visible;
        }
        50%{
            left: -50%;
            visibility:hidden;
        }
        100%{
            left: -100%;
            visibility:hidden;
        }
    }
    /* @keyframes slide_right {
        0%{
            left: 0;
            visibility:visible;
        }
        50%{
            left: -50%;
            visibility:hidden;
        }
        100%{
            left: -100%;
            visibility:hidden;
        }
    } */
    @media screen and (max-width: 480px) {
        height: 100%;
        .column1_settings { 
            display: none;
        }
        .column2_settings {
            width: 100%;
        }

        &.messaging_section{
            flex-direction: column;
        }
    }
`;

export const ColumnConversation = styled.div`
    background: rgba(255, 255, 255, 1);

    display: flex;
    flex-direction: column;
    width: 35%;
    height: 100%;
    margin-right: 4px;
    &.column1_settings{
        :first-child{
            padding: 30px 10px 0px 10px;
            margin-bottom: 0;
        }
    }
    @media screen and (max-width: 480px) {
        width: 100%;
    }
`;

export const ConversationHeading = styled.section`
    background: rgba(247, 245, 253, 1);
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100px;
    padding: 12px 24px;

    .top_row_div {
        width: 100%;
        height: 30px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        h6 {
            color: #12355B;
            margin: 5px 0 0 5%;
        }
        .search_icon{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 30px;
            height: 30px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            border: 1px solid rgba(0, 0, 0, 0.1);    
        }
        .search_icon:hover {
            cursor: pointer;
        }
    }

    button {
        /* margin-top: 10px; */
        margin: 10px 5% 0 5%;
        height: 40px;
        width: 90%;
    }

`;

export const ConversationLinks = styled.section`
    display: flex;
    width: calc(100% - 20px);
    height: 70px;
    border-bottom: 2px solid #EAEAEA;
    margin: 0px 10px 10px 10px;

    justify-content: space-between;
    transition: all 0.3s ease-in-out;

    button {
        width: 47.5%;
        height: 80%;
        color: rgba(184, 188, 202, 1);
        background: transparent;
        border: transparent;
        outline: none;
        font-size: 13px;
        margin: 15px 0 2px 0;
        text-align: left;

    }
    .active {
        color: rgba(18, 53, 91, 1);
        border-radius: 8px 8px 0px 0px;
        border-bottom: 4px solid rgba(18, 53, 91, 1);


    }
    
`;

// BOTH CONVERSATION AND CHAT SECTIONS
export const BoxWrapper = styled.section`
    background: rgba(255, 255, 255, 1);
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-top: 10px;
    overflow-y: scroll;
    ::-webkit-scrollbar { display: none}
    /* padding: 12px 24px; */

`;


export const ColumnChat = styled.div`
    background: rgba(255, 255, 255, 1);
    display: flex;
    flex-direction: column;
    width: 65%;
    height: 100%;
    @media screen and (max-width: 480px) {
        /* display: none; */
        width: 100%;
        /* Temporary */
        /* margin-top: -850px; */
        height: 1000px;
    }
`;



export const DaySectionDivider = styled.div`
    margin: 30px 5%;
    display: flex;
    flex-direction: row;
    text-align: center;
    height: 20px;
    color: rgba(173, 168, 190, 0.5);


    &:before, &:after{
        content: "";
        flex: 1 1;
        border-bottom: 1px solid rgba(173, 168, 190, 0.5);
        margin: auto;
    }

    p{
        font-weight: 300;
        color: rgba(173, 168, 190, 1);
        margin: 0 10px;
    }
`;

// export const EmptyState = styled.div`

//     @media screen and (max-width: 480px) {
//     }
// `;
