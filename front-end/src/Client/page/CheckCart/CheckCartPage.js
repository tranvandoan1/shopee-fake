import SaveOderAPI from "../../../Api/SaveOder";
import SaveUserAPI from "../../../Api/SaveUser";
import ShopOwnerAPI from "../../../Api/ShopOwner";
import { $ } from "../../../ultis";
import HeaderNavbar from "../Header/HeaderNavbar";
import AddressUser from "./AddressUser";
import OderNow from "./OderNow";

const CheckCartPage = {
        async render() {
            const CheckCartPage = $("#linkCss")
            var head = $("head");
            CheckCartPage.href = './src/CssClient/CheckCartPage.css';
            head.appendChild(CheckCartPage);


            const { data: saveoders } = await SaveOderAPI.getAll();
            const { data: saveuser } = await SaveUserAPI.getAll();
            const { data: shopowner } = await ShopOwnerAPI.getAll();

            const idUser = saveuser.find(item => {
                return item
            })


            // tìm ra tên shop mà có sản phẩm đnag oder
            const nameShopArr = []
            shopowner.filter(shop => {
                saveoders.map(item => {
                    if (item.shop_id == shop._id && item.user_id == idUser.user_id) {
                        nameShopArr.push(shop)
                    }
                })
            })

            // xóa các phần tử trùng nhau
            const nameShop = [...new Set(nameShopArr)]
            const ProOder = saveoders.filter(item => item.user_id == idUser.user_id)

            let TotalPrice = ProOder.map(item => {
                return (Math.ceil(item.price * ((100 - item.sale) / 100)) * item.amount)
            })

            let sumPrice = 0
            for (let i = 0; i < TotalPrice.length; i++) {
                sumPrice += +TotalPrice[i];
            }

            return /*html*/ `
                <div class="shopee__shop">
                    ${await HeaderNavbar.header()}
                     
                    <div class="AddressUser">
                        ${await AddressUser.render()}
                    </div>

                    <div class="cart-main">
                        <div class="cart_products-header">
                            <div class="cart-pr">Sản Phẩm</div>
                            <div class="cart-pr_unit-price">Đơn Giá</div>
                            <div class="cart-pr_quantity">Số Lượng</div>
                            <div class="cart-pr_into-money">Thành Tiền</div>
                        </div>
                    </div>
                
                    ${ nameShop.map(shop=>{ return /*html*/ `
                    <div class="cart-pr_show">
                        <div class="cart-pr_shop">
                            <i class="fas fa-house-user"></i> ${shop.nameShop}
                        </div>
                
                        ${ saveoders.map(item=>{ if(item.shop_id==shop._id && item.user_id==idUser.user_id){ if(item.sale==""){ return /*html*/ `
                        <div class="cart-pr_show-pr">
                            <div class="cart-pr_image-name">
                                <div class="cart-pr_image">
                                    <img src="${item.cover_image }" alt="">
                                </div>
                                <div class="cart-pr_name">
                                    <div class="name">${item.name_pro}</div>
                                    <div class="type">Loại : <span>${item.classification}, ${item.commodity_value}</span></div>
                                </div>
                            </div>
                
                            <div class="unit-price">
                                ${Math.ceil(item.price * ((100 - item.sale) / 100)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} ₫
                            </div>
                            <div class="quantityy">${item.amount}</div>
                            <div class="into-money">${(Math.ceil(item.price * ((100 - item.sale) / 100)) * item.amount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} ₫</div>
                        </div>
                        ` }else { return /*html*/ `
                        <div class="cart-pr_show-pr">
                            <div class="cart-pr_image-name">
                                <div class="cart-pr_image">
                                    <img src="${item.cover_image }" alt="">
                                </div>
                                <div class="cart-pr_name">
                                    <div class="name">${item.name_pro}</div>
                                    <div class="type">Loại : <span>${item.classification}, ${item.commodity_value}</span></div>
                                </div>
                            </div>
                
                            <div class="unit-price">
                                <del>
                                                            ${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} ₫</del> ${Math.ceil(item.price * ((100 - item.sale) / 100)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} ₫
                            </div>
                            <div class="quantityy">${item.amount}</div>
                            <div class="into-money">${(Math.ceil(item.price * ((100 - item.sale) / 100)) * item.amount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} ₫</div>
                        </div>
                        ` } } }).join("") }
                    </div>
                    ` }).join("") }
                
                    <div class="use-coins">
                        <div class="usc-box">
                            <div class="use"><i class="fas fa-dollar-sign"></i> Shopee Xu <span>Dùng 200 Shopee Xu</span></div>
                            <div class="coins">
                                <label for="checkcoin">
                                    <span>-200</span>
                                    <div class="check__coin"></div>
                                </label>
                                <input type="checkbox" id="check-coin">
                            </div>
                        </div>
                    </div>
                    <div class="total-money-oder">
                        <div class="info-money">
                            <div class="total-amount">Tổng tiền hàng: <span>${sumPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}₫</span></div>
                            <div class="shope-coin">Dùng xu shope: <span>-200</span></div>
                            <div class="total-money">Tổng thanh toán : <span>${sumPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}₫</span></div>
                        </div>
                        <div class="oder">
                            ${await OderNow.render()}
                        </div>
                    </div>
                </div>
            `
    },
  async  afterRender(){

    // dùng xu
    const shopeCoin = $(".shope-coin");
    const checkCoin = $(".check__coin");

    checkCoin.addEventListener("click", function () {
    if (shopeCoin.style.display === "none") {
        shopeCoin.style.display = "flex";
        checkCoin.classList.add("checkCoin");
    } else {
        checkCoin.classList.remove("checkCoin");
        shopeCoin.style.display = "none";
    }
    });
   

    return /*html*/ `${await AddressUser.afterRender()},${await OderNow.afterRender()}`

    }
}
export default CheckCartPage