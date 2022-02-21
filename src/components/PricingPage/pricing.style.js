import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const PageWrapper = styled.section`
  padding: 75px 0;
    font-family: 'Lato', sans-serif;
  background-color:rgba(127, 17, 224, 0.05);
  /* margin-top:70px; */
  @media only screen and (max-width: 1366px) {
    padding: 60px 0;
  }
  @media only screen and (max-width: 667px) {
    padding: 45px 0;
  }
  .pricing_slider_div{
      width: 100%;
      margin: 20px 75px;
      height: 50px;
  }


`;

const SectionWrapper = styled.section`
      .pricing_title{
    font-size: 40px;
    color: #2D2D2D;
  }
  .slogan{
        color: #5832DA;
      text-transform: capitalize;
      letter-spacing: 0;
      font-weight: 400;
      font-size: 30px;
      line-height: 125%;
  }
      .pricing_subtitle{
      /* line-height: 45px;  */
      font-size: 20px;
      line-height: 150%;      
        text-align: center;
        padding-top: 20px ;
        color: #12355B;
    }
  .pricing_slider_div div  div  span {
      height: 8px;
      /* background-color: #5832DA ; */
border-radius: 60px;
  }
`;
export const PricingArea = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  /* background-color: #ffffff; */
  @media only screen and (max-width: 667px) {
    overflow: hidden;
    margin-bottom: -40px;
    width: calc(100% + 60px);
    margin-left: -30px;
  }
  @media only screen and (max-width: 480px) {
    width: calc(100% + 40px);
    margin-left: -20px;
  }
`;
export const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 51px;
  @media only screen and (max-width: 667px) {
    padding-top: 50px;
    padding-bottom: 80px;
    margin-bottom: -40px;
    overflow-x: scroll;
    overflow-y: hidden;
  }

/* .leuERP */
`;
export const PricingSectionHeader = styled.section`
    width: 100%;
    height: 375px;
    
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background: linear-gradient(to right, rgba(127, 17, 224, 0.05)  66.666667%, rgba(127, 17, 224, 0.05) 33.333333%), url('/Group.svg');
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  max-width: 332px;
  padding: 6px;
  height: 60px;
  margin: 35px auto 0px auto;
  border-radius: 200px;
  background-color:rgba(127, 17, 224, 0.05);
  
  button {
    height: 50px;
    border: 0;
    padding: 10px 26px;
    border-radius: 200px;
    color: #5832DA;
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
    background-color: transparent;
    cursor: pointer;
    /* width: 100%; */
    @media only screen and (max-width: 480px) {
      font-size: 15px;
    }

    &.active {
      color: ${themeGet('colors.headingColor', '#5832DA')};
      background-color: ${themeGet('colors.white', '#ffffff')};
      box-shadow: 0 3px 4px
        ${themeGet('colors.shadow', 'rgba(38, 78, 118, 0.1)')};
    }
  }
`;

