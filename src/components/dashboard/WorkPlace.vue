<template>
  <page-layout :avatar="currUser.avatar">
    <div>
      <a-card :bordered="false" :body-style="{padding: '24px'}" style="margin-top:30px;">
      <div class="salesCard">
        <a-tabs default-active-key="1" size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}">
          <div class="extra-wrap" slot="tabBarExtraContent">
              <a-date-picker  placeholder="请选择日期" />
          </div>
          <a-tab-pane loading="true" tab="收入结构占比" key="1">
              <a-row style="margin: 0 -12px">
                <!-- <a-col style="padding: 0 12px" :xl="8" :lg="24" :md="24" :sm="24" :xs="24" >
                  <a-card title="" style="margin-bottom: 24px" :bordered="false" :body-style="{padding: 0}">
                    <div style="min-height: 400px;">
                      <radar />
                    </div>
                  </a-card>
                </a-col> -->
                <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24" style="margin-left: 292px;width: 531px;">
                    <a-table :dataSource="data" :columns="columns" :pagination="pagination">
                    <div slot="filterDropdown" slot-scope="{ setSelectedKeys, selectedKeys, confirm, clearFilters }" class='custom-filter-dropdown'>
                    <a-input
                      ref="searchInput"
                      placeholder='Search name'
                      :value="selectedKeys[0]"
                      @change="e => setSelectedKeys(e.target.value ? [e.target.value] : [])"
                      @pressEnter="() => handleSearch(selectedKeys, confirm)"
                    />
                    </div>
                    <a-icon slot="filterIcon" slot-scope="filtered" type='smile-o' :style="{ color: filtered ? '#108ee9' : '#aaa' }" />
                    <template slot="customRender" slot-scope="text">
                      <span v-if="searchText">
                        <template v-for="(fragment, i) in text.split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i'))">
                          <span v-if="fragment.toLowerCase() === searchText.toLowerCase()" :key="i" class="highlight">{{fragment}}</span>
                          <template v-else>{{fragment}}</template>
                        </template>
                      </span>
                      <template v-else>{{text}}</template>
                    </template>
                  </a-table>
                </a-col>
              </a-row>
          </a-tab-pane>
        </a-tabs>
      </div>
    </a-card>
     <a-card :bordered="false" :body-style="{padding: '24px'}" style="margin-top:30px;">
      <div class="salesCard">
        <a-tabs default-active-key="1" size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}">
          <div class="extra-wrap" slot="tabBarExtraContent">
              <a-date-picker  placeholder="请选择日期" />
          </div>
          <a-tab-pane loading="true" tab="收入结构占比" key="1">
              <a-row style="margin: 0 -12px">
                 <div>
                   <a-col style="padding: 0 12px" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                     <div style="width:700px;">
                        <v-chart :force-fit="true" :height="height" :data="data2" :scale="scale">
                          <v-tooltip />
                            <v-axis />    
                          <v-legend custom="true" :items="items"/>
                          <v-line position="month*temperature" color="city" />
                          <v-point position="month*temperature" color="city" :size="4" :v-style="style" :shape="'circle'" />
                        </v-chart>
                     </div>
                   </a-col>
                </div>
              </a-row>
          </a-tab-pane>
        </a-tabs>
      </div>
    </a-card>
  </div>
</page-layout>
</template>

<script>
import PageHeader from '../page/PageHeader'
import PageLayout from '../layout/PageLayout'
import AAvatar from 'ant-design-vue/es/avatar/Avatar'
import HeadInfo from '../tool/HeadInfo'
import ARow from 'ant-design-vue/es/grid/Row'
import ACol from 'ant-design-vue/es/grid/Col'
import ACard from 'ant-design-vue/es/card/Card'
import ACardGrid from 'ant-design-vue/es/card/Grid'
import ACardMeta from 'ant-design-vue/es/card/Meta'
import AList from 'ant-design-vue/es/list/index'
import AListItem from 'ant-design-vue/es/list/Item'
import AButton from 'ant-design-vue/es/button/button'
import AIcon from 'ant-design-vue/es/icon/icon'
import Radar from '../chart/Radar'

const AListItemMeta = AListItem.Meta

// tableList
const data = [{
  key: '1',
  '排名': '1',
  '搜索关键字': '新款连衣裙',
  '用户数': '2,234',
  '周涨幅':'128%',
}, {
  key: '2',
 '排名': '2',
  '搜索关键字': '四件套',
  '用户数': '2,234',
  '周涨幅':'3%',
}, {
  key: '3',
  '排名': '3',
  '搜索关键字': '男士手表',
  '用户数': '2,234',
  '周涨幅':'58%',
}, {
  key: '4',
  '排名': '4',
  '搜索关键字': '耳机',
  '用户数': '2,234',
  '周涨幅':'58%',
},{
  key: '5',
  '排名': '5',
  '搜索关键字': '短裤',
  '用户数': '2,234',
  '周涨幅':'58%',
}]


// 结构二
const DataSet = require('@antv/data-set');

const sourceData = [
  { month: '2015', '经纪': 25, '自营': 0, '资管': 5, '投行': 17, '其它': 55,},
  { month: '2016', '经纪': 15, '自营': 0, '资管': 9, '投行': 30, '其它': 45, },
  { month: '2017', '经纪': 12, '自营': 0, '资管': 9, '投行': 18, '其它': 65, },
];

