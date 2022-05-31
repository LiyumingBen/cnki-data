<template>
  <div class="side-menu">
    <div class="logo-container">
      <div
        class="logo"
        :class="{ 'collaps-logo': isCollaps }"
        :style="{
          width: isCollaps ? '100%' : theme === 'tsinghua' ? '208px' : '227px',
        }"
      >
        <el-image :src="logo" fit="fill" />
      </div>
    </div>
    <el-scrollbar
      style="height: calc(100vh - 155px); border-top: 1px solid #032d5d; box-sizing: border-box"
    >
      <el-menu
        class="el-menu-vertical"
        background-color="transparent"
        text-color="#fff"
        default-active="/masterdata/business"
        @open="handleOpen"
        @close="handleClose"
      >
        <SideMenuItem v-for="item in menu" :key="item.path" :item="item" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
/* import {
  Document,
  Menu as IconMenu,
  Location,
  Setting
} from '@element-plus/icons-vue' */
import { computed, reactive } from '@vue/reactivity'
import SideMenuItem from './SideMenuItem.vue'
import type { IMenuItem } from '../types'
import shNavlogo from '@/assets/images/nav-logo.png'
import shNavlogoSm from '@/assets/images/nav-logo-sm.png'

let menu = reactive([] as IMenuItem[])
menu = [
  {
    title: '主数据管理',
    path: '/masterdata',
    icon: 'icon-file-edit-line',
    children: [
      {
        title: '业务管理',
        path: '/masterdata/business',
        children: [
          {
            title: '业务分区',
            path: '/masterdata/business/district',
          },
          {
            title: '数据配置',
            path: '/masterdata/business/config',
          },
        ],
      },
      {
        title: '数据管理',
        path: '/masterdata/datamgmt',
        children: [
          {
            title: '数据查看',
            path: '/masterdata/datamgmt/overview',
          },
          {
            title: '智能搜索',
            path: '/intelligentSearch',
          },
        ],
      },
    ],
  },
]

const isCollaps = false
const theme = 'shanghai'

const logo = computed(() => {
  return isCollaps ? shNavlogoSm : shNavlogo
})

const handleOpen = (key: string, keyPath: string) => {
  // TODO
}

const handleClose = (key: string, keyPath: string) => {
  // TODO
}
</script>

<style scoped lang="scss">
.side-menu {
  height: 100%;
  background-image: linear-gradient(50deg, #07296e 0%, #0a4689 100%);
  :deep(.el-menu) {
    border-right: none;
    .el-sub-menu__title {
      padding-left: 20px;
      background-color: rgb(10, 67, 134);
    }
    .el-menu-item.is-active,
    .el-menu-item:hover {
      background-color: #104b97;
    }
  }
}

.logo-container {
  height: 155px;
  padding: 20px 0;
  display: flex;
  align-items: center;
}

.logo {
  height: 100%;
  transition: all 0.5s;
  margin: 0 auto;
}
.logo {
  width: 100%;
  height: 100%;
  transition: all 0.3s;
}

.collaps-logo {
  width: 74px;
  height: 58px;
}
</style>
