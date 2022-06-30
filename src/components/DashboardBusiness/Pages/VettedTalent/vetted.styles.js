import styled from 'styled-components'

export const VettedProfileWrapper = styled.section`

    display: flex; 
    flex-flow: row wrap;
    padding: 20px;
    align-items: center;
    height: 800px;
    overflow-y: scroll;
::-webkit-scrollbar{ display: none; }


    /* RANDOM COLORS */
        .tag_div:nth-of-type(1) { background: rgba(88, 50, 218, 0.9);}
        .tag_div:nth-of-type(2n+0) { background: #7DBF10;}
        .tag_div:nth-of-type(3n+0) { background: #12355B;}
        .tag_div:nth-of-type(4n+0) { background: #FF0C3E;}
        .tag_div:nth-of-type(5n+0) { background: #eed202;}



`;
export const VettedProfileCard = styled.div`
    position: relative;
    border-radius: 16px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0);
    width: 220px;
    height: 250px; 
    margin: 0 20px 20px 0;
    border: 1px solid rgba(0, 0, 0,0.2);

    :hover { cursor: pointer}

    .image_container {
        width: 100%;
        height: 50%;
        img {
            object-fit: fill;
            width: 100%;
            height: 100%;
            border-radius: 16px;
        }
    }
    .tag_div {
        min-width: 100px;
        width: fit-content;
        padding: 4px 12px;
        height: 20px;
        
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px 0 0 0;
        border-radius: 16px;
        position: absolute;
        right: 4px;
        p{
            color: #fff;
        }

    }
    .details_container {
        width: 100%;
        height: 50%;
        padding: 12px;
        *{
            margin: 5px 0;
            color: #12355B;

        }

        h5 {
            font-size: 16px;
        }
        p{ font-size: 12px;}
        h6 {
            font-size: 14px;
        }
    }

 
`;
