import Vue from 'vue'
import Router from 'vue-router'
import PageView from '@/components/layout/PageView'
import RouteView from '@/components/layout/RouteView'
import MenuView from '@/components/layout/MenuView'
import Login from '@/components/login/Login'
import CusDistribution from '@/components/detail/cusDistribution'
import CustomerStatus from '@/components/detail/customerStatus'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: '登录页',
      component: Login,
      invisible: true
    },
    {
      path: '/',
      name: '首页',
      component: MenuView,
      redirect: '/login',
      icon: 'none',
      invisible: true,
      children: [
        {
          path: '/dashboard',
          name: '业绩纵观',
          component: RouteView,
          icon: 'dashboard',
          children: [
            // {
            //   path: '/dashboard/workplace',
            //   name: '客户现状',
            //   component: () => import('@/components/dashboard/WorkPlace'),
            //   icon: 'none'
            // },
            {
              path: '/dashboard/analysis',
              name: '业务通道',
              component: () => import('@/components/dashboard/Dashboard'),
              icon: 'none'
            },
            {
              path: '/dashboard/analy',
              name: '客户现状',
              component: () => import('@/components/dashboard/Dashboard2'),
              icon: 'none'
            },
            {
              path: '/dashboard/anay',
              name: '客户分布',
              component: () => import('@/components/dashboard/Dashboard3'),
              icon: 'none'
            }
          ]
        },
        // {
        //   path: '/form',
        //   name: '表单页',
        //   component: PageView,
        //   icon: 'form',
        //   children: [
        //     {
        //       path: '/form/basic',
        //       name: '基础表单',
        //       component: () => import('@/components/form/BasicForm'),
        //       icon: 'none'
        //     },
        //     {
        //       path: '/form/step',
        //       name: '分步表单',
        //       component: () => import('@/components/form/stepForm/StepForm'),
        //       icon: 'none'
        //     },
        //     {
        //       path: '/form/advanced',
        //       name: '高级表单',
        //       component: () => import('@/components/form/advancedForm/AdvancedForm'),
        //       icon: 'none'
        //     }
        //   ]
        // },
        // {
        //   path: '/list',
        //   name: '列表页',
        //   component: PageView,
        //   icon: 'table',
        //   children: [
        //     {
        //       path: '/list/query',
        //       name: '查询表格',
        //       component: () => import('@/components/list/QueryList'),
        //       icon: 'none'
        //     },
        //     {
        //       path: '/list/primary',
        //       name: '标准列表',
        //       component: () => import('@/components/list/StandardList'),
        //       icon: 'none'
        //     },
        //     {
        //       path: '/list/card',
        //       name: '卡片列表',
        //       component: () => import('@/components/list/CardList'),
        //       icon: 'none'
        //     },
        //     {
        //       path: '/list/search',
        //       name: '搜索列表',
        //       component: () => import('@/components/list/search/SearchLayout'),
        //       icon: 'none',
        //       children: [
        //         {
        //           path: '/list/search/article',
        //           name: '文章',
        //           component: () => import('@/components/list/search/ArticleList'),
        //           icon: 'none'
        //         },
        //         {
        //           path: '/list/search/application',
        //           name: '应用',
        //           component: () => import('@/components/list/search/ApplicationList'),
        //           icon: 'none'
        //         },
        //         {
        //           path: '/list/search/project',
        //           name: '项目',
        //           component: () => import('@/components/list/search/ProjectList'),
        //           icon: 'none'
        //         }
        //       ]
        //     }
        //   ]
        // },
        {
          path: '/detail',
          name: '详情页',
          icon: 'profile',
          component: RouteView,
          children: [
            {
              path: '/detail/basic',
              name: '新业务详情页',
              icon: 'none',
              component: () => import('@/components/detail/BasicDetail')
            },
            {
              path: '/detail/advanced',
              name: '传统详情页',
              icon: 'none',
              component: () => import('@/components/detail/AdvancedDetail')
            },
            {
              path: '/detail/cusDistribution',
              name: '客户现状详情',
              icon: 'none',
              component: () => import('@/components/detail/cusDistribution')
            },
            {
              path: '/detail/customerStatus',
              name: '客户分布详情',
              icon: 'none',
              component: () => import('@/components/detail/customerStatus')
            }
          ]
        },
        // {
        //   path: '/result',
        //   name: '客户分析(附件)',
        //   icon: 'check-circle-o',
        //   component: PageView,
        //   children: [
        //     {
        //       path: '/result/success',
        //       name: '客户分布(附件)',
        //       icon: 'none',
        //       component: () => import('@/components/result/Success')
        //     },
        //     // {
        //     //   path: '/result/error',
        //     //   name: '失败',
        //     //   icon: 'none',
        //     //   component: () => import('@/components/result/Error')
        //     // },
        //     {
        //       path: '/dashboard/workplace',
        //       name: '客户现状(附件)',
        //       component: () => import('@/components/dashboard/WorkPlace'),
        //       icon: 'none'
        //     },
        //   ]
        // },
        // {
        //   path: '/exception',
        //   name: '异常页',
        //   icon: 'warning',
        //   component: RouteView,
        //   children: [
        //     {
        //       path: '/exception/404',
        //       name: '404',
        //       icon: 'none',
        //       component: () => import('@/components/exception/404')
        //     },
        //     {
        //       path: '/exception/403',
        //       name: '403',
        //       icon: 'none',
        //       component: () => import('@/components/exception/403')
        //     },
        //     {
        //       path: '/exception/500',
        //       name: '500',
        //       icon: 'none',
        //       component: () => import('@/components/exception/500')
        //     }
        //   ]
        // },
        // {
        //   path: '/components',
        //   redirect: '/components/taskcard',
        //   name: '小组件',
        //   icon: 'appstore-o',
        //   component: PageView,
        //   children: [
        //     {
        //       path: '/components/taskcard',
        //       name: '任务卡片',
        //       icon: 'none',
        //       component: () => import('@/components/task/Index')
        //     },
        //     {
        //       path: '/components/palette',
        //       name: '颜色复选框',
        //       icon: 'none',
        //       component: () => import('@/components/check/Index')
        //     }
        //   ]
        // }
      ]
    }
  ]
})
