<template>
  <CrudMain :config="crudConfig" />
</template>
<script setup>
import CrudMain from "@/econome/components/crud/Main.vue";
import { ref } from "vue";

const crudConfig = ref({
  'tableName': 'providers',
  'title': 'Cadastro de Fornecedores',
  'createButtonText': 'Novo Fornecedor',
  'createModalTitle': 'Adicionar Fornecedor',
  'editModalTitle': 'Editar Fornecedor',
  'viewModalTitle': 'Detalhes do Fornecedor',
  'columns': 2,
  'fields': [
    {
      'title': 'ID',
      'model': 'id',
      'type': 'text',
      'header_styles': '',
      'row_styles': '',
      'column': 1,
      'crudPermissions': {
        'edit': false,
        'create': true,
        'view': true,
        'index': false,
      },
    },
    {
      'title': 'Usuário',
      'model': 'user_id',
      'type': 'number',
      'header_styles': '',
      'row_styles': '',
      'column': 1,
      'crudPermissions': {
        'edit': false,
        'create': true,
        'view': true,
        'index': false,
      },
    },
    {
      'title': 'Razão Social',
      'model': 'business_name',
      'type': 'text',
      'placeholder': 'Digite a razão social',
      'header_styles': 'whitespace-nowrap',
      'row_styles': 'w-auto',
      'required': false,
      'column': 1,
      'crudPermissions': {
        'edit': true,
        'create': true,
        'view': true,
        'index': false,
      },
    },
    {
      'title': 'Nome Fantasia',
      'model': 'trade_name',
      'type': 'text',
      'placeholder': 'Digite o nome fantasia',
      'header_styles': 'whitespace-nowrap',
      'row_styles': 'w-auto',
      'required': true,
      'column': 1,
      'crudPermissions': {
        'edit': true,
        'create': true,
        'view': true,
        'index': true,
      },
    },
    {
      'title': 'CNPJ',
      'model': 'cnpj',
      'type': 'text',
      'header_styles': '',
      'row_styles': 'whitespace-nowrap',
      'required': true,
      'column': 1,
      'crudPermissions': {
        'edit': true,
        'create': true,
        'view': true,
        'index': true,
      },
    },
    {
      'title': 'E-mail',
      'model': 'email',
      'type': 'text',
      'header_styles': 'whitespace-nowrap',
      'row_styles': 'whitespace-nowrap',
      'required': true,
      'column': 1,
      'crudPermissions': {
        'edit': true,
        'create': true,
        'view': true,
        'index': true,
      },
    },
    {
      'title': 'Telefone',
      'model': 'phone',
      'type': 'text',
      'header_styles': '',
      'row_styles': 'whitespace-nowrap',
      'required': true,
      'column': 1,
      'crudPermissions': {
        'edit': true,
        'create': true,
        'view': true,
        'index': true,
      },
    },
    {
      'title': 'Celular',
      'model': 'cellphone',
      'type': 'text',
      'header_styles': '',
      'row_styles': '',
      'column': 1,
      'crudPermissions': {
        'edit': true,
        'create': true,
        'view': true,
        'index': true,
      },
    },
    {
      'title': 'CEP',
      'model': 'zip_code',
      'type': 'text',
      'header_styles': '',
      'row_styles': 'whitespace-nowrap',
      'required': true,
      'column': 1,
      'crudPermissions': {
        'edit': true,
        'create': true,
        'view': true,
        'index': false,
      },
    },
    {
      'title': 'Rua',
      'model': 'street',
      'type': 'text',
      'header_styles': '',
      'row_styles': 'whitespace-nowrap',
      'required': true,
      'column': 1,
      'crudPermissions': {
        'edit': true,
        'create': true,
        'view': true,
        'index': false,
      },
    },
    {
      'title': 'Número',
      'model': 'number',
      'type': 'text',
      'header_styles': '',
      'row_styles': '',
      'required': true,
      'column': 1,
      'crudPermissions': {
        'edit': true,
        'create': true,
        'view': true,
        'index': false,
      },
    },
    {
      'title': 'Complemento',
      'model': 'complement',
      'type': 'text',
      'header_styles': '',
      'row_styles': '',
      'column': 1,
      'crudPermissions': {
        'edit': true,
        'create': true,
        'view': true,
        'index': false,
      },
    },
    {
      'title': 'Bairro',
      'model': 'neighborhood',
      'type': 'text',
      'header_styles': '',
      'row_styles': 'whitespace-nowrap',
      'required': true,
      'column': 1,
      'crudPermissions': {
        'edit': true,
        'create': true,
        'view': true,
        'index': false,
      },
    },
    {
      'title': 'Cidade',
      'model': 'city',
      'type': 'text',
      'header_styles': '',
      'row_styles': 'whitespace-nowrap',
      'required': true,
      'column': 1,
      'crudPermissions': {
        'edit': true,
        'create': true,
        'view': true,
        'index': false,
      },
    },
    {
      'title': 'Estado',
      'model': 'state',
      'type': 'text',
      'header_styles': '',
      'row_styles': 'whitespace-nowrap',
      'required': true,
      'column': 1,
      'crudPermissions': {
        'edit': true,
        'create': true,
        'view': true,
        'index': false,
      },
    },
    {
      'title': 'Website',
      'model': 'website',
      'type': 'text',
      'header_styles': '',
      'row_styles': 'w-auto',
      'column': 1,
      'crudPermissions': {
        'edit': true,
        'create': true,
        'view': true,
        'index': false,
      },
    },
    {
      'title': 'Serviço',
      'model': 'service',
'type': 'text',
      'header_styles': '',
      'row_styles': '',
      'column': 2,
      'crudPermissions': {
        'edit': true,
        'create': true,
        'view': true,
        'index': false,
      },
    },
    {
      'title': 'Tipo de Fornecedor',
      'model': 'provider_type',
      'type': 'text',
      'header_styles': '',
      'row_styles': 'whitespace-nowrap',
      'options': [
        { 'name': 'Compania', 'id': 'company' },
        { 'name': 'Morador', 'id': 'dweller' },
        { 'name': 'Funcionário', 'id': 'employee' },
        { 'name': 'Terceirizado', 'id': 'outsourced' },
      ],
      'placeholder': 'Selecione uma opção',
      'required': true,
      'column': 2,
      'crudPermissions': {
        'edit': true,
        'create': true,
        'view': true,
        'index': false,
      },
    },
  ],
});
</script>