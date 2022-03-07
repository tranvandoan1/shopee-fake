import { $ } from "../../../../ultis"
import OderAPI from '../../../../Api/Oders';
import OderDetailAPI from '../../../../Api/OderDetail';
import SaveUserAPI from '../../../../Api/SaveUser';
import ShopOwnerAPI from '../../../../Api/ShopOwner';
import StatisticalAPI from "../../../../Api/Statistical";
import Frame from './../Frame';
import ShopOwnerCateAPI from "../../../../Api/ShopOwnerCate";
import ProAPI from './../../../../Api/Products';
import CommentAPI from './../../../../Api/CommentAPI';

const StatisticalManager = {
    async render() {
        const { data: orders } = await OderAPI.getAll()
        const { data: saveuser } = await SaveUserAPI.getAll()
        const { data: shopowner } = await ShopOwnerAPI.getAll()
        const { data: shopownercate } = await ShopOwnerCateAPI.getAll()
        const { data: products } = await ProAPI.getAll()
        const { data: comments } = await CommentAPI.getAll()

        const today = new Date()
        const dateDay = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();


        const idUser = saveuser.find(item => item) //lấy ra id user đang đăng nhập
        console.log(idUser.user_id)
        const shopOwner = shopowner.find(item => item.user_id == idUser.user_id) //lấy ra được id shop thuộc user đang đăng nhập
        const cateOfShop = shopownercate.filter(item => item.shop_id == shopOwner._id) //lấy ra được các danh mục của shop
        const proOfShop = products.filter(item => item.shop_id == shopOwner._id) //lấy ra được các sản phẩm của shop
        const orderToDay = orders.filter(item => item.shop_id == shopOwner._id && item.day == dateDay) //lấy ra được các đơn hàng hôm nay của shop

        // tìm bình luận của shop
        const commentOfShop = []
        comments.filter(item => {
            proOfShop.map(pro => {
                if (item.pro_id == pro._id) {
                    commentOfShop.push(item)
                }
            })
        })

        function checkCart() {

        }



        return /*html*/ `
            ${await Frame.render()}
                    <div class="store-statistical">
                        <div class="store-statistical-header">
                            <h3><i class="fas fa-chart-bar"></i> Thống kể shop</h3>
                        </div>
                        <div class="store-statistical-list">
                            <div class="total">
                                <div class="total-categoris"><i class="fas fa-calendar-alt"></i> Danh mục của shop : <span>${cateOfShop.length}</span><a href="/#/seller-channel/categoris">Xem</a></div>
                                <div class="total-products"><i class="fab fa-product-hunt"></i> Sản phẩm của shop : <span>${proOfShop.length}</span><a href="/#/seller-channel/products">Xem</a></div>
                                <div class="total-orders_today"><i class="fas fa-shopping-cart"></i> Đơn hàng hôm nay : <span>${orderToDay.length}</span><a href="/#/seller-channel/carts">Xem</a></div>
                                <div class="total-comment"><i class="far fa-comments"></i> Bình luận sản phẩm : <span>${commentOfShop.length}</span><a href="/#/seller-channel/comments">Xem</a></div>
                            </div>

                            <div class="store-statistical-price">
                                <h3>Thống kê thu nhập của shop theo ngày</h3>
                                <div class="column">
                                    <ul>
                                        <li>Thứ 2 <span></span>
                                            <div class="price-view"></div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="row">
                                    <ul>
                                        <li>0 <span></span></li>
                                        <li>500.000 <span></span></li>
                                        <li>1.000.000 <span></span></li>
                                        <li>3.000.000 <span></span></li>
                                        <li>5.000.000 <span></span></li>
                                        <li>8.000.000 <span></span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </ul>
                </div>
                </div>
            </div>
        </div> 
        `
    },
    async afterRender() {


        const { data: orders } = await OderAPI.getAll()
        const { data: orderdetails } = await OderDetailAPI.getAll()
        const { data: saveuser } = await SaveUserAPI.getAll()
        const { data: shopowner } = await ShopOwnerAPI.getAll()
        const { data: statisticals } = await StatisticalAPI.getAll()

        const idUser = saveuser.find(item => item) //lấy ra id user đang đăng nhập

        const shop = shopowner.find(item => item.user_id == idUser.user_id) //lấy ra được shop của user đang đăng nhập
        console.log(shop)

        const today = new Date()
        const dateDay = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

        //lấy ra đơn hàng ngày hôm nay
        const oder = orders.filter(item => {
            if (item.shop_id == shop._id) {
                if (item.status == "da_nhan") {
                    if (item.day == dateDay)
                        return item
                }
            }
        })

        //lấy ra chi tiết đơn hàng ngày hôm nay
        const orderDetailArr = []
        oder.map(oder => {
            orderdetails.filter(item => {
                if (oder.connection == item.connection) {
                    orderDetailArr.push(item)
                }
            })
        })

        const sumPrice = orderDetailArr.map(item => Math.ceil(item.price * ((100 - item.sale) / 100)) * item.amount)

        let sum = 0;
        for (let i = 0; i < sumPrice.length; i++) {
            sum += parseInt(sumPrice[i]);
        }



        var date = new Date();
        // Lấy số thứ tự của ngày hiện tại
        var current_day = date.getDay();

        // Biến lưu tên của thứ
        var day_name = '';

        const statistical = statisticals.find(item => item.date == dateDay)
        console.log(statistical)

        // Lấy tên thứ của ngày hiện tại
        // switch (current_day) {
        //     case 0:
        //         day_name = "Chủ nhật";
        //         $(".price-view").innerHTML = sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ"
        //         if (statistical == undefined) {
        //             const newStatistical = {
        //                 price: sum,
        //                 shop_id: shop._id,
        //                 date: dateDay,
        //                 day: day_name
        //             }
        //             await StatisticalAPI.add(newStatistical)
        //         } else if (statistical) {

        //             let formData = new FormData()
        //             formData.append("price", sum)
        //             await StatisticalAPI.upload(statistical._id, formData)
        //         }
        //         break;
        //     case 1:
        //         day_name = "Thứ hai";
        //         $(".price-view").innerHTML = sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ"
        //         if (statistical == undefined) {
        //             const newStatistical = {
        //                 price: sum,
        //                 shop_id: shop._id,
        //                 date: dateDay,
        //                 day: day_name
        //             }
        //             await StatisticalAPI.add(newStatistical)
        //         } else if (statistical) {

        //             let formData = new FormData()
        //             formData.append("price", sum)
        //             await StatisticalAPI.upload(statistical._id, formData)
        //         }
        //         break;
        //     case 2:
        //         day_name = "Thứ ba";
        //         $(".price-view").innerHTML = sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ"
        //         if (statistical == undefined) {
        //             const newStatistical = {
        //                 price: sum,
        //                 shop_id: shop._id,
        //                 date: dateDay,
        //                 day: day_name
        //             }
        //             await StatisticalAPI.add(newStatistical)
        //         } else if (statistical) {

        //             let formData = new FormData()
        //             formData.append("price", sum)
        //             await StatisticalAPI.upload(statistical._id, formData)
        //         }
        //         break;
        //     case 3:
        //         day_name = "Thứ tư";
        //         $(".price-view").innerHTML = sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ"
        //         if (statistical == undefined) {
        //             const newStatistical = {
        //                 price: sum,
        //                 shop_id: shop._id,
        //                 date: dateDay,
        //                 day: day_name
        //             }
        //             await StatisticalAPI.add(newStatistical)
        //         } else if (statistical) {

        //             let formData = new FormData()
        //             formData.append("price", sum)
        //             await StatisticalAPI.upload(statistical._id, formData)
        //         }
        //         break;
        //     case 4:
        //         day_name = "Thứ năm";
        //         $(".price-view").innerHTML = sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ"
        //         if (statistical == undefined) {
        //             const newStatistical = {
        //                 price: sum,
        //                 shop_id: shop._id,
        //                 date: dateDay,
        //                 day: day_name
        //             }
        //             await StatisticalAPI.add(newStatistical)
        //         } else if (statistical) {

        //             let formData = new FormData()
        //             formData.append("price", sum)
        //             await StatisticalAPI.upload(statistical._id, formData)
        //         }
        //         break;
        //     case 5:
        //         day_name = "Thứ sáu";
        //         $(".price-view").innerHTML = sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ"
        //         if (statistical == undefined) {
        //             const newStatistical = {
        //                 price: sum,
        //                 shop_id: shop._id,
        //                 date: dateDay,
        //                 day: day_name
        //             }
        //             await StatisticalAPI.add(newStatistical)
        //         } else if (statistical) {

        //             let formData = new FormData()
        //             formData.append("price", sum)
        //             await StatisticalAPI.upload(statistical._id, formData)
        //         }
        //         break;
        //     case 6:
        //         day_name = "Thứ bảy";
        //         $(".price-view").innerHTML = sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ"
        //         if (statistical == undefined) {
        //             const newStatistical = {
        //                 price: sum,
        //                 shop_id: shop._id,
        //                 date: dateDay,
        //                 day: day_name
        //             }
        //             await StatisticalAPI.add(newStatistical)
        //         } else if (statistical) {

        //             let formData = new FormData()
        //             formData.append("price", sum)
        //             await StatisticalAPI.upload(statistical._id, formData)
        //         }
        //         break;

        // }


    }

}
export default StatisticalManager