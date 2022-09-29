/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
import axios from 'axios';

function getUsersApi() {
  const config = {
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/users',
    headers: {},
  };

  return axios(config)
    .then((response) => response.data)
    .catch((error) => error);
}

export default getUsersApi;
