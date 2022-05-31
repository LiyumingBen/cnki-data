<!--
 * @Author: LYM
 * @Date: 2022-05-28 09:08:03
 * @LastEditors: LYM
 * @LastEditTime: 2022-05-29 09:09:51
 * @Description: 新建驾驶舱
-->
<template>
  <div class="folder-modal">
    <el-dialog v-model="cCockpitModalVisible" title="新建驾驶舱" width="25%" draggable>
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="120px"
        class="folder-ruleForm"
      >
        <el-form-item label="名称" prop="cockpitName">
          <el-input
            v-model="ruleForm.cockpitName"
            laceholder="请输入驾驶舱名称"
            autocomplete="off"
            clearable
          />
        </el-form-item>
        <el-form-item label="文件夹" prop="cockpitFolder">
          <el-select v-model="ruleForm.cockpitFolder" placeholder="请选择文件夹" clearable>
            <el-option label="请选择" value="" />
            <el-option label="大数据" value="shanghai" />
            <el-option label="知识库" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="描述" prop="cockpitDes">
          <el-input
            v-model="ruleForm.cockpitDes"
            laceholder="请输入驾驶舱描述"
            autocomplete="off"
            clearable
            p
          />
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
const { cCockpitModalVisible } = storeToRefs(cockpitMangeStore)

const ruleForm = reactive({
  cockpitName: '',
  cockpitDes: '',
  cockpitFolder: '',
})

const rules = reactive<FormRules>({
  cockpitName: [{ required: true, message: '请输入文件名称', trigger: 'blur' }],
  cockpitDes: [{ required: true, message: '请输入描述信息', trigger: 'blur' }],
  cockpitFolder: [{ required: true, message: '请选择文件夹', trigger: 'blur' }],
})

const handleVisible = (visible: boolean) => {
  cockpitMangeStore.changeCockpitModal(visible)
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
.el-input,
.el-select {
  width: 380px;
}
</style>
