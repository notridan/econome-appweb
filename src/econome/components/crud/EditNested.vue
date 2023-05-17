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
        <input :id="`modal-form-${index}`" :type="field.type" class="form-control mb-4" :placeholder="field.placeholder"
          v-model="form[field.model]" @keyup.enter="saveData" />
      </div>
      <div>
        <table class="table table-sm">
          <tr v-for="(item, index) in availablePermissions" :key="index">
            <!-- <td>{{ item.name }}</td> -->
            <td>
              <input type="checkbox" :value="item.id" v-model="form.permissions" /> {{ item.name }}
            </td>
          </tr>
        </table>
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
import { ref, onMounted, reactive, watchEffect } from 'vue';
import api from '@/utils/api.js'

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
  const updatedEntity = { ...props.entity, permissions: form.permissions.map(id => ({ id, name: availablePermissions.value.find(permission => permission.id === id).name })) };
  emit("update", updatedEntity);
  closeModal();
};

const form = reactive({
  permissions: [],
  // ...outros campos do formulário
});

watchEffect(() => {
  if (props.entity) {
    props.info.fields.forEach(field => {
      form[field.model] = props.entity[field.model];
    });
    form.permissions = props.entity.permissions.map(permission => permission.id);
  }
});

const fetchData = async () => {
  try {
    const response = await api.get('/api/v1/available-permissions');
    // Aqui, assumimos que a resposta tem o formato: { data: [{ id: 1, name: 'permission1' }, ...] }
    availablePermissions.value = response.data;
  } catch (error) {
    console.error(error);
  }
};

const availablePermissions = ref([]);

onMounted(fetchData);

</script>
