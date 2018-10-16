<template>
  <div>
    <a-row style="margin: 0 -12px">
    <!-- 结构一 -->
      <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
        <chart-card title="前日股基交易量" total="126,560">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <trend style="margin-right: 16px" term="较上日变化" :percent="19" :is-increase="true" :scale="0" />
            <!-- <trend term="涨跌" :target="100" :value="94" :scale="0" /> -->
          </div>
          <div slot="footer">年同比<span> ￥12,423</span></div>
        </chart-card>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
        <chart-card title="前日信用账户交易量" total="87,587">
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
        <chart-card title="前日市场份额" total="7.03%">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <trend style="margin-right: 16px" term="较上日变化" :percent="3" :is-increase="true" :scale="0" />
            <!-- <trend term="涨跌" :target="100" :value="94" :scale="0" /> -->
          </div>
          <div slot="footer">年同比<span> ￥12,423</span></div>
        </chart-card>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
        <chart-card title="前日股基净佣金率" total="7.03%">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <trend style="margin-right: 16px" term="排名" :percent="3" :is-increase="true" :scale="0" />
            <!-- <trend term="涨跌" :target="100" :value="94" :scale="0" /> -->
          </div>
          <div slot="footer">年同比<span> ￥12,423</span></div>
        </chart-card>
      </a-col>
      <!-- 结构二 -->
       <a-col :sm="24" :md="12"  style="padding: 12px 12px 24px;width:50%;position:relative;">
        <chart-card title="前日股基净佣金收入(万元)" total="62,475">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <trend style="margin-right: 16px" term="年同比" :percent="12" :is-increase="true" :scale="0" />
            <trend term="日环比" :target="100" :value="89" :scale="0" />
          </div>
          <div slot="footer">日均销售额<span>￥234.56</span></div>
        </chart-card>
        <div>
            <mini-bar style="position: absolute;left:53%;top:138px;width:40%;"/>
          </div>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;width:50%;position:relative;">
        <chart-card title="前日两融息费收入" total="62,475">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <trend style="margin-right: 16px" term="年同比" :percent="12" :is-increase="true" :scale="0" />
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
      <div class="salesCard" style="height:500px;">
         <div style="border-bottom:1px solid rgb(232, 232, 232);height:70px;line-height:70px;">
            <h2 style="float:left;padding-left:25px;font-size:18px;">市场份额</h2>
            <a-range-picker @change="onChange" style="float:right;padding-top:10px;margin-right:25px;"/>
         </div>
         <div id="market" style="height:400px;width:1124px;"></div>
         
      </div>
    </a-card>
    <!-- 结构四 -->
    <a-card :bordered="false" :body-style="{padding: '0'}" style="margin-top:20px;">
      <div class="salesCard" style="height:500px;">
         <div style="border-bottom:1px solid rgb(232, 232, 232);height:70px;line-height:70px;">
            <h2 style="float:left;padding-left:25px;font-size:18px;">账户价值量分析</h2>
         </div>
         <div style="position:relative;padding:0 20px;box-sizing: border-box;width:100%;">
         <a-tabs default-active-key="1" size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}" style="position:absolute;width:96%">
          <div class="extra-wrap" slot="tabBarExtraContent">
               <a-range-picker @change="onChange" />
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
         <a-tabs default-active-key="1" size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}" style="position:absolute;width:96%">
          <div class="extra-wrap" slot="tabBarExtraContent">
               <a-range-picker @change="onChange" />
          </div>
          <a-tab-pane loading="true" tab="交易量" key="1">
            <a-row>
             <!--  <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24"> -->
               <div id="business" style="height:350px;width:1124px;left:-22px;top:-18px;"></div>
              <!-- </a-col> -->
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
</template>

