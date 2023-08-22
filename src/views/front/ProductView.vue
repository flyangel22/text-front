<template>
  <VContainer class="custom-container">
    <VRow class="my-4">
      <VCol cols="12" md="6" class="pt-12">
        <VImg :src="product.image" width="600px" class="imgcenter"></VImg>
      </VCol>
      <v-divider vertical></v-divider>
      <VCol cols="12" md="6" class="pt-12 pl-8">
        <VRow>
          <VCol cols="9">
            <h1 class="mb-5">{{ product.name }}</h1>
          </VCol>
          <VCol cols="" class="d-flex justify-end">
            <v-chip :color="getChipColor(product.category)" variant="elevated" class="mt-2 " label>
              {{ product.category }}
            </v-chip>
          </VCol>
          <VCol cols="12">
            <h3 class="line-height-medium ">活動日期 : {{ product.date }}</h3>
            <h3 class="line-height-medium">報名費用 : ${{ product.price }}</h3>
            <pre class="line-height-medium">{{ product.description }}</pre>
          </VCol>
          <VCol cols="12">
            <VForm :disabled="isSubmitting" @submit.prevent="submit">
              <VTextField variant="outlined" v-model.number="quantity.value.value" type="number" label="人數" min="0"
                max="5" :error-messages="quantity.errorMessage.value"></VTextField>
              <VBtn prepend-icon="mdi-cart" type="submit" color="#0e2a47ff" theme="dark" block>加入購物車
              </VBtn>
            </VForm>
          </VCol>
        </VRow>
      </VCol>
    </VRow>
  </VContainer>
  <VOverlay :model-value="!product.sell" persistent class="align-center text-center justify-center">
    <h1 class="text-red">已下架</h1>
    <VBtn to="/">回上頁</VBtn>
  </VOverlay>
</template>

<script setup>
import { ref } from 'vue'
import { api, apiAuth } from '@/plugins/axios'
import { useRoute } from 'vue-router'
import { useSnackbar } from 'vuetify-use-dialog'
import * as yup from 'yup'
import { useForm, useField } from 'vee-validate'
import { useUserStore } from '@/store/user'

const route = useRoute()
const createSnackbar = useSnackbar()
const user = useUserStore()

const schema = yup.object({
  quantity: yup.number().required('缺少人數').min(1, '最少為 1').max(5, '最多為 5')
})
const { isSubmitting, handleSubmit } = useForm({
  validationSchema: schema,
  initialValues: {
    quantity: 0
  }
})
const quantity = useField('quantity')

const submit = handleSubmit(async (values) => {
  try {
    const { data } = await apiAuth.post('/users/cart', {
      product: product.value._id,
      quantity: values.quantity
    })
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
})

const product = ref({
  _id: '',
  name: '',
  price: 0,
  description: '',
  date: '',
  image: '',
  sell: true,
  category: ''
});

(async () => {
  try {
    const { data } = await api.get('/products/' + route.params.id)
    product.value._id = data.result._id
    product.value.name = data.result.name
    product.value.date = data.result.date
    product.value.price = data.result.price
    product.value.description = data.result.description
    product.value.image = data.result.image
    product.value.sell = data.result.sell
    product.value.category = data.result.category

    document.title = 'TEXTURE 版畫工作室 | ' + product.value.name
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

const getChipColor = (category) => {
  // 根据 category 值返回相应的颜色
  if (category === '工作坊') {
    return '#7986CB'
  } else if (category === '展覽講座') {
    return '#F06292'
  } else {
    return '#FFB74D'
  }
}
</script>

<style>
.imgcenter {
  display: block;
  margin: auto;
}
</style>
