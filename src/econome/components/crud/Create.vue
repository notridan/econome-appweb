<template>
  <Modal size="modal-lg" :slideOver="true" :show="show" @hidden="closeModal">
      <ModalHeader class="p-5">
          <h2 class="font-medium text-base mr-auto">
              {{ title }}
          </h2>
      </ModalHeader>
      <ModalBody>
          <div v-for="(field, index) in fields" :key="index">
              <div v-if="field.create != false">
                <label :for="`modal-form-${index}`" class="form-label">
                  {{ field.title }}
                  <span v-if="field.required">*</span>
                </label>
                <input v-if="field.type !== 'select'" autocomplete="new-password" :id="`modal-form-${index}`" :type="field.type" class="form-control mb-4" :placeholder="field.placeholder" v-model="form[field.model]" @keyup.enter="saveData"/>
                <select v-else-if="field.type === 'select'" :id="`modal-form-${index}`" class="form-control mb-4" v-model="form[field.model]" @keyup.enter="saveData">
                  <option disabled value="null">{{ field.placeholder }}</option>
                  <option v-for="(option, index) in getOptions(field)" :key="index" :value="option.id">
                    {{ option.name }}
                  </option>
                </select>
              </div>
          </div>
      </ModalBody>
      <ModalFooter class="w-full absolute bottom-0">
          <button type="button" @click="closeModal" class="btn btn-outline-secondary w-20 mr-1">
              Cancelar
          </button>
          <button type="button" @click="saveData" class="btn btn-primary w-20">
              Salvar
          </button>
      </ModalFooter>
  </Modal>
</template>

<script setup>
import { ref, reactive, watchEffect } from 'vue';
import api from '@/utils/api.js';

const props = defineProps({
show: {
  type: Boolean,
  required: true,
},
fields: {
  type: Object,
  required: true
},
title: {
  type: String,
  required: false
}
});

const emit = defineEmits(["save", "update:show", "closed"]);

const closeModal = () => {
emit("update:show", false);
emit("closed");
};

const saveData = () => {
emit("save", form);
Object.keys(form).forEach(key => form[key] = null);
closeModal();
};

const form = reactive({});
const fieldOptions = reactive({});

watchEffect(() => {
  props.fields.forEach(async (field) => {
      form[field.model] = null; // make sure the initial value is null for select fields
      if (field.url_options) {
          try {
              const response = await api.get(field.url_options);
              if (response.data) {
                  fieldOptions[field.model] = response.data;
              }
          } catch (error) {
              console.error(error);
          }
      } else {
          fieldOptions[field.model] = field.options;
      }
  });
});

const getOptions = (field) => {
  return fieldOptions[field.model];
};
</script>
