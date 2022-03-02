import { useStore } from "../app/store";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import aws_exports from "../src/aws-exports";
import { PersistGate } from "redux-persist/integration/react";
import "../styles/globals.css";
import Amplify from "aws-amplify";

Amplify.configure(aws_exports);

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const persistor = persistStore(store, {}, function () {
    persistor.persist();
  });

  return (
    <>
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=G-JNP8C1F7HV`}
      />

      <Script strategy='lazyOnload'>
        {`  window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'G-JNP8C1F7HV');`}
      </Script>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  );
}
