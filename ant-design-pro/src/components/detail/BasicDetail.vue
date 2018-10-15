<template>
    <page-layout title="数据详情" >
      <a-card :bordered="false" :body-style="{padding: '24px'}" style="margin-top:20px;">
      <div class="salesCard">
        <a-tabs default-active-key="1" size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}">
          <a-tab-pane loading="true" tab="总收入" key="1">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24" style="width:100%;">
                <div>
                  <div class="extra-wrap" slot="tabBarExtraContent" style="padding-left:20px;font-size:15px;font-weight:600;">
                     选择日期：<a-range-picker />
                  </div>
                  <a-table :dataSource="data" :pagination="pagination" bordered @change="handleChange" style="margin-top:20px;">
                    <a-table-column-group>
                      <span slot="title" ></span>
                      <a-table-column
                        title="最新排名"
                        dataIndex="currentSort"
                        key="currentSort"
                        :sorter="(a, b) => a.currentSort - b.currentSort"
                      />
                    </a-table-column-group>
                    <a-table-column-group>
                      <span slot="title"></span>
                      <a-table-column
                        title="券商"
                        dataIndex="supplier"
                        key="supplier"
                        :sorter="(a, b) => a.number - b.number"
                      />
                    </a-table-column-group>
                    <a-table-column-group>
                      <span slot="title">2015</span>
                      <a-table-column
                        title="数值"
                        dataIndex="number"
                        key="number"
                        :sorter="(a, b) => a.number - b.number"
                      />
                      <a-table-column
                        title="同比"
                        dataIndex="yoyb"
                        :sorter="(a, b) => a.yoyb - b.yoyb"
                        key="yoyb">
                        <template slot-scope="yoyb">
                          <span>{{ (yoyb / 100) + '%' }}</span>
                          <a-icon type="caret-up" class="icon-up"/>
                        </template>
                      </a-table-column>
                      <a-table-column
                        title="历史排名"
                        dataIndex="historySort"
                        key="historySort"
                        :sorter="(a, b) => a.historySort - b.historySort"
                      />
                      <a-table-column
                        title="排名变化"
                        dataIndex="sortChange"
                        key="sortChange"
                        :sorter="(a, b) => a.sortChange - b.sortChange"
                      >
                        <template slot-scope="sortChange">
                          <span>{{ (sortChange / 100) + '%' }}</span>
                          <a-icon type="caret-down" class="icon-down"/>
                        </template>
                      </a-table-column>
                    </a-table-column-group>
                    <a-table-column-group>
                      <span slot="title" >2017</span>
                      <a-table-column
                        title="数值"
                        dataIndex="number2"
                        key="number2"
                        :sorter="(a, b) => a.number2 - b.number2"
                      />
                      <a-table-column
                        title="同比"
                        dataIndex="yoyb2"
                        key="yoyb2"
                        :sorter="(a, b) => a.yoyb2 - b.yoyb2"
                      >
                       <template slot-scope="yoyb2">
                          <span>{{ (yoyb2 / 100) + '%' }}</span>
                          <a-icon type="caret-down" class="icon-down"/>
                        </template>
                      </a-table-column>
                      <a-table-column
                        title="历史排名"
                        dataIndex="historySort2"
                        key="historySort2"
                        :sorter="(a, b) => a.historySort2 - b.historySort2"
                      />
                      <a-table-column
                        title="排名变化"
                        dataIndex="sortChange2"
                        key="sortChange2"
                        :sorter="(a, b) => a.sortChange2 - b.sortChange2"
                      >
                       <template slot-scope="sortChange">
                          <span>{{ (sortChange / 100) + '%' }}</span>
                          <a-icon type="caret-down" class="icon-down"/>
                        </template>
                      </a-table-column>
                    </a-table-column-group>
                  </a-table>
                </div>
              </a-col>
            </a-row>
          </a-tab-pane>
          <!-- <a-tab-pane tab="净利润" key="2">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24" style="width:100%;">
                <div>
                  <div class="extra-wrap" slot="tabBarExtraContent" style="padding-left:20px;font-size:15px;font-weight:600;">
                     选择日期：<a-range-picker @change="onChange"/>
                  </div>
                  <a-table :columns="columns" :pagination="pagination" bordered :dataSource="data" @change="handleChange" style="margin-top:20px;"/>
                </div>
              </a-col>
            </a-row>
          </a-tab-pane>
           <a-tab-pane tab="总资产" key="3">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24" style="width:100%;">
                <div>
                  <div class="extra-wrap" slot="tabBarExtraContent" style="padding-left:20px;font-size:15px;font-weight:600;">
                     选择日期：<a-range-picker @change="onChange"/>
                  </div>
                  <a-table :columns="columns" :pagination="pagination" bordered :dataSource="data" @change="handleChange" style="margin-top:20px;"/>
                </div>
              </a-col>
            </a-row>
          </a-tab-pane>
           <a-tab-pane tab="净资本" key="4">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24" style="width:100%;">
                <div>
                  <div class="extra-wrap" slot="tabBarExtraContent" style="padding-left:20px;font-size:15px;font-weight:600;">
                     选择日期：<a-range-picker @change="onChange"/>
                  </div>
                  <a-table :columns="columns" :pagination="pagination" bordered :dataSource="data" @change="handleChange" style="margin-top:20px;"/>
                </div>
              </a-col>
            </a-row>
          </a-tab-pane> -->
        </a-tabs>
      </div>
    </a-card>
    </page-layout>
