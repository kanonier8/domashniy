import { GET_SEASONS_REQUEST, GET_SEASONS_SUCCESS, GET_SEASONS_ERROR } from '../actions/seasons';

const initialState = {
  data: [],
  isFetching: false
};

export function seasonsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SEASONS_REQUEST:
      return { ...state, isFetching: true };

    case GET_SEASONS_SUCCESS:
      return { ...state, data: action.payload, isFetching: false };

    case GET_SEASONS_ERROR:
      return { ...state, error: true, isFetching: false };

    default:
      return state;
  }
}