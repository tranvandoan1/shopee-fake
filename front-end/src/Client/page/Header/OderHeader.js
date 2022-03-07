import SaveOderAPI from "../../../Api/SaveOder";
import SaveUserAPI from "../../../Api/SaveUser";
const OderHeader = {
        async render() {
            const { data: saveoders } = await SaveOderAPI.getAll()
            const { data: saveuser } = await SaveUserAPI.getAll()
            saveoders.reverse()

            const idUser = saveuser.find(item => {
                return item
            })
            const saveoderArr = saveoders.filter((item, index) => {
                if (idUser !== undefined) {
                    if (item.user_id == idUser.user_id) {
                        return item
                    }
                }
            })

            function checkOder() {
                if (idUser == undefined) {
                    return /*html*/ `
                        <div class="shopping-cart">
                            <a href="">
                                <i class="fas fa-shopping-cart"></i>
                            </a>
                        </div>
                        `
                } else {
                    console.log("he")

                    if (saveoderArr == "") {
                        return /*html*/ `
                        <div class="shopping-cart">
                            <div class="shopee-cart-number-badge">${saveoderArr.length}</div>
                            <a href="/#/cart">
                                <i class="fas fa-shopping-cart"></i>
                            </a>
                            <div class="show-cart">
                                <div class="cart__produtcs-news">Chưa có sản phẩm</div>
                            </div>
                        </div>
                    `
                    } else {
                        const newOderArr = saveoderArr.filter((item, index) => {
                            if (index <= 4) {
                                return item
                            }
                        })
                        return /*html*/ `
                        <div class="shopping-cart">
                            <div class="shopee-cart-number-badge">${saveoderArr.length}</div>
                            <a href="/#/cart">
                                <i class="fas fa-shopping-cart"></i>
                            </a>
                            <div class="show-cart">
                                <div class="cart__produtcs-news">sản phẩm mới thêm
                                </div>
                                <hr>
                                <div class="list_show-cart">
                                    ${
                                        newOderArr.map((item)=>{
                                            return /*html*/ `
                                            <a href="">
                                                <div class="show-cart_img">
                                                    <img src="${item.cover_image}" alt="">
                                                </div>
                                                <div class="show-cart_name">
                                                    <p>${item.name_pro}
                                                    </p>
                                                </div>
                                                <div class="show-cart_money">
                                                    <p>${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ</p>
                                                </div>
                                            </a>
                                        `
                                        }).join("")
                                    }
                                </div>
                            </div>
                        </div>
                    `
                    }       
                    }
                 
            }   


        return /*html*/ `
                ${checkOder()}
                
        `
    }
}
export default OderHeader