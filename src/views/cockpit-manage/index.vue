<!--
 * @Author: LYM
 * @Date: 2022-05-26 16:07:03
 * @LastEditors: LYM
 * @LastEditTime: 2022-05-31 18:37:11
 * @Description: 驾驶舱管理
-->
<template>
  <div class="cockpit-manage-wrap">
    <el-tabs
      v-model="activeName"
      class="cockpit-tabs"
      type="border-card"
      @tab-change="handleChangeTab"
    >
      <el-tab-pane label="我的驾驶舱" name="me-cockpit">
        <div class="cockpit-content">
          <CockpitTool />
          <CockpitIconList />
        </div>
      </el-tab-pane>
      <el-tab-pane label="共享驾驶舱" name="share-cockpit">
        <div class="cockpit-content">
          <CockpitTool />
          <CockpitIconList />
        </div>
      </el-tab-pane>
      <el-tab-pane label="标准驾驶舱" name="standard-cockpit">
        <div class="cockpit-content">
          <CockpitTool />
          <CockpitIconList />
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CockpitTool, CockpitIconList } from '@/components'
import { useCockpitManageStore } from '@/store/cockpit-mange'

const cockpitMangeStore = useCockpitManageStore()
const activeName = ref('me-cockpit')

const handleChangeTab = (tab: string) => {
  cockpitMangeStore.changeTabType(tab)
  cockpitMangeStore.changeCockpitShowModal(true)
}
</script>

<style lang="scss" scoped>
.cockpit-manage-wrap {
  padding: 30px 20px 25px;
  background: #ffffff;
  .cockpit-tabs {
    .el-tabs__content {
      .cockpit-content {
        padding: 10px;
      }
    }
  }
}
</style>
