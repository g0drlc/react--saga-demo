import React, { Component } from "react";

const LoaderHOC = WrappedCOmponent => {
  return class LoaderHOC extends Component {
    render() {
      debugger;
      return !this.props.tasks ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div>List</div>
          <WrappedCOmponent {...this.props} />
        </div>
      );
      // return <WrappedCOmponent {...this.props} />;
    }
  };
};

export default LoaderHOC;
