import { axiosClient } from "./link.js";

const ShopOwnerCateAPI = {
    getAll() {
        const url = `/shopowner-cate`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/shopowner-cate/${id}`;
        return axiosClient.get(url);
    },
    add(shopowner) {
        const url = `/shopowner-cate`;
        return axiosClient.post(url, shopowner);
    },
    remove(id) {
        const url = `/shopowner-cate/${id}`;
        return axiosClient.delete(url);
    },
    upload(id, data) {
        const url = `/shopowner-cate/${id}`;
        return axiosClient.put(url, data);
    },

};
export default ShopOwnerCateAPI;