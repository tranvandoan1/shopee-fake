import SaveOderAPI from "../../../Api/SaveOder";
import { $ } from "../../../ultis";
import HeaderNavbar from "../Header/HeaderNavbar"
import Footer from "../Header/Footer"
import ListCart from './ListCart';

const CartPage = {
    async render() {
        const CartPage = $("#linkCss")
        var head = $("head");
        CartPage.href = './src/CssClient/Cart.css';
        head.appendChild(CartPage);

        return /*html*/ `
             <!-- main -->
             <div class="shopee__shop">
                ${await HeaderNavbar.header()}
                <div class="cart-page-header-wrapper">
                    <div class="wapper">
                        <div class="cart-page-header">
                            <div class="cart-page-logo">
                                <a href="/#/">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Shopee.svg/2560px-Shopee.svg.png" alt="">
                                </a>
                                <span>Giỏ Hàng</span>
                            </div>
                            <div class="cart-page-search">
                                <input type="text" name="" id="" placeholder="Tìm kiếm .....">
                                <button><i class="fas fa-search"></i></button>
                            </div>
                        </div>
                    </div>
            
                    <div class="cart-page-products">
                        <div class="cart-page-pr_header">
                         <!--   <div class="pr-check-box">
                                <input type="checkbox">
                            </div>-->
                            <div class="coll-1">sản phẩm</div>
                            <div class="coll-2">đơn giá</div>
                            <div class="coll-3">số lượng</div>
                            <div class="coll-4">số tiền</div>
                            <div class="coll-5">thao tác</div>
                        </div>
                        <div id="cart-page_pr">
                            ${await ListCart.render()}
                            
                        </div>
                        
                    </div>
                </div>
                ${await Footer.footer()}
            </div>
        `
    },
    async afterRender() {

        return /*html*/ `
            ${await ListCart.afterRender()}
        `

    }
}
export default CartPage