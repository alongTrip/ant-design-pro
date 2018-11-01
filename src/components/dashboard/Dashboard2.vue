<template>
  <div>
        <a-row style="margin: 0 -12px">
    <!-- 结构一 -->
        <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
          <chart-card title="前日总客户数(户)" :total="amount">
            <a-tooltip title="客户总数指在公司开立证券账户、基金账户的客户总数，包含不合规账户、小额休眠账户等不规范账户,不包含销户客户数(由于营业部升级，520原宝安服务部和220原机场服务部客户分别已转入500深一和200北一营业部，故不再重复统计)" slot="action">
              <a-icon type="info-circle-o" />
            </a-tooltip>
            <div class="chart-trend">
                  日环比
                  <span :class="['chart-trend-icon']" style="padding-left:20px;">
                     <a-icon v-if="icon_aa == true" style="color: #f5222d;" type="caret-up"/>
                     <a-icon v-if="icon_aa == false" style="color: #52c41a;" type="caret-down"/>
                  </span>
                  <span>{{Math.abs(amountDaysFrom/10000) + '%'}}</span>
            </div>
          </chart-card>
        </a-col>
        <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
          <chart-card title="前日总有效户数(户)" :total="effective">
            <a-tooltip title="有效客户指在统计时点客户资产大于等于5000元的客户" slot="action">
              <a-icon type="info-circle-o" />
            </a-tooltip>
             <div class="chart-trend">
                  日环比
                  <span :class="['chart-trend-icon']" style="padding-left:20px;">
                     <a-icon v-if="icon_bb == true" style="color: #f5222d;" type="caret-up"/>
                     <a-icon v-if="icon_bb == false" style="color: #52c41a;" type="caret-down"/>
                  </span>
                  <span>{{Math.abs(effectiveDaysFrom/10000) + '%'}}</span>
            </div>
          </chart-card>
        </a-col>
        <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
          <chart-card title="当年新开客户数(户)" :total="newCustomers">
            <a-tooltip title="不统计半开户客户(只有客户号,没有资金帐号)" slot="action">
              <a-icon type="info-circle-o" />
            </a-tooltip>
            <div class="chart-trend">
                  年同比
                  <span :class="['chart-trend-icon']" style="padding-left:20px;">
                     <a-icon v-if="icon_cc == true" style="color: #f5222d;" type="caret-up"/>
                     <a-icon v-if="icon_cc == false" style="color: #52c41a;" type="caret-down"/>
                  </span>
                  <span>{{Math.abs(newCustomersDaysFrom/100) + '%'}}</span>
            </div>
          </chart-card>
        </a-col>
        <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
          <chart-card title="当年流失客户数(户)" total="715">
            <a-tooltip title="流失客户数指存量有效客户从公司流失的客户，包括显性流失客户和隐性流失客户，其中转托管、撤销指定、销户且资金余额等于0为显性流失客户；连续1个月客户资产余额低于100元的客户为隐性流失客户（隐性流失客户数为时点值，不可累计）" slot="action">
              <a-icon type="info-circle-o" />
            </a-tooltip>
            <div class="chart-trend">
                  年同比
                  <span :class="['chart-trend-icon']" style="padding-left:20px;">
                     <a-icon v-if="icon_dd == true" style="color: #f5222d;" type="caret-up"/>
                     <a-icon v-if="icon_dd == false" style="color: #52c41a;" type="caret-down"/>
                  </span>
                  <span>{{Math.abs(customerLoseDaysFrom/100) + '%'}}</span>
            </div>
          </chart-card>
        </a-col>
    <!-- 结构二 -->
        <a-col :sm="24" :md="12"  style="padding: 12px 12px 24px;width:50%;position:relative;">
          <chart-card title="当月新开有效户(户)" :total="aNewEffective">
            <a-tooltip title="指营业部当期新开客户且截止统计时点客户资产大于等于5000的客户" slot="action">
              <a-icon type="info-circle-o" />
            </a-tooltip>
            <div class="chart-trend">
                  年同比
                  <span :class="['chart-trend-icon']" style="padding-left:10px;">
                     <a-icon v-if="icon_ee == true" style="color: #f5222d;" type="caret-up"/>
                     <a-icon v-if="icon_ee == false" style="color: #52c41a;" type="caret-down"/>
                  </span>
                  <span style="padding-right:10px;">{{Math.abs(nannualBasis_a/100) + '%'}}</span>
                  月环比
                  <span :class="['chart-trend-icon']" style="padding-left:10px;">
                     <a-icon v-if="icon_ff == true" style="color: #f5222d;" type="caret-up"/>
                     <a-icon v-if="icon_ff == false" style="color: #52c41a;" type="caret-down"/>
                  </span>
                  <span>{{Math.abs(monthCompared_a/100) + '%'}}</span>
            </div>
          </chart-card>
          <div>
              <mini-bar style="position: absolute;left:53%;top:138px;width:38%;"/>
            </div>
        </a-col>
        <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;width:50%;position:relative;">
          <chart-card title="有效户率" :total="openingEfficiency">
            <a-tooltip title="有效户数/总客户数" slot="action">
              <a-icon type="info-circle-o" />
            </a-tooltip>
            <div class="chart-trend">
                  年同比
                  <span :class="['chart-trend-icon']" style="padding-left:10px;">
                     <a-icon v-if="icon_kk == true" style="color: #f5222d;" type="caret-up"/>
                     <a-icon v-if="icon_kk == false" style="color: #52c41a;" type="caret-down"/>
                  </span>
                  <span style="padding-right:10px;">{{Math.abs(nannualBasis_b/100) + '%'}}</span>
                  月环比
                  <span :class="['chart-trend-icon']" style="padding-left:10px;">
                     <a-icon v-if="icon_ii == true" style="color: #f5222d;" type="caret-up"/>
                     <a-icon v-if="icon_ii == false" style="color: #52c41a;" type="caret-down"/>
                  </span>
                  <span>{{Math.abs(monthCompared_b/100) + '%'}}</span>
            </div>
          </chart-card>
          <div>
              <mini-area style="position: absolute;left:53%;top:138px;width:38%;"/>
          </div>
        </a-col>       
      </a-row>
     <!-- 结构三 -->
    <a-card :bordered="false" :body-style="{padding: '0'}" style="margin-top:10px;">
      <div class="salesCard" style="height:320px;">
         <div style="border-bottom:1px solid rgb(232, 232, 232);height:60px;line-height:60px;">
            <h2 style="float:left;padding-left:25px;font-size:18px;">
              新增和流失客户分析
              <a-tooltip title="存量激活有效户，指去年底资产小于5000的存量客户，当天资产大于等于5000元；当年隐性流失客户数指存量有效客户截止统计时点连续一个月资产余额低于100元的客户数；显性性流失客户数指存量有效客户在当日（月、年）内销户、转托管、撤指定客户数（单个客户发生以上多种操作时统计时只计算一次，不重复计算）；浅流失客户指存量有效户在当日资产为5000以下的非隐性、显性流失客户" slot="action">
                <a-icon type="info-circle-o" style="font-size:13px"/>
              </a-tooltip>
            </h2>
            <a-date-picker style="float:right;margin-top:15px;margin-right:55px;width:220px;"
              :defaultValue="moment('2018-10-10', dateFormat)" 
              :format="dateFormat"
              @change="onChangeRadio"
            />
         </div>
         <div id="market" style="display:flex">
             <div id="first" style="width:535px;height:240px;"></div>
             <div id="main" style="width:535px;height:240px;"></div>
         </div>
         
      </div>
    </a-card>
    <!-- 结构四 -->
    <a-card :bordered="false" :body-style="{padding: '0'}" style="margin-top:30px;">
      <div class="salesCard" style="height:460px;">
         <div style="border-bottom:1px solid rgb(232, 232, 232);height:70px;line-height:70px;">
            <h2 style="float:left;padding-left:25px;font-size:18px;">
              新增客户情况
              <a-tooltip title="新开客户为当年1月1日截止统计时点的新开发客户数，其中剔除同一证件重复开户或最近一次销户日期小于3个自然月的个人客户，及开户证件为公司组织代码（资管客户）的机构户" slot="action">
                <a-icon type="info-circle-o" style="font-size:13px"/>
              </a-tooltip>
            </h2>
         </div>
         <div style="position:relative;padding:0 20px;box-sizing: border-box;width:100%;">
         <a-tabs default-active-key="1" size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}" style="position:absolute;width:96%" @change="newCustomerAction">
          <div class="extra-wrap" slot="tabBarExtraContent">
               <a-range-picker style="float:right;margin-top:12px;margin-right:26px;width:230px;"
               :placeholder="['2017-10', '2018-09']"
                format="YYYY-MM"
                :value="value"
                :mode="mode2"
                @panelChange="handlePanelChange2"
              />
          </div>
          <a-tab-pane loading="true" tab="客户数" key="1">
            <a-row>
                <div id="three" style="width:1100px;height:300px;float:left"></div>
            </a-row>
          </a-tab-pane>
          <a-tab-pane tab="客户资产" key="2">
            <a-row>
                <div id="equityCus" style="width:1100px;height:300px;float:left;left:-40px;"></div>
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
import PageLayout from '../layout/PageLayout'
import {distributionlCardData,distributionlAddLostData,distributionlAddData} from '@/servers/customerDetails.js'
import moment from 'moment'
export default {
  name: 'WorkPlace',
  components: {
    PageLayout,
    Trend,
    MiniBar,
    MiniArea,
    ChartCard,
    ACard
    },
  data () {
    return {
      // 日期选择框
      dateFormat: 'YYYY-MM-DD',
      monthFormat: 'YYYY-MM',
      // 日期选择框
      mode1: 'time',
      mode2: ['month', 'month'],
      value: [],
      // 前日总客户数
      amount:null,
      icon_aa:null,
      amountDaysFrom:null,
      // 前日总有效户数
      effective:null,
      icon_bb:null,
      effectiveDaysFrom:null,
      // 当年新开客户数
      newCustomers:null,
      icon_cc:null,
      newCustomersDaysFrom:null,
      // 当年流失客户数
      customerLose:null,
      icon_dd:null,
      customerLoseDaysFrom:null,
      // 当月新开有效户、
      aNewEffective:null,
      icon_ee:null,
      nannualBasis_a:null,
      icon_ff:null,
      monthCompared_a:null,
      // 有效户率
      openingEfficiency:null,
      icon_kk:null,
      nannualBasis_b:null,
      icon_ii:null,
      monthCompared_b:null,
      // 新增和流失客户情况
      radioTime:'2018-10-09',
      yAxisLength:null,
      inquireYears:[],
      activateCus:[],
      newOpenCus:[],
      recessiveLoss:[],
      dominantLoss:[],
      shallowLoss:[],
      // 新增客户情况
      addStartTime:'2017-10',
      addEndTime:'2018-09',
      type:0,
      arr:[],
      timeArr:[],
      echartBarWidth:25,
      addYearArr:[],
      validCusArr:[],
      customerArr:[],
      // 新增客户资产、
      assetsYearArr:[],
      assetsValueArr:[],
    }
  },
  computed: {
    currUser () {
      return this.$store.state.account.user
     }
  },
  mounted(){
// 客户现状卡片数据
    distributionlCardData().then(result=>{
          var dat = result.data.info
          // CUST_NUM_DAY当前总客户数，
          this.amount = this.toThousands(dat.CUST_NUM_DAY.value)
          var num_a = dat.CUST_NUM_DAY.value_offset
          if(num_a > 0){
             this.icon_aa = true
          }else if(num_a < 0){
            this.icon_aa = false
          }
          this.amountDaysFrom = Math.round(num_a*10000)
          // ACTIVE_CUST_NUM_DAY当前总有效客户数，
          this.effective = this.toThousands(dat.ACTIVE_CUST_NUM_DAY.value)
          var num_b = dat.ACTIVE_CUST_NUM_DAY.value_offset
          if(num_b > 0){
             this.icon_bb = true
          }else if(num_b < 0){
            this.icon_bb = false
          }
          this.effectiveDaysFrom = Math.round(num_b*10000)
          //NEW_CUST_NUM_YEAR当年新开客户数，
          this.newCustomers = this.toThousands(dat.NEW_CUST_NUM_YEAR.value)
          var num_c = dat.NEW_CUST_NUM_YEAR.value_updown
          if(num_c > 0){
             this.icon_cc = true
          }else if(num_c < 0){
            this.icon_cc = false
          }
          this.newCustomersDaysFrom = Math.round(num_c*100)
          //LOST_CUST_YEAR_ALL当年流失客户数，
          this.customerLose = this.toThousands(dat.LOST_CUST_YEAR_ALL.value)
          var num_d = dat.LOST_CUST_YEAR_ALL.value_updown
          if(num_d > 0){
             this.icon_dd = true
          }else if(num_d < 0){
             this.icon_dd = false
          }
          this.customerLoseDaysFrom = Math.round(num_d*100)
          //NEW_ACTIVE_CUST_MONTH当月新开有效客户，
          this.aNewEffective = this.toThousands(dat.NEW_ACTIVE_CUST_MONTH.value)
          // 年
          var  numYear_a = dat.NEW_ACTIVE_CUST_MONTH.value_updown
          if(numYear_a > 0){
             this.icon_ee = true
          }else if(numYear_a < 0){
             this.icon_ee = false
          }
          this.nannualBasis_a = Math.round(numYear_a*100)
          // 月
          var  numMonth_a = dat.NEW_ACTIVE_CUST_MONTH.value_offset
          if(numMonth_a > 0){
             this.icon_ff = true
          }else if(numMonth_a < 0){
             this.icon_ff = false
          }
          this.monthCompared_a = Math.round(numMonth_a*100)
          //ACTIVE_CUST_RATE有效客户率
          this.openingEfficiency = Math.round(dat.ACTIVE_CUST_RATE.value*100)/100 + '%'
          // 年
          var  numYear_b = dat.ACTIVE_CUST_RATE.value_updown
          if(numYear_b > 0){
             this.icon_kk = true
          }else if(numYear_b < 0){
             this.icon_kk = false
          }
          this.nannualBasis_b = Math.round(numYear_b*100)
          // 月
          var  numMonth_b = dat.ACTIVE_CUST_RATE.value_offset
          if(numMonth_b > 0){
             this.icon_ii = true
          }else if(numMonth_b < 0){
             this.icon_ii = false
          }
          this.monthCompared_b = Math.round(numMonth_b*100)
      })
// 客户现状新增和流失客户数据 
    this.addLostCustomerAction();
// 新增客户数据
    this.newCustomersAction();
  },
  watch:{
    // 新增和流失客户
     radioTime(){
          if(this.radioTime != ''){
            this.addLostCustomerAction()
       }
     },
    //新增客户情况
     timeArr(){ 
        if(this.timeArr.length == 4){
            this.newCustomersAction()
        }
      },
    //新增客户情况
    type(){
        this.newCustomersAction()
    }
  },
  methods: {
      // 转化数字格式
      toThousands(num) {
        return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
      },
      onChangeRadio(date, dateString){
         this.radioTime = dateString
      },
      // 日期选择框
      moment,
      handleOpenChange1(open) {
        if (open) {
          this.mode1 = 'time'
        }
      },
      handlePanelChange1(value, mode) {
        this.mode1 = mode
      },
    // 获取年月时间
      handlePanelChange2 (value, mode) {
        this.value = value
        this.mode2 = [
          mode[0] === 'date' ? 'month' : mode[0],
          mode[1] === 'date' ? 'month' : mode[1],
        ]
       this.arr.push(value[0].format('YYYY-MM'))
       this.arr.push(value[1].format('YYYY-MM'))
       if(this.arr.length == 6 && this.arr[0] == this.arr[2]){
           this.arr.splice(2,1)
           this.arr.splice(2,1)
        }
        if(this.arr.length == 4 && this.arr[0] != this.arr[2]){
           this.arr.splice(0,1)
           this.arr.splice(0,1)
        }
        if(this.arr[1] == this.arr[3]){
           this.arr.splice(0,1)
           this.arr.splice(0,1)
        }
        if(this.arr.length == 4){
            this.timeArr = this.arr
         }
      },
  // 新增客户事件
   newCustomersAction(){
      if(this.timeArr.length == 4){
         this.addStartTime = this.timeArr[0];
         this.addEndTime = this.timeArr[3]
      }
      distributionlAddData({
       start:this.addStartTime,
       end:this.addEndTime,
       type:this.type
    }).then(result=>{
         if(this.type == 0){
          this.addYearArr = []
          this.validCusArr = []
          this.customerArr = []
              var newcusArr = Object.values(result.data.info.NEW_CUST_MONTH)
              // console.log('新增有效户',newcusArr)
              var newActiveCus = Object.values(result.data.info.NEW_ACTIVE_CUST_MONTH)
              // console.log('新增总客户数',newActiveCus)
              for(var i = 0; i<newcusArr.length ;i++){
                 let yearsArr = newcusArr[i].day
                 var arr = yearsArr.split('')
                 arr.splice(4,0,'-')
                 var str = arr.join('')
                 this.addYearArr.push(str)
                 this.validCusArr.push(newcusArr[i].value)
                 this.customerArr.push(newActiveCus[i].value)
            }
            if(20 > this.validCusArr.length > 15){
                this.echartBarWidth = 20
            }else if(30 > this.validCusArr.length > 20){
                this.echartBarWidth = 17
            }else if(30 < this.validCusArr.length){
                this.echartBarWidth = 14
            }else{
                this.echartBarWidth = 25
            }
            this.addCustomer();
         }else if(this.type == 1){
            this.assetsYearArr = []
            this.assetsValueArr = []
             var newlyAssets = Object.values(result.data.info.NEW_CUST_ASSET_MONTH)
             for(var i = 0 ; i < newlyAssets.length ; i++){
                  let yearsArr2 = newlyAssets[i].day
                   var arr2 = yearsArr2.split('')
                   arr2.splice(4,0,'-')
                   var str2 = arr2.join('')
                  this.assetsYearArr.push(str2)
                  this.assetsValueArr.push(newlyAssets[i].value)
             }
            if(20 > this.assetsValueArr.length > 15){
              this.echartBarWidth = 20
            }else if(30 > this.assetsValueArr.length > 20){
                 this.echartBarWidth = 17
            }else if(30 < this.assetsValueArr.length){
                  this.echartBarWidth = 14
            }else{
                this.echartBarWidth = 25
            }
          this.addEquityCus()
        }
    })
   },
  //新增客户和流失情况
   addLostCustomerAction(){
       distributionlAddLostData({
            time:this.radioTime
       }).then(result=>{
          var addLostData = Object.values(result.data.info) 
          let arr = []
          this.newOpenCus = []
          this.activateCus = []
          this.recessiveLoss = []
          this.dominantLoss = []
          for(var i = 0; i < addLostData.length; i++){
             for(var j = 0; j < addLostData[i].length; j++){
                arr.push(addLostData[i][j].date.substr(0,4))
                if(addLostData[i][j].type == 'ACTIVE_CUST_NUM_YEAR'){
                    this.newOpenCus.push(addLostData[i][j].value)
                }else if(addLostData[i][j].type == 'REVALUED_DAY'){
                    this.activateCus.push(addLostData[i][j].value)
                }else if(addLostData[i][j].type == 'LOST_CUST_NUM_DAY'){
                    this.recessiveLoss.push(addLostData[i][j].value)
                }else if(addLostData[i][j].type == 'LOSS_CUST_NUM_YEAR'){
                    this.dominantLoss.push(addLostData[i][j].value)
                }else if(addLostData[i][j].type == 'LOST_CUST_YEAR_SHALLOW'){
                    this.shallowLoss.push(addLostData[i][j].value)
                }
             }
          }
          var filterArr = arr.filter(function(element,index,self){
                return self.indexOf(element) === index;
           })
          let yearArr = filterArr.map(item=>{
              return item + '年'
          })
          let sortArr = []
          sortArr.push(Math.max.apply(null, this.newOpenCus))
          sortArr.push(Math.max.apply(null, this.activateCus))
          sortArr.push(Math.max.apply(null, this.recessiveLoss))
          sortArr.push(Math.max.apply(null, this.dominantLoss))
          sortArr.push(Math.max.apply(null, this.shallowLoss))
          var max2 = sortArr.sort(function(a,b){
              return b-a;
          });
          this.yAxisLength = max2
          this.inquireYears = yearArr
          this.addLostCustomer();
          this.statusCard()
     })
   }, 
  // tab 切换
  newCustomerAction(activeKey){
       if(activeKey == 1){
          this.type = 0
       }else{
          this.type = 1
       }
      var _this = this
      setTimeout(function(){
         _this.addEquityCus()
      },3000)
    },
  // 增加和流失left
  addLostCustomer(){
     var aChart = echarts.init(document.getElementById('first'));  
        var option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            
                    type : 'shadow'       
                }
            },
            legend: {
                data: ['当年新开有效户', '当年存量激活有效户'],
                x:'right',
                y:'bottom',
                itemWidth:12,
                itemHeight:12,
                itemGap:20
            },
            grid: {
                left: '5%',
                top:'10%',
                right: '0.8%',
                bottom: '12%',
                containLabel: true
            },
            xAxis:  {
                type: 'value',
                min:0,
                max:this.yAxisLength[0] + this.yAxisLength[1],
                inverse:true,
                axisLine:{
                    lineStyle:{
                        color:'#D9D9D9',
                        width:0.5
                    }
                },
                axisLabel:{
                  color:'#333',
                },
                splitLine: {
                    show: true,
                    lineStyle:{
                        width:0.5,
                        type: 'dashed'
                    }
                },
            },
            yAxis: {
                type: 'category',
                axisLine:{
                    lineStyle:{
                        color:'#D9D9D9',
                        width:0.5
                    }
                },
                axisLabel:{
                  color:'#333',
                },
                position:'right',
                axisLabel : {
                        show:false
                    },
            },
            series: [
                  {
                      name: '当年新开有效户',
                      type: 'bar',
                      stack: '总量',
                      itemStyle:{
                        normal:{
                          color:'#3BA1FF',
                        },
                      },
                      barWidth: 25,
                      data:this.newOpenCus
                  },
                  {
                    name: '当年存量激活有效户',
                    type: 'bar',
                    stack: '总量',
                    itemStyle:{
                      normal:{
                        color:'#BDDEFF',
                      },
                    },
                    barWidth: 25,
                    data:this.activateCus
                },
            ]
        }; 
      aChart.setOption(option);
    },
  // 新增和流失 right
  statusCard(){
       var myChart = echarts.init(document.getElementById('main'));
        var option = {
          tooltip : {
              trigger: 'axis',
              axisPointer : {           
                  type : 'shadow'        
              }
          },
          legend: {
              data: ['当年隐性流失客户', '当年显性流失客户','当年浅流失客户'],
              x:'20px',
              y:'bottom',
              itemWidth:12,
              itemHeight:12,
              itemGap:20
          },
          grid: {
              left: '1%',
              top:'10%',
              right: '4%',
              bottom: '12%',
              containLabel: true
          },
          xAxis:  {
              type: 'value',
              min:0,
              max:this.yAxisLength[0] + this.yAxisLength[1],
              axisLine:{
                  lineStyle:{
                      color:'#D9D9D9',
                      width:0.5
                  }
              },
              axisLabel:{
                 color:'#333',
              },
              splitLine: {
                  show: true,
                  lineStyle:{
                      width:0.5,
                      type: 'dashed'
                  }
              },
          },
          yAxis: {
              type: 'category',
              data:this.inquireYears,
               axisLine:{
                  lineStyle:{
                      color:'#D9D9D9',
                      width:0.5
                  }
              },
              axisLabel:{
                 color:'#333',
              },
          },
          series: [
              {
                  name: '当年隐性流失客户',
                  type: 'bar',
                  stack: '总量',
                  itemStyle:{
                    normal:{
                      color:'#2FC25B',
                    },
                  },
                  barWidth: 25,
                  data:this.recessiveLoss
              },
              {
                  name: '当年显性流失客户',
                  type: 'bar',
                  stack: '总量',
                  itemStyle:{
                    normal:{
                      color:'#A7E8B4',
                    },
                  },
                  barWidth: 25,
                  data:this.dominantLoss
                },
               {
                  name: '当年浅流失客户',
                  type: 'bar',
                  stack: '总量',
                  itemStyle:{
                    normal:{
                      color:'#D3F4DA',
                    },
                  },
                  barWidth: 25,
                  data:this.shallowLoss
                }
              ]
           }; 
        myChart.setOption(option);  
    },
 // 新增客户情况
  addCustomer(){
      var cyChart = echarts.init(document.getElementById('three'));
            var option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#999'
                        }
                    }
                },
                legend: {
                    data:['新增有效户','新增总客户数'],
                    x:'center',
                    y:'bottom',
                    itemWidth:12,
                    itemHeight:12,
                    itemGap:50
                },
                 grid: {
                    left: '1%',
                    top:'5%',
                    right: '0.8%',
                    bottom: '12%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data:this.addYearArr,
                        axisPointer: {
                            type: 'shadow'
                        },
                        axisLine:{
                        lineStyle:{
                            color:'#D9D9D9',
                            width:0.5
                        }
                        },
                        axisLabel:{
                           color:'#333',
                        },
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        max: function(value) {
                          return value.max;
                        },
                        splitLine: {
                        show: true,
                        lineStyle:{
                                width:0.5,
                                type: 'dashed'
                            }
                        },
                        axisLine:{
                        lineStyle:{
                            color:'#D9D9D9',
                            width:0.5
                        }
                        },
                        axisLabel:{
                           color:'#333',
                        },
                    }
                    
                ],
                series: [
                     {
                        name:'新增总客户数',
                        type:'bar',
                        data:this.validCusArr,
                        itemStyle:{
                          normal:{
                            color:'#91D5FF',
                          },
                        },
                         barWidth:this.echartBarWidth,
                         barGap:-0.5
                    },
                    {
                        name:'新增有效户',
                        type:'bar',
                        data:this.customerArr,
                        itemStyle:{
                          normal:{
                            color:'#40A9FF',
                          },
                        },
                        barWidth:this.echartBarWidth,
                        barGap:-0.5
                    }
                ]
           };
        cyChart.setOption(option);
    },
   // 新增客户资产
   addEquityCus(){
      var eqChart = echarts.init(document.getElementById('equityCus'))
      var option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#999'
                        }
                    }
                },
                legend: {
                    data:['新增有效户','新增总客户数'],
                    x:'center',
                    y:'bottom',
                    itemWidth:12,
                    itemHeight:12,
                    itemGap:50
                },
                 grid: {
                    left: '1%',
                    top:'5%',
                    right: '0.8%',
                    bottom: '12%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data:this.assetsYearArr,
                        axisPointer: {
                            type: 'shadow'
                        },
                        axisLine:{
                        lineStyle:{
                            color:'#D9D9D9',
                            width:0.5
                        }
                        },
                        axisLabel:{
                           color:'#333',
                        },
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        max: function(value) {
                          return value.max;
                        },
                        splitLine: {
                        show: true,
                        lineStyle:{
                                width:0.5,
                                type: 'dashed'
                            }
                        },
                        axisLine:{
                        lineStyle:{
                            color:'#D9D9D9',
                            width:0.5
                        }
                        },
                        axisLabel:{
                           color:'#333',
                        },
                    }
                    
                ],
                series: [
                    {
                        name:'新增有效户',
                        type:'bar',
                        data:this.assetsValueArr,
                        itemStyle:{
                          normal:{
                            color:'#40A9FF',
                          },
                        },
                        barWidth:this.echartBarWidth,
                        barGap:-0.5
                    }
                ]
           };
        eqChart.setOption(option);
    }
  }
}
</script>
<style lang="less" scoped>
#market{
  content: '';
  display: block;
  clear: both;
  padding-left:30px;
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


