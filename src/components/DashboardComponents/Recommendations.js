import Text from 'components/Layout/Text';
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
  flex-direction: column;
  padding: 24px 12px;
  border-radius: 16px;
  background: #FFFFFF;
  box-shadow: -2px -2px 10px rgba(242, 242, 242, 0.25), 2px 4px 10px rgba(247, 247, 247, 0.02);
  /* FULL */
  width: 100%;
  height: 200px;
    .top_div{
      width: 100%;
      height: 100%;
  display: flex;

  .image_div{
    height: 100%;
    margin-right: 2.5%;
    border-radius: 8px;
    img {
      object-fit: contain;
      width: 100%;
      height: 95%;
border-radius: 8px;
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
  }
}


    .credits_div{
      width: 100%;
      display: flex;
      align-items: center;
      /* margin-top: 20px; */
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
  
  &.full_length {

  }
  &.half_length {
    
  }
  @media screen and (max-width: 480px) {
    .top_div {height: 70%; }
    .image_div { height: fit-content;}
    .details_div h6 { font-size: 14px; }
    .details_div p { font-size: 12px; }
    .top_div .details_div { width: 60%;}
    .credits_div{ 
      height: 30%;  
      p{ font-size: 10px;}
      /* align-items: flex-end; */
    }
    :nth-child(n+1){
      margin-right: 20px;
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
      <div className="top_div">
        <div className="image_div"><img src={author.profile?.src} alt=""/></div>
        <div className="details_div">
          <h6>{title}</h6>
          <Text as={"p"} content={preview}/>
        </div>
      </div>

      <div className="credits_div">
        <img src={author.profile?.src} alt=""/>
        <p>by {author.name}</p>
      </div>        
    </ArticlesCardStyle>
  )
}