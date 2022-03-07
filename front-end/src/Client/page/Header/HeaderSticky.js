import SaveUserAPI from "../../../Api/SaveUser";
import { $ } from "../../../ultis";
import SignOut from "../Login_Logput_Signin/SignOut";
import OderHeader from "./OderHeader";

const HeaderSticky = {
    async header() {
        const HeaderFooterCss = $("#HeaderFooterCss")
        var head = $("head");
        HeaderFooterCss.href = './src/CssClient/Header.css';
        head.appendChild(HeaderFooterCss);

        const { data: saveuser } = await SaveUserAPI.getAll()

        function checkLognIn() {
            if (saveuser.length == "" || saveuser.length == 0) {
                return /*html*/ ` <a href="/#/signup">đăng ký</a> <a href="/#/signin">đăng nhập</a>`
            } else {
                const name = saveuser.map(item => {
                    return /*html*/ `
                        <span><a href="/#/user-overview">${item.name}</a>
                            <ul>
                                <li><a href=""><i class="fas fa-user-cog"></i> Quản trị WebSite</a></li>
                                <li id="signout"><a ><i class="fas fa-sign-out-alt"></i> Đăng xuất</a></li>
                            </ul>
                        </span>
                    `
                })
                return name
            }
        }
        return /*html*/ `
        <div class="header">
            <!-- header pc -->
            <div class="header__main-navbar-wrapper">
                <div class="flex">
                    <ul>
                        <li><a href="/#/seller-channel/signup">kênh người bán</a></li>
                        <li><a href="">tải ứng dụng</a>
                            <img src="http://4.bp.blogspot.com/-Nzb2jX4c0iU/VIcZCT15vPI/AAAAAAAAGeE/5ijVMwGf5ak/s1600/QRCodeGeneratorImage.png" alt="">
                        </li>
                        <li>
                            <span>Kết nối</span> <a href=""><i class="fab
                                        fa-facebook"></i></a><a href=""><i
                                        class="fab fa-instagram"></i></a>
                        </li>
                    </ul>
                </div>
                <div class="navbar__spacer"></div>
                <div class="navbar__links">
                    <ul>
                        <li><a href=""><i class="far fa-bell"></i> thông báo</a></li>
                        <li><a href=""><i class="far fa-question-circle"></i>
                                    hỗ trợ</a></li>
                        <li><a><i class="fas fa-globe"></i> tiếng
                                    việt <i class="fas fa-angle-down"></i></a>
                            <ul>
                                <li><a href="">việt nam</a></li>
                                <li><a href="">english</a></li>
                            </ul>
                        </li>
                    </ul>
                    <div class="login-logout">
                            ${checkLognIn()}
                    </div>
                </div>
            </div>
            <div class="header-sticky" id="navbar">
                <div class="header__main">
                    <div class="header__main-logo-shopee">
                        <a href="/#/"><img src="https://cf.shopee.vn/file/d734f6291f072bb855371432da462d65" alt=""></a>
                    </div>
                    <div class="header__main-search">
                        <input type="text" placeholder="Đón chờ ShopeePay Day -Giảm 50%">
                        <i class="fas fa-search"></i>
                    </div>
                    <div class="header__main-shopping-cart">
                        ${await OderHeader.render()}
                    </div>
                </div>
            </div>

        </div>
        <!-- header mobile -->
        <div class="header__mb">
            <div class="header__mb-logo-menu">
                <div class="mb__logo-shopee">
                    <a href="/#/cart"><img src="https://cf.shopee.vn/file/d734f6291f072bb855371432da462d65" alt=""></a>
                </div>
                <div class="header__mb-search">
                    <input type="text" placeholder="Đón chờ ShopeePay Day -
                            Giảm 50%">
                    <i class="fas fa-search"></i>
                </div>
                <div class="mb-menu">
                    <div class="mb-cart">
                        <i class="fas fa-shopping-cart"><span>43</span> </i>
                    </div>
                    <div class="mb-user" id="button__mb">
                        <i class="fas fa-user"></i>
                    </div>
                    <div class="body-user" id="mb">
                        <div class="show-user" id="display__mb">
                            <div class="user"> <i class="fas fa-user"></i> tài khoản của tôi</div>
                            <div class="cart-my"><i class="fas
                                        fa-luggage-cart"></i> đơn hàng của tôi</div>
                            <div class="admin_user"><i class="fas
                                        fa-user-cog"></i> quản trị</div>
                            <div class="logout"><i class="fas
                                        fa-sign-out-alt"></i> đăng xuất</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        `
    },
    async afterRender() {

        // sticky header
        var navbar = $("#navbar");
        var sticky = await navbar.offsetTop;
        window.onscroll = async function() {
            if (window.pageYOffset >= sticky) {
                await navbar.classList.add("sticky");
            } else {
                await navbar.classList.remove("sticky");
            }
        };
        // taplet-mobile
        const button_mb = $("#button__mb");
        const mb = $("#mb");
        const mb_display = $("#display__mb");
        button_mb.addEventListener("click", function() {
            mb.classList.add("on-off-menu-mb");
            mb_display.classList.add("on__off__menu__mb");
        });
        window.addEventListener("click", function(e) {
            if (e.target == mb) {
                mb.classList.remove("on-off-menu-mb");
                mb_display.classList.remove("on__off__menu__mb");
            }
        });

        return /*html*/ `
            ${await SignOut.render()}
        `
    }
}
export default HeaderSticky