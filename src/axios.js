import axios from "axios";

const instance = axios.create({
  baseURL: "https://post-get-64282-default-rtdb.firebaseio.com/",
});

export default instance;
