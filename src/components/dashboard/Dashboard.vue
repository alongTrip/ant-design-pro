<template>
  <div>
    <a-row style="margin: 0 -12px">
    <!-- 结构一 -->
      <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
        <chart-card title="前日股基交易量(万元)" :total="stockData">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <trend style="margin-right: 16px" term="日环比" :percent="stockChange" :is-increase="stockIcon" :scale="0" />
          </div>
        </chart-card>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
        <chart-card title="前日信用账户交易量(万元)" :total="creditData">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <trend style="margin-right: 16px" term="日环比" :percent="creditChange" :is-increase="creditIcon" :scale="0" />
          </div>
        </chart-card>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
        <chart-card title="前日市场份额" :total="marketData">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <trend style="margin-right: 16px" term="日环比" :percent="marketChange" :is-increase="marketIcon" :scale="0" />
          </div>
        </chart-card>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
        <chart-card title="前日股基净佣金率" :total="fundData">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <trend style="margin-right: 16px" term="日环比" :percent="fundChange" :is-increase="fundIcon" :scale="0" />
          </div>
        </chart-card>
      </a-col>
      <!-- 结构二 -->
       <a-col :sm="24" :md="12"  style="padding: 12px 12px 24px;width:50%;position:relative;">
        <chart-card title="当月股基净佣金收入(万元)" :total="stockFundData">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <trend style="margin-right: 16px" term="月环比" :percent="yearChange" :is-increase="stockFundIcon" />
            <trend term="年同比" :percent="dateChange" :is-increase="stockDataIcon" />
          </div>
        </chart-card>
        <div>
            <mini-bar style="position: absolute;left:53%;top:138px;width:40%;"/>
        </div>
      </a-col>

      <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;width:50%;position:relative;">
        <chart-card title="当月两融净佣金收入(万元)" :total="meltData">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <trend style="margin-right: 16px" term="月环比" :percent="meltYearChange" :is-increase="meltIcon" :scale="0" />
            <trend term="年同比" :percent="meltDateChange" :is-increase="meltDataIcon" />
          </div>
        </chart-card>
        <div>
            <mini-area style="position: absolute;left:53%;top:138px;width:40%;"/>
        </div>
      </a-col>
    </a-row>
    <!-- 结构三 -->
    <a-card :bordered="false" :body-style="{padding: '0'}" style="margin-top:0px;">
      <div class="salesCard" style="height:500px;">
         <div style="border-bottom:1px solid rgb(232, 232, 232);height:70px;line-height:70px;">
            <h2 style="float:left;padding-left:25px;font-size:18px;">市场份额</h2>
            <a-range-picker   style="float:right;padding-top:20px;margin-right:40px;width:280px"
               @change="onChange_a"
               :defaultValue="[moment('2017-10-11', dateFormat), moment('2018-10-10', dateFormat)]"
               :format="dateFormat"
            />
         </div>
         <div id="market" style="height:400px;width:1124px;"></div>
      </div>
    </a-card>
    <!-- 结构四 -->
    <a-card :bordered="false" :body-style="{padding: '0'}" style="margin-top:20px;">
      <div class="salesCard" style="height:500px;">
         <div style="border-bottom:1px solid rgb(232, 232, 232);height:70px;line-height:70px;">
            <h2 style="float:left;padding-left:25px;font-size:18px;">主要业务经营情况</h2>
         </div>
         <div style="position:relative;padding:0 20px;box-sizing: border-box;width:100%;">
         <a-tabs default-active-key="1" size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}" style="position:absolute;width:96%">
          <div class="extra-wrap" slot="tabBarExtraContent">
               <a-range-picker style="float:right;padding-top:12px;margin-right:40px;width:280px"  
                  @change="onChange_b" 
                  :defaultValue="[moment('2017-10-11', dateFormat), moment('2018-10-10', dateFormat)]"
                  :format="dateFormat"
                />
          </div>
          <a-tab-pane loading="true" tab="交易量" key="1">
            <a-row>
             <!--  <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24"> -->
                <div id="accoun" style="height:350px;width:1124px;left:-22px;top:-18px;"></div>
             <!--  </a-col> -->
            </a-row>
          </a-tab-pane>
          <a-tab-pane tab="净佣金收入" key="2">
            <a-row>
              
            </a-row>
          </a-tab-pane>
        </a-tabs>
        </div>
      </div>
    </a-card>
    <!-- 结构五 -->
   <a-card :bordered="false" :body-style="{padding: '0'}" style="margin-top:20px;">
      <div class="salesCard" style="height:500px;">
         <div style="border-bottom:1px solid rgb(232, 232, 232);height:70px;line-height:70px;">
            <h2 style="float:left;padding-left:25px;font-size:18px;">新业务经营情况</h2>
         </div>
         <div style="position:relative;padding:0 20px;box-sizing: border-box;width:100%;">
            <a-tabs default-active-key="1" size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}" style="position:absolute;width:96%"  @change="addChange"  >
              <div class="extra-wrap" slot="tabBarExtraContent">
                  <a-range-picker style="float:right;padding-top:12px;margin-right:40px;width:280px" 
                    @change="onChange_c" 
                    :defaultValue="[moment('2017-10-11', dateFormat), moment('2018-10-10', dateFormat)]"
                    :format="dateFormat"
                  />
              </div>
              <a-tab-pane loading="true" tab="交易量" key="2">
                <a-row>
                <!--  <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24"> -->
                  <div id="business" style="height:350px;width:1124px;left:-22px;top:-18px;"></div>
                  <!-- </a-col> -->
                </a-row>
              </a-tab-pane>
              <a-tab-pane tab="净佣金" key="1">
                <a-row>
                   <div id="brokerage" style="height:350px;width:1124px;left:-22px;top:-18px;"></div>
                </a-row>
              </a-tab-pane>
            </a-tabs>
          </div>
      </div>
    </a-card>
  </div>
