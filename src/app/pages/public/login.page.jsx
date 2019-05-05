import * as React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import TextInput from "../../../elements/text-input";
import { withStyles } from "@material-ui/core/styles";
import { bindActionCreators } from "redux";
import { createStyles } from "@material-ui/core";
import { login } from "../../../redux-modules/actions/common.actions";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      login: {
        userName: "",
        password: ""
      }
    };
  }
  handleSubmit = e => {
    debugger;
    const { login } = this.state;
    this.props.login(login);
  };
  handleChange = e => {
    const { login } = this.state;
    const { name, value } = e.target;

    this.setState({
      login: {
        ...login,
        [name]: value
      }
    });
  };
  render() {
    const { login } = this.state;

    return (
      <div style={{ textAlign: "center", marginTop: "10%" }}>
        Login
        <form name="loginForm">
          <TextInput
            onChange={this.handleChange}
            value={login.userName}
            required={true}
            minLength={4}
            label="User Name"
            name="userName"
            placeholder="User Name"
            maxLength={50}
          />
          <br />
          <TextInput
            onChange={this.handleChange}
            value={login.password}
            required={true}
            minLength={4}
            label="Password"
            name="password"
            placeholder="Password"
            maxLength={20}
          />
          <br />
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleSubmit}
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}

const withLogin = withStyles(styles, { withTheme: true })(Login);
const mapStatetoProps = state => {
  debugger;
  const { loading, isDrawerOpen } = state.commonReducer;
  return {
    loading,
    isDrawerOpen
  };
};
const mapDispatchtoProps = dispatch =>
  bindActionCreators({ login: login }, dispatch);

const connectedLogin = connect(
  mapStatetoProps,
  mapDispatchtoProps
)(withLogin);
export { connectedLogin as Login };

const styles = theme => createStyles({});
