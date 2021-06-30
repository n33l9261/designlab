import {
  //   USER_DELETE_FAIL,
  //   USER_DELETE_REQUEST,
  //   USER_DELETE_SUCCESS,
  USER_MENTOR_DETAILS_FAIL,
  USER_MENTOR_DETAILS_REQUEST,
  USER_MENTOR_DETAILS_SUCCESS,
  USER_MENTEE_DETAILS_FAIL,
  USER_MENTEE_DETAILS_REQUEST,
  USER_MENTEE_DETAILS_SUCCESS,
  USER_MENTOR_LIST_FAIL,
  USER_MENTOR_LIST_REQUEST,
  USER_MENTOR_LIST_SUCCESS,
  USER_MENTEE_LIST_FAIL,
  USER_MENTEE_LIST_REQUEST,
  USER_MENTEE_LIST_SUCCESS,
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
  //   USER_UPDATE_PROFILE_RESET,
  //   USER_UPDATE_PROFILE_SUCCESS,
  //   USER_DELETE_RESET,
  //   USER_UPDATE_REQUEST,
  //   USER_UPDATE_SUCCESS,
  //   USER_UPDATE_FAIL,
  //   USER_DETAILS_RESET,
} from "../constants/UserConstants.js";

// Mentee SEction
export const userMenteeRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_MENTEE_REGISTER_REQUEST:
      return { loading: true };
    case USER_MENTEE_REGISTER_SUCCESS:
      return { loading: false, userInfoMentee: action.payload };
    case USER_MENTEE_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userMenteeSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_MENTEE_SIGNIN_REQUEST:
      return { loading: true };
    case USER_MENTEE_SIGNIN_SUCCESS:
      return { loading: false, userInfoMentee: action.payload };
    case USER_MENTEE_SIGNIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_MENTEE_SIGNOUT:
      return {};
    default:
      return state;
  }
};

export const userListMenteeReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case USER_MENTEE_LIST_REQUEST:
      return { loading: true };
    case USER_MENTEE_LIST_SUCCESS:
      return { loading: false, usersmentee: action.payload };
    case USER_MENTEE_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

// Mentor Section

export const userMentorRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_MENTOR_REGISTER_REQUEST:
      return { loading: true };
    case USER_MENTOR_REGISTER_SUCCESS:
      return { loading: false, userInfoMentor: action.payload };
    case USER_MENTOR_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userMentorSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_MENTOR_SIGNIN_REQUEST:
      return { loading: true };
    case USER_MENTOR_SIGNIN_SUCCESS:
      return { loading: false, userInfoMentor: action.payload };
    case USER_MENTOR_SIGNIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_MENTOR_SIGNOUT:
      return {};
    default:
      return state;
  }
};

export const userListMentorReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case USER_MENTOR_LIST_REQUEST:
      return { loading: true };
    case USER_MENTOR_LIST_SUCCESS:
      return { loading: false, usersmentor: action.payload };
    case USER_MENTOR_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const userMentorDetailsReducer = (
  state = { mentorprofile: [] },
  action
) => {
  switch (action.type) {
    case USER_MENTOR_DETAILS_REQUEST:
      return { loading: true };
    case USER_MENTOR_DETAILS_SUCCESS:
      return { loading: false, mentorprofile: action.payload };
    case USER_MENTOR_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

//   export const userDetailsReducer = (state = { loading: true }, action) => {
//     switch (action.type) {
//       case USER_DETAILS_REQUEST:
//         return { loading: true };
//       case USER_DETAILS_SUCCESS:
//         return { loading: false, user: action.payload };
//       case USER_DETAILS_FAIL:
//         return { loading: false, error: action.payload };
//       case USER_DETAILS_RESET:
//         return { loading: true };
//       default:
//         return state;
//     }
//   };

//   export const userUpdateProfileReducer = (state = {}, action) => {
//     switch (action.type) {
//       case USER_UPDATE_PROFILE_REQUEST:
//         return { loading: true };
//       case USER_UPDATE_PROFILE_SUCCESS:
//         return { loading: false, success: true };
//       case USER_UPDATE_PROFILE_FAIL:
//         return { loading: false, error: action.payload };
//       case USER_UPDATE_PROFILE_RESET:
//         return {};
//       default:
//         return state;
//     }
//   };

//   export const userListReducer = (state = { loading: true }, action) => {
//     switch (action.type) {
//       case USER_LIST_REQUEST:
//         return { loading: true };
//       case USER_LIST_SUCCESS:
//         return { loading: false, users: action.payload };
//       case USER_LIST_FAIL:
//         return { loading: false, error: action.payload };

//       default:
//         return state;
//     }
//   };

//   export const userDeleteReducer = (state = {}, action) => {
//     switch (action.type) {
//       case USER_DELETE_REQUEST:
//         return { loading: true };
//       case USER_DELETE_SUCCESS:
//         return { loading: false, success: true };
//       case USER_DELETE_FAIL:
//         return { loading: false, error: action.payload };
//       case USER_DELETE_RESET:
//         return {};
//       default:
//         return state;
//     }
//   };

//   export const userUpdateReducer = (state = {}, action) => {
//     switch (action.type) {
//       case USER_UPDATE_REQUEST:
//         return { loading: true };
//       case USER_UPDATE_SUCCESS:
//         return { loading: false, success: true };
//       case USER_UPDATE_FAIL:
//         return { loading: false, error: action.payload };
//       case USER_UPDATE_PROFILE_RESET:
//         return {};
//       default:
//         return state;
//     }
//   };
