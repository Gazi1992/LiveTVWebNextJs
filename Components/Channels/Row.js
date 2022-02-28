import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import ColumnW from "./Column";

function Row() {
  const [channels, setChannels] = React.useState([]);

  const selectChannels = (url) => {
    console.log(url);
  };

  var settings = {
    dots: true,
    width: "100%",
  };
  return (
    <Container>
      {channels.map((channel) => (
        <ColumnW
          logo={channel.logo}
          clickHandler={() => {
            selectChannels(channel.url);
            <Link href='/Favorites' />;
          }}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  padding: 40px;
  background: black;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Wraper = styled.div`
  position: relative;
  width: 100vw;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

export default Row;
