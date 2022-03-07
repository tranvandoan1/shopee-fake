import ListComment from './ListComment';
import Frame from './../Frame';
const CommentManager = {
    async render() {

        return /*html*/ `
        ${await Frame.render()}
                <div class="comment-main">
                    <h3><i class="far fa-comments"></i> Phản hồi của khách về sản phẩm</h3>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tên sản phẩm</th>
                                <th>Số lượng</th>
                                <th>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody id="list-comment">
                        
                        </tbody>
                    </table>
                </div>
            </ul>
            </div>
            </div>
        </div>
    </div> 
    `
    },
    afterRender() {
        return /*html*/ `
        ${ListComment.render()}
    `
    }

}
export default CommentManager