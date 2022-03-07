import SaveUserAPI from "../../Api/SaveUser";
import ShopOwnerCateAPI from "../../Api/ShopOwnerCate";
import { $ } from "../../ultis";
import Footer from "../page/Header/Footer";
import Header from "../page/Header/HeaderSticky";
import ShopOwnerAPI from '../../Api/ShopOwner';
import { parseRequestUrl } from '../../ultis';
import ProAPI from '../../Api/Products';
import CommodityValueAPI from '../../Api/CommodityValueAPI';

const shopOwnerMain = {
        async render() {
            const ShopOwner = $("#linkCss")
            var head = $("head");
            ShopOwner.href = './src/CssClient/ShopOwner.css';
            await head.appendChild(ShopOwner);
            const { id } = parseRequestUrl()
            const { data: shopownercate } = await ShopOwnerCateAPI.getAll()
            const { data: shopowner } = await ShopOwnerAPI.getAll()
            const { data: products } = await ProAPI.getAll()
            const { data: commodityvalue } = await CommodityValueAPI.getAll();


            const shopOwner = shopowner.find(item => item._id == id)
            const proShop = products.filter(item => item.shop_id == shopOwner._id)

            const cateShop = shopownercate.filter((item, index) => {
                if (item.shop_id == id) {
                    return item
                }

            })


            function extraList() {
                if (cateShop.length > 4) {
                    const extraList = shopownercate.filter((item, index) => {
                        if (item.shop_id == id) {
                            return item
                        }

                    })

                    return /*html*/ `
                    <div class="more-menu"> thêm <i class="fas fa-sort-up"></i>
                        <ul>
                            ${
                                extraList.map(item => {
                                    return /*html*/ `
                                        <li>${item.name}</li>
                                    `
                                }).join("")
                            }
                        </ul>
                    </div>
                        `
                }
                else{
                    return ``
                }
            }
            return /*html*/ `
            <div class="shopee__shop">
                ${await Header.header()}
                    <div class="main">
                        <div class="shop-page">
                            <div class="shop-page_info">
                                <div class="section-salesman">
                                    <img
                                        src="https://1.bp.blogspot.com/-fJOYWF8sRcc/XqPMUl5F0uI/AAAAAAAAipA/FOrgLq4mcqQ23Lp_hA4_QPcjGym-ez4agCLcBGAsYHQ/s1600/Hinh-anh-dep-nhat-the-gioi%2B%25281%2529.jpg"
                                        alt="">
                                    <div class="section-salesman_background">
                                        <div class="section-salesman_name">
                                            <div class="section-salesman_portrait">
                                                <div class="section-salesman_avatar">
                                                    <img
                                                        src="${shopOwner.photo}"
                                                        alt="">
                                                </div>

                                                <div class="section-salesman_info">
                                                    <h3>${shopOwner.nameShop}</h3>
                                                    <p>online 1 giờ trước</p>
                                                </div>
                                            </div>

                                            <div class="section-salesman_buttons">
                                                <button class="follow-page"><i
                                                        class="fas fa-plus"></i> theo
                                                    dõi</button>
                                                <button class="chat-page"><i class="far
                                                        fa-comments"></i> chat</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="section-salesman_info-list">
                                    <div class="section-salesman_info-list_r1">
                                        <div class="section-salesman_name-shop"><i
                                                class="far fa-user"></i> tên shop:
                                            <span>${shopOwner.nameShop}</span></div>
                                        <div class="section-salesman_category"><i
                                                class="fas
                                                fa-boxes"></i> danh mục: <span>${shopownercate.length}</span></div>
                                        <div class="section-salesman_products-list"><i
                                                class="fas fa-box"></i> sản phẩm: <span>${proShop.length}</span>
                                        </div>
                                    </div>
                                    <div class="section-salesman_info-list_r2">
                                        <div class="section-salesman_user-follow"><i
                                                class="fas fa-user-tie"></i> người theo
                                            dõi: <span>${shopOwner.followers}</span></div>
                                        <div class="section-salesman_valuable">
                                            <i class="fas fa-user-check"></i> đánh giá:
                                            <span>32</span>
                                        </div>
                                        <div class="admin-shop">
                                            <i class="fas fa-user-cog"></i>
                                            <a href="/#/seller-channel/statistical">Quản Lý Shop</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="shope-page-menu">
                            <div class="navbar">
                                <ul>
                                    <li><a href=""> tổng quát</a></li>
                                    <li><a href="">tất cả sản phẩm</a> </li>
                                    ${
                                        cateShop.map((item)=>{
                                                return /*html*/ `
                                                    <li><a href="">${item.name}</a></li>
                                                `
                                        }).join("")
                                    }
                           
                                   ${extraList()}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="slides-page">
                            <div class="slider">
                                <a href="">
                                    <img
                                        src="https://intphcm.com/data/upload/mau-banner-hinh-anh.jpg"
                                        alt="">
                                </a>
                                <a href="">
                                    <img
                                        src="https://i.pinimg.com/originals/1a/51/2d/1a512d6c556f62abd08c9ed2b829d1d2.png"
                                        alt="">
                                </a>
                                <a href="">
                                    <img
                                        src="https://i.pinimg.com/736x/ac/31/d1/ac31d1acbbda8897ce0edf63c81b4acf.jpg"
                                        alt="">
                                </a>
                                <a href="">
                                    <img
                                        src="https://tuvancongnghe.net/wp-content/uploads/2020/03/kh%C3%B3a-h%E1%BB%8Dc-qu%E1%BA%A3ng-c%C3%A1o.png"
                                        alt="">
                                </a>
                            </div>
                            <button class="next"><i class="fas fa-angle-right"></i></button>
                            <button class="prev"><i class="fas fa-angle-left"></i></button>
                            <div class="images-dots">
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="shop-info">
                        <h4>thông tin của shop</h4>
                        <span> 
                                    💮💮💮 Ngọc Hân Clothes 💮💮💮
                            Shop chuyên quần áo trẻ em, người lớn hàng hot trend, xuất
                            dư, ...
                            Mỹ phẩm chính hàng (chuyên pass hàng auth, săn sale, ...)
                            Cam kết hàng chính hãng, chất lượng, giá cả phải chăng
                            ---------------------------------------------------------------------
                            ☎ Hotline: 0988.005.028
                            🏪 Link shop: facebook.com/hanbabyshop96
                            🛒 Shopee : shopee.vn/ngoc.han.96
                            💌 Inbox shop : m.me/hanbabyshop96
                            🌎 Địa chỉ: số 13/117 Trung Sơn Trầm, Sơn Tây, Hà Nội🔔🎀🔔
                        </span>
                    </div>
                    <div class="shop-products-view">
                        <h4><i
                                class="fas fa-box"></i> sản phẩm của shop</h4>
                        <div class="products-title_show">
                            <ul>
                            ${
                                proShop.map(item=>{
                                    const p = commodityvalue.filter(com => {
                                        if (com.pro_id == item._id) {
                                            return com
                                        }
                                    })
                                    const showPrice = p.map(item => {
                                        return item.price
                                    })
                                    var minPrice = Math.min.apply(Math, showPrice)

                                    return /*html*/ `
                                        <li>
                                            <a href="/#/detail/product/${item._id}">
                                                <div class="products-img"><img
                                                        src="${item.cover_image}"
                                                        alt="">
                                                </div>
                                                <div class="slae-pro"><span>${item.sale}%</span>
                                                    giảm</div>
                                                <div class="products-item_content">
                                                    <div class="products_name">${item.name}</div>
                                                    <div class="products-price">
                                                        <span>${minPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ</span><span>đã
                                                            bán 2.4k</span>
                                                    </div>
                                                </div>
                                                <div class="addToCart"><span>add to
                                                        cart</span></div>
                                            </a>
                                        </li>
                                    `
                                }).join("")
                            }
                                
                            </ul>
                            <div class="btn-seemore"><button>xem thêm</button></div>
                        </div>
                    </div>
                    ${await Footer.footer()}
            </div>

        `
    },
    async afterRender(){
        const slides_page = $(".slides-page");
        const slider = $(".slider");
        const img = $(".slider>a>img");

        const widthImg = slides_page.offsetWidth * img.length;
        slider.style.width = `${widthImg + "px"}`;
        for (var i = 0; i < img.length; i++) {
            img[i].style.width = `${slides_page.offsetWidth + "px"}`;
        }

        const next = $(".next");
        const prev = $(".prev");
        const images_dots = $(".images-dots>ul>li");
        var count = 0;
        var dem = 0;
        images_dots[0].classList.add("acteive-dots");

        function slides() {
            if (count >= (img.length - 1) * slides_page.offsetWidth) {
                count = 0;
                slider.style.transition = "ease-in 0s";
                slider.style.transform = `translateX(${-count}px)`;
                if (dem >= img.length - 1) {
                    dem = 0;
                }
                for (var i = 0; i < img.length; i++) {
                    images_dots[i].classList.remove("acteive-dots");
                }
                images_dots[0].classList.add("acteive-dots");
            } else {
                dem++;
                for (var i = 0; i < img.length; i++) {
                    images_dots[i].classList.remove("acteive-dots");
                }

                images_dots[dem].classList.add("acteive-dots");
                // }
                count += slides_page.offsetWidth;
                slider.style.transform = `translateX(${-count}px)`;
                slider.style.transition = "ease-in 1s";
            }
        }
        setInterval(slides, 10000);
        next.addEventListener("click", function() {
            slides();
        });
        prev.addEventListener("click", function() {
            if (count <= 0) {
                count = (img.length - 1) * slides_page.offsetWidth;
                slider.style.transition = "ease-in 0s";
                slider.style.transform = `translateX(${-count}px)`;
                if (dem <= 0) {
                    dem = img.length - 1;
                }
                for (var i = 0; i < img.length; i++) {
                    images_dots[i].classList.remove("acteive-dots");
                }
                images_dots[dem].classList.add("acteive-dots");
            } else {
                dem--;
                for (var i = 0; i < img.length; i++) {
                    images_dots[i].classList.remove("acteive-dots");
                }
                images_dots[dem].classList.add("acteive-dots");
                // }
                count -= slides_page.offsetWidth;
                slider.style.transform = `translateX(${-count}px)`;
                slider.style.transition = "ease-in 1s";
            }
        });
    }
}
export default shopOwnerMain