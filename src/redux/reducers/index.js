import { combineReducers } from "redux";
import { tkCourseReducer } from "./tkCourseReducer";
import detailReducer from "./detailReducer";
import authReducer from "./authReducer";

export default combineReducers({
  auth: authReducer,
  tkCourse: tkCourseReducer,
  detail: detailReducer,
});