export const PricingCard = styled.div`
  width: calc(100% / 3 - 25px);
  max-width: 370px;
  padding: 20px;
  border-radius: 15px;
  /* box-shadow: 0 6px 50px ${themeGet('colors.shadow', 'rgba(38, 78, 118, 0.1)')}; */
  position: relative;
  background-color:#ffffff;
    box-shadow: 0px 10px 40px -5px rgba(74, 42, 185, 0.12);
  @media only screen and (max-width: 1366px) {
    width: calc(100% / 3 - 20px);
  }
  @media only screen and (max-width: 991px) {
    width: calc(100% / 2 - 15px);
  }
  @media only screen and (max-width: 667px) {
    width: calc(80% - 30px);
    flex-shrink: 0;
    margin-right: 30px;
  }
  @media only screen and (max-width: 480px) {
    width: calc(96% - 25px);
    margin-right: 20px;
  }
  @media only screen and (max-width: 320px) {
    width: 100%;
    margin-right: 0;
  }
:nth-of-type(even){
    background-color: #5832DA ;
    color: rgba(223, 223, 223, 0.9) !important;
    margin-top: -75px;
    margin-bottom: 50px;

}
.card_header, .card_price_div{
    background-color: transparent;
}
:nth-of-type(even) .card_header h3,  :nth-of-type(even) .card_header p, :nth-of-type(even) .card_header button,  :nth-of-type(even) .card_price_div span, :nth-of-type(even) .card_price_div strong, :nth-of-type(even) .card_price_div .trail a{
    color: #ffffff !important;

}
/* CARD 2 */
:nth-of-type(even) .card-body ul li{
    color: rgba(223, 223, 223, 0.9) !important;
}
:nth-of-type(even) .card_header button{
  background-color:rgba(255, 255, 255, 0.1);
}
/* CHECKMARK Color CARD 1 AND 3 */
:nth-of-type(odd) .card-body ul li i  {
    color: #B8BCCA;
}
 :nth-of-type(even) .card-body ul li i {
color: rgba(255, 255, 255, 0.4);
 }

 .tag{
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 332px;
     background-color: rgba(254, 185, 95, 0.1);
     color: #FEB95F;
     height: 40px;
     width: 100%;
    border: 0;
    padding: 5px 26px;
    border-radius: 200px;
    text-transform: uppercase;
    font-size: 12px;
line-height: 150%;
 }

/* .tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 109px;
    height: 30px;
    position: absolute;
    top: -10px;
    left: 37px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 700;
    text-transform: capitalize;
    /* background-color: rgba(127, 17, 224, 0.05);  */
    /* background-color: rgba(254, 185, 95, 0.99);  */
    /* .tag * {
      padding: 0 2.5px;
    }
    .card-body ul li i > img {
      margin-right: 6px;
    }
  } */

  .card_header {
    padding: 17px 20px;
    /* margin-bottom: 20px; */
    @media only screen and (max-width: 480px) {
      padding: 15px 10px 10px;
    }
    h3 {
      color: ${themeGet('colors.headingColor', '#0F2137')};
      font-size: 22px;
      line-height: 26px;
      font-weight: 700;
      margin-bottom: 8px;
    }
    p {
      color: ${themeGet('colors.textColor', 'rgba(52, 61, 72, 0.8)')};
      font-size: 15px;
      margin: 0;
    }
    .price_card_btn{
      width: 100%;
    padding: 15px 26px;
  border-radius: 200px;
  margin-top: 20px ;
  background-color:rgba(127, 17, 224, 0.1);
  color: #5832DA;
    }
  }

  .card-body {
    padding: 0 20px;
    margin-bottom: 25px;
    @media only screen and (max-width: 480px) {
      padding: 0 10px;
      margin-bottom: 30px;
    }
    ul {
      li {
        color: ${themeGet('colors.quoteText', '#343D48')};
        font-size: 16px;
        margin-bottom: 21px;
        i {
          color: ${themeGet('colors.primary', '#2563FF')};
          margin-right: 8px;
          svg {
            width: 20px;
            height: auto;
          }
        }
      }
    }
  }

  .card_price_div {
    /* padding: 17px 30px; */
    /* border-top: 1px solid #f3f4f5; */
    height: 50px;
    padding: 0 0 0 20px; /* text-align: center; */
    margin: 5px 0px;
    
    @media only screen and (max-width: 480px) {
      padding: 30px 10px 20px;
    }
    p{
        display: flex;
        align-items: center;
        font-size: 24px;
    }
    p * {
        padding-right: 2.5px;
    }
    strong {
      display: block;
      color: ${themeGet('colors.textColor', 'rgba(52, 61, 72, 0.8)')};
      font-weight: 400;
      font-size: 16px;
      /* margin-bottom: 27px; */
    span {
        font-weight: 700;
        font-size: 24px;
        color: ${themeGet('colors.headingColor', '#0F2137')};
      }
    }
    span {
        font-weight: 600;
        color: rgba(18, 53, 91, 0.6);
    }
    .reusecore__button {
      border-radius: 15px;
      @media only screen and (max-width: 767px) {
        width: 100%;
      }
    }
    .trail {
      margin-top: 22px;
      a {
        color: rgba(37, 99, 255, 0.9);
        font-size: 15px;
        font-weight: 500;
      }
    }
  }
`;


export const PricingSliderSection = styled.div``;

export const SectionHeader = styled.header`
  max-width: 352px;
  width: 100%;
  margin: 0 auto 58px;
  text-align: center;
  @media only screen and (max-width: 991px) {
    margin-bottom: 50px;
  }
  h5 {
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;
    margin-bottom: 12px;
    letter-spacing: 1.5px;
    color: ${themeGet('colors.primary', '#5832DA')};
    text-transform: uppercase;
    @media only screen and (max-width: 991px) {
      font-size: 13px;
      margin-bottom: 10px;
    }
  }
  h2 {
    font-size: 30px;
    line-height: 36px;
    font-weight: 700;
    color: ${themeGet('colors.headingColor', '#0F2137')};
    margin: 0;
    letter-spacing: -1px;
    @media only screen and (max-width: 1366px) {
      font-size: 28px;
      letter-spacing: -0.7px;
    }
    @media only screen and (max-width: 991px) {
      font-size: 26px;
      line-height: 38px;
      letter-spacing: -0.5px;
    }
  }
`;
export default SectionWrapper;
