<template>
  <!-- 客户分布页 -->
    <div class="customer">
      <a-row style="margin: 0 -12px">
          <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
            <chart-card title="前日总客户数(按身份证)" :total="totalCus">
              <a-tooltip title="指标说明" slot="action">
                <a-icon type="info-circle-o" />
              </a-tooltip>
              <div class="chart-trend">
                  日环比
                  <span :class="['chart-trend-icon']" style="padding-left:20px;">
                     <a-icon v-if="icon_a == true" style="color: #f5222d;" type="caret-up"/>
                     <a-icon v-if="icon_a == false" style="color: #52c41a;" type="caret-down"/>
                  </span>
                  <span>{{Math.abs(daysFrom_a/100) + '%'}}</span>
              </div>
              <div slot="footer" class="card-footer">
                较上一年底变化
                <a-icon v-if="index_a == 0" style="color: #f5222d;" type="caret-up"/>
                <a-icon v-if="index_a == 1" style="color: #52c41a;" type="caret-down"/>
                <span>{{totalCusChange}}</span>
              </div>
            </chart-card>
          </a-col>
          <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
            <chart-card title="前日客户资产总额(亿元)" :total="TotalAssets">
              <a-tooltip title="指标说明" slot="action">
                <a-icon type="info-circle-o" />
              </a-tooltip>
              <div class="chart-trend">
                  日环比
                  <span :class="['chart-trend-icon']" style="padding-left:20px;">
                     <a-icon v-if="icon_b == true" style="color: #f5222d;" type="caret-up"/>
                     <a-icon v-if="icon_b == false" style="color: #52c41a;" type="caret-down"/>
                  </span>
                  <span>{{Math.abs(daysFrom_b/100) + '%'}}</span>
              </div>
              <div slot="footer" class="card-footer">
                较上一年底变化
                <a-icon v-if="index_b == 0" style="color: #f5222d;" type="caret-up"/>
                <a-icon v-if="index_b == 1" style="color: #52c41a;" type="caret-down"/>
                <span>{{TotalAssetsChange}}</span>
              </div>
            </chart-card>
          </a-col>
          <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
            <chart-card title="前日信用账户数(户)" :total="creditAccounts">
              <a-tooltip title="指标说明" slot="action">
                <a-icon type="info-circle-o" />
              </a-tooltip>
              <div class="chart-trend">
                  日环比
                  <span :class="['chart-trend-icon']" style="padding-left:20px;">
                     <a-icon v-if="icon_c == true" style="color: #f5222d;" type="caret-up"/>
                     <a-icon v-if="icon_c == false" style="color: #52c41a;" type="caret-down"/>
                  </span>
                  <span>{{Math.abs(daysFrom_c/100) + '%'}}</span>
              </div>
              <div slot="footer" class="card-footer">
                较上一年底变化
                <a-icon v-if="index_c == 0" style="color: #f5222d;" type="caret-up"/>
                <a-icon v-if="index_c == 1" style="color: #52c41a;" type="caret-down"/>
                <span>{{creditAccountsChange}}</span>
              </div>
            </chart-card>
          </a-col>
          <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
            <chart-card title="前日信用账户资产总额(亿元)" :total="creditTotal">
              <a-tooltip title="指标说明" slot="action">
                <a-icon type="info-circle-o" />
              </a-tooltip>
              <div class="chart-trend">
                  日环比
                  <span :class="['chart-trend-icon']" style="padding-left:20px;">
                     <a-icon v-if="icon_d == true" style="color: #f5222d;" type="caret-up"/>
                     <a-icon v-if="icon_d == false" style="color: #52c41a;" type="caret-down"/>
                  </span>
                  <span>{{Math.abs(daysFrom_d/100) + '%'}}</span>
              </div>
              <div slot="footer" class="card-footer">
                较上一年底变化
                <a-icon v-if="index_d == 0" style="color: #f5222d;" type="caret-up"/>
                <a-icon v-if="index_d == 1" style="color: #52c41a;" type="caret-down"/>
                <span>{{creditTotalChange}}</span>
              </div>
            </chart-card>
          </a-col>
      </a-row>
      <!-- 地图的结构 -->
      <div style="display:flex">
        <a-card :bordered="false" :body-style="{padding: '0'}" style="margin-top:0px;width:750px;margin-right:25px;">
          <div class="salesCard" style="height:450px;float:left;">
            <div style="border-bottom:1px solid rgb(232, 232, 232);height:60px;width:750px;line-height:60px;">
                <h2 style="float:left;padding-left:25px;font-size:18px;">地域分布(不含前海分公司)</h2>
                <div style="float:right;width:200px;height:60px;display: flex;box-sizing:border-box;justify-content: center;align-items: center;">
                      <p :class="{'active':index == 0}" style="border-radius: 50%;width:13px;height:13px;margin-top:15px;border:2px solid #fff;
                      box-shadow: 0 0 0 1px #1890FF" @click="transformAction_a"></p>
                      <span style="padding:0 10px;">有效户</span>
                      <p :class="{'active':index == 1}" style="border-radius: 50%;width:13px;height:13px;margin-top:15px;border:2px solid #fff;
                      box-shadow: 0 0 0 1px #1890FF" @click="transformAction_b"></p>
                      <span style="padding:0 10px;">总客户</span>
                </div>
            </div>
            <div id="center-map" style="width: 750px;height:390px;top:-9px;"></div>
          </div>
        </a-card>
        <!-- 年龄性别 -->
        <a-card :bordered="false" :body-style="{padding: '0'}" style="margin-top:0px;width:362px;position:relative;">
          <div class="salesCard" style="height:450px;float:left;">
            <div style="border-bottom:1px solid rgb(232, 232, 232);height:60px;width:362px;line-height:60px;">
                <h2 style="float:left;padding-left:25px;font-size:18px;">性别年龄分布</h2>
            </div>
            <div id="sexPie" style="height:390px;width:362px;top:-89px;"></div>
            <div style="width:117px;height:112px;position:absolute;top:158px;left:123px;background:url('./static/img/sex.jpg') no-repeat;background-size:100% 88%;display: flex;align-items: end;">
               <span style="padding-top: 98px;margin-left:17px;display:block;font-size:15px;">{{boyValue}}</span>
               <span style="padding-top: 98px;margin-left:32px;display: block;font-size:15px;">{{grilValue}}</span>
            </div>
          </div>
        </a-card>
      </div>
    <!-- 职业分布 -->
      <div style="display:flex;margin-top:25px">
         <a-card :bordered="false" :body-style="{padding: '0'}" style="width:362px;margin-right:25px;">
          <div class="salesCard" style="height:430px;float:left;">
            <div style="border-bottom:1px solid rgb(232, 232, 232);height:60px;width:362px;line-height:60px;">
                <h2 style="float:left;padding-left:25px;font-size:18px;">职业分布</h2>
            </div>
             <div id="distribution" style="width:362px;height:370px;top:-16px;"></div>
          </div>
        </a-card>
    <!-- 资产分布 -->
        <a-card :bordered="false" :body-style="{padding: '0'}" style="width:750px;">
          <div class="salesCard" style="height:430px;">
            <div style="border-bottom:1px solid rgb(232, 232, 232);height:60px;line-height:60px;">
                <h2 style="float:left;padding-left:25px;font-size:18px;">资产分布</h2>
            </div>
            <div style="position:relative;padding:0 20px;box-sizing: border-box;width:100%;">
                <a-tabs default-active-key="1" size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}" style="position:absolute;width:96%" @change="changeAction">
                  <div class="extra-wrap" slot="tabBarExtraContent">
                    <a-date-picker style="margin-top:11px;margin-right:10px;width:220px;"
                      :defaultValue="moment('2018-10-10', dateFormat)" 
                      :format="dateFormat"
                      @change="onChangeRadio"
                    />
                  </div>
                  <a-tab-pane loading="true" tab="客户数" key="1">
                    <a-row>
                        <div id="three"  style="width:710px;height:280px;float:left"></div>
                    </a-row>
                  </a-tab-pane>
                  <a-tab-pane tab="客户资产" key="2">
                    <a-row>
                        <div id="customerEquity"  style="width:710px;height:280px;float:left;left:-10px;"></div>
                    </a-row>
                  </a-tab-pane>
                </a-tabs>
              </div>
          </div>
        </a-card>
      </div>
    </div>
