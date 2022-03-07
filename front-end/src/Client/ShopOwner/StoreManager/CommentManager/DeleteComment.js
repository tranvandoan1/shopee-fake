import { $, reRender } from "../../../../ultis";
import { parseRequestUrl } from './../../../../ultis';
import CommentAPI from './../../../../Api/CommentAPI';
import SaveUserAPI from './../../../../Api/SaveUser';
import UserAPI from './../../../../Api/Users';
const DeleteComment = {
        async render() {
            const { id } = parseRequestUrl()
            const { data: comments } = await CommentAPI.getAll()
            const { data: saveuser } = await SaveUserAPI.getAll()
            const { data: users } = await UserAPI.getAll()
            const commentArr = comments.filter(item => item.pro_id == id)
            return /*html*/ `
            ${
                commentArr.map((comment,index)=>{
                    return /*html*/ `
                        <tr>
                            <td>${index+1}</td>
                            ${
                                users.map(user=>{
                                    if(user._id==comment.user_id){
                                        return /*html*/ `
                                            <td>${user.name}</td>
                                        `
                                    }
                                }).join("")
                            }
                            <td class="conten">
                                <p>${comment.comment}</p>
                            </td>
                            <td>${comment.createdAt}</td>
                            <td><i id="remove-comment" data-id="${comment._id}" class="fas fa-trash-alt"></i></td>
                        </tr>
                    `
                }).join("")
            }
        `
    },
    async afterRender() {
        const deleteComments = $("#remove-comment")
        if (deleteComments == "") {
            alert("Không có bình luận ở sản phẩm này ")
            window.location.hash = `/seller-channel/comments`
        } else {
            if (Array.isArray(deleteComments)) {
                deleteComments.forEach(btn => {
                    btn.addEventListener("click", async function() {
                        const id = btn.dataset.id
                        const check = confirm("Bạn có muốn xóa không ?")
                        if (check) {
                            await CommentAPI.remove(id)
                            await reRender(DeleteComment, "#delete-comment")
                        }
                    })
                })
            } else {
                deleteComments.addEventListener("click", async function() {
                    const id = deleteComments.dataset.id
                    const check = confirm("Bạn có muốn xóa không ?")
                    if (check) {
                        await CommentAPI.remove(id)
                        await reRender(DeleteComment, "#delete-comment")
                    }
                })
            }
        }
    }
}
export default DeleteComment