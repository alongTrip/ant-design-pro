import axios from 'axios';
import API from '@/api/index.js';

// 请求客户分布首页卡片的数据
export function distributionlCardData(){
    return new Promise((resolve,reject) => {
        axios.post(API.ACTUALITY_CARD_API,{

        }).then(response=>{
            resolve(response.data);
        })
        .catch(error => {
            console.log('失败')
        })
    }) 
 }

// 请求客户分布首页新增和流失客户的数据
export function distributionlAddLostData(parameters = {}){
    return new Promise((resolve,reject) => {
        axios.post(API.ADD_LOST_API,{
                ...parameters 
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

// 请求客户分布首页新增客户的数据
export function distributionlAddData(parameters = {}){
    return new Promise((resolve,reject) => {
        axios.post(API.ADD_CUSTOMER_API,{
                ...parameters 
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