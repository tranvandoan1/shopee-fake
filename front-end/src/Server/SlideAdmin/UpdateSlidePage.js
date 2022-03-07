import { $ } from "../../ultis"
import SliderAPI from './../../Api/Slider';
import firebase from "firebase";
import { reRender } from './../../ultis';
import ListSlide from './ListSlide';
const UpdateSlideAdmin = {
    async render() {
        const update_photo = $(".update-photo")
        const buttonUpdate = $(".fa-tools")

        const fileUpload = $("#update-image");

        const notification = $(".notification")
        const loading = $(".loading")

        if (Array.isArray(buttonUpdate)) {
            buttonUpdate.forEach((btn, index) => {


                btn.addEventListener("click", async function() {
                    const id = btn.dataset.id
                    const update = update_photo[index]
                    const buttonUpdate = $("#update")[index]

                    fileUpload[index].addEventListener("change", function(event) {
                        $(".update-photoo")[index].innerHTML = `<img  src="${URL.createObjectURL(event.target.files[0])}" alt="">`
                    })
                    window.addEventListener("click", function(e) {
                        if (e.target == update) {
                            update.classList.remove("update-active")
                        }
                    })
                    update.classList.add("update-active")

                    buttonUpdate.addEventListener("submit", function(e) {
                        e.preventDefault()
                        update.classList.remove("update-active")
                        loading.classList.add("active-loading")

                        const photo = fileUpload[index].files[0]

                        let storageRef = firebase.storage().ref(`images/${photo.name}`)
                        storageRef.put(photo).then(function() {
                            storageRef.getDownloadURL().then(async url => {

                                let formData = new FormData()
                                formData.append("photo", url)
                                await SliderAPI.upload(id, formData)

                                // thêm class để hiện thành công sau khi ấn submit
                                notification.classList.add("notification-active")


                                // xóa thời gian thêm class để hiện biểu tượng loading sau khi submit/
                                setInterval(function() {
                                    loading.classList.remove("active-loading")
                                }, 1500)

                                // xóa thời gian thực thi khi thêm class để hiện thành công sau khi ấn submit
                                const time = setInterval(function() {
                                    notification.classList.remove("notification-active")
                                    clearInterval(time)
                                }, 2000)

                                await reRender(ListSlide, "#list-slides")

                            })
                        })
                    })

                })
            })
        } else {
            fileUpload.addEventListener("change", function(event) {
                $(".update-photoo")[index].innerHTML = `<img  src="${URL.createObjectURL(event.target.files[0])}" alt="">`
            })
            window.addEventListener("click", function(e) {
                if (e.target == update_photo) {
                    update_photo.classList.remove("update-active")

                }
            })

            buttonUpdate.addEventListener("click", async function() {
                update_photo.classList.add("update-active")
                const id = buttonUpdate.dataset.id
                const photo = fileUpload.files[0]
                let storageRef = firebase.storage().ref(`images/${photo.name}`)

                $("#update").addEventListener("submit", function(e) {
                    e.preventDefault()
                    update_photo.classList.remove("update-active")
                    loading.classList.add("active-loading")

                    storageRef.put(photo).then(function() {
                        storageRef.getDownloadURL().then(async url => {

                            let formData = new FormData()
                            formData.append("photo", url)
                            await SliderAPI.upload(id, formData)

                            // xóa thời gian thêm class để hiện biểu tượng loading sau khi submit/
                            setInterval(function() {
                                loading.classList.remove("active-loading")
                            }, 1500)


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

                        })
                    })
                })

            })
        }

    }
}
export default UpdateSlideAdmin