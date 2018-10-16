import axios from 'axios';


// 请求传统详情页的数据
// export function gtraditionalData(parameters){
//     console.log(parameters)
//     return new Promise((resolve,reject) => {
//         axios.get('https://randomuser.me/api',{
//             params : {
//                 entry_id : categoriesID,
//                 longitude : 114.085947,
//                 latitude : 22.547,
//                 terminal : 'h5' 
//             }
//         })
//         .then(response=>{
        	
//             resolve(response);
//         })
//         .catch(error => {
//             console.log('失败')
//         })
//     })
// }