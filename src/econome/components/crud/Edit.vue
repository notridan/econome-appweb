<template>
  <Modal size="modal-xl" :slideOver="true" :show="show" @hidden="closeModal">
    <ModalHeader class="p-5">
      <h2 class="font-medium text-base mr-auto">
        {{ title }}
      </h2>
    </ModalHeader>
    <ModalBody>
      <div
        :class="{
          // needed to compilation time process
          'grid md:grid-cols-1': columns === 1,
          'grid md:grid-cols-2': columns === 2,
          'grid md:grid-cols-3': columns === 3,
          'grid md:grid-cols-4': columns === 4,
          'grid md:grid-cols-5': columns === 5,
        }"
      >
        <div v-for="column in columns" :key="column">
          <div v-for="field in getColumnFields(column)" :key="field.model">
            <div class="mr-4 mt-3" v-if="field.crudPermissions.edit != false">
              <label :for="`modal-form-${field.model}`" class="form-label w-full flex flex-col sm:flex-row">
                {{ field.title }}
                <span v-if="field.required">*</span>
                <span
                  v-if="
                    entityStore.validationErrors != undefined &&
                    entityStore.validationErrors[field.model]
                  "
                  class="sm:ml-auto mt-1 sm:mt-0 text-xs text-red-800"
                  >{{ entityStore.validationErrors[field.model][0] }}</span
                >
              </label>
              <input
                v-maska
                :data-maska="typeof field.mask != 'string' ? JSON.stringify(field.mask) : field.mask ?? ''"
                v-if="
                  field.type === 'text' ||
                  field.type === 'tel' ||
                  field.type === 'number' ||
                  field.type === 'password' ||
                  field.type === 'email' ||
                  field.type === 'date'
                "
                autocomplete="new-password"
                :id="`modal-form-${field.model}`"
                :type="field.type"
                class="form-control"
                :class="{
                  'border-danger':
                    entityStore.validationErrors != undefined &&
                    entityStore.validationErrors[field.model],
                }"
                :placeholder="field.placeholder"
                v-model="form[field.model]"
              />

              <select
                v-else-if="field.type === 'select'"
                :id="`modal-form-${field.model}`"
                class="form-control mb-4"
                v-model="form[field.model]"
              >
                <option disabled value="null">{{ field.placeholder }}</option>
                <option
                  v-for="(option, index) in getOptions(field)"
                  :key="index"
                  :value="option.id"
                >
                  {{ option.name }}
                </option>
              </select>

              <div
                v-else-if="field.type === 'checkbox'"
                :id="`modal-form-${field.model}`"
                class="form-switch mt-2"
              >
                <input
                  :type="field.type"
                  :checked="toBoolean(form[field.model])"
                    @change="form[field.model] = fromBoolean($event.target.checked)"
                  class="form-check-input mb-2"
                />
              </div>

              <input
                v-else-if="field.type === 'radio'"
                :id="`modal-form-${field.model}`"
                :type="field.type"
                class="form-check-input"
                v-model="form[field.model]"
              />

              <textarea
                v-else-if="field.type === 'textarea'"
                :id="`modal-form-${field.model}`"
                :type="field.type"
                class="form-control h-25"
                :placeholder="field.placeholder"
                v-model="form[field.model]"
              ></textarea>
              <!-- <template v-if="field.type === 'select'">
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
              </template> -->
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
      <button type="button" @click="handleUpdateItem" class="btn btn-primary w-20">
        Editar
      </button>
    </ModalFooter>
  </Modal>
</template>

<script setup>
import { inject, reactive, watchEffect } from "vue";
import { createGenericStore } from "@/stores/useGenericStore";
// import UpdateNested from "@/econome/components/crudNested/Edit.vue";
import api from "@/utils/api.js";
import { vMaska } from "maska";

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
  id: {
    type: Number,
    required: true,
  },
});

function toBoolean(value) {
    return !!value;
}

function fromBoolean(value) {
    return value ? 1 : 0;
}

const config = inject("config");

const form = reactive({});
const fieldOptions = reactive({});

const useEntityStore = createGenericStore(config.tableName);
const entityStore = useEntityStore();

const emit = defineEmits(["update", "dsdsupdate:show", "closed"]);

const closeModal = () => {
  // emit("update:show", false);
  emit("closed");
};

// const saveData = () => {
//   const updatedEntity = { ...props.entity, ...form };
//   emit("update", updatedEntity);
//   closeModal();
// };

function handleUpdateItem() {
  entityStore.updateItem(props.id, form);
  closeModal();
}

watchEffect(async () => {
  await entityStore.fetchItem(props.id);
  if (entityStore.item.data) {
    props.fields.forEach(async (field) => {
      form[field.model] = entityStore.item.data[field.model];
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
  return props.fields.filter((field) => field.column === column);
};

const handleUpdate = (nestedData, child) => {
  form[child.tableName] = nestedData;
};
</script>
