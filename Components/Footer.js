import React from "react";
import styled from "styled-components";
import ReactCountryFlag from "react-country-flag";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaSnapchat,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <Footercontainer>
      <FooterWrap>
        <FooterLinkItems>
          <FooterLinkTitle>Contact </FooterLinkTitle>
          <RowContainer>
            <ColumnContainer>
              <RowContainer>
                <ReactCountryFlag
                  countryCode='AL'
                  svg
                  style={{
                    width: "2em",
                    height: "2em",
                  }}
                  title='ALB'
                />
                <h2>Shqipëria</h2>
              </RowContainer>
              <h2>+355123123123</h2>
            </ColumnContainer>
            <ColumnContainer>
              <RowContainer>
                <ReactCountryFlag
                  countryCode='XK'
                  svg
                  style={{
                    width: "2em",
                    height: "2em",
                  }}
                  title='KS'
                />
                <h2>Kosova</h2>
              </RowContainer>
              <h2>+38344334956</h2>
            </ColumnContainer>
            <ColumnContainer>
              <RowContainer>
                <ReactCountryFlag
                  countryCode='DE'
                  svg
                  style={{
                    width: "2em",
                    height: "2em",
                  }}
                  title='DE'
                />
                <h2>Germany</h2>
              </RowContainer>
              <h2>+491734608496</h2>
            </ColumnContainer>
            <ColumnContainer>
              <RowContainer>
                <ReactCountryFlag
                  countryCode='CH'
                  svg
                  style={{
                    width: "2em",
                    height: "2em",
                  }}
                  title='CH'
                />
                <h2>Switzerland</h2>
              </RowContainer>
              <h2>+41xxxxxxxxx</h2>
            </ColumnContainer>
            <ColumnContainer>
              <RowContainer>
                <ReactCountryFlag
                  countryCode='US'
                  svg
                  style={{
                    width: "2em",
                    height: "2em",
                  }}
                  title='US'
                />
                <h2>USA</h2>
              </RowContainer>
              <h2>+1212xxxxxxxxx</h2>
            </ColumnContainer>
          </RowContainer>
        </FooterLinkItems>

        <SocialMedia>
          <SocialMediaWrap>
            <WebsiteRights>
              ©{new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href='//www.facebook.com'
                target='_blank'
                aria-label='Facebook'
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href='//www.instagram.com'
                target='_blank'
                aria-label='Instagram'
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href='//www.snapchat.com'
                target='_blank'
                aria-label='Snapchat'
              >
                <FaSnapchat />
              </SocialIconLink>
              <SocialIconLink
                href='//www.youtube.com'
                target='_blank'
                aria-label='Youtube'
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href='//www.linkedin.com'
                target='_blank'
                aria-label='Linkedin'
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </Footercontainer>
  );
}

const Footercontainer = styled.div`
  background-color: #1a1a1a;
  width: 100%;
  height: fit-content;
`;

const FooterWrap = styled.div`
  padding: 48px 24 px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
`;

const ColumnContainer = styled.div`
  height: auto;
  width: auto;
  display: flex;
  margin: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    margin: 0px;
    font-size: 15px;
  }
`;
const RowContainer = styled.div`
  width: fit-content;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }

  h2 {
    margin: 0px;
    margin-left: 5px;
    font-size: 15px;
    @media screen and (max-width: 820px) {
      font-size: 10px;
    }
  }
`;

const FooterLinksContainer = styled.div`
  display: flex just;
  justify-content: center;
  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

const FooterLinkWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 820px) {
    flex-direction: column;
    display: none;
  }
`;

const FooterLinkItems = styled.div`
  display: flex;
  height: fit-content;
  flex-direction: column;
  align-items: center;

  width: 100%;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

const FooterLinkTitle = styled.h1`
  font-size: 20px;
  margin-bottom: 16px;
`;

const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;
export default Footer;
