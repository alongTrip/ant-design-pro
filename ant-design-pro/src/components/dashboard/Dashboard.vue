<template>
  <div>
    <a-row style="margin: 0 -12px">
    <!-- 结构一 -->
      <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
        <chart-card title="总收入(年)" total="126,560">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <trend style="margin-right: 16px" term="排名" :percent="22" :is-increase="true" :scale="0" />
            <trend term="涨跌" :target="100" :value="94" :scale="0" />
          </div>
          <div slot="footer">年同比<span> ￥12,423</span></div>
        </chart-card>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
        <chart-card title="总收入(年)" total="126,560">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <trend style="margin-right: 16px" term="排名" :percent="22" :is-increase="true" :scale="0" />
            <trend term="涨跌" :target="100" :value="94" :scale="0" />
          </div>
          <div slot="footer">年同比<span> ￥12,423</span></div>
        </chart-card>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
        <chart-card title="总收入(年)" total="126,560">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <trend style="margin-right: 16px" term="排名" :percent="22" :is-increase="true" :scale="0" />
            <trend term="涨跌" :target="100" :value="94" :scale="0" />
          </div>
          <div slot="footer">年同比<span> ￥12,423</span></div>
        </chart-card>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
        <chart-card title="总收入(年)" total="126,560">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <trend style="margin-right: 16px" term="排名" :percent="22" :is-increase="true" :scale="0" />
            <trend term="涨跌" :target="100" :value="94" :scale="0" />
          </div>
          <div slot="footer">年同比<span> ￥12,423</span></div>
        </chart-card>
      </a-col>
      <!-- 结构二 -->
       <a-col :sm="24" :md="12"  style="padding: 12px 12px 24px;width:50%;position:relative;">
        <chart-card title="总销售额" total="￥ 189,345">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <trend style="margin-right: 16px" term="同周比" :percent="12" :is-increase="true" :scale="0" />
            <trend term="日环比" :target="100" :value="89" :scale="0" />
          </div>
          <div slot="footer">日均销售额<span>￥234.56</span></div>
        </chart-card>
        <div>
            <mini-bar style="position: absolute;left:53%;top:138px;width:40%;"/>
          </div>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;width:50%;position:relative;">
        <chart-card title="总销售额" total="￥ 189,345">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <trend style="margin-right: 16px" term="同周比" :percent="12" :is-increase="true" :scale="0" />
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
   <a-card :bordered="false" :body-style="{padding: '24px'}" style="margin-top:20px;">
      <div class="salesCard">
        <a-tabs default-active-key="1" size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}">
          <div class="extra-wrap" slot="tabBarExtraContent">
            <a-range-picker @change="onChange" />
          </div>
          <a-tab-pane loading="true" tab="总收入" key="1">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                <h3>总收入变化</h3>
                <div>
                  <v-chart :forceFit="true" :height="height2" :data="data2">
                    <v-tooltip />
                    <v-axis />
                    <v-legend />
                    <v-bar position="月份*月均降雨量" color="name" :adjust="adjust" />
                  </v-chart>
                </div>
              </a-col>
              <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                <ranking-list title="总收入排名" :list="rankList"/>
              </a-col>
            </a-row>
          </a-tab-pane>
          <a-tab-pane tab="净利润" key="2">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                <bar title="总收入变化" />
              </a-col>
              <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                <ranking-list title="总收入排名" :list="rankList"/>
              </a-col>
            </a-row>
          </a-tab-pane>
           <a-tab-pane tab="总资产" key="3">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                <bar title="总收入变化" />
              </a-col>
              <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                <ranking-list title="总收入排名" :list="rankList"/>
              </a-col>
            </a-row>
          </a-tab-pane>
           <a-tab-pane tab="净资本" key="4">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                <bar title="总收入变化"/>
              </a-col>
              <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                <ranking-list title="总收入排名" :list="rankList"/>
              </a-col>
            </a-row>
          </a-tab-pane>
        </a-tabs>
      </div>
    </a-card>
  <!-- 结构四 -->
    <a-card :bordered="false" :body-style="{padding: '24px'}" style="margin-top:15px;">
      <div class="salesCard">
        <a-tabs default-active-key="1" size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}">
          <div class="extra-wrap" slot="tabBarExtraContent">
              <a-date-picker @change="onChange" placeholder="请选择日期" />
          </div>
          <a-tab-pane loading="true" tab="总收入" key="1">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                 <h3>收入结构占比</h3>
                <div style="width:320px;height:200px;float:left">
                  <p>长城证券</p>
                  <v-chart :forceFit="true" :height="height" :data="data" :scale="scale">
                    <v-tooltip :showTitle="false" dataKey="item*percent" />
                    <v-axis />
                    <v-pie position="percent" color="item" :vStyle="pieStyle" :label="labelConfig" />
                    <v-coord type="theta" :radius="0.8" :innerRadius="0.7" />
                  </v-chart>
                </div>
                 <div style="width:320px;height:200px;float:left">
                   <p>第一梯队</p>
                  <v-chart :forceFit="true" :height="height" :data="data" :scale="scale">
                    <v-tooltip :showTitle="false" dataKey="item*percent" />
                    <v-axis />
                    <v-pie position="percent" color="item" :vStyle="pieStyle" :label="labelConfig" />
                    <v-coord type="theta" :radius="0.8" :innerRadius="0.7" />
                  </v-chart>
                </div>
                 <div style="width:320px;height:200px;float:left">
                   <p>第二梯队</p>
                  <v-chart :forceFit="true" :height="height" :data="data" :scale="scale">
                    <v-tooltip :showTitle="false" dataKey="item*percent" />
                    <v-axis />
                    <v-pie position="percent" color="item" :vStyle="pieStyle" :label="labelConfig" />
                    <v-coord type="theta" :radius="0.8" :innerRadius="0.7" />
                  </v-chart>
                </div>
                 <div style="width:320px;height:200px;float:left">
                   <p>第三梯队</p>
                  <v-chart :forceFit="true"  :height="height" :data="data" :scale="scale">
                    <v-tooltip :showTitle="false" dataKey="item*percent" />
                    <v-axis />
                    <v-pie position="percent" color="item" :vStyle="pieStyle" :label="labelConfig" />
                    <v-coord type="theta" :radius="0.8" :innerRadius="0.7" />
                  </v-chart>
                </div>
              </a-col>
              <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                <ranking-list title="门店销售排行榜" :list="rankList"/>
              </a-col>
            </a-row>
          </a-tab-pane>
        </a-tabs>
      </div>
    </a-card>
  </div>
