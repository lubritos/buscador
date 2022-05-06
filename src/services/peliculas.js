import axiosConfig from ".";

const peliculas = {
  get: () => axiosConfig.get("sort_by=popularity.desc")
};

export default peliculas;
