import { resolverUrl } from '../../Helper';

export const GET_SEASONS_REQUEST = 'GET_SEASONS_REQUEST';
export const GET_SEASONS_SUCCESS = 'GET_SEASONS_SUCCESS';
export const GET_SEASONS_ERROR = 'GET_NAV_ERROR';

export function getSeasons(projeсtID) {
  return dispatch => {

    dispatch({
      type: GET_SEASONS_REQUEST,
      payload: projeсtID
    });

    fetch(resolverUrl(projeсtID), { method: 'GET' })
      .then(response => response.json())
      .then(response =>
        dispatch({
          type: GET_SEASONS_SUCCESS,
          payload: response
        })
      )
      .catch(error => {
        dispatch({
          type: GET_SEASONS_ERROR,
          payload: error,
          error: true
        });
      });

  }

}