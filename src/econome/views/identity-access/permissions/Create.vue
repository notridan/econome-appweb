<template>
    <Modal size="modal-lg" :slideOver="true" :show="show" @hidden="closeModal">
        <ModalHeader class="p-5">
            <h2 class="font-medium text-base mr-auto">
                Nova Permissão
            </h2>
        </ModalHeader>
        <ModalBody>
            <div>
                <label for="modal-form-1" class="form-label">Nome</label>
                <input id="modal-form-1" type="text" class="form-control" placeholder="Digite o nome da Permissão" v-model="name" @keyup.enter="saveData"/>
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
import { ref } from 'vue';

const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["save", "update:show", "closed"]);

const closeModal = () => {
  emit("update:show", false);
  emit("closed");
};

const saveData = () => {
  emit("save", { name: name.value });
  name.value = '';
  closeModal();
};


const name = ref('');
</script>
