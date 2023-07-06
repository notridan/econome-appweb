<template>
    <CrudMain :config="crudConfig" />
</template>

<script setup>
import CrudMain from "@/econome/components/crud/Main.vue";
import { ref } from "vue";

const crudConfig = ref({
    tableName: "units_groups",
    title: 'Cadastro de Grupos de Unidades',
    createButtonText: 'Novo Grupo de Unidades',
    createModalTitle: 'Adicionar Grupo de Unidades',
    editModalTitle: 'Editar Grupo de Unidades',
    viewModalTitle: 'Detalhes do Grupo de Unidades',
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
                'index': false
            }
        },
        {
            'title': 'ID do Condomínio',
            'model': 'condominium_id',
            'type': 'number',
            'placeholder': 'Digite o ID do Condomínio',
            'header_styles': '',
            'row_styles': 'whitespace-nowrap',
            'required': true,
            'column': 1,
            'crudPermissions': {
                'edit': false,
                'create': true,
                'view': false,
                'index': false
            }
        },
        {
            'title': 'Nome',
            'model': 'name',
            'type': 'text',
            'placeholder': 'Digite o nome do Grupo',
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
            'title': 'Tipo',
            'model': 'type',
            'type': 'select',
            'options': [
                { 'name': 'Bloco', 'id': 'block' },
                { 'name': 'Rua', 'id': 'street' }
            ],
            'placeholder': 'Selecione o tipo',
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
            'title': 'Ativo',
            'model': 'active',
            'type': 'checkbox',
            'header_styles': '',
            'row_styles': '',
            'column': 2,
            'crudPermissions': {
                'edit': true,
                'create': true,
                'view': true,
                'index': true
            }
        },
        {
            'title': 'Informações Adicionais',
            'model': 'additional_information',
            'type': 'textarea',
            'placeholder': 'Digite informações adicionais sobre o Grupo',
            'header_styles': '',
            'row_styles': '',
            'column': 2,
            'crudPermissions': {
                'edit': true,
                'create': true,
                'view': true,
                'index': false
            }
        }
    ]
});

</script>
