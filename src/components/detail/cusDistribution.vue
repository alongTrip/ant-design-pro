<template>
    <page-layout title="客户现状详情" >
      <a-card :bordered="false" :body-style="{padding: '24px'}" style="margin-top:20px;">
      <div class="salesCard">
        <a-tabs default-active-key="1" size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}">
          <a-tab-pane loading="true" tab="新增流失客户分析" key="1">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24" style="width:100%;">
                <div>
                  <div class="extra-wrap" slot="tabBarExtraContent" style="font-size:13px;font-weight:600;position:relative;">
                     <span style="position:absolute;top:18px;display:inline-block;">选择日期：</span>
                     <a-range-picker style="margin-left:70px;margin-top:12px;width:280px;" @change="onChange" />
                  </div>
                  <a-table :dataSource="data" :pagination="pagination" bordered @change="handleChange" style="margin:20px 10px 0 10px;" :loading='loading'>
                      <a-table-column
                        title="日期"
                        dataIndex="date"
                        key="id"
                        :sorter="(a, b) => a.date - b.date"
                      />
                      <a-table-column
                        title="总客户数"
                        dataIndex="value1"
                        key="value1"
                        :sorter="(a, b) => a.value1 - b.value1"
                      />
                      <a-table-column
                        title="总有效户数"
                        dataIndex="value2"
                        :sorter="(a, b) => a.value2 - b.value2"
                        key="value2"
                        />
                      <a-table-column
                        title="有效户率"
                        dataIndex="value3"
                        key="value3"
                        :sorter="(a, b) => a.value3 - b.value3"
                      />
                      <a-table-column
                        title="当年新开客户数"
                        dataIndex="value4"
                        key="value4"
                        :sorter="(a, b) => a.value4 - b.value4"
                      />
                      <a-table-column
                        title="当年新开有效户"
                        dataIndex="value2"
                        :sorter="(a, b) => a.value2 - b.value2"
                        key="value2"
                        />
                      <a-table-column
                        title="当年显性流失客户"
                        dataIndex="value3"
                        key="value3"
                        :sorter="(a, b) => a.value3 - b.value3"
                      />
                      <a-table-column
                        title="当年隐性流失客户"
                        dataIndex="value4"
                        key="value4"
                        :sorter="(a, b) => a.value4 - b.value4"
                      />
                  </a-table>
                </div>
              </a-col>
            </a-row>
          </a-tab-pane>
          <a-tab-pane loading="true" tab="新增客户分析" key="2">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24" style="width:100%;">
                <div>
                  <div class="extra-wrap" slot="tabBarExtraContent" style="font-size:13px;font-weight:600;position:relative;">
                     <span style="position:absolute;top:18px;display:inline-block;">选择日期：</span>
                     <a-range-picker style="margin-left:70px;margin-top:12px;width:280px;" @change="onChange" />
                  </div>
                  <a-table :dataSource="data" :pagination="pagination" bordered @change="handleChange" style="margin:30px 120px 0 120px;" :loading='loading'>
                    <a-table-column
                        title="日期"
                        dataIndex="date"
                        key="id"
                        :sorter="(a, b) => a.date - b.date"
                      />
                      <a-table-column
                        title="股基交易量"
                        dataIndex="value1"
                        key="value1"
                        :sorter="(a, b) => a.value1 - b.value1"
                      />
                      <a-table-column
                        title="市场份额"
                        dataIndex="value2"
                        :sorter="(a, b) => a.value2 - b.value2"
                        key="value2"
                        />
                      <a-table-column
                        title="普通账户交易量"
                        dataIndex="value3"
                        key="value3"
                        :sorter="(a, b) => a.value3 - b.value3"
                      />
                      <a-table-column
                        title="信用账户交易量"
                        dataIndex="value4"
                        key="value4"
                        :sorter="(a, b) => a.value4 - b.value4"
                      />
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
import moment from 'moment'
import {traditionalDetailData} from '@/servers/businessDetails.js'
export default {
  name: 'AdvancedDetail',
  components: {PageLayout},
  data () {
    return {
      loading:true,
      data:[],
      startTime:'2018-10-01',
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
      const pager = { ...this.pagination };
      pager.current = pagination.current;
      this.pagination = pager;
      var fetch = {
        results: pagination.pageSize,
        page: pagination.current,
      };
      this.pagination = fetch
    },
    onChange(data,dateString) {
      this.startTime = dateString[0]
      this.endTime = dateString[1]
    },
  },
  watch:{
      startTime(){
           this.loading = true
           traditionalDetailData({
             start:this.startTime,
             end:this.endTime,
          }).then(result=>{
                this.loading = false
                var datas = result.data.info
                this.data = Object.values(datas)
                this.pagination.total = this.data.length
           })
          }
  },
  mounted(){
      traditionalDetailData({
         start:this.startTime,
         end:this.endTime,
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
