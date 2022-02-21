import React from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";
import Link from "next/link";

const ColoredText = styled.span``;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 800px;
  z-index: 3;
  @media screen and (max-width: 480px) {
    .banner-btn {
      margin-top: 50px;
    }
  }
`;

const Button = styled.button`
  font-weight: 600;
  display: inline-block;
  -webkit-box-align: center;
  -ms-flex-align: center;
  width: 308px;
  height: 60px;
  background: #ffffff;
  border-radius: 34px;
  color: #5832da;
  border: none;
  font-size: 20px;
  -webkit-transition: 0.5s;
  &:hover {
    background: #5832da;
    color: white;
    border: 1px solid white;
  }

  @media screen and (min-width: 480px) {
    margin-bottom: -100px;
  }
`;

const Banner = () => {
  return (
    <div className="banner-area-two">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="banner-content-two">
              <FlexContainer>
                <Fade up delay={100}>
                  <h1>
                    Find affordable <ColoredText>Learning</ColoredText>{" "}
                    Resources
                  </h1>
                </Fade>
                <div className="banner-btn">
                  <Fade left delay={200}>
                    <Link href="/contact">
                      <Button>Get in Touch</Button>
                    </Link>
                  </Fade>
                </div>
              </FlexContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