</template>

<script>
import ACol from "ant-design-vue/es/grid/Col";
import ARow from "ant-design-vue/es/grid/Row";
import ACard from "ant-design-vue/es/card/Card";
import ChartCard from "./ChartCard";
import ATooltip from "ant-design-vue/es/tooltip/Tooltip";
import AIcon from "ant-design-vue/es/icon/icon";
import MiniArea from "../chart/MiniArea";
import MiniBar from "../chart/MiniBar";
import MiniProgress from "../chart/MiniProgress";
import ATabs from "ant-design-vue/es/tabs";
import ADatePicker from "ant-design-vue/es/date-picker";
import Bar from "../chart/Bar";
import RankingList from "../chart/RankingList";
import HotSearch from "../analysis/HotSearch";
import SalesData from "../analysis/SalesData";
import Trend from "../chart/Trend";
const rankList = [];
for (let i = 0; i < 8; i++) {
  rankList.push({
    name: "桃源村" + i + "号店",
    total: 1234.56 - i * 100
  });
}
const ATabPane = ATabs.TabPane;
const ARangePicker = ADatePicker.RangePicker;

// 结构三
const DataSet2 = require("@antv/data-set");
const sourceData2 = [
  { name: "第一梯队", "2015": 310, "2016": 180, "2017": 200 },
  { name: "第二梯队", "2015": 100, "2016": 80, "2017": 90 },
  { name: "第三梯队", "2015": 80, "2016": 30, "2017": 20 },
  { name: "长城证券", "2015": 20, "2016": 30, "2017": 20 }
];

const dv2 = new DataSet2.View().source(sourceData2);
dv2.transform({
  type: "fold",
  fields: ["2015", "2016", "2017"],
  key: "月份",
  value: "月均降雨量"
});
const data2 = dv2.rows;

// 结构四
const DataSet = require("@antv/data-set");

const sourceData = [
  { item: "经纪", count: 12.65 },
  { item: "自营", count: 0 },
  { item: "资营", count: 7.58 },
  { item: "投行", count: 16.95 },
  { item: "投", count: 0 },
  { item: "其它", count: 62.8 }
];

const scale = [
  {
    dataKey: "percent",
    min: 0,
    formatter: ".0%"
  }
];

const dv = new DataSet.View().source(sourceData);
dv.transform({
  type: "percent",
  field: "count",
  dimension: "item",
  as: "percent"
});
const data = dv.rows;

export default {
  name: "dashboard",
  data() {
    return {
      rankList,
      // 结构三
      data2,
      height2: 350,
      adjust: [
        {
          type: "dodge",
          marginRatio: 3 / 32
        }
      ],
      // 结构四
      data,
      scale,
      height: 250,
      pieStyle: {
        stroke: "#fff",
        lineWidth: 1
      },
      labelConfig: [
        "percent",
        {
          formatter: (val, item) => {
            return item.point.item + ": " + val;
          }
        }
      ]
    };
  },
  components: {
    Trend,
    SalesData,
    HotSearch,
    RankingList,
    Bar,
    ARangePicker,
    ATabPane,
    ATabs,
    MiniProgress,
    MiniBar,
    MiniArea,
    AIcon,
    ATooltip,
    ChartCard,
    ACard,
    ARow,
    ACol
  },
  methods: {
    onChange(date, dateString) {
      console.log(date, dateString);
    }
  }
};
</script>
<style lang="less" scoped>
.extra-item {
  display: inline-block;
  margin-right: 24px;
  a {
    margin-left: 24px;
  }
}
.footer {
  margin-top: 20px;
}
</style>


