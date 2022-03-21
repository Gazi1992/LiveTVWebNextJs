import React from "react";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import Button from "@material-ui/core/Button";
import { Link as ScrollLink } from "react-scroll";
function HeaderDropdown({ isOpen, toggle }) {
  const router = useRouter();
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <SidebarWrapper>
        <IconWrapper>
          <Icon>
            <CloseIcon onClick={toggle} />
          </Icon>
        </IconWrapper>
        <ScrollLink onClick={toggle} to='Kanalet' offset={-80}>
          <SidebarRoute>
            <span>Kanalet</span>
          </SidebarRoute>
        </ScrollLink>
        <ScrollLink onClick={toggle} to='AddOns' offset={-80}>
          <SidebarRoute>
            <span>AddOns</span>
          </SidebarRoute>
        </ScrollLink>
        <ScrollLink onClick={toggle} to='Ofertat' offset={-80}>
          <SidebarRoute>
            <span>Ofertat</span>
          </SidebarRoute>
        </ScrollLink>
        <ScrollLink onClick={toggle} to='Pajisjet' offset={-80}>
          <SidebarRoute>
            <span>Pajisjet</span>
          </SidebarRoute>
        </ScrollLink>
        <Link onClick={toggle} href='#About' offset={-80}>
          <SidebarRoute>
            <span>Për ne</span>
          </SidebarRoute>
        </Link>
        <StyledButtonSignIn
          onClick={() => {
            router.push("/SignIn ", undefined, { shallow: true });
          }}
        >
          Kyçu
        </StyledButtonSignIn>
        <StyledButtonPorosit
          onClick={() => {
            router.push("/Payment", undefined, { shallow: true });
          }}
        >
          <span>Abonohu</span>
        </StyledButtonPorosit>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  position: fixed;
  z-index: 10;
  width: 100vw;
  height: fit-content;
  background: blue;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  top: 0;
  right: 0;
  transition: 0.4s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background: white;
  z-index: 100;
`;

const CloseIcon = styled(FaTimes)`
  color: black;
`;
const IconWrapper = styled.div`
  user-select: none;
  height: 80px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  background: gray;
`;

const Icon = styled.div`
  position: relative;
  margin-right: 25px;
  height: 80px;
  width: 80px;
  font-size: 1.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
`;

const SidebarWrapper = styled.div`
  color: #fff;
  background-color: white;
  background: gray;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: fit-content;
  width: 100%;
`;

const StyledButtonPorosit = styled(Button)`
  && {
    background-color: #040505;
    width: 50%;
    height: 40px;
    margin-bottom: 5px;
    margin: 15px;
    margin-left: 50px;

    color: white;
    &:hover {
      background-color: #3c4149;
    }
    @media screen and (max-width: 1400px) {
    }
  }
`;

const StyledButtonSignIn = styled(Button)`
  && {
    background-color: white;
    width: 50%;
    height: 40px;
    margin-top: 40px;
    margin-left: 50px;

    color: #040505;
    &:hover {
      background-color: #dcdcdc;
    }
    @media screen and (max-width: 1400px) {
    }
  }
`;
const SidebarRoute = styled.div`
  height: 40px;
  margin: 15px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding-left: 35px;
  color: black;
  width: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  span {
    letter-spacing: 0cm;
    font-size: 25px;
    font-weight: 500;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    color: gray;
  }
`;

export default HeaderDropdown;
