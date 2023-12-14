<script setup>
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { useProfileStore } from '@/stores/profile'
import { useRouter } from 'vue-router'
import { computed, ref } from 'vue'
const router = useRouter()
const profileStore = useProfileStore()

const form = ref({})
const rules = computed(() => {
  return {
    login: { required },
    password: { required }
  }
})
const v$ = useVuelidate(rules, form)

const login = () => {
  v$.value.$validate().then((valid) => {
    if (valid) {
      profileStore.setToken('123456')
      router.push('/')
    }
  })
}
</script>

<template>
  <div class="md:flex h-screen bg-[#3EA748]">
    <div
      class="md:w-[624px] h-full flex-shrink-0 sm:pt-[80px] lg:pr-[95px] sm:pb-[70px] py-10 lg:pl-[170px] sm:px-16 px-4 flex justify-between flex-col bg-white rounded-r-lg"
    >
      <div class="flex flex-col gap-[30px]">
        <img src="@/assets/logo.svg" width="117" alt="" />
        <h2 class="sm:text-5xl text-3xl font-500">Авторизация</h2>
        <form @submit.prevent="login" class="">
          <div class="flex flex-col mb-5">
            <InputText
              v-model="form.login"
              class="mb-2 p-5 border-round-xl bg-[#F6F6F6] border-0"
              placeholder="Логин"
            />
            <span class="text-red-500 text-sm" v-if="v$.login.$error">Обязательное поле</span>
            <InputText
              type="password"
              class="p-5 border-round-xl bg-[#F6F6F6] border-0 mt-2"
              placeholder="Пароль"
              v-model="form.password"
            />
            <span class="text-red-500 text-sm" v-if="v$.password.$error">Обязательное поле</span>
          </div>
          <Button
            class="py-4 w-40 bg-[#3EA748] font-500 text-white rounded-[10px]"
            type="submit"
            label="Вход"
          />
        </form>
      </div>

      <div class="max-w-[280px] text-[#676767]">
        <p class="mb-2">
          Если возникла проблема, то можете написать
          <span class="text-[#3EA748] underline"> Алёне из Сибтеха </span>
        </p>
        <p>
          С любовью, ваш
          <span class="text-[#3EA748] underline"> Сибтех </span>
        </p>
      </div>
    </div>
    <div class="h-full w-full hidden md:block"></div>
  </div>
</template>
