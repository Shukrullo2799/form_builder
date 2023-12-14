import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'

export const useFormStore = defineStore('form', () => {
  const form_list = ref([
    {
      id: 1,
      title: 'Форма регистрации участников 1',
      author: 'user1',
      created_at: '01.01.23'
    },
    {
      id: 2,
      title: 'Форма регистрации участников 2',
      author: 'user1',
      created_at: '01.01.23'
    },
    {
      id: 3,
      title: 'Форма регистрации участников 3',
      author: 'user1',
      created_at: '01.01.23'
    }
  ])
  const getFormData = computed(() => {
    return form_list.value
  })
  const selected_form = ref({})
  const getSelectedForm = computed(() => {
    return selected_form.value
  })
  const setSelectedForm = (form) => {
    selected_form.value = form
    router.push(`/field-upsert${form.id ? '/' + form.id : ''}`)
  }

  const removeForm = (form) => {
    form_list.value.splice(form_list.value.indexOf(form), 1)
  }

  return {
    form_list,
    getFormData,
    selected_form,
    getSelectedForm,
    setSelectedForm,
    removeForm
  }
})
