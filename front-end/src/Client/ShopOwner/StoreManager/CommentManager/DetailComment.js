import { $ } from "../../../../ultis";
import DeleteComment from "./DeleteComment";

const DetailComment = {
    async render() {



        const StoreDetailComment = $("#linkCss")
        var head = $("head");
        StoreDetailComment.href = './src/CssClient/StoreDetailComment.css';
        head.appendChild(StoreDetailComment);


        return /*html*/ `   
            <!--xem chi tiết bình luận-->
            <div class="detail-comment">
                <div class="list-detail-comment">
                    <table border="1">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Người bình luận</th>
                                <th>Nội dung bình luận</th>
                                <th>Ngày bình luận</th>
                                <th>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody id="delete-comment">
                            ${await DeleteComment.render()}
                        </tbody>
                    </table>
                </div>
                <div class="back">
                   <a href="/#/seller-channel/comments"> <i class="fas fa-arrow-circle-left"></i> Quay lại</a>
                </div>
            </div>
           
        `
    },
    async afterRender() {
        return /*html*/ `${await DeleteComment.afterRender()}`
    }
}
export default DetailComment