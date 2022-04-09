import { useEffect, useState } from "react";
import styled from "styled-components";
import HeaderDropdown from "./HeaderDropdown";
import Image from "next/image";
import Button from "@material-ui/core/Button";
import { BiDevices } from "react-icons/bi";
import { useRouter } from "next/router";
import { FiAlignJustify } from "react-icons/fi";

import { Link as ScrollLink } from "react-scroll";

const Header = (props) => {
  const [hasScrolled, setHasScrolled] = useState(false);

  const router = useRouter();
  const onScroll = () => {
    if (window.scrollY > 200) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const [dropDownState, setdropDownState] = useState(false);
  const toggle = () => {
    setdropDownState(!dropDownState);
  };
  return (
    <Nav headerdown={hasScrolled}>
      <Logo></Logo>
      <NavMenu>
        <ScrollLink
          to='Kanalet'
          smooth={true}
          duration={500}
          offset={-80}
          spy={true}
        >
          <Image
            src={"/images/headerImages/series-icon.svg"}
            width='20px'
            height='20px'
          />
          <span>KANALET</span>
        </ScrollLink>
        <ScrollLink
          to='AddOns'
          smooth={true}
          duration={500}
          offset={-80}
          spy={true}
        >
          <Image
            src='/images/headerImages/watchlist-icon.svg'
            width='20px'
            height='20px'
          />
          <span>SPORTE</span>
        </ScrollLink>
        <ScrollLink
          to='Ofertat'
          smooth={true}
          duration={500}
          offset={-80}
          spy={true}
        >
          <Image
            src='/images/headerImages/movie-icon.svg'
            width='20px'
            height='20px'
          />
          <span>OFERTAT</span>
        </ScrollLink>
        <ScrollLink
          to='Pajisjet'
          smooth={true}
          duration={500}
          offset={-80}
          spy={true}
        >
          <BiDevices style={{ color: "white" }} />

          <span>PAJISJET</span>
        </ScrollLink>

        <ScrollLink
          to='About'
          smooth={true}
          duration={500}
          offset={-80}
          spy={true}
        >
          <Image
            src='/images/headerImages/home-icon.svg'
            width='20px'
            height='20px'
          />
          <span>PËR NE</span>
        </ScrollLink>
      </NavMenu>

      <PersonalContent>
        <ImageContainer onClick={toggle}>
          <FiAlignJustify
            style={{ background: "transparent", color: "white" }}
            size='30px'
          />
        </ImageContainer>
        <HeaderDropdown isOpen={dropDownState} toggle={toggle} />
      </PersonalContent>
    </Nav>
  );
};

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled(Button)`
  && {
    background-color: #3f9cf3;
    width: 200px;
    height: 48px;
    color: white;
    margin-right: 20px;
    &:hover {
      background-color: #0483ee;
    }

    @media screen and (max-width: 1000px) {
      width: 100px;
      margin-right: 0;
      align-self: center;
      justify-self: flex-start;
    }
  }
`;
const PersonalContent = styled.div`
  padding: 0;
  width: 15%;
  height: 100%;
  position: relative;
  cursor: pointer;
  user-select: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    color: #119bbd;
  }
  @media (min-width: 1000px) {
    display: none;
  }
  &:hover {
    color: #119bbd;
  }
`;
const ButtonContainer = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  @media screen and (max-width: 1000px) {
    display: none;
  }
  display: ${(p) => (p.hasScrolled === true ? "true" : "none")};
`;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background-color: ${(p) =>
    p.headerdown === true ? "#1a1a1a" : "transparent"};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
  user-select: none;
  @media (max-width: 1200px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

const Logo = styled.a`
  padding: 0;
  width: 60px;
  margin-top: 4px;
  max-height: 70px;
  background: transparent;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    background: black;
    width: 80%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  cursor: pointer;
  margin-right: auto;

  margin-left: 25px;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

const Login = styled(Button)`
  && {
    height: 48px;
    width: 100px;
    background-color: rgba(0, 0, 0, 0.3);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    color: white;
    display: none;
    transition: all 0.2s ease 0s;
    &:hover {
      background-color: #f9f9f9;
      color: #000;
      border-color: transparent;
    }
    @media (max-width: 1000px) {
      display: none;
    }
  }
`;

const UserImg = styled.img`
  height: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;
export default Header;
