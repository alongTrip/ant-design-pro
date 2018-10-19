<template>
  <page-layout :avatar="currUser.avatar">
    <div>
      <a-row style="margin: 0 -12px">
    <!-- 结构一 -->
        <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
          <chart-card title="当前总客户数" total="417,130">
            <a-tooltip title="指标说明" slot="action">
              <a-icon type="info-circle-o" />
            </a-tooltip>
            <div>
              <trend style="margin-right: 16px" term="较上日变化" :percent="19" :is-increase="false" :scale="0" />
              <!-- <trend term="涨跌" :target="100" :value="94" :scale="0" /> -->
            </div>
            <div slot="footer">年同比<span> ￥12,423</span></div>
          </chart-card>
        </a-col>
        <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
          <chart-card title="当前总有效户数" total="87,587">
            <a-tooltip title="指标说明" slot="action">
              <a-icon type="info-circle-o" />
            </a-tooltip>
            <div>
              <trend style="margin-right: 16px" term="较上日变化" :percent="3.45" :is-increase="true" :scale="0" />
              <!-- <trend term="涨跌" :target="100" :value="94" :scale="0" /> -->
            </div>
            <div slot="footer">年同比<span> ￥12,423</span></div>
          </chart-card>
        </a-col>
        <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
          <chart-card title="当年有效户增加数" total="1,123">
            <a-tooltip title="指标说明" slot="action">
              <a-icon type="info-circle-o" />
            </a-tooltip>
            <div>
              <trend style="margin-right: 16px" term="年同比" :percent="3.46" :is-increase="true" :scale="0" />
              <!-- <trend term="涨跌" :target="100" :value="94" :scale="0" /> -->
            </div>
            <div slot="footer">年同比<span> ￥12,423</span></div>
          </chart-card>
        </a-col>
        <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
          <chart-card title="当年有效户流失数" total="715">
            <a-tooltip title="指标说明" slot="action">
              <a-icon type="info-circle-o" />
            </a-tooltip>
            <div>
              <trend style="margin-right: 16px" term="年同比" :percent="3.46" :is-increase="true" :scale="0" />
              <!-- <trend term="涨跌" :target="100" :value="94" :scale="0" /> -->
            </div>
            <div slot="footer">年同比<span> ￥12,423</span></div>
          </chart-card>
        </a-col>
    <!-- 结构二 -->
        <a-col :sm="24" :md="12"  style="padding: 12px 12px 24px;width:50%;position:relative;">
          <chart-card title="当年客户资产总额(亿元)" total="83,128">
            <a-tooltip title="指标说明" slot="action">
              <a-icon type="info-circle-o" />
            </a-tooltip>
            <div>
              <trend style="margin-right: 16px" term="年同比" :percent="2" :is-increase="true" :scale="0" />
              <trend term="日环比" :target="100" :value="89" :scale="0" />
            </div>
            <div slot="footer">日均销售额<span>￥234.56</span></div>
          </chart-card>
          <div>
              <mini-bar style="position: absolute;left:53%;top:138px;width:40%;"/>
            </div>
        </a-col>
        <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;width:50%;position:relative;">
          <chart-card title="有效户率" total="16.89%">
            <a-tooltip title="指标说明" slot="action">
              <a-icon type="info-circle-o" />
            </a-tooltip>
            <div>
              <trend style="margin-right: 16px" term="年同比" :percent="2" :is-increase="true" :scale="0" />
              <trend term="日环比" :target="100" :value="89" :scale="0" />
            </div>
            <div slot="footer">日均销售额<span> ￥234.56</span></div>
          </chart-card>
          <div>
              <mini-area style="position: absolute;left:53%;top:138px;width:40%;"/>
          </div>
        </a-col>       
      </a-row>
     <!-- 结构三 -->
    <a-card :bordered="false" :body-style="{padding: '0'}" style="margin-top:0px;">
      <div class="salesCard" style="height:320px;">
         <div style="border-bottom:1px solid rgb(232, 232, 232);height:60px;line-height:60px;">
            <h2 style="float:left;padding-left:25px;font-size:18px;">新增和流失客户分析</h2>
            <!-- <a-date-picker /> -->
         </div>
         <div id="market" style="display:flex">
             <div id="first" style="width:535px;height:230px;"></div>
             <div id="main" style="width:535px;height:230px;"></div>
         </div>
         
      </div>
    </a-card>
    <!-- 结构四 -->
    <a-card :bordered="false" :body-style="{padding: '0'}" style="margin-top:20px;">
      <div class="salesCard" style="height:460px;">
         <div style="border-bottom:1px solid rgb(232, 232, 232);height:70px;line-height:70px;">
            <h2 style="float:left;padding-left:25px;font-size:18px;">新增客户情况</h2>
         </div>
         <div style="position:relative;padding:0 20px;box-sizing: border-box;width:100%;">
         <a-tabs default-active-key="1" size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}" style="position:absolute;width:96%">
          <div class="extra-wrap" slot="tabBarExtraContent">
               <a-range-picker />
          </div>
          <a-tab-pane loading="true" tab="客户数" key="1">
            <a-row>
             <!--  <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24"> -->
                <!-- <div id="accoun" style="height:350px;width:1124px;left:-22px;top:-18px;"></div> -->
                <div id="three" style="width:1100px;height:280px;float:left"></div>
             <!--  </a-col> -->
            </a-row>
          </a-tab-pane>
          <a-tab-pane tab="客户资产" key="2">
            <a-row>
              
            </a-row>
          </a-tab-pane>
        </a-tabs>
        </div>
      </div>
     </a-card>
    </div>
  </page-layout>
