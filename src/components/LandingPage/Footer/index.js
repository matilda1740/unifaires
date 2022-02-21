import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Link from "next/link";
import NextImage from "common/components/NextImage";

// Icons
import footershap from "../../../public/images/shape/shape-bg.png";
import footershape_2 from "../../../public/images/shape/shape1.png";
import lang from "../../../public/images/home-two/lang.svg";
import globe from "../../../public/images/home-two/glob.svg";

const Text = styled.p`
  font-size: 16px;
  color: #ffffff !important;
`;
const Logo = styled(Text)`
  font-weight: 500;
  font-size: 34px;
`;
const BorderLine = styled.div`
  border-bottom: 2px solid white;
  margin-top: 20px;
  opacity: 0.21;
`;

const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BottomWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;

  p {
    font-weight: bold;
    font-size: 15px;
    color: #ffffff !important;
    text-transform: capitalize;
    margin: 0;
    cursor: pointer;
  }
  img {
    cursor: pointer;
  }
  .glob__svg {
    width: 26px;
    cursor: pointer;
  }
`;
const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeftBottomContainer = styled.div`
  margin-top: 30px;
`;
const RightBottomContainer = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Footer = () => {
  return (
    <footer className="footer-area pt-100 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-8">
            <div className="footer-widget">
              <div className="footer-logo">
                <Link href="/">
                  <a>
                    <Logo>Unifaires</Logo>
                  </a>
                </Link>
              </div>
              <div className="newsletter-area">
                <Text>
                  Unifaires GmbH, Stormstraße 17 <br /> 50997 Cologne <br />{" "}
                  Phone: +49 (0) <br /> 5241-80-0 info@unifaires.com
                </Text>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-sm-4">
            <div className="footer-widget ps-5">
              <h3>Platform</h3>
              <ul className="footer-list">
                <li>
                  <Link href="/discover-1">
                    <a>Jobs</a>
                  </Link>
                </li>
                <li>
                  <Link href="/discover-1">
                    <a>Education</a>
                  </Link>
                </li>
                <li>
                  <Link href="/discover-1">
                    <a>Funding</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-sm-4">
            <div className="footer-widget ps-5">
              <h3>Use Cases</h3>
              <ul className="footer-list">
                <li>
                  <Link href="/authors">
                    <a>For Students</a>
                  </Link>
                </li>
                <li>
                  <Link href="/collection">
                    <a>For Universities</a>
                  </Link>
                </li>
                <li>
                  <Link href="/author-profile">
                    <a>For Recruiters</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-sm-4">
            <div className="footer-widget ps-5">
              <h3>Company</h3>
              <ul className="footer-list">
                <li>
                  <Link href="/help-center">
                    <a>About Us</a>
                  </Link>
                </li>
                <li>
                  <Link href="/auction">
                    <a>Our Services</a>
                  </Link>
                </li>

                <li>
                  <Link href="/item-details">
                    <a>Our Pricing</a>
                  </Link>
                </li>

                <li>
                  <Link href="/activity">
                    <a>News</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-sm-4">
            <div className="footer-widget ps-5">
              <h3>support</h3>
              <ul className="footer-list">
                <li>
                  <Link href="/about">
                    <a>Contact</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a>Help Center</a>
                  </Link>
                </li>

                <li>
                  <Link href="/blog-1">
                    <a>Sitemap</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <TopWrapper className="container">
        <LeftContainer>
          <NextImage src={globe} className="glob__svg" alt="" />
          <p>English</p>
          <NextImage src={lang} alt="" />
        </LeftContainer>
        {/* Right section */}
        <RightContainer>
          <div className="copy-right-social">
            <ul className="social-link">
              <li>
                <a href="https://www.facebook.com/">
                  <i className="ri-facebook-fill"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <i className="ri-instagram-fill"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/">
                  <i className="ri-twitter-fill"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/">
                  <i className="ri-linkedin-fill"></i>
                </a>
              </li>
            </ul>
          </div>
        </RightContainer>
      </TopWrapper>
      <BorderLine className="container" />

      <BottomWrapper className="container">
        <LeftBottomContainer>
          <div className="copy-right-text">
            <p>Copyright © 2021-2022 Unifaires GmbH. All Rights Reserved</p>
          </div>
        </LeftBottomContainer>
        <RightBottomContainer>
          <div className="copy-right-text ">
            <ul className="copy-right-list">
              <li>
                <Link href="/terms-condition">
                  <a>Terms & Conditions</a>
                </Link>
              </li>

              <li>
                <Link href="/privacy-policy">
                  <a>Privacy Policy</a>
                </Link>
              </li>
            </ul>
          </div>
        </RightBottomContainer>
      </BottomWrapper>
      <div className="footer-shape">
        <div className="footer-shape1">
          <NextImage src={footershap} alt="Images" />
        </div>

        <div className="footer-shape2">
          <NextImage src={footershape_2} alt="Images" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
