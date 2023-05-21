<template>
    <CrudMain :config="crudConfig" />
</template>

<script setup>
import CrudMain from "@/econome/components/crud/Main.vue";
import { ref } from "vue";

const crudConfig = ref({
    tableName: "users",
    title: 'Cadastro de Usuários',
    createButtonText: 'Adicionar Novo Usuário',
    createModalTitle: 'Adicionar Novo Usuário',
    editModalTitle: 'Editar Usuário',
    viewModalTitle: 'Detalhes do Usuário',
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
        },
        {
            'title': 'Email',
            'model': 'email',
            'type': 'text',
            'placeholder': 'Digite o email do Usuário',
            'header_styles': '',
            'row_styles': '',
            'required': true
        },
        {
            'title': 'Senha',
            'model': 'password',
            'type': 'password',
            'placeholder': 'Digite a senha do Usuário',
            'view': false,
            'header_styles': '',
            'row_styles': '',
            'required': true
        },
        {
            'title': 'Papel',
            'model': 'role_id',
            'type': 'select',
            'placeholder': 'Selecione um papel',
            // 'options': ['teste', 'sysadmin', 'outros'], // when array of strings
            'url_options': '/api/v1/roles-available',// wher options come from a url
            'view': false,
            'header_styles': '',
            'row_styles': '',
            'required': true
        }, {
            'title': 'Papel',
            'model': 'role_name',
            'type': 'text',
            'edit': false,
            'create': false,
            'header_styles': '',
            'row_styles': '',
        }
        // Adicione mais campos conforme necessário
    ],
});

</script>