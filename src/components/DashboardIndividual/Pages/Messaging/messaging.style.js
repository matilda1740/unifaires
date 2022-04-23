import styled from 'styled-components';

export const MessagingSectionWrapper = styled.section`
    background: rgba(245, 247, 249, 0.5);
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 70%;   
    /* height: 100%; */
`;

export const ColumnConversation = styled.div`
    background: rgba(255, 255, 255, 1);

    display: flex;
    flex-direction: column;
    width: 35%;
    height: 100%;
    margin-right: 4px;
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
    /* padding: 12px 24px; */

`;


export const ColumnChat = styled.div`
    background: rgba(255, 255, 255, 1);
    display: flex;
    flex-direction: column;
    width: 65%;
    height: 100%;
`;

export const ChatForm = styled.form`

    width: 100%;
    margin: 20px 0;
    padding: 0 24px;
    display: flex;
    /* align-self: flex-end; */
    *{
        font-weight: 300;

    }
    input {
        background: rgba(255, 255, 255, 0.1);
        color: rgba(191, 191, 191, 1);
        outline: none;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 16px;
        height: 40px;
        width: 95%;
        position: relative;
       
    }
    input[type="text"]::placeholder {
            padding-left: 10px;
        }

    .form_actions_div {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 100px;
        height: 100%;
        margin: 0px 2% 0px -23.5%;
        * {
            margin: 0 4px;
        }
        img {
            width: 15px;
            height: 15px;
            :hover {
                cursor: pointer;
            }
        }
        .send_div {
            background: #5832DA;
            border-radius: 6px;
            width: 20px;
            height: 20px;
            img {
            margin-left: 2px;

            }
        }
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