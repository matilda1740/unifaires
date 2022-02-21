import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const SectionWrapper = styled.section`
  padding: 75px 0;
  overflow: hidden;
  background-color: linear-gradient(0deg, rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75)), linear-gradient(141.54deg, #D4FAEA 7.01%, #B79FD4 96.64%);
    .slogan{
        color: #5832DA !important;
      text-transform: capitalize !important;
      letter-spacing: 0 !important;
      font-weight: 400 !important;
      font-size: 30px !important;
      line-height: 125% !important;
      font-family: 'Maison Neue';
  }
  @media only screen and (max-width: 1366px) {
    padding: 60px 0;
  }
  @media only screen and (max-width: 667px) {
    padding: 45px 0;
  }
`;

export const CarouselWrapper = styled.div`
  margin-top: -30px;
  margin-right: -33px;
  margin-bottom: -50px;
  padding: 0 90px ;

  .glide__slide {
    padding-top: 30px;
    padding-right: 33px;
    padding-bottom: 50px;
    margin-right:20px !important;

    width: 550px !important;
  }

  .review-card {
    padding: 37px 40px 40px;
    width: 473px;
    height: 364px;
    background-color:rgba(88, 50, 218, 0.05);
    border-radius: 24px;
    transition: all 0.3s ease;

    h3 {
      color: ${themeGet('colors.quoteText', '#343D48')};
      font-size: 16px;
      line-height: 33px;
      font-weight: 700;
      margin-bottom: 10px;
    }

    p {
      color: ${themeGet('colors.quoteText', '#343D48')};
      font-size: 18px;
      line-height: 32px;
      font-weight: 300;
      @media only screen and (max-width: 667px) {
        font-size: 16px;
        line-height: 30px;
      }
    }
       .reviewer-info p {
      color: ${themeGet('colors.quoteText', '#343D48')};
      font-weight: bold;
      font-size: 24px;
      line-height: 150%;
      margin-bottom: 0px;
    }

    .review-card-header{
      width: 100%;
      display: flex;
      justify-content:space-between;
      align-items: center;

      .image {
        flex-shrink: 0;
        img {
          width: 100px;
          height: 100px;          
          border-radius: 50%;
          object-fit: cover;
          box-shadow: 0 6px 30px rgba(39, 79, 117, 0.2);
        }      
      }
      .reviewer-info{
        display: flex;
        flex-direction: column;
        align-items: flex-end;

      }
   }
   .review-card-content{
     margin-top: 30px;
     h4{
      color: #5832DA;
      margin-bottom: 5px;
font-weight: bold;
font-size: 28px;
     }
     h5 {
      color: rgba(18, 53, 91, 1);
      margin-bottom: 10px;

     }
     p{
       font-size: 15px;
       color: rgba(45, 45, 45, 0.9);
line-height: 150%;
     }
   }
    .rating {
      flex-shrink: 0;
      @media only screen and (max-width: 480px) {
        margin-top: 2px;
      }
      i {
        margin-right: 2px;
        &:last-child {
          margin-right: 0;
        }
        @media only screen and (max-width: 480px) {
          svg {
            width: 14px;
            height: auto;
          }
        }
      }
      .star {
        color: #12355B;
      }
      .star-o {
        color: rgba(18, 53, 91, 0.2);
      }
    }
  }

  .glide__controls {
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    > div {
      position: absolute;
      top: calc(50% - 70px / 2);
      &.glide__prev--area {
        left: -24px;
        @media only screen and (max-width: 480px) {
          left: 12px;
        }
      }
      &.glide__next--area {
        right: 8px;
        @media only screen and (max-width: 480px) {
          right: 46px;
        }
      }
      .reusecore__button {
        &:hover {
          background-color: ${themeGet('colors.primaryHover', '#3C74FF')};
        }
      }
    }
  }

  .glide {
    &:hover {
      .glide__controls {
        opacity: 1;
        visibility: visible;
      }
    }
  }
`;

export default SectionWrapper;
