<template>
    <CrudMain :config="crudConfig" />
</template>

<script setup>
import CrudMain from "@/econome/components/crud/Main.vue";
import { ref } from "vue";

const crudConfig = ref({
    tableName: "permissions",
    title: 'Cadastro de Permissoes',
    createButtonText: 'Adicionar Nova Permissão',
    createModalTitle: 'Adicionar Nova Permissão',
    editModalTitle: 'Editar Permissão',
    viewModalTitle: 'Detalhes da Permissão',
    fields: [
        {
            'title': 'ID',
            'model': 'id',
            'type': 'text',
            'edit': false,
            'create': false,
            'header_styles': '',
            'row_styles': ''
        },
        {
            'title': 'Nome',
            'model': 'name',
            'type': 'text',
            'placeholder': 'Digite o nome do Usuário',
            'header_styles': '',
            'row_styles': '',
            'required': true
        }
    ],
});

</script>