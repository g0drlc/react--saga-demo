import React, { Component } from "react";
import PropTypes from "prop-types";

class TestComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { id: 123, name: "wwww" };
  }

  componentWillMount() {
    debugger;
  }

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {
    debugger;
    this.setState({
      ...this.state,
      name: "eeee"
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    debugger;
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    debugger;
  }

  componentDidUpdate(prevProps, prevState) {
    debugger;
  }

  componentWillUnmount() {
    debugger;
  }

  render() {
    return (
      <div>
        <div>hfaiwfhowufhowifowifjwiojo</div>
      </div>
    );
  }
}

TestComponent.propTypes = {
  // id: PropTypes.number.isRequired
};

export default TestComponent;
