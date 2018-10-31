<template>
    <page-layout title="客户现状的详情" >
      <a-card :bordered="false" :body-style="{padding: '24px'}" style="margin-top:20px;">
      <div class="salesCard">
        <a-tabs default-active-key="1" size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}"
          @change="analysisAction">
          <a-tab-pane loading="true" tab="新增流失客户分析" key="1">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24" style="width:100%;">
                <div>
                  <div class="extra-wrap" slot="tabBarExtraContent" style="font-size:13px;font-weight:600;position:relative;">
                     <span style="position:absolute;top:18px;display:inline-block;">选择日期：</span>
                     <a-range-picker style="margin-left:70px;margin-top:12px;width:280px;" 
                       :defaultValue="[moment('2017-10-11', dateFormat), moment('2018-10-10', dateFormat)]"
                       :format="dateFormat"
                       @change="onChangeStatus" 
                     />
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
                        dataIndex="value5"
                        :sorter="(a, b) => a.value5 - b.value5"
                        key="value5"
                        />
                      <a-table-column
                        title="当年显性流失客户"
                        dataIndex="value6"
                        key="value6"
                        :sorter="(a, b) => a.value6 - b.value6"
                      />
                      <a-table-column
                        title="当年隐性流失客户"
                        dataIndex="value7"
                        key="value7"
                        :sorter="(a, b) => a.value7 - b.value7"
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
                     <a-range-picker style="margin-left:70px;margin-top:12px;width:280px;" 
                      :placeholder="['2017-10', '2018-09']"
                      format="YYYY-MM"
                      :value="value"
                      :mode="mode2"
                      @panelChange="handlePanelChange2"
                     />
                  </div>
                  <a-table :dataSource="datas" :pagination="pagination" bordered @change="handleChange" style="margin:20px 120px 0 120px;" :loading='loading'>
                      <a-table-column
                        title="日期"
                        dataIndex="date"
                        key="id"
                        :sorter="(a, b) => a.date - b.date"
                      />
                      <a-table-column
                        title="当月新开客户"
                        dataIndex="value8"
                        key="value8"
                        :sorter="(a, b) => a.value8 - b.value8"
                      />
                      <a-table-column
                        title="当月新开有效户"
                        dataIndex="value9"
                        :sorter="(a, b) => a.value9 - b.value9"
                        key="value9"
                        />
                      <a-table-column
                        title="当月新开户资产(万元)"
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
import {distributionlDetailData} from '@/servers/customerDetails.js'
export default {
  name: 'AdvancedDetail',
  components: {PageLayout},
  data () {
    return {
      //定义日期
      dateFormat:'YYYY-MM-DD',
      mode2: ['month', 'month'],
      value: [],
      arr:[],
      addTimeArr:[],
      loading:true,
      data:[],
      datas:[],
      type:0,
      startTime:'2017-10-01',
      endTime:'2018-10-08',
      addStartTime:'2017-10',
      addEndTime:'2018-09',
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
  methods: {
    moment,
    // 转化数字格式
    toThousands(num) {
      return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
    },
    // 转化数字格式
    toThousands_b(num) {
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
    handlePanelChange2(value, mode){
        this.value = value
        this.mode2 = [
          mode[0] === 'date' ? 'month' : mode[0],
          mode[1] === 'date' ? 'month' : mode[1],
        ]
        this.arr.push(value[0].format('YYYY-MM'))
        this.arr.push(value[1].format('YYYY-MM'))
        if(this.arr.length == 6 && this.arr[0] == this.arr[2]){
           this.arr.splice(2,1)
           this.arr.splice(2,1)
        }
        if(this.arr.length == 4 && this.arr[0] != this.arr[2]){
           this.arr.splice(0,1)
           this.arr.splice(0,1)
        }
        if(this.arr[1] == this.arr[3]){
           this.arr.splice(0,1)
           this.arr.splice(0,1)
        }
        if(this.arr.length == 4){
            this.addTimeArr = this.arr
         }
       console.log(this.addTimeArr)
    },
    analysisAction(activeKey){
       if(activeKey == 1){
          this.type = 0
       }else{
          this.type = 1
       }
    },
    onChange(data,dateString) {
      this.startTime = dateString[0]
      this.endTime = dateString[1]
    },
    onChangeStatus(data,dateString){
       this.startTime = dateString[0]
       this.endTime = dateString[1]
    },
    // 新增流失客户分析
    addLoseCustomerAnalysis(){
      this.loading = true
      distributionlDetailData({
        start:this.startTime,
        end:this.endTime,
       }).then(result=>{ 
            this.loading = false
            var datas = Object.values(result.data.info)
            this.data = []
            for(var i = 0 ;i <datas.length ; i++){
                var aa = datas[i].date
                var arr = aa.split('')
                arr.splice(4,0,'-')
                arr.splice(7,0,'-')
                var str = arr.join('')
                var obj = {
                   date: str,
                   id: datas[i].key,
                   value1: this.toThousands(datas[i].value1),
                   value2: this.toThousands(datas[i].value2),
                   value3: Math.round(datas[i].value3*100)/100 + '%',
                   value4: this.toThousands(datas[i].value4),
                   value5: this.toThousands(datas[i].value5),
                   value6: this.toThousands(datas[i].value6),
                   value7: this.toThousands(datas[i].value7),
                }
               this.data.push(obj)
            }
          this.pagination.total = this.data.length
       })
    },
    // 新增客户分析
    addCustomerAnalysis(){
         if(this.addTimeArr.length == 4){
               this.addStartTime = this.addTimeArr[0]
               this.addEndTime = this.addTimeArr[3]
           }
        this.loading = true
        distributionlDetailData({
           start:this.addStartTime,
           end:this.addEndTime,
           type:this.type
        }).then(result=>{ 
          console.log(result)
            this.loading = false
            var datas = Object.values(result.data.info)
            this.data = []
            for(var i = 0 ;i <datas.length ; i++){
                var aa = datas[i].date
                var arr = aa.split('')
                arr.splice(4,0,'-')
                arr.splice(7,0,'-')
                var str = arr.join('')
                var obj = {
                   date: str,
                   id: datas[i].key,
                   value8:this.toThousands(datas[i].v1),
                   value9:this.toThousands(datas[i].v2),
                   value10:this.toThousands_b(Math.round(datas[i].v3*100)/100)
                }
               this.datas.push(obj)
            }
            this.pagination.total = this.datas.length
       })   
    }
  },
  watch:{
    startTime(){
       if(this.startTime != ''){
          this.addLoseCustomerAnalysis()
       }
     },
     addTimeArr(){
       if(this.addTimeArr.length == 4){
          this.addCustomerAnalysis()
       }
     },
     type(){
        if(this.type == 1){
           this.addCustomerAnalysis()
        }else{
           this.addLoseCustomerAnalysis()
        }
     }
  },
  mounted(){
     this.addLoseCustomerAnalysis()
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
