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
const style = {
  layout: "horizontal",
  size: "responsive",
  height: 40,
};

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
    //
    <Wrapper>
      {/* {showSpinner && isPending && <div className='spinner' />} */}
      <StyledPaypalButton
        style={style}
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource='paypal'
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
    <PayPalScriptProvider
      options={{
        "client-id": "test",
        components: "buttons",
        currency: "USD",
      }}
    >
      <ButtonWrapper currency={currency} showSpinner={false} />
    </PayPalScriptProvider>
  );
}
const StyledPaypalButton = styled(PayPalButtons)`
  && {
    width: 100%;
  }
`;
const Wrapper = styled.div`
  height: 50px;
  width: 150px;
  margin: 5px;
`;
