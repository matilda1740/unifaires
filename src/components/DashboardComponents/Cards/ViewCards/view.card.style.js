import styled from 'styled-components';

export const ViewCardStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 16px;
    transition: all 0.3s ease-in-out;
    min-height: fit-content;
    &.courses{
        width: 260px;
        height: 430px;
    }
    &.funding{
        width: 256px;
        height:380px;
    }
    &.jobs { 
        width: 256px;
        height:400px;
        h6 { margin-bottom: 16px;}
        .price_p { margin: 10px 0 5px 0 !important;}
        .price_p span { color: #12355b; opacity: 0.5;}
    }
    :hover {
        cursor: pointer;
        transform: scale(1.01);
    }
    :nth-child(n+1) {
        margin-right: 22.5px;
    }
    :nth-child(n+4) {
        margin-top: 16px;
    }

    .image_container {
        /* height: 50%; */
        height: 80%;
        border-radius: 16px 16px 0px 0px;
        img {
        border-radius: 16px 16px 0px 0px;
        object-fit: fill;
        width: 100%;
        height: 100%;
        }
    }

`;

export const CardDetailsStyle = styled.div`
display: flex;
flex-direction: column;
background: #FFFFFF;
border: 1px solid #E9ECEF;
border-radius: 16px 16px 0px 0px;
width: 100%;
margin-top: -40px;
padding: 16px 12px 0 12px;
height: 57.5%;
/* * { margin: auto 0;} */

h6{ margin-bottom: 4px;}
p{ color: #888484; font-size: 13px; font-weight:300; margin: 0;}

.progressBar {
    margin: 2.5px 0 5px 0;
    background-color: rgba(18, 53, 91, 0.5);
    border-radius: 8px;
    span {
    background-color: rgba(18, 53, 91, 1);
    }
}

.location_div, .rating_div, .tags_bookmark_row {
display: flex;
align-items: center;
width: 100%;
margin: 5px 0;
}
.location_div{
    height: 18px;
    margin: 3px 0 1px 0;  
    p{color: #ADB5BD;}
    svg { color: #ADB5BD; font-size: 20px;margin: 0 0 0 -4px;}
}
.rating_div{
    p {color: #12355B; margin:0 4px 0 0; font-weight:500; }
    span{ margin-bottom: 1px;height: 20px; color: #12355B;}

    span{ span{ label{ display:block; margin-top: 2px;}}}

}
.price_p{ font-weight:500;color: #12355B;margin: 8px 0 0px 2px;}

&.funding, &.jobs {
    height: auto;
    .location_div{margin: 5px 0;  }

    .price_p{ font-weight:500;color: #12355B;margin: 2px 0 2px 2px;}

    .tags_bookmark_row {
    margin: -4px 0 0 -4px;
    }
    div.tags_bookmark_row:last-of-type{
    margin: auto 0 8px 0;
    height: 20px;
    }
}
&.jobs{ 
    padding: 0px 12px;
    margin: -40px 0 16px 0;
}
.tags_bookmark_row{margin-top: auto;}

.title_row {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.tags_bookmark_row, .title_row{  
    height: 40px;
    .tag{
        width: fit-content;
        min-width: 80px;
        padding: 0 5px;
        height: 28px;
        background: #EEEAFB;
        border-radius: 30px;
        margin-right: 8px;
        text-align: center;
        font-size: 13px;
        font-weight: 300;
        padding: 4px 8px;
        p{ color: #12355B;}
    }
    .primary {
    background: #4E27CD;
    p{color: #F8F9FA;}
    }
    .secondary {
        background: #EEEAFB;
        p{color: #5832DA;}
    }
    .granted {
    background: rgba(0, 200, 81, 0.1);
    p{color: #00C851;}
    }
    .waiting {
    background:rgba(23, 161, 250, 0.1);
   p{ color: #17A1FA;}
    }
    .rejected {
    background: rgba(227, 6, 19, 0.1);
    p{color: #E30613;}
    }
    .disabled {
        background: #F2F2F2;
        p{color: #888484;}
    }

    svg { 
        margin-left: auto;
    }
}
`;
