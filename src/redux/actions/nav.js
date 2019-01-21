import { resolverUrl } from '../../Helper';

export const GET_NAV_REQUEST = 'GET_NAV_REQUEST';
export const GET_NAV_SUCCESS = 'GET_NAV_SUCCESS';
export const GET_NAV_ERROR = 'GET_NAV_ERROR';

export function getNav(projeсt) {
  return dispatch => {

    dispatch({
      type: GET_NAV_REQUEST,
      payload: projeсt
    });

    fetch(resolverUrl(projeсt), {method: 'GET'})
      .then(response => response.json())
      .then(response => 
        dispatch({
          type: GET_NAV_SUCCESS,
          payload: response
        })
      )
      .catch(error => {
        dispatch({
          type: GET_NAV_ERROR,
          payload: error,
          error: true
        });
        console.error(error);
      });

  }

}