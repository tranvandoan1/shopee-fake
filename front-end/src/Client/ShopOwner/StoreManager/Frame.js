import SaveUserAPI from "../../../Api/SaveUser";
import { $ } from "../../../ultis"
import SignOut from '../../page/Login_Logput_Signin/SignOut';
import { parseRequestUrl } from './../../../ultis';
import ShopOwnerAPI from './../../../Api/ShopOwner';

const Frame = {
    async render() {
        const { data: saveuser } = await SaveUserAPI.getAll()
        const { data: shopowner } = await ShopOwnerAPI.getAll()
        const { resource2 } = parseRequestUrl()


        const idUser = saveuser.find(item => item)
        const idShopOwner = shopowner.find(item => item.user_id == idUser.user_id)
        if (idUser == undefined) {
            window.location.href = "/#/404"
        } else if (idUser.role == 3) {
            window.location.href = "/#/404"

        } else if (idUser.role == 0 || idUser.role == 1 || idUser.role == 2) {
            const Frame = $("#linkCss")
            var head = $("head");
            Frame.href = './src/CssClient/Frame.css';
            await head.appendChild(Frame);

            function checkUrl() {
                if (resource2 == "categoris") {
                    return /*html*/ `<span>Danh mục</span>`
                } else
                if (resource2 == "products") {
                    return /*html*/ `<span>Sản phẩm</span>`
                } else
                if (resource2 == "comments") {
                    return /*html*/ `<span>Bình luận</span>`
                } else
                if (resource2 == "carts") {
                    return /*html*/ `<span>Đơn hàng</span>`
                } else
                if (resource2 == "statistical") {
                    return /*html*/ `<span>Thống kê</span>`
                }

            }

            return /*html*/ `
                <div class="shopee__shop">
                    <div class="cart-page-header-wrapper">
                        <div class="wapper">
                            <div class="cart-page-header">
                                <div class="cart-page-logo">
                                    <a href="Index.html">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Shopee.svg/2560px-Shopee.svg.png" alt="">
                                    </a>
                                    <span>Quản lý shop của bạn </span>
                                    ${checkUrl()}
                                </div>
                                <div class="cart-page-search">
                                    <button id="signout"><i class="fas fa-sign-out-alt"></i> Đăng xuất</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="my-store">
                        <div class="my-store-hader">
                            <div class="store-hader">
                                <h4>Tất cả</h4>
                                <ul>
                                    <li><a href="/#/seller-channel/statistical"><i class="fas fa-chart-bar"></i> Thống kê</a></li>
                                    <li><a href="/#/seller-channel/categoris"><i class="fas fa-calendar-alt"></i> Danh mục</a></li>
                                    <li><a href="/#/seller-channel/products"><i class="fab fa-product-hunt"></i> Sản phẩm</a> </li>
                                    <li><a href="/#/seller-channel/comments"><i class="far fa-comments"></i> Bình luận</a></li>
                                    <li><a href="/#/seller-channel/carts"><i class="fas fa-shopping-cart"></i> Đơn hàng</a></li>
                                    <li><a href="/#/page/seller-channel/${idShopOwner._id}"><i class="fas fa-arrow-left"></i> Quay lại</a></li>
                                </ul>
                            </div>
                            <div class="my-store-show">
                            <ul>
                             
                          
            `
        }

    },
    async afterRender() {
        $("#signout").addEventListener("click", function() {
            SignOut.render()
        })
    }
}
export default Frame