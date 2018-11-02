<template>
    <page-layout title="客户分布详情" >
      <a-card :bordered="false" :body-style="{padding: '24px'}" style="margin-top:20px;">
      <div class="salesCard">
        <a-tabs :default-active-key="defaultActiveKey" size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}" @change="detailAction">
          <a-tab-pane loading="true" tab="客户数" key="1">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24" style="width:100%;">
                <div>
                  <div class="extra-wrap" slot="tabBarExtraContent" style="font-size:13px;font-weight:600;position:relative;">
                     <span style="position:absolute;top:18px;display:inline-block;">选择日期：</span>
                     <a-range-picker style="margin-left:70px;margin-top:12px;width:280px;"
                      :defaultValue="[moment('2017-10-11', dateFormat), moment('2018-10-10', dateFormat)]"
                      :format="dateFormat"
                      @change="onChangeOne" />
                  </div>
                  <a-table :dataSource="data" :pagination="pagination" bordered @change="handleChange" style="margin:20px 10px 0 10px;" :loading='loading' >
                      <a-table-column
                        title="日期"
                        dataIndex="date"
                        key="id"
                        :sorter="(a, b) => a.date - b.date"
                      />
                      <a-table-column
                        title="5千以下"
                        dataIndex="value1"
                        key="value1"
                        :sorter="(a, b) => a.value1 - b.value1"
                      />
                      <a-table-column
                        title="5千至2万"
                        dataIndex="value2"
                        key="value2"
                        :sorter="(a, b) => a.value2 - b.value2"
                      />
                      <a-table-column
                        title="2万至10万"
                        dataIndex="value3"
                        :sorter="(a, b) => a.value3 - b.value3"
                        key="value3"
                        />
                      <a-table-column
                        title="10万至30万"
                        dataIndex="value4"
                        key="value4"
                        :sorter="(a, b) => a.value4 - b.value4"
                      />
                      <a-table-column
                        title="30万至50万"
                        dataIndex="value5"
                        key="value5"
                        :sorter="(a, b) => a.value5 - b.value5"
                      />
                      <a-table-column
                        title="50万至100万"
                        dataIndex="value6"
                        key="value6"
                        :sorter="(a, b) => a.value6 - b.value6"
                      />
                      <a-table-column
                        title="100万至1千万"
                        dataIndex="value7"
                        key="value7"
                        :sorter="(a, b) => a.value7 - b.value7"
                      />
                      <a-table-column
                        title="1千万至2千万"
                        dataIndex="value8"
                        :sorter="(a, b) => a.value8 - b.value8"
                        key="value8"
                        />
                      <a-table-column
                        title="2千万至1亿"
                        dataIndex="value9"
                        key="value9"
                        :sorter="(a, b) => a.value9 - b.value9"
                      />
                      <a-table-column
                        title="1亿以上"
                        dataIndex="value10"
                        key="value10"
                        :sorter="(a, b) => a.value10 - b.value10"
                      />
                  </a-table>
                </div>
              </a-col>
            </a-row>
          </a-tab-pane>
          <a-tab-pane loading="true" tab="客户资产" key="2">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24" style="width:100%;">
                <div>
                  <div class="extra-wrap" slot="tabBarExtraContent" style="font-size:13px;font-weight:600;position:relative;">
                     <span style="position:absolute;top:18px;display:inline-block;">选择日期：</span>
                     <a-range-picker style="margin-left:70px;margin-top:12px;width:280px;" 
                      :defaultValue="[moment('2017-10-11', dateFormat), moment('2018-10-10', dateFormat)]"
                      :format="dateFormat"
                     @change="onChangeTwo" />
                  </div>
                <a-table :dataSource="data" :pagination="pagination" bordered @change="handleChange" style="margin:20px 10px 0 10px;" :loading='loading'>
                      <a-table-column
                        title="日期"
                        dataIndex="date"
                        key="id"
                        :sorter="(a, b) => a.date - b.date"
                      />
                      <a-table-column
                        title="5千以下"
                        dataIndex="value1"
                        key="value1"
                        :sorter="(a, b) => a.value1 - b.value1"
                      />
                      <a-table-column
                        title="5千至2万"
                        dataIndex="value2"
                        key="value2"
                        :sorter="(a, b) => a.value2 - b.value2"
                      />
                      <a-table-column
                        title="2万至10万"
                        dataIndex="value3"
                        :sorter="(a, b) => a.value3 - b.value3"
                        key="value3"
                        />
                      <a-table-column
                        title="10万至30万"
                        dataIndex="value4"
                        key="value4"
                        :sorter="(a, b) => a.value4 - b.value4"
                      />
                      <a-table-column
                        title="30万至50万"
                        dataIndex="value5"
                        key="value5"
                        :sorter="(a, b) => a.value5 - b.value5"
                      />
                      <a-table-column
                        title="50万至100万"
                        dataIndex="value6"
                        key="value6"
                        :sorter="(a, b) => a.value6 - b.value6"
                      />
                      <a-table-column
                        title="100万至1千万"
                        dataIndex="value7"
                        key="value7"
                        :sorter="(a, b) => a.value7 - b.value7"
                      />
                      <a-table-column
                        title="1千万至2千万"
                        dataIndex="value8"
                        :sorter="(a, b) => a.value8 - b.value8"
                        key="value8"
                        />
                      <a-table-column
                        title="2千万至1亿"
                        dataIndex="value9"
                        key="value9"
                        :sorter="(a, b) => a.value9 - b.value9"
                      />
                      <a-table-column
                        title="1亿以上"
                        dataIndex="value10"
                        key="value10"
                        :sorter="(a, b) => a.value10 - b.value10"
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
import {customerDetailsDetailData} from '@/servers/distribution.js'
export default {
  name: 'AdvancedDetail',
  components: {PageLayout},
  data () {
    return {
      // 日期格式
      dateFormat:'YYYY-MM-DD',
      loading:true,
      data:[],
      type:0,
      startTime:'2017-10-01',
      endTime:'2018-10-08',
      defaultActiveKey:"1",
      pagination: {
        total: 12,
        defaultCurrent: 1,
        defaultPageSize: 10,
        pageSizeOptions: ['8','9','10'],
        showSizeChanger: true,
        showQuickJumper: true,
      },

    }
  },
  created(){
      if(this.$route.query.type == 0 && this.$route.query.type == 1){
        this.startTime  = this.$route.query.time;
        this.type = this.$route.query.type
     }
     if(this.$route.query.type == 1){
        this.defaultActiveKey = "2"
     }
  },
  methods: {
    moment,
    // 转化数字格式
    toThousands(num) {
      return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
    },
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
    onChangeOne(data,dateString) {
      this.startTime = dateString[0]
      this.endTime = dateString[1]
    },
    onChangeTwo(data,dateString) {
      this.startTime = dateString[0]
      this.endTime = dateString[1]
    },
    detailAction(activeKey){
       if(activeKey == 1){
           this.type = 0
       }else{
           this.type = 1
       }
     },
    customersAction(){
      this.loading = true
      customerDetailsDetailData({
         start:this.startTime,
         end:this.endTime,
         type:this.type
      }).then(result=>{
            this.loading = false
            var datas = Object.values(result.data.info)
            this.data = []
            for(var i = 0; i < datas.length; i++){
                  var aa = datas[i].date
                  var arr = aa.split('')
                  arr.splice(4,0,'-')
                  arr.splice(7,0,'-')
                  var str = arr.join('')
                  var obj = {
                     id:datas[i].id,
                     date:str,
                     value1:this.toThousands(Math.round(datas[i].a1)),
                     value2:this.toThousands(Math.round(datas[i].a2)),
                     value3:this.toThousands(Math.round(datas[i].a3)),
                     value4:this.toThousands(Math.round(datas[i].a4)),
                     value5:this.toThousands(Math.round(datas[i].a5)),
                     value6:this.toThousands(Math.round(datas[i].a6)),
                     value7:this.toThousands(Math.round(datas[i].a7)),
                     value8:this.toThousands(Math.round(datas[i].a8)),
                     value9:this.toThousands(Math.round(datas[i].a9)),
                     value10:this.toThousands(Math.round(datas[i].a10)),
                }
                this.data.push(obj)
            }
            this.pagination.total = this.data.length
       })
    }
  },
  watch:{
     startTime(){
        if(this.startTime != ''){
            this.customersAction()
        }
     },
     type(){
        this.customersAction()
     }
    },
    mounted(){
      this.customersAction()
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
