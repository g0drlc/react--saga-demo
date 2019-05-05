import { commonConstants } from "../../constants/common.constants";

export const drawerOpen = () => ({
  type: commonConstants.DRAW_OPEN,
  isDrawerOpen: true
});

export const drawerClose = () => ({
  type: commonConstants.DRAW_CLOSE,
  isDrawerOpen: false
});

export const login = model => ({
  type: commonConstants.LOGIN_REQUEST,
  model: model
});
