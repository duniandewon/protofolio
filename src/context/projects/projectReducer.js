import {
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER,
  CLEAR_FILTER,
  GET_PROJECTS_SUCCESS,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_PROJECTS_SUCCESS:
      return {
        ...state,
        projects: action.payload,
        loading: false,
      };

    case SET_CURRENT:
      return {
        ...state,
        project: action.payload,
      };

    case CLEAR_CURRENT:
      return {
        ...state,
        project: null,
      };

    case FILTER:
      return {
        ...state,
        filter: action.payload,
      };

    case CLEAR_FILTER:
      return {
        ...state,
        filter: null,
      };

    default:
      return state;
  }
};
