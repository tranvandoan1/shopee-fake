import ListCate from "./ListCate"
import Frame from '../Frame';

const CategorisManager = {
    async render() {
        return /*html*/ `
        ${await Frame.render()}
                <div class="store-cate">
                    <div class="store-cate-header">
                        <h3><i class="far fa-calendar-alt"></i> Danh mục của shop</h3>
                        <button id="Add-Cate-Shop"><i class="fas fa-plus"></i> Thêm danh mục</button>
                    </div>
                    <div id="Store-Cate-List">
                        ${await ListCate.render()}
                    </div>

                </div>
                <div class="loading">
                    <img src="https://vn-live.slatic.net/other/roc/0d8945c265c535c7e00d6919ae03dea2.gif" alt="">
                </div> 
            </ul>
            </div>
            </div>
        </div>
    </div>     
        `
    },
    async afterRender() {

        return `${await ListCate.afterRender()}
        
        `
    }
}
export default CategorisManager