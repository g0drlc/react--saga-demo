import React, { Component } from "react";
import PropTypes from "prop-types";

class TestComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { id: 123, name: "wwww" };
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.state,
      name: "eeee"
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

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
