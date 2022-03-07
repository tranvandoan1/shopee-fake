import SaveUserAPI from "../../../Api/SaveUser";
import { $ } from "../../../ultis";
import SignOut from "../Login_Logput_Signin/SignOut";

const HeaderNavbar = {
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
                    </span>`
                })
                return name
            }
        }



        return /*html*/ `
             <!-- header pc -->
        <div class="header">
            <!-- header pc -->
            <div class="header__main-navbar-wrapper">
                <div class="flex">
                    <ul>
                        <li><a href="">kênh người bán</a></li>
                        <li><a href="">tải ứng dụng</a>
                            <img src="http://4.bp.blogspot.com/-Nzb2jX4c0iU/VIcZCT15vPI/AAAAAAAAGeE/5ijVMwGf5ak/s1600/QRCodeGeneratorImage.png" alt="">
                        </li>
                        <li>
                            <span>Kết nối</span> <a href=""><i class="fab
                                        fa-facebook"></i></a><a href=""><i class="fab fa-instagram"></i></a>
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


        </div>

        `

    },
    async afterRender() {
        return /*html*/ `
            ${await SignOut.render()}
        `
    }

}
export default HeaderNavbar