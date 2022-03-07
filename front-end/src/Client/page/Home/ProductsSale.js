import { $ } from "../../../ultis";

const ProductSale = {
    productSale() {
        return /*html*/ `
        <!-- products sale -->
        <div class="flash-products">
            <div class="flash__products_header">
                <div class="flash-sale_header">
                    <em> flash sale</em>
                    <div class="flash-sale_header_time">
                        <div id="time__hours"></div> :
                        <div id="time__minute"></div> :
                        <div id="time__second"></div>
                    </div>
                </div>
                <div class="flash-header_links">
                    <a href="">xem thêm <i class="fas fa-chevron-right"></i></a>
                </div>
            </div>
            <div class="flash-content">
                <div class="content-products">
                    <ul>
                        <li>
                            <a href="">
                                <div class="content-products_img">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUc2XtIpqpSf5-_5KjOE59EnwWLW6mQYwD4c_kPhsPtxraUgbvGOxYJssZSRzTeL8ggUI&usqp=CAU" alt="">
                                </div>
                                <div class="content-products_sale"><span>30%</span> giảm
                                </div>
                                <div class="content-products_card">
                                    <div class="content-products_price">1.233.232đ</div>
                                    <div class="content-products_quantity">
                                        <span>đã bán 9</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div class="content-products_img">
                                    <img src="https://img.alicdn.com/imgextra/i1/3600074510/TB2fN5Hwcj_B1NjSZFHXXaDWpXa_!!3600074510.jpg_400x400q90.jpg" alt="">
                                </div>
                                <div class="content-products_sale"><span>30%</span> giảm
                                </div>
                                <div class="content-products_card">
                                    <div class="content-products_price">1.233.232đ</div>
                                    <div class="content-products_quantity">
                                        <span>đã bán 9</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div class="content-products_img">
                                    <img src="https://mabustudio.com/wp-content/uploads/2020/01/chup-trai-quan-ao-2-scaled.jpg" alt="">
                                </div>
                                <div class="content-products_sale"><span>30%</span> giảm
                                </div>
                                <div class="content-products_card">
                                    <div class="content-products_price">1.233.232đ</div>
                                    <div class="content-products_quantity">
                                        <span>đã bán 9</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div class="content-products_img">
                                    <img src="https://mabustudio.com/wp-content/uploads/2020/01/chup-trai-quan-ao-2-scaled.jpg" alt="">
                                </div>
                                <div class="content-products_sale"><span>30%</span> giảm
                                </div>
                                <div class="content-products_card">
                                    <div class="content-products_price">1.233.232đ</div>
                                    <div class="content-products_quantity">
                                        <span>đã bán 9</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div class="content-products_img">
                                    <img src="https://mabustudio.com/wp-content/uploads/2020/01/chup-trai-quan-ao-2-scaled.jpg" alt="">
                                </div>
                                <div class="content-products_sale"><span>30%</span> giảm
                                </div>
                                <div class="content-products_card">
                                    <div class="content-products_price">1.233.232đ</div>
                                    <div class="content-products_quantity">
                                        <span>đã bán 9</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div class="content-products_img">
                                    <img src="https://dotobjyajpegd.cloudfront.net/photo/5e9ff51d4841bc1446b3362a" alt="">
                                </div>
                                <div class="content-products_sale"><span>30%</span> giảm
                                </div>
                                <div class="content-products_card">
                                    <div class="content-products_price">1.233.232đ</div>
                                    <div class="content-products_quantity">
                                        <span>đã bán 9</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div class="content-products_img">
                                    <img src="https://mabustudio.com/wp-content/uploads/2020/01/chup-trai-quan-ao-2-scaled.jpg" alt="">
                                </div>
                                <div class="content-products_sale"><span>30%</span> giảm
                                </div>
                                <div class="content-products_card">
                                    <div class="content-products_price">1.233.232đ</div>
                                    <div class="content-products_quantity">
                                        <span>đã bán 9</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div class="content-products_img">
                                    <img src="https://mabustudio.com/wp-content/uploads/2020/01/chup-trai-quan-ao-2-scaled.jpg" alt="">
                                </div>
                                <div class="content-products_sale"><span>30%</span> giảm
                                </div>
                                <div class="content-products_card">
                                    <div class="content-products_price">1.233.232đ</div>
                                    <div class="content-products_quantity">
                                        <span>đã bán 9</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div class="content-products_img">
                                    <img src="https://mabustudio.com/wp-content/uploads/2020/01/chup-trai-quan-ao-2-scaled.jpg" alt="">
                                </div>
                                <div class="content-products_sale"><span>30%</span> giảm
                                </div>
                                <div class="content-products_card">
                                    <div class="content-products_price">1.233.232đ</div>
                                    <div class="content-products_quantity">
                                        đã bán 9
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div class="content-products_img">
                                    <img src="https://mabustudio.com/wp-content/uploads/2020/01/chup-trai-quan-ao-2-scaled.jpg" alt="">
                                </div>
                                <div class="content-products_sale"><span>30%</span> giảm
                                </div>
                                <div class="content-products_card">
                                    <div class="content-products_price">1.233.232đ</div>
                                    <div class="content-products_quantity">
                                        <span>đã bán 9</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div class="content-products_img">
                                    <img src="https://mabustudio.com/wp-content/uploads/2020/01/chup-trai-quan-ao-2-scaled.jpg" alt="">
                                </div>
                                <div class="content-products_sale"><span>30%</span> giảm
                                </div>
                                <div class="content-products_card">
                                    <div class="content-products_price">1.233.232đ</div>
                                    <div class="content-products_quantity">
                                        <span>đã bán 9</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div class="content-products_img">
                                    <img src="https://mabustudio.com/wp-content/uploads/2020/01/chup-trai-quan-ao-1-scaled.jpg" alt="">
                                </div>
                                <div class="content-products_sale"><span>30%</span> giảm
                                </div>
                                <div class="content-products_card">
                                    <div class="content-products_price">1.233.232đ</div>
                                    <div class="content-products_quantity">
                                        <span>đã bán 9</span>
                                    </div>
                                </div>
                            </a>
                        </li>

                    </ul>
                </div>
                <button id="prev-flash"><i class="fas fa-angle-left"></i></button>
                <button id="next-flash"><i class="fas fa-angle-right"></i></button>
            </div>
        </div>
        `
    },
    async afterRender() {

        //  // countdown time
        const time__second = $("#time__second");
        const time__minute = $("#time__minute");
        const time__hours = $("#time__hours");

        time__second.innerHTML = 59;

        function setTime() {
            time__hours.innerHTML = 1;
            // giây
            if (time__second.innerHTML <= 60) {
                time__second.innerHTML--;
            }
            // // phút
            if (time__second.innerHTML == 0) {
                time__second.innerHTML = 59;
                time__minute.innerHTML--;
            }
            // giờ
            if (time__minute.innerHTML == 0) {
                time__hours.innerHTML--;
                time__minute.innerHTML = 59;
            }
            // nếu giây còn 1 ký tự thì thêm 0 vào
            if (time__second.innerHTML.length != 2) {
                time__second.innerHTML = "0" + time__second.innerHTML;
            }
            // nếu phút còn 1 ký tự thì thêm 0 vào
            if (time__minute.innerHTML.length != 2) {
                time__minute.innerHTML = "0" + time__minute.innerHTML;
            }
            // nếu giờ còn 1 ký tự thì thêm 0 vào
            if (time__hours.innerHTML.length != 2) {
                time__hours.innerHTML = "0" + time__hours.innerHTML;
            }
        }

        function h() {
            var today = new Date();

            if (today.getHours() != 20) {
                setTime();
            } else if (today.getHours() != 21) {
                setTime();
            }
        }
        setInterval(setTime, 1000);


    }
}
export default ProductSale