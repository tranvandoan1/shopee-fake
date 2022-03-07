import { $ } from "../ultis"

const NavbarAdmin = {
    render() {
        const NavbarAdmin = $("#Admin")
        var head = $("head");
        NavbarAdmin.href = './src/CssServer/Server.css';
        head.appendChild(NavbarAdmin);
        return /*html*/ `
            <div class="admin">
                <div class="admin-navbar">
                    <div class="navbar">
                        <div class="info-admin">
                            <div class="info-admin-img">
                                <img src="https://static2.yan.vn/YanNews/202005/202005220338210409-bee6f138-0608-4d56-bce3-27148a855654.png" alt="">
                            </div>
                            <div class="info">
                                <h3>tranvandoan2005</h3>
                                <em>Quản trị viên</em>
                            </div>
                        </div>
                        <div class="navbar-title">
                            <ul>
                                <li><a href=""><i class="far fa-star"></i> Tổng quát</a></li>
                                <li><a href="/#/admin/categoris"><i class="fas fa-calendar-alt"></i> Categoris Shopee</a></li>
                                <li><a href="/#/admin/products"><i class="fab fa-product-hunt"></i> Products</a></li>
                                <li><a href="/#/admin/slides"><i class="fab fa-slideshare"></i> Slides</a></li>
                                <li><a href=""><i class="far fa-user"></i> Users</a></li>
                                <li><a href=""><i class="fas fa-luggage-cart"></i> Đơn hàng</a></li>
                            </ul>
                        </div>
                    </div>
                    <button id="off-navbar"><i class="fas fa-angle-double-left"></i></button>
                    <button id="on-navbar"><i class="fas fa-angle-double-right"></i></button>
                </div>
        `
    },

    async afterRender() {
        const off_navbar = $("#off-navbar")
        const on_navbar = $("#on-navbar")
        const admin_navbar = $(".admin-navbar")
        const admin_list = $(".admin-list")
        const navbar = $(".navbar")
        off_navbar.addEventListener("click", function() {
            admin_navbar.style.width = "3%"
            admin_list.style.width = "97%"
            navbar.style.display = "none"
            on_navbar.style.display = "block"
            off_navbar.style.display = "none"

        })
        on_navbar.addEventListener("click", function() {
            admin_navbar.style.width = "20%"
            admin_list.style.width = "80%"
            navbar.style.display = "block"
            on_navbar.style.display = "none"
            off_navbar.style.display = "block"

        })
        const searchIcon = $(".search>i")
        const searchInput = $(".search>input")
        var item = 0
        searchIcon.addEventListener("click", function() {
            item++
            if (item === 1) {

                searchInput.classList.add("active-input")
            } else if (item === 2) {
                item = 0
                searchInput.classList.remove("active-input")

            }
        })
    }
}
export default NavbarAdmin