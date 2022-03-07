import SaveUserAPI from "../../../Api/SaveUser";
import { $ } from "../../../ultis";
import InfoUserAPI from './../../../Api/InfoUser';
import SaveOderAPI from './../../../Api/SaveOder';
import OderAPI from './../../../Api/Oders';
import OderDetailAPI from './../../../Api/OderDetail';
import ShopOwnerAPI from "../../../Api/ShopOwner";

const OderNow = {
    render() {
        return /*html*/ `
            <span>Nhấn "Đặt hàng" đồng nghĩa với việc bạn đã đồng ý đạt hàng</span>
            <button id="oder-now">Đặt hàng ngay</button>
        `
    },
    async afterRender() {
        const { data: saveuser } = await SaveUserAPI.getAll();
        const { data: infouser } = await InfoUserAPI.getAll()
        const { data: saveoders } = await SaveOderAPI.getAll()
        const { data: oders } = await OderAPI.getAll()
        const { data: oderdetail } = await OderDetailAPI.getAll()
        const { data: shopowner } = await ShopOwnerAPI.getAll()

        const idUser = saveuser.find(item => {
            return item
        })

        // tìm thông tin của user
        const info = infouser.filter(item => item.user_id == idUser.user_id)

        // tìm địa chỉ thông tin người nhận được làm mặc định
        const inforUderSelect = infouser.find(item => {
            if (item.status == "select") {
                if (item.user_id == idUser.user_id) {
                    return item
                }
            }
        })


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
        const ProOder = saveoders.filter(item => item.user_id == idUser.user_id)

        $("#oder-now").addEventListener("click", function() {
            if (info.length == 0) {
                alert("Bạn chưa có địa chỉ")
            } else {
                const today = new Date()
                var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
                nameShop.map(shop => {
                    const connection = Math.random()
                    const oder = {
                        user_id: idUser.user_id,
                        shop_id: shop._id,
                        connection: connection,
                        status: "cho_xac_nhan",
                        nameUser: inforUderSelect.name,
                        phone: inforUderSelect.phone,
                        address: `${inforUderSelect.specific_address},${inforUderSelect.ward},${inforUderSelect.district},${inforUderSelect.city}`,
                        day: date
                    }

                    OderAPI.add(oder)

                    ProOder.map(item => {
                        if (item.shop_id == shop._id) {
                            const oderdetail = {
                                pro_id: item.pro_id,
                                amount: item.amount,
                                commodity_value: item.commodity_value,
                                classification: item.classification,
                                connection: connection,
                                name_pro: item.name_pro,
                                price: item.price,
                                sale: item.sale,
                                cover_image: item.cover_image
                            }
                            OderDetailAPI.add(oderdetail)
                            window.location.href = "/#/user-overview"
                        }
                    })
                })
                ProOder.map(item => {
                    SaveOderAPI.remove(item._id)
                })
            }
        })
    }
}
export default OderNow