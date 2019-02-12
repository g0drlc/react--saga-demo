import React from "react";
import { bindActionCreators } from "redux";
import { history } from "../history/history";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import {
  getTasksAction,
  editTasksAction,
  createTasksAction,
  deleteTasksAction,
  completeTasksAction,
  updateTasksAction,
  taskChange
} from "../actions";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import NestList from "./nested/dialog-demo";
import NestAdd from "./nested/nest-add";

class TaskAddEdit extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   task: {
    //     title: "",
    //     description: "",
    //     completed: false
    //   }
    // };
  }

  componentDidMount() {
    if (this.props.match.params.id)
      this.props.editTasksAction(parseInt(this.props.match.params.id, 10));
    else {
      let task = {
        title: "",
        description: "",
        completed: false
      };
      this.props.taskChange(task);
    }
  }

  componentWillReceiveProps(props) {
    // if (props.match.params.id) {
    // const { task } = props;
    // this.setState({
    //   task: {
    //     ...task
    //   }
    // });
    // }
  }
  handleSave = e => {
    debugger;
    if (this.props.match.params.id) {
      const { taskInitial } = this.props;
      taskInitial.id = parseInt(this.props.match.params.id, 10);
      this.props.updateTasksAction(taskInitial);
      history.push("/todolist");
    } else {
      const { taskInitial } = this.props;

      this.props.createTasksAction(taskInitial.title);
      history.push("/todolist");
    }
    this.reset();
  };

  handleChange = e => {
    debugger;
    const { taskInitial } = this.props;
    const { name, value } = e.target;
    let model = { ...taskInitial };
    model[name] = value;

    this.props.taskChange(model);
    // this.setState({
    //   task: {
    //     ...task,
    //     [name]: value
    //   }
    // });
  };
  handleDelete(id) {
    this.props.deleteTasksAction(id);
    history.push("/todolist");
  }
  handleComplete(id) {
    this.props.completeTasksAction(id);
    history.push("/todolist");
  }
  handleReset = e => {
    this.reset();
  };

  reset() {
    if (this.props.match.params.id) {
      const { task } = this.props;

      this.props.taskChange(task);
      // this.setState({
      //   task: {
      //     ...task
      //   }
      // });
    }
  }

  render() {
    const { taskInitial } = this.props;

    return (
      <div>
        <Link to="/addedit/nestadd">nestadd</Link>
        <Route exact path="/addedit/nestadd" component={NestAdd} />
        <div>
          {taskInitial && (
            <div>
              <Link to="/todolist"> Back to Tasks</Link>
              <form>
                <TextField
                  name="title"
                  placeholder="Title*"
                  label="Title*"
                  value={taskInitial.title}
                  onChange={this.handleChange}
                />
                {
                  //  this.props.match.params.id&&
                  <Button
                    color="default"
                    variant="contained"
                    onClick={() => {
                      this.handleComplete(this.props.match.params.id);
                    }}
                  >
                    Complete
                  </Button>
                }
                <br />
                <TextField
                  name="description"
                  placeholder="Description"
                  label="Description"
                  onChange={this.handleChange}
                  value={taskInitial.description}
                />{" "}
                <br />
                <Button
                  color="primary"
                  variant="contained"
                  onClick={this.handleSave}
                  disabled={taskInitial.title === ""}
                >
                  Save
                </Button>
                &nbsp;
                <Button
                  color="default"
                  variant="contained"
                  onClick={this.handleReset}
                >
                  Cancel
                </Button>
                &nbsp;
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => {
                    this.handleDelete(this.props.match.params.id);
                  }}
                >
                  Delete
                </Button>
                &nbsp;
              </form>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapDispatchtoProps = dispatch =>
  bindActionCreators(
    {
      getTasksAction: getTasksAction,
      editTasksAction: editTasksAction,
      createTasksAction: createTasksAction,
      deleteTasksAction: deleteTasksAction,
      completeTasksAction: completeTasksAction,
      updateTasksAction: updateTasksAction,
      taskChange: taskChange
    },
    dispatch
  );

function mapStateToProps(state) {
  const { task, taskInitial } = state;

  return {
    task: task,
    taskInitial: taskInitial
  };
}

const connectedTodTask = connect(
  mapStateToProps,
  mapDispatchtoProps
)(TaskAddEdit);
export { connectedTodTask as TaskAddEdit };
