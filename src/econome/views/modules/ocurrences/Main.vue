<template>
    <CrudMain :config="crudConfig" />
</template>

<script setup>
import CrudMain from "@/econome/components/crud/Main.vue";
import { ref } from "vue";

const crudConfig = ref({
  "tableName": "ocurrences",
  "title": "Cadastro de Ocorrências",
  "createButtonText": "Nova Ocorrência",
  "createModalTitle": "Adicionar Ocorrência",
  "editModalTitle": "Editar Ocorrência",
  "viewModalTitle": "Detalhes da Ocorrência",
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
      "title": "Título",
      "model": "title",
      "type": "text",
      "placeholder": "Digite o título",
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
      "placeholder": "Digite a descrição",
      "header_styles": "",
      "row_styles": "w-auto",
      "required": true,
      "column": 2,
      "crudPermissions": {
        "edit": true,
        "create": true,
        "view": true,
        "index": true
      }
    },
    {
      "title": "ID do Condomínio",
      "model": "condominium_id",
      "type": "number",
      "placeholder": "Digite o ID do Condomínio",
      "header_styles": "",
      "row_styles": "",
      "required": true,
      "column": 1,
      "crudPermissions": {
        "edit": false,
        "create": true,
        "view": false,
        "index": false
      }
    }
  ]
});

</script>
