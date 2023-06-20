<template>
  <Modal size="modal-lg" :slideOver="true" :show="show" @hidden="closeModal">
    <ModalHeader class="p-5">
      <h2 class="font-medium text-base mr-auto">
        {{ title }}
      </h2>
    </ModalHeader>
    <ModalBody>
      <div :class="`grid grid-cols-${columns}`">
        <div v-for="column in columns" :key="column">
          <div v-for="field in getColumnFields(column)" :key="field.model">
            <div v-if="field.crudPermissions.create != false" class="mr-4">
              <label :for="`modal-form-${field.model}`" class="form-label">
                {{ field.title }}
                <span v-if="field.required">*</span>
              </label>
              <input v-if="field.type !== 'select'" autocomplete="new-password" :id="`modal-form-${field.model}`"
                :type="field.type" class="form-control mb-4" :placeholder="field.placeholder" v-model="form[field.model]"
                @keyup.enter="saveData" />
              <select v-else-if="field.type === 'select'" :id="`modal-form-${field.model}`" class="form-control mb-4"
                v-model="form[field.model]" @keyup.enter="saveData">
                <option disabled value="null">{{ field.placeholder }}</option>
                <option v-for="(option, index) in getOptions(field)" :key="index" :value="option.id">
                  {{ option.name }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div v-for="(child, index) in childs" :key="index">
        <CreateNested :config="child" @update="nestedData => handleUpdate(nestedData, child)"></CreateNested>    
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
import { reactive, watchEffect } from 'vue';
import CreateNested from '@/econome/components/crudNested/Create.vue';
import api from '@/utils/api.js';

const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  columns: {
    type: Number,
    required: false,
    default: 1,
  },
  fields: {
    type: Object,
    required: true
  },
  childs: {
    type: Array,
    required: false,
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

const getColumnFields = (column) => {
  return props.fields.filter((field, index) => index % props.columns === column - 1);
};

const handleUpdate = (nestedData, child) => {
  form[child.tableName] = nestedData;
};
</script>
