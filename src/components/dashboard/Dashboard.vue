<template>
  <div>
    <a-row style="margin: 0 -12px">
    <!-- 结构一 -->
      <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
        <chart-card title="前日股基交易量(万元)" :total="stockData">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div class="chart-trend">
              日环比
              <span :class="['chart-trend-icon']" style="padding-left:20px;">
                 <a-icon v-if="stockIcon == true" style="color: #f5222d;" type="caret-up"/>
                 <a-icon v-if="stockIcon == false" style="color: #52c41a;" type="caret-down"/>
              </span>
              <span>{{Math.abs(stockChange/100) + '%'}}</span>
          </div>
        </chart-card>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
        <chart-card title="前日信用账户交易量(万元)" :total="creditData">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div class="chart-trend">
              日环比
              <span :class="['chart-trend-icon']" style="padding-left:20px;">
                 <a-icon v-if="creditIcon == true" style="color: #f5222d;" type="caret-up"/>
                 <a-icon v-if="creditIcon == false" style="color: #52c41a;" type="caret-down"/>
              </span>
              <span>{{Math.abs(creditChange/100) + '%'}}</span>
          </div>
        </chart-card>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
        <chart-card title="前日市场份额" :total="marketData">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div class="chart-trend">
              日环比
              <span :class="['chart-trend-icon']" style="padding-left:20px;">
                 <a-icon v-if="marketIcon == true" style="color: #f5222d;" type="caret-up"/>
                 <a-icon v-if="marketIcon == false" style="color: #52c41a;" type="caret-down"/>
              </span>
              <span>{{Math.abs(marketChange/100) + '%'}}</span>
          </div>
        </chart-card>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
        <chart-card title="前日股基净佣金率" :total="fundData">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div class="chart-trend">
              日环比
              <span :class="['chart-trend-icon']" style="padding-left:20px;">
                 <a-icon v-if="marketIcon == true" style="color: #f5222d;" type="caret-up"/>
                 <a-icon v-if="marketIcon == false" style="color: #52c41a;" type="caret-down"/>
              </span>
              <span>{{Math.abs(fundChange/100) + '%'}}</span>
          </div>
        </chart-card>
      </a-col>
      <!-- 结构二 -->
       <a-col :sm="24" :md="12"  style="padding: 12px 12px 24px;width:50%;position:relative;">
        <chart-card title="当月股基净佣金收入(万元)" :total="stockFundData">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
         <div class="chart-trend">
              月环比
              <span :class="['chart-trend-icon']" style="padding-left:10px;">
                 <a-icon v-if="stockFundIcon == true" style="color: #f5222d;" type="caret-up"/>
                 <a-icon v-if="stockFundIcon == false" style="color: #52c41a;" type="caret-down"/>
              </span>
              <span style="padding-right:10px;">{{yearChange}}</span>
              年同比
              <span :class="['chart-trend-icon']" style="padding-left:10px;">
                 <a-icon v-if="stockDataIcon == true" style="color: #f5222d;" type="caret-up"/>
                 <a-icon v-if="stockDataIcon == false" style="color: #52c41a;" type="caret-down"/>
              </span>
              <span>{{dateChange}}</span>
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
           <div class="chart-trend">
              月环比
              <span :class="['chart-trend-icon']" style="padding-left:10px;">
                 <a-icon v-if="meltIcon == true" style="color: #f5222d;" type="caret-up"/>
                 <a-icon v-if="meltIcon == false" style="color: #52c41a;" type="caret-down"/>
              </span>
              <span style="padding-right:10px;">{{meltYearChange}}</span>
              年同比
              <span :class="['chart-trend-icon']" style="padding-left:10px;">
                 <a-icon v-if="meltDataIcon == true" style="color: #f5222d;" type="caret-up"/>
                 <a-icon v-if="meltDataIcon == false" style="color: #52c41a;" type="caret-down"/>
              </span>
              <span>{{meltDateChange}}</span>
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
         <a-tabs default-active-key="1" size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}" style="position:absolute;width:96%" @change="mainBusinessChange">
          <div class="extra-wrap" slot="tabBarExtraContent">
               <a-range-picker style="float:right;padding-top:12px;margin-right:40px;width:280px"  
                  @change="onChange_b" 
                  :defaultValue="[moment('2017-10-11', dateFormat), moment('2018-10-10', dateFormat)]"
                  :format="dateFormat"
                />
          </div>
          <a-tab-pane loading="true" tab="交易量" key="1">
            <a-row>
               <div id="accoun" style="height:350px;width:1124px;left:-22px;top:-18px;"></div>
            </a-row>
          </a-tab-pane>
          <a-tab-pane tab="净佣金收入" key="2">
            <a-row>
               <div id="commission" style="height:350px;width:1124px;left:-22px;top:-18px;"></div>
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
              <a-range-picker style="float:right;margin-top:12px;margin-right:26px;width:230px;"
                :placeholder="['2017-10', '2018-09']"
                format="YYYY-MM"
                :value="value"
                :mode="mode2"
                @panelChange="handlePanelChange2"
              />
              </div>
              <a-tab-pane loading="true" tab="交易量" key="1">
                <a-row>
                  <div id="business" style="height:350px;width:1124px;left:-22px;top:-18px;"></div>
                </a-row>
              </a-tab-pane>
              <a-tab-pane tab="净佣金" key="2">
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
       mode2: ['month', 'month'],
       value: [],
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
       // 主要业务经营情况
       accountStartTime:'2017-10-11',
       accountEndTime:'2018-10-10',
       mainType:0,
       yearArr:[],
       creditArr:[],
       commonArr:[],
       creditArr_b:[],
       commonArr_b:[],
       // 新业务经营情况
       newStartTime:'2017-10',
       newEndTime:'2018-09',
       newYearArr:[],
       neeqValue:[],
       hkwolunValue:[],
       individualValue:[],
       // 新业务经营情况净佣金
       timeArr:[],
       brokerageTimeArr:[],
       brokerageType:0,
       neeqValue_b:[],
       hkwolunValue_b:[],
       individualValue_b:[],
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
        this.yearChange = Math.round(compare5*100) == 0 ? '--' :  Math.abs(Math.round(compare5*100)/100) + '%'
        var compare6 = datas.fi_netcom_mon.value_updown
        if(compare6 > 0){
           this.stockDataIcon = true
        }else if(compare6 < 0){
           this.stockDataIcon = false
        }
        this.dateChange = Math.round(compare6*100) == 0 ? '--' :  Math.abs(Math.round(compare6*100)/100) + '%'
        // 6
        this.meltData =  this.toThousands(Math.round(datas.netcom_mon.value)).toString()
        var compare7 = datas.netcom_mon.value_offset
        if(compare7 > 0){
           this.meltIcon = true
        }else if(compare7 < 0){
           this.meltIcon = false
        }
        this.meltYearChange = Math.round(compare7*100) == 0 ? '--' :  Math.abs(Math.round(compare7*100)/100) + '%'
        var compare8 = datas.netcom_mon.value_updown
        if(compare8 > 0){
           this.meltDataIcon = true
        }else if(compare8 < 0){
           this.meltDataIcon = false
        }
        this.meltDateChange = Math.round(compare8*100) == 0 ? '--' : Math.abs(Math.round(compare8*100)/100) + '%'
      });
    // 市场份额
    this.marketSharesAction()
    //账户价值量分析 
    this.mainBusinessAction();
    // 新业务经营情况
    this.newBusinessAction()
  },
  watch: {
     marketStartTime(){
      if(this.marketStartTime != ""){
          this.marketSharesAction()
        }
     },
     accountStartTime(){
       if(this.accountStartTime != ''){
         this.mainBusinessAction()
       }
     },
     mainType(){
         this.mainBusinessAction()
     },
     brokerageType(){
        this.newBusinessAction()
     },
     brokerageTimeArr(){
        this.newBusinessAction()
     }
  },
  methods: {
    moment,
    mainBusinessChange(activeKey){
        if(activeKey == 1){
           this.mainType = 0
        }else{
           this.mainType = 1
        }
    },
    addChange(activeKey){
       if(activeKey == 1){
          this.brokerageType = 0
       }else{
          this.brokerageType = 1
       }
       this.newBusinessAction()
    },
    // 转化数字格式
    toThousands(num) {
      return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
    },
    // 获取日期区间
    onChange_a(date, dateString) {
       this.marketStartTime = dateString[0]
       this.marketEndTime = dateString[1]
    },
    onChange_b(date, dateString) {
        this.accountStartTime = dateString[0]
        this.accountEndTime = dateString[1]
    },
    handlePanelChange2 (value, mode) {
        this.value = value
        this.mode2 = [
          mode[0] === 'date' ? 'month' : mode[0],
          mode[1] === 'date' ? 'month' : mode[1],
        ]
       this.timeArr.push(value[0].format('YYYY-MM'))
       this.timeArr.push(value[1].format('YYYY-MM'))
       if(this.timeArr.length == 6 && this.timeArr[0] == this.timeArr[2]){
           this.timeArr.splice(2,1)
           this.timeArr.splice(2,1)
        }
        if(this.timeArr.length == 4 && this.timeArr[0] != this.timeArr[2]){
           this.timeArr.splice(0,1)
           this.timeArr.splice(0,1)
        }
        if(this.timeArr[1] == this.timeArr[3]){
           this.timeArr.splice(0,1)
           this.timeArr.splice(0,1)
        }
        if(this.timeArr.length == 4){
            this.brokerageTimeArr = this.timeArr
         }
      },
    // 主要业务
    mainBusinessAction(){
         accountValueData({
         start:this.accountStartTime,
         end:this.accountEndTime,
         type:this.mainType
      }).then(result=>{
        this.yearArr = []
        this.accountData = []
        this.commonData = []
        this.accountData_b = []
        this.commonData_b = []
        if(this.mainType == 0){
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
         }else{
            var accountData_b = result.data.data.info.netcom_day
            // 普通账户
            var commonData_b = result.data.data.info.fi_netcom_day
            // 信用账户
            for(var i = 0 ; i < accountData_b.length ; i++){
                var bb = accountData_b[i].date
                var arr2 = bb.split('')
                arr2.splice(4,0,'-')
                arr2.splice(7,0,'-')
                var str2 = arr2.join('')
                this.yearArr.push(str2)
                this.creditArr_b.push(accountData_b[i].value)
                this.commonArr_b.push(commonData_b[i].value)
            }
            // 主要业务情况
            this.commissionAction()
         }
      });
    },
    // 市场份额请求
    marketSharesAction(){
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
    // 主要业务经营佣金收入
    commissionAction(){
      var commissionChart = echarts.init(document.getElementById("commission"));
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
            data:this.creditArr_b,
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
            data:this.commonArr_b,
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
     commissionChart.setOption(option);
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
    // 新业务净佣金情况
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
            data:this.neeqValue_b,
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
            data:this.hkwolunValue_b,
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
            data:this.individualValue_b,
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
    },
    // 新业务请求
    newBusinessAction(){
      if(this.brokerageTimeArr.length == 4){
         this.newStartTime = this.brokerageTimeArr[0]
         this.newEndTime = this.brokerageTimeArr[3]
      }
      businessOperationData({
          start:this.newStartTime,
          end:this.newEndTime,
          type:this.brokerageType
      }).then(result=>{
        this.newYearArr = []
        this.neeqValue = []
        this.hkwolunValue = []
        this.individualValue = []
        this.neeqValue_b = []
        this.hkwolunValue_b = []
        this.individualValue_b = []
        var newBusiness = result.data.data.info
        if(this.brokerageType == 0){
           var threeBoard =  newBusiness.NTB_TRD_AMT_MONTH
           //NTB_TRD_AMT_MONTH新三板交易量
           var hkwolun =  newBusiness.HKT_TRD_AMT_MONTH
           //HKT_TRD_AMT_MONTH港股通交易量
           var stockOptions =  newBusiness.SO_TRD_AMT_MONTH
           //SO_TRD_AMT_MONTH个股交易量
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
          this.initBusinessChart();
          }else{
             var threeBoard_b =  newBusiness.NTB_NET_COMM_MONTH
             //NTB_NET_COMM_MONTH新三板净佣金 
             var hkwolun_b =  newBusiness.HKT_NET_COMM_MONTH
             //HKT_NET_COMM_MONTH港股通净佣金
             var stockOptions_b =  newBusiness.SO_NET_COMM_MONTH
             //SO_NET_COMM_MONTH个股期权净佣金
             for(var i = 0 ; i < threeBoard_b.length ; i++){
                  var dd = threeBoard_b[i].date
                  var arr4 = dd.split('')
                  arr4.splice(4,0,'-')
                  arr4.splice(7,0,'-')
                  var str4 = arr4.join('')
                  this.newYearArr.push(str4)
                  this.neeqValue_b.push(threeBoard_b[i].value)
                  this.hkwolunValue_b.push(hkwolun_b[i].value)
                  this.individualValue_b.push(stockOptions_b[i].value)
             }
             this.brokerageAction()
          }
       })
    }
  }
};
</script>
<style lang="less" scoped>
.footer {
  margin-top: 20px;
}
.chart-trend{
  display: inline-block;
  font-size: 14px;
  line-height: 22px;
  .chart-trend-icon{
    font-size: 12px;
    &.up{
      color: #f5222d;
    }
    &.down{
      color: #52c41a;
    }
  }
}
</style>


