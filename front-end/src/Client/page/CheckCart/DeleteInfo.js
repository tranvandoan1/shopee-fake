import InfoUserAPI from "../../../Api/InfoUser"
import SaveUserAPI from "../../../Api/SaveUser"
import { $ } from "../../../ultis"
import { reRender } from './../../../ultis';
import AddressUser from './AddressUser';

const DeleteInfo = {
        async render() {

            const { data: infouser } = await InfoUserAPI.getAll()
            const { data: saveuser } = await SaveUserAPI.getAll()

            const idUser = saveuser.find(item => {
                return item
            })

            return /*html*/ `
                <ul>
                    ${
                        infouser.map(item=>{
                            if(item.user_id==idUser.user_id){
                                if(item.status=="select"){
                                    return /*html*/ `
                                        <li>
                                            <input type="checkbox" name="" data-id="${item._id}"  id="checkbox">
                                            <label for="checkbox">
                                                <div class="check-dots active-check-dots" data-id="${item._id}"></div>
                                            </label>
                                            <div class="payment_name">${item.name} ( ${item.phone} )</div>
                                            <div class="payment_address">${item.specific_address},${item.ward},${item.district},${item.city}</div>
                                            <span class="md">Mặc định</span>
                                            <span><button><i data-id="${item._id}" class="far fa-trash-alt"></i></button></span>
                                        </li>
                                    `
                                }else{
                                    return /*html*/ `
                                        <li>
                                            <input type="checkbox" name="" data-id="${item._id}" id="checkbox">
                                            <label for="checkbox">
                                                <div class="check-dots" data-id="${item._id}"></div>
                                            </label>
                                            <div class="payment_name">${item.name} ( 0${item.phone} )</div>
                                            <div class="payment_address">${item.specific_address},${item.ward},${item.district},${item.city}</div>
                                            <span class="md"></span>
                                            <span><button><i data-id="${item._id}" class="far fa-trash-alt"></i></button></span>
                                        </li>
                                    `
                                }
                            }
                        }).join("")
                    }
            </ul>
        `
    },
    async afterRender(){
        const { data: infouser } = await InfoUserAPI.getAll()
        
        if(Array.isArray($(".check-dots"))){
            $(".check-dots").forEach(btn=>{
                btn.addEventListener("click",async function(){
                    for (let i = 0; i < $(".check-dots").length; i++) {
                        $(".check-dots")[i].classList.remove("active-check-dots")
                    }
                    btn.classList.add("active-check-dots")
    
                    const id=btn.dataset.id
    
                    let formDataArr=new FormData()
                    formDataArr.append("status","not-select")
    
                    infouser.map(async item=>{
                        await InfoUserAPI.upload(item._id,formDataArr)
                    })
    
                    let formData=new FormData()
                    formData.append("status","select")
    
                    await InfoUserAPI.upload(id,formData)
                    await reRender(DeleteInfo,".change-address")
    
                })
            })
    
        }else{
            $(".check-dots").addEventListener("click",async function(){
                const id=$(".check-dots").dataset.id

                let formData=new FormData()
                formData.append("status","select")

                await InfoUserAPI.upload(id,formData)
                await reRender(DeleteInfo,".change-address")

            })
        }




        // xóa địa chỉ
        if(Array.isArray($(".change-address ul span i"))){
            $(".change-address ul span i").forEach(btn=>{
                btn.addEventListener("click",async function(){
                    const id=btn.dataset.id
                    const info=infouser.find(item=>item._id==id)
    
                    if(info.status=="select"){
                        alert("Không thể xóa địa chỉ khi đang chọn")
                    }
                    else if(info.status=="not-select"){
                        const check=confirm("Bạn có chắc chắn muôn xóa không ?")
    
                        if(check){
                            await InfoUserAPI.remove(id)
                            await reRender(DeleteInfo,".change-address")
                        }
                    }
                })
            })
        }else{
            $(".change-address ul span i").addEventListener("click",async function(){
                    const id=$(".change-address ul span i").dataset.id
                    const info=infouser.find(item=>item._id==id)
    
                    if(info.status=="select"){
                        alert("Không thể xóa địa chỉ khi đang chọn")
                    }
                    else if(info.status=="not-select"){
                        const check=confirm("Bạn có chắc chắn muôn xóa không ?")
    
                        if(check){
                            await InfoUserAPI.remove(id)
                            await reRender(DeleteInfo,".change-address")
                        }
                    }
                })
        }
        
    }
}
export default DeleteInfo