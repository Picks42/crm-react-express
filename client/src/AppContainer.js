import React, { useRef } from "react";
import { AppProvider, Frame, Toast } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";
import { hideToaster } from "./redux/main-app/mainAppAction";
import { connect } from "react-redux";

const AppContainer = (props) => {
  const { appMainData, hideToasterAction } = props;
  const skipToContentRef = useRef(null);

  const toastMarkup = appMainData.toaster ? (
    <Toast
      onDismiss={() => hideToasterAction()}
      content={appMainData.toasterMsg}
    />
  ) : null;
  const pageMarkup = props.children;

  if (props.blankTemplate) {
    return props.children;
  }
  return (
    <div style={{ height: "500px" }}>
      <AppProvider i18n={enTranslations}>
        <Frame skipToContentTarget={skipToContentRef.current}>
          {pageMarkup}
          {toastMarkup}
        </Frame>
      </AppProvider>
    </div>
  );
};

const mapStateToProps = (state) => ({
  appMainData: state.appMain,
});
const mapDispatchToProps = (dispatch) => ({
  hideToasterAction: () => dispatch(hideToaster()),
});
export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
