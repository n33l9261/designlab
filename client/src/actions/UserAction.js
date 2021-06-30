import Axios from "axios";

import {
  USER_MENTOR_DETAILS_FAIL,
  USER_MENTOR_DETAILS_REQUEST,
  USER_MENTOR_DETAILS_SUCCESS,
  USER_MENTEE_DETAILS_FAIL,
  USER_MENTEE_DETAILS_REQUEST,
  USER_MENTEE_DETAILS_SUCCESS,
  USER_MENTOR_REGISTER_FAIL,
  USER_MENTOR_REGISTER_REQUEST,
  USER_MENTOR_REGISTER_SUCCESS,
  USER_MENTOR_SIGNIN_FAIL,
  USER_MENTOR_SIGNIN_REQUEST,
  USER_MENTOR_SIGNIN_SUCCESS,
  USER_MENTOR_SIGNOUT,
  USER_MENTEE_REGISTER_FAIL,
  USER_MENTEE_REGISTER_REQUEST,
  USER_MENTEE_REGISTER_SUCCESS,
  USER_MENTEE_SIGNIN_FAIL,
  USER_MENTEE_SIGNIN_REQUEST,
  USER_MENTEE_SIGNIN_SUCCESS,
  USER_MENTEE_SIGNOUT,
  //   USER_UPDATE_PROFILE_FAIL,
  //   USER_UPDATE_PROFILE_REQUEST,
  //   USER_UPDATE_PROFILE_SUCCESS,
  USER_MENTEE_LIST_REQUEST,
  USER_MENTEE_LIST_SUCCESS,
  USER_MENTEE_LIST_FAIL,
  USER_MENTOR_LIST_REQUEST,
  USER_MENTOR_LIST_SUCCESS,
  USER_MENTOR_LIST_FAIL,
  //   USER_DELETE_REQUEST,
  //   USER_DELETE_SUCCESS,
  //   USER_DELETE_FAIL,
} from "../constants/UserConstants.js";

// for mentee

