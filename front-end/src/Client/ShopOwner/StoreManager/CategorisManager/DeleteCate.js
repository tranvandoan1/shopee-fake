import ShopOwnerCateAPI from "../../../../Api/ShopOwnerCate";
import { $, reRender } from "../../../../ultis"
import ListCate from "./ListCate";

const DeleteCate = {
    async render() {


        // xóa danh mục
        function removeCate() {
            if (Array.isArray($("#remove-cate-shop"))) {
                $("#remove-cate-shop").forEach((btn, index) => {
                    btn.addEventListener("click", async function() {
                        const id = btn.dataset.id;
                        const check = confirm("Bạn có chắc xóa không ?")
                        if (check) {
                            await ShopOwnerCateAPI.remove(id)
                            await reRender(ListCate, '#Store-Cate-List')
                        }
                    })
                });
            } else {
                $("#remove-cate-shop").addEventListener("click", async function() {
                    const id = $("#remove-cate-shop").dataset.id;
                    const check = confirm("Bạn có chắc xóa không ?")
                    if (check) {
                        await ShopOwnerCateAPI.remove(id)
                        await reRender(ListCate, '#Store-Cate-List')

                    }
                })
            }
        }
        removeCate()

    }
}
export default DeleteCate