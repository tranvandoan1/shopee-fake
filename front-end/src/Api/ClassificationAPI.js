import { axiosClient } from "./link.js";

const ClassificationAPI = {
    getAll() {
        const url = `/classification`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/classification/${id}`;
        return axiosClient.get(url);
    },
    add(cate) {
        const url = `/classification`;
        return axiosClient.post(url, cate);
    },
    remove(id) {
        const url = `/classification/${id}`;
        return axiosClient.delete(url);
    },
    upload(id, data) {
        const url = `/classification/${id}`;
        return axiosClient.put(url, data);
    },

};
export default ClassificationAPI;