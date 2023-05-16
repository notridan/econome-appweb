<template>
  <Modal :slideOver="true" :show="show" @hidden="closeModal">
      <ModalHeader class="p-5">
          <h2 class="font-medium text-base mr-auto">
              {{ info.title }}
          </h2>
      </ModalHeader>
      <ModalBody>
          <div v-for="(field, index) in info.fields" :key="index">
              <label :for="`modal-form-${index}`" class="form-label">{{ field.title }}</label>
              <input :id="`modal-form-${index}`" :type="field.type" class="form-control mb-4" :placeholder="field.placeholder" v-model="form[field.model]" @keyup.enter="saveData" />
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

watchEffect(() => {
  if (props.entity) {
    props.info.fields.forEach(field => {
      form[field.model] = props.entity[field.model];
    });
  }
});
</script>
