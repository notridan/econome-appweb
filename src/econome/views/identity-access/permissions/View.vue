<template>
    <Modal :slideOver="true" :show="show" @hidden="closeModal">
        <ModalHeader class="p-5">
            <h2 class="font-medium text-base mr-auto">
                Visualizar Papel
            </h2>
        </ModalHeader>
        <ModalBody>
            <div>
                <label for="modal-form-1" class="form-label">ID</label>
                <input id="modal-form-1" type="text" class="form-control" v-model="role.id" readonly />
                <label for="modal-form-2" class="form-label mt-4">Nome</label>
                <input id="modal-form-2" type="text" class="form-control" v-model="role.name" readonly />
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
  role: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["update:show", "closed"]);

const closeModal = () => {
  emit("update:show", false);
  emit("closed");
};

const role = ref({});

watchEffect(() => {
    role.value = props.role ? props.role : {};
});
</script>
