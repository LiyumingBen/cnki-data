/*
 * @Author: LYM
 * @Date: 2022-04-12 11:12:09
 * @LastEditors: LYM
 * @LastEditTime: 2022-05-19 10:12:33
 * @Description: 公共数据仓库
 */

import { defineStore } from 'pinia'

export const useIndxStore = defineStore({
  id: 'index',
  state: () => ({
    name: '超级管理员',
  }),
  getters: {
    nameLength: (state) => state.name.length,
  },
  actions: {
    async insertPost(data: string) {
      // 可以做异步
      // await doAjaxRequest(data);
      this.name = data
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'index', // 自定义 Key值
        storage: localStorage, // 选择存储方式  默认保存在sessionStorage  可选localStorage或sessionStorage
        paths: ['name'], // paths 指定要持久化的字段，其他的则不会进行持久化
      },
    ],
  },
})
