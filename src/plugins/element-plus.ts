/*
 * @Author: LYM
 * @Date: 2022-05-30 18:00:04
 * @LastEditors: LYM
 * @LastEditTime: 2022-05-31 09:05:47
 * @Description: Please set Description
 */

import { App } from 'vue'
import * as ElIconModules from '@element-plus/icons-vue'

export default {
  install(app: App) {
    // 批量注册 Element Plus 图标组件
    // 或者自定义 ElIconModules 列表
    for (const iconName in ElIconModules) {
      app.component(iconName, (ElIconModules as any)[iconName])
    }
  },
}
