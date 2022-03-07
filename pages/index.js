import Auth from "@aws-amplify/auth";
import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import { Stream } from "@styled-icons/material/Stream";

function Splash() {
  const router = useRouter();
  useEffect(() => {
    Auth.currentAuthenticatedUser({
      bypassCache: false,
    })
      .then((user) => {
        router.push("/LiveTV", undefined, { shallow: true });
      })
      .catch((err) => {
        router.push("/Home", undefined, { shallow: true });
      });
  }, []);

  return (
    <Container>
      <StreamStyled />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
    to right bottom,
    #121f3e,
    #1b2b4c,
    #24375b,
    #2c436a,
    #35507a
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StreamStyled = styled(Stream)`
  height: 60%;
  color: white;
`;

export default Splash;
