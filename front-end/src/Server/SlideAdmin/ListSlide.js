import { $ } from '../../ultis';
import SliderAPI from './../../Api/Slider';
import { reRender } from './../../ultis';
import UpdateSlideAdmin from './UpdateSlidePage';
const ListSlide = {
        async render() {

            const { data: slides } = await SliderAPI.getAll()

            return /*html*/ `
            ${
                slides.map((item,index)=>{
                    if(item.status=="true"){
                        return /*html*/ `
                            <tr>
                                <td>${index}</td>
                                <td><img src="${item.photo}" alt=""></td>
                                <td><input type="text" name="" value="${item.ordinal_number}" data-id="${item._id}" id="ordinal-number"></td>

                                <td class="on-off">
                                    <button data-id="${item._id}" id="off" class="off" >Off</button>
                                    
                                    <button class="on" data-id="${item._id}" id="on"  style="background-color: lawngreen; color: #fff;">On</button>
                                </td>

                                <td>
                                    <i data-id="${item._id}" class="fas fa-tools"></i>
                                    <div class="update-photo">
                                        <form action="" id="update">
                                            <div class="update-header">Sửa ảnh</div>
                                            <div class="form-update">
                                                <span>Chọn ảnh</span>
                                              <!--  <label for="update-image" id="hi">
                                                        <i class="fas fa-images"></i>
                                                    </label>-->
                        
                                                <input type="file" id="update-image">
                                            </div>
                                            <div class="photo">
                                                <span class="update-list-photoo"><img src="${item.photo}" alt=""></span> ==> <span class="update-photoo"></span>
                                            </div>
                        
                                            <button type="submit">Sửa</button>
                        
                                        </form>
                                    </div>

                                    <i data-id="${item._id}" class="fas fa-trash-alt"></i>
                                </td>
                            </tr>
                        `
                    }else if(item.status=="false"){
                        return /*html*/ `
                            <tr>
                                <td>${index}</td>
                                <td><img src="${item.photo}" alt=""></td>
                                <td><input type="text" name="" value="${item.ordinal_number}" data-id="${item._id}" id="ordinal-number"></td>
                                <td class="on-off">
                                    <button data-id="${item._id}" id="off" style="background-color: red; color: #fff;" class="off" >Off</button>

                                    <button class="on" id="on" data-id="${item._id}" >On</button>
                                </td>  
                                <td>
                                
                                    <i data-id="${item._id}" class="fas fa-tools"></i>

                                    <div class="update-photo">
                                        <form action="" id="update">
                                            <div class="update-header">Sửa ảnh</div>
                                            <div class="form-update">
                                                <span>Chọn ảnh</span>
                                                <!--<label for="update-image" id="hi">
                                                        <i class="fas fa-images"></i>
                                                    </label>-->
                        
                                                <input type="file" id="update-image">
                                            </div>
                                            <div class="photo">
                                                <span class="update-list-photoo"><img src="${item.photo}" alt=""></span> ==> <span class="update-photoo"></span>
                                            </div>
                        
                                            <button type="submit">Sửa</button>
                        
                                        </form>
                                    </div>

                                    <i data-id="${item._id}" class="fas fa-trash-alt"></i>
                                </td>
                            </tr>
                        `
                    }
                }).join("")
            }
        `
    },

    // bật tắt ảnh
    async afterRender() {

        const { data: slides } = await SliderAPI.getAll()


        const notification = $(".notification")
        const fail = $(".fail")
        const deletee = $(".delete")
        const Off = $("#off")

        if(Array.isArray(Off)){
            Off.forEach(btn => {
                btn.addEventListener("click",async function(){
                    const id=btn.dataset.id
                    let formData=new FormData()
                    formData.append("status","false")
                    await SliderAPI.upload(id,formData)

                    fail.classList.remove("fail-active")
                    notification.classList.add("notification-active")
                    
                    const time=setInterval(function(){
                        notification.classList.remove("notification-active")
                        clearInterval(time)
                    },2000)

                    await reRender(ListSlide,"#list-slides")
                })
            });
        }else{
            Off.addEventListener("click",async function(){
                const id=btn.dataset.id
                let formData=new FormData()
                formData.append("status","false")
                await SliderAPI.upload(id,formData)
                alert("Ảnh đã được cập nhật không hoạt động")

                fail.classList.remove("fail-active")
                    notification.classList.add("notification-active")
                    
                const time=setInterval(function(){
                    notification.classList.remove("notification-active")
                    clearInterval(time)
                },2000)

                await reRender(ListSlide,"#list-slides")
            });
        }
   

        const on = $("#on")
        if(Array.isArray(on)){
            on.forEach(btn => {
                btn.addEventListener("click",async function(){
                    const id=btn.dataset.id
    
                    let formData=new FormData()
                    formData.append("status","true")
                    await SliderAPI.upload(id,formData)
                    
                    fail.classList.remove("fail-active")
                    notification.classList.add("notification-active")
                    
                    const time=setInterval(function(){
                        notification.classList.remove("notification-active")
                        clearInterval(time)
                    },2000)

                    await reRender(ListSlide,"#list-slides")
                })
            });
        }else{
            on.addEventListener("click",async function(){
                const id=on.dataset.id
                let formData=new FormData()
                formData.append("status","true")
                await SliderAPI.upload(id,formData)
                alert("Ảnh đã được cập nhật hoạt động")

                notification.classList.remove("notification-active")
                fail.classList.add("notification-active")
                    
                const time=setInterval(function(){
                    fail.classList.remove("fail-active")
                    clearInterval(time)
                },2000)

                await reRender(ListSlide,"#list-slides")
            })
        }

        // chỉnh số thứ tự/
        if(Array.isArray($("#ordinal-number"))){
             $("#ordinal-number").forEach((btn,index)=>{
                btn.addEventListener("keyup",async function(event){
                    if (event.keyCode === 13) {
                        const id=btn.dataset.id
                        
                        const slide=slides.find(item=>item._id==id)

                        if(slide.status=="true"){
                            let formData=new FormData()
                            formData.append("ordinal_number",btn.value)
                            await SliderAPI.upload(id,formData)
                            
                            fail.classList.remove("fail-active")
                            notification.classList.add("notification-active")
                                
                            const time=setInterval(function(){
                                notification.classList.add("notification-active")
                                clearInterval(time)
                            },2000)
                            
                            await reRender(ListSlide,"#list-slides")
                        }else{
                            notification.classList.remove("notification-active")
                            fail.classList.add("fail-active")
                            
                            const time=setInterval(function(){
                            fail.classList.remove("fail-active")
                            clearInterval(time)
                            },2000)

                            await reRender(ListSlide,"#list-slides")
                        }
                
                    }
                });
            })
        }else{
            $("#ordinal-number").addEventListener("keyup",async function(event){
                if (event.keyCode === 13) {
                    const id=$("#ordinal-number").dataset.id
                    
                    const slide=slides.find(item=>item._id==id)

                    if(slide.status=="true"){
                        let formData=new FormData()
                        formData.append("ordinal_number",$("#ordinal-number").value)
                        await SliderAPI.upload(id,formData)
                        
                        fail.classList.remove("fail-active")
                        notification.classList.add("notification-active")
                            
                        const time=setInterval(function(){
                            notification.classList.add("notification-active")
                            clearInterval(time)
                        },2000)
                        
                        await reRender(ListSlide,"#list-slides")
                    }else{
                        notification.classList.remove("notification-active")
                        fail.classList.add("fail-active")
                        
                        const time=setInterval(function(){
                        fail.classList.remove("fail-active")
                        clearInterval(time)
                        },2000)

                        await reRender(ListSlide,"#list-slides")
                    }
            
                }
            })
        }
       


        // xóa slide
        if(Array.isArray($("#list-slides .fa-trash-alt"))){
            $("#list-slides .fa-trash-alt").forEach(btn=>{
                btn.addEventListener("click",async function(){
                    const id=btn.dataset.id
                    const check=confirm("Bạn có muốn xóa không")
                    if(check){
                        await SliderAPI.remove(id)
                        await reRender(ListSlide,"#list-slides")
                        
                        fail.classList.remove("fail-active")
                        notification.classList.remove("notification-active")
                        deletee.classList.add("delete-active")
                        
                        const time=setInterval(function(){
                            deletee.classList.remove("delete-active")
                            clearInterval(time)
                        },2000)
                    }
                })
            })
        }else{
            $("#list-slides .fa-trash-alt").addEventListener("click",async function(){
                    const id=$("#list-slides .fa-trash-alt").dataset.id
                    const check=confirm("Bạn có muốn xóa không")
                    if(check){
                        await SliderAPI.remove(id)
                        await reRender(ListSlide,"#list-slides")
                        fail.classList.remove("fail-active")
                        notification.classList.remove("notification-active")
                        deletee.classList.add("delete-active")
                        
                        const time=setInterval(function(){
                            deletee.classList.remove("delete-active")
                            clearInterval(time)
                        },2000)
                    }
                })
        }


    return /*html*/`
        ${await UpdateSlideAdmin.render()}
    `   
    }
}
export default ListSlide