import React from "react";
import ReactDOM from "react-dom";

/* Polaris */
import enTranslations from "@shopify/polaris/locales/en.json";
import { AppProvider } from "@shopify/polaris";

/* Router */
import { BrowserRouter } from "react-router-dom";

/* Redux */
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";
import { Provider } from "react-redux";

/* Custom imports */
import AppContainer from "./AppContainer";
import App from "./App";

const bTemplates = ["/thank-you"];
let blankTemplate = false;
let no_sidebar = true;
if (bTemplates.includes(window.location.pathname)) {
  blankTemplate = true;
}
if (window.location.pathname.includes("/template-editor")) {
  no_sidebar = true;
}
require("@shopify/polaris/styles.css");
require("./scss/app.scss");
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppContainer blankTemplate={blankTemplate} no_sidebar={no_sidebar}>
        <PersistGate persistor={persistor}>
          <AppProvider i18n={enTranslations}>
            <App />
          </AppProvider>
        </PersistGate>
      </AppContainer>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
