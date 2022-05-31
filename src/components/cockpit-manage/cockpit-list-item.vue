<!--
 * @Author: LYM
 * @Date: 2022-05-30 08:46:51
 * @LastEditors: LYM
 * @LastEditTime: 2022-05-31 18:27:25
 * @Description: Please set Description
-->
<template>
  <div class="cockpit-list">
    <div class="cockpit-list-header">
      <span class="name">名称</span>
      <span class="operate"></span>
      <span class="publish-status">发布状态</span>
      <span class="time">最后修改时间</span>
    </div>
    <div class="cockpit-list-content">
      <div
        v-for="(item, index) in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19]"
        :key="index"
        class="cockpit-list-content-item"
        :style="{ background: index % 2 == 1 ? '#ffffff' : '#f2f4f7' }"
        @mouseenter="visibility = true"
        @mouseleave="visibility = false"
      >
        <div class="name">
          <div class="checkbox">
            <input type="checkbox" />
          </div>
          <div class="info">
            <span>
              <IconFolderFill class="icon" />
            </span>
            <span>{{ item }}.数据分析</span>
          </div>
        </div>
        <div v-show="visibility" class="tools">
          <CockpitListTools />
        </div>
        <div v-show="!visibility" class="tools"></div>
        <div class="status">
          <!-- <div class="status-published">
            <IconNoYetPublished class="icon" />
          </div> -->
          <div class="status-no-yet-publish">
            <IconPublished class="icon" />
          </div>
        </div>
        <div class="time">2022-05-30 14:33:23</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CockpitListTools from './cockpit-list-tools.vue'
import { IconFolderFill, IconPublished } from '@/icons'

const visibility = ref(false)
</script>

<style lang="scss" scoped>
.cockpit-list {
  width: 100%;
  &-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 14px;
    color: #3d4d66;
    font-weight: 600;
    padding: 13px;
    .name {
      flex: 2;
    }

    .time {
      display: flex;
      flex-direction: row;
      flex: 1;
      justify-content: center;
    }
    .operate {
      flex: 3;
    }

    .publish-status {
      display: flex;
      flex-direction: row;
      flex: 1;
      justify-content: center;
    }
  }

  &-content {
    font-size: 14px;
    color: #3d4d66;
    &-item {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      background: #f2f4f7;
      padding: 13px;
      cursor: pointer;
      border-bottom: 1px solid rgba(54, 133, 242, 0.2);
      .name {
        display: flex;
        flex-direction: row;
        flex: 2;
        input {
          cursor: pointer;
        }
        .info {
          margin-left: 25px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;

          span {
            line-height: 0;
          }
          .icon {
            margin-right: 10px;
          }
        }
      }

      .tools {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex: 3;
        .btn {
          margin: 0 15px;
          line-height: 0;
          cursor: pointer;
          opacity: 0.6;
          border: 0;
        }

        .btn:hover {
          cursor: pointer;
          opacity: 1;
        }
      }

      .status {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex: 1;
        &-published,
        &-no-yet-publish {
          display: flex;
          align-items: center;
        }
      }

      .time {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex: 1;
      }
    }
  }

  .icon {
    width: 16px;
    height: 16px;
  }
}
</style>
