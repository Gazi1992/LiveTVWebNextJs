import { useEffect } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import styled from "styled-components";
// This values are the props in the UI
const amount = "2";
const currency = "USD";
const style = { layout: "vertical", width: "500px" };

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency, showSpinner }) => {
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
  }, [currency, showSpinner]);

  return (
    <Wrapper>
      {showSpinner && isPending && <div className='spinner' />}
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: amount,
                  },
                },
              ],
            })
            .then((orderId) => {
              // Your code here after create the order
              return orderId;
            });
        }}
        onApprove={function (data, actions) {
          return actions.order.capture().then(function () {
            // Your code here after capture the order
          });
        }}
      />
    </Wrapper>
  );
};

export default function App() {
  return (
    <Container>
      <div style={{ width: "100%", height: "100%" }}>
        <PayPalScriptProvider
          options={{
            "client-id": "test",
            components: "buttons",
            currency: "USD",
          }}
        >
          <ButtonWrapper currency={currency} showSpinner={false} />
        </PayPalScriptProvider>
      </div>
    </Container>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background: #ff512f; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #dd2476,
    #ff512f
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    108deg,
    rgba(1, 147, 86, 1) 0%,
    rgba(10, 01, 122, 1) 100%
  );
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100vw;
  max-height: fit-content;
  background-image: linear-gradient(
    to right top,
    #1b1f2b,
    #252c3f,
    #2e3a54,
    #37496a,
    #405881
  );
`;
