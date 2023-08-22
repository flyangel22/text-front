<template>
  <v-container>
    <v-row>
      <v-col>
        <v-list class="text-center d-flex flex-column align-center">
          <v-avatar color="grey" size="150">
            <v-img cover :src="avatar"></v-img>
          </v-avatar>
          <v-card-title text-center>{{ account }}</v-card-title>
          <v-card-title text-center>{{ email }}</v-card-title>

        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/store/user'

const user = useUserStore()
const { account, email, avatar } = storeToRefs(user)

</script>
