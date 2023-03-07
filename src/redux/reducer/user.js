import * as type from "../type";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case type.GET_USER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case type.GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case type.GET_USER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
}
