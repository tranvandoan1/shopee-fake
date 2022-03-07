import OderAPI from "../../../../Api/Oders"
import SaveUserAPI from '../../../../Api/SaveUser';
import ShopOwnerAPI from '../../../../Api/ShopOwner';
import OderDetailAPI from '../../../../Api/OderDetail';
import { $ } from "../../../../ultis";
import { reRender } from '../../../../ultis';
const OrderList = {
        async render() {
            console.log("1")
            const { data: oders } = await OderAPI.getAll()
            const { data: orderdetails } = await OderDetailAPI.getAll()
            const { data: saveuser } = await SaveUserAPI.getAll()
            const { data: shopowner } = await ShopOwnerAPI.getAll()
            oders.reverse()

            const idUser = saveuser.find(item => item) //lấy ra id user đang đăng nhập

            const shop = shopowner.find(item => item.user_id == idUser.user_id)

            const oder = oders.filter(item => item.shop_id == shop._id)

            const oderDetailList = []

            orderdetails.map(item => {
                oder.map(oderItem => {
                    if (item.connection == oderItem.connection)
                        oderDetailList.push(item)
                })
            })



            return /*html*/ `
        ${oder.map((item, index) => {

            // tìm số lượng sp order
            const oderdetal = orderdetails.filter(order => order.connection == item.connection)

            // lọc tiền
            const orderPrice = oderdetal.map(Oprice => {
                if (Oprice.sale == "") {
                    return `${+Oprice.price * +Oprice.amount}`

                } else {
                    return `${Math.ceil(Oprice.price * ((100 - Oprice.sale) / 100)) * Oprice.amount}`
                }
            })
            function Sum() {
                let sum = 0;
                for (let i = 0; i < orderPrice.length; i++) {
                    sum += parseInt(orderPrice[i]);
                }
                return sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            }

            function checkStatus() {
                if (item.status == "cho_xac_nhan") {
                    return /*html*/`<span class="animotion">Chờ xác nhận</span>`
                } else if (item.status == "cho_lay_hang") {
                    return /*html*/`<span class="animotion">Chờ lấy hàng</span>`
                } else if (item.status == "dang_giao") {
                    return /*html*/`<span class="animotion">Đang giao</span>`
                } else if (item.status == "da_nhan") {
                    return /*html*/`<span class="" style="color: rgb(108, 148, 71); font-weight: 600" >Đã nhận</span>`
                } else if (item.status == "da_huy") {
                    return /*html*/`<span class="" style="color: red; font-weight: 600">Đã hủy</span>`
                }
            }
            function StatusOption() {
                if (item.status == "cho_xac_nhan") {
                    return /*html*/`
                            <option value="cho_xac_nhan" selected>Chờ xác nhận</option>
                            <option value="cho_lay_hang">Chờ lấy hàng</option>
                            <option value="dang_giao">Đang giao</option>
                            <option value="da_nhan">Đã nhận</option>
                            <option value="da_huy">Đã hủy</option>
                            `
                } else if (item.status == "cho_lay_hang") {
                    return /*html*/`
                        <option value="cho_xac_nhan">Chờ xác nhận</option>
                        <option value="cho_lay_hang" selected>Chờ lấy hàng</option>
                        <option value="dang_giao">Đang giao</option>
                        <option value="da_nhan">Đã nhận</option>
                        <option value="da_huy">Đã hủy</option>
                        `
                } else if (item.status == "dang_giao") {
                    return /*html*/`
                        <option value="cho_xac_nhan">Chờ xác nhận</option>
                        <option value="cho_lay_hang">Chờ lấy hàng</option>
                        <option value="dang_giao" selected>Đang giao</option>
                        <option value="da_nhan">Đã nhận</option>
                        <option value="da_huy">Đã hủy</option>
                        `
                } else if (item.status == "da_nhan") {
                    return /*html*/`
                        <option value="cho_xac_nhan">Chờ xác nhận</option>
                        <option value="cho_lay_hang">Chờ lấy hàng</option>
                        <option value="dang_giao">Đang giao</option>
                        <option value="da_nhan" selected>Đã nhận</option>
                        <option value="da_huy">Đã hủy</option>
                        `
                } else if (item.status == "da_huy") {
                    return /*html*/`
                        <option value="cho_xac_nhan">Chờ xác nhận</option>
                        <option value="cho_lay_hang">Chờ lấy hàng</option>
                        <option value="dang_giao">Đang giao</option>
                        <option value="da_nhan">Đã nhận</option>
                        <option value="da_huy" selected>Đã hủy</option>
                        `
                }
            }
            return /*html*/ `
                <tr>
                    <td>${index + 1}</td>
                    <td>${item.nameUser}</td>
                    <td>${oderdetal.length}</td>
                    <td>${Sum()}đ</td>
                    <td>${checkStatus()}</td>
                    <td>
                        <i id="orderdetail" data-id=${item.connection} class="far fa-eye"></i>
                            <div class="list-oderdetail">
                                <div class="order-detail">
                                    <h2>Thông tin khách hàng</h2>
                                    <div class="info-user">
                                        <div class="info">
                                            <div class="info-name">Họ và Tên : <span>${item.nameUser}</span></div>
                                            <div class="info-phone">Số điện thoại : <span>${item.phone}</span></div>
                                            <div class="info-address">Địa chỉ : <span>${item.address}</span></div>
                                            <div class="info-time">Ngày đặt hàng : <span>${item.createdAt}</span></div>
                                        </div>
                                        <div class="status-order">
                                            <div class="status">Trạng thái đơn hàng : <span>${checkStatus()}</span></div>
                                            <div class="update-status">
                                                <select name="" id="edit-status">
                                                    ${StatusOption()}
                                                </select>
                                                <button type="submit" >Xác nhận</button>
                                            </div>
                                        </div>
                                    </div>
    
                                    <h2>Thông tin sản phẩm</h2>
                                    <table border="1">
                                        <thead>
                                            <tr>
                                                <th>STT</th>
                                                <th>Tên sản phẩm</th>
                                                <th>Ảnh sản phẩm</th>
                                                <th>Giá</th>
                                                <th>Giảm giá</th>
                                                <th>Số lượng mua</th>
                                                <th>Loại hàng</th>
                                                <th>Kiểu loại hàng</th>
                                                <th>Thành tiền</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        ${oderdetal.map((orderdetail, index) => {
                                            if (orderdetail.connection == item.connection) {
                                                return/*html*/ `
                                                    <tr>
                                                        <td>${index + 1}</td>
                                                        <td>${orderdetail.name_pro}</td>
                                                        <td><img src="${orderdetail.cover_image}" alt=""></td>
                                                        <td>${orderdetail.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ</td>
                                                        <td>${orderdetail.sale}</td>
                                                        <td>${orderdetail.amount}</td>
                                                        <td>${orderdetail.classification}</td>
                                                        <td>${orderdetail.commodity_value}</td>
                                                        <td>${(Math.ceil(orderdetail.price * ((100 - orderdetail.sale) / 100)) * orderdetail.amount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ</td>
                                                    </tr>
                                                    `
                                            }
                                        }).join("")
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        
                        <i id="delete-oder" data-id=${item.connection} class="far fa-trash-alt"></i>
                    </td>
                </tr>
                
                `
        }).join("")
            }
            
            
        `
    },
    async afterRender() {
        const { data: oders } = await OderAPI.getAll()
        const { data: oderdetails } = await OderDetailAPI.getAll()
        if (Array.isArray($("#orderdetail"))) {
            $("#orderdetail").forEach((btn, index) => {
                const list_oderdetail = $(".list-oderdetail")[index]
                const edit_status = $("#edit-status")[index]
                const update_status = $(".update-status>button")[index]
                btn.addEventListener("click", function () {

                    for (let i = 0; i < $(".list-oderdetail").length; i++) {
                        $(".list-oderdetail")[i].classList.remove("active-order-detail")
                    }

                    list_oderdetail.classList.add("active-order-detail")

                    window.addEventListener("click", function (e) {
                        if (e.target == list_oderdetail) {
                            list_oderdetail.classList.remove("active-order-detail")
                        }
                    })

                    const connection = btn.dataset.id
                    const oder = oders.find(item => item.connection == connection)
                    update_status.addEventListener("click", async function () {

                        let formData = new FormData()
                        formData.append("status", edit_status.value)
                        await OderAPI.upload(oder._id, formData)
                        await reRender(OrderList, "#list-oder")

                    })
                })
            });
        } else {
            $("#orderdetail").addEventListener("click", function () {

                for (let i = 0; i < $(".list-oderdetail").length; i++) {
                    $(".list-oderdetail")[i].classList.remove("active-order-detail")
                }

                $(".list-oderdetail").classList.add("active-order-detail")

                window.addEventListener("click", function (e) {
                    if (e.target == $(".list-oderdetail")) {
                        $(".list-oderdetail").classList.remove("active-order-detail")
                    }
                })

                const connection = $("#orderdetail").dataset.id
                const oder = oders.find(item => item.connection == connection)
                $(".update-status>button").addEventListener("click", async function () {

                    let formData = new FormData()
                    formData.append("status", $("#edit-status").value)
                    await OderAPI.upload(oder._id, formData)
                    await reRender(OrderList, "#list-oder")

                })
            })
        }


        if (Array.isArray($("#delete-oder"))) {
            $("#delete-oder").forEach(btn => {
                btn.addEventListener("click", async function () {
                    const id = btn.dataset.id
                    const check = confirm("Bạn có muốn xóa không ?")
                    if (check) {
                        const oder = oders.find(item => item.connection == id)
                        await OderAPI.remove(oder._id)
                        oderdetails.map(async item => {
                            if (item.connection == oder.connection) {
                                await OderDetailAPI.remove(item._id)
                            }
                        })
                        await reRender(OrderList, "#list-oder")

                    }
                })
            })
        } else {
            $("#delete-oder").addEventListener("click", async function () {
                const id = $("#delete-oder").dataset.id
                const check = confirm("Bạn có muốn xóa không ?")
                if (check) {
                    const oder = oders.find(item => item.connection == id)
                    await OderAPI.remove(oder._id)
                    oderdetails.map(async item => {
                        if (item.connection == oder.connection) {
                            await OderDetailAPI.remove(item._id)
                        }
                    })
                    await reRender(OrderList, "#list-oder")

                }
            })
        }


    }
}
export default OrderList