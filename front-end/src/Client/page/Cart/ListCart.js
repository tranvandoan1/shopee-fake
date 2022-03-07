import ShopOwnerAPI from './../../../Api/ShopOwner';
import SaveUserAPI from './../../../Api/SaveUser';
import TypeGroupNameAPI from './../../../Api/TypeGroupName';
import ClassificationAPI from "../../../Api/ClassificationAPI";
import CommodityValueAPI from "../../../Api/CommodityValueAPI";
import SaveOderAPI from './../../../Api/SaveOder';
import { $, reRender } from '../../../ultis';
import TotalProductOder from './TotalProductOder';
const ListCart = {
        async render() {

            const { data: saveoders } = await SaveOderAPI.getAll();
            const { data: saveuser } = await SaveUserAPI.getAll();
            const { data: shopowner } = await ShopOwnerAPI.getAll();
            const { data: classification } = await ClassificationAPI.getAll();
            const { data: commodityvalue } = await CommodityValueAPI.getAll();
            const { data: typegroupname } = await TypeGroupNameAPI.getAll();

            const idUser = saveuser.find(item => {
                return item
            })

            // lọc các tên giống nhau rồi xóa đi còn lại những tên ko giống nhau
            const commodityvalueArr = (commodityvalue = []) => {
                const newCommodityvalue = [];
                while (commodityvalue.length > 0) {
                    newCommodityvalue.push(commodityvalue[0]);
                    commodityvalue = commodityvalue.filter(item => item.name !== commodityvalue[0].name)
                }
                return newCommodityvalue
            }

            // console.log(commodityvalueArr(commodityvalue))
            // tìm ra tên shop mà có sản phẩm đnag oder
            const nameShopArr = []
            shopowner.filter(shop => {
                saveoders.map(item => {
                    if (item.shop_id == shop._id && item.user_id == idUser.user_id) {
                        nameShopArr.push(shop)
                    }
                })
            })

            // xóa các phần tử trùng nhau
            const nameShop = [...new Set(nameShopArr)]

            return /*html*/ `
            <div class="cart-page_pr">
                ${ nameShop.map(shop=>{ 
                    return /*html*/ `
                        <div class="cart-page_pr-owner"><i class="fas fa-house-user"></i>${shop.nameShop}</div>

                        ${ saveoders.map(item=>{ 
                            if(item.shop_id==shop._id && item.user_id==idUser.user_id){ 
                            return /*html*/ `
                        <div class="cart-page_pr-show">
                           <div class="checkbox">
                                <label for="check" id="active" data-id="${item._id}"></label>
                                <input type="checkbox" name="" value="${item._id}" data-id="${item._id}"id="check">
                            </div>
                            <div class="pr-info">
                                <a href="">
                                    <div class="pr-image">
                                        <img src="${item.cover_image}" alt="">
                                    </div>
                                </a>
                                <a href="">
                                    <span>${item.name_pro}</span>
                                </a>
                                <form id="form-add">
                                    <div class="pr-classify">
                                        <div class="classify">
                                            <span>phân loại <i class="fas fa-sort-up"></i></span>
                                            <br>
                                            <div class="pr-size">${item.classification},${item.commodity_value}</div>
                                        </div>

                                        <div class="pr-filter">
                                            <div class="pr-type">
                                                ${ typegroupname.map(type=>{ if(type.pro_id==item.pro_id &&type.dk==1){ return /*html*/ `
                                                <h4>${type.name}</h4> ` } }).join("") }
                                                <div class="type">
                                                    <ul>
                                                        ${classification.map(clas=>{ if(clas.pro_id==item.pro_id){ return /*html*/ `
                                                        <li data-id="${clas._id}">
                                                            <a>${clas.name}</a>
                                                            <div class="pr-check-type">
                                                                <div class="pr-check">
                                                                    <i class="fas fa-check"></i>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        ` } }).join("")}

                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="pr-size">
                                                ${ typegroupname.map(type=>{ if(type.pro_id==item.pro_id &&type.dk==2){ return /*html*/ `
                                                <h4>${type.name}</h4> ` } }).join("") }
                                                <div class="size">
                                                    <ul id="listt">
                                                        ${ commodityvalueArr(commodityvalue).map(comm=>{ if(comm.pro_id==item.pro_id ){ return /*html*/ `
                                                        <li data-id="${comm._id}">
                                                            <a>${comm.name}</a>
                                                            <div class="pr-check-size">
                                                                <div class="pr-check_z">
                                                                    <i class="fas fa-check"></i>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        ` } }).join("") }
                                                    </ul>
                                                </div>
                                            </div>
                                            <!-- <div class="pr-button">
                                                <button class="back">Trở lại</button>
                                                <button type="submit" class="confirm">Mua ngay</button>
                                            </div>>-->
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="pr-price_sale">
                                <del>
                                    ${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} ₫</del> ${Math.ceil(item.price * ((100 - item.sale) / 100)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} ₫
                            </div>
                            <div class="pr-quantity">
                                <button class="pr-prev" data-id="${item._id}">-</button>
                                <input type="text" value="${item.amount}" class="input">
                                <button class="pr-next" data-id="${item._id}">+</button>
                            </div>
                            <div class="pr-price">
                                ${(Math.ceil(item.price * ((100 - item.sale) / 100)) * item.amount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} ₫
                            </div>
                            <div class="pr-operation"><i data-id="${item._id}" class="far fa-trash-alt"></i></div>
                        </div>
                        ` } }).join("") } ` }).join("") }
                    </div>
                    <div class="pr-buying">
                        ${await TotalProductOder.render()}
                    </div>
        `
    },
    async afterRender() {

        const { data: saveoders } = await SaveOderAPI.getAll();
        const { data: classification } = await ClassificationAPI.getAll();
        const { data: commodityvalue } = await CommodityValueAPI.getAll();

        // $("#check").forEach(btn=>{
        //     btn.addEventListener("click",function(){
        //         const id=btn.dataset.id
        //       if(btn.checked ==true){
        //       console.log(btn.value)

        //       }else{
        //       console.log("1")

        //       }
        //     })
        // })

        // xóa
        const deletee = $(".pr-operation>i")

        if (Array.isArray(deletee)) {
            deletee.forEach((btn, index) => {
                btn.addEventListener("click", async function() {
                    const id = btn.dataset.id
                    const check = confirm("Bạn có muốn xóa không");
                    if (check) {
                        await SaveOderAPI.remove(id)
                        await reRender(ListCart, "#cart-page_pr")
                        await reRender(TotalProductOder, ".pr-buying")
                    }
                })
            })
        } else {
            deletee.addEventListener("click", async function() {
                const id = deletee.dataset.id
                const check = confirm("Bạn có muốn xóa không");
                if (check) {
                    await SaveOderAPI.remove(id)
                    await reRender(ListCart, "#cart-page_pr")
                    await reRender(TotalProductOder, ".pr-buying")
                }
            })
        }

        // tăng giảm số lượng
        const pr_prev = $(".pr-prev");
        const pr_next = $(".pr-next");
        const pr_input = $(".input");

        if (Array.isArray(pr_prev)) {
            pr_prev.forEach((btn, index) => {
                btn.addEventListener("click", async function() {
                    const input = pr_input[index];

                    const id = btn.dataset.id

                    if (input.value <= 1) {
                        btn.disabled = true;
                        await SaveOderAPI.remove(id)
                        await reRender(ListCart, "#cart-page_pr")
                        await reRender(TotalProductOder, ".pr-buying")

                    } else {
                        input.value = parseInt(input.value) - 1;
                        btn.disabled = false;
                        let formData = new FormData()
                        formData.append("amount", input.value)
                        await SaveOderAPI.upload(id, formData)
                        await reRender(ListCart, "#cart-page_pr")
                        await reRender(TotalProductOder, ".pr-buying")

                    }
                });
            });
        } else {
            pr_prev.addEventListener("click", async function() {
                const id = pr_prev.dataset.id

                if (pr_input.value <= 1) {
                    await SaveOderAPI.remove(id)
                    await reRender(ListCart, "#cart-page_pr")
                    await reRender(TotalProductOder, ".pr-buying")

                } else {
                    pr_input.value = parseInt(pr_input.value) - 1;
                    let formData = new FormData()
                    formData.append("amount", pr_input.value)
                    await SaveOderAPI.upload(id, formData)
                    await reRender(ListCart, "#cart-page_pr")
                    await reRender(TotalProductOder, ".pr-buying")

                }
            });
        }

        if (Array.isArray(pr_prev)) {
            pr_next.forEach((btn, index) => {
                btn.addEventListener("click", async function() {
                    const input = pr_input[index];
                    const id = btn.dataset.id

                    if (input.value == 10) {
                        btn.disabled = true;
                    } else {
                        input.value = parseInt(input.value) + 1;
                        let formData = new FormData()
                        formData.append("amount", input.value)
                        await SaveOderAPI.upload(id, formData)
                        await reRender(ListCart, "#cart-page_pr")
                        await reRender(TotalProductOder, ".pr-buying")
                    }
                });
            });
        } else {
            pr_next.addEventListener("click", async function() {
                const id = pr_next.dataset.id

                if (pr_input.value == 10) {
                    pr_next.disabled = true;
                } else {
                    pr_input.value = parseInt(pr_input.value) + 1;
                    pr_next.disabled = false;
                    let formData = new FormData()
                    formData.append("amount", pr_input.value)
                    await SaveOderAPI.upload(id, formData)
                    await reRender(ListCart, "#cart-page_pr")
                    await reRender(TotalProductOder, ".pr-buying")
                }
            });
        }





        const prFilter = $(".pr-filter"); //bảng lọc thể loại của sản phẩm
        const prClassify = $(".classify");
        if (Array.isArray(prClassify)) {
            prClassify.forEach((btn, index) => {
                btn.addEventListener("click", function() {
                    const filter = prFilter[index];
                    if (filter.style.display === "block") {
                        filter.style.display = "none";
                        for (var i = 0; i < prFilter.length; i++) {
                            prFilter[i].style.display = "none";
                        }

                    } else {
                        for (var i = 0; i < prFilter.length; i++) {
                            prFilter[i].style.display = "none";
                        }
                        filter.style.display = "block";

                        // type
                        const prCheckType = $(".pr-check-type");
                        const prChecA = $(".pr-type ul>li>a");
                        const prCheckBoder = $(".pr-type ul>li");
                        const prType = $(".pr-type ul>li");
                        prType.forEach((item, indexx) => {
                            item.addEventListener("click", function() {
                                const checkType = prCheckType[indexx];
                                const checkA = prChecA[indexx];
                                const checkBoder = prCheckBoder[indexx];

                                for (var i = 0; i < prCheckType.length; i++) {
                                    prCheckType[i].style.display = "none";
                                    prChecA[i].style.color = "black";
                                    prCheckBoder[i].style.border = "1px solid rgb(233, 233, 233)";
                                }

                                checkType.style.display = "block";
                                checkA.style.color = "rgb(238, 77, 45)";
                                checkBoder.style.border = "1px solid rgb(238, 77, 45)";

                                const id = item.dataset.id

                                const proClass = classification.find(item => item._id == id)

                                // khi click vào tên phân loại thì hiện giá trị phân loại liên quan đến tên phân loại đó
                                const html = commodityvalue.map(item => {
                                    if (item.condition == proClass.condition) {
                                        return /*html*/ `
                                            <li data-id="${item._id}">
                                                <a>${item.name}</a>
                                                <div class="pr-check-size">
                                                    <div class="pr-check_z">
                                                        <i class="fas fa-check"></i>
                                                    </div>
                                                </div>
                                            </li>
                                        `
                                    }

                                }).join("")
                                $("#listt")[index].innerHTML = html


                                // size
                                const prCheckSize = $(".pr-check-size");
                                const prCheckA = $(".pr-size ul>li>a");
                                const prCheckBoderSize = $(".pr-size ul>li");
                                const pr_size = $(".pr-size ul>li");
                                if (Array.isArray(pr_size)) {
                                    pr_size.forEach((item, indexSize) => {
                                        item.addEventListener("click", function() {
                                            const checkSize = prCheckSize[indexSize];
                                            const checkA = prCheckA[indexSize];
                                            const checkBoder = prCheckBoderSize[indexSize];

                                            for (var i = 0; i < prCheckSize.length; i++) {
                                                prCheckSize[i].style.display = "none";
                                                prCheckA[i].style.color = "black";
                                                prCheckBoderSize[i].style.border = "1px solid rgb(233, 233, 233)";
                                            }

                                            checkSize.style.display = "block";
                                            checkA.style.color = "rgb(238, 77, 45)";
                                            checkBoder.style.border = "1px solid rgb(238, 77, 45)";

                                            const id = item.dataset.id

                                            const proCommValue = commodityvalue.find(proComm => proComm._id == id)
                                            const proOder = saveoders.find(item => item.pro_id == proCommValue.pro_id)

                                            $("#form-add")[index].addEventListener("click", async function(e) {
                                                e.preventDefault()
                                                let formData = new FormData();
                                                formData.append("classification", proClass.name)
                                                formData.append("commodity_value", proCommValue.name)

                                                await SaveOderAPI.upload(proOder._id, formData)
                                                alert("Sửa thành công")
                                                await reRender(ListCart, "#cart-page_pr")
                                            })

                                        });
                                    });
                                } else {
                                    pr_size.addEventListener("click", function() {

                                        prCheckSize.style.display = "block";
                                        prCheckA.style.color = "rgb(238, 77, 45)";
                                        prCheckBoderSize.style.border = "1px solid rgb(238, 77, 45)";

                                        const id = pr_size.dataset.id

                                        const proCommValue = commodityvalue.find(proComm => proComm._id == id)
                                        const proOder = saveoders.find(item => item.pro_id == proCommValue.pro_id)

                                        $("#form-add")[index].addEventListener("click", async function() {
                                            e.preventDefault()

                                            let formData = new FormData();
                                            formData.append("classification", proClass.name)
                                            formData.append("commodity_value", proCommValue.name)

                                            await SaveOderAPI.upload(proOder._id, formData)
                                            alert("Sửa thành công")
                                            await reRender(ListCart, "#cart-page_pr")
                                        })

                                    });
                                }
                            });
                        });
                    }
                });
            });
        } else {
            prClassify.addEventListener("click", function() {
                if (prFilter.style.display === "block") {
                    prFilter.style.display = "none";
                    for (var i = 0; i < prFilter.length; i++) {
                        prFilter[i].style.display = "none";
                    }

                } else {
                    for (var i = 0; i < prFilter.length; i++) {
                        prFilter[i].style.display = "none";
                    }
                    prFilter.style.display = "block";
                    
                        // type
                        const prCheckType = $(".pr-check-type");
                        const prChecA = $(".pr-type ul>li>a");
                        const prCheckBoder = $(".pr-type ul>li");
                        const prType = $(".pr-type ul>li");
                        prType.forEach((item, indexx) => {
                            item.addEventListener("click", function() {
                                const checkType = prCheckType[indexx];
                                const checkA = prChecA[indexx];
                                const checkBoder = prCheckBoder[indexx];

                                for (var i = 0; i < prCheckType.length; i++) {
                                    prCheckType[i].style.display = "none";
                                    prChecA[i].style.color = "black";
                                    prCheckBoder[i].style.border = "1px solid rgb(233, 233, 233)";
                                }

                                checkType.style.display = "block";
                                checkA.style.color = "rgb(238, 77, 45)";
                                checkBoder.style.border = "1px solid rgb(238, 77, 45)";

                                const id = item.dataset.id

                                const proClass = classification.find(item => item._id == id)

                                // khi click vào tên phân loại thì hiện giá trị phân loại liên quan đến tên phân loại đó
                                const html = commodityvalue.map(item => {
                                    if (item.condition == proClass.condition) {
                                        return /*html*/ `
                                            <li data-id="${item._id}">
                                                <a>${item.name}</a>
                                                <div class="pr-check-size">
                                                    <div class="pr-check_z">
                                                        <i class="fas fa-check"></i>
                                                    </div>
                                                </div>
                                            </li>
                                        `
                                    }

                                }).join("")
                                $("#listt").innerHTML = html


                                // size
                                const prCheckSize = $(".pr-check-size");
                                const prCheckA = $(".pr-size ul>li>a");
                                const prCheckBoderSize = $(".pr-size ul>li");
                                const pr_size = $(".pr-size ul>li");
                                if (Array.isArray(pr_size)) {
                                    pr_size.forEach((item, indexSize) => {
                                        item.addEventListener("click", function() {
                                            const checkSize = prCheckSize[indexSize];
                                            const checkA = prCheckA[indexSize];
                                            const checkBoder = prCheckBoderSize[indexSize];

                                            for (var i = 0; i < prCheckSize.length; i++) {
                                                prCheckSize[i].style.display = "none";
                                                prCheckA[i].style.color = "black";
                                                prCheckBoderSize[i].style.border = "1px solid rgb(233, 233, 233)";
                                            }

                                            checkSize.style.display = "block";
                                            checkA.style.color = "rgb(238, 77, 45)";
                                            checkBoder.style.border = "1px solid rgb(238, 77, 45)";

                                            const id = item.dataset.id

                                            const proCommValue = commodityvalue.find(proComm => proComm._id == id)
                                            const proOder = saveoders.find(item => item.pro_id == proCommValue.pro_id)

                                            $("#form-add").addEventListener("click", async function(e) {
                                                e.preventDefault()
                                                let formData = new FormData();
                                                formData.append("classification", proClass.name)
                                                formData.append("commodity_value", proCommValue.name)

                                                await SaveOderAPI.upload(proOder._id, formData)
                                                alert("Sửa thành công")
                                                await reRender(ListCart, "#cart-page_pr")
                                            })

                                        });
                                    });
                                } else {
                                    pr_size.addEventListener("click", function() {

                                        prCheckSize.style.display = "block";
                                        prCheckA.style.color = "rgb(238, 77, 45)";
                                        prCheckBoderSize.style.border = "1px solid rgb(238, 77, 45)";

                                        const id = pr_size.dataset.id

                                        const proCommValue = commodityvalue.find(proComm => proComm._id == id)
                                        const proOder = saveoders.find(item => item.pro_id == proCommValue.pro_id)

                                        $("#form-add").addEventListener("click", async function() {
                                            e.preventDefault()

                                            let formData = new FormData();
                                            formData.append("classification", proClass.name)
                                            formData.append("commodity_value", proCommValue.name)

                                            await SaveOderAPI.upload(proOder._id, formData)
                                            alert("Sửa thành công")
                                            await reRender(ListCart, "#cart-page_pr")
                                        })

                                    });
                                }
                            });
                        });
                }
            });
        }

        return /*html*/ `${await TotalProductOder.afterRender()}`
    }
}
export default ListCart