import { $, reRender } from "../../../../ultis"
import firebase from "../../../../firebase"
import ListCate from "./ListCate"
import ShopOwnerCateAPI from "../../../../Api/ShopOwnerCate"
import ShopOwnerAPI from '../../../../Api/ShopOwner';
import SaveUserAPI from "../../../../Api/SaveUser";

const AddCate = {
    async render() {
        const { data: saveuser } = await SaveUserAPI.getAll()
        const { data: shopowners } = await ShopOwnerAPI.getAll()
            // ẩn hiện thêm danh mục
        const AddCateShop = $("#Add-Cate-Shop")
        const AddCateShow = $(".main-shopowner")
        const shopownerCancel = $(".shopowner-cancel")

        AddCateShop.addEventListener("click", function() {
            AddCateShow.classList.add("active-add_shopowner")
        })
        shopownerCancel.addEventListener("click", function() {
            AddCateShow.classList.remove("active-add_shopowner")
        })
        window.addEventListener("click", function(e) {
            if (e.target == AddCateShow) {
                AddCateShow.classList.remove("active-add_shopowner")

            }
        })

        const idUser = saveuser.find(item => {
            return item
        })
        const shopowner = shopowners.find(item => {
            if (item.user_id == idUser.user_id) {
                return item._id
            }
        })


        // thêm danh mục
        // const hi = setInterval(function() {
        //         const proImage = $("#photo").files[0];

        //         let storageRef = firebase.storage().ref(`images/${proImage.name}`);

        //         AddCateShow.classList.remove("active-add_cate")
        //             // loading.classList.add("active-loading")

        //         storageRef.put(proImage).then(function() {
        //             storageRef.getDownloadURL().then(async(url) => {
        //                 console.log(url)
        //                 console.log($("#omg"))
        //                 $("#omg").innerHTML = `<img src="${url}" alt="">`
        //             })
        //         })
        //         clearInterval(hi)
        //     }, 1000)
        const loading = $(".loading")
        $("#add-shopowner").addEventListener("click", function() {
            const proImage = $("#photo").files[0];
            let storageRef = firebase.storage().ref(`images/${proImage.name}`);

            AddCateShow.classList.remove("active-add_shopowner")
            loading.classList.add("active-loading")

            storageRef.put(proImage).then(function() {
                storageRef.getDownloadURL().then(async(url) => {

                    const cate = {
                        name: $("#nameShopowner").value,
                        id_cateShope: $("#addCate-select").value,
                        photo: url,
                        shop_id: shopowner._id
                    }
                    await ShopOwnerCateAPI.add(cate)

                    setInterval(function() {
                        loading.classList.remove("active-loading")
                    }, 1500)

                    // $(".success-message").classList.add("active-success")
                    // setInterval(function() {
                    //     $(".success-message").classList.remove("active-success")
                    // }, 5000)

                    // var render = setInterval(async function() {
                    await reRender(ListCate, '#Store-Cate-List')
                        //     clearInterval(render)
                        // }, 2020)

                })
            })
        })

    }
}
export default AddCate