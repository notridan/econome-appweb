<template>
    <CrudMain :config="crudConfig" />
</template>

<script setup>
import CrudMain from "@/econome/components/crud/Main.vue";
import { ref } from "vue";

const crudConfig = ref({
    tableName: "dependencies",
    title: 'Cadastro de Dependências',
    createButtonText: 'Nova Dependência',
    createModalTitle: 'Adicionar Dependência',
    editModalTitle: 'Editar Dependência',
    viewModalTitle: 'Detalhes da Dependência',
    columns: 2,
    fields: [
        {
            title: 'ID',
            model: 'id',
            type: 'text',
            header_styles: '',
            row_styles: '',
            column: 1,
            crudPermissions: {
                edit: false,
                create: false,
                view: true,
                index: false
            }
        },
        {
            title: 'Condomínio',
            model: 'condominium_id',
            type: 'number',
            placeholder: 'Digite o Condomínio',
            header_styles: '',
            row_styles: 'whitespace-nowrap',
            required: true,
            column: 1,
            crudPermissions: {
                edit: false,
                create: false,
                view: false,
                index: false
            }
        },
        {
            title: 'Nome',
            model: 'name',
            type: 'text',
            placeholder: 'Digite o nome da Dependência',
            header_styles: '',
            row_styles: 'whitespace-nowrap',
            required: true,
            column: 1,
            crudPermissions: {
                edit: true,
                create: true,
                view: true,
                index: true
            }
        },
        {
            title: 'Ocupada',
            model: 'busy',
            type: 'checkbox',
            header_styles: '',
            row_styles: '',
            column: 1,
            crudPermissions: {
                edit: true,
                create: true,
                view: false,
                index: false
            }
        },
        {
            title: 'Tipo',
            model: 'dependency_type',
            type: 'text',
            placeholder: 'Digite o tipo da Dependência',
            header_styles: '',
            row_styles: 'whitespace-nowrap',
            required: true,
            column: 1,
            crudPermissions: {
                edit: true,
                create: true,
                view: true,
                index: true
            }
        },
        {
            title: 'Ativa',
            model: 'active',
            type: 'checkbox',
            header_styles: '',
            row_styles: '',
            column: 2,
            crudPermissions: {
                edit: true,
                create: true,
                view: false,
                index: false
            }
        },
        {
            title: 'Área',
            model: 'area',
            type: 'text',
            placeholder: 'Digite a área da Dependência',
            header_styles: '',
            row_styles: '',
            column: 2,
            crudPermissions: {
                edit: true,
                create: true,
                view: true,
                index: false
            }
        }
    ]
});

</script>
