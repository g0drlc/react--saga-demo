import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleWare from "redux-saga";
import rootSaga from "../index";
import taskSaga from "../sagas/tasksaga";
import { composeWithDevTools } from "redux-devtools-extension";
import { TaskReducer } from "../reducers/taskreducer";
import { commonReducer } from "../common/common.reducer";

const rootReducer = combineReducers({
  commonReducer: commonReducer,
  TaskReducer: TaskReducer
});
const composeEnhancers = composeWithDevTools({});
const sagaMiddleware = createSagaMiddleWare();
const middlewares = applyMiddleware(sagaMiddleware);
const store = createStore(rootReducer, composeEnhancers(middlewares));

rootSaga.forEach(sagaMiddleware.run);
export default store;
