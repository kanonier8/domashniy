import { resolverUrl } from '../../Helper';

export const GET_VIDEO_REQUEST = 'GET_VIDEO_REQUEST';
export const GET_VIDEO_SUCCESS = 'GET_VIDEO_SUCCESS';
export const GET_VIDEO_ERROR = 'GET_VIDEO_ERROR';

export function getVideo(videoId) {
  return dispatch => {

    dispatch({
      type: GET_VIDEO_REQUEST,
      payload: videoId
    });

    fetch(resolverUrl(videoId), { method: 'GET' })
      .then(response => response.json())
      .then(response =>
        dispatch({
          type: GET_VIDEO_SUCCESS,
          payload: response
        })
      )
      .catch(error => {
        dispatch({
          type: GET_VIDEO_ERROR,
          payload: error,
          error: true
        });
      });

  }

}