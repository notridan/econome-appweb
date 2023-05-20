<template>
  <Modal :slideOver="true" :show="show" @hidden="closeModal">
      <ModalHeader class="p-5">
          <h2 class="font-medium text-base mr-auto">
              {{ info.title }}
          </h2>
      </ModalHeader>
      <ModalBody>
          <div v-for="(field, index) in info.fields" :key="index">
              <div v-if="field.edit != false">
                <label :for="`modal-form-${index}`" class="form-label">{{ field.title }}</label>
                <template v-if="field.type === 'select'">
                  <select :id="`modal-form-${index}`" class="form-control mb-4" v-model="form[field.model]">
                      <option v-for="option in getOptions(field)" :key="option.id" :value="option.id">{{ option.name }}</option>
                  </select>
                </template>
                <template v-else>
                    <input :id="`modal-form-${index}`" :type="field.type" class="form-control mb-4" :placeholder="field.placeholder" v-model="form[field.model]" @keyup.enter="saveData" />
                </template>
              </div>
          </div>
      </ModalBody>
      <ModalFooter class="w-full absolute bottom-0">
          <button type="button" @click="closeModal" class="btn btn-outline-secondary w-20 mr-1">
              Cancelar
          </button>
          <button type="button" @click="saveData" class="btn btn-primary w-20">
              Editar
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
  info: {
    type: Object,
    required: true,
  },
  entity: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["update", "update:show", "closed"]);

const closeModal = () => {
  emit("update:show", false);
  emit("closed");
};

const saveData = () => {
  const updatedEntity = { ...props.entity, ...form };
  emit("update", updatedEntity);
  closeModal();
};

const form = reactive({});
const fieldOptions = reactive({});

watchEffect(() => {
  if (props.entity) {
    props.info.fields.forEach(async (field) => {
      form[field.model] = props.entity[field.model];
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
  }
});

const getOptions = (field) => {
  return fieldOptions[field.model];
};
</script>
