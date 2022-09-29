import axios from 'axios';

function getUsersApi() {
  // const requestOptions = {
  //   method: 'GET',
  //   redirect: 'follow',
  // };

  // return fetch('https://jsonplaceholder.typicode.com/users', requestOptions)
  //   .then((response) => response.json())
  //   .then((result) => result)
  //   .catch((error) => error);

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
