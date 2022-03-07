// import { $, reRender } from "../../ultis"
// import UpdateCate from "./UpdateCate"
// import DeleteCate from "./DeleteCate"
// import CateAPI from "../../Api/Categoris"

// const SearchCate = {
//     async render() {
//         const { data: categoris } = await CateAPI.getAll()

//         categoris.reverse()
//         let currentPage = 1
//         let productArr = []

//         function getCurrentPage(currentPage) {
//             start = (currentPage - 1) * perPage;
//             end = currentPage * perPage
//         }

//         $("#search").addEventListener("keyup", (event) => {
//             if (event.keyCode === 13) {
//                 currentPage = 1
//                 productArr = [];
//                 categoris.forEach(item => {
//                     if (item.name.toLocaleLowerCase().includes($("#search").value.toLocaleLowerCase())) {
//                         productArr.push(item)
//                     }
//                 });

//                 getCurrentPage(currentPage);
//                 initRender(productArr, totalPages)
//                 UpdateCate.render()
//                 DeleteCate.render()
//             }
//         });

//     }
// }
// export default SearchCate