// Base for all API's
export const API_BASE_URL =
  process.env.NODE_ENV === 'development' ||
  process.env.REACT_APP_DEBUG_PROD === 'true'
    ? 'http://localhost:8000'
    : 'https://api.pyrite.network';
