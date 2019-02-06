import { GET_SERIES_REQUEST, GET_SERIES_SUCCESS, GET_SERIES_ERROR, GET_SERIES_FROM_HISTORY } from '../actions/series';

const initialState = {
    data: [],
    isFetching: false,
    history: {}
};

export function seriesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_SERIES_FROM_HISTORY:
            return { ...state, data: state.history[action.payload] };
        case GET_SERIES_REQUEST:
            return { ...state, isFetching: true };

        case GET_SERIES_SUCCESS:
            return { ...state, data: action.payload, isFetching: false, history: { ...state.history, [action.seasonId]: action.payload }  };

        case GET_SERIES_ERROR:
            return { ...state, error: true, isFetching: false };

        default:
            return state;
    }
}