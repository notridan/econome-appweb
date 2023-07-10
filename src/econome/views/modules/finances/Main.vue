<template>
  <CrudMain :config="crudConfig" />
</template>
<script setup>
import CrudMain from "@/econome/components/crud/Main.vue";
import { ref } from "vue";

const crudConfig = ref({
  'tableName': 'finances',
  'title': 'Financeiro',
  'createButtonText': 'Novo registro',
  'createModalTitle': 'Adicionar registro',
  'editModalTitle': 'Editar registro',
  'viewModalTitle': 'Detalhes do registro',
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
        'create': false,
        'view': true,
        'index': false,
      },
    },
    {
      'title': 'Condomínio',
      'model': 'condominium_id',
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
      'title': 'Descrição',
      'model': 'description',
      'type': 'text',
      'header_styles': '',
      'row_styles': '',
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
      'title': 'Tipo de transação',
      'model': 'type',
      'type': 'select',
      'options': [
          { 'name': 'Entrada', 'id': 'input'},
          { 'name': 'Saída', 'id': 'output'},
      ] ,
      'placeholder': 'Selecione uma opção',
      'header_styles': '',
      'row_styles': '',
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
      'title': 'Valor',
      'model': 'value',
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
      'title': 'Data',
      'model': 'date',
      'type': 'date',
      'header_styles': '',
      'row_styles': 'whitespace-nowrap',
      'required': true,
      'column': 2,
      'crudPermissions': {
        'edit': true,
        'create': true,
        'view': true,
        'index': true,
      },
    },
  ],
});
</script>
