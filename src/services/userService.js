import apiLocal from "./apiLocal";

const get = () => apiLocal.get(apiLocal.url.getAllUser).then((res) => res.data);
const post = (data) => apiLocal.post(apiLocal.url.login,data).then((res) => res.data);

const userService = {
  get,
  post
};
export default userService;