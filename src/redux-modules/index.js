import watchAppLogin from "./common/common.saga";
import taskSaga from "./sagas/tasksaga";

export default [...watchAppLogin, ...taskSaga];
