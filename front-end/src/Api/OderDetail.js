import { axiosClient } from "./link.js";

const OderDetailAPI = {
    getAll() {
        const url = `/oderdetail`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/oderdetail/${id}`;
        return axiosClient.get(url);
    },
    add(oderdetail) {
        const url = `/oderdetail`;
        return axiosClient.post(url, oderdetail);
    },
    remove(id) {
        const url = `/oderdetail/${id}`;
        return axiosClient.delete(url);
    },
    upload(id, data) {
        const url = `/oderdetail/${id}`;
        return axiosClient.put(url, data);
    },

};
export default OderDetailAPI;