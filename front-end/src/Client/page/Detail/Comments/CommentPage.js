import CommentAPI from "../../../../Api/CommentAPI"
import {
    $
} from "../../../../ultis";
import SaveUserAPI from './../../../../Api/SaveUser';
import {
    parseRequestUrl,
    reRender
} from './../../../../ultis';
import firebase from './../../../../firebase/index';
import UserAPI from './../../../../Api/Users';

const CommentPage = {
        async render() {
            const {
                id
            } = parseRequestUrl()
            const {
                data: comments
            } = await CommentAPI.getAll()
            const {
                data: saveuser
            } = await SaveUserAPI.getAll()
            const {
                data: users
            } = await UserAPI.getAll()

            comments.reverse()
            const idUser = saveuser.find(item => item)


            function checkUser() {
                if (idUser) {
                    return /*html*/ `
                        <div class="comments-products">
                            <div class="comments-p">
                                <div class="nameUaser-comments">
                                    <h5>Xin chào <span>@${idUser.name}</span> , mời bạn đánh giá sản phẩm tại đây !</h5>
                                </div>
                                <div class="comment">
                                    <div class="avatar-user">
                                        <div class="avatar">
                                            <img src="${idUser.avatar}" alt="">
                                        </div>
                                    </div>
                                    <div class="write_comment">
                                        <div class="write-c">
                                            <textarea rows="4" id="inputComment"  placeholder="Nhập bình luận"></textarea>
                                            <div class="list-photo">
                                                
                                            </div>
                                            <button id="submit-comment"><i class="fas fa-paper-plane"></i>bìnhluận</button>
                                        </div>
                                    </div>
                                    <div class="comment-img">
                                        <input type="file" placeholder="" id="photo">
                                        <label for="photo"><i class="fas fa-camera"></i></label>
                                    </div>
                                </div>
                            </div>
                            ${
                                comments.map(item=>{
                                    if(item.pro_id==id){
                                        function checkPhoto(){
                                            if(item.photo){
                                                return /*html*/ `
                                                    <div class="user-comment">
                                                        <p>${item.comment}</p>
                                                        <div class="comment-video-img">
                                                            <div class="comment-image">
                                                                <img src="${item.photo}" class="myImage" alt="">
                                                            </div>
                                                        </div>
                                                        <div class="view-image"></div>
                                                        <div class="time-comment">
                                                            <span>${item.createdAt}</span>
                                                        </div>
                                                    </div>
                                                `
                                            }else{
                                                return /*html*/ `
                                                <div class="user-comment">
                                                    <p>${item.comment}</p>
                                                    <div class="time-comment">
                                                        <span>${item.createdAt}</span>
                                                    </div>
                                                </div>
                                            `
                                            }
                                        }
    
                                    return /*html*/ `
                                    <div class="list-comment">
                                        <div class="comments">
                                        ${
                                            users.map(user=>{
                                                if(item.user_id==user._id){
                                                    return /*html*/ `
                                                        <div class="c-avatar-user">
                                                            <div class="avatar-userr">
                                                                <img src="${user.avatar}" alt="">
                                                            </div>
                                                            <span>${user.name}</span>
                                                        </div>
                                                    `
                                                }
                                            }).join("")
                                        }
                                            ${checkPhoto()}
                                        </div>
                                        <!--check nếu sp có bình luận của user đnag đăng nhập thì hiện icon sửa và xóa-->
                                        ${
                                            saveuser.map(us=>{
                                                if(us.user_id==item.user_id){
                                                    return /*html*/ `
                                                        <div class="manipulation">
                                                            <div class="list-manipulation">
                                                                <a id="update-comment" data-id="${item._id}">
                                                                    <i class="far fa-edit "></i>
                                                                        
                                                                    </a>
                                                                <a data-id="${item._id}" id="delete-comment">
                                                                    <i class="far fa-trash-alt "></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    `
                                                }
                                            }).join("")
                                        }
                                    </div>
                                    <!--check nếu sp có bình luận của user đnag đăng nhập thì hiện icon sửa -->
    
                                    ${
                                        saveuser.map(us=>{
                                            if(us.user_id==item.user_id){
                                                return /*html*/ `
                                                    <!-- sửa comment -->
                                                    <div class="update-comment">
                                                        <h2>Sửa bình luận</h2>
                                                        <div class="form-update-comment">
                                                            <div class="update-avatar-user">
                                                                <div class="update-avatar">
                                                                    <img src="${us.avatar}" alt="">
                                                                </div>
                                                            </div>
                                                            <div class="update-write_comment">
                                                                <textarea rows="4"  id="update-inputComment" placeholder="Nhập bình luận">${item.comment}</textarea>
                                                                <div class="update-list-photo">
                                                                    <img src="${item.photo}" alt="">
                                                                </div>
                                                                <button id="submit-back"><i class="fas fa-arrow-circle-left"></i></i>Hủy</button>
                                                                <button id="submit-update"><i class="fas fa-paper-plane"></i>Sửa</button>
                                                            </div>
                                                            <div class="update-comment-img">
                                                                <input type="file" placeholder="" id="update-photo">
                                                                <label for="update-photo"><i class="fas fa-camera"></i></label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                `
                                            }
                                        }).join("")
                                    }
                                    
                                    `
                                    }
                           
                                }).join("")
                            }
                            
                            <div class="pagings-comment">
                                <button><i class="fas fa-angle-left"></i></button>
                                <ul>
                                    <li>1</li>
                                    <li>2</li>
                                    <li>3</li>
                                </ul>
                                <button><i class="fas fa-angle-right"></i></button>
                            </div>
                        </div>
                    `
                }else{
                    return /*html*/ `
                        <div class="comments-products">
                            <div class="comments-p">
                                <div class="nameUaser-comments">
                                    <h5 class="notification">Bạn cần đăng nhập để được bình luận !</h5>
                                </div>
                            </div>
                            ${
                                comments.map(item=>{
                                    if(item.pro_id==id){
                                        function checkPhoto(){
                                            if(item.photo){
                                                return /*html*/ `
                                                    <div class="user-comment">
                                                        <p>${item.comment}</p>
                                                        <div class="comment-video-img">
                                                            <div class="comment-image">
                                                                <img src="${item.photo}" class="myImage" alt="">
                                                            </div>
                                                        </div>
                                                        <div class="view-image"></div>
                                                        <div class="time-comment">
                                                            <span>${item.createdAt}</span>
                                                        </div>
                                                    </div>
                                                `
                                            }else{
                                                return /*html*/ `
                                                <div class="user-comment">
                                                    <p>${item.comment}</p>
                                                    <div class="time-comment">
                                                        <span>${item.createdAt}</span>
                                                    </div>
                                                </div>
                                            `
                                            }
                                        }
    
                                    return /*html*/ `
                                    <div class="list-comment">
                                        <div class="comments">
                                        ${
                                            users.map(user=>{
                                                if(item.user_id==user._id){
                                                    return /*html*/ `
                                                        <div class="c-avatar-user">
                                                            <div class="avatar-userr">
                                                                <img src="${user.avatar}" alt="">
                                                            </div>
                                                            <span>${user.name}</span>
                                                        </div>
                                                    `
                                                }
                                            }).join("")
                                        }
                                            ${checkPhoto()}
                                        </div>
                                    </div>
                                    `
                                    }
                             
                                }).join("")
                            }
                            
                            <div class="pagings-comment">
                                <button><i class="fas fa-angle-left"></i></button>
                                <ul>
                                    <li>1</li>
                                    <li>2</li>
                                    <li>3</li>
                                </ul>
                                <button><i class="fas fa-angle-right"></i></button>
                            </div>
                        </div>
                    `
                }
            }

            return /*html*/ `
                <!-- đánh giá sản phẩm -->
                ${checkUser()}
            `


    },
    async afterRender() {
        const { id } = parseRequestUrl()
        const { data: saveuser } = await SaveUserAPI.getAll()
        const idUser = saveuser.find(item => {
            return item
        })

        if(idUser){
            const fileUpload = $("#photo");
            fileUpload.addEventListener("change", function(event) {
                if (fileUpload.files[0] == undefined || fileUpload.files[0] == "") {
                    $(".list-photo").innerHTML = ``
                    $(".list-photo").style.width = "0px"
                } else {
                    $(".list-photo").style.width = "250px"
                    $(".list-photo").innerHTML = `<img width="250px" src="${URL.createObjectURL(event.target.files[0])}" alt="">`
                }
            })
    
            $("#submit-comment").addEventListener("click",async function() {
                const photo = fileUpload.files[0];
               if(photo){
                   if($("#inputComment").value==""){
                        alert("Bạn không thể để rỗng !")
                   }else{
                        let storageRef = firebase.storage().ref(`images/${photo.name}`)
                        storageRef.put(photo).then(function() {
                            storageRef.getDownloadURL().then(async url => {
                                const comment = {
                                    comment: $("#inputComment").value,
                                    pro_id: id,
                                    user_id: idUser.user_id,
                                    photo: url
                                }
                                await CommentAPI.add(comment)
                                await reRender(CommentPage, "#list-comment")
                            })
                        })
                   }
       
               }else{
                    if($("#inputComment").value==""){
                        alert("Bạn không thể để rỗng !")
                    }else{
                        const comment = {
                            comment: $("#inputComment").value,
                            pro_id: id,
                            user_id: idUser.user_id,
                            photo: ""
                        }
                        await CommentAPI.add(comment)
                        await reRender(CommentPage, "#list-comment")
                    }
               }
            })
    
            // xóa comment
            if(Array.isArray( $("#delete-comment"))){
                $("#delete-comment").forEach(btn => {
                    btn.addEventListener("click",async function(){
                        const id=btn.dataset.id
                        const check=confirm("Bạn có muốn xóa không?")
                        if(check){
                            await  CommentAPI.remove(id)
                            await reRender(CommentPage, "#list-comment")
                    }                   
                    })
                });
            }else{
                $("#delete-comment").addEventListener("click",async function(){
                    const id=$("#delete-comment").dataset.id
                    const check=confirm("Bạn có muốn xóa không?")
                    if(check){
                        await CommentAPI.remove(id)
                        await reRender(CommentPage, "#list-comment")
                    }                   
                })
            }

            // sửa comment
            if(Array.isArray($("#update-comment"))){
                $("#update-comment").forEach((btn,index)=>{
                    btn.addEventListener("click",function(){
                        const updateComment=$(".update-comment")[index]
                        const comment=$(".list-comment")[index]

                        for (let i = 0; i < $(".update-comment").length; i++) {
                            $(".update-comment")[i].style.display="none"
                            $(".list-comment")[i].style.display="flex"
                        }
                        updateComment.style.display="block"
                        comment.style.display="none"

                        // ấn hủy sửa
                        $("#submit-back")[index].addEventListener("click", function(){
                            updateComment.style.display="none"
                            comment.style.display="flex"
                            reRender(CommentPage, "#list-comment")

                        })
                        const fileUpload = $("#update-photo")[index];
                        fileUpload.addEventListener("change", function(event) {
                            if (fileUpload.files[0] == undefined || fileUpload.files[0] == "") {
                                $(".update-list-photo")[index].innerHTML = ``
                                $(".update-list-photo")[index].style.width = "0px"
                            } else {
                                $(".update-list-photo")[index].style.width = "250px"
                                $(".update-list-photo")[index].innerHTML = `<img width="250px" src="${URL.createObjectURL(event.target.files[0])}" alt="">`
                            }
                        })
                        
                        const id=btn.dataset.id

                        // sửa
                        $("#submit-update")[index].addEventListener("click",async function(){
                             const photo = $("#update-photo")[index].files[0];

                            if(photo){
                                let storageRef = firebase.storage().ref(`images/${photo.name}`)
                                storageRef.put(photo).then(function() {
                                    storageRef.getDownloadURL().then(async url => {
                                        let formData=new FormData()
                                        formData.append("comment",$("#update-inputComment")[index].value)
                                        formData.append("photo",url)
            
                                        await CommentAPI.upload(id,formData)
                                        await reRender(CommentPage, "#list-comment")
                                    })
                                })
                             
                            }else{
                                let formData=new FormData()
                                formData.append("comment",$("#update-inputComment")[index].value)

                                await CommentAPI.upload(id,formData)
                                await reRender(CommentPage, "#list-comment")
                            }
                        })

                    })
                })
            }else{
                $("#update-comment").addEventListener("click",function(e){
                    console.log(e)
                        $(".update-comment").style.display="block"
                        $(".list-comment").style.display="none"

                        // ấn hủy sửa
                        $("#submit-back")[index].addEventListener("click", function(){
                            $(".update-comment").style.display="none"
                            $(".list-comment").style.display="flex"
                            reRender(CommentPage, "#list-comment")
                        })
                 

                })
            }

            // xử lý hiện video ở bình luận
            const myImage = $(".comment-image>.myImage");
            const view_image = $(".view-image");


            if (Array.isArray(myImage)) {
                myImage.forEach((btn, index) => {
                    btn.addEventListener("click", function(e) {
                        const viewImgae = view_image[index];
                        if (viewImgae.innerHTML) {
                            for (let i = 0; i < view_image.length; i++) {
                                view_image[i].innerHTML = ``;
                                view_image[i].style.width = "0px";
                                view_image[i].style.height = "0px";
                            }
                        } else {
                            for (let i = 0; i < view_image.length; i++) {
                                view_image[i].innerHTML = ``;
                                view_image[i].style.width = "0px";
                                view_image[i].style.height = "0px";
                            }
                            viewImgae.innerHTML = `<img src="${btn.src}" class="ds" alt="">`;
                            viewImgae.style.width = "350px";
                            viewImgae.style.height = "200px";
                        }

                    });
                });
            } else {
                myImage.addEventListener("click", function(e) {
                    if (view_image.innerHTML) {
                        view_image.innerHTML = ``;
                        view_image.style.width = "0px";
                        view_image.style.height = "0px";
                    } else {
                        view_image.innerHTML = `<img src="${myImage.src}" class="ds" alt="">`;
                        view_image.style.width = "350px";
                        view_image.style.height = "200px";
                    }

                });
            }

        }
    }
}
export default CommentPage