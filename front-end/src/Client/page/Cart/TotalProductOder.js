import SaveOderAPI from "../../../Api/SaveOder";
import SaveUserAPI from "../../../Api/SaveUser";
import { $ } from "../../../ultis";

const TotalProductOder = {
    async render() {


        const { data: saveoders } = await SaveOderAPI.getAll();
        const { data: saveuser } = await SaveUserAPI.getAll();

        const idUser = saveuser.find(item => {
            return item
        })

        const ProOder = saveoders.filter(item => item.user_id == idUser.user_id)

        let TotalPrice = ProOder.map(item => {
            return (Math.ceil(item.price * ((100 - item.sale) / 100)) * item.amount)
        })

        let sumPrice = 0
        for (let i = 0; i < TotalPrice.length; i++) {
            sumPrice += +TotalPrice[i];
        }

        return /*html*/ `
            <div class="pr-total">
                <div class="total">
                    <span>tổng thanh toán</span> <span>(${ProOder.length} sản phẩm)</span> :
                    <span> ${sumPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}₫</span>
                </div>
                <div class="buying"><button>mua ngay</button></div>
            </div>
        `
    },
    afterRender() {
        $(".buying").addEventListener("click", function() {
            window.location.href = "/#/checkcart"
        })
    }

}
export default TotalProductOder