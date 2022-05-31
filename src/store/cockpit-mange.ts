/*
 * @Author: LYM
 * @Date: 2022-05-28 09:54:37
 * @LastEditors: LYM
 * @LastEditTime: 2022-05-31 18:42:31
 * @Description: 驾驶舱管理
 */
import { defineStore } from 'pinia'

export const useCockpitManageStore = defineStore({
  id: 'cockpit-manage',
  state: () => ({
    cockpitList: [], // 我的驾驶舱列表
    shareCockpitList: [], // 共享驾驶仓列表
    standardCockpitList: [], // 标准驾驶舱列表
    cFolderModalVisible: false, // 新建文件夹弹窗
    cCockpitModalVisible: false, // 新建驾驶舱弹窗
    mFolderModalVisible: false, // 移动弹窗
    tabType: 'me-cockpit', // 驾驶tab类型 me-cockpit: 我的驾驶舱 share-cockpit: 共享驾驶舱 standard-cockpit: 标准驾驶舱
    isIconType: true, // 驾驶舱显示模式是否为图标模式
  }),
  getters: {},
  actions: {
    // 更新新建文件夹弹窗状态
    changeFolderModal(visible: boolean) {
      this.cFolderModalVisible = visible
    },
    // 更新新建驾驶舱弹窗状态
    changeCockpitModal(visible: boolean) {
      this.cCockpitModalVisible = visible
    },
    changeTabType(tabType: string) {
      this.tabType = tabType
    },
    changeCockpitShowModal(isIconType: boolean) {
      this.isIconType = isIconType
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'cockpit-manage', // 自定义 Key值
        storage: localStorage, // 选择存储方式  默认保存在sessionStorage  可选localStorage或sessionStorage
        paths: [], // paths 指定要持久化的字段，其他的则不会进行持久化
      },
    ],
  },
})
