<template>
  <div>
    <el-menu-item v-if="!item.children || !item.children.length" :index="item.path">
      <el-icon><icon-menu /></el-icon>
      <span>{{ item.title }}</span>
    </el-menu-item>
    <el-sub-menu v-else :index="item.path">
      <template #title>
        <el-icon><Location /></el-icon>
        <span>{{ item.title }}</span>
      </template>
      <side-menu-item
        v-for="child in item.children"
        :key="child.path"
        :item="child"
      ></side-menu-item>
    </el-sub-menu>
  </div>
</template>

<script setup lang="ts">
import {
  // Document,
  Menu as IconMenu,
  Location,
  // Setting
} from '@element-plus/icons-vue'
import type { IMenuItem } from '../types'

defineProps<{
  item: IMenuItem
}>()
</script>
