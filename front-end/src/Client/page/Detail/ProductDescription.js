import { $ } from "../../../ultis";
import CommentPage from "./Comments/CommentPage"
import OtherProducts from './OtherProducts';
import ProductsOfShop from './ProductsOfShop';

const ProductDescription = {
    async render() {
        return /*html*/ `
             <!-- chi tiết mô tả sảm phẩm -->
            <div class="detail-products">
                <div class="d-products-box">
                    <div class="detail__products-left">
                        <div class="d-products-left">
                            <h3>chi tiết sản phẩm</h3>
                            <ul class="d-ul_">
                                <li><span>danh mục</span> <span>Shopee
                                            Health
                                            Medical Supplies
                                            Medical Gloves & Masks</span></li>
                                <li><span>thương hiệu</span> <span> nam anh</span></li>
                                <li><span>hạn sử dụng </span><span> 36</span></li>
                                <li><span>kiểu đóng gói</span><span> đóng thùng
                                            tiên
                                            sinh</span></li>
                                <li><span>hạn sử dụng</span><span> 3 năm</span></li>
                                <li><span>gửi từ</span><span> huyện thường tín ,
                                            hà
                                            nội</span></li>
                            </ul>
                            <h3>mô tả sản phẩm</h3>
                            <h5>CÔNG DỤNG VÀ ƯU ĐIỂM:</h5>
                            <ul class="d-ul__">
                                <li>Khác biệt: đeo êm hơn, dây đeo thoải mái hơn</li>
                                <li>Tai đeo có độ đàn hồi cao, ít tạo áp lực lên tai và mặt, tránh gây khó chịu khi sử dụng trong thời gian dài.
                                </li>
                            </ul>
                            <h5>THÔNG SỐ SẢN PHẨM:</h5>
                            <ul class="d-ul__">
                                <li>Tiêu chuẩn khẩu trang: BFE, VFE, PFE ≥ 98%. Chứng nhận CE, FDA</li>
                                <li>Loại: 3 lớp (2 lớp vải không dệt, 1 lớp meltblown)
                                </li>
                            </ul>
                            <h5>HƯỚNG DẪN SỬ DỤNG:</h5>
                            <ul class="d-ul__">
                                <li>Bước 1: Dùng 2 tay sạch để mở khẩu trang</li>
                                <li>Bước 2: Mang 2 dây qua tai. Điều chỉnh dây cho vừa với khuôn mặt và tạo cảm giác dễ chịu</li>
                            </ul>

                        </div>
                    <div id="list-comment">
                        ${await CommentPage.render()}
                    </div>
                    ${await OtherProducts.render()}
                    </div>
                    ${await ProductsOfShop.render()}
                </div>
            </div>
        `
    },
    async afterRender() {

        return /*html*/ `${await CommentPage.afterRender()}`
    }
}
export default ProductDescription