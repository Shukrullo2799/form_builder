<template>
  <div class="flex h-screen bg-[#F6F6F6]">
    <Sidebar>
      <ul class="list-none flex flex-col gap-4">
        <li v-for="(page, i) in pages" :key="i">
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
          label="Выход"
          @click="logout"
        />
      </div>
    </Sidebar>
    <div class="md:mt-[80px] mt-6 md:mx-[30px] mx-3 w-full max-w-[825px]">
      <div class="flex justify-between items-center mb-[50px]">
        <h2 class="sm:text-[40px] text-2xl font-500">Формы</h2>
        <Button
          class="sm:py-4 py-3 sm:w-40 w-36 bg-[#3EA748] font-500 text-white rounded-[10px]"
          label="Создать форму"
          @click="setSelectedForm({})"
        />
      </div>
      <div class="flex flex-col gap-[30px]">
        <div v-for="(item, i) in getFormData" :key="i">
          <FormCard :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '@/components/Sidebar.vue'
import FormCard from '@/components/FormCard.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useFormStore } from '@/stores/form'

const formStore = useFormStore()
const { getFormData, setSelectedForm } = formStore

const router = useRouter()

const activeTab = ref(0)
const pages = ref([{ title: 'Формы' }, { title: 'Пользователи' }])
const logout = () => {
  localStorage.removeItem('token')
  router.push('/auth')
}
</script>
