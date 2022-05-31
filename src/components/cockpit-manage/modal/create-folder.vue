<!--
 * @Author: LYM
 * @Date: 2022-05-28 09:05:59
 * @LastEditors: LYM
 * @LastEditTime: 2022-05-28 23:00:38
 * @Description: 新建文件夹弹窗
-->
<template>
  <div class="folder-modal">
    <el-dialog v-model="cFolderModalVisible" title="新建文件夹" width="25%" draggable>
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="120px"
        class="folder-ruleForm"
      >
        <el-form-item label="名称" prop="folderName">
          <el-input v-model="ruleForm.folderName" autocomplete="off" clearable />
        </el-form-item>
        <el-form-item label="描述" prop="folderDes">
          <el-input v-model="ruleForm.folderDes" autocomplete="off" clearable />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="handleVisible(false)">取消</el-button>
          <el-button @click="handleResetForm(ruleFormRef)">重置</el-button>
          <el-button type="primary" @click="handlesSubmitForm(ruleFormRef)">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { useCockpitManageStore } from '@/store/cockpit-mange'
import { reactive, ref } from 'vue'
import { storeToRefs } from 'pinia'
import type { FormInstance, FormRules } from 'element-plus'

const ruleFormRef = ref<FormInstance>()
const cockpitMangeStore = useCockpitManageStore()
const { cFolderModalVisible } = storeToRefs(cockpitMangeStore)

const ruleForm = reactive({
  folderName: '',
  folderDes: '',
})

const rules = reactive<FormRules>({
  folderName: [{ required: true, message: '请输入文件名称', trigger: 'blur' }],
  folderDes: [{ required: true, message: '请输入描述信息', trigger: 'blur' }],
})

const handleVisible = (visible: boolean) => {
  cockpitMangeStore.changeFolderModal(visible)
}

// 提交
const handlesSubmitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) {
    return
  }
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!', valid)
      //   cockpitMangeStore.changeFolderModal(false)
    } else {
      console.log('error submit!', fields)
    }
  })
}

// 重置表单
const handleResetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) {
    return
  }
  formEl.resetFields()
}
</script>
<style scoped>
.el-button--text {
  margin-right: 15px;
}
.el-input {
  width: 380px;
}
</style>
