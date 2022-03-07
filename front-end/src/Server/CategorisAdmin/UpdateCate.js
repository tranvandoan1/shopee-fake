import CateAPI from "../../Api/Categoris"
import { $, reRender } from "../../ultis"
import ListCate from "./ListCate"
import firebase from "../../firebase/index"
import SearchCate from "./SearchCate"

const UpdateCate = {
    async render() {
        const { data: categoris } = await CateAPI.getAll()

        // sửa danh mục

        const TotalUpdate = $(".update-cate")


        function updateCate() {
            if (Array.isArray($("#box-update"))) {
                $("#box-update").forEach((btn, index) => {

                    btn.addEventListener("click", function() {
                        const boxUpdate = TotalUpdate[index]

                        boxUpdate.classList.add("active-update_cate")
                        window.addEventListener("click", function(e) {
                            if (e.target == boxUpdate) {
                                boxUpdate.classList.remove("active-update_cate")

                            }
                        })
                        const id = btn.dataset.id;

                        const categori = categoris.find(item => item._id == id)

                        $("#Update").forEach((update, index) => {
                            update.addEventListener("click", async function() {
                                const totalPhoto = $("#update-photo")
                                const totalNameCateUpdate = $("#nameCateUpdate")

                                const photoOne = totalPhoto[index]

                                const NameCateUpdate = totalNameCateUpdate[index]

                                const photoo = photoOne.files[0]

                                if (photoo == undefined) {

                                    const cate = {
                                        name: NameCateUpdate.value,
                                        photo: categori.photo
                                    }
                                    boxUpdate.classList.remove("active-update_cate")

                                    // loading.classList.add("active-loading")

                                    var AddSuccessful = setInterval(function() {
                                        $(".successful-fix").classList.add("active-successful")
                                        clearInterval(AddSuccessful)
                                    }, 500)

                                    setInterval(function() {
                                        $(".successful-fix").classList.remove("active-successful")
                                    }, 3000)

                                    // setInterval(function() {
                                    //     loading.classList.remove("active-loading")
                                    // }, 2000)


                                    await CateAPI.upload(id, cate)

                                    var render = setInterval(async function() {
                                        await reRender(ListCate, '#List-Cate')
                                        clearInterval(render)
                                    }, 1500)

                                } else {

                                    let storageRef = firebase.storage().ref(`images/${photoo.name}`);
                                    // loading.classList.add("active-loading")
                                    boxUpdate.classList.remove("active-update_cate")

                                    storageRef.put(photoo).then(function() {
                                        storageRef.getDownloadURL().then(async(url) => {
                                            const cate = {
                                                name: NameCateUpdate.value,
                                                photo: url,
                                            }
                                            await CateAPI.upload(id, cate)

                                            var AddSuccessful = setInterval(function() {
                                                $(".successful-fix").classList.add("active-successful")
                                                clearInterval(AddSuccessful)
                                            }, 500)

                                            setInterval(function() {
                                                $(".successful-fix").classList.remove("active-successful")
                                            }, 5000)

                                            // setInterval(function() {
                                            //     loading.classList.remove("active-loading")
                                            // }, 2000)

                                            var render = setInterval(async function() {
                                                await reRender(ListCate, '#List-Cate')
                                                clearInterval(render)
                                            }, 2000)
                                        })
                                    })
                                }


                            })
                        })
                    })

                })

            } else {
                $("#box-update").addEventListener("click", async function() {

                    TotalUpdate.classList.add("active-update_cate")
                    window.addEventListener("click", function(e) {
                        if (e.target == TotalUpdate) {
                            TotalUpdate.classList.remove("active-update_cate")

                        }
                    })
                    const id = $("#box-update").dataset.id;
                    const categori = categoris.find(item => item._id == id)

                    $("#Update").addEventListener("click", async function() {
                        const totalPhoto = $("#update-photo")
                        const NameCateUpdate = $("#nameCateUpdate")


                        const photo = totalPhoto.files[0]

                        if (photo == undefined) {

                            const cate = {
                                name: NameCateUpdate.value,
                                photo: categori.photo
                            }

                            TotalUpdate.classList.remove("active-update_cate")

                            $(".successful-fix").classList.add("active-successful")
                            setInterval(function() {
                                $(".successful-fix").classList.remove("active-successful")
                            }, 3000)

                            // loading.classList.add("active-loading")

                            // setInterval(function() {
                            //     loading.classList.remove("active-loading")
                            // }, 2000)

                            await CateAPI.upload(id, cate)

                            var render = setInterval(async function() {
                                await reRender(ListCate, '#List-Cate')
                                clearInterval(render)
                            }, 1500)
                        } else {

                            let storageRef = firebase.storage().ref(`images/${photo.name}`);
                            // loading.classList.add("active-loading")
                            TotalUpdate.classList.remove("active-update_cate")

                            storageRef.put(photo).then(function() {
                                storageRef.getDownloadURL().then(async(url) => {
                                    const cate = {
                                        name: NameCateUpdate.value,
                                        photo: url,
                                    }
                                    await CateAPI.upload(id, cate)


                                    $(".successful-fix").classList.add("active-successful")
                                    setInterval(function() {
                                        $(".successful-fix").classList.remove("active-successful")
                                    }, 3000)

                                    // setInterval(function() {
                                    //     loading.classList.remove("active-loading")
                                    // }, 2000)
                                    var render = setInterval(async function() {
                                        await reRender(ListCate, '#List-Cate')
                                        clearInterval(render)
                                    }, 2000)
                                })
                            })
                        }
                    })
                })
            }
        }
        updateCate()

    }
}
export default UpdateCate