import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'

export const useFormStore = defineStore('form', () => {
  const form_list = ref([
    {
      id: 1,
      title: 'Форма регистрации участников 1',
      author: 'user1',
      created_at: '01.01.23',
      fields: {
        hidden: [
          {
            label: 'Фамилия',
            type: 'text',
            required: true
          }
        ],
        visible: [
          {
            label: 'Фамилия',
            type: 'text',
            required: true
          },
          {
            label: 'Имя',
            type: 'text',
            required: false
          }
        ]
      }
    },
    {
      id: 2,
      title: 'Форма регистрации участников 2',
      author: 'user1',
      created_at: '01.01.23',
      fields: {
        hidden: [
          {
            label: 'Фамилия',
            type: 'text',
            required: true
          }
        ],
        visible: [
          {
            label: 'Фамилия 2',
            type: 'text',
            required: true
          },
          {
            label: 'Имя',
            type: 'text',
            required: false
          }
        ]
      }
    },
    {
      id: 3,
      title: 'Форма регистрации участников 3',
      author: 'user1',
      created_at: '01.01.23',
      fields: {
        hidden: [],
        visible: [
          {
            label: 'Фамилия 3',
            type: 'text',
            required: true
          },
          {
            label: 'Имя',
            type: 'text',
            required: false
          }
        ]
      }
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
  const getFormById = (id) => {
    return form_list.value.find((form) => form.id == id)
  }
  const removeForm = (form) => {
    form_list.value.splice(form_list.value.indexOf(form), 1)
  }
  const updateForm = (form) => {
    const index = form_list.value.findIndex((f) => f.id == form.id)
    form_list.value[index] = form
  }
  const createForm = (form) => {
    form.author = 'user1'
    form.created_at = new Date().toLocaleDateString('ru-RU')
    form.title = 'Форма'
    form.id = form_list.value.length + 1
    form_list.value.push(form)
  }

  return {
    form_list,
    getFormData,
    selected_form,
    getSelectedForm,
    setSelectedForm,
    removeForm,
    getFormById,
    updateForm,
    createForm
  }
})
