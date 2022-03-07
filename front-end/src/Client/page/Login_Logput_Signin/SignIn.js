import { $ } from "../../../ultis";
import SaveUserAPI from "../../../Api/SaveUser"
const SignIn = {
    render() {
        const Login = $("#linkCss")
        var head = $("head");
        Login.href = './src/CssClient/SignIn.css';
        head.appendChild(Login);

        return /*html*/ `
            <div class="shopee__shop">
                <div class="form-login">
                    <div class="login">
                        <div class="form">
                            <form id="form-add">
                                <h2>Shopee kính chào quý khách</h2>
            
                                <h3>Đăng nhập</h3>
                                <div class="name">
                                    <input type="text" name="email" id="email" placeholder="Email hoặc tên đăng nhập"> <br>
                                    <span class="text-danger">Bạn chưa nhập Email</span>
                                </div>
                                <div class="password">
                                    <input type="password" name="password" id="password" placeholder="Nhập mật khẩu"><br>
                                    <span class="text-danger">Bạn chưa nhập mật khẩu</span>
                                </div>
                                <button type="submit" class="button-login" > Đăng nhập</button><br>
                                <div class="hr">Hoặc</div>
                                <button type="submit"><a href="/#/signup">Tạo tài khoản mới</a> </button><br>
                                <a href="/signout">Quên mật khẩu?</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    async afterRender() {
        const email = $("#email")
        const password = $("#password")
        $("#form-add").addEventListener("submit", async function(e) {
            e.preventDefault()

            try {
                let userSignIn = {
                    email: email.value,
                    password: password.value
                }
                const { data } = await SaveUserAPI.signin(userSignIn);


                const user = {
                    user_id: data.user._id,
                    name: data.user.name,
                    avatar: data.user.avatar,
                    email: data.user.email,
                    role: data.user.role
                }

                // localStorage.setItem("user_id", JSON.stringify(data.user._id))
                // const ko = JSON.parse(localStorage.getItem("user_id"))
                // console.log(ko)
                // console.log(data.user._id)
                await SaveUserAPI.add(user)
                alert("Mời bạn vào trang web")
                window.location.href = ``
            } catch (error) {
                alert(error.response.data.error)
            }
        })
    }
}
export default SignIn