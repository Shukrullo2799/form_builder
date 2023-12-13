<script setup>
import { useProfileStore } from '@/stores/profile'
import { useRouter } from 'vue-router'
const router = useRouter()
const profileStore = useProfileStore()
const login = () => {
  profileStore.setToken('123456')
  router.push('/')
}
</script>

<template>
  Auth Index
  <button @click="login">login</button>
</template>
