<template>
  <v-hover v-slot="{ isHovering, props }" close-delay="100">
    <VCard class="mt-8 mx-auto" :elevation="isHovering ? 16 : 2" :class="{ 'on-hover': isHovering }" height="350"
      max-width="350" v-bind="props">
      <RouterLink :to="'/activity/' + _id">
        <VImg :src="image" cover height="250">
        </VImg>
      </RouterLink>
      <VCardTitle>
        <RouterLink :to="'/activity/' + _id" class="text-decoration-none">
          <h3 class="cardtitle"> {{ name }}</h3>
        </RouterLink>
      </VCardTitle>
      <VRow>
        <VCol cols="9">
          <VCardText>
            <v-icon icon="mdi-clock-outline" size="18" class="me-1 pb-1"></v-icon>
            {{ date }}
          </VCardText>
        </VCol>
        <VCol cols="3" class="d-flex justify-end">
          <v-chip :color="getChipColor(category)" class="cardright mt-4 mr-2" variant="elevated" size="small" label>
            {{ category }}
          </v-chip>
        </VCol>
      </VRow>
    </VCard>
  </v-hover>
</template>

<script setup>
import { apiAuth } from '@/plugins/axios'
import { useUserStore } from '@/store/user'
import { useSnackbar } from 'vuetify-use-dialog'

const createSnackbar = useSnackbar()
const user = useUserStore()

const props = defineProps({
  _id: {
    type: String,
    default: () => ''
  },
  category: {
    type: String,
    default: () => ''
  },
  description: {
    type: String,
    default: () => ''
  },
  image: {
    type: String,
    default: () => ''
  },
  name: {
    type: String,
    default: () => ''
  },
  date: {
    type: String,
    default: () => ''
  },
  price: {
    type: Number,
    default: () => 0
  },
  sell: {

    type: Boolean,
    default: () => true
  }
})

const getChipColor = (category) => {
  // 根据 category 值返回相应的颜色
  if (category === '工作坊') {
    return '#7986CB'
  } else if (category === '展覽講座') {
    return '#F06292'
  } else {
    return '#FB8C00'
  }
}

</script >

<style>
.cardright {
  flex-direction: row-reverse;
}

.v-card-text {
  font-size: 1rem;
  font-weight: 400;
  padding: 1.2rem;
}
</style>
<style lang="sass" scoped>
.v-card.on-hover.v-theme--dark
  background-color: rgba(#FFF, 0.8)
  >.v-card__text
    color: #000
</style>
