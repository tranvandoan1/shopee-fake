import ShopOwnerAPI from './../../../Api/ShopOwner';
import { parseRequestUrl } from './../../../ultis';
import ProAPI from './../../../Api/Products';
import { filter } from 'lodash';
const ProductAdminMain = {
    async render() {

        const { data: shopowners } = await ShopOwnerAPI.getAll()
        const { id } = parseRequestUrl()
        const { data: products } = await ProAPI.getAll()

        const product = products.find(item => item._id == id)
        const proShopOwner = shopowners.find(item => item._id == product.shop_id)

        const proOfShop = products.filter(item => item.shop_id == proShopOwner._id)

        return /*html*/ `
            <!-- chủ shop -->
            <div class="owner-shop">
            <div class="page-products_shop">
                <div class="info-shop">
            
                    <a href="/#/page/seller-channel/${proShopOwner._id}">
                        <div class="avatar-shop">
                            <img
                                src="${proShopOwner.photo}"
                                alt="">
                        </div>
                    </a>

                    <div class="name-shop">
                        <span>${proShopOwner.nameShop}</span>
                        <span>
                            <i class="fas fa-archive"></i>
                            xem shop
                        </span>
                    </div>
                </div>
                <div class="achievements">
                    <ul>
                        <li>đánh giá <span>3,7k</span> </li>
                        <li>sản phẩm <span>${proOfShop.length}</span></li>
                        <li>bình luận <span>5432</span></li>
                    </ul>
                </div>
            </div>
        </div>

        
        `
    }
}
export default ProductAdminMain