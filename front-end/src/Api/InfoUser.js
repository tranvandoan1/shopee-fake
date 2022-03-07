import { axiosClient } from "./link.js";

const InfoUserAPI = {
    getAll() {
        const url = `/info-user`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/info-user/${id}`;
        return axiosClient.get(url);
    },
    add(info) {
        const url = `/info-user`;
        return axiosClient.post(url, info);
    },
    remove(id) {
        const url = `/info-user/${id}`;
        return axiosClient.delete(url);
    },
    upload(id, info) {
        const url = `/info-user/${id}`;
        return axiosClient.put(url, info);
    },


};
export default InfoUserAPI;