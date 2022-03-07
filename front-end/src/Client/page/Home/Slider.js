import SliderAPI from "../../../Api/Slider"

const Slider = {
        async slider() {
            const { data: slides } = await SliderAPI.getAll()
            const slideArr = []

            slides.map(item => {
                if (item.status == "true") {
                    if (item.ordinal_number != 0) {
                        slideArr.push(item.ordinal_number)
                        const slide = slideArr.sort()
                        return /*html*/ `
                        ${ slide.map(slide=>{
                            if(slide==item.ordinal_number){
                              return item.ordinal_number
                            }
                        }).join("")}
                        `
                    }

                }

            })

            return /*html*/ `
                <!-- slider  -->
                <div class="banner-slide">
                    <div class="banner-shop">
                        <div class="full-home-banners">
                            <div class="full-home-banners__left-wrapper">
                                <div class="slide-gr">
                                    <div class="slides">
                                         ${
                                            slides.map(item=>{
                                                if(item.status=="true"){
                                                    if(item.ordinal_number != 0){
                                                        return /*html*/ `
                                                        ${ slideArr.map(slide=>{
                                                            if(item.ordinal_number==slide){
                                                                console.log(item)
                                                                return /*html*/ `
                                                                    <a href="">
                                                                        <img src="${item.photo}" alt="">
                                                                    </a>
                                                                `
                                                            }
                                                        }).join("")}
                                                        ` 
                                                    }
                                                }
                                            }).join("")
                                        }
                                    </div>
                                    <button id="prev"><i class="fas fa-angle-left"></i></button>
                                    <button id="next"><i class="fas fa-angle-right"></i></button>
                                    <div class="number_slide">
                                        ${slides.map((item)=>{
                                            if(item.status=="true"){
                                                if(item.ordinal_number != 0){
                                                    return /*html*/`
                                                        <button></button>
                                                    ` 
                                                }
                                            }
                                        }).join("")}
                                
                                    </div>
                                </div>
                            </div>
                            <div class="full-home-banners__right-wrapper">
                                <a href="" class="full-home-banners__right-banner">
                                    <img src="https://2.bp.blogspot.com/-Lu81JFx7Qw4/W1HntPfg0kI/AAAAAAAACeU/zLTDUkul8FQOUnp0Mp5k8zwE6oAF-lorQCLcBGAs/s1600/c.png" alt="">
                                </a>
                                <a href="" class="full-home-banners__right-banner">
                                    <img src="https://tingiasoc.com/wp-content/uploads/2020/03/ma-giam-gia-shopee-tgs.png" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            `
    },

}
export default Slider