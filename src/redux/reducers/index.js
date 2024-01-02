import { combineReducers } from "redux";
import { tkCourseReducer } from "./tkCourseReducer";
import detailReducer from "./detailReducer";
import authReducer from "./authReducer";
import profileReducer from "./profileReducer";
import searchReducer from "./searchReducer";
import { ksCourseReducer } from "./ksCourseReducer";
import { myTransactionReducer } from "./myTransactionReducer";

export default combineReducers({
  auth: authReducer,
  profile: profileReducer,
  tkCourse: tkCourseReducer,
  ksCourse: ksCourseReducer,
  detail: detailReducer,
  search: searchReducer,
  myTransaction: myTransactionReducer,
});
