//Importamos Axios
import axios from "axios";

//Crear un cliente con axios
const post = (url = "", data = "", config = {}) => {
  return axios.post(url, data, config);
};

const get = url => axios(url);

const put = (url = "", data = "", config = {}) => {
  return axios.put(url, data, config);
};

const del = (url = "", config = {}) => {
  return axios.delete(url, config);
};

//exportar los metodos
export const httpClient = {
  post,
  get,
  put,
  del
};
