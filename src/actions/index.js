import { TaskConstants } from "../constants";

const getTasksAction = () => ({
  type: TaskConstants.GET_REQUEST
});

const editTasksAction = id => ({
  type: TaskConstants.EDIT_REQUEST,
  id: id
});

const createTasksAction = title => ({ 
  type: TaskConstants.CREATE_REQUEST,
  title: title
});

const updateTasksAction = model => ({
  type: TaskConstants.UPDATE_REQUEST,
  model: model
});

const deleteTasksAction = id => ({
  type: TaskConstants.DELETE_REQUEST,
  id: id
});

const completeTasksAction = id => ({
  type: TaskConstants.COMPLETE_REQUEST,
  id: id
});

const taskChange = task => ({
  type: TaskConstants.TASK_CHANGE,
  result: task
});

export {
  getTasksAction,
  editTasksAction,
  createTasksAction,
  updateTasksAction,
  deleteTasksAction,
  completeTasksAction,
  taskChange
};
