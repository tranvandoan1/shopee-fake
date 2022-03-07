import { $, parseRequestUrl, reRender } from "../../../../ultis"
import firebase from "../../../../firebase"
import CateAPI from "../../../../Api/Categoris";
import ShopOwnerCateAPI from "../../../../Api/ShopOwnerCate";

const UpdateCate = {
    async render() {

        const Frame = $("#linkCss")
        var head = $("head");
        Frame.href = './src/CssClient/Frame.css';
        await head.appendChild(Frame);

        const { id } = parseRequestUrl();
        const { data: shopownercate } = await ShopOwnerCateAPI.getAll()
        const { data: categoris } = await CateAPI.getAll()
        const ShopOwnerCate = await shopownercate.find(item => item._id === id);

        // lấy lại giá trị cate
        function NewCate() {
            const cate = categoris.map((item) => {
                let selected;
                if (item._id == ShopOwnerCate.id_cateShope) {
                    selected = "selected";
                } else {
                    selected = "";
                }
                return /*html*/ `<option value = "${item._id}" ${selected}>${item.name}</option>`;
            });
            return cate;
        }

        return /*html*/ `
             <!-- sửa danh mục -->
             <div class="update-cate ">
                <div class="cate-box">
                    <div class="update-header">
                        <h3>Sửa danh mục</h3>
                    </div>
                    <div class="update">
                        <div class="update-name">
                            <span>Tên danh mục </span>
                            <div class="update-name_input">
                                <input type="text" value="${ShopOwnerCate.name}" id="nameCateUpdate" placeholder="Sửa danh mục ...">
                            </div>
                        </div>
                        <div class="update-name-select">
                            <span>Ngành hàng</span>
                            <div class="update-name_option">
                                <select id="addCate-shop">
                                    ${NewCate()}
                                </select>
                            </div>
                        </div>
                        <div class="update-photo">
                            <span>Ảnh danh mục</span>
                            <span class="update-photo-list">
                                    <input type="file" value="" name="" id="update-photo"> <br>
                                    <div class="photo-update">
                                        <img src="${ShopOwnerCate.photo}" alt="">
                                    </div>
                                </span>
                        </div>
                        <button id="Update">Sửa</button>
                        <button> <a href="/#/seller-channel/categoris">Quay lại</a></button>
                    </div>
                </div>
            </div>
        `
    },
    async afterRender() {

        const { id } = parseRequestUrl();
        const { data: shopownercate } = await ShopOwnerCateAPI.getAll()

        const ShopOwnerCate = await shopownercate.find(item => item._id === id);

        // sửa danh mục

        function updateCateShop() {
            $("#Update").addEventListener("click", async function() {

                    const photoFiles = $("#update-photo").files[0]
                    if (photoFiles == undefined) {
                        const cate = {
                            name: $("#nameCateUpdate").value,
                            id_cateShope: $("#addCate-shop").value,
                            photo: ShopOwnerCate.photo
                        }
                        await ShopOwnerCateAPI.upload(id, cate)
                        alert("Sửa danh mục thành công");
                        window.location.hash = `/seller-channel/categoris`;

                    } else {
                        let urlPhoto = firebase.storage().ref(`images/${photoFiles.name}`)
                        urlPhoto.put(photoFiles).then(function() {
                            urlPhoto.getDownloadURL().then(async(url) => {
                                const cate = {
                                    name: $("#nameCateUpdate").value,
                                    id_cateShope: $("#addCate-shop").value,
                                    photo: url
                                }
                                await ShopOwnerCateAPI.upload(id, cate)
                                alert("Sửa danh mục thành công");
                                window.location.hash = `/seller-channel/categoris`;
                            })
                        })
                    }
                })
                // if (Array.isArray(TotalUpdate)) {
                //     TotalUpdate.forEach((btn, index) => {
                //         btn.addEventListener("click", function() {
                //             const id = btn.dataset.id
                //             const shopowner = shopowners.find(item => item._id == id)



            //         })
            //     })
            // }
            // else {
            //     $("#update-cate-shop").addEventListener("click", function() {

            //         const id = $("#update-cate-shop").dataset.id
            //         const shopowner = shopowners.find(item => item._id == id)

            //         $("#Update").addEventListener("click", async function() {
            //             const photoFiles = $("#update-photo").files[0];

            //             if (photoFiles == undefined) {
            //                 const cate = {
            //                     name: $("#nameCateUpdate").value,
            //                     photo: shopowner.photo
            //                 }
            //                 await ShopOwnerAPI.upload(id, cate)
            //                 await reRender(ManListCate, '#Store-Cate-List')
            //             } else {
            //                 let urlPhoto = firebase.storage().ref(`images/${photoFiles.name}`)
            //                 urlPhoto.put(photoFiles).then(function() {
            //                     urlPhoto.getDownloadURL().then(async(url) => {
            //                         const cate = {
            //                             name: $("#nameCateUpdate").value,
            //                             photo: url
            //                         }
            //                         await ShopOwnerAPI.upload(id, cate)
            //                         await reRender(ManListCate, '#Store-Cate-List')
            //                     })
            //                 })
            //             }
            //         })
            //     })
            // }
        }
        updateCateShop()

    }
}
export default UpdateCate