import { combineReducers } from "redux";
import { tkCourseReducer } from "./tkCourseReducer";
import authReducer from "./authReducer";
import profileReducer from "./profileReducer";

export default combineReducers({
  auth: authReducer,
  profile: profileReducer,
  tkCourse: tkCourseReducer,
});
