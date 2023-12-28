import { combineReducers } from "redux";
import { tkCourseReducer } from "./tkCourseReducer";
import detailReducer from "./detailReducer";
import authReducer from "./authReducer";
import profileReducer from "./profileReducer";
import searchReducer from "./searchReducer";

export default combineReducers({
  auth: authReducer,
  profile: profileReducer,
  tkCourse: tkCourseReducer,
  detail: detailReducer,
  search: searchReducer
});
