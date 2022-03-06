import React from "react";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { CgProfile } from "react-icons/cg";
import { useRouter } from "next/router";
import { connect } from "react-redux";

import Auth from "@aws-amplify/auth";
import _ from "lodash";

const mapStatetoProps = (state) => ({
  userAttributes: _.get(state, `user.data`, false),
});
const mapDispatchtoProps = (dispatch) => {
  return {};
};

function Dropdown({ isOpen, toggle, ...props }) {
  const router = useRouter();
  const signOut = async () => {
    console.log("Sign Out");
    try {
      await Auth.signOut({ global: false });
      router.push("/Home", undefined, { shallow: true });
    } catch (error) {
      console.log("error signing out: ", error);
    }
  };
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Wrapper>
        <Header />
        <SidebarWrapper>
          <IconWrapper>
            <Icon>
              <CloseIcon onClick={toggle} />
            </Icon>
          </IconWrapper>

          <ProfileContainer>
            <CgProfile size='30' style={{ marginLeft: "10px" }} />
            <span>{props.userAttributes.email}</span>
          </ProfileContainer>
          <Link href='/Account'>
            <SidebarRoute>
              <span>Account</span>
            </SidebarRoute>
          </Link>

          <Link href='/'>
            <StyledButtonHome onClick={signOut}>
              <span>Sign Out</span>
            </StyledButtonHome>
          </Link>
        </SidebarWrapper>
      </Wrapper>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 250px;
  height: 25vh;

  background: transparent;
  align-items: center;
  display: flex;
  justify-content: center;

  top: 0;
  right: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;
const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

const Header = styled.div`
  background: transparent;
  height: 80px;
  position: relative;
  width: 100%;
`;

const IconWrapper = styled.div`
  background: transparent;
  height: 40px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
`;

const Icon = styled.div`
  position: relative;
  margin-right: 15px;
  font-size: 1.5rem;
  cursor: pointer;
  outline: none;
`;

const SidebarWrapper = styled.div`
  color: #fff;
  background: #090b13;
  box-shadow: 0 1px 3px purple;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const StyledButtonHome = styled(Button)`
  && {
    background-color: purple;
    width: 90%;
    height: 30px;
    margin-bottom: 5px;
    margin-top: 15px;
    color: white;
    &:hover {
      background-color: #b60d86;
    }
    @media screen and (max-width: 1400px) {
    }
  }
`;

const ProfileContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  span {
    letter-spacing: 0cm;
  }
`;
const SidebarRoute = styled.div`
  height: 40px;

  margin-top: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding-left: 0px;

  color: white;
  width: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  span {
    letter-spacing: 0cm;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    color: gray;
  }
`;

export default connect(mapStatetoProps, mapDispatchtoProps)(Dropdown);