<script>
import ACard from "ant-design-vue/es/card/Card";
import ChartCard from "./ChartCard";
import MiniArea from "../chart/MiniArea";
import MiniBar from "../chart/MiniBar";
import Trend from "../chart/Trend";
import echarts from "echarts";
// import {} from './dashServer.js'
export default {
  name: "dashboard",
  data() {
    return {
        data:[],

    };
  },
  components: {
    Trend,
    MiniBar,
    MiniArea,
    ChartCard,
    ACard
  },
  mounted() {
    this.initChart();
    this.initBusinessChart();
    this.initMarketChart();
  },
  methods: {
    onChange(date, dateString) {
      console.log(date, dateString);
    },
    // 市场份额
    initMarketChart() {
      this.myChart = echarts.init(document.getElementById("market"));
      var aa = [
        "2015-01-01",
        "2015-01-02",
        "2015-01-03",
        "2015-01-04",
        "2015-01-05",
        "2015-01-06",
        "2015-01-07",
        "2015-01-08",
        "2015-01-09"
      ];
      var bb = [
        0.05,
        0.05,
        0.06,
        0.03,
        0.01,
        0.04,
        0.07,
        0.1,
        0.03,
        0.05,
        0.09,
        0.07
      ];
      var option = {
        tooltip: {
          trigger: "axis"
        },
        xAxis: {
          data: aa
        },
        yAxis: {
          splitLine: {
            show: false
          },
          max: function(value) {
            return (value.max = 0.12);
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
              lte: 0.02,
              color: "#096"
            },
            {
              gt: 0.02,
              lte: 0.04,
              color: "#ffde33"
            },
            {
              gt: 0.02,
              lte: 0.06,
              color: "#ff9933"
            },
            {
              gt: 0.06,
              lte: 0.08,
              color: "#cc0033"
            },
            {
              gt: 0.08,
              lte: 0.1,
              color: "#660099"
            },
            {
              gt: 0.1,
              color: "#7e0023"
            }
          ],
          outOfRange: {
            color: "#999"
          }
        },
        series: {
          name: "score",
          type: "line",
          data: bb,
          markLine: {
            silent: true,
            data: [
              {
                yAxis: 0.02
              },
              {
                yAxis: 0.04
              },
              {
                yAxis: 0.06
              },
              {
                yAxis: 0.08
              },
              {
                yAxis: 0.1
              }
            ]
          }
        }
      };
      this.myChart.setOption(option);
    },
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
          top: "bottom"
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
            data: [
              "2017年10月",
              "",
              "2017年12月",
              "",
              "2018年2月",
              "",
              "2018年4月",
              "",
              "2018年6月",
              "",
              "2018年8月"
            ]
          }
        ],
        yAxis: [
          {
            type: "value",
            max: "120000"
          }
        ],
        series: [
          {
            name: "信用账户",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: [
              38000,
              39000,
              40000,
              20000,
              39000,
              36000,
              38000,
              9000,
              12000,
              11000,
              30000
            ],
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
            data: [
              50000,
              20000,
              50000,
              18000,
              50000,
              30000,
              21000,
              20000,
              50000,
              10000,
              40000
            ],
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
          padding: [0, 100, 0, 0]
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
            data: [
              "2017年10月",
              "",
              "2017年12月",
              "",
              "2018年2月",
              "",
              "2018年4月",
              "",
              "2018年6月",
              "",
              "2018年8月"
            ]
          }
        ],
        yAxis: [
          {
            type: "value",
            max: "120000"
          }
        ],
        series: [
          {
            name: "新三板",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: [
              38000,
              39000,
              40000,
              20000,
              39000,
              36000,
              38000,
              9000,
              12000,
              11000,
              30000
            ],
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
            data: [
              50000,
              20000,
              50000,
              18000,
              50000,
              30000,
              21000,
              20000,
              50000,
              10000,
              40000
            ],
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
            data: [
              20000,
              20000,
              30000,
              18000,
              30000,
              30000,
              21000,
              20000,
              50000,
              10000,
              40000
            ],
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
    }
  }
};
</script>
<style lang="less" scoped>
.footer {
  margin-top: 20px;
}
</style>


