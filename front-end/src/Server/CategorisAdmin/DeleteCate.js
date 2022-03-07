import CateAPI from "../../Api/Categoris"
import { $, reRender } from "../../ultis"
import ListCate from "./ListCate"

const DeleteCate = {
    async render() {


        // xóa danh mục
        function removeCate() {
            if (Array.isArray($("#remove-cate"))) {
                $("#remove-cate").forEach((btn, index) => {
                    btn.addEventListener("click", async function() {
                        const id = btn.dataset.id;
                        const check = confirm("Bạn có chắc xóa không ?")
                        if (check) {
                            await CateAPI.remove(id)
                            await reRender(ListCate, '#List-Cate')
                        }
                    })
                });
            } else {
                $("#remove-cate").addEventListener("click", async function() {
                    const id = $("#remove-cate").dataset.id;
                    const check = confirm("Bạn có chắc xóa không ?")
                    if (check) {
                        await CateAPI.remove(id)
                        await reRender(ListCate, '#List-Cate')
                    }
                })
            }
        }
        removeCate()

    }
}
export default DeleteCate