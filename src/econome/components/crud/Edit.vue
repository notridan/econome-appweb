<template>
  <Modal size="modal-xl" :slideOver="true" :show="show" @hidden="closeModal">
    <ModalHeader class="p-5">
      <h2 class="font-medium text-base mr-auto">
        {{ title }}
      </h2>
    </ModalHeader>
    <ModalBody>
      <div :class="`grid md:grid-cols-${maxColumn}`">
        <div v-for="column in maxColumn" :key="column">
          <div v-for="field in getColumnFields(column)" :key="field.model">
            <div class="mr-4" v-if="field.crudPermissions.edit != false">
              <label :for="`modal-form-${field.model}`" class="form-label">
              {{ field.title }}
              <span v-if="field.required">*</span></label>
              <template v-if="field.type === 'select'">
                <select
                  :id="`modal-form-${field.model}`"
                  class="form-control mb-4"
                  v-model="form[field.model]"
                >
                  <option
                    v-for="option in getOptions(field)"
                    :key="option.id"
                    :value="option.id"
                  >
                    {{ option.name }}
                  </option>
                </select>
              </template>
              <template v-else>
                <input
                  :id="`modal-form-${field.model}`"
                  :type="field.type"
                  class="form-control mb-4"
                  :placeholder="field.placeholder"
                  v-model="form[field.model]"
                  @keyup.enter="saveData"
                />
              </template>
            </div>
          </div>
        </div>
      </div>

      <!-- <div>
        <div v-for="(child, index) in childs" :key="index">
          <UpdateNested :config="child" @update="nestedData => handleUpdate(nestedData, child)"></UpdateNested>    
        </div>
      </div> -->
    </ModalBody>
    <ModalFooter class="w-full absolute bottom-0">
      <button
        type="button"
        @click="closeModal"
        class="btn btn-outline-secondary w-20 mr-1"
      >
        Cancelar
      </button>
      <button type="button" @click="saveData" class="btn btn-primary w-20">
        Editar
      </button>
    </ModalFooter>
  </Modal>
</template>

<script setup>
import { ref, reactive, watchEffect } from "vue";
import UpdateNested from '@/econome/components/crudNested/Edit.vue';
import api from "@/utils/api.js";

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
  childs: {
    type: Array,
    required: false,
  },
  fields: {
    type: Array,
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

let maxColumn = Math.max(...props.fields.map(field => field.column));

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
    props.fields.forEach(async (field) => {
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

const getColumnFields = (column) => {
  return props.fields.filter(field => field.column === column);
};

const handleUpdate = (nestedData, child) => {
  form[child.tableName] = nestedData;
};
</script>
