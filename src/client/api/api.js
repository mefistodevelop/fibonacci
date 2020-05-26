import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080/api/',
});

export const fibApi = {
  getFibonacci(number) {
    return instance.get(`fib?number=${number}`).then((response) => response.data.number);
  },

  getHistory() {
    return instance.get('history').then((response) => response.data);
  },
};
