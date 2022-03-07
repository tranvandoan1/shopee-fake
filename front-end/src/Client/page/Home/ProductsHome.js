import CommodityValueAPI from "../../../Api/CommodityValueAPI";
import ProAPI from "../../../Api/Products"

const ProductsHome = {
    async productsHome() {

        const { data: products } = await ProAPI.getAll();
        const { data: commodityvalue } = await CommodityValueAPI.getAll();

        function html() {
            const html = products.map(pro => {
                const p = commodityvalue.filter(item => {
                    if (item.pro_id == pro._id) {
                        return item
                    }
                })
                const showPrice = p.map(item => {
                    return item.price
                })
                var minPrice = Math.min.apply(Math, showPrice)
                return /*html*/ `
                        <li>
                            <a href="/#/detail/product/${pro._id}">
                                <div class="products-img"><img src="${pro.cover_image}" alt="">
                                </div>
                                <div class="slae-pro"><span>${pro.sale + "%"}</span> giảm
                                </div>
                                <div class="products-item_content">
                                    <div class="products_name">${pro.name}</div>
                                    <div class="products-price">
                                        <span>${minPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ</span><span>đã
                                                bán ${pro.sold}</span>
                                    </div>
                                </div>
                                <div class="addToCart"><span>add to
                                            cart</span></div>
                            </a>
                        </li>
                    `
            }).join("")
            return html
        }


        return /*html*/ `
            <!-- sản phẩm -->
        <div class="products-wrapper">
            <div class="products-title">
                <ul>
                    <li class="activePro">
                        <div class="products-title_item">gợi ý hôm nay
                        </div>
                    </li>
                    <li>
                        <div class="products-title_programme">noel 25/12</div>
                    </li>
                </ul>
            </div>
            <div class="products-show">
                <ul>
                    <li class="pro_show">
                        <div class="products-title_show">
                            <ul>
                                ${html()}
                               
                            </ul>
                            <div class="btn-seemore"><button><a href="/#/products">xem thêm</a></button></div>
                        </div>
                    </li>
                    <li>
                        <div class="products-title_show">
                            <ul>
                                <li>
                                    <a href="">
                                        <div class="products-img"><img src="https://www.tuticare.com/media/product/6829_1_6829.gif" alt=""></div>
                                        <div class="products-item_content">
                                            <div class="products_name">máy tiệt trùng bằng bàn chải đánh răng UTOREX hàn quốc hihi ádhia</div>
                                            <div class="products-price">
                                                <span>1.212.232đ</span><span>đã
                                                        bán 2.4k</span>
                                            </div>
                                        </div>
                                        <div class="addToCart"><span>add to
                                                    cart</span></div>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <div class="products-img"><img src="https://cdn.pico.vn/Product/39419/big_323457_dien_thoai_di_dong_samsung_a205_32gb_do_-_galaxy_a20.jpg" alt=""></div>
                                        <div class="slae-pro"><span>30%</span> giảm
                                        </div>
                                        <div class="products-item_content">
                                            <div class="products_name">máy tiệt trùng bằng bàn chải đánh răng UTOREX hàn quốc hihi ádhia</div>
                                            <div class="products-price">
                                                <span>1.212.232đ</span><span>đã
                                                        bán 2.4k</span>
                                            </div>
                                        </div>
                                        <div class="addToCart"><span>add to
                                                    cart</span></div>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <div class="products-img"><img src="https://img.websosanh.vn/v2/users/review/images/g0uimocg53p63.jpg?compress=85" alt=""></div>
                                        <div class="slae-pro"><span>30%</span> giảm
                                        </div>
                                        <div class="products-item_content">
                                            <div class="products_name">máy tiệt trùng bằng bàn chải đánh răng UTOREX hàn quốc hihi ádhia</div>
                                            <div class="products-price">
                                                <span>1.212.232đ</span><span>đã
                                                        bán 2.4k</span>
                                            </div>
                                        </div>
                                        <div class="addToCart"><span>add to
                                                    cart</span></div>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <div class="products-img"><img src="https://fptshop.com.vn/uploads/originals/2020/9/29/637369735917636373_huong-dan-cach-cai-dat-hinh-nen-may-tinh-win-10-don-gian-8.jpg" alt=""></div>
                                        <div class="slae-pro"><span>30%</span> giảm
                                        </div>
                                        <div class="products-item_content">
                                            <div class="products_name">máy tiệt trùng bằng bàn chải đánh răng UTOREX hàn quốc hihi ádhia</div>
                                            <div class="products-price">
                                                <span>1.212.232đ</span><span>đã
                                                        bán 2.4k</span>
                                            </div>
                                        </div>
                                        <div class="addToCart"><span>add to
                                                    cart</span></div>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <div class="products-img"><img src="https://amthucchayonline.com/wp-content/uploads/2019/10/muopxaomigoi_thumb1.jpg" alt=""></div>
                                        <div class="slae-pro"><span>30%</span> giảm
                                        </div>
                                        <div class="products-item_content">
                                            <div class="products_name">máy tiệt trùng bằng bàn chải đánh răng UTOREX hàn quốc hihi ádhia</div>
                                            <div class="products-price">
                                                <span>1.212.232đ</span><span>đã
                                                        bán 2.4k</span>
                                            </div>
                                        </div>
                                        <div class="addToCart"><span>add to
                                                    cart</span></div>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <div class="products-img"><img src="http://muasamtieudung.net/wp-content/uploads/2013/08/da013d0d1172ed7382350bb4f024df6a-350x261.jpg" alt=""></div>
                                        <div class="slae-pro"><span>30%</span> giảm
                                        </div>
                                        <div class="products-item_content">
                                            <div class="products_name">máy tiệt trùng bằng bàn chải đánh răng UTOREX hàn quốc hihi ádhia</div>
                                            <div class="products-price">
                                                <span>1.212.232đ</span><span>đã
                                                        bán 2.4k</span>
                                            </div>
                                        </div>
                                        <div class="addToCart"><span>add to
                                                    cart</span></div>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <div class="products-img"><img src="https://cuchoami.vn/wp-content/uploads/2020/09/chup-anh-quang-cao-san-pham.jpg" alt=""></div>
                                        <div class="slae-pro"><span>30%</span> giảm
                                        </div>
                                        <div class="products-item_content">
                                            <div class="products_name">máy tiệt trùng bằng bàn chải đánh răng UTOREX hàn quốc hihi ádhia</div>
                                            <div class="products-price">
                                                <span>1.212.232đ</span><span>đã
                                                        bán 2.4k</span>
                                            </div>
                                        </div>
                                        <div class="addToCart"><span>add to
                                                    cart</span></div>
                                    </a>
                                </li>
                            </ul>
                            <div class="btn-seemore-even"><button><a href="/#/products">xem thêm</a></button></div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        `
    }
}
export default ProductsHome