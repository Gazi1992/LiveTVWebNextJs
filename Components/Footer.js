import React from "react";
import styled from "styled-components";

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
        <FooterLinksContainer>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Watch</FooterLinkTitle>
              {/* <FooterLink to="/signin">Watch on TV</FooterLink>
              <FooterLink to="/signin">IOS App</FooterLink>
              <FooterLink to="/signin">Android App</FooterLink> */}
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>Top Genres</FooterLinkTitle>
              {/* <FooterLink to="/signin">Live Sports</FooterLink>
              <FooterLink to="/signin">News</FooterLink>
              <FooterLink to="/signin">Reality & Game Shows</FooterLink> */}
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              {/* <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
              <FooterLink to="/signin">Terms of Service</FooterLink> */}
            </FooterLinkItems>

            {/* <FooterLinkItems>
              <FooterLinkTitle>Country </FooterLinkTitle>
              <FooterLink to="/signin">
                <Country countryShort="AL" size="md" /> Albania
              </FooterLink>
              <FooterLink to="/signin">
                <Country countryShort="XK" size="md" /> Kosova
              </FooterLink>
              <FooterLink to="/signin">
                <Country countryShort="DE" size="md" /> Germany
              </FooterLink>
              <FooterLink to="/signin">
                <Country countryShort="CH" size="md" /> Switzerland
              </FooterLink>
              <FooterLink to="/signin">
                <Country countryShort="US" size="md" /> USA
              </FooterLink> 
            </FooterLinkItems>*/}
          </FooterLinkWrapper>
        </FooterLinksContainer>
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
  background-color: #282828;
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
  @media screen and (max-width: 820px) {
    flex-direction: row;
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
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
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
