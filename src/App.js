import React, { Component, lazy } from "react";
import { connect } from "react-redux";
// import "./App.css";
import { Router, Route } from "react-router-dom";
import { history } from "../src/history/history";
import { TodoList } from "./components/todo-list";
import { TaskAddEdit } from "./components/add-edit-task";
import { PrivateRoute } from "./routes/private-route";
import SimpleDialogDemo from "./components/nested/dialog-demo";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import classNames from "classnames";
import { bindActionCreators } from "redux";
import { Login } from "./app/pages/public/login.page";

import {
  drawerOpen,
  drawerClose
} from "./redux-modules/actions/common.actions";

import {
  List,
  IconButton,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  createStyles
} from "@material-ui/core";
// import TestComponent from "./components/test1";
const LazyDemoComp = lazy(() => import("./components/test1"));

const drawerWidth = 240;

class App extends Component {
  constructor(props) {
    super();

    history.listen(location => {});
  }
  handleDrawerOpen = () => {
    this.props.drawerOpen();
  };

  handleDrawerClose = () => {
    this.props.drawerClose();
  };

  render() {
    const { classes, theme, isLoggedin, isDrawerOpen, loading } = this.props;
    debugger;
    return (
      <Router history={history}>
        <div>
          <div>
            <AppBar
              position="fixed"
              className={classNames(classes.appBar, {
                [classes.appBarShift]: isDrawerOpen
              })}
            >
              <Toolbar disableGutters={!isDrawerOpen}>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={this.handleDrawerOpen}
                  className={classNames(classes.menuButton, {
                    [classes.hide]: isDrawerOpen
                  })}
                >
                  <MenuIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
            {isLoggedin && (
              <Drawer
                variant="permanent"
                className={classNames(classes.drawer, {
                  [classes.drawerOpen]: isDrawerOpen,
                  [classes.drawerClose]: !isDrawerOpen
                })}
                classes={{
                  paper: classNames({
                    [classes.drawerOpen]: isDrawerOpen,
                    [classes.drawerClose]: !isDrawerOpen
                  })
                }}
                open={isDrawerOpen}
              >
                <div className={classes.toolbar}>
                  <IconButton onClick={this.handleDrawerClose}>
                    {theme.direction === "rtl" ? (
                      <ChevronRightIcon />
                    ) : (
                      <ChevronLeftIcon />
                    )}
                  </IconButton>
                </div>
                <Divider />
                <List>
                  {["Inbox", "Starred", "Send email", "Drafts"].map(
                    (text, index) => (
                      <ListItem button={true} key={text}>
                        <ListItemIcon>
                          {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItem>
                    )
                  )}
                </List>
                <Divider />
                <List>
                  {["All mail", "Trash", "Spam"].map((text, index) => (
                    <ListItem button={true} key={text}>
                      <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            )}
          </div>
          <div>
            {loading == true && (
              <div className="dv-loader">
                <div className="loader" />
              </div>
            )}
            <PrivateRoute exact path="/" component={Login} />
            <React.Suspense fallback={<div>Loading Component...</div>}>
              <Route exact path="/lazy" component={LazyDemoComp} />
            </React.Suspense>

            <PrivateRoute exact path="/todolist" component={TodoList} />
            <Route exact path="/addedit" component={TaskAddEdit} />
            <Route path="/addedit/:id" component={TaskAddEdit} />
            <Route path="/dialog" component={SimpleDialogDemo} />
          </div>
        </div>
      </Router>
    );
  }
}
const withApp = withStyles(styles, { withTheme: true })(App);
const mapStatetoProps = state => {
  const { loading, isDrawerOpen } = state.commonReducer;
  return {
    loading,
    isDrawerOpen
  };
};
const mapDispatchtoProps = dispatch =>
  bindActionCreators(
    {
      drawerOpen: drawerOpen,
      drawerClose: drawerClose
    },
    dispatch
  );

const connectedToApp = connect(
  mapStatetoProps,
  mapDispatchtoProps
)(withApp);
export { connectedToApp as App };
// export default App;S
const styles = theme =>
  createStyles({
    root: {
      display: "flex"
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 36
    },
    hide: {
      display: "none"
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap"
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      overflowX: "hidden",
      width: theme.spacing.unit * 7 + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing.unit * 9 + 1
      }
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: "0 8px",
      ...theme.mixins.toolbar
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3
    }
  });
