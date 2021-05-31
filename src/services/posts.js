import axios from 'axios';

export const getPosts = (page, limit) =>
  axios.get(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
  );
