import { parseRequestUrl, $ } from "./ultis.js";
import Header from "./Client/page/Header/HeaderNavbar.js";

import HomePage from "./Client/page/Home/HomePage"
import Error404Page from "./Error404Page.js";
import SignOut from './Client/page/Login_Logput_Signin/SignOut';
import DetailPage from "./Client/page/Detail/DetailPage";
import CheckCartPage from "./Client/page/CheckCart/CheckCartPage.js";
import CartPage from "./Client/page/Cart/CartPage.js";
import SignIn from "./Client/page/Login_Logput_Signin/SignIn.js";
import SignUp from "./Client/page/Login_Logput_Signin/SignUp.js";
import UserOverviewPage from './Client/page/UserOverview/UserOverviewPage';

// chủ shop
import StoreOverview from "./Client/ShopOwner/StoreOverview.js";
import UpdateCate from "./Client/ShopOwner/StoreManager/CategorisManager/UpdateCate";
import CategorisManager from "./Client/ShopOwner/StoreManager/CategorisManager/CategorisManager";
import ProductsManager from "./Client/ShopOwner/StoreManager/ProductsManager/ProductsManager.js";
import CommentPageManager from "./Client/ShopOwner/StoreManager/CommentManager/CommentManager";
import CartManager from "./Client/ShopOwner/StoreManager/CartManager/CartManager.js";
import StatisticalManager from "./Client/ShopOwner/StoreManager/StatisticalManager/StatisticalManager";

import SellerChannel from './Client/ShopOwner/SellerChannel';
// Admin
import Categoris from "./Server/CategorisAdmin/Categoris.js";
import ListCate from "./Server/CategorisAdmin/ListCate.js";
import SlideAdmin from './Server/SlideAdmin/SlideAdminPage';
import DetailComment from './Client/ShopOwner/StoreManager/CommentManager/DetailComment';

const routes = {
    "/": HomePage,
    "/products": DetailPage,
    "/detail/product/:id": DetailPage,
    "/page/seller-channel/:id": StoreOverview,
    "/cart": CartPage,
    "/checkcart": CheckCartPage,
    "/user-overview": UserOverviewPage,
    "/signin": SignIn,
    "/signup": SignUp,

    // chủ shop
    "/seller-channel/signup": SellerChannel,
    "/seller-channel/categoris": CategorisManager,
    "/seller-channel/update-categoris/:id": UpdateCate,
    "/seller-channel/products": ProductsManager,
    "/seller-channel/comments": CommentPageManager,
    "/seller-channel/detail-comment/:id": DetailComment,
    "/seller-channel/carts": CartManager,
    "/seller-channel/statistical": StatisticalManager,


    // ADMIN
    "/admin/categoris": Categoris,
    "/admin/categoris/:id": ListCate,
    "/admin/slides": SlideAdmin,
};


const router = async() => {
    const request = parseRequestUrl();

    const parseUrl =
        (request.resource1 ? `/${request.resource1}` : "/") + (request.resource2 ? `/${request.resource2}` : "") +
        (request.id ? "/:id" : "");
    const screen = routes[parseUrl] ? routes[parseUrl] : Error404Page;
    $("#main-content").innerHTML = await screen.render();
    if (screen.afterRender) {
        await screen.afterRender();
    }

    if (Header.afterRender) {
        await Header.afterRender();
    }
    if (SignOut.afterRender) {
        await SignOut.afterRender();
    }


};

window.addEventListener("DOMContentLoaded", router);
window.addEventListener("hashchange", router);