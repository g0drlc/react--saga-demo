import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import LoaderHOC from "../hoc/loaderHOC";
import { history } from "../history/history";
class TodoListTable extends Component {
  render() {
    const { tasks } = this.props;

    return (
      <div>
        {" "}
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title </TableCell>
              <TableCell> Description</TableCell>
              <TableCell>Is Completed </TableCell>
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
                  <TableCell> {o.description} </TableCell>
                  <TableCell>
                    {o.completed == true ? <div>Yes</div> : <div>No</div>}
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
const TodoListTemp = LoaderHOC(TodoListTable);
export { TodoListTemp as TodoListTable };
