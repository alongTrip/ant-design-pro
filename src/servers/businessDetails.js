import axios from 'axios';
import API from '@/api/index.js';

// 请求传统详情页的数据
export function traditionalDetailData(traditionalParams = {}){
    return new Promise((resolve,reject) => {
        axios.get(API.TRADITIONAL_DETAIL_API,{
            params : {
                ...traditionalParams
            }
        })
        .then(response=>{
            console.log('成功',response)
            resolve(response);
        })
        .catch(error => {
            console.log('失败')
        })
    }) 
 }

// 请求新业务详情页的数据
export function newBusinessDetailData(){
    return new Promise((resolve,reject) => {
        axios.get(API.NEW_BUSINESS_DETAIL_API,{
            params : {
                type:'0',
                freq:'1',
                caliber:'0',
            }
        })
        .then(response=>{
            console.log('成功',response)
            resolve(response);
        })
        .catch(error => {
            console.log('失败')
        })
    })
}