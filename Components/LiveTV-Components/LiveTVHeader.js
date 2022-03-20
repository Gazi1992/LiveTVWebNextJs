import { useState } from "react";
import styled from "styled-components";
import { Airplay, LineStyle } from "@material-ui/icons";
import { BsFillRecordCircleFill, BsFillPersonFill } from "react-icons/bs";
import { Stream } from "@styled-icons/material/Stream";

import Dropdown from "./Dropdown";

const Header = (props) => {
  const toggle = () => {
    setdropDownState(!dropDownState);
  };
  const [dropDownState, setdropDownState] = useState(false);

  return (
    <Nav>
      <Logo>
        <StreamStyled />
      </Logo>
      <NavMenu>
        <a href='/LiveTV'>
          <Airplay style={{ color: "white" }} />
          <span>AirTV</span>
        </a>

        <a href='/Kanalet'>
          <LineStyle style={{ color: "white" }} />
          <span>Kanalet</span>
        </a>

        {/* <a href='/VOD'>
          <BsFillRecordCircleFill color='white' />
          <span>VOD</span>
        </a> */}
      </NavMenu>
      <PersonalContent>
        <SignOut onClick={toggle}>
          <ImageContainer>
            <BsFillPersonFill color='white' />
          </ImageContainer>
        </SignOut>
        <Dropdown isOpen={dropDownState} toggle={toggle} />
      </PersonalContent>
      {/*<PersonalContent onClick={handleAuth}>
        <span onClick={handleAuth}>Sign out</span>
      
      </PersonalContent>*/}
    </Nav>
  );
};

const Nav = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background-color: #090b13;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  letter-spacing: 16px;
  border-bottom: 2px solid purple;

  z-index: 3;
`;

const StreamStyled = styled(Stream)`
  height: 80%;
  color: white;
`;

const Logo = styled.a`
  padding: 0;
  width: 5%;
  height: 100%;
  position: relative;
  cursor: pointer;
  background: transparent;
  font-size: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    display: block;
    background: black;
    width: 70%;
  }
`;

const PersonalContent = styled.div`
  padding: 0;
  width: 5%;
  height: 100%;
  position: relative;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: black;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  width: 90%;
  justify-content: center;
  position: relative;
  cursor: pointer;

  a {
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    padding-bottom: 5px;
    border-right: 2px solid black;
    border-left: 2px solid black;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      margin-right: 0px;
      z-index: auto;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 15px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      margin-left: 5px;
      white-space: nowrap;
      position: relative;
      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
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
    &:hover {
      background-color: black;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const DropDown = styled.div`
  position: relative;
  width: 30vw;
  top: 60px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  font-size: 14px;
  letter-spacing: 3px;

  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SignOut = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

export default Header;
