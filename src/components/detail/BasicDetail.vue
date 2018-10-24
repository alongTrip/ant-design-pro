<template>
    <page-layout title="新业务详情页"  style="font-size:17px;">
      <a-card :bordered="false" :body-style="{padding: '24px'}" style="margin-top:20px;">
      <div class="salesCard">
        <a-tabs default-active-key="1" size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}">
          <a-tab-pane loading="true" tab="经营情况" key="1">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24" style="width:100%;">
                <div>
                  <div class="extra-wrap" slot="tabBarExtraContent" style="font-size:13px;font-weight:600;position:relative;">
                     <span style="position:absolute;top:18px;display:inline-block;">选择日期：</span>
                     <a-range-picker style="margin-left:70px;margin-top:12px;width:280px;"/>
                  </div>
                  <a-table :dataSource="data" :pagination="pagination" bordered @change="handleChange" style="margin:30px 40px 0 40px;" :loading="loading" >
                    <a-table-column-group>
                      <span slot="title" ></span>
                      <a-table-column
                        title="日期"
                        dataIndex="date"
                        key="key"
                        :sorter="(a, b) => a.date - b.date"
                      />
                    </a-table-column-group>
                    <a-table-column-group>
                      <span slot="title">个股期权</span>
                      <a-table-column
                        title="交易量"
                        dataIndex="value1"
                        key="value1"
                        :sorter="(a, b) => a.value1 - b.value1"
                      />
                      <a-table-column
                        title="净佣金"
                        dataIndex="v1"
                        :sorter="(a, b) => a.v1 - b.v1"
                        key="v1"
                        />
                    </a-table-column-group>
                    <a-table-column-group>
                      <span slot="title" >港股通</span>
                      <a-table-column
                        title="交易量"
                        dataIndex="value2"
                        key="value2"
                        :sorter="(a, b) => a.value2 - b.value2"
                      />
                      <a-table-column
                        title="净佣金"
                        dataIndex="v2"
                        key="v2"
                        :sorter="(a, b) => a.v2 - b.v2"
                      />
                    </a-table-column-group>
                    <a-table-column-group>
                      <span slot="title" >新三板</span>
                      <a-table-column
                        title="交易量"
                        dataIndex="value3"
                        key="value3"
                        :sorter="(a, b) => a.value3 - b.value3"
                      />
                      <a-table-column
                        title="净佣金"
                        dataIndex="v3"
                        key="v3"
                        :sorter="(a, b) => a.v3 - b.v3"
                      />
                    </a-table-column-group>
                  </a-table>
                </div>
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
import AIcon from 'ant-design-vue/es/icon/icon'
import ATabs from 'ant-design-vue/es/tabs'
import {newBusinessDetailData} from '@/servers/businessDetails.js'
export default {
  name: 'BasicDetail',
  components: {PageLayout},
  data () {
    return {
      data:[],
      loading:true,
      startTime:'2017-01-01',
      endTime:'2018-10-08',
      pagination: {
        total: 12,
        defaultCurrent: 1,
        defaultPageSize: 5,
        pageSizeOptions: ['2','3','4'],
        showSizeChanger: true,
        showQuickJumper: true,
      },
    }
  },
  methods: {
    handleChange (pagination, filters, sorter) {
      this.filteredInfo = filters;
      this.sortedInfo = sorter;
    },
    onChange(data,dateString) {
      this.startTime = dateString[0]
      this.endTime = dateString[1]
    },
  },
  watch:{
     startTime(){
         this.loading = true
         newBusinessDetailData({
           start:'2017-01-01',
           end:'2018-10-08'
        }).then(result=>{
              this.loading = false
              var datas = result.data.info
              this.data = Object.values(datas)
              this.pagination.total = this.data.length
         })
      }
  },
  mounted(){
    newBusinessDetailData({
         start:'2017-01-01',
         end:'2018-10-08'
      }).then(result=>{
            this.loading = false
            var datas = result.data.info
            this.data = Object.values(datas)
            this.pagination.total = this.data.length
		   })
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
