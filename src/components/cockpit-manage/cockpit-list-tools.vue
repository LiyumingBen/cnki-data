<!--
 * @Author: LYM
 * @Date: 2022-05-31 16:21:28
 * @LastEditors: LYM
 * @LastEditTime: 2022-05-31 19:20:29
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
    <el-popconfirm
      confirm-button-text="确认"
      cancel-button-text="取消"
      :icon="InfoFilled"
      icon-color="#626AEF"
      title="是否确定删除选中内容？"
      @confirm="handleDelete"
      @cancel="handleCancelDelete"
    >
      <template #reference>
        <el-tooltip content="删除" placement="bottom" effect="light">
          <IconDeleteWitheLine v-if="isIconType" class="icon" />
          <IconDeleteLine v-else class="icon" />
        </el-tooltip>
      </template>
    </el-popconfirm>
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
import { InfoFilled } from '@element-plus/icons-vue'

const cockpitMangeStore = useCockpitManageStore()
const { isIconType, tabType } = storeToRefs(cockpitMangeStore)

// 删除
const handleDelete = () => {
  console.log('enter handleDelete')
}

// 取消删除
const handleCancelDelete = () => {
  console.log('enter handleCancelDelete')
}
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
