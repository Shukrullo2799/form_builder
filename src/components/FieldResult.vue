<template>
  <form class="bg-white p-10 mx-auto max-w-[349px] rounded-[20px]">
    <h3 class="font-500 text-2xl mb-[30px]">Форма регистрации участников</h3>
    <div class="flex flex-col gap-[10px]">
      <template v-if="item.fields && item.fields.hidden">
        <div v-for="(field, i) in item.fields?.hidden" :key="i">
          <InputText
            placeholder="Введите"
            v-model="field.label"
            class="bg-[#F6F6F6] p-[30px] h-[70px] w-full"
          />
          <span class="text-red-500 text-sm" v-if="field.required">Обязательное поле</span>
        </div>
      </template>
      <template v-if="item.fields && item.fields.visible">
        <div v-for="(field, i) in item.fields?.visible" :key="i">
          <InputText
            placeholder="Введите"
            v-model="field.label"
            class="bg-[#F6F6F6] p-[30px] h-[70px] w-full"
          />
          <span class="text-red-500 text-sm" v-if="field.required">Обязательное поле</span>
        </div>
      </template>
    </div>
    <div class="flex gap-4 items-start mt-[30px] mb-[50px]">
      <Checkbox
        class="border border-[#3EA748] min-w-[28px] h-7 rounded bg-transparent flex items-center justify-center"
        v-model="checked"
        :binary="true"
      />
      <p class="opacity-50 text-sm">
        Нажимая кнопку «Отправить», я принимаю условия политики конфиденциальности
      </p>
    </div>
    <Button
      class="py-4 w-full bg-[#3EA748] text-white rounded-[10px] leading-3"
      label="Отправить"
      @click="send"
    />
  </form>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const checked = ref(false)
const send = () => {}
</script>
