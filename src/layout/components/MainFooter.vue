<template>
  <div class="footer">
    <span>{{ text }}</span>
  </div>
</template>

<script lang="ts" setup>
const text =
  '联系电话：021-64455555 * 2000 或 5000 | 传真：021-64455001 | 邮编：200031 | 地址：上海市淮海中路1555号 copyright ©️ 2021 上海图书馆（上海科学技术情报研究所）'
</script>

<style lang="scss" scoped>
.footer {
  padding: 0;
  line-height: 29px;
  background-color: #fff;
  text-align: center;
  font-size: 12px;
  color: #aaaaaa;
  border-top: 1px solid #f2f4f6;
}
</style>
