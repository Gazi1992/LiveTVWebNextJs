import styled from "styled-components";
import { BsCheck2Circle, BsXCircle } from "react-icons/bs";

function Features({ feature, extra, check }) {
  return (
    <FeatureContainer>
      {(() => {
        if (check === "true") {
          return (
            <BsCheck2Circle
              size='22px'
              style={{ margin: "0px", color: "darkgreen" }}
            />
          );
        } else if (check === "cross") {
          return (
            <BsXCircle
              size='22px'
              style={{ margin: "0px", color: "darkred" }}
            />
          );
        }
      })()}
      <p>{feature}</p>

      <h2 style={{ fontSize: "24px", fontWeight: "700" }}>{extra}</h2>
    </FeatureContainer>
  );
}

const FeatureContainer = styled.div`
  border-color: black;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  h3 {
    margin: 5px;
  }
  p {
    font-size: 20px;
    font-weight: 400;
    margin: 5px;
    color: white;
  }
  h2 {
    color: white;
  }
`;
export default Features;
