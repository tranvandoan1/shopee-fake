import SaveUserAPI from "../../../Api/SaveUser"
import { $ } from "../../../ultis"

const SignOut = {
    async render() {
        const { data: saveuser } = await SaveUserAPI.getAll();
        const idUser = saveuser.find(item => {
            return item
        })
        if (idUser != undefined) {
            $("#signout").addEventListener("click", function() {
                let check = confirm("Bạn có muốn đăng xuất không ?")
                if (check) {
                    saveuser.map(async item => {
                        await SaveUserAPI.remove(item._id)
                    })
                    alert("Đăng xuất thành công");
                    window.location.href = ""
                }
            })
        }

    }
}
export default SignOut