<template>
    <Modal size="modal-lg" :slideOver="true" :show="show" @hidden="closeModal">
        <ModalHeader class="p-5">
            <h2 class="font-medium text-base mr-auto">
                {{ info.title }}
            </h2>
        </ModalHeader>
        <ModalBody>
            <div v-for="(field, index) in info.fields" :key="index">
                <label :for="`modal-form-${index}`" class="form-label">{{ field.title }}</label>
                <input v-if="field.type !== 'select'" autocomplete="new-password" :id="`modal-form-${index}`" :type="field.type" class="form-control mb-4" :placeholder="field.placeholder" v-model="form[field.model]" @keyup.enter="saveData"/>
                <select v-else :id="`modal-form-${index}`" class="form-control mb-4" v-model="form[field.model]" @keyup.enter="saveData">
                    <option disabled value="">{{ field.placeholder }}</option>
                    <option v-for="(option, index) in field.options" :key="index" :value="option">
                      {{ option }}
                    </option>
                </select>
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
import { ref, reactive } from 'vue';

const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  info: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(["save", "update:show", "closed"]);

const closeModal = () => {
  emit("update:show", false);
  emit("closed");
};

const saveData = () => {
  emit("save", form);
  Object.keys(form).forEach(key => form[key] = '');
  closeModal();
};

const form = reactive({});
</script>
