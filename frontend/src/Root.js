import React from "react";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./store/configure";
import { BrowserRouter } from "react-router-dom";
import { I18nContextProvider } from "./i18n";

const Root = () => {
  return (
    <Provider store={store}>
      <I18nContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </I18nContextProvider>
    </Provider>
  );
};

export default Root;