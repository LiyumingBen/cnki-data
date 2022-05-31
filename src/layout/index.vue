<!--
 * @Author: LYM
 * @Date: 2022-05-16 16:51:47
 * @LastEditors: LYM
 * @LastEditTime: 2022-05-26 16:14:29
 * @Description: Please set Description
-->
<template>
  <div class="common-layout">
    <el-container>
      <el-header height="50px">
        <MainHeader />
      </el-header>
      <el-main class="common-main">
        <CockpitManage />
      </el-main>
      <el-footer height="30px">
        <MainFooter />
      </el-footer>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import MainHeader from './components/MainHeader.vue'
import MainFooter from './components/MainFooter.vue'
import CockpitManage from '@/views/cockpit-manage/index.vue'
</script>

<style scoped lang="scss">
:deep(.el-header) {
  padding: 0;
}
:deep(.el-footer) {
  padding: 0;
}

.common-layout {
  height: 100vh;
}
.common-main {
  height: calc(100vh - 80px);
  background-color: #eee;
}
</style>
