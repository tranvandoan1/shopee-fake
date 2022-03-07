import CateAPI from "../../../Api/Categoris";
import { $ } from "../../../ultis";

const CategoryHome = {
        async categoryHome() {

            const { data: categoris } = await CateAPI.getAll();


            return /*html*/ `
            <!-- .categori -->
        <div class="categores">
            <div class="home-category-list">
                <div class="category">
                    <h2>danh mục sản phẩm</h2>
                </div>
            </div>
            <div class="list-category">
                <div class="cate">
                    <ul>
                        ${categoris.map(cate=>{
                            return /*html*/`
                              <li>
                                <a href="">
                                    <img src="${cate.photo}" alt="">
                                    <span>${cate.name}</span>
                                </a>
                              </li>
                            `
                        }).join("")}
                    </ul>
                </div>
                <button id="prev-cate"><i class="fas fa-angle-left"></i></button>
                <button id="next-cate"><i class="fas fa-angle-right"></i></button>
            </div>
        </div>
        `
    },
    async afterRender() {

        // category

        // const slides_page = $(".slides-page");
        // const slider = $(".slider");
        // const img = $(".slider>a>img");
        // console.log(img);
        // const widthImg = slides_page.offsetWidth * img.length;
        // slider.style.width = `${widthImg + "px"}`;
        // for (var i = 0; i < img.length; i++) {
        //     img[i].style.width = `${slides_page.offsetWidth + "px"}`;
        // }

        const cate = $(".cate");
        const prev_cate = $("#prev-cate");
        const next_cate = $("#next-cate");
        const cateSum = $(".list-category ul li");
            const cateWidthBox = cateSum[0].offsetWidth / 2;
            let cateWidthAllBox = cateWidthBox * 2.7;
            let count = 0;
            next_cate.addEventListener("click", function() {
                count += cateWidthAllBox;
                if (count > cateWidthAllBox) {
                    count = 0;
                }
                cate.style.transform = `translateX(${-count}px)`;
            });
            prev_cate.addEventListener("click", function() {
                count -= cateWidthAllBox;

            if (count < 0) {
                count = cateWidthAllBox;
            }
            cate.style.transform = `translateX(${-count}px)`;
        });

    }
}
export default CategoryHome