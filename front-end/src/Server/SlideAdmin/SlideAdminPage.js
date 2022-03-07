import { $ } from '../../ultis';
import NavbarAdmin from './../NavbarAdmin';
import AddSlidePage from './AddSlidePage';
import SliderAPI from './../../Api/Slider';
import { reRender } from './../../ultis';
import ListSlide from './ListSlide';
const SlideAdmin = {
    async render() {

        const SlideAdmin = $("#linkCss")
        var head = $("head");
        SlideAdmin.href = './src/CssServer/SideAdminPage.css';
        head.appendChild(SlideAdmin);


        return /*html*/ `
        ${await NavbarAdmin.render()}
        <div class="admin-list">
            <div class="slide-admin">
                <div class="slide-header">
                    <h3>Slide</h3>
                    <div class="create-slide"><i class="fas fa-plus"></i> Thêm ảnh</div>
                </div>
                <div class="slide-list">
                    <table border="1">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Ảnh</th>
                                <th>Số thứ tự ảnh</th>
                                <th>Trạng thái</th>
                                <th>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody id="list-slides">
                            ${await ListSlide.render()}                            
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="notification">
                <span><i class="far fa-check-circle"></i> Cập nhật thành công</span>
            </div>
            <div class="fail">
                <span><i class="far fa-times-circle"></i> Cập nhật thất bại</span>
            </div>
            <div class="delete">
                <span><i class="far fa-trash-alt"></i> Xóa thành công</span>
            </div>
            <div class="loading">
                <img src="https://vn-live.slatic.net/other/roc/0d8945c265c535c7e00d6919ae03dea2.gif" alt="">
            </div>  
            <div id="add-photo">
                ${await AddSlidePage.render()}
            </div>
        </div>
    `
    },
    async afterRender() {

        $(".create-slide").addEventListener("click", function() {
            $(".create-photo").classList.add("create-active")
        })
        window.addEventListener("click", function(event) {
            if (event.target == $(".create-photo")) {
                $(".create-photo").classList.remove("create-active")
            }
        })


        return /*html*/ `${await AddSlidePage.afterRender()}
                        ${await ListSlide.afterRender()}
        `
    }
}
export default SlideAdmin