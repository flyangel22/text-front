<template>
  <v-app-bar :elevation="1" color="#0e2a47ff" theme="dark">
    <v-container class="d-flex align-center">
      <v-btn to="/" :active="false" class="logo1" height="90px">
        <img src="/logo1.png">
      </v-btn>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon v-if="isMobile" @click="drawer = true"></v-app-bar-nav-icon>
      <template v-if="!isMobile">
        <v-btn variant="plain" id="menu-activator1">關於我們</v-btn>
        <v-menu activator="#menu-activator1">
          <v-list class="listtext" :elevation="2">
            <v-list-item v-for="item in items" :key="item.to" :to="item.to">
              <v-list-item-title class="text-body-2">{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn v-if="!isMobile" variant="plain" to="/activity">全部活動</v-btn>
        <v-btn v-if="!isMobile" variant="plain" id="menu-activator2">
          會員專區
        </v-btn>
        <v-menu activator="#menu-activator2" transition="fade-transition">
          <v-list class="listtext" :elevation="2">
            <template v-for="user in users" :key="user.to">
              <v-list-item v-if="user.show" :to="user.to">
                <v-list-item-title class="text-body-2">{{ user.title }}</v-list-item-title>
              </v-list-item></template>
            <v-list-item v-if="isLogin" @click="logout">
              <v-list-item-title class="text-body-2">登出</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn v-if="!isMobile" variant="plain" to="/cart">
          <v-badge color="#EF5350" :content="cart.toString()">
            <v-icon icon="mdi-cart-outline" size="x-large"></v-icon>
          </v-badge></v-btn>
      </template>
    </v-container>
  </v-app-bar>
  <v-navigation-drawer v-if="isMobile" v-model="drawer" location="right" temporary>
    <v-list v-model:opened="open">
      <v-list-group value="Users">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" title="關於我們"></v-list-item>
        </template>
        <v-list-item v-for="item in items" :key="item.to" :to="item.to">
          <v-list-item-title class="text-body-2">{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list-group>
      <v-list-item title="全部活動" to="/activity"></v-list-item>
      <v-list-group>
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" title="會員專區"></v-list-item>
        </template>
        <template v-for="user in users" :key="user.to">
          <v-list-item v-if="user.show" :to="user.to">
            <v-list-item-title class="text-body-2">{{ user.title }}</v-list-item-title>
          </v-list-item>
        </template>
        <v-list-item v-if="isLogin" @click="logout">
          <v-list-item-title class="text-body-2">登出</v-list-item-title>
        </v-list-item>
      </v-list-group>
      <v-list-item title="我的收藏" to="/like"></v-list-item>
      <v-list-item title="購物車" to="/cart">
        <template v-slot:append>
          <v-badge color="#EF5350" :content="cart.toString()" inline></v-badge>
        </template>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-main class="bgimg">
    <router-view :key="$route.path"></router-view>
  </v-main>
  <v-footer class="text-center d-flex flex-column" color="#0e2a47ff" theme="dark">
    <div>
      ©{{ new Date().getFullYear() }} HSU SHENG TZU — 泰山職訓局前端網頁專題(僅作學術使用)
      <v-btn v-for="icon in icons" :key="icon" :icon="icon.icon" :href="icon.link" class="ml-2" variant="text">
      </v-btn>
    </div>
  </v-footer>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useDisplay } from 'vuetify'
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia'
import { apiAuth } from '@/plugins/axios'
import { useSnackbar } from 'vuetify-use-dialog'

const createSnackbar = useSnackbar()

const user = useUserStore()
const { isLogin, isAdmin, cart } = storeToRefs(user)

const { mobile } = useDisplay()
const isMobile = computed(() => mobile.value)

const drawer = ref(false)

const items = [
  { to: '/introduce', title: '工作室介紹' },
  { to: '/print', title: '版畫小知識' },
  { to: '/service', title: '服務項目' },
  { to: '/contact', title: '聯絡我們' }
]

const users = [
  { to: '/register', title: '註冊', show: !isLogin.value },
  { to: '/login', title: '登入', show: !isLogin.value },
  { to: '/user', title: '會員中心', show: isLogin.value },
  { to: '/admin', title: '管理中心', show: isLogin && isAdmin.value }
]

const logout = async () => {
  try {
    await apiAuth.delete('/users/logout')
    user.logout()
    createSnackbar({
      text: '登出成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: '#B71C1C',
        location: 'top'
      }
    })
  } catch (error) {
    createSnackbar({
      text: error.response.data.message,
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: '#B71C1C',
        location: 'top'
      }
    })
  }
}
</script>

<script>
export default {
  data: () => ({
    open: ['Users'],
    icons: [
      { icon: 'mdi-facebook', link: 'https://www.facebook.com/TexturePrint?locale=zh_TW' },
      { icon: 'mdi-twitter', link: 'https://twitter.com/?lang=zh-Hant' },
      { icon: 'mdi-instagram', link: 'https://www.instagram.com/textureprint/' }
    ]
  })
}

</script>

<style>
.bgimg {
  background: url('/bg.jpg') !important;
  background-size: contain;
}

.logo1 {
  position: absolute;
  scale: 55%;
}

.v-menu>.v-overlay__content>.v-list {
  background: #0e2a47ff;
}
</style>
