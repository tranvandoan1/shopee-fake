 import { $ } from "../../../ultis"
 import Footer from "../Header/Footer"
 import HeaderSticky from "../Header/HeaderSticky"
 import CategoryHome from "./CategoriesHome"
 import ProductsHome from "./ProductsHome"
 import ProductSale from "./ProductsSale"
 import ProductsTop from "./ProductsTop"
 import ProductSeachTop from "./ProductsTop"
 import Slider from "./Slider"
 const HomePage = {
     async render() {
         const HomePage = $("#linkCss")
         var head = $("head");
         HomePage.href = './src/CssClient/HomePage.css';
         head.appendChild(HomePage);
         return /*html*/ `
            <div class="shopee__shop">

                ${await HeaderSticky.header()}
                ${await Slider.slider()}
                ${await CategoryHome.categoryHome()}
                ${await ProductSale.productSale()}

                <!-- baneer img -->
                <div class="banner-advertisement">
                    <a href=""><img src="https://cf.shopee.vn/file/b4b3ae7cd45ce23a678d172112357793" alt=""></a>
                </div>
                ${await ProductSeachTop.productSeachTop()}
                ${await ProductsHome.productsHome()}

                ${await Footer.footer()}
             
         </div>
         `
     },
     async afterRender() {


         var dem = 0;
         const next = $("#next");
         const prev = $("#prev");
         const button = $(".number_slide button");
         const img = $(".slides a");
         for (let i = 0; i < img.length; i++) {
             img[0].classList.add("imk");
         }
         for (var i = 0; i < button.length; i++) {
             button[0].classList.add("active");
         }

         function nextt() {
             dem++;
             if (dem > img.length - 1) {
                 dem = 0;
             }
             for (let i = 0; i < img.length; i++) {
                 img[i].classList.remove("imk");
             }
             for (var i = 0; i < button.length; i++) {
                 button[i].classList.remove("active");
             }
             img[dem].classList.add("imk");
             button[dem].classList.add("active");
         }

         next.addEventListener("click", function() {
             nextt();
         });
         prev.addEventListener("click", function() {
             dem--;
             if (dem < 0) {
                 dem = img.length - 1;
             }
             for (let i = 0; i < img.length; i++) {
                 img[i].classList.remove("imk");
             }
             for (var i = 0; i < button.length; i++) {
                 button[i].classList.remove("active");
             }
             img[dem].classList.add("imk");
             button[dem].classList.add("active");
         });
         setInterval(function() {
             nextt();
         }, 8000);
         button.forEach((btn, index) => {
             btn.addEventListener("click", function() {
                 for (var i = 0; i < button.length; i++) {
                     button[i].classList.remove("active");
                 }
                 for (var i = 0; i < img.length; i++) {
                     img[i].classList.remove("imk");
                 }
                 const imgg = img[index];
                 btn.classList.add("active");
                 imgg.classList.add("imk");
             });
         });



         // flash products

         const pro_flash = $(".content-products");
         const prev_flash = $("#prev-flash");
         const next_flash = $("#next-flash");
         const proFlashSum = $(".content-products ul li");

         const proFlashWidtBox = proFlashSum[0].offsetWidth;
         const proFlashWidtAllBox = proFlashWidtBox * proFlashSum.length;
         const proFlashTransition = proFlashWidtAllBox / 2 + proFlashWidtBox / 7;

         let countproFlash = 0;
         next_flash.addEventListener("click", function() {
             countproFlash += proFlashTransition;
             if (countproFlash > proFlashTransition) {
                 countproFlash = 0;
             }
             pro_flash.style.transform = `translateX(${-countproFlash}px)`;
         });
         prev_flash.addEventListener("click", function() {
             countproFlash -= proFlashTransition;

             if (countproFlash < 0) {
                 countproFlash = proFlashTransition;
             }
             pro_flash.style.transform = `translateX(${-countproFlash}px)`;
         });



         // products
         const pro_banner = $(".products-title ul li");
         const pro_show = $(".products-show>ul>li");

         pro_banner.forEach((btn, index) => {
             btn.addEventListener("click", function() {
                 const pro_show_detail = pro_show[index];
                 for (var i = 0; i < pro_banner.length; i++) {
                     pro_banner[i].classList.remove("activePro");
                 }
                 for (var i = 0; i < pro_show.length; i++) {
                     pro_show[i].classList.remove("pro_show");
                 }
                 btn.classList.add("activePro");
                 pro_show_detail.classList.add("pro_show");
             });
         });
         return /*html*/ `
            ${await HeaderSticky.afterRender()}
            ${await CategoryHome.afterRender()}
            ${await ProductSale.afterRender()}
            ${await ProductsTop.afterRender()}
         `
     }

 }
 export default HomePage