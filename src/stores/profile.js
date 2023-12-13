import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProfileStore = defineStore('profile', () => {
  const token = ref(localStorage.getItem('token') || null)
  const user = ref(JSON.parse(localStorage.getItem('user') || '{}'))
  const isAuth = computed(() => !!token.value)

  const setToken = (newToken) => {
    token.value = newToken
    localStorage.setItem('token', newToken)
  }
  return {
    token,
    user,
    isAuth,
    setToken
  }
})
