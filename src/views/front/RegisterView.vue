<template>
  <v-container>
    <v-card class="mx-auto pa-12 pb-8 my-8" elevation="2" max-width="448" rounded="lg" data-aos="fade-down"
      data-aos-duration="1500" data-aos-delay="200">
      <v-row>
        <v-col cols="12">
          <v-card-title class="text-center text-h4">✦ 註冊 ✦</v-card-title>
        </v-col>
        <v-col cols="12">
          <v-form :disabled="isSubmitting" @submit.prevent="submit">
            <v-text-field v-model="account.value.value" :error-messages="account.errorMessage.value" label="帳號" counter
              maxlength="20" variant="outlined" prepend-inner-icon="mdi-account-circle-outline"
              class="my-2"></v-text-field>
            <v-text-field v-model="email.value.value" :error-messages="email.errorMessage.value" label="信箱" type="email"
              variant="outlined" prepend-inner-icon="mdi-email-outline" class="my-2"></v-text-field>
            <v-text-field v-model="password.value.value" :error-messages="password.errorMessage.value" label="密碼"
              type="password" counter maxlength="20" variant="outlined" prepend-inner-icon="mdi-lock-outline"
              class="my-2"></v-text-field>
            <v-text-field v-model="passwordConfirm.value.value" :error-messages="passwordConfirm.errorMessage.value"
              label="確認密碼" type="password" counter maxlength="20" variant="outlined"
              prepend-inner-icon="mdi-lock-check-outline" class="my-2">
            </v-text-field>
            <v-checkbox v-model="checkbox" :rules="[v => !!v || '必填']" label="同意我們的隱私政策" required></v-checkbox>
            <v-btn type="submit" block class="mb-8" color="#0e2a47ff" size="large" variant="flat" theme="dark">
              註冊帳號
            </v-btn>
          </v-form></v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script setup>
import validator from 'validator'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { api } from '@/plugins/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useRouter } from 'vue-router'

const createSnackbar = useSnackbar()
const router = useRouter()

const schema = yup.object({
  account: yup
    .string()
    .required('帳號必填')
    .min(4, '帳號最少 4 個字')
    .max(20, '帳號最多 20 個字'),
  email: yup
    .string()
    .required('信箱必填')
    .test(
      'isEmail', '信箱格式錯誤',
      (value) => validator.isEmail(value)
    ),
  password: yup
    .string()
    .required('密碼必填')
    .min(4, '密碼最少 4 個字')
    .max(20, '密碼最多 20 個字'),
  passwordConfirm: yup
    .string()
    .required('密碼必填')
    .min(4, '密碼最少 4 個字')
    .max(20, '密碼最多 20 個字')
    .oneOf([yup.ref('password')], '密碼不一致')
})

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: schema
})

const account = useField('account')
const email = useField('email')
const password = useField('password')
const passwordConfirm = useField('passwordConfirm')

const submit = handleSubmit(async (values) => {
  try {
    await api.post('/users', {
      account: values.account,
      email: values.email,
      password: values.password
    })
    createSnackbar({
      text: '註冊成功!',
      showCloseButton: false,
      snackbarProps: {
        timeout: 5000,
        color: '#0e2a47ff',
        location: 'top',
        variant: 'tonal'
      }
    })
    router.push('/login')
  } catch (error) {
    createSnackbar({
      text: error.response.data.message,
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: '#B71C1C',
        location: 'top'
      }
    })
  }
})
</script>

<script>
export default {
  data: () => ({
    checkbox: false
  })
}
</script>
