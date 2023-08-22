<template>
  <VContainer class="custom-container">
    <VCard class="mx-auto pa-12 pb-8">
      <VRow>
        <VCol cols="12">
          <h1 class="text-center">✦ 購物車 ✦</h1>
        </VCol>
        <VCol cols="12">
          <VTable>
            <thead class="bg-color">
              <tr>
                <th class="text-white">活動封面</th>
                <th class="text-white">活動名稱</th>
                <th class="text-white">活動日期</th>
                <th class="text-white text-center">人數</th>
                <th class="text-white">費用</th>
                <th class="text-white">小計</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cart" :key="item._id" :class="{ 'bg-red-lighten-5': !item.product.sell }">
                <td>
                  <VImg :src="item.product.image" cover width="150" aspect-ratio="1"></VImg>
                </td>
                <td>{{ item.product.name }}</td>
                <td>{{ item.product.date }}</td>
                <td class="text-center">
                  <VBtn color="primary" variant="text" icon="mdi-minus" @click="updateCart(item.product._id, -1)"></VBtn>
                  {{ item.quantity }}
                  <VBtn color="primary" variant="text" icon="mdi-plus" @click="updateCart(item.product._id, 1)"></VBtn>
                </td>
                <td>{{ item.product.price }}</td>

                <td>{{ item.quantity * item.product.price }}</td>

              </tr>
              <tr v-if="cart.length === 0">
                <td colspan="6" class="text-center">沒有商品</td>
              </tr>
            </tbody>
          </VTable>
        </VCol>
        <VDivider></VDivider>

        <VCol cols="12" class="text-center mt-4 ml-4">
          <VTextarea v-model="orderNote" label="備註" rows="4" prepend-icon="mdi-message-reply-text-outline"
            variant="outlined">
          </VTextarea>
        </VCol>
        <VCol cols="12" class="text-center ">
          <h2>總計費用: ${{ total }}</h2>
          <VBtn color="#0e2a47ff" theme="dark" @click="submit" :disabled="!canCheckout" class="mt-4">報名</VBtn>
        </VCol>
      </VRow>
    </VCard>
  </VContainer>
</template>

<script setup>
import { ref, computed } from 'vue'
import { apiAuth } from '@/plugins/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useUserStore } from '@/store/user'
import { useRouter } from 'vue-router'

const createSnackbar = useSnackbar()
const user = useUserStore()
const router = useRouter()

const cart = ref([])
const orderNote = ref('')

const updateCart = async (product, quantity) => {
  try {
    const { data } = await apiAuth.post('/users/cart', {
      product,
      quantity
    })
    const idx = cart.value.findIndex(item => item.product._id === product)
    if (cart.value[idx].quantity + quantity > 5) {
      createSnackbar({
        text: '超過人數上限',
        showCloseButton: false,
        snackbarProps: {
          timeout: 2000,
          color: '#B71C1C',
          location: 'bottom'
        }
      })
      // 停止計算
      return
    }

    // 更新数量
    cart.value[idx].quantity += quantity
    // 移除數量是 0 的商品
    if (cart.value[idx].quantity <= 0) {
      cart.value.splice(idx, 1)
    }
    user.cart = data.result
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
}

const total = computed(() => {
  return cart.value.reduce((total, current) => total + (current.quantity * current.product.price), 0)
})

const canCheckout = computed(() => {
  return cart.value.length > 0 && !cart.value.some(item => !item.product.sell)
})

const submit = async (req, res) => {
  try {
    await apiAuth.post('/orders', { note: orderNote.value })
    user.cart = 0
    router.push('/orders')
  } catch (error) {
    console.log(error)
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
}

(async () => {
  try {
    const { data } = await apiAuth.get('/users/cart')
    cart.value.push(...data.result)
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
