import React from "react";
import styled from "styled-components";

const ContainerStyle = styled.div`
  background: white;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(184, 188, 202, 0.1);
  border-radius: 24px;
  min-height: 300px;
  padding: 100px;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;
const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Heading = styled.p`
  font-size: 32px;
  color: #000000;
`;
const Text = styled.p`
  font-size: 16px;
  color: #12355b;
`;
const Button = styled.button`
  min-width: 220px;
  height: 48px;
  background: #5832da;
  border-radius: 8px;
  color: white;
  border: none;
`;

const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const SalesSection = () => {
  return (
    <ContainerStyle className="ptb-100">
      <FlexContainer className="container">
        <LeftWrapper>
          <Heading>Transform the way you hire</Heading>
          <Text>
            Leverage our network of verified talent to upscale your business
            growth
          </Text>
          <Button className="default-btn">Sign Up as a Business</Button>
        </LeftWrapper>
        <RightWrapper>
          <Heading>10x your career</Heading>
          <Text>Learn the skills needed for success in today’s world</Text>
          <Button className="default-btn">Sign Up as an Individual</Button>
        </RightWrapper>
      </FlexContainer>
    </ContainerStyle>
  );
};

export default SalesSection;
