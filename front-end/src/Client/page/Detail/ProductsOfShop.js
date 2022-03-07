import ShopOwnerAPI from '../../../Api/ShopOwner';
import { parseRequestUrl } from '../../../ultis';
import ProAPI from '../../../Api/Products';
const ProductsOfShop = {
        async render() {
            const { data: shopowners } = await ShopOwnerAPI.getAll()
            const { id } = parseRequestUrl()
            const { data: products } = await ProAPI.getAll()

            const product = products.find(item => item._id == id)
            const proShopOwner = shopowners.find(item => item._id == product.shop_id)

            const proOfShop = products.filter(item => item.shop_id == proShopOwner._id)

            return /*html*/ `
               <!-- sản phẩm cùng shop -->
               <div class="detail__products-right">
               <div class="d-products-title_show">
                   <span>sản phẩm khác của shop</span>
                   <ul>
                   ${
                       proOfShop.map(item=>{
                           return /*html*/ `
                                <li>
                                    <a href="/#/detail/product/${item._id}">
                                        <div class="products-img"><img src="${item.cover_image}" alt="">
                                        </div>
                                        <div class="slae-pro"><span>${item.sale}%</span> giảm
                                        </div>
                                        <div class="products-item_content">
                                            <div class="products_name">${item.name}</div>
                                            <div class="products-price">
                                                <span>1.212.232đ</span><span>đã
                                                        bán 2.4k</span>
                                            </div>
                                        </div>
                                        <div class="addToCart"><span>add
                                                    to
                                                    cart</span></div>
                                    </a>
                                </li>
                           `
                       }).join("")
                   }
                   
                       
               </div>
           </div>
        `
    }
}
export default ProductsOfShop