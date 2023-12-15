<template>
  <div
    class="border border-dashed border-[#3EA748] px-[30px] py-[20px] rounded-[10px] flex items-center justify-between gap-3 cursor-pointer hover:bg-[#edf4ed]"
    @click="addField"
  >
    <span class="text-[#3EA748]">{{ props.phrase }}</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
      <path
        d="M15 6.25V23.75"
        stroke="#3EA748"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.25 15H23.75"
        stroke="#3EA748"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>

<script setup>
const props = defineProps({
  phrase: {
    type: String,
    default: 'Добавить поле'
  }
})
const emit = defineEmits(['add-field'])
const addField = () => {
  emit('addField')
}
</script>
