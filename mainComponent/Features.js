import styled from "styled-components";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

function Features({ feature, extra, check }) {
  return (
    <FeatureContainer>
      <p style={pStyle}>{feature}</p>
      {(() => {
        if (check) {
          return <IoIosCheckmarkCircleOutline color='green' size='32px' />;
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
