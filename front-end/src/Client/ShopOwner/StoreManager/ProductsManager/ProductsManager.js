import Frame from './../Frame';
import ProAPI from './../../../../Api/Products';
import ClassificationAPI from './../../../../Api/ClassificationAPI';
import CommodityValueAPI from './../../../../Api/CommodityValueAPI';
import SaveUserAPI from './../../../../Api/SaveUser';
import ShopOwnerAPI from './../../../../Api/ShopOwner';
const ProductsManager = {
        async render() {
            const { data: products } = await ProAPI.getAll()
            const { data: commodityvalues } = await CommodityValueAPI.getAll()
            const { data: classifications } = await ClassificationAPI.getAll()
            const { data: saveuser } = await SaveUserAPI.getAll()
            const { data: shopowners } = await ShopOwnerAPI.getAll()
            const idUser = saveuser.find(item => item)
            const shopeOwner = shopowners.find(item => item.user_id == idUser.user_id)
            const productArr = products.filter(item => item.shop_id == shopeOwner._id)

            // lọc các tên giống nhau rồi xóa đi còn lại những tên ko giống nhau
            const commodityvalueArr = (commodityvalues = []) => {
                const newCommodityvalue = [];
                while (commodityvalues.length > 0) {
                    newCommodityvalue.push(commodityvalues[0]);
                    commodityvalues = commodityvalues.filter(item => item.name !== commodityvalues[0].name)
                }
                return newCommodityvalue
            }

            const commodityvalueArray = []

            productArr.map(pro => {
                commodityvalueArr(commodityvalues).filter(item => {
                    if (item.pro_id == pro._id) {
                        commodityvalueArray.push(item)
                    }
                })
            })

            const sourceItemsByName = {};
            for (const obj of commodityvalueArray) {
                if (!sourceItemsByName[obj.pro_id]) {
                    sourceItemsByName[obj.pro_id] = [];
                }
                sourceItemsByName[obj.pro_id].push(obj.price);
            }
            const output = Object.values(sourceItemsByName);

            const ji = productArr.map((pro, index) => {
                var minPrice = Math.min.apply(Math, output[index]);
                return minPrice
            })

            const ji1 = productArr.map((pro, index) => {
                var maxPrice = Math.max.apply(Math, output[index]);
                return maxPrice
            })
            console.log(ji)
            console.log(ji1)

            return /*html*/ `
        
        ${await Frame.render()}
                <div class="store-products">
                    <div class="store-products-header">
                        <h3><i class="fab fa-product-hunt"></i>Sản phẩm của shop</h3>
                        <button><i class="fas fa-plus"></i> Thêm sản phẩm</button>
                    </div>
                    <div class="store-products-list">
                        <table border=".5">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>TÊN SẢN PHẨM</th>
                                    <th>ẢNH SẢN PHẨM </th>
                                    <th>GIÁ TIỀN</th>
                                    <th>Tên phân loại</th>
                                    <th>Giá trị phân loại</th>
                                    <th>THAO TÁC</th>
                                </tr>
                            </thead>
                            <tbody>
                            ${
                                productArr.map((pro,index)=>{
                                    return /*html*/ `
                                        <tr>
                                            <td>${index+1}</td>
                                            <td>
                                                <p>${pro.name}</p>
                                            </td>
                                            <td>
                                                <img src="${pro.cover_image}" alt="">
                                            </td>
                                            <td>
                                                ${
                                                    ji1
                                                }
                                            </td>
                                                <td>
                                                ${
                                                    classifications.map(item=>{
                                                        if(item.pro_id==pro._id){
                                                            return /*html*/ `
                                                            ${item.name},
                                                            `
                                                        }
                                                    }).join("")
                                                }
                                            </td>
                                            <td>
                                                ${
                                                    commodityvalueArr(commodityvalues).map(comm=>{
                                                        if(comm.pro_id==pro._id){
                                                            return /*html*/ `${comm.name},`
                                                        }
                                                    }).join(" ")
                                                }
                                            </td>
                                            <td><i class="far fa-eye"></i> <i class="far fa-trash-alt"></i></td>
                                        </tr>
                                    `
                                }).join("")
                            }
                                
                            
                            </tbody>
                        </table>
                        <div class="store-products-paging">
                            <button><i class="fas fa-angle-left"></i></button>
                            <ul>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                            </ul>
                            <button><i class="fas fa-angle-right"></i></button>
                        </div>
                    </div>
                </div>
            </ul>
            </div>
            </div>
        </div>
    </div>     
    `
    }
}
export default ProductsManager