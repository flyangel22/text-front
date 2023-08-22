<template>
  <v-container class="custom-container">
    <v-row>
      <v-col class="my-8">
        <v-parallax height="500" src="/para.jpg">
          <div class="d-flex flex-column fill-height justify-center align-center text-white" data-aos="zoom-in"
            data-aos-duration="1500" data-aos-delay="300">
            <h1 class="text-h3 font-weight-bold mb-4">
              全部活動
            </h1>
            <h2 class="subheading">
              EVENTS
            </h2>
          </div>
        </v-parallax>
      </v-col>
    </v-row>
    <v-row class="my-4"><v-col>
        <div class="text-center">
          <v-btn variant="outlined" class="mx-4" color="#7986CB">
            <a @click="scrollToSection('#a2')">工作坊</a>
          </v-btn>
          <v-btn variant="outlined" class="mx-4" color="#F06292">
            <a @click="scrollToSection('#a3')">展覽講座</a>
          </v-btn>
          <v-btn variant="outlined" class="mx-4" color="#FB8C00">
            <a @click="scrollToSection('#a4')">投稿活動</a>
          </v-btn>
        </div>
      </v-col></v-row>
    <v-row class="mb-8">
      <v-col cols="12" class="my-6">
        <h2 class="text-center" id="a1">— 全部活動 —</h2>
      </v-col>
      <v-col cols="12" md="6" lg="4" v-for="product in products" :key="product._id">
        <ProductCard v-bind="product"></ProductCard>
      </v-col>
      <v-col cols="12" id="a2" class="my-8">
        <h2 class="text-center">— 工作坊 —</h2>
      </v-col>
      <template v-for="product in products" :key="product._id">
        <v-col cols="12" md="6" lg="4" v-if="product.category === '工作坊'">
          <ProductCard v-bind="product"></ProductCard>
        </v-col></template>
      <v-col cols="12" id="a3" class="my-8">
        <h2 class="text-center">— 展覽講座 —</h2>
      </v-col>
      <template v-for="product in products" :key="product._id">
        <v-col cols="12" md="6" lg="4" v-if="product.category === '展覽講座'">
          <ProductCard v-bind="product"></ProductCard>
        </v-col></template>
      <v-col cols="12" id="a4" class="my-8">
        <h2 class="text-center">— 投稿活動 —</h2>
      </v-col>
      <template v-for="product in products" :key="product._id">
        <v-col cols="12" md="6" lg="4" v-if="product.category === '投稿活動'">
          <ProductCard v-bind="product"></ProductCard>
        </v-col></template>
    </v-row>
  </v-container>
</template>

<script setup>
import { api } from '@/plugins/axios'
import { ref } from 'vue'
import { useSnackbar } from 'vuetify-use-dialog'
import ProductCard from '@/components/ProductCard.vue'

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

const scrollToSection = (selector) => {
  const element = document.querySelector(selector)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