</template>

<script>
import ACard from 'ant-design-vue/es/card/Card'
import ATooltip from 'ant-design-vue/es/tooltip/Tooltip'
import AAvatar from 'ant-design-vue/es/avatar/Avatar'
import DetailList from '../tool/DetailList'
import ADivider from 'ant-design-vue/es/divider/index'
import ATable from 'ant-design-vue/es/table'
import PageLayout from '../layout/PageLayout'

// 引入组件
import ACol from 'ant-design-vue/es/grid/Col'
import ARow from 'ant-design-vue/es/grid/Row'
import AIcon from 'ant-design-vue/es/icon/icon'
import ATabs from 'ant-design-vue/es/tabs'
import ADatePicker from 'ant-design-vue/es/date-picker'

const ATabPane = ATabs.TabPane
const DetailListItem = DetailList.Item
const data = [{
  key: '1',
  currentSort: '1',
  supplier: 'x券商',
  number:  419203,
  yoyb: 10,
  historySort: 41,
  sortChange:'3',
  number2: 19203,
  yoyb2: 1,
  historySort2: 40,
  sortChange2:'2'
  
}, {
  key: '2',
  currentSort: '2',
  supplier: 'xx券商',
  number: 41920,
  yoyb: 1,
  historySort: 419,
  sortChange:'2',
  number2: 41950,
  yoyb2: 2,
  historySort2: 4109,
  sortChange2:'3',
}, {
  key: '3',
  currentSort: '3',
  supplier: 'y券商',
  number: 4192,
  yoyb: 4,
  historySort: 40192,
  sortChange:'4',
  number2: 4192,
  yoyb2: 4,
  historySort2: 41902,
  sortChange2:'1',
}, {
 key: '4',
  currentSort: '4',
  supplier: 'yy券商',
  number: 419,
  yoyb: 5,
  historySort: 41920,
  sortChange:'1',
  number2: 419,
  yoyb2: 5,
  historySort2: 4120,
  sortChange2:'4',
}];
export default {
  name: 'BasicDetail',
  components: {PageLayout, ATable, ADivider, DetailListItem, DetailList, AAvatar, ATooltip, ACard},
  data () {
    return {
      data,
      filteredInfo: null,
      sortedInfo: null,
      pagination: {
        // current: 1,
        // pageSize: 2,
        total: 12,
        defaultCurrent: 1,
        defaultPageSize: 2,
        // hideOnSinglePage:false,
        pageSizeOptions: ['2','3','4'],
        showSizeChanger: true,
        showQuickJumper: true,
      },
    }
  },
  computed: {
    // columns() {
    //   let { sortedInfo, filteredInfo } = this;
    //   sortedInfo = sortedInfo || {};
    //   filteredInfo = filteredInfo || {};
    //   const columns = [
    //   {
    //     title: '',
    //     children: [
    //     {
    //       title: 'currentSort',
    //       dataIndex: 'currentSort',
    //       key: 'currentSort',
    //       filteredValue: filteredInfo.name || null,
    //       onFilter: (value, record) => record.name.includes(value),
    //       sorter: (a, b) => a.name.length - b.name.length,
    //       sortOrder: sortedInfo.columnKey === 'currentSort' && sortedInfo.order,
    //     }],
    //   },{
    //     title: '',
    //     children: [{
    //       title: 'supplier',
    //       dataIndex: 'supplier',
    //       key: 'supplier',
    //       sorter: (a, b) => a.age - b.age,
    //       sortOrder: sortedInfo.columnKey === 'supplier' && sortedInfo.order,
    //     }]
    //   }, {
    //     title: 2015,
    //     children: [
    //       {
    //         title: 'number',
    //         dataIndex: 'number',
    //         key: 'number',
    //         filteredValue: filteredInfo.address || null,
    //         onFilter: (value, record) => record.address.includes(value),
    //         sorter: (a, b) => a.address.length - b.address.length,
    //         sortOrder: sortedInfo.columnKey === 'number' && sortedInfo.order,
    //       }, {
    //         title: 'yoyb',
    //         dataIndex: 'yoyb',
    //         key: 'yoyb',
    //         sorter: (a, b) => a.age - b.age,
    //         sortOrder: sortedInfo.columnKey === 'yoyb' && sortedInfo.order,
    //       },{
    //         title: 'historySort',
    //         dataIndex: 'historySort',
    //         key: 'historySort',
    //         sorter: (a, b) => a.age - b.age,
    //         sortOrder: sortedInfo.columnKey === 'historySort' && sortedInfo.order,
    //       },
    //       {
    //         title: 'sortChange',
    //         dataIndex: 'sortChange',
    //         key: 'sortChange',
    //         sorter: (a, b) => a.age - b.age,
    //         sortOrder: sortedInfo.columnKey === 'sortChange' && sortedInfo.order,
    //       },
    //     ],
    //   }, {
    //     title: 2017,
    //     children: [
    //       {
    //         title: 'number',
    //         dataIndex: 'number',
    //         key: 'number',
    //         sorter: (a, b) => a.age - b.age,
    //         sortOrder: sortedInfo.columnKey === 'number' && sortedInfo.order,
    //       }, {
    //         title: 'yoyb',
    //         dataIndex: 'yoyb',
    //         key: 'yoyb',
    //         sorter: (a, b) => a.age - b.age,
    //         sortOrder: sortedInfo.columnKey === 'yoyb' && sortedInfo.order,
    //       }, {
    //         title: 'historySort',
    //         dataIndex: 'historySort',
    //         key: 'historySort',
    //         sorter: (a, b) => a.age - b.age,
    //         sortOrder: sortedInfo.columnKey === 'historySort' && sortedInfo.order,
    //       },{
    //         title: 'sortChange',
    //         dataIndex: 'sortChange',
    //         key: 'sortChange',
    //         sorter: (a, b) => a.age - b.age,
    //         sortOrder: sortedInfo.columnKey === 'sortChange' && sortedInfo.order,
    //       }
    //     ],
    //   },];
    //   return columns;
    // }
  },
  methods: {
    handleChange (pagination, filters, sorter) {
      console.log('Various parameters', pagination, filters, sorter);
      this.filteredInfo = filters;
      this.sortedInfo = sorter;
    },
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
