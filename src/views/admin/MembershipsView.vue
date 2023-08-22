<template>
  <VContainer>
    <VRow>
      <VCol cols="12">
        <h1 class="text-center">✦ 會員管理 ✦</h1>
      </VCol>
      <VDivider></VDivider>
      <VCol cols="4">
        <VCard class="d-flex flex-column align-center">
          <v-avatar color="grey" size="150">
            <v-img cover :src="avatar"></v-img>
          </v-avatar>
          <v-card-title text-center class=" my-4">{{ account }}</v-card-title>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/store/user'

const user = useUserStore()
const { avatar, account } = storeToRefs(user)
</script>
