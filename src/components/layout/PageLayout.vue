<template>
  <div style="margin: -24px -24px 0px">
    <div ref="page" :class="['page-content', layout]" >
      <slot ></slot>
    </div>
  </div>
</template>

<script>
import PageHeader from '../page/PageHeader'
import AIcon from 'ant-design-vue/es/icon/icon'
export default {
  name: 'PageLayout',
  components: {AIcon, PageHeader},
  props: ['desc', 'logo', 'title', 'avatar', 'linkList', 'extraImage'],
  data () {
    return {
      breadcrumb: []
    }
  },
  computed: {
    layout () {
      return this.$store.state.setting.layout
    }
  },
  mounted () {
    this.getBreadcrumb()
  },
  updated () {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb () {
      this.breadcrumb = this.$route.matched
    }
  }
}
</script>

<style lang="less" scoped>
  .link{
    margin-top: 16px;
    line-height: 24px;
    a{
      font-size: 14px;
      margin-right: 32px;
      i{
        font-size: 22px;
        margin-right: 8px;
      }
    }
  }
  .page-content{
    &.side{
      margin: 24px 24px 0px;
    }
    &.head{
      margin: 24px auto 0;
      max-width: 1400px;
    }
  }
</style>
