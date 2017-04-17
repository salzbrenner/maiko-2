import axios from 'axios';
import { FETCH_TUMBLR, ROOT_URL, IS_LOADING } from './constants';

// export default function fetchTumblr(limit = 2, offset) {
//   const request = axios.get(`${ROOT_URL}&limit=${limit}&offset=0`);

//   return {
//     type: FETCH_TUMBLR,
//     payload: request,
//   };
// }

export function isLoading(bool) {
  return {
    type: IS_LOADING,
    isLoading: bool,
  }
}

export  function fetchTumblr(limit = 2, offset) {
  return dispatch => {
    dispatch(isLoading(true));

    axios.get(`${ROOT_URL}&limit=${limit}&offset=${offset}`)
      .then(res => dispatch({
        type: FETCH_TUMBLR,
        payload: res.data,
      }))
  }
}