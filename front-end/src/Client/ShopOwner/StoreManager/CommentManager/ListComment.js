import CommentAPI from "../../../../Api/CommentAPI"
import ShopOwnerAPI from '../../../../Api/ShopOwner';
import SaveUserAPI from '../../../../Api/SaveUser';
import ProAPI from '../../../../Api/Products';
import UserAPI from '../../../../Api/Users';
import { $ } from "../../../../ultis";

const ListComment = {
    async render() {
        const { data: comments } = await CommentAPI.getAll()
        const { data: shopowners } = await ShopOwnerAPI.getAll()
        const { data: saveuser } = await SaveUserAPI.getAll()
        const { data: products } = await ProAPI.getAll()
        const idUser = saveuser.find(item => {
            return item
        })
        const shopowner = shopowners.find(item => item.user_id == idUser.user_id)

        const newProducts = products.filter(item => item.shop_id == shopowner._id)

        const ListCmt = newProducts.map(pro => {
            const cmt = comments.filter(cmt => pro._id == cmt.pro_id)
            const timeCmt = cmt.map(item => {
                if (item.pro_id == pro._id) {
                    return item.createdAt;
                }
            })
            const listName = cmt.map(item => {
                if (item.pro_id == pro._id) {
                    return pro.name;
                }
            })
            const NewArrayCmt = Array.from(new Set(listName)) //lọc những tên giống nhau
            const NewListCmt = {
                pro_id: pro._id,
                name: NewArrayCmt[0],
                quantity: listName.length,
                time: timeCmt[0]
            }
            return NewListCmt
        })
        const ArrayCmt = ListCmt.filter(item => item)
        const ArrayComments = ArrayCmt.filter(item => {
                if (item.name !== undefined) {
                    return item
                }
            })
            // console.log(ArrayCmt)

        // const commentArr = []
        // comments.filter(item => {
        //     newProducts.map(pro => {
        //         if (item.pro_id == pro._id) {
        //             commentArr.push(item)
        //         }

        //     })
        // })

        // console.log(commentArr)

        // const cateShop = shopownercate.filter(item => item.shop_id == shopowner._id)

        // commentArr.reverse()
        // let commensArr = []
        // commensArr = commentArr



        // phân trang
        let perPage = 8;
        let currentPage = 1;
        let start = 0;
        let end = perPage;

        let totalPages = Math.ceil(ArrayComments.length / perPage)

        function initRender(ArrayComment, totalPage) {
            listShopOwner(ArrayComment)
                // listPageCate(totalPage)
        }

        initRender(ArrayComments, totalPages)

        // function getCurrentPage(currentPage) {
        //     start = (currentPage - 1) * perPage;
        //     end = currentPage * perPage;
        //     totalPages = Math.ceil(commensArr.length / perPage);
        // }
        // let lisComment = commensArr.map((item, index) => {
        //     users.map(user => {
        //         if (user._id == item.user_id) {
        //             console.log(user.name)

        //         }
        //     })
        // })


        function listShopOwner(ArrayComments) {
            let lisComment = ArrayComments.map((item, index) => {
                if (index >= start && index < end) {
                    return /*html*/ `
                            <tr>
                                <td>${index+1}</td>
                                <td class="name_pro">${item.name}</td>
                                <td>${item.quantity}</td>
                                <td>
                                   <a href="/#/seller-channel/detail-comment/${item.pro_id}"> <i class="far fa-eye"></i></a>
                                </td>
                            </tr>
                        `
                }
            }).join("")
            $("#list-comment").innerHTML = lisComment

        }

        // // hiện số trang
        // function listPageCate(totalPages) {
        //     let html = '';
        //     html += `<li class="active-page">${1}</li>`;
        //     for (let i = 2; i <= totalPages; i++) {
        //         html += `<li>${i}</li>`

        //     }
        //     if (totalPages == 0) {
        //         html = ''
        //     }
        //     $("#list-page-cate-shop").innerHTML = html
        // }

        // const Total_Pages = $("#list-page-cate-shop>li")

        // $("#next").addEventListener("click", function() {
        //     currentPage++;
        //     if (currentPage > totalPages) {
        //         currentPage = 1;
        //     }
        //     for (let i = 0; i < Total_Pages.length; i++) {
        //         Total_Pages[i].classList.remove("active-page");
        //     }
        //     Total_Pages[currentPage - 1].classList.add("active-page");
        //     getCurrentPage(currentPage);
        //     listShopOwner(shopownercateArr);
        //     ManDeleteCate.render();

        // })

        // $("#prev").addEventListener("click", function() {
        //     currentPage--;
        //     if (currentPage < 1) {
        //         currentPage = totalPages;
        //     }
        //     for (let i = 0; i < Total_Pages.length; i++) {
        //         Total_Pages[i].classList.remove("active-page");
        //     }
        //     Total_Pages[currentPage - 1].classList.add("active-page");
        //     getCurrentPage(currentPage);
        //     listShopOwner(shopownercateArr);
        //     ManDeleteCate.render();

        // })

        // function activePage() {
        //     if (Array.isArray(Total_Pages)) {
        //         Total_Pages.forEach((btn, index) => {
        //             btn.addEventListener("click", function() {
        //                 currentPage = index + 1;
        //                 for (let i = 0; i < Total_Pages.length; i++) {
        //                     Total_Pages[i].classList.remove("active-page");
        //                 }
        //                 btn.classList.add("active-page");
        //                 getCurrentPage(currentPage);
        //                 listShopOwner(shopownercateArr)
        //                 DeleteCate.render()
        //             })
        //         })
        //     }
        // }
        // activePage()


        // hiện chi tiết bình luận

    }
}
export default ListComment