<template>
  <Modal size="modal-xl" :slideOver="true" :show="show" @hidden="closeModal">
    <ModalHeader class="p-5">
      <h2 class="font-medium text-base mr-auto">
        {{ title }}
      </h2>
    </ModalHeader>
    <ModalBody class="overflow-auto max-h-[calc(100vh-8rem)]">
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
            <div v-if="field.crudPermissions.create != false" class="mr-4 mt-3">
              <label
                :for="`modal-form-${field.model}`"
                class="form-label w-full flex flex-col sm:flex-row"
              >
                {{ field.title }}
                <template v-if="field.required">*</template>
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
                  v-model="form[field.model]"
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
            </div>
          </div>
        </div>
      </div>

      <div v-for="(child, index) in childs" :key="index">
        <CreateNested
          :config="child"
          @update="(nestedData) => handleUpdate(nestedData, child)"
        ></CreateNested>
      </div>
    </ModalBody>
    <ModalFooter class="w-full absolute bottom-0 left-0 px-5 py-3 bg-white">
      <button
        type="button"
        @click="closeModal"
        class="btn btn-outline-secondary w-20 mr-1"
      >
        Cancelar
      </button>
      <button
        type="button"
        @click="handleSaveNewItem()"
        class="btn btn-primary w-20"
      >
        Salvar
      </button>
    </ModalFooter>
  </Modal>
</template>

<script setup>
import { inject, reactive, watchEffect } from "vue";
import { createGenericStore } from "@/stores/useGenericStore";
import CreateNested from "@/econome/components/crudNested/Create.vue";
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
  fields: {
    type: Object,
    required: true,
  },
  childs: {
    type: Array,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
});

const config = inject("config");

const emit = defineEmits(["save", "update:show", "closed"]);

const closeModal = () => {
  emit("update:show", false);
  emit("closed");
};

const useEntityStore = createGenericStore(config.tableName);
const entityStore = useEntityStore();

const form = reactive({});
const fieldOptions = reactive({});

async function handleSaveNewItem() {
  const filledFields = Object.fromEntries(
    Object.entries(form)
      .filter(([, value]) => value != null)
      .map(([key, value]) => {
        const field = props.fields.find((i) => i.model == key);

        if (field && field.clearMaskRegex != undefined) {
          const regex = new RegExp(field.clearMaskRegex, "g");
          return [key, value.replace(regex, "")];
        } else {
          // Garante que um valor seja sempre retornado
          return [key, value];
        }
      })
  );

  await entityStore.createItem(filledFields);

  if (!entityStore.validationErrors) {
    Object.keys(form).forEach((key) => (form[key] = null));
    closeModal();
  }
}

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
  return props.fields.filter((field) => field.column === column);
};

const handleUpdate = (nestedData, child) => {
  form[child.tableName] = nestedData;
};
</script>
