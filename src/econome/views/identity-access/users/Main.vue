<template>
    <CrudMain :config="crudConfig" />
</template>

<script setup>
import CrudMain from "@/econome/components/crud/Main.vue";
import { ref } from "vue";

const crudConfig = ref({
    tableName: "users",
    title: 'Cadastro de Usuários',
    createButtonText: 'Novo Usuário',
    createModalTitle: 'Novo Usuário',
    editModalTitle: 'Editar Usuário',
    viewModalTitle: 'Detalhes do Usuário',
    columns: 2,
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
        {
            'title': 'Email',
            'model': 'email',
            'type': 'text',
            'placeholder': 'Digite o email do Usuário',
            'header_styles': '',
            'row_styles': '',
            'required': true,
            'column': 2,
            'crudPermissions': {
                'edit': true,
                'create': true,
                'view': true,
                'index': true
            }
        },
        {
            'title': 'Senha',
            'model': 'password',
            'type': 'password',
            'placeholder': 'Digite a senha do Usuário',
            'view': false,
            'header_styles': '',
            'row_styles': '',
            'required': true,
            'column': 2,
            'crudPermissions': {
                'edit': true,
                'create': true,
                'view': false,
                'index': false
            }
        },
        {
            'title': 'Papel',
            'model': 'role_id',
            'type': 'select',
            'placeholder': 'Selecione um papel',
            // 'options': ['teste', 'sysadmin', 'outros'], // when array of strings
            'url_options': '/api/v1/roles-available',// wher options come from a url
            'header_styles': '',
            'row_styles': '',
            'required': true,
            'column': 2,
            'crudPermissions': {
                'edit': true,
                'create': true,
                'view': false,
                'index': false
            }
        }, {
            'title': 'Papel',
            'model': 'role_name',
            'type': 'text',
            'create': false,
            'header_styles': '',
            'row_styles': '',
            'column': 2,
            'crudPermissions': {
                'edit': false,
                'create': false,
                'view': true,
                'index': true
            }
        }
        // Adicione mais campos conforme necessário
    ],
});

</script>