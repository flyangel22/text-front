<template>
  <div style="background-image: url(/bg.jpg);height: 100vh;">
    <v-toolbar>
      <v-container class="d-flex align-center" style="color: #0e2a47ff;">
        <v-btn to="/" :active="false">
          <v-app-bar-title>
            <p>TEXTURE版畫工作室</p>
          </v-app-bar-title>
        </v-btn>
        <v-spacer></v-spacer>
        <p>管理中心</p>
      </v-container>
    </v-toolbar>
    <v-container>
      <v-row>
        <v-col cols="2">
          <v-card class="mx-auto pa-12 pb-8" height="800px">
            <v-list class="text-center d-flex flex-column align-center">
              <v-avatar color="grey" size="150">
                <v-img cover :src="avatar"></v-img>
              </v-avatar>
              <v-card-title text-center class=" my-4">{{ account }}</v-card-title>
            </v-list>
            <VDivider></VDivider>
            <v-list>
              <VListItem v-for="navItem in navItems" :key="navItem.to" :to="navItem.to" :title="navItem.title"
                :prepend-icon="navItem.icon"></VListItem>
            </v-list>
          </v-card>
        </v-col>
        <v-col cols="10">
          <v-card class="mx-auto pa-12 pb-8">
            <VMain>
              <router-view></router-view>
            </VMain>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/store/user'

const user = useUserStore()
const { avatar, account } = storeToRefs(user)

const navItems = [
  { to: '/admin/products', title: '活動管理', icon: 'mdi-star-shooting-outline' },
  { to: '/admin/orders', title: '報名管理', icon: 'mdi-format-list-numbered' },
  { to: '/', title: '回首頁', icon: 'mdi-home-outline' }
]
</script>
