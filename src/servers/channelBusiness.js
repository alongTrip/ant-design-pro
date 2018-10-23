import axios from 'axios';
import API from '@/api/index.js';

// 通道业务卡片的数据
export function chartCardData(){
    return new Promise((resolve,reject) => {
        axios.post(API.CHART_CARD_API,{
            // params:{

            // }
        })
        .then(response=>{
            // console.log('通道业务卡片',response)
            resolve(response);
        })
        .catch(error => {
            console.log('失败')
        })
    })
}

// 通道业务市场份额图表的数据
export function marketSharesData(parameters = {}){
    return new Promise((resolve,reject) => {
        axios.post(API.MARKET_SHARES_API,{
            // params:{
                ...parameters
            // }
        })
        .then(response=>{
            // console.log('市场份额',response)
            resolve(response);
        })
        .catch(error => {
            console.log('失败')
        })
    })
}

// 通道业务账户价值量分析的数据
export function accountValueData(parameters = {}){
    return new Promise((resolve,reject) => {
        axios.post(API.ACCOUNT_VALUE_API,{
            // params:{
             ...parameters
            // }
        })
        .then(response=>{
            console.log('账户价值量',response)
            resolve(response);
        })
        .catch(error => {
            console.log('失败')
        })
    })
}

// 通道业务新业务经营的图表数据
export function businessOperationData(parameters = {}){
    return new Promise((resolve,reject) => {
        axios.post(API.BUSINESS_OPERATION_API,{
            // params:{
                ...parameters
            // }
        })
        .then(response=>{
            // console.log('新业务经营',response)
            resolve(response);
        })
        .catch(error => {
            console.log('失败')
        })
    })
}
