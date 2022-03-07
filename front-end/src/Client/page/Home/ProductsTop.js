import CommodityValueAPI from "../../../Api/CommodityValueAPI"
import ProAPI from "../../../Api/Products"
import { $ } from "../../../ultis"

const ProductsTop = {
    async productSeachTop() {
        const { data: products } = await ProAPI.getAll()
        const { data: commodityvalue } = await CommodityValueAPI.getAll()
        console.log(products)


        const proView = products.map(pro => {
            return pro.view
        })
        const proSort = proView.sort()
        const productArr = []

        proSort.map(item => {
            products.filter(pro => {
                if (item == pro.view) {
                    productArr.push(pro)
                }
            })
        }).join("")

        function html() {
            const html = productArr.map(pro => {
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
                            <div class="imager-products">
                                <img src="${pro.cover_image}" alt="">
                            </div>
                            <span>top</span>
                            <div class="tt-products">
                                <h4>${pro.name}</h4>
                                <div class="price-products">
                                    ${minPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ
                                </div>
                            </div>
                            <div class="addToCartPro">add to cart
                            </div>
                        </a>
                    </li>
                `
            }).join("")
            return html
        }

        return /*html*/ `
             <!-- sp tìm kiếm hàng đầu -->
                <div class="top-search__products">
                    <div class="search-top">
                        <h2>sản phẩm hàng đầu</h2>
                        <a href="">xem tất cả <i class="fas fa-chevron-right"></i></a>
                    </div>
                    <div class="search-products">
                        <div class="show-products">
                            <ul>
                                ${html()}
                            </ul>
                        </div>
                        <button id="pro-prev"><i class="fas fa-angle-left"></i></button>
                        <button id="pro-next"><i class="fas fa-angle-right"></i></button>
                    </div>
                </div>
        `
    },
    async afterRender() {

        // top search products
        const pro = $(".show-products");
        const prev_pro = $("#pro-prev");
        const next_pro = $("#pro-next");
        const proSum = $(".show-products ul li");

        if (proSum.length >= 5) {
            const proWidtBox = proSum[0].offsetWidth;
            const proWidtAllBox = proWidtBox * proSum.length;
            const transition = proWidtAllBox / 2 + proWidtBox / 7;

            let countpro = 0;
            next_pro.addEventListener("click", function() {
                countpro += transition;
                if (countpro > transition) {
                    countpro = 0;
                }
                pro.style.transform = `translateX(${-countpro}px)`;
            });
            prev_pro.addEventListener("click", function() {
                countpro -= transition;

                if (countpro < 0) {
                    countpro = transition;
                }
                pro.style.transform = `translateX(${-countpro}px)`;
            });

            // setInterval(function() {
            //     count1 += widtOneBox;
            //     if (count1 > widtOneBox) {
            //         count1 = 0;
            //     }
            //     pro.style.transform = `translateX(${-count1}px)`;
            // }, 5000)
        }




    }
}
export default ProductsTop