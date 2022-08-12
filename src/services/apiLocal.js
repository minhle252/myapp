import axios from "axios";

const url = {
  baseURL: "http://localhost:5000/api",
  login: "/login",
  getAllUser: "/get-all-user",
  profile: "/update-user-profile/",
  Products: "/product/get-all-products",
  singleProduct: "/product/single-product/",
  addProduct: "/product/add-product",
  updateProduct: "/product/update-product/",
  deleteProduct: "/product/delete-product/",

};

const instance = axios.create({
  baseURL: url.baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (!error.response) {
      //Network erroror
      window.location.href = "/no-internet";
    } else {
      switch (error.response.status) {
        case 401:
          window.location.href = "/login";
          break;
        case 403:
          window.location.href = "/no-permission";
          break;
        default:
          break;
      }
    }
    return Promise.reject(error);
  },
);

const apiLocal = {
  url,
  instance,
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete,
};
export default apiLocal;
