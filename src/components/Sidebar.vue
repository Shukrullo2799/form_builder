<template>
  <div
    v-if="isShow"
    class="md:w-[434px] h-full sm:pt-[80px] xl:pr-[95px] sm:pb-[72px] py-10 xl:pl-[170px] sm:px-16 px-4 flex flex-col bg-white rounded-r-lg md:static fixed left-0 top-0 shadow-2xl md:shadow-none z-20"
    :class="isShow ? 'w-[280px]' : 'w-0'"
  >
    <p class="absolute top-5 right-5 text-2xl md:hidden" @click="isShow = false">x</p>
    <img src="@/assets/logo.svg" width="117" alt="" class="block mb-[30px]" />
    <slot />
  </div>
  <div v-else class="h-full bg-white w-14 py-9 flex-shrink-0" @click="isShow = true">
    <div class="w-5 mx-auto" :class="{ 'transform rotate-180': isShow }">
      <div class="h-[1px] bg-black"></div>
      <div class="h-[1px] bg-black my-1"></div>
      <div class="h-[1px] bg-black"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const isShow = ref(window.innerWidth > 768 ? true : false)

onMounted(() => {
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      isShow.value = true
    } else {
      isShow.value = false
    }
  })
})
</script>
