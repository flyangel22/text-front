<template>
  <VContainer>
    <VRow>
      <VCol cols="12">
        <h1 class="text-center">✦ 報名紀錄 ✦</h1>
      </VCol>
      <VCol cols="12">
        <VTable>
          <thead class="bg-color">
            <tr>
              <th class="text-white">訂單編號</th>
              <th class="text-white">活動名稱</th>
              <th class="text-white">活動日期</th>
              <th class="text-white">人數</th>
              <th class="text-white">費用</th>
              <th class="text-white">報名時間</th>
              <th class="text-white">備註</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in orders" :key="order._id" class="h-8">
              <td>{{ order._id }}</td>
              <td>
                <ul>
                  <li v-for="item in order.cart" :key="item._id">
                    {{ item.product.name }}
                  </li>
                </ul>
              </td>
              <td>
                <ul class="dot-none">
                  <li v-for="item in order.cart" :key="item._id">
                    {{ item.product.date }}
                  </li>
                </ul>
              </td>
              <td>
                <ul class="dot-none">
                  <li v-for="item in order.cart" :key="item._id">
                    {{ item.quantity }}
                  </li>
                </ul>
              </td>
              <td>${{ order.total }}</td>
              <td>{{ new Date(order.date).toLocaleString() }}</td>
              <td>{{ order.note }}</td>
            </tr>
          </tbody>
        </VTable>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script setup>
import { apiAuth } from '@/plugins/axios'
import { ref } from 'vue'
import { useSnackbar } from 'vuetify-use-dialog'

const createSnackbar = useSnackbar()

const orders = ref([]);

(async () => {
  try {
    const { data } = await apiAuth.get('/orders')
    orders.value.push(...data.result.map(order => {
      order.total = order.cart.reduce((total, current) => total + (current.product.price * current.quantity), 0)
      return order
    }))
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
