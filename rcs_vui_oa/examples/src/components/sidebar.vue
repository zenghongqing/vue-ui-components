<template>
  <aside>
      <div v-for="item in navConfig" :key="item.id">
          <template v-if="item.children">
              <h4>{{ item.title }}</h4>
              <router-link v-for="childItem in item.children" :key="childItem.id" :to="childItem.path" class="nav-link">{{ childItem.title }}</router-link>
          </template>
          <router-link class="nav-link" style="font-weight: bold;line-height: 42px;font-size: 15px;" v-else :to="item.path">{{ item.title }}</router-link>
      </div>
  </aside>
</template>
<script>
import navConfig from '../nav.config'
export default {
    data () {
        return {
            navConfig
        }
    }
}
</script>
<style lang="scss" scoped>
aside {
    line-height: 1.4;
    &::after {
        content: '';
        display: block;
        width: 1px;
        height: 100%;
        background: #d7dde4;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        z-index: 1;
    }
    h4 {
        height: 36px;
        line-height: 36px;
        margin-top: 0;
        margin-bottom: 2px;
        font-size: 13px;
        font-weight: normal;
        opacity: 0.8;
        color: rgba(69,90,100,.6);
        padding-left: 20px;
    }
    .nav-link {
        white-space: nowrap;
        display:block;
        color:#666;
        // padding:10px 0;
        padding-left: 20px;
        height: 36px;
        line-height: 36px;
        font-size: 14px;
        text-decoration: none;
        &:hover{
            color: #3399ff;
        }
        &:active{
            background:transparent;
            color: #3399ff;
        }
        &.router-link-exact-active{
            color: #3399ff;
            font-weight: bold;
        }
    }
}
</style>
