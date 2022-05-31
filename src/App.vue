<!--
 * @Author: LYM
 * @Date: 2022-05-16 16:48:30
 * @LastEditors: LYM
 * @LastEditTime: 2022-05-27 14:58:22
 * @Description: Please set Description
-->
<template>
  <el-config-provider :locale="locale">
    <router-view></router-view>
  </el-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// Element Plus 国际化
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

export default defineComponent({
  name: 'App',
  components: {
    ElConfigProvider,
  },
  setup() {
    return {
      locale: zhCn,
    }
  },
})
</script>

<style>
@import '@/assets/base.css';
</style>
