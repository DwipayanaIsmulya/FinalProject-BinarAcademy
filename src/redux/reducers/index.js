import { combineReducers } from "redux";
import { tkCourseReducer } from "./tkCourseReducer";
import authReducer from "./authReducer";

export default combineReducers({
  auth: authReducer,
  tkCourse: tkCourseReducer,
});
