<template>
  <a-card :body-style="{padding: '20px 24px 8px'}" :bordered="false">
    <div class="chart-card-header">
      <!-- 头部的标题结构 -->
      <div class="meta">
        <span class="chart-card-title">{{title}}</span>
        <span class="chart-card-action">
        <slot name="action"></slot>
      </span>
      </div>
      <!-- 数值的结构 -->
      <div class="total"><span>{{total}}</span></div>
    </div>
    <!-- 排名和涨跌的结构 -->
    <div class="chart-card-content">
      <div class="content-fix">
        <slot></slot>
      </div>
    </div>
    <div class="chart-card-footer">
      <slot name="footer"></slot>
    </div>
  </a-card>
</template>

<script>
import ACard from 'ant-design-vue/es/card/Card'
export default {
  name: 'ChartCard',
  components: {ACard},
  props: ['title', 'total']
}
</script>

<style scoped>
  .chart-card-header{
    position: relative;
    overflow: hidden;
    width: 100%;
  }
  .chart-card-header .meta{
    position: relative;
    overflow: hidden;
    width: 100%;
    color: rgba(0,0,0,.45);
    font-size: 14px;
    line-height: 22px;
  }
  .chart-card-action{
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
  }
  .total {
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    white-space: nowrap;
    color: #000;
    margin-top: 4px;
    margin-bottom: 0;
    font-size: 30px;
    line-height: 38px;
    height: 38px;
  }
  .chart-card-footer{
    border-top: 1px solid #e8e8e8;
    padding-top: 9px;
    margin-top: 8px;
  }
  .chart-card-content{
    margin-bottom: 12px;
    position: relative;
    height: 46px;
    width: 100%;
  }
  .chart-card-content .content-fix{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
  }
</style>
