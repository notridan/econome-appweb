<template>
    <Modal :slideOver="true" :show="show" @hidden="closeModal">
        <ModalHeader class="p-5">
            <h2 class="font-medium text-base mr-auto">
                Editar Papel
            </h2>
        </ModalHeader>
        <ModalBody>
            <div>
                <label for="modal-form-1" class="form-label">Nome</label>
                <input id="modal-form-1" type="text" class="form-control" placeholder="Digite o nome do papel" v-model="name" @keyup.enter="saveData" />
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
import { ref, watchEffect } from 'vue';

const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  role: {
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
  emit("update", { id: props.role.id, name: name.value });
  closeModal();
};

const name = ref('');

watchEffect(() => {
    name.value = props.role ? props.role.name : '';
});
</script>
