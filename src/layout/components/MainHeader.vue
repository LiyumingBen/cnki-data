<template>
  <div class="main-header" :style="{ width: isCollaps ? 'calc(100% - 80px)' : '100%' }">
    <div class="bar-left"></div>
    <div class="right-menu">
      <el-badge class="notification" :value="notificationNum">
        <el-icon :size="18"><Bell /></el-icon>
      </el-badge>
      <span class="waiting dib vt">待处理的事项</span>
      <el-dropdown class="top-head">
        <div>
          <div class="user-name">{{ username }}</div>
          <div class="avatar-wrapper">
            <el-image src="http://placekitten.com/100/100" class="user-avatar" />
          </div>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="top-head-ul">
            <el-dropdown-item @click="personalCenter">
              <span>个人中心</span>
            </el-dropdown-item>
            <el-dropdown-item @click="personalSet">
              <span>设置</span>
            </el-dropdown-item>
            <el-dropdown-item @click="handleLogout">
              <span>退出登录</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Fold, Bell } from '@element-plus/icons-vue'

const isCollaps = false
const notificationNum = 0
const username = 'admin'

const handleLogout = async () => {
  /* await this.$store.dispatch('user/logout')
      this.$store.dispatch('tagsView/delAllViews')
      this.$router.push('/login') */
}
const personalSet = async () => {
  // this.$router.push('/personal/personalSet')
}
const personalCenter = async () => {
  // this.$router.push('/personal/personalCenter')
}
const handleCollapse = () => {
  /* this.$store.dispatch(
    'setting/handleMenuCollaps',
    !this.$store.state.setting.isMenuCollaps
  ) */
}
</script>

<style scoped lang="scss">
$navbar-height: 50px;
$navbar-bgcolor: #3d79e6;

.main-header {
  position: relative;
  height: $navbar-height;
  background-size: cover;
  user-select: none;
  transition: all 0.5s;
}

.nav-list {
  float: left;
  min-width: 200px;
  box-sizing: border-box;
  margin-left: 120px;
}

.right-menu {
  height: $navbar-height;
  line-height: $navbar-height;
  float: right;
  padding-right: 20px;
  .avatar-wrapper {
    height: 36px;
    margin-top: 7px;
    float: right;
    .user-avatar {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      vertical-align: top;
    }
  }
  .user-name {
    margin-left: 10px;
    font-size: 14px;
    color: #333;
    line-height: 50px;
    float: right;
    min-width: 80px;
    height: 20px;
  }
  .user-edit {
    display: inline-block;
    margin-left: 10px;
    font-size: 22px;
    color: #ffffff;
    vertical-align: top;
    cursor: pointer;
  }
  .waiting {
    margin-right: 30px;
  }
  .notification {
    margin-right: 10px;
    font-size: 14px;
    vertical-align: top;
    color: #555;
    :deep(.el-badge__content.is-fixed) {
      top: 11px;
      right: 10px;
      padding: 0 2px;
    }
  }
}

.bar-left {
  width: 50%;
  height: 100%;
  position: relative;
  float: left;
  padding-left: 10px;
  > i {
    font-size: 20px;
    cursor: pointer;
    position: absolute;
    top: 50%;
    margin: -10px 0 0 0;
  }
}
</style>
