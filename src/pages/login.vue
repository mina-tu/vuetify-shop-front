<template>
  <v-main class="gradient-background">
  <v-container class="logincard ">
    <v-row>
      <v-col cols="12">
        <h1 class="gradient-text text-h4 font-weight-bold text-center" style="line-height: 2;">Login</h1>
      </v-col>
      <v-col cols="12" style="padding: 2rem;">
        <v-form :disabled="isSubmitting" @submit.prevent="submit">
          <v-text-field
            label="帳號"
            minlength="4" maxlength="20" counter
            v-model="account.value.value"
            :error-messages="account.errorMessage.value"
            class="blue-text"
          ></v-text-field>
          <v-text-field
            label="密碼"
            minlength="4" maxlength="20" counter
            type="password"
            v-model="password.value.value"
            :error-messages="password.errorMessage.value"
            class="blue-text"
          ></v-text-field>
          <div class="text-center">
            <v-btn class="custom-btn" type="submit" color="green" :loading="isSubmitting">登入</v-btn>
          </div>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</v-main>
</template>

<script setup>
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { useRouter } from 'vue-router'
import validator from 'validator'
import { definePage } from 'vue-router/auto'
import { useUserStore } from '@/stores/user'
import { useSnackbar } from 'vuetify-use-dialog'

definePage({
  meta: {
    title: '達耀工程有限公司 | 登入',
    login: false,
    admin: false
  }
})

const router = useRouter()
const user = useUserStore()
const createSnackbar = useSnackbar()

const schema = yup.object({
  account: yup
    .string()
    .required('使用者帳號必填')
    .min(4, '使用者帳號長度不符')
    .max(20, '使用者帳號長度不符')
    .test(
      // .test(自訂驗證名稱, 錯誤訊息, 驗證 function)
      'isAlphanumeric', '使用者帳號格式錯誤',
      (value) => {
        return validator.isAlphanumeric(value)
      }
    ),
  password: yup
    .string()
    .required('使用者密碼必填')
    .min(4, '使用者密碼長度不符')
    .max(20, '使用者密碼長度不符')
})

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: schema
})
const account = useField('account')
const password = useField('password')

const submit = handleSubmit(async (values) => {
  const result = await user.login(values)
  if (result === '登入成功') {
    createSnackbar({
      text: result,
      snackbarProps: {
        color: 'blue'
      }
    })
    router.push('/')
  } else {
    createSnackbar({
      text: result,
      snackbarProps: {
        color: 'red'
      }
    })
  }
})
</script>
<style>
.gradient-background {
  background: url('@/assets/Abstract.jpg');
  height: 100vh; /* 確保背景覆蓋整個視窗高度 */
}
.gradient-text {
  background: linear-gradient(to bottom,rgb(0, 238, 255),blue); /* 漸層顏色 */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.logincard {
  background: white;
  max-width: 550px;
  height: 400px;
  border-radius: 10px;
  margin: 5% auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
.custom-btn {
  background: linear-gradient(to bottom,rgb(0, 70, 248),blue); /* 漸層顏色 */
  color: white !important;
}
.blue-text {
  color: blue !important;
}
</style>
