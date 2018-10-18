import axios from 'axios';
import API from '@/api/index.js';

// 通道业务卡片的数据
export function chartCardData(){
    return new Promise((resolve,reject) => {
        axios.get(API.CHART_CARD_API,{
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

// 通道业务市场份额图表的数据
export function marketSharesData(){
    return new Promise((resolve,reject) => {
        axios.get(API.CHART_CARD_API,{
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

// 通道业务账户价值量分析的数据
export function accountValueData(){
    return new Promise((resolve,reject) => {
        axios.get(API. ACCOUNT_VALUE_API,{
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

// 通道业务新业务经营的图表数据
export function businessOperationData(){
    return new Promise((resolve,reject) => {
        axios.get(API. ACCOUNT_VALUE_API,{
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
