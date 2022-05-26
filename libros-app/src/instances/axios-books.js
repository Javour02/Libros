import axios from "axios";

const instance = axios.create({
  baseURL: "https://reactbooks-9c007-default-rtdb.firebaseio.com/",
});

export default instance;
