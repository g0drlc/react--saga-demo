import { put, all, takeLatest } from "redux-saga/effects";
import {
  getAllTasks,
  createTask,
  deleteTask,
  completeTask,
  updateTask
} from "../services";
import { TaskConstants } from "../constants";

function* getTasks() {
  const result = yield getAllTasks().then(
    res => {
      return res;
    },
    error => {
      console.log(error);
    }
  );
  yield put({ type: TaskConstants.GET_SUCCESS, result: result });
}

function* getTasksWatcher() {
  debugger;
  yield takeLatest(TaskConstants.GET_REQUEST, getTasks);
}

function* editTasks(model) {
  const result = yield getAllTasks().then(res => res);
  let sinGleRec = result.filter(function(item) {
    return model.id === parseInt(item.id, 10);
  });

  yield put({ type: TaskConstants.EDIT_SUCCESS, result: sinGleRec[0] });
}

function* editTasksWatcher() {
  yield takeLatest(TaskConstants.EDIT_REQUEST, editTasks);
}

function* createTasks(model) {
  debugger;
  let req = { title: model.title };
  const result = yield createTask(req).then(res => res);
  debugger;
  yield put({ type: TaskConstants.GET_SUCCESS, result: result });
}

function* createTasksWatcher() {
  yield takeLatest(TaskConstants.CREATE_REQUEST, createTasks);
}

function* deleteTasks(model) {
  const result = yield deleteTask(model.id).then(res => res);
  yield put({ type: TaskConstants.GET_SUCCESS, result: result });
}

function* completeTasks(model) {
  const result = yield completeTask(model.id).then(res => res);
  yield put({ type: TaskConstants.GET_SUCCESS, result: result });
}

function* deleteTasksWatcher() {
  yield takeLatest(TaskConstants.DELETE_REQUEST, deleteTasks);
}

function* completeTasksWatcher() {
  yield takeLatest(TaskConstants.COMPLETE_REQUEST, completeTasks);
}

function* updateTasks(model) {
  const result = yield updateTask(model.model, model.model.id).then(res => res);
  yield put({ type: TaskConstants.GET_SUCCESS, result: result });
}

function* updateTasksWatcher() {
  yield takeLatest(TaskConstants.UPDATE_REQUEST, updateTasks);
}

export default function* rootSaga() {
  yield all([
    getTasksWatcher(),
    editTasksWatcher(),
    createTasksWatcher(),
    completeTasksWatcher(),
    deleteTasksWatcher(),
    updateTasksWatcher()
  ]);
}
