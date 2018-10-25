import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { Router, Route } from "react-router-dom";
import { history } from "../src/history/history";
import { TodoList } from "./components/todo-list";
import { TaskAddEdit } from "./components/add-edit-task";
import { PrivateRoute } from "./routes/private-route";
class App extends Component {
  constructor(props) {
    super();

    history.listen(location => {
      debugger;
    });
  }

  // componentWillMount(){
  //   alert("componentWillMount")
  // }
  // componentDidMount(){
  //   alert("componentDidMount")
  // }
  // shouldComponentUpdate(){
  //   alert("shouldComponentUpdate")
  // }
  componentWillReceiveProps(props) {
    // alert(JSON.stringify(props));
  }
  // componentWillUpdate(){
  //   alert("componentWillUpdate")
  // }
  // componentDidUpdate(){
  //   alert("componentDidUpdate")
  // }
  // componentWillUnmount(){
  //   alert("componentWillUnmount")
  // }

  render() {
    const { loading } = this.props;
    return (
      <Router history={history}>
        <div>
          asfwfgwrfwragrwwaawr
          <div>
            {loading == true && (
              <div className="dv-loader">
                <div className="loader" />
              </div>
            )}

            <PrivateRoute exact path="/" component={TodoList} />
            <PrivateRoute exact path="/todolist" component={TodoList} />
            <Route exact path="/addedit" component={TaskAddEdit} />
            <Route path="/addedit/:id" component={TaskAddEdit} />
          </div>
        </div>
      </Router>
    );
  }
}

const mapStatetoProps = state => {
  const { loading } = state;
  return {
    loading
  };
};

const connectedToApp = connect(
  mapStatetoProps,
  null
)(App);
export { connectedToApp as App };
// export default App;S
