import axios from 'axios';

const request = axios.create({
  baseURL: 'https://elearning0706.cybersoft.edu.vn/api/',
});

export const get = async (path, options = {}) => {
  const response = await request.get(path, options);
  return response;
};

export default request;
