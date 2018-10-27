import axios from 'axios';
import API from '@/api/index.js';

// 请求客户分布首页卡片的数据
export function customerDetailsCardData(){
    return new Promise((resolve,reject) => {
        axios.post(API.DISTRIBUTION_CARD_API,{

        }).then(response=>{
            resolve(response.data);
        })
        .catch(error => {
            console.log('失败')
        })
    }) 
 }

// 请求客户分布首页地域分布地图的数据
export function customerDetailsMapData(parameters = {}){
    return new Promise((resolve,reject) => {
        axios.post(API.DISTRIBUTION_MAP_API,{
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

// 请求客户分布首页性别分布的数据
export function customerDetailsPieData(parameters = {}){
    return new Promise((resolve,reject) => {
        axios.post(API.DISTRIBUTION_PIE_API,{
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

// 请求客户分布首页职业分布的数据
export function customerDetailsCloundData(parameters = {}){
    return new Promise((resolve,reject) => {
        axios.post(API.DISTRIBUTION_CLOUD_API,{
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

// 请求客户分布首页资产分布的数据
export function customerDetailsBarData(parameters = {}){
    return new Promise((resolve,reject) => {
        axios.post(API.DISTRIBUTION_BAR_API,{
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

// 请求客户分布详情页的数据
export function customerDetailsDetailData(parameters = {}){
    return new Promise((resolve,reject) => {
        axios.post(API.DISTRIBUTION_DETAIL_API,{
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