<template>
    <page-layout title="传统业务详情页" >
      <a-card :bordered="false" :body-style="{padding: '24px'}" style="margin-top:20px;">
      <div class="salesCard">
        <a-tabs :default-active-key="defaultActiveKey"  size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}" 
          @change="brokerageAction">
          <a-tab-pane loading="true" tab="交易量" key="1">
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
          <a-tab-pane loading="true" tab="佣金收入" key="2" >
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24" style="width:100%;">
                <div>
                  <div class="extra-wrap" slot="tabBarExtraContent" style="font-size:13px;font-weight:600;position:relative;">
                     <span style="position:absolute;top:18px;display:inline-block;">选择日期：</span>
                     <a-range-picker style="margin-left:70px;margin-top:12px;width:280px;" 
                      :defaultValue="[moment('2017-10-11', dateFormat), moment('2018-10-10', dateFormat)]"
                      :format="dateFormat"
                     @change="onChange" />
                  </div>
                  <a-table :dataSource="data" :pagination="pagination" bordered @change="handleChange" style="margin:30px 120px 0 120px;" :loading='loading'>
                    <a-table-column
                        title="日期"
                        dataIndex="date"
                        key="id"
                        :sorter="(a, b) => a.date - b.date"
                      />
                      <a-table-column
                        title="普通账户净佣金收入"
                        dataIndex="value5"
                        :sorter="(a, b) => a.value5 - b.value5"
                        key="value5"
                        />
                      <a-table-column
                        title="信用账户净佣金收入"
                        dataIndex="value6"
                        key="value6"
                        :sorter="(a, b) => a.value6 - b.value6"
                      />
                      <a-table-column
                        title="股基净佣金率‰"
                        dataIndex="value7"
                        key="value7"
                        :sorter="(a, b) => a.value7 - b.value7"
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
      dateFormat: 'YYYY-MM-DD',
      loading:true,
      data:[],
      startTime:'2017-10-11',
      endTime:'2018-10-10',
      defaultActiveKey:'1',
      type:0,
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
        this.startTime  = this.$route.query.start;
        this.endTime = this.$route.query.end;
        this.type = this.$route.query.type
     }
     if(this.$route.query.type==1){
          this.defaultActiveKey = '2'
      }
  },
  methods: {
    moment,
    // 转化数字格式
    toThousands(num) {
      return (num || 0).toString().replace(/(\d{1,3})(?=(?:\d{3})+\.)/g,'$1,')
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
    onChange(data,dateString){ 
      this.startTime = dateString[0]
      this.endTime = dateString[1]
    },
    brokerageAction(activeKey){
       if(activeKey == 1){
          this.type = 0
       }else{
          this.type = 1
       }
    },
    traditionalDetailService(){
       this.loading = true
        traditionalDetailData({
         start:this.startTime,
         end:this.endTime,
         type:this.type
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
              if(this.type == 0){
                  dat[i].value1 = this.toThousands(Math.round(dat[i].value1*100)/100)
                  dat[i].value2 = Math.round(dat[i].value2*100)/100 + '‰'
                  dat[i].value3 = this.toThousands(Math.round(dat[i].value3*100)/100)
                  dat[i].value4 = this.toThousands(Math.round(dat[i].value4*100)/100)
              }else if(this.type == 1){
                 dat[i].value5 = dat[i].value1 == 0? '':this.toThousands(Math.round(dat[i].value1*100)/100)
                 dat[i].value6 = dat[i].value2 == 0 ? '' : Math.round(dat[i].value2*100000)/100 
                 dat[i].value7 = dat[i].value3 == 0 ? '' : this.toThousands(Math.round(dat[i].value3*100)/100)
              }    
        }
            this.data = dat
            this.pagination.total = this.data.length
        })
    }
  },
  watch:{
      startTime(){
        if(this.startTime != ''){
             this.traditionalDetailService()
          }
       },
      type(){
         this.traditionalDetailService()
      }
    },
  mounted(){
    this.traditionalDetailService()
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
