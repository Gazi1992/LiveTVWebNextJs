import styled from "styled-components";

import { BsCheck2Circle, BsXCircle } from "react-icons/bs";

function Features({ feature, extra, check }) {
  return (
    <FeatureContainer>
      <p style={pStyle}>{feature}</p>
      {(() => {
        if (check === true) {
          return (
            <BsCheck2Circle
              size='28px'
              style={{ margin: "0px", color: "darkgreen" }}
            />
          );
        } else if (check === false) {
          return (
            <BsXCircle
              size='25px'
              style={{ margin: "0px", color: "darkred" }}
            />
          );
        }
      })()}

      <h3>{extra}</h3>
      <hr
        style={{
          width: "80%",
          color: "white",
          backgroundColor: "white",
          height: 0.5,
          borderColor: "white",
        }}
      />
    </FeatureContainer>
  );
}
const pStyle = {
  fontSize: "14px",
  color: "#4287ff",
};

const FeatureContainer = styled.div`
  border-color: black;
  width: 100%;
  height: 70px;
  h3 {
    margin: 5px;
  }
  p {
    margin: 5px;
  }
`;
export default Features;
