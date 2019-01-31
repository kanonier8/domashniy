import { GET_SERIES_REQUEST, GET_SERIES_SUCCESS, GET_SERIES_ERROR } from '../actions/series';

const initialState = {
    data: [],
    isFetching: false
};

export function seriesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_SERIES_REQUEST:
            return { ...state, isFetching: true };

        case GET_SERIES_SUCCESS:
            return { ...state, data: action.payload, isFetching: false };

        case GET_SERIES_ERROR:
            return { ...state, error: true, isFetching: false };

        default:
            return state;
    }
}