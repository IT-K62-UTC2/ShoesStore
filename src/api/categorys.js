import axiosClient from "./axiosClient";

const catogoryApi = {
  getAll(params) {
    const url = "/Nike";
    return axiosClient.get(url, { params: params });
  },
  get(id) {
    const url = `/Nike/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = "/Nike";
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = "/Nike";
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = `/Nike/${id}`;
    return axiosClient.delete(url);
  },
};
export default catogoryApi;
