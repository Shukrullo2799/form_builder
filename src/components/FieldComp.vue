<template>
  <div class="flex flex-col gap-[10px]">
    <div class="flex gap-1 items-center justify-between">
      <div>
        <span class="opacity-50">{{ item.label }}</span>
        <!-- <span class="opacity-50">{{ item.type }}</span> -->
      </div>
      <span class="text-[#3EA748] cursor-pointer" @click="$emit('delete-field', item)"
        >Удалить поле</span
      >
    </div>
    <InputText class="w-full p-[30px] bg-white rounded-[10px]" v-model="item.label" />
    <div class="flex gap-4 items-center">
      <Checkbox v-model="item.required" :binary="true" />
      <span class="font-500">Сделать поле обязательным</span>
    </div>
  </div>
</template>

<script setup>
import { toRefs } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    default: () => ({})
  }
})
const { item } = toRefs(props)
</script>
