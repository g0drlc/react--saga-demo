import React from "react";
import { history } from "../history/history";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {
  getTasksAction,
  deleteTasksAction,
  completeTasksAction
} from "../actions";
import TextInput from "../elements/text-input";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: {
        title: "",
        description: ""
      },
      lstPersonal: []
    };
  }
  componentDidMount() {
    this.props.getTasksAction();
    let lstPersonal = [
      { Id: 1, firstName: "praveen", lastName: "kumar" },
      { Id: 2, firstName: "asfrf", lastName: "segettg" }
    ];
    this.setState({
      lstPersonal: lstPersonal
    });
  }
  handleDelete(id) {
    this.props.deleteTasksAction(id);
  }
  handleComplete(id) {
    this.props.completeTasksAction(id);
  }
  handleChange = e => {
    const { task } = this.state;
    const { name, value } = e.target;

    this.setState({
      task: {
        ...task,
        [name]: value
      }
    });
  };
  handleDynamicChange = (id, name) => e => {
    const { lstPersonal } = this.state;
    const newPersonal = lstPersonal.map((o, i) => {
      if (id !== o.Id) return o;
      return { ...o, [name]: e.target.value };
    });
    this.setState({
      lstPersonal: newPersonal
    });
  };
  handleSubmit = e => {};
  render() {
    const { tasks } = this.props;
    const { task, lstPersonal } = this.state;
    return (
      <div style={dvBorder}>
        <div>
          {lstPersonal &&
            lstPersonal.map((o, i) => {
              return (
                <div key={i}>
                  <TextField
                    value={o.firstName}
                    onChange={this.handleDynamicChange(o.Id, "firstName")}
                  />
                  &nbsp;
                  <TextField
                    value={o.lastName}
                    onChange={this.handleDynamicChange(o.Id, "lastName")}
                  />
                  <br />
                </div>
              );
            })}
        </div>
        <div>
          <TextInput
            onChange={this.handleChange}
            value={task.title}
            required={true}
            minLength="4"
            label="Title"
            name="title"
            placeholder="Title"
            maxLength="10"
          />
          <br />
          <TextInput
            onChange={this.handleChange}
            value={task.description}
            required={true}
            minLength="4"
            label="Description"
            name="description"
            placeholder="Description"
            maxLength="10"
          />
          <Button onSubmit={this.handleSubmit}>Save</Button>
        </div>
        <h3>To-Do:</h3>
        <hr />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            history.push("/addedit");
          }}
        >
          Add New To-Do
        </Button>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title </TableCell>
              <TableCell> </TableCell>
              <TableCell> </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!tasks && (
              <TableRow>
                <TableCell />
              </TableRow>
            )}

            {tasks &&
              tasks.map((o, i) => (
                <TableRow key={i}>
                  <TableCell
                    className={
                      o.completed === true
                        ? "strike input-width"
                        : " input-width"
                    }
                  >
                    <a
                      onClick={() => {
                        history.push("/addedit/" + o.id);
                      }}
                    >
                      {o.title}
                    </a>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      disabled={o.completed}
                      onClick={() => {
                        this.handleComplete(o.id);
                      }}
                    >
                      Complete
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="default"
                      disabled={o.completed}
                      onClick={() => {
                        this.handleDelete(o.id);
                      }}
                    >
                      X
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

const dvBorder = {
  border: "1px solid lightgray",
  marginLeft: "60px",
  marginRight: "60px"
};

const mapDispatchtoProps = dispatch =>
  bindActionCreators(
    {
      getTasksAction: getTasksAction,
      deleteTasksAction: deleteTasksAction,
      completeTasksAction: completeTasksAction
    },
    dispatch
  );

function mapStateToProps(state) {
  const { tasks } = state;
  return {
    tasks
  };
}

const connectedTodoList = connect(
  mapStateToProps,
  mapDispatchtoProps
)(TodoList);
export { connectedTodoList as TodoList };
