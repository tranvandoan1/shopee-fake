import { $ } from "../../ultis"
import firebase from "firebase"
import SliderAPI from './../../Api/Slider';
import { reRender } from './../../ultis';
import ListSlide from './ListSlide';
const AddSlidePage = {
    async render() {
        return /*html*/ `
            <div class="create-photo">
                <form action="" id="create-photo">
                    <div class="create-header">Thêm ảnh</div>
                    <div class="form">
                        <span>Chọn ảnh</span>
                        <label for="create-image" id="hi">
                                <i class="fas fa-images"></i>
                            </label>

                        <input type="file" id="create-image">
                    </div>
                    <div class="list-photo"></div>

                    <button type="submit">Thêm</button>

                </form>
            </div>
        `
    },
    async afterRender() {
        const fileUpload = $("#create-image");
        const notification = $(".notification")
        const loading = $(".loading")
        const fail = $(".fail")

        fileUpload.addEventListener("change", function(event) {
            if (fileUpload.files[0] == undefined || fileUpload.files[0] == "") {
                $(".list-photo").innerHTML = ``
                $(".list-photo").style.width = "0px"
                $(".list-photo").style.height = "0px"
            } else {
                $(".list-photo").style.width = "450px"
                $(".list-photo").style.height = "200px"
                $(".list-photo").innerHTML = `<img  src="${URL.createObjectURL(event.target.files[0])}" alt="">`

            }
        })

        $("#create-photo").addEventListener("submit", function(e) {
            e.preventDefault()

            const photo = fileUpload.files[0]


            let storageRef = firebase.storage().ref(`images/${photo.name}`)

            $(".create-photo").classList.remove("create-active")
            loading.classList.add("active-loading")

            storageRef.put(photo).then(function() {
                storageRef.getDownloadURL().then(async url => {
                    const Photo = {
                        photo: url,
                        status: "true",
                        ordinal_number: 0
                    }

                    await SliderAPI.add(Photo)

                    // xóa thời gian thêm class để hiện biểu tượng loading sau khi submit/
                    setInterval(function() {
                        loading.classList.remove("active-loading")
                    }, 1500)

                    // thêm class để hiện thành công sau khi ấn submit
                    notification.classList.add("notification-active")

                    // xóa thời gian thực thi khi thêm class để hiện thành công sau khi ấn submit
                    const time = setInterval(function() {
                        notification.classList.remove("notification-active")
                        clearInterval(time)
                    }, 2000)


                    await reRender(ListSlide, "#list-slides")
                    await reRender(AddSlidePage, "#add-photo")

                })
            })
        })
    }
}
export default AddSlidePage