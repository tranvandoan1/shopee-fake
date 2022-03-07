import Footer from "../Header/Footer"
import { $ } from "../../../ultis"
import ProductDetail from "./ProductDetail"
import ProductAdminMain from "./ProductAdminMain"
import HeaderSticky from "../Header/HeaderSticky"
import ProductDescription from './ProductDescription';
const DetailPage = {
    async render() {

        const DetailCss = $("#linkCss")
        var head = $("head");
        DetailCss.href = './src/CssClient/Detail.css';
        head.appendChild(DetailCss);

        window.scrollTo(0, 0)

        return /*html*/ `
            <div class="shopee__shop">
                ${await HeaderSticky.header()}
                ${await ProductDetail.render()}
                ${await ProductAdminMain.render()}
                ${await ProductDescription.render()}
                ${await Footer.footer()}
            </div>
        `
    },
    async afterRender() {
        return /*html*/ `
            ${await HeaderSticky.afterRender()}
            ${await ProductDetail.afterRender()}
            ${await ProductDescription.afterRender()}
        `
    }
}
export default DetailPage