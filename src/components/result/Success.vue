<template>
    <div class="customer">
      <a-row style="margin: 0 -12px">
          <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
            <chart-card title="总销售额" total="￥ 189,345">
              <a-tooltip title="指标说明" slot="action">
                <a-icon type="info-circle-o" />
              </a-tooltip>
              <div>
                <trend style="margin-right: 16px" term="同周比" :percent="12" :is-increase="true" :scale="0" />
                <trend term="日环比" :target="100" :value="89" :scale="0" />
              </div>
              <div slot="footer" class="card-footer">日均销售额<span> ￥234.56</span></div>
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
              <div slot="footer" class="card-footer">年同比<span> ￥12,423</span></div>
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
              <div slot="footer" class="card-footer">年同比<span> ￥12,423</span></div>
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
              <div slot="footer" class="card-footer">年同比<span> ￥12,423</span></div>
            </chart-card>
          </a-col>
      </a-row>
      <div style="display:flex">
        <a-card :bordered="false" :body-style="{padding: '0'}" style="margin-top:0px;width:750px;margin-right:25px;">
          <div class="salesCard" style="height:450px;float:left;">
            <div style="border-bottom:1px solid rgb(232, 232, 232);height:60px;width:750px;line-height:60px;">
                <h2 style="float:left;padding-left:25px;font-size:18px;">地域分布</h2>
            </div>
            <div id="center-map" style="width: 750px;height:390px;top:-9px;"></div>
          </div>
        </a-card>
        <a-card :bordered="false" :body-style="{padding: '0'}" style="margin-top:0px;width:362px;position:relative;">
          <div class="salesCard" style="height:450px;float:left;">
            <div style="border-bottom:1px solid rgb(232, 232, 232);height:60px;width:362px;line-height:60px;">
                <h2 style="float:left;padding-left:25px;font-size:18px;">性别年龄分布</h2>
            </div>
            <div id="sexPie" style="height:390px;width:362px;top:-89px;"></div>
            <div style="width:117px;height:112px;position:absolute;top:158px;left:123px;background:url('./static/img/sex.jpg') no-repeat;background-size:100% 88%;display: flex;align-items: end;">
               <span style="padding-top: 98px;margin-left:13px;display:block;font-size:13px;">45.00%</span>
               <span style="padding-top: 98px;margin-left:13px;display: block;font-size:13px;">55.00%</span>
            </div>
          </div>
        </a-card>
      </div>

      <div style="display:flex;margin-top:25px">
         <a-card :bordered="false" :body-style="{padding: '0'}" style="width:362px;margin-right:25px;">
          <div class="salesCard" style="height:430px;float:left;">
            <div style="border-bottom:1px solid rgb(232, 232, 232);height:60px;width:362px;line-height:60px;">
                <h2 style="float:left;padding-left:25px;font-size:18px;">职业分布</h2>
            </div>
             <div id="distribution" style="width:362px;height:370px;top:-16px;"></div>
          </div>
        </a-card>
        <a-card :bordered="false" :body-style="{padding: '0'}" style="width:750px;">
          <div class="salesCard" style="height:430px;">
            <div style="border-bottom:1px solid rgb(232, 232, 232);height:60px;line-height:60px;">
                <h2 style="float:left;padding-left:25px;font-size:18px;">新业务经营情况</h2>
            </div>
            <div style="position:relative;padding:0 20px;box-sizing: border-box;width:100%;">
                <a-tabs default-active-key="1" size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}" style="position:absolute;width:96%">
                  <div class="extra-wrap" slot="tabBarExtraContent">
                      <a-range-picker style="margin-top:11px;margin-right:10px;width:280px;"/>
                  </div>
                  <a-tab-pane loading="true" tab="交易量" key="1">
                    <a-row>
                        <div id="three" style="width:710px;height:280px;float:left"></div>
                    </a-row>
                  </a-tab-pane>
                  <a-tab-pane tab="净佣金" key="2">
                    <a-row>
                      
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
import ChartCard from "../dashboard/ChartCard";
import MiniArea from "../chart/MiniArea";
import MiniBar from "../chart/MiniBar";
import Trend from "../chart/Trend";
import echarts from "echarts";
import 'echarts-wordcloud'
import  'echarts/lib/chart/map';
import 'echarts/map/js/china.js';
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
    return {};
  },
  mounted(){
    this.distribution();
    this.property();
    this.sexPieAction()
    this.mapAction()
  },
  methods: {
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
                gridSize: 20,
                sizeRange: [20, 70],
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
                data: [{
                    name: 'Sam S Club',
                    value: 10000,
                    textStyle: {
                        normal: {
                            color: 'black'
                        },
                        emphasis: {
                            color: 'red'
                        }
                    }
                }, {
                    name: '公务员',
                    value: 6181
                }, {
                    name: '司机',
                    value: 4386
                }, {
                    name: '学生',
                    value: 4055
                }, {
                    name: '金融行业',
                    value: 2467
                }, {
                    name: '退休人员',
                    value: 2244
                }, {
                    name: '农民',
                    value: 1898
                }, {
                    name: '工人',
                    value: 1484
                }, {
                    name: '教师',
                    value: 1112
                }, {
                    name: '军人',
                    value: 965
                }, {
                    name: 'Johnny Depp',
                    value: 847
                }, {
                    name: 'Lena Dunham',
                    value: 582
                }, {
                    name: 'Lewis Hamilton',
                    value: 555
                }, {
                    name: 'Mary Ellen Mark',
                    value: 462
                }, {
                    name: 'Farrah Abraham',
                    value: 366
                }, {
                    name: 'Serena Williams',
                    value: 282
                }, {
                    name: 'NCAA baseball tournament',
                    value: 273
                }]
            }]
        };
      disChart.setOption(option)
    },
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
                        {start: 4000, color: '#C75A4A'},
                        {start: 3000, end: 4000,color: '#C99653'},
                        {start: 2000, end: 3000,color: '#AEB369'},
                        {start: 1000, end: 2000,color: '#73B691'},
                        {start: 0, end: 1000,color: '#53C6D3'},
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
                    data:[
                        {name: '北京', value: 4594.730784 },
                        {name: '天津', value: 35.770926},
                        {name: '上海', value: 1570.620579},
                        {name: '重庆', value: 1474.953973},
                        {name: '河北', value: 433.444297},
                        {name: '河南', value: 646.6282483},
                        {name: '云南', value: 1046.380364},
                        {name: '辽宁', value: 1936.106962},
                        {name: '黑龙江', value: 73.354688},
                        {name: '湖南', value: 1026.959545},
                        {name: '安徽', value: 360.2924968},
                        {name: '山东', value: 1343.395963},
                        {name: '江苏', value: 2752.23661},
                        {name: '浙江', value: 3630.057804},
                        {name: '江西', value: 963.1307133},
                        {name: '湖北', value: 2614.312957},
                        {name: '广西', value: 1009.028248},
                        {name: '甘肃', value: 42.816101},
                        {name: '山西', value: 146.3208133},
                        {name: '内蒙古', value: 173.3565988},
                        {name: '陕西', value: 873.5180778},
                        {name: '吉林', value: 96.61214},
                        {name: '福建', value: 895.6569768},
                        {name: '贵州', value: 199.765794},
                        {name: '广东', value: 7401.97582},
                        {name: '四川', value: 1060.069675},
                        {name: '海南', value: 614.3891579},
                        // {name: '台湾', value: },
                        // {name: '香港', value: },
                        // {name: '澳门', value: },
                        // {name: '西藏', value: },
                        // {name: '新疆', value: },
                        // {name: '青海', value: }
                    ]
                }
            ]
        };
        mapChart.setOption(option)
        // var timer = setInterval(function(){
        //     this.mapAction()
        // },2000)
        // mapChart.on('mousemove',function(){
        //     clearInterval(timer)
        // })
        // mapChart.on('mouseout',function(){
        //     clearInterval(timer)
        //     timer = setInterval(function(){
        //     this.mapAction()
        //   },1500)
        // }) 
    },
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
                  data: ['(0.5千)','(0.5千,2万)','(2万,10万)','(10万,100万)','(100万,10000万)','(10000万,20000万)','(20000万,1亿)'],
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
                  max: 180000,
                  interval: 30000,
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
                  data:[160000, 55000, 10000, 800, 600, 400, 200],
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
                  y: 'bottom'
              },
              color:['#3AA1FF','#4ECB73','#FBD437'],
              series : [
                  {
                      name: '客户资产分布',
                      type: 'pie',
                      radius: ['45%', '60%'],
                      center: ['50%', '60%'],
                      data:[
                          {value:225, name:'>50岁'},
                          {value:200, name:'25-50岁'},
                          {value:80, name:'<25岁'},
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
</style>
