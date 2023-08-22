// Composables
import { createRouter, createWebHashHistory, START_LOCATION } from 'vue-router'
import { useUserStore } from '@/store/user'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/FrontLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/front/HomeView.vue'),
        meta: {
          title: 'TEXTURE 版畫工作室',
          login: false,
          admin: false
        }
      },
      {
        path: 'introduce',
        name: 'Introduce',
        component: () => import(/* webpackChunkName: "introduce" */ '@/views/front/IntroView.vue'),
        meta: {
          title: 'TEXTURE 版畫工作室 | 工作室介紹',
          login: false,
          admin: false
        }
      },
      {
        path: 'print',
        name: 'Print',
        component: () => import(/* webpackChunkName: "print" */ '@/views/front/PrintView.vue'),
        meta: {
          title: 'TEXTURE 版畫工作室 | 版畫小知識',
          login: false,
          admin: false
        }
      }, {
        path: 'service',
        name: 'Service',
        component: () => import(/* webpackChunkName: "service" */ '@/views/front/ServiceView.vue'),
        meta: {
          title: 'TEXTURE 版畫工作室 | 服務項目',
          login: false,
          admin: false
        }
      }, {
        path: 'contact',
        name: 'Contact',
        component: () => import(/* webpackChunkName: "contact" */ '@/views/front/ContactView.vue'),
        meta: {
          title: 'TEXTURE 版畫工作室 | 聯絡我們',
          login: false,
          admin: false
        }
      },
      {
        path: 'activitynew',
        name: 'Activitynew',
        component: () => import(/* webpackChunkName: "activitynew" */ '@/views/front/ActivityNewView.vue'),
        meta: {
          title: 'TEXTURE 版畫工作室 | 最新活動',
          login: false,
          admin: false
        }
      },
      {
        path: 'activity',
        name: 'Activity',
        component: () => import(/* webpackChunkName: "activity" */ '@/views/front/ActivityView.vue'),
        meta: {
          title: 'TEXTURE 版畫工作室 | 活動報名',
          login: false,
          admin: false
        }
      },
      {
        path: 'activity/:id',
        name: 'Product',
        component: () => import(/* webpackChunkName: "product" */ '@/views/front/ProductView.vue'),
        meta: {
          title: 'TEXTURE 版畫工作室 | 活動',
          login: false,
          admin: false
        }
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import(/* webpackChunkName: "register" */ '@/views/front/RegisterView.vue'),
        meta: {
          title: 'TEXTURE 版畫工作室 | 註冊',
          login: false,
          admin: false
        }
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ '@/views/front/LoginView.vue'),
        meta: {
          title: 'TEXTURE 版畫工作室 | 登入',
          login: false,
          admin: false
        }
      },
      {
        path: 'cart',
        name: 'Cart',
        component: () => import(/* webpackChunkName: "cart" */ '@/views/front/CartView.vue'),
        meta: {
          title: 'TEXTURE 版畫工作室 | 購物車',
          login: true,
          admin: false
        }
      },
      {
        path: 'like',
        name: 'Like',
        component: () => import(/* webpackChunkName: "like" */ '@/views/front/LikeView.vue'),
        meta: {
          title: 'TEXTURE 版畫工作室 | 我的收藏',
          login: true,
          admin: false
        }
      }
    ]
  },
  {
    path: '/',
    component: () => import('@/layouts/UsersLayout.vue'),
    children: [
      {
        path: 'user',
        name: 'Users',
        component: () => import(/* webpackChunkName: "users" */ '@/views/front/user/UsersView.vue'),
        meta: {
          title: 'TEXTURE 版畫工作室 | 會員管理',
          login: true,
          admin: false
        }
      },
      {
        path: 'orders',
        name: 'Orders',
        component: () => import(/* webpackChunkName: "orders" */ '@/views/front/user/OrdersView.vue'),
        meta: {
          title: 'TEXTURE 版畫工作室 | 訂單管理',
          login: true,
          admin: false
        }
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('@/layouts/AdminLayout.vue'),
    children: [
      {
        path: '',
        name: 'AdminHome',
        component: () => import(/* webpackChunkName: "admin-home" */ '@/views/admin/ProductsView.vue'),
        meta: {
          title: 'TEXTURE 版畫工作室 | 活動管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'products',
        name: 'AdminProducts',
        component: () => import(/* webpackChunkName: "admin-products" */ '@/views/admin/ProductsView.vue'),
        meta: {
          title: 'TEXTURE 版畫工作室 | 活動管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'orders',
        name: 'AdminOrders',
        component: () => import(/* webpackChunkName: "admin-orders" */ '@/views/admin/OrdersView.vue'),
        meta: {
          title: 'TEXTURE 版畫工作室 | 報名管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'memberships',
        name: 'AdminMemberships',
        component: () => import(/* webpackChunkName: "admin-memberships" */ '@/views/admin/MembershipsView.vue'),
        meta: {
          title: 'TEXTURE 版畫工作室 | 會員管理',
          login: true,
          admin: true
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

router.afterEach((to, from) => {
  document.title = to.meta.title
})

router.beforeEach(async (to, from, next) => {
  const user = useUserStore()
  // 剛進網頁時的第一次路由跳轉
  if (from === START_LOCATION) {
    // 取得使用者資訊
    await user.getProfile()
  }

  if (user.isLogin && ['/register', '/login'].includes(to.path)) {
    // 如果有登入，去註冊或登入頁，導向回首頁
    next('/')
  } else if (to.meta.login && !user.isLogin) {
    // 如果沒登入，去需要登入的頁面，導向回登入頁
    next('/login')
  } else if (to.meta.admin && !user.isAdmin) {
    // 如果不是管理員，去需要管理員，導向回首頁
    next('/')
  } else {
    // 不做導向
    next()
  }
})

export default router
