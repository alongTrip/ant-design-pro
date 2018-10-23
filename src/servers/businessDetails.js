import axios from 'axios';
import API from '@/api/index.js';

// 请求传统详情页的数据
export function traditionalDetailData(parameters = {}){
    console.log(parameters)
    return new Promise((resolve,reject) => {
        axios.post(API.TRADITIONAL_DETAIL_API,{
             // params:{
                ...parameters
        //      }
        }).then(response=>{
            // console.log('传统详情页',response)
            resolve(response.data);
        })
        .catch(error => {
            console.log('失败')
        })
    }) 
 }

// 请求新业务详情页的数据
export function newBusinessDetailData(parameters = {}){
    return new Promise((resolve,reject) => {
        axios.post(API.NEW_BUSINESS_DETAIL_API,{
            // params:{
                ...parameters 
            // }
        })
        .then(response=>{
            resolve(response.data);
            // console.log(response)
        })
        .catch(error => {
            console.log('失败')
        })
    })
}