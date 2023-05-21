<template>
    <h2 class="intro-y text-lg font-medium mt-10">{{ config.title }}</h2>
    <div class="grid grid-cols-12 gap-6 mt-5">
      <div class="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
        <button @click="showNewModal" class="btn btn-primary shadow-md mr-2">{{ config.createButtonText }}</button>
  
        <div class="hidden md:block mx-auto text-slate-500">
          {{ paginationInfo }}
        </div>
        <div class="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
          <div class="w-56 relative text-slate-500">
            <input
              type="text"
              class="form-control w-56 box pr-10"
              placeholder="Search..."
              autocomplete="new-password"
              v-model="searchQuery"
              @input="searchItems"
            />
            <Trash2Icon v-if="searchQuery" @click="clearSearch" class="text-red-600 w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0" />
            <SearchIcon  v-else class="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0" />
            
          </div>
        </div>
      </div>
      <div class="intro-y col-span-12 overflow-auto lg:overflow-visible">
        <table class="table table-report -mt-2">
          <thead>
            <tr>
              <th v-for="(column, index) in config.fields" :key="index" :class="column.header_styles" v-show="column.crudPermissions && column.crudPermissions.index !== false">
                {{ column.title }}
              </th>
              <th class="text-center whitespace-nowrap">Ações</th>
            </tr>
          </thead>
          <tbody v-if="entityStore.items && entityStore.items.data">
            <tr v-for="(entity, index) in entityStore.items.data" :key="index" class="intro-x">
              <td v-for="column in config.fields" :key="column.model" :class="column.row_styles" v-show="column.crudPermissions && column.crudPermissions.index !== false">
                {{ entity[column.model] }}
              </td>
              <td class="table-report__action">
  
                <div class="flex justify-center items-center">
                  <a class="flex items-center text-theme-9 mr-3" href="javascript:;" @click="showViewModal(entity)">
                    <Tippy tag="a" href="javascript:;" class="tooltip" content="Visualizar">
                      <EyeIcon class="w-4 h-4 mr-1" />
                    </Tippy>
                  </a>
                  <a class="flex items-center mr-3" href="javascript:;" @click="showEditModal(entity)">
                    <Tippy tag="a" href="javascript:;" class="tooltip" content="Editar">
                      <CheckSquareIcon class="w-4 h-4 mr-1" /> 
                    </Tippy>
                  </a>
                  <a class="flex items-center text-danger" href="javascript:;" @click="callDeleteModal(entity.id)">
                    <Tippy tag="a" href="javascript:;" class="tooltip" content="Deletar">  
                      <Trash2Icon class="w-4 h-4 mr-1" /> 
                    </Tippy>
                  </a>
                </div>
  
              </td>
            </tr>
          </tbody>
          <Delete :show="deleteConfirmationModal" @closed="deleteConfirmationModal = false"
            @delete="handleDelete"></Delete>
        </table>
      </div>
  
      <div class="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center">
  
        <PaginationComponent class="w-full sm:w-auto sm:mr-auto" :limit="3" :keepLength="false" :data="entityStore.items"
          @pagination-change-page="entityStore.fetchItems" />
    </div>

    <New :columns="config.columns" :title="config.createModalTitle" :fields="config.fields" :show="newModal" @closed="newModal = false" @save="handleSaveNewItem"></New>
    <Edit  :columns="config.columns" :title="config.editModalTitle" :fields="config.fields" v-if="itemToEdit" :show="editModal" :entity="itemToEdit" @closed="editModal = false" @update="handleUpdateItem"></Edit>
    <View :columns="config.columns" :title="config.viewModalTitle" :fields="config.fields" v-if="itemToView" :show="viewModal" :entity="itemToView" @closed="viewModal = false"></View>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { createGenericStore } from '@/stores/useGenericStore';
import PaginationComponent from '@/econome/components/pagination/Main.vue';
import Delete from "@/econome/components/crud/Delete.vue";
import New from "@/econome/components/crud/Create.vue";
import Edit from "@/econome/components/crud/Edit.vue";
import View from "@/econome/components/crud/View.vue";

// MODULE INFO

const props = defineProps({
  config: Object
})

const config = props.config;

const useEntityStore = createGenericStore(config.tableName);
const entityStore = useEntityStore();

// SEARCH

const searchQuery = ref('');

function searchItems() {
  entityStore.fetchItems(1, searchQuery.value);
}

function clearSearch() {
  searchQuery.value = '';
  entityStore.fetchItems(1);
}

// VIEW

const viewModal = ref(false);
const itemToView = ref(null);

async function showViewModal(item) {
  await entityStore.fetchItem(item.id);
  itemToView.value = entityStore.item.data;
  viewModal.value = true;
}

// DELETE
const idToDelete = ref();
const deleteConfirmationModal = ref(false);

function callDeleteModal(id) {
  deleteConfirmationModal.value = true;
  idToDelete.value = id;
}

function handleDelete() {
  entityStore.deleteItem(idToDelete.value);
  entityStore.fetchItems();
}

// CREATE

const newModal = ref(false);

function showNewModal(){
  newModal.value = true;
}

function handleSaveNewItem(newEntity){
  entityStore.createItem(newEntity);
}

// UPDATE

const editModal = ref(false);
const itemToEdit = ref(null);

async function showEditModal(item) {
  await entityStore.fetchItem(item.id);
  itemToEdit.value = entityStore.item.data;
  editModal.value = true;
}

function handleUpdateItem(updatedItem) {
  entityStore.updateItem(updatedItem.id, updatedItem);
}

// INITIAL DATA 

onMounted(async () => {
  await entityStore.fetchItems();
  console.log(entityStore.items);
});

// PAGINATION

const paginationInfo = computed(() => {
  if (entityStore.items && entityStore.items.data && entityStore.items.data.length > 0) {
    const from = (entityStore.items.meta.current_page - 1) * entityStore.items.meta.per_page + 1;
    const to = from + entityStore.items.data.length - 1;
    const total = entityStore.items.meta.total;
    return `Exibindo do ${from} ao ${to} de ${total} items`;
  }
  return 'No entries found';
});
</script>