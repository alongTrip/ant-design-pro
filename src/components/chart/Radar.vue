<template>
    <v-chart :forceFit="true" height="400" :data="data" :padding="[20, 20, 95, 20]" :scale="scale">
      <v-tooltip  />
      <v-axis :dataKey="axis1Opts.dataKey" :line="axis1Opts.line" :tickLine="axis1Opts.tickLine" :grid="axis1Opts.grid" />
      <v-axis :dataKey="axis2Opts.dataKey" :line="axis2Opts.line" :tickLine="axis2Opts.tickLine" :grid="axis2Opts.grid" />
      <v-legend dataKey="user" marker="circle" :offset="30" />
      <v-coord type="polar" radius="0.8" />
      <v-line position="item*score" color="user" :size="2" />
      <v-point position="item*score" color="user" :size="4" shape="circle" />
    </v-chart>
</template>

<script>
const DataSet = require('@antv/data-set')

const sourceData = [
  {item: '经纪', '第一梯队': 70, '第二梯队': 30, '第三梯队': 40,'第四梯队': 20},
  {item: '自营', '第一梯队': 60, '第二梯队': 70, '第三梯队': 40,'第四梯队': 20},
  {item: '资管', '第一梯队': 50, '第二梯队': 60, '第三梯队': 40,'第四梯队': 20},
  {item: '投行', '第一梯队': 40, '第二梯队': 50, '第三梯队': 40,'第四梯队': 20},
  {item: '其它', '第一梯队': 60, '第二梯队': 70, '第三梯队': 40,'第四梯队': 20},
]

const dv = new DataSet.View().source(sourceData)
dv.transform({
  type: 'fold',
  fields: ['第一梯队', '第二梯队', '第三梯队','第四梯队'],
  key: 'user',
  value: 'score'
})

const scale = [{
  dataKey: 'score',
  min: 0,
  max: 100
}]

const data = dv.rows

const axis1Opts = {
  dataKey: 'item',
  line: null,
  tickLine: null,
  grid: {
    lineStyle: {
      lineDash: null
    },
    hideFirstLine: false
  }
}
const axis2Opts = {
  dataKey: 'score',
  line: null,
  tickLine: null,
  grid: {
    type: 'polygon',
    lineStyle: {
      lineDash: null
    }
  }
}

export default {
  name: 'Radar',
  data () {
    return {
      sourceData,
      data,
      axis1Opts,
      axis2Opts,
      scale
    }
  }
}
</script>

<style scoped>

</style>
