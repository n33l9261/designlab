import thunk from "redux-thunk";
import { applyMiddleware, compose, createStore, combineReducers } from "redux";

import {
  userMenteeRegisterReducer,
  userMenteeSigninReducer,
  userMentorRegisterReducer,
  userMentorSigninReducer,
  userListMenteeReducer,
  userListMentorReducer,
  userMentorDetailsReducer,
  //   userDeleteReducer,
  //   userDetailsReducer,
  //   userListReducer,

  //   userTopSellerReducer,
  //   userUpdateProfileReducer,
  //   userUpdateReducer,
} from "./reducers/UserReducers.js";

const initialState = {
  userSigninMentee: {
    userInfoMentee: localStorage.getItem("userInfoMentee")
      ? JSON.parse(localStorage.getItem("userInfoMentee"))
      : null,
  },
  userSigninMentor: {
    userInfoMentor: localStorage.getItem("userInfoMentor")
      ? JSON.parse(localStorage.getItem("userInfoMentor"))
      : null,
  },
};
const reducer = combineReducers({
  userMentorRegister: userMentorRegisterReducer,
  userSigninMentor: userMentorSigninReducer,

  userMenteeRegister: userMenteeRegisterReducer,
  userSigninMentee: userMenteeSigninReducer,

  userListMentor: userListMentorReducer,
  userListMentee: userListMenteeReducer,

  userDetailsMentor: userMentorDetailsReducer,

  //   userDetails: userDetailsReducer,
  //   userUpdateProfile: userUpdateProfileReducer,
  //   userUpdate: userUpdateReducer,

  //   userList: userListReducer,
  //   userDelete: userDeleteReducer,
  //   userTopSellersList: userTopSellerReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
