import { $ } from "../../ultis"
import SaveUserAPI from './../../Api/SaveUser';
import UserAPI from './../../Api/Users';
import ShopOwnerAPI from './../../Api/ShopOwner';
const SellerChannel = {
    async render() {
        const { data: saveuser } = await SaveUserAPI.getAll()

        const idUser = saveuser.find(item => item)

        if (idUser == undefined) {
            window.location.href = "/#/signup"
        } else if (idUser.role == 3) {
            const SellerChannel = $("#linkCss")
            var head = $("head");
            SellerChannel.href = './src/CssClient/SellerChannel.css';
            await head.appendChild(SellerChannel);

            return /*html*/ `
                <div class="seller-channel">
                    <div class="seller-channel-header">
                        <div class="wapper">
                            <div class="cart-page-header">
                                <div class="cart-page-logo">
                                    <a href="Index.html">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Shopee.svg/2560px-Shopee.svg.png" alt="">
                                    </a>
                                    <span>Kênh bán hàng</span>
                                </div>
                                <div class="cart-page-search">
                                    <button><i class="fas fa-sign-out-alt"></i> Đăng xuất</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="account-container">
                        <div class="col-8">
                            <div class="left">
                                <div class="title">Bán hàng chuyên nghiệp</div>
                                <div class="subtitle">
                                    Quản lý shop của bạn một cách hiệu quả hơn trên Shopee với Shopee - Kênh Người bán
                                </div>
                                <div class="image"></div>
                            </div>

                        </div>
                        <div class="col-4">
                            <form action="" >
                                <h3>Bạn có muốn trở thành người bán hàng bằng tài khoản đang đăng nhập hay không ?</h3>
                                <button type="submit" id="submit">Đồng ý</button>
                                <a href="">Đăng ký tài khoản bán hàng mới</a>
                            </form>
                        </div>
                    </div>
                </div>
            `
        }
    },
    async afterRender() {
        const { data: saveuser } = await SaveUserAPI.getAll()

        const { data: users } = await UserAPI.getAll()
        const { data: shopowner } = await ShopOwnerAPI.getAll()

        const idUser = saveuser.find(item => item)

        const idShop = shopowner.find(item => item.user_id == idUser.user_id)

        const UserId = users.find(item => idUser.user_id == item._id)


        if (idUser.role == 3) {

            $("#submit").addEventListener("click", async function() {
                const check = confirm("Bạn chắc chắn chưa ?")
                if (check) {
                    let formData = new FormData()
                    formData.append("role", "2")
                    await SaveUserAPI.upload(idUser._id, formData)
                    await UserAPI.upload(UserId._id, formData)
                    alert("Đăng ký thành công")
                    window.location.href = "/#/seller-channel/categoris"
                }
            })
        } else if (idUser == undefined) {
            alert("Bạn phải đăng nhập để ")
            window.location.href = "/#/signup"
        } else if (idUser.role == 2) {
            window.location.href = "/#/page/seller-channel/" + `${idShop._id}`
        }

        // $(".cart-page-search").addEventListener("click", async function() {
        //     let check = confirm("Bạn có muốn đăng xuất không ?")
        //     if (check) {
        //         await SaveUserAPI.remove(idUser._id)
        //         alert("Đăng xuất thành công");
        //         window.location.href = ""
        //     }
        // })
    }

}
export default SellerChannel