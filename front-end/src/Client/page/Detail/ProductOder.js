import SaveOderAPI from "../../../Api/SaveOder"
import ProductClassification1API from "../../../Api/ClassificationAPI"
import ProductClassification2API from "../../../Api/CommodityValueAPI"
import ProAPI from "../../../Api/Products"
import TypeGroupNameAPI from "../../../Api/TypeGroupName"
import { $, parseRequestUrl, reRender } from "../../../ultis"
import OderHeader from "../Header/OderHeader"
import SaveUserAPI from './../../../Api/SaveUser';

const ProductOder = {
        async render() {

            const { id } = parseRequestUrl()
            const { data: products } = await ProAPI.getAll()
            const { data: typeGroupName } = await TypeGroupNameAPI.getAll()
            const { data: productClassification1 } = await ProductClassification1API.getAll()
            const { data: productClassification2 } = await ProductClassification2API.getAll()
            const product = products.find(pro => id == pro._id)



            const type_group_name = typeGroupName.filter(item => {
                if (item.pro_id == id) {
                    return item
                }
            })

            // tên phân loại
            function typeName1() {
                for (let i = 0; i < type_group_name.length; i++) {
                    return type_group_name[0].name
                }
            }
            // tên giá trị phân loại
            function typeName2() {
                for (let i = 0; i < type_group_name.length; i++) {
                    return type_group_name[1].name
                }
            }

            // hiện tên thuộc phân loại
            const product_classification1 = productClassification1.filter(item => {
                if (item.pro_id == id) {
                    return item
                }
            })

            // hiện giá trị thuộc phân loại
            const product_classification2Arr = []
            productClassification2.map(item => {
                if (item.pro_id == id) {
                    product_classification2Arr.push(item.name)
                }
            })

            const newSetProClass = [...new Set(product_classification2Arr)]

            // hiện giá tiền ( lấy giá tiền trong bảng productClassification2)
            // khi đó mình sẽ lấy được toàn bộ giá tiền thuộc bảng productClassification2 
            //và tìm giá trị tiền lớn nhất và nhỏ nhất để hiện ra
            const priceArr = []

            productClassification2.map(item => {
                if (item.pro_id == id) {
                    priceArr.push(item.price)
                }
            })

            var maxPrice = Math.max.apply(Math, priceArr);
            var minPrice = Math.min.apply(Math, priceArr);

            var maxPriceSale = Math.ceil(maxPrice * ((100 - product.sale) / 100)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            var minPriceSale = Math.ceil(minPrice * ((100 - product.sale) / 100)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

            return /*html*/ `
                <div class="detail-columm_right">
                    <h2>${product.name}</h2>
                    <div class="item__review">
                        <span>5.0
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </span>
                        <span>61 đã bán</span>
                    </div>
                    <div class="d-price">
                        <span class="price-sale">${minPriceSale + "đ"} - ${maxPriceSale + "đ"}</span>
                        <span class="price">
                            <span class="showPrice">
                                ${minPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ"} - ${maxPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                            </span> đ
                        </span>
                        <span>${product.sale}% giảm</span>
                    </div>
                        <div class="validate">
                            <div class="d-type">
                                <h4>${typeName1()}</h4>
                                <div class="type">
                                    <ul>
                                        ${product_classification1.map(item => {
                                        return /*html*/ `
                                        <li data-id="${item._id}">
                                            <a>${item.name}</a>
                                            <div class="check-type">
                                                <div class="check">
                                                    <i class="fas fa-check"></i>
                                                </div>
                                            </div>
                                        </li>
                                        ` }).join("")}
                                    </ul>
                                </div>
                            </div>
                            <div class="d-size">
                                <h4>${typeName2()}</h4>
                                <div class="size">
                                    <ul id="list">
                                        ${newSetProClass.map(item => {
                                        return /*html*/ `
                                        <li>
                                            <a>${item}</a>
                                            <div class="check-size">
                                                <div class="check_z">
                                                    <i class="fas fa-check"></i>
                                                </div>
                                            </div>
                                        </li>
                                        ` }).join("")}
                                    </ul>
                                </div>
                            </div>
                            <div class="quantity">
                                <h4>số lượng</h4>
                                <div class="q-quantity">
                                    <button class="q-minus">-</button>
                                    <input type="text" value="1">
                                    <button class="q-add">+</button>
                                    <div class="show-quantity"></div>
                                </div>
                            </div>
                        </div>
                        <div class="d-addToCart">
                            <div class="addCart"><i class="fas fa-cart-plus"></i> thêm vào giỏ hàng</button></div>
                            <div class="buy_now">mua ngay</div>
                        </div>
                </div>
            
            `
    },
    async afterRender() {

        const {id } = parseRequestUrl()
        const { data: products } = await ProAPI.getAll()
        const { data: saveuser } = await SaveUserAPI.getAll()
        const {data: saveoders} = await SaveOderAPI.getAll()
        const {data: productClassification1} = await ProductClassification1API.getAll()
        const {data: productClassification2} = await ProductClassification2API.getAll()
        const product = products.find(pro => id == pro._id)

        // type
        const types = $(".type>ul>li"); // tên phân loại
        const sizes = $(".size>ul>li");// tên giá trị phân loại

        types.forEach((type, index) => {
            type.addEventListener("click", function() {
                $(".validate").style.background = "#fff"
                $(".validate").style.padding = "0"

                // sử lý khi click vào phân loại hàng thì hiện đỏ biểu thị cho đã chọn
                const check_type = types[index];

                for (var i = 0; i < types.length; i++) {
                    types[i].classList.remove("active-type")
                }
                check_type.classList.add("active-type")
                //

                // lấy id user đang đăng nhập
                let idUser = saveuser.find(item => {
                    return item._id
                })


                // lấy id khi click vào tên phân loại
                const id = type.dataset.id
                

                const proClass1 = productClassification1.find(item => {
                    if (item._id == id) {
                        return item

                    }
                })
            
                const proClass2 = productClassification2.filter(pro => {
                    if (proClass1.condition == pro.condition) {
                        return pro
                    }
                })

                // khi click vào tên phân loại thì hiện giá trị phân loại liên quan đến tên phân loại đó
                const html = proClass2.map(item => {
                    return /*html*/ `
                            <li data-id="${item._id}">
                                <a>${item.name}</a>
                                <div class="check-size">
                                    <div class="check_z">
                                        <i class="fas fa-check"></i>
                                    </div>
                                </div>
                            </li>
                        `
                }).join("")
                $("#list").innerHTML = html

                // size
                const sizes = $(".size>ul>li");// tên giá trị phân loại

                if (Array.isArray(sizes)) {
                    sizes.forEach((size, index) => {
                        size.addEventListener("click", function() {
                            $(".validate").style.background = "#fff"
                            $(".validate").style.padding = "0"
        
                            // sử lý khi click vào giá trị phân loại hàng thì hiện đỏ biểu thị cho đã chọn
                            const check_size = sizes[index];

                            for (var i = 0; i < sizes.length; i++) {
                                sizes[i].classList.remove("active-value");
                            }
                            check_size.classList.add("active-value");
                            //

                            // lấy id khi click vào tên phân loại
                            const id = size.dataset.id
                            const ProClass2 = productClassification2.find(item => {
                                if (id == item._id) {
                                    return item
                                }
                            })

                            $(".showPrice").innerHTML = ProClass2.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                            $(".price-sale").innerHTML = Math.ceil(ProClass2.price * ((100 - product.sale) / 100)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ"
                            $(".show-quantity").innerHTML = `${ProClass2.quantity} sản phẩm`

                            if(saveuser.length=="" || saveuser==undefined){
                                alert("Bạn cần đăng nhâp để thêm sản phẩm")
                                window.location.href="/#/signin"
                            }else{
                                $(".addCart").addEventListener("click",async function(e) {
                                    $(".validate").style.background = "#fff"
                                    $(".validate").style.padding = "0"
                
                                    const oders=saveoders.find(item=>{
                                        if(item.classification==proClass1.name && item.commodity_value==ProClass2.name && item.user_id==idUser.user_id){
                                            return item
                                        }

                                    })  

                                    const today = new Date()
                                    const dateDay = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

                                    if(oders){
                                        let formData=new FormData();
                                        formData.append("amount",+$(".q-quantity>input").value + +oders.amount)

                                        await SaveOderAPI.upload(oders._id,formData)
                                        alert("Sửa thành công")
                                        await reRender(OderHeader,".header__main-shopping-cart")
                                        await reRender(ProductOder,"#render-detail")
                                    }else{
                                        const oder = {
                                        price: ProClass2.price,
                                        classification: proClass1.name,
                                        commodity_value: ProClass2.name,
                                        amount: $(".q-quantity>input").value,
                                        pro_id:product._id,
                                        user_id:idUser.user_id,
                                        name_pro:product.name,
                                        cover_image:product.cover_image,
                                        sale:product.sale,
                                        shop_id:product.shop_id,
                                        day:dateDay

                                    }
                                    await SaveOderAPI.add(oder)
                                    alert("thêm thành công")
                                    await reRender(OderHeader,".header__main-shopping-cart")
                                    await reRender(ProductOder,"#render-detail")
                                    }
                                })
                            }
                        });
                    });

                } else {
                    sizes.addEventListener("click", function() {
                        $(".validate").style.background = "#fff";
                        $(".validate").style.padding = "0";

                        // sử lý khi click vào giá trị phân loại hàng thì hiện đỏ biểu thị cho đã chọn 
                        sizes.classList.add("active-value")

                        const id = sizes.dataset.id
                        const ProClass2 = productClassification2.find(item => {
                            if (id == item._id) {
                                return item
                            }
                        })
                        $(".showPrice").innerHTML = ProClass2.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                        $(".price-sale").innerHTML = Math.ceil(ProClass2.price * ((100 - product.sale) / 100)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ"
                        $(".show-quantity").innerHTML = `${ProClass2.quantity} sản phẩm`
                    
                    if(saveuser.length=="" || saveuser==undefined){
                        alert("Bạn cần đăng nhâp để thêm sản phẩm")
                        window.location.href="/#/signin"
                    }else{
                        $(".addCart").addEventListener("click",async function(e) {

                            $(".validate").style.background = "#fff"
                            $(".validate").style.padding = "0"
        
                            const oders=saveoders.find(item=>{
                                if(item.classification==proClass1.name && item.commodity_value==ProClass2.name && item.user_id==idUser.user_id){
                                    return item
                                }
                            })  
                            const today = new Date()
                            const dateDay = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

                            if(oders){
                                let formData=new FormData();
                                formData.append("amount",+$(".q-quantity>input").value + +oders.amount)

                                await SaveOderAPI.upload(oders._id,formData)
                                alert("Sửa thành công")
                                await reRender(OderHeader,".header__main-shopping-cart")
                                await reRender(ProductOder,"#render-detail")
                            }else{
                                const oder = {
                                price: ProClass2.price,
                                classification: proClass1.name,
                                commodity_value: ProClass2.name,
                                amount: $(".q-quantity>input").value,
                                pro_id:product._id,
                                user_id:idUser.user_id,
                                name_pro:product.name,
                                cover_image:product.cover_image,
                                sale:product.sale,
                                shop_id:product.shop_id,
                                day:dateDay

                            }
                            await SaveOderAPI.add(oder)
                            alert("thêm thành công")
                            await reRender(OderHeader,".header__main-shopping-cart")
                            await reRender(ProductOder,"#render-detail")
                            }
                        })
                    }
                    });
                }
            });
        });


        $(".addCart").addEventListener("click",async function() {
            // saveoders.map( item=>{
            //     SaveOderAPI.remove(item._id)
            // })
            if(!types.clicked && !sizes.clicked){
                $(".validate").style.background = "#fff5f5"
                $(".validate").style.padding = "10px 20px"
            }
            
        })




        // số lượng
        const q_minus = $(".q-minus");
        const q_add = $(".q-add");
        const q_input = $(".q-quantity>input");
        q_minus.addEventListener("click", function() {
            if (q_input.value == 0) {
                q_minus.disabled = true;
            } else {
                q_minus.disabled = false;
                q_input.value = parseInt(q_input.value) - 1;
            }
        });
        q_add.addEventListener("click", function() {
            q_minus.disabled = false;
            q_input.value = parseInt(q_input.value) + 1;
        });
       
    }
}
export default ProductOder