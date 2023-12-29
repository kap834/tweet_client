import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import HomePage from '../views/HomePage.vue'
import ExplorePage from '../views/ExplorePage.vue'
import NotificationsPage from '../views/NotificationsPage.vue'
import VerifiedPage from '@/components/VerifiedPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'loginPage',
    component: LoginPage,
    meta: {
      noAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
    meta: {
      noAuth: true
    }
  },
  {
    path: '/home',
    name: 'home',
    component: HomePage,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/explore',
    name: 'explore',
    component: ExplorePage,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/notifications',
    name: 'notifications',
    component: NotificationsPage,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/notifications/verified',
    name: 'notificationsVerified',
    component: VerifiedPage,
    meta: {
      requiresAuth: true
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next)=>{
  if(to.meta.requiresAuth){
    const token = localStorage.getItem('token')
    if(token){
      if(token != 'null'){
        next()
      }else{
        next('/login')
      }
    }else{
      next('/login')
    }
  }else{
    next()
  }
})

router.beforeEach((to,from,next)=>{
  if(to.meta.noAuth){
    const token = localStorage.getItem('token')
    if(token){
      if(token != 'null'){
        next('/home')
      }else{
        next()
      }
    }else{
      next()
    }
  }else{
    next()
  }
})

export default router
