import axios from "axios";

export default axios.create({
  baseURL: "https://backend.ah-projectdemo.online/api",
  // baseURL: "https://errorurl.xc",
});
