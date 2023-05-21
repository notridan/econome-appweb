<template>
    <Modal :slideOver="true" :show="show" @hidden="closeModal">
        <ModalHeader class="p-5">
            <h2 class="font-medium text-base mr-auto">
                {{ title }}
            </h2>
        </ModalHeader>
        <ModalBody>
            <div v-for="(field, index) in fields" :key="index">
                <div v-if="field.view != false">
                  <label :for="`modal-form-${index}`" class="form-label">{{ field.title }}</label>
                  <input :id="`modal-form-${index}`" :type="field.type" class="form-control mb-4" v-model="entity[field.model]" readonly />
                </div>
            </div>
        </ModalBody>
        <ModalFooter class="w-full absolute bottom-0">
            <button type="button" @click="closeModal" class="btn btn-primary w-20">
                Fechar
            </button>
        </ModalFooter>
    </Modal>
  </template>
  
  <script setup>
  import { ref, watchEffect } from 'vue';
  
  const props = defineProps({
    show: {
      type: Boolean,
      required: true,
    },
    fields: {
      type: Object,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
    entity: {
      type: Object,
      required: true,
    },
  });
  
  const emit = defineEmits(["update:show", "closed"]);
  
  const closeModal = () => {
    emit("update:show", false);
    emit("closed");
  };
  
  const entity = ref({});
  
  watchEffect(() => { 
    entity.value = props.entity ? props.entity : {};
  });
  </script>
  