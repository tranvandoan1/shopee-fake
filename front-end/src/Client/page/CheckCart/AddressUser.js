import { $ } from "../../../ultis";
import SaveUserAPI from './../../../Api/SaveUser';
import InfoUserAPI from './../../../Api/InfoUser';
import { reRender } from './../../../ultis';
import DeleteInfo from "./DeleteInfo";
import OderNow from "./OderNow";

const AddressUser = {
        async render() {

            const { data: infouser } = await InfoUserAPI.getAll()
            const { data: saveuser } = await SaveUserAPI.getAll()

            const idUser = saveuser.find(item => {
                return item
            })

            const inforUder = infouser.filter(item => item.user_id == idUser.user_id)
            console.log(inforUder)


            // xử lý khi user chưa có địa chỉ nhận hàng

            async function checkInfoUser() {
                if (inforUder.length > 0) {
                    return /*html*/ `
                        <div class="payment-header">
                            <div class="pm"></div>
                            <div class="delivery-addres">
                                <div class="delivery-address"> <i class="fas fa-map-marker-alt"></i> địa chỉ nhận hàng</div>
                                <div class="payment_delivery-address">
                                ${
                                    infouser.map(item=>{
                                        if(item.user_id==idUser.user_id){
                                            if(item.status=="select"){
                                                return /*html*/ `
                                                    <div class="payment_name">${item.name} ( ${item.phone} )</div>
                                                    <div class="payment_address">${item.specific_address},${item.ward},${item.district},${item.city}</div>
                                                    <span>mặc định</span>
                                                `
                                            }
                                        }
                                    }).join("")
                                }
                        
                                    <div class="payment_change">THAY ĐỔI</div>
                                </div>
                            </div>
                            <div class="add-address">
                                <div class="add_address">
                                    <div class="delivery-address"> <i class="fas fa-map-marker-alt"></i> địa chỉ nhận hàng</div>
                                    <button><i class="fas fa-plus"></i> thêm địa chỉ mới</button>
                                </div>
                                <div class="change-address">
                                    ${await DeleteInfo.render()}
                                </div>
                                <div class="back-complete">
                                <!-- <div class="complete"><button>hoàn thành</button></div>-->
                                    <div class="back"><button>trở lại</button></div>
                                </div>
                            </div>
                        </div>
                         <!-- thêm địa chỉ  -->
                         <div class="shopee-popup-form__header">
                            <div class="form__header">
                                <div class="shopee-popup-form__title">Địa chỉ mới</div>
                                <div class="shopee-popup-form__main">
                                    <div class="name-phone">
                                        <div class="shop_name"><input type="text" id="name" placeholder="Họ và tên"></div>
                                        <div class="shop_phone"><input type="text" id="phone" placeholder="Số điện thoại"></div>
                                    </div>
                        
                                    <div class="shop_address">
                                        <input placeholder="Tỉnh/Thành phố ,Quận/Huyện,Phường/Xã" id="inputAddress">
                                        <div class="shop_address-icon">
                                            <i class="far fa-times-circle"></i>
                                            <i class="fas fa-angle-down"></i>
                                        </div>
                        
                        
                        
                                        <div class="city-district-ward">
                                            <div class="city-district-ward_header">
                                                <ul>
                                                    <li class="active-city-district-ward">
                                                        <div class="city-name">Tỉnh/Thành Phố</div>
                                                    </li>
                                                    <li>
                                                        <div class="district-name">Quận/Huyện</div>
                                                    </li>
                                                    <li>
                                                        <div class="ward-name">Phường/Xã</div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="city-district-ward_show">
                                                <ul>
                                                    <li class="active-city-district-ward_show">
                                                        <div class="city-show">
                        
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="district-show">
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="ward-show">
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="shop_specific-address"><input type="text" id="specific-address" placeholder="Địa chỉ cụ thể"><span>địa chỉ cụ thể</span></div>
                                </div>
                                <div class="shopee-popup-form__footer">
                                    <button>Trở Lại</button>
                                    <button id="submit">Hoàn Thành</button>
                                </div>
                            </div>
                        </div>
                    `
                } else {
                    return /*html*/ `
                        <div class="payment-header">
                            <div class="pm"></div>
                            <div class="add-address" style="display: block">
                                <div class="add_address">
                                    <div class="delivery-address"> <i class="fas fa-map-marker-alt"></i> địa chỉ nhận hàng</div>
                                    <button><i class="fas fa-plus"></i> thêm địa chỉ mới</button>
                                </div>
                                <div class="change-address">
                                    ${await DeleteInfo.render()}
                                </div>
                            </div>
                        </div>
                        <!-- thêm địa chỉ  -->
                        <div class="shopee-popup-form__header">
                            <div class="form__header">
                                <div class="shopee-popup-form__title">Địa chỉ mới</div>
                                <div class="shopee-popup-form__main">
                                    <div class="name-phone">
                                        <div class="shop_name"><input type="text" id="name" placeholder="Họ và tên"></div>
                                        <div class="shop_phone"><input type="text" id="phone" placeholder="Số điện thoại"></div>
                                    </div>
                        
                                    <div class="shop_address">
                                        <input placeholder="Tỉnh/Thành phố ,Quận/Huyện,Phường/Xã" id="inputAddress">
                                        <div class="shop_address-icon">
                                            <i class="far fa-times-circle"></i>
                                            <i class="fas fa-angle-down"></i>
                                        </div>
                        
                        
                        
                                        <div class="city-district-ward">
                                            <div class="city-district-ward_header">
                                                <ul>
                                                    <li class="active-city-district-ward">
                                                        <div class="city-name">Tỉnh/Thành Phố</div>
                                                    </li>
                                                    <li>
                                                        <div class="district-name">Quận/Huyện</div>
                                                    </li>
                                                    <li>
                                                        <div class="ward-name">Phường/Xã</div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="city-district-ward_show">
                                                <ul>
                                                    <li class="active-city-district-ward_show">
                                                        <div class="city-show">
                        
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="district-show">
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="ward-show">
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="shop_specific-address"><input type="text" id="specific-address" placeholder="Địa chỉ cụ thể"><span>địa chỉ cụ thể</span></div>
                                </div>
                                <div class="shopee-popup-form__footer">
                                    <button>Trở Lại</button>
                                    <button id="submit">Hoàn Thành</button>
                                </div>
                            </div>
                        </div>
                    
                `
            }
        }


        return /*html*/ `
            <div class="cart-page-header-wrapper">
                <div class="wapper">
                    <div class="cart-page-header">
                        <div class="cart-page-logo">
                            <a href="Index.html">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Shopee.svg/2560px-Shopee.svg.png" alt="">
                            </a>
                            <span>Thanh toán</span>
                        </div>
                    </div>
                </div>
            </div>
            ${await checkInfoUser()}
                
        `
    },
    async afterRender() {

        const { data: saveuser } = await SaveUserAPI.getAll();
        const { data: infouser } = await InfoUserAPI.getAll()

        const idUser = saveuser.find(item => {
            return item
        })

        const inforUder = infouser.filter(item => item.user_id == idUser.user_id)
        
        const cityDistrictWardHeader = $(".city-district-ward_header>ul>li");
        const cityDistrictWardShow = $(".city-district-ward_show>ul>li");

        cityDistrictWardHeader.forEach((btn, index) => {
            btn.addEventListener("click", function() {
                const cityDistrictWard = cityDistrictWardShow[index];

                for (var i = 0; i < cityDistrictWardHeader.length; i++) {
                    cityDistrictWardHeader[i].classList.remove("active-city-district-ward");
                    cityDistrictWardShow[i].classList.remove(
                        "active-city-district-ward_show"
                    );
                }
                btn.classList.add("active-city-district-ward");
                cityDistrictWard.classList.add("active-city-district-ward_show");
            });
        });

        // thêm thông tin thành phố ,quận , huyện , xã
        const cityShow = $(".city-show");
        const districtShow = $(".district-show");
        const wardShow = $(".ward-show");

        const UrlProvinces = "https://provinces.open-api.vn/api/?depth=3";

        fetch(UrlProvinces)
            .then((response) => response.json())
            .then((data) => {

                cityShow.innerHTML = data.map((btn) => {
                    return /*html*/ ` 
                            <option value="${btn.code}" id="city">${btn.name}</option>
                        `;
                }).join("");

                const showAddresss = []

                $("#city").forEach(cityBtn => {
                    cityBtn.addEventListener("click", function() {
                        showAddresss.push(cityBtn.innerHTML)
                        $("#inputAddress").value = showAddresss

                        const city = data.find(item => item.code == cityBtn.value)

                        // sau khi ấn chọn thành phố thì hiện luôn sang quận huyện
                        for (var i = 0; i < cityDistrictWardHeader.length; i++) {
                            cityDistrictWardHeader[i].classList.remove("active-city-district-ward");
                            cityDistrictWardShow[i].classList.remove(
                                "active-city-district-ward_show"
                            );
                        }
                        cityDistrictWardHeader[1].classList.add("active-city-district-ward");
                        cityDistrictWardShow[1].classList.add("active-city-district-ward_show");
                        //

                        // lọc quận huyện theo thành phố đã chọn
                        districtShow.innerHTML = city.districts.map(item => {
                            return /*html*/ ` 
                                <option value="${item.code}" id="district">${item.name}</option>
                            `;
                        }).join("")

                        $("#district").forEach(districtBtn => {
                            districtBtn.addEventListener("click", function() {
                                showAddresss.push(districtBtn.innerHTML)
                                $("#inputAddress").value = showAddresss

                                const district = city.districts.find(item => item.code == districtBtn.value)

                                // sau khi ấn chọn quận huyện thì hiện luôn sang phường xã
                                for (var i = 0; i < cityDistrictWardHeader.length; i++) {
                                    cityDistrictWardHeader[i].classList.remove("active-city-district-ward");
                                    cityDistrictWardShow[i].classList.remove(
                                        "active-city-district-ward_show"
                                    );
                                }
                                cityDistrictWardHeader[2].classList.add("active-city-district-ward");
                                cityDistrictWardShow[2].classList.add("active-city-district-ward_show");
                                //

                                // lọc phường xã theo quận huyện đã chọn
                                wardShow.innerHTML = district.wards.map(item => {
                                    return /*html*/ ` 
                                            <option value="${item.code}" id="ward">${item.name}</option>
                                        `;
                                }).join("")

                                $("#ward").forEach(wardBtn => {
                                    wardBtn.addEventListener("click", function() {
                                        showAddresss.push(wardBtn.innerHTML)
                                        $("#inputAddress").value = showAddresss

                                        // sau khi ấn chọn quận huyện thì xóa luôn bảng hiện
                                        cityDistrictWard.style.display = "none";
                                        faAngleDown.style.display = "none";
                                        //

                                        const ward = district.wards.find(item => item.code == wardBtn.value)

                                        $("#submit").addEventListener("click", async function() {
                                            if(inforUder.length ==0){
                                                let formData = new FormData()
                                                formData.append("name", $("#name").value)
                                                formData.append("phone", $("#phone").value)
                                                formData.append("city", city.name)
                                                formData.append("district", district.name)
                                                formData.append("ward", ward.name)
                                                formData.append("specific_address", $("#specific-address").value)
                                                formData.append("status", "select")
                                                formData.append("user_id", idUser.user_id)
    
                                                await InfoUserAPI.add(formData)
                                                await reRender(AddressUser, ".AddressUser")
                                                await reRender(OderNow, ".oder")
                                            }else{
                                                let formData = new FormData()
                                                formData.append("name", $("#name").value)
                                                formData.append("phone", $("#phone").value)
                                                formData.append("city", city.name)
                                                formData.append("district", district.name)
                                                formData.append("ward", ward.name)
                                                formData.append("specific_address", $("#specific-address").value)
                                                formData.append("status", "not-select")
                                                formData.append("user_id", idUser.user_id)
    
                                                await InfoUserAPI.add(formData)
                                                await reRender(AddressUser, ".AddressUser")
                                                await reRender(OderNow, ".oder")
                                            }
                                
                                        })
                                    })
                                })
                            })
                        })
                    });
                });


            });



        // hiện bảng list thành phố , phường, xã
        const shopAddress = $(".shop_address>input");
        const cityDistrictWard = $(".city-district-ward");
        const faAngleDown = $(".shop_address-icon>.fa-times-circle");

        shopAddress.addEventListener("click", function() {
            cityDistrictWard.style.display = "block";
            faAngleDown.style.display = "block";
        });

        faAngleDown.addEventListener("click", function() {
            cityDistrictWard.style.display = "none";
            faAngleDown.style.display = "none";
        });
       

        if(inforUder.length >0){
             const paymentChange = $(".payment_change");
            const addAddress = $(".add-address");
            const back = $(".back");
            const deliveryAddres = $(".delivery-addres");

            // hiện thay đổi địa chỉ
            paymentChange.addEventListener("click", function() {
                addAddress.style.display = "block";
                deliveryAddres.style.display = "none";
            });
            back.addEventListener("click", function() {
                addAddress.style.display = "none";
                deliveryAddres.style.display = "block";
                reRender(AddressUser,".AddressUser")
            });
        }
        // thêm địa chỉ
        const shopeePopupFormHeader = $(".shopee-popup-form__header");

        const button = $(".add_address>button");
        button.addEventListener("click", function () {
        shopeePopupFormHeader.classList.add("active-shopee-popup-form__header");
        });
    
        window.addEventListener("click", function (e) {
        if (e.target == shopeePopupFormHeader) {
            shopeePopupFormHeader.classList.remove("active-shopee-popup-form__header");
        }
        });
        return `${await DeleteInfo.afterRender()}
        `
    }
}
export default AddressUser