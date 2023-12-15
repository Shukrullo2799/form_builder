<template>
  <div class="min-h-screen flex">
    <Sidebar class="h-screen">
      <router-link to="/">
        <span class="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
          >
            <path
              d="M7.91659 5H2.08325"
              stroke="black"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.99992 7.91732L2.08325 5.00065L4.99992 2.08398"
              stroke="black"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Назад
        </span>
      </router-link>
      <ul class="list-none flex flex-col gap-4 mt-[50px]">
        <li v-for="(page, i) in links" :key="i">
          <span
            class="cursor-pointer"
            :class="{ 'text-[#3EA748]': activeTab === i }"
            @click="activeTab = i"
          >
            {{ page.title }}
          </span>
        </li>
      </ul>
      <div class="mt-auto">
        <Button
          class="py-4 w-40 rounded-[10px] text-[#3EA748] border border-[#3ea748] hover:bg-[#f8faf8]"
          outlined
          label="Скрипт"
        />
        <Button
          class="sm:py-4 py-3 sm:w-40 w-36 bg-[#3EA748] text-white rounded-[10px] mt-[10px]"
          label="Сохранить"
          @click="save"
        />
      </div>
    </Sidebar>
    <div class="lg:flex w-full">
      <div class="lg:w-[474px] w-full bg-[#F9F9F9] flex-shrink-0 rounded-r-lg p-[30px]">
        <h1 class="text-[40px] font-500 mb-[30px]">Поля</h1>
        <div class="flex flex-col gap-[30px] mb-[50px]">
          <p class="font-500 text-2xl leading-8">Скрытые поля</p>
          <template v-if="form.fields && form.fields.hidden">
            <FieldComp
              @delete-field="deleteField($event, 0)"
              v-for="(field, i) in form.fields?.hidden"
              :key="i"
              :item="field"
            />
          </template>
          <AddField @add-field="addField(0)" />
        </div>
        <div class="flex flex-col gap-[30px]">
          <p class="font-500 text-2xl leading-8">Поля</p>
          <template v-if="form.fields && form.fields.visible">
            <FieldComp
              @delete-field="deleteField($event, 1)"
              v-for="(field, i) in form.fields?.visible"
              :key="i"
              :item="field"
            />
          </template>
          <AddField @add-field="addField(1)" />
          <AddField phrase="Добавить страницу формы" />
        </div>
      </div>
      <div class="bg-[#3EA748] flex-grow pt-[88px]">
        <FieldResult :item="form" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '@/components/Sidebar.vue'
import FieldResult from '@/components/FieldResult.vue'
import AddField from '@/components/AddField.vue'
import { onMounted, ref } from 'vue'
import FieldComp from '@/components/FieldComp.vue'
import { useFormStore } from '@/stores/form'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const formStore = useFormStore()
const links = [
  { title: 'Тип формы' },
  { title: 'Тип формы' },
  { title: 'Поля' },
  { title: 'Правила показа полей' },
  { title: 'Другие настройки' }
]
const activeTab = ref(2)
const save = () => {
  if (route.params.id) {
    formStore.updateForm(route.params.id, form.value)
  } else {
    formStore.createForm(form.value)
  }
  router.push('/')
}

const form = ref({ fields: { hidden: [], visible: [] } })
onMounted(() => {
  if (route.params.id) form.value = formStore.getFormById(route.params.id)
})
const addField = (i) => {
  i
    ? form.value.fields.visible.push({
        label: 'Поля',
        type: 'text',
        required: false
      })
    : form.value.fields.hidden.push({
        label: 'Поля',
        type: 'text',
        required: false
      })
}
const deleteField = (item, i) => {
  if (i) {
    const index = form.value.fields.visible.indexOf(item)
    if (index > -1) {
      form.value.fields.visible.splice(index, 1)
    }
  } else {
    const index = form.value.fields.hidden.indexOf(item)
    if (index > -1) {
      form.value.fields.hidden.splice(index, 1)
    }
  }
}
</script>
