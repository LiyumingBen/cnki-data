/*
 * @Author: LYM
 * @Date: 2022-04-12 11:12:09
 * @LastEditors: LYM
 * @LastEditTime: 2022-06-01 08:40:08
 * @Description: 路由配置
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/cockpit-construct',
    name: 'CockpitConstruct',
    component: () => import('@/views/cockpit-construct/index.vue'),
  },
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/layout/index.vue'),
  },
  {
    path: '/:catchAll(.*)*',
    name: 'NotFound',
    component: () => import('@/views/e404/index.vue'),
    meta: { title: '找不到页面' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