</template>
<script>
import ACard from "ant-design-vue/es/card/Card";
import AIcon from 'ant-design-vue/es/icon/icon'
import ChartCard from "../dashboard/ChartCard";
import MiniArea from "../chart/MiniArea";
import MiniBar from "../chart/MiniBar";
import Trend from "../chart/Trend";
import echarts from "echarts";
import moment from 'moment'
import 'echarts-wordcloud'
import  'echarts/lib/chart/map';
import 'echarts/map/js/china.js';
import {customerDetailsCardData,customerDetailsMapData,customerDetailsPieData,customerDetailsCloundData,customerDetailsBarData,customerDetailsDetailData} from '@/servers/distribution.js'
export default {
  name: "Success",
   components: {
    Trend,
    MiniBar,
    MiniArea,
    ChartCard,
    ACard
    },
  data() {
    return {
       // 日期选择框
       dateFormat: 'YYYY-MM-DD',
      // 前日总客户数
        totalCus:null,
        daysFrom_a:null,
        icon_a:null,
        index_a:null,
        totalCusChange:null,
      // 前日客户资产总额，
        TotalAssets:null,
        daysFrom_b:null,
        icon_b:null,
        index_b:null,
        TotalAssetsChange:null,
      // 前日信用账户数，
        creditAccounts:null,
        daysFrom_c:null,
        icon_c:null,
        index_c:null,
        creditAccountsChange:null,
      // 前日信用账户资产总额
        creditTotal:null,
        daysFrom_d:null,
        icon_d:null,
        index_d:null,
        creditTotalChange:null,
      // 地域分布
        datas:[],
        index:0,
        Between1:null,
        Between2:null,
        Between3:null,
        Between4:null,
      //性别年龄
        ageArr:[],
        boyValue:null,
        grilValue:null,
      // 职业分布
        professionArr:[],
      //资产分布客户数
        startTime:'2018-01-10',
        type:0,
        sectionArr:[],
        numericalValue:[],
      // 资产分布客户资产
        equityArr:[],
        equityValue:[]

    };
  },
  mounted(){
    // 卡片
    customerDetailsCardData().then(result=>{
        let dat = result.data.info
        //前日总客户数，
        this.totalCus = this.toThousands_a(dat.CAP_ACCT_NUM.value)
        var value_down_a = dat.CAP_ACCT_NUM.value_updown
        var value_up_a = dat.CAP_ACCT_NUM.value_offset
        if(value_up_a > 0){
            this.icon_a = true
        }else if(value_up_a < 0){
            this.icon_a = false
        }
        this.daysFrom_a = Math.round(value_up_a*100)
        if(value_down_a > 0){
            this.index_a = 0
        }else if(value_down_a < 0){
            this.index_a = 1
        }
        this.totalCusChange = Math.round(value_down_a*100)/100 + '%'
        //前日客户资产总额， 
        this.TotalAssets = this.toThousands_b(Math.round(dat.CUST_ASSET_DAY.value*100)/100)
        var value_up_b = dat.CUST_ASSET_DAY.value_offset
        if(value_up_b > 0){
            this.icon_b = true
        }else if(value_up_b < 0){
            this.icon_b = false
        }
        this.daysFrom_b = Math.round(value_up_b*100)
        var value_down_b = dat.CUST_ASSET_DAY.value_updown 
        if(value_down_b > 0){
            this.index_b = 0
        }else if(value_down_b < 0){
            this.index_b = 1
            value_down_b = Math.abs(value_down_b)
        }
        this.TotalAssetsChange = Math.round(value_down_b*100)/100 + '%'
        //前日信用账户数，
        this.creditAccounts = this.toThousands_a(dat.FI_ACCOUNT_NUM.value)
        var value_up_c = dat.FI_ACCOUNT_NUM.value_offset
        if(value_up_c > 0){
            this.icon_c = true
        }else if(value_up_c < 0){
            this.icon_c = false
        }
        this.daysFrom_c = Math.round(value_up_c*100)
        var value_down_c = dat.FI_ACCOUNT_NUM.value_updown 
        if(value_down_c > 0){
            this.index_c = 0
        }else if(value_down_c < 0){
            this.index_c = 1
            value_down_c = Math.abs(value_down_c)
        }
        this.creditAccountsChange = Math.round(value_down_c*100)/100 + '%'
        //前日信用账户资产总额 
        this.creditTotal = this.toThousands_b(Math.round(dat.FI_ASSET.value*100)/100)
        var value_up_d = dat.FI_ASSET.value_offset
        if(value_up_d > 0){
            this.icon_d = true
        }else if(value_up_d < 0){
            this.icon_d = false
        }
        this.daysFrom_d = Math.round(value_up_d*100)
        var value_down_d = dat.FI_ASSET.value_updown 
        if(value_down_d > 0){
            this.index_d = 0
        }else if(value_down_d < 0){
            this.index_d = 1
            value_down_d = Math.abs(value_down_d)
        }
        this.creditTotalChange = Math.round(value_down_d*100)/100 + '%'
    })

    // 客户分布地图
    this.arealDistribution()

    // 性别年龄分布
    customerDetailsPieData().then(result=>{
        let datas = result.data.info
        var age_value = Object.values(result.data.info.age)
        for(var i = 0 ; i < age_value.length ; i++){
             this.ageArr.push(age_value[i].value)
        }
        var sex_value = Object.values(result.data.info.gender)
        for(var i = 0 ;i < sex_value.length;i++){
            if(sex_value[i].category_name == "女"){
                this.grilValue = Math.round(sex_value[i].value*100) + '%'
            }else if(sex_value[i].category_name == "男"){
                this.boyValue = Math.round(sex_value[i].value*100) + '%'
            }
        }
        this.sexPieAction()
    })
    // 客户分布的职业分布
    customerDetailsCloundData().then(result=>{
         let profession = Object.keys(result.data.info)
         let professionValus = Object.values(result.data.info)
         for(var i = 0; i < profession.length; i++){
              var obj = {
                  name:profession[i],
                  value:professionValus[i]
              }
             this.professionArr.push(obj)
         }
         this.distribution();
    })
    // 客户的资产分布
    this.assetsDistribution();
  },
  watch:{
    startTime(){
      if(this.startTime != ''){
        this.assetsDistribution();
      }
    }
  },
  methods: {
    moment,
    // 转化数字格式
    toThousands_a(num) {
      return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
    },
    // 转化数字格式
    toThousands_b(num) {
      return (num || 0).toString().replace(/(\d{1,3})(?=(?:\d{3})+\.)/g,'$1,')
    },
    // 获取时间区间
    onChangeRadio(date, dateString){
       this.startTime = dateString
    },
    changeAction(activeKey){
       if(activeKey == 1){
           this.type = 0
       }else{
          this.type = 1
       }
       this.assetsDistribution();
    },
    // 客户分布的职业分布
    distribution(){
        var disChart = echarts.init(document.getElementById('distribution'));
        var option = {
            tooltip: {},
            grid: {
              top: '1%',
              containLabel: true
          },
            series: [{
                type: 'wordCloud',
                gridSize: 5,
                sizeRange: [20, 60],
                rotationRange: [0, 0],
                shape: 'circle',
                textStyle: {
                    normal: {
                        color: function() {
                            return 'rgb(' + [
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160)
                            ].join(',') + ')';
                        }
                    },
                    emphasis: {
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                data:this.professionArr,
            }]
        };
      disChart.setOption(option)
    },
    // 客户分布的区域地图分布
    mapAction(){
      var mapChart= echarts.init(document.getElementById("center-map"))
       function randomValue() {
        return Math.round(Math.random()*1000);
        }
        var option = {
            tooltip: {
                textStyle:{
                    fontSize:10,
                }
            },
            dataRange: {
                  splitList: [
                        {start: this.Between3, color: '#C75A4A'},
                        // {start: 3000, end: 4000,color: '#C99653'},
                        {start: this.Between2, end: this.Between3,color: '#AEB369'},
                        {start: this.Between1, end: this.Between2,color: '#73B691'},
                        {start: 0, end: this.Between1,color: '#53C6D3'},
                    ],
                  inRange: {
                     color: ['rgb(208, 106, 77)','rgb(53, 189, 208)']
                  },
                  right:'20px',
                  bottom:'20px',
                  textStyle:{
                        color:'rgb(36, 36, 37)',
                        fontSize:11
                  },
              },
            geo: {
                map: 'china',
                // 是否开启鼠标缩放和平移
                roam: true,
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            // 修改文字颜色
                            color: 'rgb(36, 36, 37)'
                        }
                    },
                    emphasis: {
                        show: true,
                        // 修改选中后的文字颜色
                        textStyle:{
                            color:'rgb(36, 36, 37)'
                        }
                    }
                },
                // 改变地图的初始大小
                zoom: 1.1,
                regions: [
                    {
                        name: '南海诸岛',
                        label:{
                            normal: {
                            show: false,
                          },
                        },
                        itemStyle: {
                            normal: {
                                opacity: 0,
                                label: {
                                    show: false
                                },
                            },
                        }
                    },
                ],
                itemStyle: {
                    normal:{
                        //区域图的背景颜色
                        // areaColor: 'rgb(53, 189, 208)',
                        borderColor: 'rgba(0, 0, 0, 0.2)'
                    },
                    emphasis:{
                        // 选中后的背景高亮颜色
                        areaColor: 'rgb(223, 232, 79)',
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        shadowBlur: 20,
                        borderWidth: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            },
            series : [
                {
                    name: '佣金收入(万元)',
                    type: 'map',
                    roam: true,
                    coordinateSystem: 'geo',
                    geoIndex: 0,
                    selectedMode : 'multiple',
                    // tooltip: {show: false},
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            color: '#fff',
                            show: true
                        },
                        emphasis: {
                            show: true,
                            areaColor: 'red'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#F06C00'
                        },
                    },
                    data:this.datas,
                }
            ]
        };
        mapChart.setOption(option)
    },
    transformAction_a(){
       this.index = 0
       this.arealDistribution()
    },
    transformAction_b(){
       this.index = 1
       this.arealDistribution()
    },
    arealDistribution(){
        customerDetailsMapData({
           type:this.index
        }).then(result=>{
           this.datas = []
           let data = Object.values(result.data.info)
           for(var i = 0; i < data.length;i++){
               var obj = {
                   name: data[i].prov_code,
                   value: data[i].num
               }
               this.datas.push(obj)
           }
           if(this.index == 0){
              this.Between1 = 20000
              this.Between2 = 40000
              this.Between3 = 80000
           }else{
              this.Between1 = 20000
              this.Between2 = 40000
              this.Between3 = 80000
           }
            this.mapAction();
        })
    },
    // 客户的资产分布客户数
    property(){
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
          grid: {
              left: '1%',
              top: '2%',
              right: '0.8%',
              bottom: '10%',
              containLabel: true
          },
          xAxis: [
              {
                  type: 'category',
                  data:["[0,5千)", "[5千,2万)", "[2万,10万)", "[10万,30万)", "[30万,50万)", "[50万,1百万)", "[1百万,1千万)", "[1千万,2千万)", "[2千万,1亿)", "[1亿,+∞)"],
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
                    fontStyle:8,
                    rotate:45
                  },
              }
          ],
          yAxis: [
              {
                  type: 'value',
                  max:function(value){
                    return value.max
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
                  name:'总客户数',
                  type:'bar',
                  data:this.numericalValue,
                  itemStyle:{
                    normal:{
                      color:'#1890FF',
                    },
                  },
                  barWidth: 28,
              }
          ]
      };
      cyChart.setOption(option);
    },
    // 客户资产
    customerEquity(){
       var eqChart = echarts.init(document.getElementById('customerEquity'));
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
          grid: {
              left: '0%',
              top: '2%',
              right: '0.8%',
              bottom: '10%',
              containLabel: true
          },
          xAxis: [
              {
                  type: 'category',
                   data:["[0,5千)", "[5千,2万)", "[2万,10万)", "[10万,30万)", "[30万,50万)", "[50万,1百万)", "[1百万,1千万)", "[1千万,2千万)", "[2千万,1亿)", "[1亿,+∞)"],
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
                    fontStyle:8,
                    rotate:45
                  },
              }
          ],
          yAxis: [
              {
                  type: 'value',
                  max:function(value){
                    return value.max
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
                  name:'客户资产',
                  type:'bar',
                  data:this.equityValue,
                  itemStyle:{
                    normal:{
                      color:'#1890FF',
                    },
                  },
                  barWidth: 28,
              }
          ]
      };
      eqChart.setOption(option);
    },
    assetsDistribution(){
      customerDetailsBarData({
        time:this.startTime,
        type:this.type
     }).then(result=>{
        this.numericalValue = []
        this.sectionArr = []
        this.equityValue = []
        this.equityArr = []
        let valueArr = Object.values(result.data.info)
        for(var i = 0; i < valueArr.length; i++){
             if(this.type == 0){
                 this.numericalValue.push(valueArr[i].value)
                 this.sectionArr.push(valueArr[i].category_name)
             }else if(this.type == 1){
                 this.equityValue.push(valueArr[i].value)
                 this.equityArr.push(valueArr[i].category_name)
             }            
        }
        if(this.type == 0){
           this.property();
        }else if(this.type == 1){
          this.customerEquity()
        }
      })
    },
    // 性别年龄分布
    sexPieAction(){
        var pieChart = echarts.init(document.getElementById('sexPie'));
        var option = {
              tooltip : {
                  trigger: 'item',
                  formatter: "{a} <br/>{b} : {c} ({d}%)",
                  textStyle:{
                      fontSize:10,
                  },
              },
               grid: {
                  // left: '1%',
                  // top: '2%',
                  // right: '0.8%',
                  bottom: '20%',
                  containLabel: true
                },
              legend:{
                  data:['>50岁','25-50岁','<25岁'],
                  x: 'center',
                  y: 'bottom',
                  itemWidth:20,
                  itemHeight:14 
              },
              color:['#3AA1FF','#4ECB73','#FBD437'],
              series : [
                  {
                      name: '客户资产分布',
                      type: 'pie',
                      radius: ['45%', '60%'],
                      center: ['50%', '60%'],
                      data:[
                          {value:this.ageArr[0], name:'>50岁'},
                          {value:this.ageArr[1], name:'25-50岁'},
                          {value:this.ageArr[2], name:'<25岁'},
                      ],
                      itemStyle: {
                          emphasis: {
                              shadowBlur: 10,
                              shadowOffsetX: 0,
                              shadowColor: 'rgba(0, 0, 0, 0.5)'
                          }
                      }
                  }
              ]
          };
        pieChart.setOption(option);
    }
  } 
};
  
</script>

<style scoped>
.card-footer{
    border-top: 1px solid #e8e8e8;
    padding-top: 9px;
    margin-top: 8px;
}
.icon-up{
   color: #f5222d;
}
.icon-down{
   color: #52c41a;
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
.active{
  background: #1890FF;
}
</style>