</template>

<script>
import ACard from "ant-design-vue/es/card/Card";
import ChartCard from "./ChartCard";
import MiniArea from "../chart/MiniArea";
import MiniBar from "../chart/MiniBar";
import Trend from "../chart/Trend";
import echarts from "echarts";
import moment from 'moment'
import {chartCardData,marketSharesData,accountValueData,businessOperationData} from '@/servers/channelBusiness.js'
export default {
  name: "dashboard",
  data() {
    return {
       dateFormat: 'YYYY-MM-DD',
       // 结构一
       stockData:'',
       stockChange:null,
       stockIcon:null,
       creditData:'',
       creditChange:null,
       creditIcon:null,
       marketData:'',
       marketChange:null,
       marketIcon:null,
       fundData:'',
       fundChange:null,
       fundIcon:null,
       // 结构二
       stockFundData:'',
       yearChange:null,
       dateChange:null,
       stockFundIcon:null,
       stockDataIcon:null,
       meltData:'',
       meltYearChange:null,
       meltDateChange:null,
       meltIcon:null,
       meltDataIcon:null,
       // 市场份额
       marketStartTime:'',
       marketEndTime:'',
       marketYearArr:[],
       marketValue:[],
       // 新业务经营情况
       accountStartTime:'2017-10-11',
       accountEndTime:'2018-10-10',
       yearArr:[],
       creditArr:[],
       commonArr:[],
       // 新业务经营情况
       newStartTime:'2017-10-11',
       newEndTime:'2018-10-10',
       newYearArr:[],
       neeqValue:[],
       hkwolunValue:[],
       individualValue:[],
    };
  },
  components: {
    Trend,
    MiniBar,
    MiniArea,
    ChartCard,
    ACard
  },
  mounted(){
    // 卡片的数据
    chartCardData().then(result=>{
        var datas = result.data.data.info
        // 1
        this.stockData =  this.toThousands(Math.round(datas.SECU_TRD_DAY.value)).toString()
        var compare1 = datas.SECU_TRD_DAY.value_offset
        if(compare1 > 0){
           this.stockIcon = true
        }else if(compare1 < 0){
           this.stockIcon = false
        }
         // console.log(this.stockIcon)
        this.stockChange = Math.round(compare1*100)
        // 2
        this.creditData =  this.toThousands(Math.round(datas.FI_TRD_DAY.value)).toString()
        var compare2 = datas.FI_TRD_DAY.value_offset
        if(compare2 > 0){
           this.creditIcon = true
        }else if(compare2 < 0){
           this.creditIcon = false
        }
        this.creditChange = Math.round(compare2*100)
        // 3
        this.marketData =  Math.round(datas.TRD_RATE_DAY.value*100000)/100 + datas.TRD_RATE_DAY.unit
        var compare3 = datas.TRD_RATE_DAY.value_offset
        if(compare3 > 0){
           this.marketIcon = true
        }else if(compare3 < 0){
           this.marketIcon = false
        }
        this.marketChange = Math.round(compare3*100)
        // 4
        this.fundData =  this.toThousands(Math.round(datas.SECU_NET_COMM_TRD_RATE.value)).toString()
        var compare4 = datas.SECU_NET_COMM_TRD_RATE.value_offset
        if(compare4 > 0){
           this.fundIcon = true
        }else if(compare4 < 0){
           this.fundIcon = false
        }
        this.fundChange = Math.round(compare4*100)
        // 5
        this.stockFundData =  this.toThousands(Math.round(datas.fi_netcom_mon.value)).toString()
        var compare5 = datas.fi_netcom_mon.value_offset
        if(compare5 > 0){
           this.stockFundIcon = true
        }else if(compare5 < 0){
           this.stockFundIcon = false
        }
        this.yearChange = Math.round(compare5*100)
        var compare6 = datas.fi_netcom_mon.value_updown
        if(compare6 > 0){
           this.stockDataIcon = true
        }else if(compare6 < 0){
           this.stockDataIcon = false
        }
        this.dateChange = Math.round(compare6*100)
        // 6
        this.meltData =  this.toThousands(Math.round(datas.netcom_mon.value)).toString()
        var compare7 = datas.netcom_mon.value_offset
        if(compare7 > 0){
           this.meltIcon = true
        }else if(compare7 < 0){
           this.meltIcon = false
        }
        this.meltYearChange = Math.round(compare7*100)
        var compare8 = datas.netcom_mon.value_updown
        if(compare8 > 0){
           this.meltDataIcon = true
        }else if(compare8 < 0){
           this.meltDataIcon = false
        }
        this.meltDateChange = Math.round(compare8*100)
      });
    // 市场份额
    marketSharesData().then(result=>{
          var marketData = result.data.data.info
          for(var i = 0 ; i < marketData.length ; i++){
              var aa = marketData[i].date
              var arr = aa.split('')
              arr.splice(4,0,'-')
              arr.splice(7,0,'-')
              var str = arr.join('')
              this.marketYearArr.push(str)
              this.marketValue.push(Math.round(marketData[i].value*100000)/100)
          }
        this.initMarketChart();
     });
    //账户价值量分析 
    accountValueData({
         start:'2017-10-11',
         end:'2018-10-10',
    }).then(result=>{
          // 信用账户
          var accountData = result.data.data.info.FI_TRD_DAY
          // 普通账户
          var commonData = result.data.data.info.COMM_TRD_DAY
          for(var i = 0 ; i < accountData.length ; i++){
              var bb = accountData[i].date
              var arr2 = bb.split('')
              arr2.splice(4,0,'-')
              arr2.splice(7,0,'-')
              var str2 = arr2.join('')
              this.yearArr.push(str2)
              this.creditArr.push(accountData[i].value)
              this.commonArr.push(commonData[i].value)
          }
          // 主要业务情况
          this.initChart();
     });
    // 新业务经营情况
    businessOperationData({
        start:'2015-01',
        end:'2018-10',
    }).then(result=>{
         console.log(result)
         var newBusiness = result.data.data.info
         var threeBoard =  newBusiness.NTB_TRD_AMT_MONTH
         var hkwolun =  newBusiness.HKT_TRD_AMT_MONTH
         var stockOptions =  newBusiness.SO_TRD_AMT_MONTH
         for(var i = 0 ; i < threeBoard.length ; i++){
              var cc = threeBoard[i].date
              var arr3 = cc.split('')
              arr3.splice(4,0,'-')
              arr3.splice(7,0,'-')
              var str3 = arr3.join('')
              this.newYearArr.push(str3)
              this.neeqValue.push(threeBoard[i].value)
              this.hkwolunValue.push(hkwolun[i].value)
              this.individualValue.push(stockOptions[i].value)
         }
         // 新业务经营情况
       // console.log(this.newYearArr)
       // console.log( this.neeqValue)
       // console.log(this.hkwolunValue)
       // console.log(this.individualValue)
      this.initBusinessChart();
      this.brokerageAction()
		 })
  },
  watch: {
     marketStartTime(){
      if(this.marketStartTime != ""){
          // 市场份额
          marketSharesData({
               start:this.marketStartTime,
               end:this.marketEndTime,
            }).then(result=>{
                var marketData = result.data.data.info
                for(var i = 0 ; i < marketData.length ; i++){
                    var aa = marketData[i].date
                    var arr = aa.split('')
                    arr.splice(4,0,'-')
                    arr.splice(7,0,'-')
                    var str = arr.join('')
                    this.marketYearArr.push(str)
                    this.marketValue.push(Math.round(marketData[i].value*100000)/100)
                }
              console.log(this.marketYearArr)
              this.initMarketChart();
           });
        }
     },
  },
  methods: {
    moment,
    addChange(activeKey){
        this.initBusinessChart();
        console.log(activeKey)
    },
    // 转化数字格式
    toThousands(num) {
      return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
    },
    // 获取日期区间
    onChange_a(date, dateString) {
       this.marketStartTime = dateString[0]
       this.marketEndTime = dateString[1]
       console.log(this.marketStartTime)
       console.log(this.marketEndTime)
    },
    onChange_b(date, dateString) {
        this.accountStartTime = dateString[0]
        this.accountEndTime = dateString[1]
    },
    onChange_c(date, dateString) {
        this.newStartTime = dateString[0]
        this.newEndTime = dateString[1]
    },
    // 市场份额
    initMarketChart() {
      this.myChart = echarts.init(document.getElementById("market"));
      var option = {
        tooltip: {
          trigger: "axis"
        },
        xAxis: {
          data: this.marketYearArr
        },
        yAxis: {
          splitLine: {
            show: false
          },
          min: function(value) {
            return value.min;
          },
          max: function(value) {
            return value.max;
          }
        },
        grid: {
          top: "8%",
          left: "4%",
          right: "10%",
          bottom: "10%",
          containLabel: true
        },
        dataZoom: [
          {
            startValue: "2015-01-01"
          },
          {
            type: "inside"
          }
        ],
        visualMap: {
          top: 10,
          right: 10,
          pieces: [
            {
              gt: 0,
              lte: 7,
              color: "#096"
            },
            {
              gt: 7,
              lte: 7.5,
              color: "#ffde33"
            },
            {
              gt: 7.5,
              lte: 8,
              color: "#ff9933"
            },
            {
              gt: 8,
              lte: 8.5,
              color: "#cc0033"
            },
            {
              gt: 8.5,
              color: "#660099"
            }
          ],
          outOfRange: {
            color: "#999"
          }
        },
        series: {
          name: "score",
          type: "line",
          data: this.marketValue,
          markLine: {
            silent: true,
            data: [
              {
                yAxis: 7
              },
              {
                yAxis: 7.5
              },
              {
                yAxis: 8
              },
              {
                yAxis: 8.5
              }         
            ]
          }
        }
      };
      this.myChart.setOption(option);
    },
    // 主要业务经营情况
    initChart() {
      this.chart = echarts.init(document.getElementById("accoun"));
      var option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend: {
          data: ["信用账户", "普通账户"],
          left: "center",
          top: "bottom",
          itemGap:30
        },
        grid: {
          top: "8%",
          left: "3%",
          right: "4%",
          bottom: "10%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisLabel:{
                 interval:Math.floor(this.yearArr.length/6),
            },
            data:this.yearArr
          }
        ],
        yAxis: [
          {
            type: "value",
            max: function(value) {
              return Math.round(value.max) + 30000;
            }
          }
        ],
        series: [
          {
            name: "信用账户",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data:this.creditArr,
            itemStyle: {
              normal: {
                color: "#1B91FF",
                lineStyle: {
                  color: "#1B91FF"
                }
              }
            }
          },
          {
            name: "普通账户",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data:this.commonArr,
            itemStyle: {
              normal: {
                color: "#2DBE67",
                lineStyle: {
                  color: "#2DBE67"
                }
              }
            }
          }
        ]
      };
      this.chart.setOption(option);
    },
    // 新业务经营情况
    initBusinessChart() {
      var businessChart = echarts.init(document.getElementById("business"));
      var option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend: {
          data: ["新三板", "港股通", "个股期权"],
          left: "center",
          top: "bottom",
          padding: [0, 100, 0, 0],
          itemGap:30,
          selected:{
             "新三板":true,
             "港股通":true,
             "个股期权":false,
          }
        },
        grid: {
          top: "8%",
          left: "3%",
          right: "4%",
          bottom: "10%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data:this.newYearArr,
             axisLabel:{
                 interval:Math.floor(this.yearArr.length/6),
            },
          }
        ],
        yAxis: [
          {
            type: "value",
            max: function(value) {
              return Math.round(value.max);
            }
          }
        ],
        series: [
          {
            name: "新三板",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data:this.neeqValue,
            itemStyle: {
              normal: {
                color: "#1B91FF",
                lineStyle: {
                  color: "#1B91FF"
                }
              }
            }
          },
          {
            name: "港股通",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data:this.hkwolunValue,
            itemStyle: {
              normal: {
                color: "#2DBE67",
                lineStyle: {
                  color: "#2DBE67"
                }
              }
            }
          },
          {
            name: "个股期权",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data:this.individualValue,
            itemStyle: {
              normal: {
                color: "#FBDD60",
                lineStyle: {
                  color: "#FBDD60"
                }
              }
            }
          }
        ]
      };
      businessChart.setOption(option);
    },
    brokerageAction() {
      var brokerageChart = echarts.init(document.getElementById("brokerage"));
      var option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend: {
          data: ["新三板", "港股通", "个股期权"],
          left: "center",
          top: "bottom",
          padding: [0, 100, 0, 0],
          itemGap:30,
          selected:{
             "新三板":true,
             "港股通":true,
             "个股期权":false,
          }
        },
        grid: {
          top: "8%",
          left: "3%",
          right: "4%",
          bottom: "10%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data:this.newYearArr,
             axisLabel:{
                 interval:Math.floor(this.yearArr.length/6),
            },
          }
        ],
        yAxis: [
          {
            type: "value",
            max: function(value) {
              return Math.round(value.max);
            }
          }
        ],
        series: [
          {
            name: "新三板",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data:this.neeqValue,
            itemStyle: {
              normal: {
                color: "#1B91FF",
                lineStyle: {
                  color: "#1B91FF"
                }
              }
            }
          },
          {
            name: "港股通",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data:this.hkwolunValue,
            itemStyle: {
              normal: {
                color: "#2DBE67",
                lineStyle: {
                  color: "#2DBE67"
                }
              }
            }
          },
          {
            name: "个股期权",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data:this.individualValue,
            itemStyle: {
              normal: {
                color: "#FBDD60",
                lineStyle: {
                  color: "#FBDD60"
                }
              }
            }
          }
        ]
      };
      brokerageChart.setOption(option);
    }
  }
};
</script>
<style lang="less" scoped>
.footer {
  margin-top: 20px;
}
</style>


