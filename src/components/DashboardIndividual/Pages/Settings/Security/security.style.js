import styled from 'styled-components';

export const DeviceContainer = styled.section`
    border-radius: 24px;
    border: 1px solid #EEEAFB;
    display: flex;
    flex-direction: column;
    align-self: center;
    padding: 20px;
    width: 80%;
    height: 100%;
    margin-top: 20px;
    h6, p {
        margin-bottom: 4px;
    }
    p{
    color: #808080;
    font-size: 12px;
    }
`;

export const DeviceHeader = styled.div`
    width: 100%;
    height: 150px;
    .top_div{
        width: 100%;
        /* height: 100%; */
        height: 100px;
        display: flex;
        flex-direction: row;
        margin-bottom: 8px;
        align-items:center;
        img{
            object-fit: contain;
            width: 80%;
            height: 80%;
        }
        button {
            background: transparent;
            border: 1px solid #12355B;
            border-radius: 8px;
            height: 40px;
            color: #12355B;
            width: 400px;
            font-size: 14px;
            font-weight: 300;
        }
    }


    h6 {

    }

`;
