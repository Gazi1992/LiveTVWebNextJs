import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { MdModeEdit } from "react-icons/md";
import { IoChevronForwardSharp } from "react-icons/io5";
import PlayerHeader from "../../Components/Layout/PlayerHeader";
import Auth from "@aws-amplify/auth";
import _ from "lodash";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";

const mapStatetoProps = (state) => ({
  userAttributes: _.get(state, `user.data`, false),
});
const mapDispatchtoProps = (dispatch) => {
  return {};
};

function Account(props) {
  const router = useRouter();
  useEffect(() => {
    setEmail(props.userAttributes.email);
  }, []);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const verifyUser = async (select) => {
    try {
      Auth.verifyCurrentUserAttribute("email");
      select === "email"
        ? router.push({
            pathname: "/Account/enter-passcode",
            query: { detail: "email" },
          })
        : router.push({
            pathname: "/Account/enter-passcode",
            query: { detail: "password" },
          });
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
  const signOut = async () => {
    try {
      await Auth.signOut({ global: false });
      router.push("/Home", undefined, { shallow: true });
    } catch (error) {
      console.log("error signing out: ", error);
    }
  };
  return (
    <PlayerHeader>
      <Container>
        <Wrapper>
          <TitleContainer>
            <h1>Llogaria</h1>
          </TitleContainer>
          <BlockContainer>
            <SubTitleContainer>
              <span>Detajet e llogarisë</span>
            </SubTitleContainer>
            <DescriptionContainer
              onClick={() => {
                verifyUser("email");
              }}
            >
              <span>{props.userAttributes.email}</span>
              <Icon>
                <MdModeEdit />
              </Icon>
            </DescriptionContainer>
            <DescriptionContainer
              onClick={() => {
                verifyUser("password");
              }}
            >
              <span>Password:********</span>
              <Icon>
                <MdModeEdit />
              </Icon>
            </DescriptionContainer>
            <LogOutContainer
              onClick={() => {
                signOut();
              }}
            >
              <span>Dil</span>
            </LogOutContainer>
          </BlockContainer>
          <BlockContainer>
            <SubTitleContainer>
              <span>Abonimi</span>
            </SubTitleContainer>
            <Link href='/Account/subscription-details'>
              <DescriptionContainer>
                <span>AirTV (për muaj)</span>
                <Icon>
                  <IoChevronForwardSharp />
                </Icon>
              </DescriptionContainer>
            </Link>
            <Link href='/Account/subscription-details/billing-history'>
              <DescriptionContainer>
                <span>Pagesat</span>
                <Icon>
                  <IoChevronForwardSharp />
                </Icon>
              </DescriptionContainer>
            </Link>
          </BlockContainer>
          <Link href='/Account/subscription-details/annual'>
            <SwitchToAnnualContainer>
              <span>Kalo ne abonim vjetorë</span>
              <Icon>
                <IoChevronForwardSharp />
              </Icon>
            </SwitchToAnnualContainer>
          </Link>
        </Wrapper>
      </Container>
    </PlayerHeader>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #040714;
  background: #040714;
`;
const Wrapper = styled.div`
  width: 100%;
  margin-top: -80px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const TitleContainer = styled.div`
  width: 400px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  h1 {
  }
`;
const SubTitleContainer = styled.div`
  width: 400px;
  height: 40px;
  background: #31343e;
  color: #a8aaad;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  span {
    margin-left: 10px;
  }
`;

const Icon = styled.div`
  width: 26px;
  height: 26px;
  margin-right: 10px;
  border-radius: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  background: white;
`;

const DescriptionContainer = styled.div`
  width: 400px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-left: 1px solid #31343e;
  border-right: 1px solid #31343e;
  border-bottom: 1px solid #31343e;
  cursor: pointer;
  &:active {
    background: #757575;
  }
  span {
    font-size: 15px;
    margin-left: 10px;
    font-weight: 600;
  }
  &:hover {
    ${Icon} {
      transform: scale(1.18);
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }
  }
`;

const LogOutContainer = styled.div`
  width: 400px;
  height: 60px;
  display: flex;
  color: #6f9dcc;
  cursor: pointer;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #31343e;
  border-right: 1px solid #31343e;
  border-bottom: 1px solid #31343e;
  &:hover {
    color: #94d0ff;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  }
  span {
    font-size: 15px;
    margin-left: 10px;
    font-weight: 600;
  }
`;

const SwitchToAnnualContainer = styled.div`
  width: 400px;
  height: 60px;
  display: flex;
  color: #38bd8c;
  cursor: pointer;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #31343e;
  margin-bottom: 20px;

  span {
    font-size: 15px;
    margin-left: 10px;
    font-weight: 600;
  }
  &:hover {
    ${Icon} {
      transform: scale(1.18);
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }
  }
`;
const BlockContainer = styled.div`
  margin-bottom: 20px;
  border-radius: 3px;
  overflow: hidden;
`;

export default connect(mapStatetoProps, mapDispatchtoProps)(Account);
