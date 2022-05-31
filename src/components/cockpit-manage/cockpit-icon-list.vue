<!--
 * @Author: LYM
 * @Date: 2022-05-26 21:27:50
 * @LastEditors: LYM
 * @LastEditTime: 2022-05-31 18:42:12
 * @Description: 驾驶舱管理图标模式列表
-->
<template>
  <div class="cockpit-icon-list">
    <div class="list-tool">
      <div class="list-tool-left">
        <div class="select checkbox" @click="handleCheckAll">
          <input type="checkbox" />
          <span>全选</span>
        </div>
        <div class="select selected">
          <IconErrorWarningLine class="icon" />
          <span>已选择 2 项</span>
        </div>
      </div>
      <div class="list-tool-right">
        <div class="list-type btn" @click="handleSwitchModal('icon')">
          <IconFunctionLineSelected v-show="isIconType" class="icon" />
          <IconFunctionLine v-show="!isIconType" class="icon" />
        </div>
        <div class="icon-type btn" @click="handleSwitchModal('list')">
          <IconListCheckSelected v-show="!isIconType" class="icon" />
          <IconListCheck v-show="isIconType" class="icon" />
        </div>
        <div class="icon-type btn">
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              <IconOderByLetter v-show="isTimeOrderType" class="icon" />
              <IconOderByTime v-show="!isTimeOrderType" class="icon" />
              <el-icon class="el-icon--right" size="10px">
                <ArrowDownBold />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="letter">
                  <IconOderByLetter class="icon" />
                  <span>按字母排序</span>
                </el-dropdown-item>
                <el-dropdown-item command="time">
                  <IconOderByTime class="icon" />
                  <span>按时间排序</span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </div>
    <div class="list">
      <div v-show="isIconType" class="icon-modal">
        <CockpitIconListItem />
      </div>
      <div v-show="!isIconType" class="list-modal">
        <CockpitListItem />
      </div>
    </div>
    <div class="pagination">
      <el-pagination
        v-model:currentPage="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 30, 40, 50, 100]"
        :small="small"
        :disabled="disabled"
        :background="background"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import {
  IconErrorWarningLine,
  IconListCheck,
  IconFunctionLine,
  IconListCheckSelected,
  IconFunctionLineSelected,
  IconOderByLetter,
  IconOderByTime,
} from '@/icons'
import CockpitIconListItem from './cockpit-icon-list-item.vue'
import CockpitListItem from './cockpit-list-item.vue'
import { useCockpitManageStore } from '@/store/cockpit-mange'

const cockpitMangeStore = useCockpitManageStore()
const { isIconType } = storeToRefs(cockpitMangeStore) // 驾驶舱显示形式：图标类型、列表类型
const isTimeOrderType = ref(true) // 排序： 时间、字母
// 服务器分页
const currentPage = ref(4) // 当前页
const pageSize = ref(100) // 每页数据
const small = ref(false)
const background = ref(false)
const disabled = ref(false)
// 全选
const checkboxAll = ref(false) // 全选

// 切换文件显示模式
const handleSwitchModal = (type: string) => {
  cockpitMangeStore.changeCockpitShowModal(type === 'icon')
}

// 排序
const handleCommand = (command: string) => {
  isTimeOrderType.value = command === 'time'
}

const handleCheckAll = () => {
  checkboxAll.value = !checkboxAll.value
}

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
</script>

<style lang="scss" scoped>
.cockpit-icon-list {
  .list-tool {
    height: 50px;
    background: #f4f6f8;
    border-radius: 4px;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    &-left {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      .select {
        display: flex;
        align-items: center;
        span {
          font-size: 14px;
          color: #0a4689;
          margin-left: 10px;
        }
      }

      .checkbox {
        margin-left: 13px;
        input {
          cursor: pointer;
        }
      }

      .selected {
        margin-left: 24px;
      }
    }

    &-right {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      line-height: 0;
      margin-right: 10px;

      .icon-type {
        margin-left: 19px;
      }

      .btn {
        padding: 5px;
        cursor: pointer;
      }
    }
  }

  .list {
    margin-bottom: 21px;
    .icon-modal,
    .list-modal {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
    .pagination {
      margin-top: 21px;
    }
  }
}

.el-pagination {
  justify-content: flex-end !important;
}

.icon {
  width: 16px;
  height: 16px;
}

.el-icon--right {
  margin-left: 2px;
}
</style>
