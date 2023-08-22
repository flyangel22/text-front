<template>
  <v-app-bar :elevation="1" color="#0e2a47ff" theme="dark">
    <v-container class="d-flex align-center">
      <v-btn to="/" :active="false">
        <v-app-bar-title>TEXTURE版畫工作室</v-app-bar-title>
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
        <v-btn v-if="!isMobile" variant="plain" to="/activity">最新活動</v-btn>
        <v-btn v-if="!isMobile" variant="plain" id="menu-activator2" :prepend-avatar="avatar">
          會員專區</v-btn>
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
      <v-list-item title="最新活動" to="/activity"></v-list-item>
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
      <v-list-item title="購物車" to="/cart">
        <template v-slot:append>
          <v-badge color="#EF5350" :content="cart.toString()" inline></v-badge>
        </template>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-main>
    <router-view :key="$route.path"></router-view>
  </v-main>
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
const { isLogin, isAdmin, cart, avatar } = storeToRefs(user)

const { mobile } = useDisplay()
const isMobile = computed(() => mobile.value)

const drawer = ref(false)

const items = [
  { to: '/introduce', title: '工作室介紹' },
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
        color: '#0e2a47ff',
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
    open: ['Users']
  })
}
</script>
