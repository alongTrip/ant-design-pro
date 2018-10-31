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
                     <a-range-picker style="margin-left:70px;margin-top:12px;width:280px;" @change="onChange" 
                        :defaultValue="[moment('2017-10-11', dateFormat), moment('2018-10-10', dateFormat)]"
                        :format="dateFormat"
                     />
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
import moment from 'moment'
export default {
  name: 'BasicDetail',
  components: {PageLayout},
  data () {
    return {
      // 定义默认日期
      dateFormat: 'YYYY-MM-DD',
      data:[],
      loading:true,
      startTime:'2017-10-10',
      endTime:'2018-10-11',
      pagination: {
        total: 20,
        defaultCurrent: 1,
        defaultPageSize: 10,
        pageSizeOptions: ['8','9','10'],
        showSizeChanger: true,
        showQuickJumper: true,
      },
    }
  },
  methods: {
     moment,
    // 转化数字格式
    toThousands(num) {
      return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
    },
    handleChange (pagination, filters, sorter) {
      this.filteredInfo = filters;
      this.sortedInfo = sorter;
    },
    onChange(data,dateString) {
      this.startTime = dateString[0]
      this.endTime = dateString[1]
    },
    newBusinessAction(){
      this.loading = true
      newBusinessDetailData({
         start:this.startTime,
         end:this.endTime
      }).then(result=>{
          this.loading = false
          var datas = result.data.info
          var dat = Object.values(datas)
          for(var i = 0; i < dat.length; i++){
                var aa = dat[i].date
                var arr = aa.split('')
                arr.splice(4,0,'-')
                arr.splice(7,0,'-')
                var str = arr.join('')
                dat[i].date = str
                dat[i].value1 = this.toThousands(Math.round(dat[i].value1))
                dat[i].value2 = this.toThousands(Math.round(dat[i].value2)) 
                dat[i].value3 = this.toThousands(Math.round(dat[i].value3))
                dat[i].v1 =  Math.round(dat[i].v1*10000)/10000
                dat[i].v2 =  Math.round(dat[i].v2*10000)/10000
                dat[i].v3 =  Math.round(dat[i].v3*10000)/10000
          }
          this.data = dat
          this.pagination.total = this.data.length
       })
    }
  },
  watch:{
     startTime(){
      if(this.startTime != ''){
          this.newBusinessAction()
        }
      }
   },
  mounted(){
       this.newBusinessAction()
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
