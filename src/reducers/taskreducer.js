import { TaskConstants } from "../constants";

export function TaskReducer(state = {}, action) {
  switch (action.type) {
    case TaskConstants.GET_REQUEST:
      return {
        ...state,
        loading: true
      };
    case TaskConstants.GET_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: action.result
      };
    case TaskConstants.EDIT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case TaskConstants.EDIT_SUCCESS:
      return {
        ...state,
        task: action.result,
        taskInitial: action.result
      };

    case TaskConstants.TASK_CHANGE:
      return {
        ...state,
        taskInitial: action.result
      };
    // state={
    //   taskInitial:action.result
    // }
    // state.taskInitial=action.result;
    //  return state;

    default:
      return state;
  }
}
