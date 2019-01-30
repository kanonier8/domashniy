import { resolverUrl } from '../../Helper';

export const GET_SERIES_REQUEST = 'GET_SERIES_REQUEST';
export const GET_SERIES_SUCCESS = 'GET_SERIES_SUCCESS';
export const GET_SERIES_ERROR = 'GET_NAV_ERROR';

export function getSeries(seasonID) {
    return dispatch => {

        dispatch({
            type: GET_SERIES_REQUEST,
            payload: seasonID
        });

        fetch(resolverUrl(seasonID), { method: 'GET' })
            .then(response => response.json())
            .then(response =>
                dispatch({
                    type: GET_SERIES_SUCCESS,
                    payload: response
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