export const registermentee =
  (
    name,
    email,
    password,
    mobilenumber,
    instituteName,
    enrollmentNumber,
    address
  ) =>
  async (dispatch) => {
    dispatch({
      type: USER_MENTEE_REGISTER_REQUEST,
      payload: {
        email,
        password,
        mobilenumber,
        instituteName,
        enrollmentNumber,
        address,
      },
    });
    try {
      const { data } = await Axios.post("/api/users/mentee/register-mentee", {
        name,
        email,
        password,
        mobilenumber,
        instituteName,
        enrollmentNumber,
        address,
      });
      dispatch({ type: USER_MENTEE_REGISTER_SUCCESS, payload: data });
      dispatch({ type: USER_MENTEE_SIGNIN_SUCCESS, payload: data });
      localStorage.setItem("userInfoMentee", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_MENTEE_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const signinmentee = (email, password) => async (dispatch) => {
  dispatch({ type: USER_MENTEE_SIGNIN_REQUEST, payload: { email, password } });
  try {
    const { data } = await Axios.post("/api/users/mentee/signin-mentee", {
      email,
      password,
    });
    dispatch({ type: USER_MENTEE_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem("userInfoMentee", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_MENTEE_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const signoutmentee = () => (dispatch) => {
  localStorage.removeItem("userInfoMentee");

  dispatch({ type: USER_MENTEE_SIGNOUT });
  document.location.href = "/signin-mentee";
};

// mentee list

export const listUsersmentee = () => async (dispatch, getState) => {
  dispatch({ type: USER_MENTEE_LIST_REQUEST });
  const {
    userSigninMentee: { userInfoMentee },
  } = getState();
  try {
    const { data } = await Axios.get("/api/users/mentee/menteelist");
    //  {
    //   headers: { Authorization: `Bearer ${userInfoMentee.token}` },
    // });
    dispatch({ type: USER_MENTEE_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: USER_MENTEE_LIST_FAIL, payload: message });
  }
};

// for mentor

export const registermentor =
  (
    name,
    email,
    password,
    mobilenumber,
    companyName,
    employeeIDNumber,
    address,
    employeeIDimage,
    governmentIDimage
  ) =>
  async (dispatch) => {
    dispatch({
      type: USER_MENTOR_REGISTER_REQUEST,
      payload: {
        name,
        email,
        password,
        mobilenumber,
        companyName,
        employeeIDNumber,
        address,
        employeeIDimage,
        governmentIDimage,
      },
    });
    try {
      const { data } = await Axios.post("/api/users/mentor/register-mentor", {
        name,
        email,
        password,
        mobilenumber,
        companyName,
        employeeIDNumber,
        address,
        // employeeIDimage,
        // governmentIDimage,
      });
      dispatch({ type: USER_MENTOR_REGISTER_SUCCESS, payload: data });
      dispatch({ type: USER_MENTOR_SIGNIN_SUCCESS, payload: data });
      localStorage.setItem("userInfoMentor", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_MENTOR_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const signinmentor = (email, password) => async (dispatch) => {
  dispatch({ type: USER_MENTOR_SIGNIN_REQUEST, payload: { email, password } });
  try {
    const { data } = await Axios.post("/api/users/mentor/signin-mentor", {
      email,
      password,
    });
    dispatch({ type: USER_MENTOR_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem("userInfoMentor", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_MENTOR_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const signoutmentor = () => (dispatch) => {
  localStorage.removeItem("userInfoMentor");

  dispatch({ type: USER_MENTOR_SIGNOUT });
  document.location.href = "/signin-mentor";
};

// geeting mentor list
export const listUsersmentor = () => async (dispatch, getState) => {
  dispatch({ type: USER_MENTOR_LIST_REQUEST });
  const {
    userSigninMentor: { userInfoMentor },
  } = getState();
  try {
    const { data } = await Axios.get("/api/users/mentor/mentorlist", {
      headers: { Authorization: `Bearer ${userInfoMentor.token}` },
    });
    dispatch({ type: USER_MENTOR_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: USER_MENTOR_LIST_FAIL, payload: message });
  }
};

export const detailsUserMentor = () => async (dispatch, getState) => {
  dispatch({ type: USER_MENTOR_DETAILS_REQUEST });
  const {
    userSigninMentor: { userInfoMentor },
  } = getState();
  try {
    const { data } = await Axios.get("/api/users/mentor/mentordetailsemail", {
      headers: {
        Authorization: `Bearer ${userInfoMentor.token}`,
      },
    });
    dispatch({ type: USER_MENTOR_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: USER_MENTOR_DETAILS_FAIL, payload: message });
  }
};

// update mentor verification

// export const detailsMentor = (email) => async (dispatch, getState) => {
//   dispatch({ type: USER_MENTOR_DETAILS_REQUEST, payload: email });
//   const {
//     userSignin: { userInfo },
//   } = getState();

//   try {
//     const { data } = await Axios.post(`/api/users/mentor/mentordetailsemail`, {
//       headers: { Authorization: `Bearer ${userInfo?.token}` },
//     });
//     dispatch({ type: USER_MENTOR_DETAILS_SUCCESS, payload: data });
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message;
//     dispatch({ type: USER_MENTOR_DETAILS_FAIL, payload: message });
//   }
// };

// export const signinmentor = (email, password) => async (dispatch) => {
//   dispatch({ type: USER_MENTOR_SIGNIN_REQUEST, payload: { email, password } });
//   try {
//     const { data } = await Axios.post("/api/users/mentor/signin-mentor", {
//       email,
//       password,
//     });
//     dispatch({ type: USER_MENTOR_SIGNIN_SUCCESS, payload: data });
//     localStorage.setItem("userInfoMentor", JSON.stringify(data));
//   } catch (error) {
//     dispatch({
//       type: USER_MENTOR_SIGNIN_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };
// export const updateUserProfile = (user) => async (dispatch, getState) => {
//   dispatch({ type: USER_UPDATE_PROFILE_REQUEST, payload: user });
//   const {
//     userSignin: { userInfo },
//   } = getState();
//   try {
//     const { data } = await Axios.put(`/api/users/profile`, user, {
//       headers: { Authorization: `Bearer ${userInfo.token}` },
//     });
//     dispatch({ type: USER_UPDATE_PROFILE_SUCCESS, payload: data });
//     dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
//     localStorage.setItem("userInfo", JSON.stringify(data));
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message;
//     dispatch({ type: USER_UPDATE_PROFILE_FAIL, payload: message });
//   }
// };

// export const listUsers = () => async (dispatch, getState) => {
//   dispatch({ type: USER_LIST_REQUEST });
//   const {
//     userSignin: { userInfo },
//   } = getState();
//   try {
//     const { data } = await Axios.get("/api/users", {
//       headers: { Authorization: `Bearer ${userInfo.token}` },
//     });
//     dispatch({ type: USER_LIST_SUCCESS, payload: data });
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message;
//     dispatch({ type: USER_LIST_FAIL, payload: message });
//   }
// };

// export const deleteUser = (userId) => async (dispatch, getState) => {
//   dispatch({ type: USER_DELETE_REQUEST, payload: userId });
//   const {
//     userSignin: { userInfo },
//   } = getState();
//   try {
//     const { data } = await Axios.delete(`/api/users/${userId}`, {
//       headers: { Authorization: `Bearer ${userInfo.token}` },
//     });
//     dispatch({ type: USER_DELETE_SUCCESS, payload: data });
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message;
//     dispatch({ type: USER_DELETE_FAIL, payload: message });
//   }
// };