const dv = new DataSet.View().source(sourceData);
dv.transform({
  type: 'fold',
  fields: ['经纪', '自营','资管', '投行','其它',],
  key: 'city',
  value: 'temperature',
});
const data2 = dv.rows;

const scale = [{
  dataKey: 'month',
  min: 0,
  max: 1,
}];

var items=[{
   value: '经纪',fill:"#ccc", marker:{fill: 'rgb(133, 67, 224)'}
},{
   value: '自营', marker:{fill: 'rgb(34, 50, 115)'}
},{
   value: '资管', marker:{fill: 'rgb(34, 149, 255)'}
},{
   value: '投行', marker:{fill: 'rgb(250, 204, 20)'}
},{
   value: '其它', marker:{fill: 'rgb(47, 194, 91)'}
}]

export default {
  name: 'WorkPlace',
  components: {
    Radar,
    AIcon,
    AButton,
    AListItemMeta,
    AListItem,
    AList,
    ACardMeta,
    ACardGrid,
    ACard,
    ACol,
    ARow,
    HeadInfo,
    AAvatar,
    PageLayout,
    PageHeader},
  data () {
    return {
      projects: [],
      loading: true,
      activities: [],
      teams: [],
      // tableList
      data,
      searchText: '',
      columns: [{
        title: '排名',
        dataIndex: '排名',
        key: '排名',
      }, {
        title: '搜索关键字',
        dataIndex: '搜索关键字',
        key: '搜索关键字',
      }, {
        title: '用户数',
        dataIndex: '用户数',
        key: '用户数',
      },{
        title: '周涨幅',
        dataIndex: '周涨幅',
        key: '周涨幅',
      }],
      pagination: {
        // current: 1,
        // pageSize: 2,
        total: 12,
        defaultCurrent: 1,
        defaultPageSize: 4,
        // hideOnSinglePage:false,
        pageSizeOptions: ['4', '5', '6'],
        showSizeChanger: true,
        showQuickJumper: true,
      },
      // 结构二
     data2,
     scale,
     height: 300,
     style: { stroke: '#fff', lineWidth: 1 },
     items,

    }
  },
  computed: {
    currUser () {
      return this.$store.state.account.user
    }
  },
  mounted () {
    this.getProjectList()
    this.getActivites()
    this.getTeams()
  },
  methods: {
    getProjectList () {
      this.$axios({
        method: 'get',
        url: '/project'
      }).then(res => {
        this.projects = res.data
        this.loading = false
      })
    },
    getActivites () {
      this.$axios({
        method: 'get',
        url: '/work/activity'
      }).then(res => {
        this.activities = res.data
      })
    },
    getTeams () {
      this.$axios({
        method: 'get',
        url: '/work/team'
      }).then(res => {
        this.teams = res.data
      })
    },
    // tableList
     handleSearch (selectedKeys, confirm) {
      confirm()
      this.searchText = selectedKeys[0]
    },

    handleReset (clearFilters) {
      clearFilters()
      this.searchText = ''
    },
  }
}
</script>

<style lang="less" scoped>
  .project-list {
    .card-title {
      font-size: 0;
      a {
        color: rgba(0, 0, 0, 0.85);
        margin-left: 12px;
        line-height: 24px;
        height: 24px;
        display: inline-block;
        vertical-align: top;
        font-size: 14px;
        &:hover {
          color: #1890ff;
        }
      }
    }
    .project-item {
      display: flex;
      margin-top: 8px;
      overflow: hidden;
      font-size: 12px;
      height: 20px;
      line-height: 20px;
      a {
        color: rgba(0, 0, 0, 0.45);
        display: inline-block;
        flex: 1 1 0;
        &:hover {
          color: #1890ff;
        }
      }
      .datetime {
        color: rgba(0, 0, 0, 0.25);
        flex: 0 0 auto;
        float: right;
      }
    }
      .ant-card-meta-description {
        color: rgba(0, 0, 0, 0.45);
        height: 44px;
        line-height: 22px;
        overflow: hidden;
      }
  }
  .item-group{
    padding: 20px 0 8px 24px;
    font-size: 0;
    a{
      color: rgba(0, 0, 0, 0.65);
      display: inline-block;
      font-size: 14px;
      margin-bottom: 13px;
      width: 25%;
    }
  }
  .members {
    a {
      display: block;
      margin: 12px 0;
      line-height: 24px;
      height: 24px;
      .member {
        font-size: 14px;
        color: rgba(0,0,0,.65);
        line-height: 24px;
        max-width: 100px;
        vertical-align: top;
        margin-left: 12px;
        transition: all 0.3s;
        display: inline-block;
      }
      &:hover {
        span {
          color: #1890ff;
        }
      }
    }
  }
  // tableList
    .custom-filter-dropdown {
    padding: 8px;
    border-radius: 6px;
    background: #fff;
    box-shadow: 0 1px 6px rgba(0, 0, 0, .2);
    }

    .custom-filter-dropdown input {
    width: 130px;
    margin-right: 8px;
    }

    .custom-filter-dropdown button {
    margin-right: 8px;
    }

    .highlight {
    color: #f50;
    }
</style>
