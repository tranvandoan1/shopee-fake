import CateAPI from "../../Api/Categoris"
import { $, reRender } from "../../ultis"
import ListCate from "./ListCate"
import firebase from "../../firebase/index"
import Categoris from "./Categoris"

const AddCate = {
    async render() {
        const { data: categoris } = await CateAPI.getAll()

        // ẩn hiện thêm danh mục
        const display = $(".addCate")
        const hidden = $(".main-add_cate")
        const cancel = $(".cancel")

        display.addEventListener("click", function() {
            hidden.classList.add("active-add_cate")
        })
        cancel.addEventListener("click", function() {
            hidden.classList.remove("active-add_cate")
        })
        window.addEventListener("click", function(e) {
            if (e.target == hidden) {
                hidden.classList.remove("active-add_cate")

            }
        })

        // thêm danh mục
        const loading = $(".loading")
        const add_Cate = $("#add-Cate")

        add_Cate.addEventListener("click", function() {
            const proImage = $("#photo").files[0];
            let storageRef = firebase.storage().ref(`images/${proImage.name}`);

            hidden.classList.remove("active-add_cate")
            loading.classList.add("active-loading")



            storageRef.put(proImage).then(function() {
                storageRef.getDownloadURL().then(async(url) => {
                    const cate = {
                        name: $("#nameCate").value,
                        photo: url
                    }
                    await CateAPI.add(cate)

                    setInterval(function() {
                        loading.classList.remove("active-loading")
                    }, 2000)

                    var render = setInterval(async function() {
                        await reRender(ListCate, '#List-Cate')
                        clearInterval(render)
                    }, 2020)

                })
            })
        })

    }
}
export default AddCate