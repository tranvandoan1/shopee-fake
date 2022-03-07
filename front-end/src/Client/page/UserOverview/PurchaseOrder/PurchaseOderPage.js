const PurchaseOderPage = {
    async render() {
        return /*html*/ `
            <div class="purchase-order">
                <div class="purchase-order-header">
                    <ul>
                        <li class="active-oder">Tất cả</li>
                        <li>Chờ xác nhận</li>
                        <li>Chờ lấy hàng</li>
                        <li>Đang giao</li>
                        <li>Đã giao</li>
                        <li>Đã hủy</li>
                    </ul>
                </div>
                <div class="purchase-order-header_list">
                    <ul>
                        <li>
                            <div class="oder-list">
                                <div class="oder-owner">
                                    <span>
                                        <i class="fas fa-house-user"></i> hiệu sách nhã nam <a
                                            href="./ShopOwner.html"><i class="fas fa-inbox"></i> Xem
                                            shop</a>
                                    </span>
                                    <span><i class="fas fa-truck"></i>
                                        <em>Chờ xử lý</em> | <span>ĐÃ GIAO</span>
                                    </span>
                                </div>
                                <div class="oder-list_products">
                                    <div class="olp-left">
                                        <div class="olp-image">
                                            <img src="https://cf.shopee.vn/file/a27ae95f58fc82cd83474c007463d163"
                                                alt="">
                                        </div>
                                        <span>
                                            <div class="olp-name">
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                            </div>
                                            <div class="olp-classification">
                                                Phân loại hàng : đen tắng, hi
                                            </div>
                                            <span>
                                                x5
                                            </span>
                                        </span>
                                    </div>
                                    <div class="olp-right">
                                        <del>₫232.332</del> ₫323.423
                                    </div>
                                </div>
                                <div class="oder-list_products">
                                    <div class="olp-left">
                                        <div class="olp-image">
                                            <img src="https://cf.shopee.vn/file/a27ae95f58fc82cd83474c007463d163"
                                                alt="">
                                        </div>
                                        <span>
                                            <div class="olp-name">
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                            </div>
                                            <div class="olp-classification">
                                                Phân loại hàng : đen tắng, hi
                                            </div>
                                            <span>
                                                x5
                                            </span>
                                        </span>
                                    </div>
                                    <div class="olp-right">
                                        <del>₫232.332</del> ₫323.423
                                    </div>
                                </div>
                                <div class="olp-sum">
                                    <div class="olp-sum_price">
                                        <i class="fab fa-pagelines"></i> Tổng số tiền : <span>₫12.322</span>
                                    </div>
                                    <div class="olp-button">
                                        <button>Mua lại</button>
                                        <button>Liên hê người bán</button>
                                        <button>Chi tiết đơn hàng</button>
                                    </div>
                                </div>
                            </div>

                            <div class="oder-list">
                                <div class="oder-owner">
                                    <span>
                                        <i class="fas fa-house-user"></i> hiệu sách nhã nam <a
                                            href="./ShopOwner.html"><i class="fas fa-inbox"></i> Xem
                                            shop</a>
                                    </span>
                                    <div class="cancelled">
                                        <span>ĐÃ HỦY</span>
                                    </div>
                                </div>
                                <div class="oder-list_products">
                                    <div class="olp-left">
                                        <div class="olp-image">
                                            <img src="https://cf.shopee.vn/file/a27ae95f58fc82cd83474c007463d163"
                                                alt="">
                                        </div>
                                        <span>
                                            <div class="olp-name">
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                            </div>
                                            <div class="olp-classification">
                                                Phân loại hàng : đen tắng, hi
                                            </div>
                                            <span>
                                                x5
                                            </span>
                                        </span>
                                    </div>
                                    <div class="olp-right">
                                        <del>₫232.332</del> ₫323.423
                                    </div>
                                </div>
                                <div class="oder-list_products">
                                    <div class="olp-left">
                                        <div class="olp-image">
                                            <img src="https://cf.shopee.vn/file/a27ae95f58fc82cd83474c007463d163"
                                                alt="">
                                        </div>
                                        <span>
                                            <div class="olp-name">
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                            </div>
                                            <div class="olp-classification">
                                                Phân loại hàng : đen tắng, hi
                                            </div>
                                            <span>
                                                x5
                                            </span>
                                        </span>
                                    </div>
                                    <div class="olp-right">
                                        <del>₫232.332</del> ₫323.423
                                    </div>
                                </div>
                                <div class="olp-sum">
                                    <div class="olp-sum_price">
                                        <i class="fab fa-pagelines"></i> Tổng số tiền : <span>₫12.322</span>
                                    </div>
                                    <div class="olp-button">
                                        <button>Mua lại</button>
                                        <button>Liên hê người bán</button>
                                        <button>Chi tiết đơn hàng</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="oder-list">
                                <div class="oder-owner">
                                    <span>
                                        <i class="fas fa-house-user"></i> hiệu sách nhã nam <a
                                            href="./ShopOwner.html"><i class="fas fa-inbox"></i> Xem
                                            shop</a>
                                    </span>
                                    <span><i class="fas fa-truck"></i>
                                        <em>Chờ xử lý</em> | <span>ĐÃ GIAO</span>
                                    </span>
                                </div>
                                <div class="oder-list_products">
                                    <div class="olp-left">
                                        <div class="olp-image">
                                            <img src="https://cf.shopee.vn/file/a27ae95f58fc82cd83474c007463d163"
                                                alt="">
                                        </div>
                                        <span>
                                            <div class="olp-name">
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                            </div>
                                            <div class="olp-classification">
                                                Phân loại hàng : đen tắng, hi
                                            </div>
                                            <span>
                                                x5
                                            </span>
                                        </span>
                                    </div>
                                    <div class="olp-right">
                                        <del>₫232.332</del> ₫323.423
                                    </div>
                                </div>
                                <div class="oder-list_products">
                                    <div class="olp-left">
                                        <div class="olp-image">
                                            <img src="https://cf.shopee.vn/file/a27ae95f58fc82cd83474c007463d163"
                                                alt="">
                                        </div>
                                        <span>
                                            <div class="olp-name">
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                            </div>
                                            <div class="olp-classification">
                                                Phân loại hàng : đen tắng, hi
                                            </div>
                                            <span>
                                                x5
                                            </span>
                                        </span>
                                    </div>
                                    <div class="olp-right">
                                        <del>₫232.332</del> ₫323.423
                                    </div>
                                </div>
                                <div class="olp-sum">
                                    <div class="olp-sum_price">
                                        <i class="fab fa-pagelines"></i> Tổng số tiền : <span>₫12.322</span>
                                    </div>
                                    <div class="olp-button">
                                        <button>Mua lại</button>
                                        <button>Liên hê người bán</button>
                                        <button>Chi tiết đơn hàng</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="oder-list">
                                <div class="oder-owner">
                                    <span>
                                        <i class="fas fa-house-user"></i> hiệu sách nhã nam <a
                                            href="./ShopOwner.html"><i class="fas fa-inbox"></i> Xem
                                            shop</a>
                                    </span>
                                    <span><i class="fas fa-truck"></i>
                                        <em>Chờ xử lý</em> | <span>ĐÃ GIAO</span>
                                    </span>
                                </div>
                                <div class="oder-list_products">
                                    <div class="olp-left">
                                        <div class="olp-image">
                                            <img src="https://cf.shopee.vn/file/a27ae95f58fc82cd83474c007463d163"
                                                alt="">
                                        </div>
                                        <span>
                                            <div class="olp-name">
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                            </div>
                                            <div class="olp-classification">
                                                Phân loại hàng : đen tắng, hi
                                            </div>
                                            <span>
                                                x5
                                            </span>
                                        </span>
                                    </div>
                                    <div class="olp-right">
                                        <del>₫232.332</del> ₫323.423
                                    </div>
                                </div>
                                <div class="oder-list_products">
                                    <div class="olp-left">
                                        <div class="olp-image">
                                            <img src="https://cf.shopee.vn/file/a27ae95f58fc82cd83474c007463d163"
                                                alt="">
                                        </div>
                                        <span>
                                            <div class="olp-name">
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                            </div>
                                            <div class="olp-classification">
                                                Phân loại hàng : đen tắng, hi
                                            </div>
                                            <span>
                                                x5
                                            </span>
                                        </span>
                                    </div>
                                    <div class="olp-right">
                                        <del>₫232.332</del> ₫323.423
                                    </div>
                                </div>
                                <div class="olp-sum">
                                    <div class="olp-sum_price">
                                        <i class="fab fa-pagelines"></i> Tổng số tiền : <span>₫12.322</span>
                                    </div>
                                    <div class="olp-button">
                                        <button>Mua lại</button>
                                        <button>Liên hê người bán</button>
                                        <button>Chi tiết đơn hàng</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="oder-list">
                                <div class="oder-owner">
                                    <span>
                                        <i class="fas fa-house-user"></i> hiệu sách nhã nam <a
                                            href="./ShopOwner.html"><i class="fas fa-inbox"></i> Xem
                                            shop</a>
                                    </span>
                                    <span><i class="fas fa-truck"></i>
                                        <em>Chờ xử lý</em> | <span>ĐÃ GIAO</span>
                                    </span>
                                </div>
                                <div class="oder-list_products">
                                    <div class="olp-left">
                                        <div class="olp-image">
                                            <img src="https://cf.shopee.vn/file/a27ae95f58fc82cd83474c007463d163"
                                                alt="">
                                        </div>
                                        <span>
                                            <div class="olp-name">
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                            </div>
                                            <div class="olp-classification">
                                                Phân loại hàng : đen tắng, hi
                                            </div>
                                            <span>
                                                x5
                                            </span>
                                        </span>
                                    </div>
                                    <div class="olp-right">
                                        <del>₫232.332</del> ₫323.423
                                    </div>
                                </div>
                                <div class="oder-list_products">
                                    <div class="olp-left">
                                        <div class="olp-image">
                                            <img src="https://cf.shopee.vn/file/a27ae95f58fc82cd83474c007463d163"
                                                alt="">
                                        </div>
                                        <span>
                                            <div class="olp-name">
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                            </div>
                                            <div class="olp-classification">
                                                Phân loại hàng : đen tắng, hi
                                            </div>
                                            <span>
                                                x5
                                            </span>
                                        </span>
                                    </div>
                                    <div class="olp-right">
                                        <del>₫232.332</del> ₫323.423
                                    </div>
                                </div>
                                <div class="olp-sum">
                                    <div class="olp-sum_price">
                                        <i class="fab fa-pagelines"></i> Tổng số tiền : <span>₫12.322</span>
                                    </div>
                                    <div class="olp-button">
                                        <button>Mua lại</button>
                                        <button>Liên hê người bán</button>
                                        <button>Chi tiết đơn hàng</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="oder-list">
                                <div class="oder-owner">
                                    <span>
                                        <i class="fas fa-house-user"></i> hiệu sách nhã nam <a
                                            href="./ShopOwner.html"><i class="fas fa-inbox"></i> Xem
                                            shop</a>
                                    </span>
                                    <span><i class="fas fa-truck"></i>
                                        <em>Chờ xử lý</em> | <span>ĐÃ GIAO</span>
                                    </span>
                                </div>
                                <div class="oder-list_products">
                                    <div class="olp-left">
                                        <div class="olp-image">
                                            <img src="https://cf.shopee.vn/file/a27ae95f58fc82cd83474c007463d163"
                                                alt="">
                                        </div>
                                        <span>
                                            <div class="olp-name">
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                            </div>
                                            <div class="olp-classification">
                                                Phân loại hàng : đen tắng, hi
                                            </div>
                                            <span>
                                                x5
                                            </span>
                                        </span>
                                    </div>
                                    <div class="olp-right">
                                        <del>₫232.332</del> ₫323.423
                                    </div>
                                </div>
                                <div class="oder-list_products">
                                    <div class="olp-left">
                                        <div class="olp-image">
                                            <img src="https://cf.shopee.vn/file/a27ae95f58fc82cd83474c007463d163"
                                                alt="">
                                        </div>
                                        <span>
                                            <div class="olp-name">
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                            </div>
                                            <div class="olp-classification">
                                                Phân loại hàng : đen tắng, hi
                                            </div>
                                            <span>
                                                x5
                                            </span>
                                        </span>
                                    </div>
                                    <div class="olp-right">
                                        <del>₫232.332</del> ₫323.423
                                    </div>
                                </div>
                                <div class="olp-sum">
                                    <div class="olp-sum_price">
                                        <i class="fab fa-pagelines"></i> Tổng số tiền : <span>₫12.322</span>
                                    </div>
                                    <div class="olp-button">
                                        <button>Mua lại</button>
                                        <button>Liên hê người bán</button>
                                        <button>Chi tiết đơn hàng</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="oder-list">
                                <div class="oder-owner">
                                    <span>
                                        <i class="fas fa-house-user"></i> hiệu sách nhã nam <a
                                            href="./ShopOwner.html"><i class="fas fa-inbox"></i> Xem
                                            shop</a>
                                    </span>
                                    <div class="cancelled">
                                        <span>ĐÃ HỦY</span>
                                    </div>
                                </div>
                                <div class="oder-list_products">
                                    <div class="olp-left">
                                        <div class="olp-image">
                                            <img src="https://cf.shopee.vn/file/a27ae95f58fc82cd83474c007463d163"
                                                alt="">
                                        </div>
                                        <span>
                                            <div class="olp-name">
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                            </div>
                                            <div class="olp-classification">
                                                Phân loại hàng : đen tắng, hi
                                            </div>
                                            <span>
                                                x5
                                            </span>
                                        </span>
                                    </div>
                                    <div class="olp-right">
                                        <del>₫232.332</del> ₫323.423
                                    </div>
                                </div>
                                <div class="oder-list_products">
                                    <div class="olp-left">
                                        <div class="olp-image">
                                            <img src="https://cf.shopee.vn/file/a27ae95f58fc82cd83474c007463d163"
                                                alt="">
                                        </div>
                                        <span>
                                            <div class="olp-name">
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                                hoa vải,hoa trạng nguyên,hoa lưới to trang trí oản,tháp tài
                                                lộc
                                            </div>
                                            <div class="olp-classification">
                                                Phân loại hàng : đen tắng, hi
                                            </div>
                                            <span>
                                                x5
                                            </span>
                                        </span>
                                    </div>
                                    <div class="olp-right">
                                        <del>₫232.332</del> ₫323.423
                                    </div>
                                </div>
                                <div class="olp-sum">
                                    <div class="olp-sum_price">
                                        <i class="fab fa-pagelines"></i> Tổng số tiền : <span>₫12.322</span>
                                    </div>
                                    <div class="olp-button">
                                        <button>Mua lại</button>
                                        <button>Liên hê người bán</button>
                                        <button>Chi tiết đơn hàng</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        `
    }
}
export default PurchaseOderPage