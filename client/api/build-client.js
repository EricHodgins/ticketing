import axios from 'axios';

export default ({ req }) => {
  if (typeof window === 'undefined') {
    // we are on the server
    // It would be better to query the ingress-nginx-controller directly.  If multiple
    // domains existed it might be a pain!
    return axios.create({
      baseURL: 'http://ticketing.dev',
      headers: req.headers,
    });
  } else {
    // we are on the browser
    return axios.create({
      baseURL: '/',
    });
  }
};
