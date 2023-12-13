<script setup>
import { RouterView } from 'vue-router'
import { useProfileStore } from '@/stores/profile'
import { watch, watchEffect } from 'vue'
import router from './router'
const profileStore = useProfileStore()

watchEffect(() => {
  if (!profileStore.isAuth) {
    router.push('/auth')
  }
})
</script>

<template>
  <RouterView />
</template>
