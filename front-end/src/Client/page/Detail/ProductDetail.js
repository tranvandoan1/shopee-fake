import ProAPI from "../../../Api/Products";
import { $, parseRequestUrl } from "../../../ultis"
import ProductOder from "./ProductOder";
const ProductDetail = {
    async render() {
        const { id } = parseRequestUrl()
        const { data: products } = await ProAPI.getAll()
        const product = products.find(pro => id == pro._id)
        return /*html*/ `
            <!-- DETAIL -->
            <div class="page-detail">
                <div class="detail-wrapper">
                    <div class="detail-columm_left">
                        <div class="group-images">
                            <div class="img-detail">
                                <img src="${product.cover_image}" alt=""></div>
                        </div>
                        <div class="img-detail_show">
                            <div class="box-img">
                                <img src="${product.cover_image}" alt="">
                            </div>
                            <div class="box-img">
                                <img src="${product.photo1}" alt="">
                            </div>
                            <div class="box-img">
                                <img src="${product.photo2}" alt="">
                            </div>
                            <div class="box-img">
                                <img src="${product.photo3}" alt="">
                            </div>
                            <div class="box-img">
                                <img src="${product.photo4}" alt="">
                            </div>

                        </div>
                    </div>
                    <div id="render-detail">
                    ${await ProductOder.render()}

                  
                    </div>

                    <!-- addToCart mobile -->
                    <div class="box-cart-mobile">
                        <div class="addToCart-mobile">
                            <div class="d-nameProduct">
                                <span><img
                                        src="https://icdn.dantri.com.vn/thumb_w/640/2019/03/06/nhiepanhgia-2-1551849137024.jpg"
                                        alt=""></span>
                                <span>FREESHIP > ÁO KHOÁC KAKI HỘP NAM NỮ HÌNH
                                    THẬT HÀNG BAO ĐẸP, BAO CHẤT (poles..)</span>
                            </div>
                            <div class="d-type-mb">
                                <h4> tên rèm</h4>
                                <div class="type-mb">
                                    <ul>
                                        <li>
                                            <a>xanh xương rồng</a>
                                            <div class="check-type-mb">
                                                <div class="check-mb">
                                                    <i class="fas fa-check"></i>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <a>hồng thỏ trắng</a>
                                            <div class="check-type-mb">
                                                <div class="check-mb">
                                                    <i class="fas fa-check"></i>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <a>Hoa trắng dâu tây</a>
                                            <div class="check-type-mb">
                                                <div class="check-mb">
                                                    <i class="fas fa-check"></i>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <a>xanh caro</a>
                                            <div class="check-type-mb">
                                                <div class="check-mb">
                                                    <i class="fas fa-check"></i>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <a>xanh bơ</a>
                                            <div class="check-type-mb">
                                                <div class="check-mb">
                                                    <i class="fas fa-check"></i>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="d-size-mb">
                                <h4>kích thước</h4>
                                <div class="size-mb">
                                    <ul>
                                        <li>
                                            <a>0.9mx1m</a>
                                            <div class="check-size-mb">
                                                <div class="check_z-mb">
                                                    <i class="fas fa-check"></i>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <a>1mx1m2</a>
                                            <div class="check-size-mb">
                                                <div class="check_z-mb">
                                                    <i class="fas fa-check"></i>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <a>1m2x1m5</a>
                                            <div class="check-size-mb">
                                                <div class="check_z-mb">
                                                    <i class="fas fa-check"></i>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="quantity-mb">
                                <h4>số lượng</h4>
                                <div class="q-quantity-mb">
                                    <button class="q-minus-mb">-</button>
                                    <input type="text" value="1">
                                    <button class="q-add-mb">+</button>
                                </div>
                            </div>
                            <div class="b-addToCart-mb">
                                <div class="b-addCart-mb"><i class="fas
                                        fa-cart-plus"></i> thêm vào giỏ hàng</div>
                                <div class="b-buy_now-mb">mua ngay </div>
                            </div>
                        </div>
                    </div>

                    <!-- button addToCart mobile -->
                    <div class="d-addToCart-mb">
                        <div class="addCart-mb"><i class="fas fa-cart-plus"></i> thêm vào giỏ hàng</div>
                        <div class="buy_now-mb">mua ngay </div>
                    </div>
                </div>
                <!-- show img detail -->
                <div class="d-img-show">
                    <div class="d_img">
                        <div class="d-img_left">
                            <div class="img-box">
                                <img src="${product.cover_image}" alt="">
                            </div>
                        </div>
                        <div class="d-img_right">
                            <span>
                                ${product.name}
                            </span>
                            <ul>
                                <li><img src="${product.cover_image}" alt=""></li>
                                <li><img src="${product.photo1}" alt=""></li>
                                <li><img src="${product.photo2}" alt=""></li>
                                <li><img src="${product.photo3}" alt=""></li>
                                <li><img src="${product.photo4}" alt=""></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    async afterRender() {

        //  show ảnh
        const img_box = $(".d-img_right>ul>li>img");
        const img_boxShow = $(".img-box");

        img_box.forEach((img, index) => {
            img.addEventListener("click", function() {
                for (var i = 0; i < img_box.length; i++) {
                    img_box[i].style.border = "none";
                }
                img.style.border = "1px solid rgb(238, 77, 45)";

                img_boxShow.innerHTML =
                    img_boxShow.src = `<img src="${img.src}"alt=""></div>`;
            });
        });

        // ẩn hiện show ảnh deatil
        const d_img_show = $(".d-img-show");
        const d_img = $(".d_img");
        const detail_columm_left = $(".detail-columm_left");

        detail_columm_left.addEventListener("click", function() {
            d_img_show.classList.add("hh");
            d_img.classList.add("mm");
        });
        window.addEventListener("click", function(e) {
            if (e.target == d_img_show) {
                d_img_show.classList.remove("hh");
                d_img.classList.remove("mm");
            }
        });
        // hover hiện ảnh reponsive
        const bodyy = $(".shopee__shop");
        const img_boxx = $(".img-detail_show>.box-img>img");
        const img_boxShoww = $(".group-images>.img-detail");
        if (bodyy)
            img_boxx.forEach((img) => {
                img.addEventListener("click", function() {
                    img_boxShoww.innerHTML = `<img src="${img.src}"alt="">`;
                });
            });

        // js khi reponsive
        // type
        const check_type_mb = $(".check-type-mb");
        const check_a_mb = $(".type-mb>ul>li>a");
        const check_boder_mb = $(".type-mb>ul>li");
        const type_mb = $(".type-mb>ul>li");
        type_mb.forEach((item, index) => {
            item.addEventListener("click", function() {
                const check__type_mb = check_type_mb[index];
                const check__a_mb = check_a_mb[index];
                const check__boder_mb = check_boder_mb[index];

                function check() {
                    for (var i = 0; i < check_type_mb.length; i++) {
                        check_type_mb[i].style.display = "none";
                        check_a_mb[i].style.color = "black";
                        check_boder_mb[i].style.border = "1px solid rgb(233, 233, 233)";
                    }
                }
                if (check__type_mb.style.display === "block") {
                    check();
                } else {
                    check();
                    check__type_mb.style.display = "block";
                    check__a_mb.style.color = "rgb(238, 77, 45)";
                    check__boder_mb.style.border = "1px solid rgb(238, 77, 45)";
                }
            });
        });

        // size
        const check_size_mb = $(".check-size-mb");
        const check_a_z_mb = $(".size-mb>ul>li>a");
        const check_boder_size_mb = $(".size-mb>ul>li");
        const size_mb = $(".size-mb>ul>li");
        size_mb.forEach((item, index) => {
            item.addEventListener("click", function() {
                const check__type_mb = check_size_mb[index];
                const check__a_z_mb = check_a_z_mb[index];
                const check__boder_size_mb = check_boder_size_mb[index];

                function check() {
                    for (var i = 0; i < check_size_mb.length; i++) {
                        check_size_mb[i].style.display = "none";
                        check_a_z_mb[i].style.color = "black";
                        check_boder_size_mb[i].style.border = "1px solid rgb(233, 233, 233)";
                    }
                }
                if (check__type_mb.style.display === "block") {
                    check();
                } else {
                    check();
                    check__type_mb.style.display = "block";
                    check__a_z_mb.style.color = "rgb(238, 77, 45)";
                    check__boder_size_mb.style.border = "1px solid rgb(238, 77, 45)";
                }
            });
        });
        // số lượng khi reponsive
        const q_minus_mb = $(".q-minus-mb");
        const q_add_mb = $(".q-add-mb");
        const q_input_mb = $(".q-quantity-mb>input");
        q_minus_mb.addEventListener("click", function() {
            if (q_input_mb.value == 1) {
                q_minus_mb.disabled = true;
            } else {
                q_minus_mb.disabled = false;
                q_input_mb.value = parseInt(q_input_mb.value) - 1;
            }
        });
        q_add_mb.addEventListener("click", function() {
            q_minus_mb.disabled = false;
            q_input_mb.value = parseInt(q_input_mb.value) + 1;
        });

        // kick vào thêm hoặc mua sp thì hiện bằng chọn size và kiểu sản phẩm
        const box_cart_mobile = $(".box-cart-mobile");
        const d_addToCart_mb = $(".d-addToCart-mb");
        const addCart_mb = $(".addCart-mb");
        const buy_now_mb = $(".buy_now-mb");

        function box() {
            box_cart_mobile.classList.add("box-visible");
            addCart_mb.classList.add("addToCart-visible");
            d_addToCart_mb.style.visible = "hidden";
        }
        addCart_mb.addEventListener("click", function() {
            box();
        });
        buy_now_mb.addEventListener("click", function() {
            box();
        });
        window.addEventListener("click", function(e) {
            if (e.target == box_cart_mobile) {
                box_cart_mobile.classList.remove("box-visible");
                addCart_mb.classList.remove("addToCart-visible");
                d_addToCart_mb.style.visible = "visible";
            }
        });
        return /*html*/ `
            ${await ProductOder.afterRender()}
        `

    }

}
export default ProductDetail