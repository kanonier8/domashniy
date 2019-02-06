import { resolverUrl } from '../../Helper';

export const GET_SERIES_REQUEST = 'GET_SERIES_REQUEST';
export const GET_SERIES_SUCCESS = 'GET_SERIES_SUCCESS';
export const GET_SERIES_ERROR = 'GET_SERIES_ERROR';
export const GET_SERIES_FROM_HISTORY = 'GET_SERIES_FROM_HISTORY';

export function getSeries(seasonId) {
    return dispatch => {

        dispatch({
            type: GET_SERIES_REQUEST,
            payload: seasonId
        });

        fetch(resolverUrl(seasonId), { method: 'GET' })
            .then(response => response.json())
            .then(response =>
                dispatch({
                    type: GET_SERIES_SUCCESS,
                    payload: response,
                    seasonId
                })
            )
            .catch(error => {
                dispatch({
                    type: GET_SERIES_ERROR,
                    payload: error,
                    error: true
                });
            });

    }

}

export function getSeriesFromHistory(seasonId) {
    return {
        type: GET_SERIES_FROM_HISTORY,
        payload: seasonId
    }
}