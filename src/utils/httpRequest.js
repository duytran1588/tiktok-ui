import axios from 'axios';

/**
 * console.log(process.env)
 * Trong process.env có thuộc tính NODE_ENV: 'tên môi trường'
 * Ta có thể thông qua thuộc tính này để thêm / bớt tính năng thích hợp với từng môi trường
 */

const httpRequest = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, options = {}) => {
  const response = await httpRequest.get(path, options);
  return response;
};

export default httpRequest;
