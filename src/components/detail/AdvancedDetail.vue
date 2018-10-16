<template>
    <page-layout title="传统业务详情页" >
      <a-card :bordered="false" :body-style="{padding: '24px'}" style="margin-top:20px;">
      <div class="salesCard">
        <a-tabs default-active-key="1" size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}">
          <a-tab-pane loading="true" tab="交易量" key="1">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24" style="width:100%;">
                <div>
                 <div class="extra-wrap" slot="tabBarExtraContent" style="font-size:13px;font-weight:600;position:relative;">
                     <span style="position:absolute;top:18px;display:inline-block;">选择日期：</span>
                     <a-range-picker style="margin-left:50px;" @change="onChange" />
                  </div>
                  <a-table :dataSource="data" :pagination="pagination" bordered @change="handleChange" style="margin:30px 120px 0 120px;">
                      <a-table-column
                        title="日期"
                        dataIndex="currentSort"
                        key="currentSort"
                        :sorter="(a, b) => a.currentSort - b.currentSort"
                      />
                      <a-table-column
                        title="交易量"
                        dataIndex="number"
                        key="number"
                        :sorter="(a, b) => a.number - b.number"
                      />
                      <a-table-column
                        title="净佣金"
                        dataIndex="yoyb"
                        :sorter="(a, b) => a.yoyb - b.yoyb"
                        key="yoyb"
                        />
                      <a-table-column
                        title="交易量"
                        dataIndex="number2"
                        key="number2"
                        :sorter="(a, b) => a.number2 - b.number2"
                      />
                      <a-table-column
                        title="净佣金"
                        dataIndex="yoyb2"
                        key="yoyb2"
                        :sorter="(a, b) => a.yoyb2 - b.yoyb2"
                      />
                  </a-table>
                </div>
              </a-col>
            </a-row>
          </a-tab-pane>
          <a-tab-pane loading="true" tab="佣金收入" key="2">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24" style="width:100%;">
               <!--  <div>
                  <div class="extra-wrap" slot="tabBarExtraContent" style="padding-left:20px;font-size:13px;font-weight:600;">
                     选择日期：<a-range-picker />
                  </div>
                  <a-table :dataSource="data" :pagination="pagination" bordered @change="handleChange" style="margin:30px 40px 0 40px;">
                    <a-table-column-group>
                      <span slot="title" ></span>
                      <a-table-column
                        title="日期"
                        dataIndex="currentSort"
                        key="currentSort"
                        :sorter="(a, b) => a.currentSort - b.currentSort"
                      />
                    </a-table-column-group>
                    </a-table-column-group>
                    <a-table-column-group>
                      <span slot="title">个股期权</span>
                      <a-table-column
                        title="交易量"
                        dataIndex="number"
                        key="number"
                        :sorter="(a, b) => a.number - b.number"
                      />
                      <a-table-column
                        title="净佣金"
                        dataIndex="yoyb"
                        :sorter="(a, b) => a.yoyb - b.yoyb"
                        key="yoyb"
                        />
                    </a-table-column-group>
                    <a-table-column-group>
                      <span slot="title" >港股通</span>
                      <a-table-column
                        title="交易量"
                        dataIndex="number2"
                        key="number2"
                        :sorter="(a, b) => a.number2 - b.number2"
                      />
                      <a-table-column
                        title="净佣金"
                        dataIndex="yoyb2"
                        key="yoyb2"
                        :sorter="(a, b) => a.yoyb2 - b.yoyb2"
                      />
                    </a-table-column-group>
                    <a-table-column-group>
                      <span slot="title" >新三板</span>
                      <a-table-column
                        title="交易量"
                        dataIndex="number3"
                        key="number3"
                        :sorter="(a, b) => a.number3 - b.number3"
                      />
                      <a-table-column
                        title="净佣金"
                        dataIndex="yoyb3"
                        key="yoyb3"
                        :sorter="(a, b) => a.yoyb3 - b.yoyb3"
                      />
                    </a-table-column-group>
                  </a-table>
                </div> -->
              </a-col>
            </a-row>
          </a-tab-pane>
        </a-tabs>
      </div>
    </a-card>
    </page-layout>
</template>
<script>
import PageLayout from '../layout/PageLayout'
import ACol from 'ant-design-vue/es/grid/Col'
import ARow from 'ant-design-vue/es/grid/Row'
import AIcon from 'ant-design-vue/es/icon/icon'
import ATabs from 'ant-design-vue/es/tabs'
import ADatePicker from 'ant-design-vue/es/date-picker'
import moment from 'moment'
// import {gtraditionalData} from './server.js'
const data = [{
  key: '1',
  currentSort: '2017-8-1',
  number:  419203,
  yoyb: 124,
  number2: 19203,
  yoyb2: 23555,  
  number3: 18330,
  yoyb3: 23555,
}, {
  key: '2',
  currentSort: '2017-8-2',
  number: 41920,
  yoyb: 124,
  number2: 41950,
  yoyb2: 1655,
  number3: 18330,
  yoyb3: 1655,
}, {
  key: '3',
  currentSort: '2017-8-3',
  number: 4192,
  yoyb: 444,
  number2: 4192,
  yoyb2: 35555,
  number3: 18330,
  yoyb3: 35555,
}, {
 key: '4',
  currentSort: '2017-8-4',
  number: 419,
  yoyb: 124,
  number2: 419,
  yoyb2: 23555,
  number3: 18330,
  yoyb3: 25555,
}];
export default {
  name: 'BasicDetail',
  components: {PageLayout},
  data () {
    return {
      //初始化定义
      datas: [],
      pagination: {},
      loading: false,
      timer:[],

      data,
      // filteredInfo: null,
      // sortedInfo: null,
      pagination: {
        total: 12,
        defaultCurrent: 1,
        defaultPageSize: 5,
        pageSizeOptions: ['2','3','4'],
        showSizeChanger: true,
        showQuickJumper: false,
      },
    }
  },
  methods: {
    handleChange (pagination, filters, sorter) {
      // console.log('Various parameters', pagination, filters, sorter);
      // console.log(pagination);
      const pager = { ...this.pagination };
      pager.current = pagination.current;
      this.pagination = pager;
      var fetch = {
        results: pagination.pageSize,
        page: pagination.current,
      };
      this.pagination = fetch
      console.log(this.pagination)
    },
    onChange(data,dateString) {
      console.log(data,dateString);
      console.log(moment().dateString)
    },
    //数据   
  },
  mounted(){
    //  gtraditionalData('haha').then(result=>{
         
    //  })
  }
}
</script>
<style lang="less" scoped>
  .title {
    color: rgba(0,0,0,.85);
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 16px;
  }
  .icon-up{
    color:rgb(82, 196, 26);
    font-size:10px;
    padding-left:5px;
  }
  .icon-down{
    color:rgb(245, 44, 54);
    font-size:10px;
    padding-left:5px;
  }
</style>
