import { axiosClient } from "./link.js";

const StatisticalAPI = {
    getAll() {
        const url = `/statistical`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/statistical/${id}`;
        return axiosClient.get(url);
    },
    add(statistical) {
        const url = `/statistical`;
        return axiosClient.post(url, statistical);
    },
    remove(id) {
        const url = `/statistical/${id}`;
        return axiosClient.delete(url);
    },
    upload(id, data) {
        const url = `/statistical/${id}`;
        return axiosClient.put(url, data);
    },

};
export default StatisticalAPI;