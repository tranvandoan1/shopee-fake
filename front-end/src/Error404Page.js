import { $ } from "./ultis";

export default class Error404Page {
    static render() {
        const ShopOwner = $("#linkCss")
        var head = $("head");
        ShopOwner.href = './src/CssClient/Error404Page.css';
        head.appendChild(ShopOwner);

        return /*html*/ `
        <div class="Error404Page">
            <img src="https://1.bp.blogspot.com/-cr0bAHr5IYc/VyIXSsZUycI/AAAAAAAAH9k/nTU427gW8KsjYcrONOim6PIUHlUgB36mgCLcB/s1600/loi-404-cach-khac-phuc-loi-404-cho-website.png" alt="">
        </div>
        `
    }
}