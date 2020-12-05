import React, { Component } from "react";
import {
  Page,
  Card,
  Form,
  Button,
  Layout,
  FormLayout,
  TextField,
} from "@shopify/polaris";

import { connect } from "react-redux";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      shop: "",
      errors: {},
    };
  }
  onChange = (e, id) => {
    this.setState({ [id]: e });
  };

  componentWillReceiveProps = (newProps) => {
    if (newProps.user.isValidToken) {
      this.props.history.push("/dashboard");
    }
    this.setState({ errors: newProps.errors });
  };

  handleSubmit = () => {
    debugger;
    let { shop } = this.state;
    let { shopInstallStart } = this.props;
    shop = shop.replace("https://", "");
    shop = shop.replace(".com/", ".com");
    if (!shop.includes(".myshopify.com")) {
      shop = `${shop}.myshopify.com`;
    }
    shopInstallStart(shop);
  };

  render() {
    return (
      <Page fullWidth>
        <Layout>
          <Layout.Section oneThird></Layout.Section>
          <Layout.Section oneThird>
            <Card title="Welcome to rEngage">
              <Card.Section title="Login">
                <Form onSubmit={this.handleSubmit}>
                  <FormLayout>
                    <TextField
                      label="Store URL "
                      value={this.state.shop}
                      type="text"
                      id="shop"
                      name="shop"
                      onChange={this.onChange}
                      error={this.state.errors.shop}
                      suffix=".myshopify.com"
                    />
                    <Button submit primary>
                      Install
                    </Button>
                  </FormLayout>
                </Form>
              </Card.Section>
            </Card>
          </Layout.Section>
          <Layout.Section oneThird></Layout.Section>
        </Layout>
      </Page>
    );
  }
}


const mapStateToProps = (state) => ({
  user: state.user,
  errors: state.errors,
});
const mapDispatchToProps = (dispatch) => ({
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
