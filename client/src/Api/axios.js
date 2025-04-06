import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://localhost:2017/api",
  // baseURL: "http://evangadibackend.ziyintech.com/",
});

export default axiosInstance;
