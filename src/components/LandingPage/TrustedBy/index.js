import React from "react";
import styled from "styled-components";

// Brands
import microsoft from "../../../public/images/microsoft.svg";
import coursera from "../../../public/images/coursera.svg";
import tesla from "../../../public/images/tesla.svg";
import emory from "../../../public/images/emory.svg";
import ibm from "../../../public/images/ibm.svg";
import NextImage from "common/components/NextImage";

const ContainerStyle = styled.div`
  background: white;
  min-height: 312px;
  background: rgba(184, 188, 202, 0.1);
`;
const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
`;
const Icon = styled.img``;
const Brands = styled.img`
  width: 150px;
  @media (max-width: 1024px) {
    width: 100px;
  }
  @media (max-width: 800px) {
    width: 100px;
  }
`;
const IbmIcon = styled.img`
  @media (max-width: 1024px) {
    width: 100px;
  }
  @media (max-width: 800px) {
    width: 50px;
  }
`;
const Heading = styled.p`
  display: flex;
  align-items: center;
  opacity: 0.9;
  font-size: 32px;
  line-height: 125%;
  color: #c07654;
`;
const Text = styled.p`
  display: flex;
  align-items: center;
  opacity: 0.9;
  font-size: 20px;
  color: #808080;
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  max-width: 384px;
  min-height: 300px;
  padding: 24px;
`;
const BoxHeader = styled.p`
  font-weight: bold;
  font-size: 20px;
  display: flex;
  align-items: center;
  color: rgba(88, 50, 218, 1);
`;
const BrandSection = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex: 1;
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
  }
`;
const TrustedBy = () => {
  return (
    <>
      <ContainerStyle>
        <FlexContainer className="container">
          <InnerWrapper>
            <Heading>Trusted by</Heading>
            <Text>
              Top brands across <br /> diverse industries like:
            </Text>
          </InnerWrapper>
          <BrandSection>
            <NextImage src={microsoft} alt="image" />
            <NextImage src={coursera} alt="image" />
            <NextImage src={tesla} alt="image" />
            <NextImage src={emory} alt="image" />
            <NextImage src={ibm} alt="image" />
          </BrandSection>
        </FlexContainer>
      </ContainerStyle>
      {/* <Container>
        <Content>
          <img src={illustration?.src} alt="shape" />
          <img src={illustration2?.src} alt="shape" />
          <ContentWrap>
            <Heading
              as="h3"
              content="Do you have idea to make better? Contact our support team"
            />
            <ButtonWrap>
              <Button title="Contact Us" />
            </ButtonWrap>
          </ContentWrap>
        </Content>
      </Container> */}
    </>
  );
};

export default TrustedBy;
