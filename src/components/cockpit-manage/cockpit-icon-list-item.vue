<!--
 * @Author: LYM
 * @Date: 2022-05-27 09:36:14
 * @LastEditors: LYM
 * @LastEditTime: 2022-05-31 19:02:40
 * @Description: 驾驶舱管理列表模式列表项
-->
<template>
  <div
    v-for="(item, index) in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19]"
    :key="index"
    class="list-item"
  >
    <div
      class="thumbnail"
      :style="{ background: `url(${DefaultCockpitPng}) no-repeat` }"
      @mouseenter="visibility = true"
      @mouseleave="visibility = false"
    >
      <div class="thumbnail-checkbox">
        <IconCheckboxBlankWitheLine class="icon" />
        <IconCheckboxWhiteLine class="icon" />
      </div>
      <div
        v-show="visibility"
        class="thumbnail-tools"
        :style="{ background: true ? '#322e2e' : '' }"
      >
        <CockpitListTools />
      </div>
    </div>
    <div class="list-item-info">
      <div class="header">
        <IconFolderFill class="icon" />
        <span>交通安全类大屏</span>
      </div>
      <div class="des">{{ item }}.全国铁路旅客发送量完成30.84亿人，比上年增加2.70</div>
      <div class="publish">
        <div class="time">
          <IconTimeLine class="icon" />
          <span>2020-06-18</span>
        </div>
        <div v-show="tabType === 'me-cockpit'" class="status">
          <!-- <div class="status-published">
            <IconNoYetPublished class="icon" />
            <span>未发布</span>
          </div> -->
          <div class="status-no-yet-publish">
            <IconPublished class="icon" />
            <span>已发布</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import {
  IconFolderFill,
  IconTimeLine,
  IconCheckboxBlankWitheLine,
  IconCheckboxWhiteLine,
  IconPublished,
  IconNoYetPublished,
} from '@/icons'
import { DefaultCockpitPng } from '@/assets/images'
import CockpitListTools from './cockpit-list-tools.vue'
import { useCockpitManageStore } from '@/store/cockpit-mange'
import { storeToRefs } from 'pinia'

const cockpitMangeStore = useCockpitManageStore()
const { tabType } = storeToRefs(cockpitMangeStore)
const visibility = ref(false)
</script>

<style lang="scss" scoped>
.list-item {
  display: flex;
  flex-direction: column;
  margin-right: 19px;
  border-radius: 4px;
  border: solid 1px #f2f2f2;
  margin-top: 20px;
  width: 380px;
  cursor: pointer;
  .thumbnail {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 214px;
    width: 382px;
    border-radius: 4px 4px 0px 0px;
    margin-left: -2px;
    &-checkbox {
      margin: 10px;
      cursor: pointer;
    }

    &-tools {
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: 378px;
      margin-left: 2px;
      padding: 10px;
      .btn {
        margin: 10px 15px;
        line-height: 0;
        cursor: pointer;
        opacity: 0.6;
      }

      .btn:hover {
        cursor: pointer;
        opacity: 1;
      }
    }
  }

  &-info {
    margin: 13px 23px 16px 17px;
    cursor: pointer;

    .header {
      display: flex;
      align-items: center;
      span {
        font-family: Microsoft YaHei;
        font-size: 16px;
        font-weight: bold;
        color: #333333;
        line-height: 0;
        margin-left: 7px;
      }
    }

    .des {
      font-size: 14px;
      color: #999999;
      font-weight: 400;
      margin: 11px 0;
    }

    .publish {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      line-height: 0;
      .time,
      .status {
        display: flex;
        flex-direction: row;
        align-items: center;
        &-published,
        &-no-yet-publish {
          display: flex;
          align-items: center;
        }
      }
      span {
        font-size: 12px;
        font-family: Arial;
        font-weight: 400;
        color: #999999;
        margin-left: 4px;
      }
    }
  }

  .icon {
    width: 16px;
    height: 16px;
  }
}
</style>
