<template>
  <v-parallax height="500" src="/contact0-1.jpg">
    <div class="bg-mask1"></div>
    <div class="d-flex flex-column fill-height justify-center align-center text-white" data-aos="zoom-in"
      data-aos-duration="1500" data-aos-delay="300">
      <h1 class="text-h3 font-weight-bold mb-4">
        聯絡我們
      </h1>
      <h2 class="subheading">
        CONTACT US
      </h2>
    </div>
  </v-parallax>
  <v-container class="custom-container">
  </v-container>
</template>
<script setup>
import { api } from '@/plugins/axios'
import { ref } from 'vue'
import { useSnackbar } from 'vuetify-use-dialog'

const createSnackbar = useSnackbar()

const products = ref([]);

(async () => {
  try {
    const { data } = await api.get('/products')
    products.value.push(...data.result)
  } catch (error) {
    createSnackbar({
      text: error.response.data.message,
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'red',
        location: 'bottom'
      }
    })
  }
})()

</script>
<script>
export default {
  data: () => ({
    tab: null
  })
}
</script>
