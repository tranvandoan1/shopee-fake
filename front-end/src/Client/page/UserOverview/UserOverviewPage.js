import { $ } from "../../../ultis";
import Footer from "../Header/Footer";
import HeaderSticky from "../Header/HeaderSticky";
import PurchaseOderPage from './PurchaseOrder/PurchaseOderPage';

const UserOverviewPage = {
    async render() {

        const UserOverviewPage = $("#linkCss")
        var head = $("head");
        UserOverviewPage.href = './src/CssClient/UserOverviewPage.css';
        head.appendChild(UserOverviewPage);

        return /*html*/ `
        <div class="shopee__shop">
            ${await HeaderSticky.header()}
            <div class="users-purchase">
                <div class="user">
                    <div class="user-header">
                        <a href="">
                            <i class="far fa-user"></i>
                        </a>
                        <a href="">
                            <span>tranvandoan2005 asd asdsasd ádasd</span>
                            <span><i class="fas fa-pencil-alt"></i> sửa hồ sơ</span>

                        </a>
                    </div>
                    <div class="user-list">
                        <ul>
                            <div class="user-account">
                                <i class="far fa-user"></i> tài khoản của tôi
                            </div>
                            <div class="user-account_child">
                                <li>hồ sơ</li>
                                <li>đổi mật khẩu</li>
                            </div>
                            <li>
                                <i class="fas fa-clipboard-list"></i> đơn mua
                            </li>
                            <li>
                                <i class="fas fa-dollar-sign"></i> shope xu

                            </li>
                        </ul>
                    </div>
                </div>
                <div class="purchase">
                    <ul class="purchase__e">
                        <div class="purchase-list">
                            <li class="active-purchase-list">
                                <div class="purchase-list_header">
                                    <h3>Hồ Sơ Của Tôi</h3>
                                    <span>Quản lý thông tin hồ sơ để bảo mật tài khoản</span>
                                </div>
                                <div class="user-form">
                                    <div class="user-form_info">
                                        <div class="user-form_info-name">
                                            <span>Tên đăng nhập</span>
                                            <div class="user-form_info-name-list">tranvandoan2005</div>
                                        </div>
                                        <div class="user-form_info-email">
                                            <span>Email</span>
                                            <div class="user-form_info-email-list">tranlove24@gmail.com <button>Thay
                                                    đổi</button></div>
                                        </div>
                                        <div class="user-form_number-phone">
                                            <span>Số điện thoại</span>
                                            <div class="user-form_number-phone-list">0329903787 <button>Thay
                                                    đổi</button>
                                            </div>
                                        </div>
                                        <div class="user-form_name-shop">
                                            <span>Tên shope</span>
                                            <div class="user-form_name-shop-list">
                                                <input type="text" value="Trần văn đoàn" placeholder="Nhập tên shope...">
                                            </div>
                                        </div>
                                        <div class="user-form_gender">
                                            <span>Giới tính</span>
                                            <div class="user-form_gender-list">
                                                <input type="checkbox" name="nam" id="">Nam
                                                <input type="checkbox" name="nữ" id="">Nữ
                                            </div>
                                        </div>
                                        <div class="button-save"><button>Lưu</button></div>
                                    </div>
                                    <div class="user-image">
                                        <div class="user-avatar">
                                            <i class="far fa-user"></i>
                                        </div>
                                        <label for="images" class="user_choose-photo">
                                            <div class="choose-photo">Chọn ảnh</button>
                                        </label>
                                        <input type="file" name="" id="images">
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="change-password">
                                    <div class="change-password_header">
                                        <h3>Đổi mật khẩu</h3>
                                        <span>Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác</span>
                                    </div>
                                    <div class="chagne-password_form">
                                        <div class="current-password">
                                            <span>Mật khẩu hiện tại</span>
                                            <div class="current-password_input">
                                                <input type="password">
                                            </div>
                                            <span>Quên mật khẩu ?</span>

                                        </div>
                                        <div class="new-password">
                                            <span>Mật khẩu mới</span>
                                            <div class="new-password_input">
                                                <input type="password">
                                            </div>
                                        </div>
                                        <div class="confirm-password">
                                            <span>Xác nhận mật khẩu</span>
                                            <div class="confirm-password_input">
                                                <input type="password">
                                            </div>
                                        </div>
                                        <div class="confirm-button"><button>Xác nhận</button></div>
                                    </div>
                                </div>
                            </li>
                        </div>
                        <li>
                            ${await PurchaseOderPage.render()}
                        </li>
                        <li>
                            <div class="receive-coins">
                                <div class="receive-coins_header">
                                    <div class="receive-coins_header-left">
                                        <div class="receive-coins_header-icon">
                                            <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/paymentfe/75efaf1b556a8e2fac6ab9383e95d4e3.png"
                                                alt="">
                                        </div>
                                        <span>500 xu đang có</span>
                                    </div>
                                    <div class="receive-coins_header-right">
                                        <a href="">Nhận thêm xu hôm nay!!</a>
                                    </div>
                                </div>
                                <div class="receive-coins_list">
                                    <div class="receive-coins_list-header">
                                        <ul>
                                            <li class="active-rclh">Tất cả lịch sử</li>
                                            <li>Đã nhận</li>
                                            <li>Đã dùng</li>
                                        </ul>
                                    </div>
                                    <div class="receive-coins_list-header_list">
                                        <ul>
                                            <li class="active-rclh-list">
                                                <div class="rclh">
                                                    <div class="rclh-left">
                                                        <div class="rclh-icon">
                                                            <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/paymentfe/75efaf1b556a8e2fac6ab9383e95d4e3.png"
                                                                alt="">
                                                        </div>
                                                        <span>
                                                            Đăng nhập mỗi ngày
                                                            Shopee Xu từ Đăng nhập mỗi ngày
                                                            21:40 11-01-2022
                                                        </span>
                                                    </div>
                                                    <div class="rclh-right">
                                                        <span>+100</span>
                                                    </div>
                                                </div>
                                                <div class="rclh">
                                                    <div class="rclh-left">
                                                        <div class="rclh-icon">
                                                            <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/paymentfe/75efaf1b556a8e2fac6ab9383e95d4e3.png"
                                                                alt="">
                                                        </div>
                                                        <span>
                                                            Đăng nhập mỗi ngày
                                                            Shopee Xu từ Đăng nhập mỗi ngày
                                                            21:40 11-01-2022
                                                        </span>
                                                    </div>
                                                    <div class="rclh-right">
                                                        <span>+100</span>
                                                    </div>
                                                </div>
                                                <div class="rclh-used">
                                                    <div class="rclh-used-left">
                                                        <div class="rclh-used-icon">
                                                            <img src="https://mpng.subpng.com/20181208/yau/kisspng-computer-icons-coin-portable-network-graphics-curr-coin-svg-png-icon-free-download-46-7-4-online-5c0bc3bec78243.3524030215442748788172.jpg"
                                                                alt="">
                                                        </div>
                                                        <span>
                                                            Đã sử dụng
                                                            21:40 11-01-2022
                                                        </span>
                                                    </div>
                                                    <div class="rclh-used-right">
                                                        <span>-400</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="rclh">
                                                    <div class="rclh-left">
                                                        <div class="rclh-icon">
                                                            <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/paymentfe/75efaf1b556a8e2fac6ab9383e95d4e3.png"
                                                                alt="">
                                                        </div>
                                                        <span>
                                                            Đăng nhập mỗi ngày
                                                            Shopee Xu từ Đăng nhập mỗi ngày
                                                            21:40 11-01-2022
                                                        </span>
                                                    </div>
                                                    <div class="rclh-right">
                                                        <span>+100</span>
                                                    </div>
                                                </div>
                                                <div class="rclh">
                                                    <div class="rclh-left">
                                                        <div class="rclh-icon">
                                                            <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/paymentfe/75efaf1b556a8e2fac6ab9383e95d4e3.png"
                                                                alt="">
                                                        </div>
                                                        <span>
                                                            Đăng nhập mỗi ngày
                                                            Shopee Xu từ Đăng nhập mỗi ngày
                                                            21:40 11-01-2022
                                                        </span>
                                                    </div>
                                                    <div class="rclh-right">
                                                        <span>+100</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="rclh-used">
                                                    <div class="rclh-used-left">
                                                        <div class="rclh-used-icon">
                                                            <img src="https://mpng.subpng.com/20181208/yau/kisspng-computer-icons-coin-portable-network-graphics-curr-coin-svg-png-icon-free-download-46-7-4-online-5c0bc3bec78243.3524030215442748788172.jpg"
                                                                alt="">
                                                        </div>
                                                        <span>
                                                            Đã sử dụng
                                                            21:40 11-01-2022
                                                        </span>
                                                    </div>
                                                    <div class="rclh-used-right">
                                                        <span>-400</span>
                                                    </div>
                                                </div>
                                                <div class="rclh-used">
                                                    <div class="rclh-used-left">
                                                        <div class="rclh-used-icon">
                                                            <img src="https://mpng.subpng.com/20181208/yau/kisspng-computer-icons-coin-portable-network-graphics-curr-coin-svg-png-icon-free-download-46-7-4-online-5c0bc3bec78243.3524030215442748788172.jpg"
                                                                alt="">
                                                        </div>
                                                        <span>
                                                            Đã sử dụng
                                                            21:40 11-01-2022
                                                        </span>
                                                    </div>
                                                    <div class="rclh-used-right">
                                                        <span>-400</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            ${await Footer.footer()}
        </div>
        `
    },
    afterRender() {
        const userList = $(".user-list>ul>li"); //li bên trái

        const purchase = $(".purchase>.purchase__e>li"); //li bên phải

        const userAccount = $(".user-account"); //tài khoản của tôi

        const userAccountChild = $(".user-account_child"); //menu con bên trong tài khoản của tôi

        const userAccountChildLi = $(".user-account_child>li"); //li bên trong tài khoản của tôi

        const purchaseList = $(".purchase-list"); //hồ sơ của tôi khi click vào hồ sơ

        const purchaseLi = $(".purchase-list>li"); //li còn lại của li bên phải

        var click = 0;
        //khi click vào li bên phải
        userList.forEach((btn, index) => {
            btn.addEventListener("click", function() {
                const purchaseC = purchase[index];
                for (let i = 0; i < purchase.length; i++) {
                    //khi clik vào li bên phải nào thì xóa class của li còn lại và thay đổi màu chữ
                    purchase[i].classList.remove("active-purchase");
                    userList[i].style.color = "black";
                }
                //khi click vòa li nào thì thêm class vào để hiện li bên phải
                purchaseC.classList.add("active-purchase");
                //ẩn hồ sơ của tôi
                purchaseList.style.display = "none";
                //click vào li nào bên trái thì bôi màu đỏ
                btn.style.color = "rgb(238, 77, 45)";
                //đóng menu con tài khoản của tôi khi bấm li khác
                userAccountChild.classList.remove("active-user-account");
            });
        });
        //clik vào tài khoản của tôi
        userAccount.addEventListener("click", function() {
            click++;
            if (click === 1) {
                for (let i = 0; i < purchase.length; i++) {
                    //xóa toàn bộ li bên phải và chuyển màu li bên trái ko được click thành mầu đen
                    purchase[i].classList.remove("active-purchase");
                    userList[i].style.color = "black";
                }

                purchaseList.style.display = "block";
                userAccountChildLi[0].style.color = "rgb(238, 77, 45)";
                userAccountChild.classList.add("active-user-account");
            } else if (click === 2) {
                click = 0;
                userAccountChild.classList.remove("active-user-account");
                for (let i = 0; i < userAccountChildLi.length; i++) {
                    userAccountChildLi[i].style.color = "black";
                }
                for (let i = 0; i < purchaseLi.length; i++) {
                    purchaseLi[i].classList.remove("active-purchase-list");
                }
                purchaseLi[0].classList.add("active-purchase-list");
            }
        });

        userAccountChildLi.forEach((btn, index) => {
            btn.addEventListener("click", function() {
                const userA = purchaseLi[index];
                for (let i = 0; i < purchaseLi.length; i++) {
                    purchaseLi[i].classList.remove("active-purchase-list");
                    userAccountChildLi[i].style.color = "black ";
                }
                btn.style.color = "rgb(238, 77, 45)";
                userA.classList.add("active-purchase-list");
            });
        });


        const receiveCoins = $(".receive-coins_list-header>ul>li");
        const receiveCoinsList = $(".receive-coins_list-header_list>ul>li");

        receiveCoins.forEach((btn, index) => {
            btn.addEventListener("click", function() {
                const RCL_Index = receiveCoinsList[index];
                for (let i = 0; i < receiveCoins.length; i++) {
                    receiveCoins[i].classList.remove("active-rclh");
                    receiveCoinsList[i].classList.remove("active-rclh-list");
                }
                btn.classList.add("active-rclh");
                RCL_Index.classList.add("active-rclh-list");
            });
        });

        const purchaseOrderHeader = $(".purchase-order-header>ul>li");
        const purchaseOrderHeaderList = $(".purchase-order-header_list>ul>li");

        purchaseOrderHeader.forEach((btn, index) => {
            btn.addEventListener("click", function() {
                const purList = purchaseOrderHeaderList[index];
                for (let i = 0; i < purchaseOrderHeader.length; i++) {
                    purchaseOrderHeader[i].classList.remove("active-oder");
                    purchaseOrderHeaderList[i].style.display = "none";
                }
                btn.classList.add("active-oder");
                purList.style.display = "block";
            });
        });

    }
}
export default UserOverviewPage