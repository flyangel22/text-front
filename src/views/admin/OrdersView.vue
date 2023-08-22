<template>
  <VContainer>
    <VRow>
      <VCol cols="12">
        <h1 class="text-center">✦ 訂單管理 ✦</h1>
      </VCol>
      <VDivider></VDivider>

      <VCol cols="12">
        <VTable>
          <thead>
            <tr>
              <th>訂單編號</th>
              <th>使用者</th>
              <th>活動名稱</th>
              <th>活動日期</th>
              <th>人數</th>
              <th>費用</th>
              <th>備註</th>
              <th>訂單日期</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in orders" :key="order._id" class="h-8">
              <td>{{ order._id }}</td>
              <td>{{ order.user.account }}</td>
              <td>
                <ul>
                  <li v-for="item in order.cart" :key="item._id">
                    {{ item.product.name }} * {{ item.quantity }} 位
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
              <td>{{ order.total }}</td>
              <td>{{ order.note }}</td>
              <td>{{ new Date(order.date).toLocaleString() }}</td>
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
    const { data } = await apiAuth.get('/orders/all')
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
        color: '#B71C1C',
        location: 'bottom'
      }
    })
  }
})()
</script>
