<template>
    <CrudMain :config="crudConfig" />
</template>

<script setup>
import CrudMain from "@/econome/components/crud/Main.vue";
import { ref } from "vue";

const crudConfig = ref({
    tableName: "condominiums",
    title: 'Cadastro de Condomínios',
    createButtonText: 'Novo Condomínio',
    createModalTitle: 'Adicionar Condomínio',
    editModalTitle: 'Editar Condomínio',
    viewModalTitle: 'Detalhes do Condomínio',
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
            'title': 'Nome',
            'model': 'name',
            'type': 'text',
            'placeholder': 'Digite o nome do Condomínio',
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
            'title': 'CNPJ',
            'model': 'cnpj',
            'type': 'text',
            'placeholder': 'Digite o CNPJ do Condomínio',
            'header_styles': '',
            'row_styles': 'whitespace-nowrap',
            'required': true,
            'column': 2,
            'mask': '##.###.###/####-##',
            'clearMaskRegex': '\\D',
            'crudPermissions': {
                'edit': true,
                'create': true,
                'view': true,
                'index': true
            }
        },
        {
            'title': 'Telefone',
            'model': 'phone',
            'type': 'text',
            'placeholder': 'Digite o telefone do Condomínio',
            'header_styles': '',
            'row_styles': 'whitespace-nowrap',
            'column': 2,
            'mask': ['(##) #####-####', '(##) ####-####'],
            'clearMaskRegex': '\\D',
            'crudPermissions': {
                'edit': true,
                'create': true,
                'view': true,
                'index': true
            }
        },
        {
            'title': 'CEP',
            'model': 'zip_code',
            'type': 'text',
            'placeholder': 'Digite o CEP do Condomínio',
            'header_styles': '',
            'row_styles': '',
            'column': 1,
            'mask': "#####-###",
            'clearMaskRegex': '\\D',
            'crudPermissions': {
                'edit': true,
                'create': true,
                'view': true,
                'index': false
            }
        },
        {
            'title': 'Rua',
            'model': 'street',
            'type': 'text',
            'placeholder': 'Digite a rua do Condomínio',
            'header_styles': '',
            'row_styles': '',
            'column': 1,
            'crudPermissions': {
                'edit': true,
                'create': true,
                'view': true,
                'index': false
            }
        },
        {
            'title': 'Número',
            'model': 'number',
            'type': 'tel',
            'placeholder': 'Digite o número do Condomínio',
            'header_styles': '',
            'row_styles': '',
            'column': 1,
            'crudPermissions': {
                'edit': true,
                'create': true,
                'view': true,
                'index': false
            }
        },
        {
            'title': 'Complemento',
            'model': 'complement',
            'type': 'text',
            'placeholder': 'Digite o complemento do endereço do Condomínio',
            'header_styles': '',
            'row_styles': '',
            'column': 1,
            'crudPermissions': {
                'edit': true,
                'create': true,
                'view': true,
                'index': false
            }
        },
        {
            'title': 'Bairro',
            'model': 'neighborhood',
            'type': 'text',
            'placeholder': 'Digite o bairro do Condomínio',
            'header_styles': '',
            'row_styles': '',
            'column': 1,
            'crudPermissions': {
                'edit': true,
                'create': true,
                'view': true,
                'index': true
            }
        },
        {
            'title': 'Cidade',
            'model': 'city',
            'type': 'text',
            'placeholder': 'Digite a cidade do Condomínio',
            'header_styles': '',
            'row_styles': '',
            'column': 1,
            'crudPermissions': {
                'edit': true,
                'create': true,
                'view': true,
                'index': false
            }
        },
        {
            'title': 'Estado',
            'model': 'state',
            'type': 'text',
            'placeholder': 'Digite o estado do Condomínio',
            'header_styles': '',
            'row_styles': '',
            'column': 1,
            'crudPermissions': {
                'edit': true,
                'create': true,
                'view': true,
                'index': false
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
            'title': 'Data de Fundação',
            'model': 'foundation_date',
            'type': 'date',
            'header_styles': '',
            'row_styles': '',
            'column': 2,
            'crudPermissions': {
                'edit': true,
                'create': true,
                'view': true,
                'index': false
            }
        },
        {
            'title': 'Website',
            'model': 'website',
            'type': 'text',
            'placeholder': 'Digite o website do Condomínio',
            'header_styles': '',
            'row_styles': '',
            'column': 2,
            'crudPermissions': {
                'edit': true,
                'create': true,
                'view': true,
                'index': false
            }
        },
        {
            'title': 'Informações Adicionais',
            'model': 'additional_information',
            'type': 'textarea',
            'placeholder': 'Digite informações adicionais sobre o Condomínio',
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