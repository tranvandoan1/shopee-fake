import ShopOwnerAPI from "../../../Api/ShopOwner"
import ProAPI from '../../../Api/Products';
import { parseRequestUrl } from '../../../ultis';
import { filter } from 'lodash';

const OtherProducts = {
        async render() {
            const { data: products } = await ProAPI.getAll()
            let productIds = products.filter((item, index) => {
                if (index < 3) {
                    return item._id
                }
            })
            productIds = productIds.sort(() => Math.random() - 0.5)

            return /*html*/ `
               <!-- sản phẩm khác -->
               <div class="productss">
               <h4>sản phẩm khác</h4>
               <div class="products-title_show">
                   <ul>
                    ${
                        productIds.map(item=>{
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
                                        <div class="addToCart"><span>add to
                                                    cart</span></div>
                                    </a>
                                </li>
                            ` 
                        }).join("")
                    }
                    
                   </ul>
               </div>
           </div>
        `
    }
}
export default OtherProducts