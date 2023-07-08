<template>
    <CrudMain :config="crudConfig" />
</template>

<script setup>
import CrudMain from "@/econome/components/crud/Main.vue";
import { ref } from "vue";

const crudConfig = ref({
  "tableName": "polls",
  "title": "Cadastro de Enquetes",
  "createButtonText": "Nova Enquete",
  "createModalTitle": "Adicionar Enquete",
  "editModalTitle": "Editar Enquete",
  "viewModalTitle": "Detalhes da Enquete",
  "columns": 2,
  "fields": [
    {
      "title": "ID",
      "model": "id",
      "type": "text",
      "header_styles": "",
      "row_styles": "",
      "column": 1,
      "crudPermissions": {
        "edit": false,
        "create": false,
        "view": true,
        "index": false
      }
    },
        {
      "title": "Condomínio",
      "model": "condominium_id",
      "type": "number",
      "header_styles": "",
      "row_styles": "",
      "column": 1,
      "crudPermissions": {
        "edit": false,
        "create": true,
        "view": true,
        "index": false
      }
    },
    {
      "title": "Título",
      "model": "title",
      "type": "text",
      "placeholder": "Digite o título da enquete",
      "header_styles": "",
      "row_styles": "w-auto",
      "required": true,
      "column": 1,
      "crudPermissions": {
        "edit": true,
        "create": true,
        "view": true,
        "index": true
      }
    },
    {
      "title": "Descrição",
      "model": "description",
      "type": "textarea",
      "placeholder": "Digite a descrição da enquete",
      "header_styles": "",
      "row_styles": "w-auto",
      "column": 2,
      "crudPermissions": {
        "edit": true,
        "create": true,
        "view": true,
        "index": true
      }
    },
    {
      "title": "Data de Início",
      "model": "start_date",
      "type": "date",
      "header_styles": "",
      "row_styles": "",
      "required": true,
      "column": 1,
      "crudPermissions": {
        "edit": true,
        "create": true,
        "view": true,
        "index": true
      }
    },
    {
      "title": "Data de Término",
      "model": "end_date",
      "type": "date",
      "header_styles": "",
      "row_styles": "",
      "required": true,
      "column": 1,
      "crudPermissions": {
        "edit": true,
        "create": true,
        "view": true,
        "index": true
      }
    },
    {
      "title": "Ativa",
      "model": "is_active",
      "type": "checkbox",
      "header_styles": "",
      "row_styles": "",
      "column": 2,
      "crudPermissions": {
        "edit": true,
        "create": true,
        "view": true,
        "index": true
      }
    }
  ]
});

</script>
