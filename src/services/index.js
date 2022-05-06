import axios from "axios";

const axiosConfig = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/discover/movie?api_key=604a8bb5b071679af383a0a19ea9701c&",
  responseType: "json"
});

export default axiosConfig;
