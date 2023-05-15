<template>
    <Modal :show="show" @hidden="closeModal">
        <ModalBody class="p-0">
            <div class="p-5 text-center">
                <XCircleIcon class="w-16 h-16 text-danger mx-auto mt-3" />
                <div class="text-3xl mt-5">Tem certeza?</div>
                <div class="text-slate-500 mt-2">
                    Você quer mesmo deletar esse lançamento? <br />Esse processo não pode ser desfeito.
                </div>
            </div>
            <div class="px-5 pb-8 text-center">
                <button type="button" @click="show = false" class="btn btn-outline-secondary w-24 mr-1">
                    Cancelar
                </button>
                <button type="button" @click="confirmDelete" class="btn btn-danger w-24">Deletar</button>
            </div>
        </ModalBody>
    </Modal>
</template>

<script setup>

const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["delete", "update:show", "closed"]);

const closeModal = () => {
  emit("update:show", false);
  emit("closed");
};

const confirmDelete = () => {
  emit("delete");
  closeModal();
};

</script>