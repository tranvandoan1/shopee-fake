import { $ } from "../../../../ultis"
import AddCate from "./AddCate"
import DeleteCate from "./DeleteCate"
import CateAPI from "../../../../Api/Categoris"
import ShopOwnerCateAPI from "../../../../Api/ShopOwnerCate"
import SaveUserAPI from '../../../../Api/SaveUser';
import ShopOwnerAPI from "../../../../Api/ShopOwner"

const ListCate = {
        async render() {
            const { data: categoris } = await CateAPI.getAll()
            return /*html*/ `
                <div class="store-cate-list">
                    <table border="1">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>ẢNH DANH MỤC</th>
                                <th>TÊN DANH MỤC</th>
                                <th>THAO TÁC</th>
                            </tr>
                        </thead>
                        <tbody id="list-man_cate">
                           
                        </tbody>
                    </table>
                    <div class="store-cate-paging">
                        <button id="prev"><i class="fas fa-angle-left"></i></button>
                        <ul id="list-page-cate-shop">
                            
                        </ul>
                        <button id="next"><i class="fas fa-angle-right"></i></button>
                    </div>
                </div>
                    

                <!-- thêm danh mục shop -->
                <div class="main-shopowner">
                    <div class="add-shopowner">
                        <div class="add-shopowner-header">
                            <h3>Thêm danh mục</h3>
                        </div>
                        <div class="shopowner" >
                            <div class="add-shopowner_name">
                                <span>Tên danh mục </span>
                                <div class="add-shopowner_input">
                                    <input type="text" id="nameShopowner" placeholder="Thêm danh mục ...">
                                </div>
                            </div>
                            <div id="omg">
                            </div>
                            <div class="add-shopowner_name-option">
                                <span>Ngành hàng</span>
                                <div class="add-shopowner_option">
                                    <select name="" id="addCate-select">
                                        ${categoris.map((item, index) => {
                                            return /*html*/ `
                                                <option value="${item._id}">${item.name}</option>
                                                `;
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div class="add-shopowner_photo">
                                <span>Ảnh danh mục</span>
                                <input type="file" name="" value="" id="photo">
                            </div>
                            <button id="add-shopowner">Thêm </button>
                            <button class="shopowner-cancel"> <a >Hủy</a></button>
                        </div>
                    </div>
                </div>


        `
    },
    async afterRender() {
        const { data: shopownercate } = await ShopOwnerCateAPI.getAll()
        const { data: shopowners } = await ShopOwnerAPI.getAll()
        const { data: saveuser } = await SaveUserAPI.getAll()
        const idUser=saveuser.find(item=>{
            return item
        })
        const shopowner=shopowners.find(item=>{
            if(item.user_id==idUser.user_id){
                return item._id
            }
        })

        const cateShop=shopownercate.filter(item=>item.shop_id==shopowner._id)

        cateShop.reverse()
        let shopownercateArr = []
        shopownercateArr = cateShop


        
        // phân trang
        let perPage = 8;
        let currentPage = 1;
        let start = 0;
        let end = perPage;

        let totalPages = Math.ceil(shopownercateArr.length / perPage)

        function initRender(shopownercateAr, totalPage) {
            listShopOwner(shopownercateAr)
            listPageCate(totalPage)
        }

        initRender(shopownercateArr, totalPages)

        function getCurrentPage(currentPage) {
            start = (currentPage - 1) * perPage;
            end = currentPage * perPage;
            totalPages = Math.ceil(shopownercateArr.length / perPage);
        }

        function listShopOwner(shopownercateArr) {
            let shopowner = shopownercateArr.map((item, index) => {
                if (index >= start && index < end) {
                    return /*html*/ `
                    <tr>
                        <td>
                            ${index+1}
                        </td>
                        <td>
                            <img src="${item.photo}" alt="">
                        </td>
                        <td>
                            <p>${item.name}</p>
                        </td>
                        <td>
                           <a href="/#/seller-channel/update-categoris/${item._id}"><i class="fas fa-wrench" id="update-cate-shop" ></i></a> 
                            <i id="remove-cate-shop" class="far fa-trash-alt" data-id="${item._id}"></i>
                        </td>
                    </tr>
                `
                }

            }).join("")
            $("#list-man_cate").innerHTML = shopowner

        }

        // hiện số trang
        function listPageCate(totalPages) {
            let html = '';
            html += `<li class="active-page">${1}</li>`;
            for (let i = 2; i <= totalPages; i++) {
                html += `<li>${i}</li>`

            }
            if (totalPages == 0) {
                html = ''
            }
            $("#list-page-cate-shop").innerHTML = html
        }

        const Total_Pages = $("#list-page-cate-shop>li")

        $("#next").addEventListener("click", function() {
            currentPage++;
            if (currentPage > totalPages) {
                currentPage = 1;
            }
            for (let i = 0; i < Total_Pages.length; i++) {
                Total_Pages[i].classList.remove("active-page");
            }
            Total_Pages[currentPage - 1].classList.add("active-page");
            getCurrentPage(currentPage);
            listShopOwner(shopownercateArr);
            ManDeleteCate.render();
            
        })

        $("#prev").addEventListener("click", function() {
            currentPage--;
            if (currentPage < 1) {
                currentPage = totalPages;
            }
            for (let i = 0; i < Total_Pages.length; i++) {
                Total_Pages[i].classList.remove("active-page");
            }
            Total_Pages[currentPage - 1].classList.add("active-page");
            getCurrentPage(currentPage);
            listShopOwner(shopownercateArr);
            ManDeleteCate.render();
            
        })

        function activePage() {
            if (Array.isArray(Total_Pages)) {
                Total_Pages.forEach((btn, index) => {
                    btn.addEventListener("click", function() {
                        currentPage = index + 1;
                        for (let i = 0; i < Total_Pages.length; i++) {
                            Total_Pages[i].classList.remove("active-page");
                        }
                        btn.classList.add("active-page");
                        getCurrentPage(currentPage);
                        listShopOwner(shopownercateArr)
                        DeleteCate.render()
                    })
                })
            }
        }
        activePage()
        return `
        ${await AddCate.render()}
        ${await DeleteCate.render()}
        `
    }
}
export default ListCate