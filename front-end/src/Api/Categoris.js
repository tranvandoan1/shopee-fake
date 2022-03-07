import { axiosClient } from "./link.js";

const CateAPI = {
    getAll() {
        const url = `/categoris`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/categoris/${id}`;
        return axiosClient.get(url);
    },
    add(cate) {
        const url = `/categoris`;
        return axiosClient.post(url, cate);
    },
    remove(id) {
        const url = `/categoris/${id}`;
        return axiosClient.delete(url);
    },
    upload(id, data) {
        const url = `/categoris/${id}`;
        return axiosClient.put(url, data);
    },

};
export default CateAPI;