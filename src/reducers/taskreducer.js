import { TaskConstants } from "../constants";

export function TaskReducer(state = {}, action) {
  switch (action.type) {
    case TaskConstants.Get_Request:
      return {
        ...state,
        loading: true
      };
    case TaskConstants.Get_Success:
      return {
        ...state,
        loading: false,
        tasks: action.result
      };
    case TaskConstants.Edit_Request:
      return {
        ...state,
        loading: true
      };
    case TaskConstants.Edit_Success:
      
      return {
        ...state,
        task: action.result,
        taskInitial: action.result
      };

    case TaskConstants.Task_Change:
      
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


