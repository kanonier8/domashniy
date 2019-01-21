import { GET_NAV_REQUEST, GET_NAV_SUCCESS, GET_NAV_ERROR } from '../actions/nav';

const initialState = {
  data: [],
  isFetching: false,
  error: false
};

export function navReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NAV_REQUEST: 
      return { ...state, isFetching: true}

    case GET_NAV_SUCCESS:
      return { ...state, data: action.payload, isFetching: false}

    case GET_NAV_ERROR:
      return { ...state, error: true, isFetching: false}

    default:
      return state;
  }
}