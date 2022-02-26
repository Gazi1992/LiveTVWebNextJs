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
              style={{ margin: "0px", color: "green" }}
            />
          );
        } else if (check === "cross") {
          return (
            <BsXCircle size='22px' style={{ margin: "0px", color: "red" }} />
          );
        }
      })()}
      <p style={pStyle}>{feature}</p>

      <h3>{extra}</h3>
    </FeatureContainer>
  );
}
const pStyle = {
  fontSize: "22px",
  color: "#b9b8b8",
};

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
    margin: 5px;
  }
`;
export default Features;
