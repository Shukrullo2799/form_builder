<template>
  <div
    class="bg-white p-6 rounded-[10px] sm:h-[190px] flex justify-between cursor-pointer gap-2 md:flex-row flex-col"
  >
    <!-- @click="showForm" -->
    <div class="flex flex-col items-start justify-between">
      <div>
        <p class="lg:text-2xl text-xl font-500 mb-2">{{ item.title }}</p>
        <span class="opacity-50 text-sm">Автор: {{ item.author }}</span>
      </div>
      <p class="text-sm opacity-50">Дата создания: {{ item.created_at }}</p>
    </div>
    <div class="flex md:flex-col sm:flex-row justify-between sm:items-center">
      <Button
        class="lg:py-4 py-3 lg:w-[179px] sm:w-[140px] w-[120px] rounded-[10px] text-[#3EA748] border border-[#3ea748] sm:text-base hover:bg-[#f8faf8] leading-3 text-sm"
        outlined
        label="Редактировать"
        @click.stop="formStore.setSelectedForm(item)"
      />
      <Button
        class="lg:py-4 py-3 lg:w-[179px] rounded-[10px] text-[#3EA748] md:hover:bg-[#f8faf8] leading-3 sm:text-base text-sm"
        label="Удалить"
        @click.stop="formStore.removeForm(item)"
      />
    </div>
  </div>
</template>

<script setup>
import { toRefs } from 'vue'
import { useFormStore } from '@/stores/form'
import { useRouter } from 'vue-router'

const formStore = useFormStore()
const router = useRouter()
const props = defineProps({
  item: { type: Object, required: true }
})
const { item } = toRefs(props)

// const showForm = () => {
//   router.push(`/field/${item.value.id}`)
// }
</script>
