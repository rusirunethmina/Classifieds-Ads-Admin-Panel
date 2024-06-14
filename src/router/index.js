import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/Dashboard.vue'),
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        component: () => import('@/views/dashboard/Home.vue'),
      },
      {
        path: '/ads/list',
        name: 'adsList',
        component: () => import('@/views/dashboard/ads/AdsList.vue'),
      },
      {
        path: '/users',
        name: 'user-list',
        component: () => import('@/views/dashboard/users/UserList.vue'),
      },
      {
        path: '/card',
        name: 'card',
        component: () => import('@/views/Card.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  routes,
})

export default router
