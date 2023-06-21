<template>
  <div>
    <div class="w-full flex justify-center border-t border-slate-200/60 dark:border-darkmode-400 mt-6">
      <div class="bg-white dark:bg-darkmode-600 px-5 -mt-3 text-slate-500">
          {{config.title}}
      </div>
    </div>
    <div v-for="(nestedField, index) in config.fields" :key="index">
      <label>{{ nestedField.title }}</label>
      <div v-for="(option, i) in nestedField.options" :key="i">
        <div class="form-switch mt-2">
          <label class="relative inline-flex items-center cursor-pointer">
            <input v-model="nestedForm[option.id]" type="checkbox" class="form-check-input">
            <span class="ml-3 text-sm font-light text-gray-900 dark:text-gray-300">{{ option.name }}</span>
          </label>
        </div>  
      </div>

      
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted, watchEffect } from 'vue';
import api from '@/utils/api.js';

// MODULE INFO
const props = defineProps({
  config: Object,
});

const nestedForm = reactive({});

onMounted(async () => {
  for (let field of props.config.fields) {
    if (field.url_options) {
      const response = await api.get(field.url_options);
      field.options = response.data;
    }
  }
});

const emit = defineEmits(["update"]);

watchEffect(() => {
  emit('update', nestedForm);
});
</script>