</template>

<script>
import ACard from "ant-design-vue/es/card/Card";
import ChartCard from "./ChartCard";
import MiniArea from "../chart/MiniArea";
import MiniBar from "../chart/MiniBar";
import Trend from "../chart/Trend";
import echarts from "echarts";
import PageLayout from '../layout/PageLayout'
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
    
    }
  },
  computed: {
    currUser () {
      return this.$store.state.account.user
    }
  },
  mounted () {
    this.aa();
    this.bb();
    this.cc()
  },
  methods: {
     aa(){
       var myChart = echarts.init(document.getElementById('main'));
        var option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['当年隐性流失客户', '当年显性流失客户'],
        x:'left',
        y:'bottom',
        itemWidth:12,
        itemHeight:12
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
        max:4000,
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
        data: ['2016年','2017年','2018年'],
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
            data: [1200, 1500, 1200]
        },
        {
            name: '当年显性流失客户',
            type: 'bar',
            stack: '总量',
            itemStyle:{
              normal:{
                color:'#C2EFCB',
              },
            },
            barWidth: 25,
            data: [2000, 1000, 1200]
          }
        ]
      }; 
      myChart.setOption(option);  
     },
     bb(){
       var aChart = echarts.init(document.getElementById('first'));  
        var option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ['当年隐性流失客户', '当年显性流失客户'],
                x:'right',
                y:'bottom',
                itemWidth:12,
                itemHeight:12
            },
            grid: {
                left: '3%',
                top:'10%',
                right: '0.8%',
                bottom: '12%',
                containLabel: true
            },
            xAxis:  {
                type: 'value',
                min:0,
                max:4000,
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
                data: ['2016年','2016年','2016年'],
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
                    name: '当年隐性流失客户',
                    type: 'bar',
                    stack: '总量',
                    itemStyle:{
                      normal:{
                        color:'#3BA1FF',
                      },
                    },
                    barWidth: 25,
                    data: [2000, 3300, 2500]
                }
            ]
        }; 
        aChart.setOption(option);
        },
        cc(){
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
        itemHeight:12
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
            data: ['2017年10月','2017年11月','2017年12月','2018年1月','2018年2月','2018年3月','2018年4月','2018年5月','2018年6月','2018年7月','2018年8月'],
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
            max: 150,
            interval: 50,
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
            data:[53, 60, 75, 30, 45, 28, 44, 58, 70, 40, 55],
            itemStyle:{
              normal:{
                color:'#91D5FF',
              },
            },
             barWidth: 25,
             barGap:-0.5
        },
        {
            name:'新增有效户',
            type:'bar',
            data:[20, 40, 45, 20, 35, 18, 30, 38, 40, 30, 33],
            itemStyle:{
              normal:{
                color:'#40A9FF',
              },
            },
            barWidth: 25,
            barGap:-0.5
        }
    ]
};
cyChart.setOption(option);
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
</style>
