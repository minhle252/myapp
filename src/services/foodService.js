import api from "./api";

const get = () => api.get(api.url.foods).then((res) => res.data);

const foodsService = {
  get,
};
export default foodsService;
