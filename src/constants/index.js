// Base url for the API
// https://callbooth.herokuapp.com is the API for production env.
export const API_BASE_URL =
  process.env.NODE_ENV === 'development' ||
  process.env.REACT_APP_DEBUG_PROD === 'true'
    ? 'http://localhost:8000'
    : 'https://callbooth.herokuapp.com';
