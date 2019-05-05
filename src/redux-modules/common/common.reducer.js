import { commonConstants } from "../../constants/common.constants";

const initialState = {
  loading: false,
  isLoggedin: true,
  isDrawerOpen: false,
  isMenuClose: false,
  date: new Date()
};

const drawerClose = (state, action) => {
  return {
    ...state,
    isDrawerOpen: false,
    date: new Date()
  };
};
const drawerOpen = (state, action) => {
  return {
    ...state,
    isDrawerOpen: true,
    date: new Date()
  };
};

const loginRequesu = (state, action) => {
  debugger;
  return {
    ...state,
    loading: true,
    isLoggedin: false,
    date: new Date()
  };
};

const loginSuccess = (state, action) => {
  debugger;
  return {
    ...state,
    loading: false,
    isLoggedin: true,
    date: new Date()
  };
};

const handlers = {
  [commonConstants.DRAW_OPEN]: drawerOpen,
  [commonConstants.DRAW_CLOSE]: drawerClose,
  [commonConstants.LOGIN_REQUEST]: loginRequesu,
  [commonConstants.lOGIN_SUCCESS]: loginSuccess
};

export const commonReducer = (state = initialState, action) => {
  const handler = handlers[action.type];
  if (typeof handler === "undefined") return state;
  return handler(state, action);
};
