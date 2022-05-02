import React from 'react'
import styled from 'styled-components';

export const RecommendationSectionWrapper = styled.section`
    background: #FAFBFC;
    border-radius: 16px;
    padding: 10px;

    width: 100%;
    height: 300px;
    margin-bottom: 40px; 
    display:flex;
    flex-flow: column wrap;
    justify-content: center;
    overflow-x:scroll;

`;

export const BooksCardStyle = styled.div`
    width: 140px;
    min-height: 280px;
    margin-right: 30px;

    img {
        width: 100%;
        height: 70%;
        margin-top: 20px;

    }
    .details {
      width: 100%;
      margin: 10px 0;
    h6 { 
      font-size: 14px;
      margin-bottom: 2px;
    }
    p{
      font-size: 12px;
        
    }

    }
`;

export const ArticlesCardStyle = styled.div`

  display: flex;
  padding: 24px 12px;
  border-radius: 16px;
  background: #FFFFFF;
  box-shadow: -2px -2px 10px rgba(242, 242, 242, 0.25), 2px 4px 10px rgba(247, 247, 247, 0.02);
  /* FULL */
  width: 100%;
  height: 200px;
    
  .image_div{
    width: 47.5%;
    height: 100%;
    margin-right: 2.5%;
    img {
      object-fit: contain;
      width: 100%;
      height: 95%;
      border-radius: 2px;
    }
  }
  .details_div{
    display: flex;
    flex-direction: column;
    h6, p{
      color: #12355B !important;
    }
    p{ 
      margin-left: 0px; 
    }
    .credits_div{
      width: 100%;
      display: flex;
      align-items: center;
      margin-top: 20px;
      img{
        width: 40px;
        height: 40px;
        margin-right: 5px;
        border-radius: 50%;
      }
      p{
        color: #ADA8BE !important;
        font-weight: 500;
      }
    }
  }

  &.full_length {

  }
  &.half_length {
    
  }
`;

export const BooksCard = ({ url, title, author}) => {

  return (
    <BooksCardStyle>
      <img src={url.src} alt="" />
      <div className="details">
        <h6>{title}</h6>
        <p>by {author}</p>
      </div>
    </BooksCardStyle>
  )
}

export const ArticlesCard = ({ thumbnail, title, preview, author }) => {

  return (
    <ArticlesCardStyle>
        <div className="image_div"><img src={author.profile?.src} alt=""/></div>
        <div className="details_div">
          <h6>{title}</h6>
          <p>{preview}</p>
          <div className="credits_div">
            <img src={author.profile?.src} alt=""/>
            <p>by {author.name}</p>
          </div>
        </div>
    </ArticlesCardStyle>
  )
}