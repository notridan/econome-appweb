<template>
  <Modal size="modal-lg" :slideOver="true" :show="show" @hidden="closeModal">
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
        }">
        <div v-for="column in columns" :key="column">
          <div v-for="field in getColumnFields(column)" :key="field.model">
            <div class="mr-4" v-if="field.crudPermissions.view != false">
              <label :for="`modal-form-${field.model}`" class="form-label">{{
                field.title
              }}</label>
              <input
                v-if="
                  field.type === 'text' ||
                  field.type === 'tel' ||
                  field.type === 'number' ||
                  field.type === 'password' ||
                  field.type === 'email' ||
                  field.type === 'date'
                "
                :id="`modal-form-${field.model}`"
                :type="field.type"
                class="form-control mb-4"
                v-model="entity[field.model]"
                readonly
              />
              <div
                v-else-if="field.type === 'checkbox'"
                :id="`modal-form-${field.model}`"
                class="form-switch mt-2"
              >
                <input
                  disabled
                  :type="field.type"
                  :checked="toBoolean(entity[field.model])"
                  class="form-check-input mb-2"
                />
              </div>
              <textarea
                disabled
                v-else-if="field.type === 'textarea'"
                :id="`modal-form-${field.model}`"
                :type="field.type"
                class="form-control h-25"
                :placeholder="field.placeholder"
                v-model="entity[field.model]"
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <div v-for="child in childs" :key="child">
        <CrudNested :config="child" :masterId="entity['id']"></CrudNested>
      </div>
    </ModalBody>
    <ModalFooter class="w-full bottom-0">
      <button type="button" @click="closeModal" class="btn btn-primary w-20">
        Fechar
      </button>
    </ModalFooter>
  </Modal>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import CrudNested from '@/econome/components/crudNested/Main.vue';

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

function toBoolean(value) {
    return !!value;
}

function fromBoolean(value) {
    return value ? 1 : 0;
}

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
