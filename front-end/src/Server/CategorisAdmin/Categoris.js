import { $ } from "../../ultis";
import NavbarAdmin from "../NavbarAdmin"
import ListCate from "./ListCate";

const Categoris = {
    async render() {
        const MainAdmin = $("#linkCss")
        var head = $("head");
        MainAdmin.href = './src/CssServer/CategorisAdminPage.css';
        head.appendChild(MainAdmin);
        return /*html*/ `
                ${await NavbarAdmin.render()}
                <div class="admin-list">
                    <div class="admin-categoris">
                        <div class="admin-cate-header">
                            <div class="left">
                                <h3>Danh mục của shopee</h3>
                            </div>
                            <div class="right">
                                <div class="search">
                                    <input type="text" id="search" placeholder="Tìm kiếm ...">
                                    <i class="fas fa-search"></i>
                                </div>
                                <button class="addCate"><a > Thêm danh mục</a></button>
                            </div>
                        </div>
                        <div id="List-Cate">
                            ${await ListCate.render()}
                        </div>
                    </div>
                </div>
                </div>
    
                <div class="loading">
                    <img src="https://vn-live.slatic.net/other/roc/0d8945c265c535c7e00d6919ae03dea2.gif" alt="">
                </div>  
        `
    },
    async afterRender() {
        return `
            ${await NavbarAdmin.afterRender()}
            ${await ListCate.afterRender()}
    
            
        `
    }
}
export default Categoris