<template>
    <CrudMain :config="crudConfig" />
</template>

<script setup>
import CrudMain from "@/econome/components/crud/Main.vue";
import { ref } from "vue";

const crudConfig = ref({
    tableName: "roles",
    title: 'Cadastro de Papéis',
    createButtonText: 'Novo Papel',
    createModalTitle: 'Adicionar Novo Papel',
    editModalTitle: 'Editar Papel',
    viewModalTitle: 'Detalhes do Papel',
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
        // Adicione mais campos conforme necessário
    ],
    childs: [ 
        {
            title: "Permissões",
            tableName: "permissions",
            fields: [
                {
                    'title': 'Nome',
                    'model': 'name',
                    'type': 'text',
                    'placeholder': 'Digite o nome do Usuário',
                    'header_styles': '',
                    'row_styles': '',
                    'crudPermissions': {
                        // 'edit': true,
                        // 'create': true,
                        // 'view': true,
                        'index': true
                    }
                },
                
            ]
        }
    ]
});

</script>