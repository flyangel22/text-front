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
    <v-tabs v-model="tab" align-tabs="center" class="mx-4" color="#1A237E" data-aos="fade-down" data-aos-duration="1000"
      data-aos-delay="300">
      <v-tab value="one" class="text-button">全部活動</v-tab>
      <v-tab value="two" color="#7986CB">工作坊</v-tab>
      <v-tab value="three" color="#F06292">展覽講座</v-tab>
      <v-tab value="four" color="#FB8C00">投稿活動
      </v-tab>
    </v-tabs>

    <v-window v-model="tab" class="my-8" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="300">
      <v-window-item value="one">
        <v-row>
          <template v-for="product in products" :key="product._id">
            <v-col cols="12" md="6" lg="4">
              <ProductCard v-bind="product">
              </ProductCard>
            </v-col>
          </template></v-row>
      </v-window-item>

      <v-window-item value="two">
        <v-row>
          <template v-for="product in products" :key="product._id">
            <v-col cols="12" md="6" lg="4" v-if="product.category === '工作坊'">
              <ProductCard v-bind="product">
              </ProductCard>
            </v-col>
          </template></v-row>
      </v-window-item>

      <v-window-item value="three">
        <v-row>
          <template v-for="product in products" :key="product._id">
            <v-col cols="12" md="6" lg="4" v-if="product.category === '展覽講座'">
              <ProductCard v-bind="product">
              </ProductCard>
            </v-col>
          </template></v-row>
      </v-window-item>
      <v-window-item value="four">
        <v-row>
          <template v-for="product in products" :key="product._id">
            <v-col cols="12" md="6" lg="4" v-if="product.category === '投稿活動'">
              <ProductCard v-bind="product">
              </ProductCard>
            </v-col>
          </template></v-row>
      </v-window-item>
    </v-window>
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

</script>

<script>
export default {
  data: () => ({
    tab: null
  })
}
</script>
