<!--
 * @Author: LYM
 * @Date: 2022-05-26 21:27:37
 * @LastEditors: LYM
 * @LastEditTime: 2022-05-31 19:19:46
 * @Description: 驾驶舱管理工具栏
-->
<template>
  <div class="cockpit-tools">
    <div class="search">
      <el-input
        v-model="searchVal"
        class="search-input"
        :suffix-icon="Search"
        placeholder="请输入驾驶舱名称"
        clearable
        debounce="500"
      />
    </div>
    <div class="tools">
      <div v-show="tabType === 'me-cockpit'" class="btn tools-folder" @click="handleCreateFolder">
        <IconFolderAddLine class="icon" />
        <span>新建文件夹</span>
      </div>
      <div v-show="tabType === 'me-cockpit'" class="btn tools-file" @click="handleCreteCockpit">
        <IconFileAddLine class="icon" />
        <span>新建驾驶舱</span>
      </div>
      <div v-show="tabType === 'me-cockpit'" class="btn tools-move" @click="handleRemove">
        <IconDragMoveFill class="icon" />
        <span>移动</span>
      </div>
      <div v-show="tabType === 'me-cockpit'" class="btn tools-rename" @click="handleRename">
        <IconEditLine class="icon" />
        <span>重命名</span>
      </div>
      <div class="btn tools-rename" @click="handleClone">
        <IconCloneLine class="icon" />
        <span>克隆</span>
      </div>
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
          <div v-show="tabType === 'me-cockpit'" class="btn tools-delete">
            <IconDeleteLine class="icon" />
            <span>删除</span>
          </div>
        </template>
      </el-popconfirm>
    </div>
    <CreateFolderModal />
    <CreateCockpitModal />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { Search, InfoFilled } from '@element-plus/icons-vue'
import {
  IconFileAddLine,
  IconFolderAddLine,
  IconDeleteLine,
  IconDragMoveFill,
  IconEditLine,
  IconCloneLine,
} from '@/icons'
import CreateFolderModal from './modal/create-folder.vue'
import CreateCockpitModal from './modal/create-cockpit.vue'
import { useCockpitManageStore } from '@/store/cockpit-mange'

const cockpitMangeStore = useCockpitManageStore()
const { tabType } = storeToRefs(cockpitMangeStore)
// 获取驾驶舱列表
const searchVal = ref('')

const handleGetCockpitList = () => {
  console.log('get cockpit list', searchVal)
}

// 删除
const handleDelete = () => {
  console.log('enter handleDelete')
}

// 取消删除
const handleCancelDelete = () => {
  console.log('enter handleCancelDelete')
}

// 重命名文件夹或驾驶舱
const handleRename = () => {
  console.log('enter handleRename')
}

// 移动文件夹或驾驶舱
const handleRemove = () => {
  console.log('enter handleRemove')
}

// 新建驾驶舱
const handleCreteCockpit = () => {
  cockpitMangeStore.changeCockpitModal(true)
}

// 新建文件夹
const handleCreateFolder = () => {
  cockpitMangeStore.changeFolderModal(true)
}

// 克隆驾驶舱
const handleClone = () => {
  console.log('enter handleClone')
}

onMounted(() => {
  handleGetCockpitList()
})
</script>

<style lang="scss" scoped>
.cockpit-tools {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  .search {
    .el-input {
      height: 42px;
      width: 320px;
    }
  }

  .tools {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .btn {
      width: 143px;
      height: 42px;
      border: 1px solid #f0f2f4;
      border-radius: 4px;
      margin-left: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      span {
        color: #0a4689;
        font-weight: 400;
        font-size: 16px;
        line-height: 16px;
        margin-left: 7px;
      }

      .icon {
        width: 16px;
        height: 16px;
      }
    }

    .btn:hover {
      border: 1px solid #a0cfff;
      opacity: 0.8;
      background: #ecf5ff;
    }

    .tools-delete {
      span {
        color: #b62b3b;
      }
    }

    .tools-delete:hover {
      background: #fef0f0;
      border: 1px solid #fab6b6;
    }
  }
}
</style>
