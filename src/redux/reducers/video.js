import {GET_VIDEO_REQUEST, GET_VIDEO_SUCCESS, GET_VIDEO_ERROR, GET_VIDEO_FROM_HISTORY} from '../actions/video';

const initialState = {
  data: {},
  isFetching: false,
  history: {}
};

export function videoReducer(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEO_FROM_HISTORY:
        return { ...state, data: state.history[action.payload] };
    case GET_VIDEO_REQUEST:
      return { ...state, isFetching: true };
    case GET_VIDEO_SUCCESS:
      return { ...state, data: action.payload, isFetching: false, history: { ...state.history, [action.videoId]: action.payload } };
    case GET_VIDEO_ERROR:
      return { ...state, error: true, isFetching: false };
    default:
      return state;
  }
}
