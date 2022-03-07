import UserAPI from "../../../Api/users";
import { $ } from "../../../ultis";
import firebase from "../../../firebase"
const SignUp = {
    render() {
        const Login = $("#linkCss")
        var head = $("head");
        Login.href = './src/CssClient/SignUp.css';
        head.appendChild(Login);

        return /*html*/ `
            <div class="shopee__shop">
                <div class="form-signup">
                    <div class="signup">
                        <form id="form-add">
                            <h3>Đăng ký</h3>
                            <div class="name">
                                <input type="text" id="name" placeholder="Tên đăng ký"><br>
                                <span class="check-name"></span>
                            </div>
                            <div class="email">
                                <input type="email" name="" id="email" placeholder="Email"><br>
                                <span class="check-email"></span>
                            </div>
                            <div class="password">
                                <input type="password" name="" id="password" placeholder="Mật khẩu"><br>
                                <span class="check-password"></span>
                            </div>
                            <div class="confirm-password">
                                <input type="password" name="" id="confirm-password" placeholder="Nhập lại mật khẩu"><br>
                                <span class="check-confirm-password"></span>
                            </div>
                            <div class="avatar">
                                <input type="file" id="avatar" name="" value="">
                            </div>
                            <button type="submit">Đăng ký</button>
                            <a href="/#/signin">Quay lại</a>
                        </form>
                    </div>
                
                </div>
            </div>
        `
    },
    async afterRender() {
        $("#form-add").addEventListener("submit", async function(e) {
            e.preventDefault()
            if ($("#avatar").value == "" || $("#avatar").value == undefined) {
                if ($("#confirm-password").value != $("#password").value) {
                    alert("Mật khẩu không trùng khớp")
                } else {
                    const newUser = {
                        name: $("#name").value,
                        email: $("#email").value,
                        password: $("#password").value,
                        avatar: "https://1.bp.blogspot.com/-A7UYXuVWb_Q/XncdHaYbcOI/AAAAAAAAZhM/hYOevjRkrJEZhcXPnfP42nL3ZMu4PvIhgCLcBGAsYHQ/s1600/Trend-Avatar-Facebook%2B%25281%2529.jpg",
                        role: 4
                    }
                    await UserAPI.add(newUser)
                    alert("Tạo tài khoản thành công")
                    window.location.href = "/#/signin"
                }

            } else {
                if ($("#confirm-password").value != $("#password").value) {
                    alert("Mật khẩu không trùng khớp")
                } else {
                    const proImg = $("#avatar").files[0]
                    let storageRef = firebase.storage().ref(`images/${proImg.name}`);
                    storageRef.put(proImg).then(function() {
                        storageRef.getDownloadURL().then(async(url) => {
                            const newUser = {
                                name: $("#name").value,
                                email: $("#email").value,
                                password: $("#password").value,
                                avatar: url,
                                role: 4
                            }
                            await UserAPI.add(newUser)
                            alert("Tạo tài khoản thành công")
                            window.location.href = "/#/signin"
                        })
                    })

                }

            }
        })
    }
}
export default SignUp