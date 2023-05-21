<template>
    <CrudMain :config="crudConfig" />
</template>

<script setup>
import CrudMain from "@/econome/components/crud/Main.vue";
import { ref } from "vue";

const crudConfig = ref({
    tableName: "permissions",
    title: 'Cadastro de Permissões',
    createButtonText: 'Nova Permissão',
    createModalTitle: 'Adicionar Nova Permissão',
    editModalTitle: 'Editar Permissão',
    viewModalTitle: 'Detalhes da Permissão',
    columns: 1,
    fields: [
        {
            'title': 'ID',
            'model': 'id',
            'type': 'text',
            'header_styles': '',
            'row_styles': '',
            'column': 1,
            'crudPermissions': {
                'edit': false,
                'create': false,
                'view': true,
                'index': true
            }
        },
        {
            'title': 'Nome',
            'model': 'name',
            'type': 'text',
            'placeholder': 'Digite o nome do Usuário',
            'header_styles': '',
            'row_styles': '',
            'required': true,
            'column': 1,
            'crudPermissions': {
                'edit': true,
                'create': true,
                'view': true,
                'index': true
            }
        },
    ],
});

</script>