<!--
 * @Author: LYM
 * @Date: 2022-05-31 16:21:28
 * @LastEditors: LYM
 * @LastEditTime: 2022-05-31 19:04:33
 * @Description: Please set Description
-->
<template>
  <div class="btn view">
    <el-tooltip content="预览" placement="bottom" effect="light">
      <IconViewWhite v-if="isIconType" class="icon" />
      <IconViewLine v-else class="icon" />
    </el-tooltip>
  </div>
  <div v-show="tabType === 'me-cockpit'" class="btn move">
    <el-tooltip content="移动" placement="bottom" effect="light">
      <IconDragMoveWhiteFill v-if="isIconType" class="icon" />
      <IconDragMoveFill v-else class="icon" />
    </el-tooltip>
  </div>
  <div v-show="tabType === 'me-cockpit'" class="btn rename">
    <el-tooltip content="重命名" placement="bottom" effect="light">
      <IconEditWhiteLine v-if="isIconType" class="icon" />
      <IconEditLine v-else class="icon" />
    </el-tooltip>
  </div>
  <div class="btn clone">
    <el-tooltip content="克隆" placement="bottom" effect="light">
      <IconCloneWitheLine v-if="isIconType" class="icon" />
      <IconCloneLine v-else class="icon" />
    </el-tooltip>
  </div>
  <div v-show="tabType === 'me-cockpit'" class="btn delete">
    <el-tooltip content="删除" placement="bottom" effect="light">
      <IconDeleteWitheLine v-if="isIconType" class="icon" />
      <IconDeleteLine v-else class="icon" />
    </el-tooltip>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import {
  IconViewLine,
  IconDragMoveFill,
  IconEditLine,
  IconDeleteLine,
  IconCloneLine,
  IconViewWhite,
  IconDragMoveWhiteFill,
  IconEditWhiteLine,
  IconDeleteWitheLine,
  IconCloneWitheLine,
} from '@/icons'
import { useCockpitManageStore } from '@/store/cockpit-mange'

const cockpitMangeStore = useCockpitManageStore()
const { isIconType, tabType } = storeToRefs(cockpitMangeStore)
</script>

<style lang="scss" scoped>
.btn {
  margin: 0 15px;
  line-height: 0;
  cursor: pointer;
  opacity: 0.6;
}

.btn:hover {
  cursor: pointer;
  opacity: 1;
}

.icon {
  width: 16px;
  height: 16px;
}
</style>
