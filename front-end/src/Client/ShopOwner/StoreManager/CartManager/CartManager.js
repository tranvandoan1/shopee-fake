import OrderList from './OrderList';
import Frame from './../Frame';

const CartManager = {
    async render() {
        return /*html*/ `
            ${await Frame.render()}
                    <div class="store-oder-products">
                        <div class="store-oder-header">
                            <h3><i class="fas fa-shopping-cart"></i> Đơn hàng</h3>
                        </div>
                        <div class="store-oder-list">
                            <table border="1">
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Tên khách hàng</th>
                                        <th>Tổng số sản phẩm</th>
                                        <th>Tổng tiền</th>
                                        <th>Trạng thái</th>
                                        <th>Thao tác</th>
                                    </tr>
                                </thead>
                                <tbody id="list-oder">
                                    ${await OrderList.render()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </ul>
                </div>
                </div>
            </div>
        </div> 
        `
    },
    async afterRender() {
        return /*html*/ `${await OrderList.afterRender()}`
    }
}
export default CartManager