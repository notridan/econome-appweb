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
            <div class="mr-4" v-if="field.crudPermissions.view != false">
              <label :for="`modal-form-${field.model}`" class="form-label">{{
                field.title
              }}</label>
              <input
                :id="`modal-form-${field.model}`"
                :type="field.type"
                class="form-control mb-4"
                v-model="entity[field.model]"
                readonly
              />
            </div>
          </div>
        </div>
      </div>
      <div v-for="child in childs" :key="child">
        <div v-if="entity[child.model]['data'].length">
          <div
            class="w-full border-t border-slate-200/60 dark:border-darkmode-400 border-dashed mt-4"
          ></div>
          <h5 class="text-lg font-medium leading-none mt-3 mb-3">
            {{ child.title }}
          </h5>
          <div class="overflow-x-auto">
            <table class="table table-sm table-hover">
              <thead class="table-light">
                <tr>
                  <th
                    v-for="(column, index) in child.fields"
                    :key="index"
                    class="whitespace-nowrap"
                  >
                    {{ column.title }}
                  </th>
                </tr>
              </thead>
              <tbody v-if="entity[child.model]">
                <tr
                  v-for="(entity, index) in entity[child.model]['data']"
                  :key="index"
                >
                  <td v-for="column in child.fields" :key="column.model">
                    {{ entity[column.model] }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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
import { ref, watchEffect } from "vue";

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
    type: Array,
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

const getColumnFields = (column) => {
  return props.fields.filter(
    (field, index) => index % props.columns === column - 1
  );
};
</script>
