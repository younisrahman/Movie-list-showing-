import axios from 'axios';

export const /**
   * Return Movie Object
   * @return OK
   */
  getPopularMovie = () => {
    var config = {
      method: 'get',
      url: 'https://api.themoviedb.org/3/movie/popular?api_key=699b4f84399ec170f877caac4b76a808&page=2',
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
        return error;
      });
  };

export const /**
   * Return Movie Object
   * @return OK
   */
  getLatestMovie = () => {
    var config = {
      method: 'get',
      url: 'https://api.themoviedb.org/3/movie/latest?api_key=699b4f84399ec170f877caac4b76a808',
      headers: {},
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
        return error;
      });
  };
