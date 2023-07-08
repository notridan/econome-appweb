<template>
    <CrudMain :config="crudConfig" />
</template>

<script setup>
import CrudMain from "@/econome/components/crud/Main.vue";
import { ref } from "vue";

const crudConfig = ref({
    tableName: "units",
    title: 'Cadastro de Unidades',
    createButtonText: 'Nova Unidade',
    createModalTitle: 'Adicionar Unidade',
    editModalTitle: 'Editar Unidade',
    viewModalTitle: 'Detalhes da Unidade',
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
                'edit': true,
                'create': false,
                'view': true,
                'index': false
            }
        },
        {
            'title': 'Bloco',
            'model': 'block_id',
            'type': 'number',
            'placeholder': 'Digite o ID do Bloco',
            'header_styles': '',
            'row_styles': 'whitespace-nowrap',
            'required': true,
            'column': 1,
            'crudPermissions': {
                'edit': true,
                'create': true,
                'view': false,
                'index': false
            }
        },
        {
            'title': 'Número',
            'model': 'number',
            'type': 'number',
            'placeholder': 'Digite o número da unidade',
            'header_styles': '',
            'row_styles': 'whitespace-nowrap',
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
            'title': 'Número de Quartos',
            'model': 'rooms',
            'type': 'number',
            'placeholder': 'Digite o número de quartos',
            'header_styles': '',
            'row_styles': 'whitespace-nowrap',
            'required': false,
            'column': 1,
            'crudPermissions': {
                'edit': true,
                'create': true,
                'view': true,
                'index': true
            }
        },
        {
            'title': 'Número de Banheiros',
            'model': 'bathrooms',
            'type': 'number',
            'placeholder': 'Digite o número de banheiros',
            'header_styles': '',
            'row_styles': 'whitespace-nowrap',
            'required': false,
            'column': 1,
            'crudPermissions': {
                'edit': true,
                'create': true,
                'view': true,
                'index': true
            }
        },
        {
            'title': 'Vagas de Estacionamento',
            'model': 'parking_spaces',
            'type': 'number',
            'placeholder': 'Digite o número de vagas de estacionamento',
            'header_styles': '',
            'row_styles': 'whitespace-nowrap',
            'required': false,
            'column': 1,
            'crudPermissions': {
                'edit': true,
                'create': true,
                'view': true,
                'index': true
            }
        },
        {
            'title': 'Possui Sacada',
            'model': 'has_balcony',
            'type': 'select',
            'options': [
                { 'name': 'Sim', 'id': 1 },
                { 'name': 'Não', 'id': 0 }
            ],
            'placeholder': 'Selecione uma opção',
            'header_styles': '',
            'row_styles': '',
            'column': 2,
            'crudPermissions': {
                'edit': true,
                'create': true,
                'view': false,
                'index': false
            }
        },
        {
            'title': 'Mobiliada',
            'model': 'furnished',
            'type': 'select',
            'options': [
                { 'name': 'Sim', 'id': 'yes' },
                { 'name': 'Não', 'id': 'no' }
            ],
            'placeholder': 'Selecione uma opção',
            'header_styles': '',
            'row_styles': 'whitespace-nowrap',
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
            'title': 'Tipo de Unidade',
            'model': 'unit_type',
            'type': 'select',
            'options': [
                { 'name': 'Comercial', 'id': 'comercial' },
                { 'name': 'Casa', 'id': 'house' },
                { 'name': 'Apartamento', 'id': 'apartment' }
            ],
            'placeholder': 'Selecione uma opção',
            'header_styles': '',
            'row_styles': 'whitespace-nowrap',
            'required': true,
            'column': 2,
            'crudPermissions': {
                'edit': true,
                'create': true,
                'view': false,
                'index': false
            }
        }
    ]
});

</script>
