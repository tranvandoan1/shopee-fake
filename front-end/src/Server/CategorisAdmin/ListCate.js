import CateAPI from "../../Api/Categoris"
import { $, reRender } from "../../ultis"
import AddCate from "./AddCate"
import UpdateCate from "./UpdateCate"
import DeleteCate from "./DeleteCate"


const ListCate = {
    async render() {
        return /*html*/ `
            <div class="admin-categoris_list">
                <table border="1">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Ảnh đại diện</th>
                            <th>Tên</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody id="list-cate">

                    </tbody>
                </table>
                
            </div>
            <!-- phân trang -->

            <div class="paging-products">
                <div class="paging-prev"><i class="fas fa-angle-left"></i></div>
                <ul id="List-Page">

                </ul>
                <div class="paging-next"><i class="fas fa-angle-right"></i></div>
            </div>

            <!-- thêm danh mục shop -->
            <div class="main-add_cate">
                <div class="add-categoris">
                    <div class="add-categoris-header">
                        <h3>Thêm danh mục</h3>
                    </div>
                    <div class="add" id="add-cate">
                        <div class="add-name">
                            <span>Tên danh mục </span>
                            <div class="add-name_input">
                                <input type="text" id="nameCate" placeholder="Thêm danh mục ...">
                            </div>
                        </div>
                        <div class="add-photo">
                            <span>Ảnh danh mục</span>
                      
                            <input type="file" name="" value="" id="photo">
                        </div>
                        <button id="add-Cate">Thêm </button>
                        <button class="cancel"> <a >Hủy</a></button>
                    </div>
                </div>
            </div>

       
        

        `
    },
    async afterRender() {
        const { data: categoris } = await CateAPI.getAll()

        categoris.reverse()

        let productArr = [];
        productArr = categoris


        // phân trang


        const paging_prev = $(".paging-prev");
        const paging_next = $(".paging-next");

        let perPage = 6;
        let currentPage = 1;
        let start = 0;
        let end = perPage;

        let totalPages = Math.ceil(productArr.length / perPage)

        function initRender(productAr, totalPage) {
            listPro(productAr);
            listPage(totalPage);
        }

        initRender(productArr, totalPages)


        function getCurrentPage(currentPage) {
            start = (currentPage - 1) * perPage;
            end = currentPage * perPage
            totalPages = Math.ceil(productArr.length / perPage);
        }

        function listPro(productArr) {
            let cate = productArr.map((item, index) => {
                if (index >= start && index < end) {
                    return /*html*/ `
                        <tr>
                            <td>${index+1}</td>
                            <td><img src="${item.photo}" alt=""></td>
                            <td><span>${item.name}</span></td>
                            <td class="delete_pro">
                                <i data-id="${item._id}" id="box-update" class="fas fa-tools"></i>
                                <!-- sửa sp -->
                                <div class="update-cate">
                                    <div class="cate-box">
                                        <div class="update-categoris-header">
                                            <h3>Thêm danh mục</h3>
                                        </div>
                                        <div class="update">
                                            <div class="update-name">
                                                <span>Tên danh mục </span>
                                                <div class="update-name_input">
                                                    <input type="text" value="${item.name}" id="nameCateUpdate" placeholder="Sửa danh mục ...">
                                                </div>
                                            </div>
                                            <div class="update-photo">
                                                <span>Ảnh danh mục</span>
                                                <span class="update-photo-list">
                                                        <input type="file" value="" name="" id="update-photo"> <br>
                                                        <div class="photo-update">
                                                            <img src="${item.photo}" alt="">
                                                        </div>
                                                    </span>
                                            </div>
                                            <button id="Update">Sửa</button>
                                            <button> <a >Quay lại</a></button>
                                        </div>
                                    </div>
                                </div>
                                <i data-id="${item._id}" id="remove-cate" class="far fa-trash-alt"></i>
                            </td>
                        </tr>
                `
                }
            }).join("");

            $("#list-cate").innerHTML = cate
        }


        paging_next.addEventListener("click", function() {
            currentPage++;

            if (currentPage > totalPages) {
                currentPage = 1
            }

            for (let i = 0; i < cupage.length; i++) {
                cupage[i].classList.remove("active")
            }

            cupage[currentPage - 1].classList.add("active")
            getCurrentPage(currentPage)
            listPro(productArr);

            UpdateCate.render()
            DeleteCate.render()
        });
        paging_prev.addEventListener("click", function() {
            currentPage--;

            if (currentPage < 1) {
                currentPage = totalPages
            }
            for (let i = 0; i < cupage.length; i++) {
                cupage[i].classList.remove("active")
            }

            cupage[currentPage - 1].classList.add("active")
            getCurrentPage(currentPage)

            listPro(productArr);
            UpdateCate.render()
            DeleteCate.render()


        });


        // hiện số trang
        function listPage(totalPages) {
            let html = ''
            html += ` <li class="page-item active"><a class="page-link" >${1}</a></li>`
            for (var i = 2; i <= totalPages; i++) {
                html += ` <li class="page-item"><a class="page-link" >${i}</a></li>`
            }
            if (totalPages === 0) {
                html = ''
            }
            $("#List-Page").innerHTML = html
        }


        // active page
        const cupage = $("#List-Page li")

        function activePage() {
            if (Array.isArray($("#List-Page li"))) {
                cupage.forEach((btn, index) => {
                    btn.addEventListener("click", function() {
                        let value = index + 1;
                        currentPage = value;
                        for (let i = 0; i < cupage.length; i++) {
                            cupage[i].classList.remove("active")
                        }
                        btn.classList.add("active")
                        getCurrentPage(currentPage)
                        listPro(productArr)
                        UpdateCate.render()
                        DeleteCate.render()

                    })
                })
            } else {
                ////
            }
        }
        activePage()

        $("#search").addEventListener("keyup", (event) => {
            if (event.keyCode === 13) {
                currentPage = 1
                productArr = [];
                categoris.forEach(item => {
                    if (item.name.toLocaleLowerCase().includes($("#search").value.toLocaleLowerCase())) {
                        productArr.push(item)
                    }
                });

                getCurrentPage(currentPage);
                initRender(productArr, totalPages)
                activePage()

                UpdateCate.render()
                DeleteCate.render()
            }
        });


        return `
        ${await AddCate.render()}
        ${await UpdateCate.render()}
        ${await DeleteCate.render()}
    `
    }
}
export default ListCate