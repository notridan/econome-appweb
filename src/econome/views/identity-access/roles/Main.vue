<template>
  <h2 class="intro-y text-lg font-medium mt-10">{{ title }}</h2>
  <div class="grid grid-cols-12 gap-6 mt-5">
    <div class="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
      <button @click="showNewModal" class="btn btn-primary shadow-md mr-2">{{ addButtonText }}</button>

      <div class="hidden md:block mx-auto text-slate-500">
        {{ paginationInfo }}
      </div>
      <div class="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
        <div class="w-56 relative text-slate-500">
          <input
            type="text"
            class="form-control w-56 box pr-10"
            placeholder="Search..."
            v-model="searchQuery"
            @input="searchRoles"
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
            <th v-for="(column, index) in columnsTitles" :key="index" :class="column.styles">
              {{ column.title }}
            </th>
            <th class="text-center whitespace-nowrap">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(role, index) in roleStore.roles.data" :key="index" class="intro-x">
            <td>{{ role.id }}</td>
            <td>{{ role.name }}</td>
            <td class="table-report__action">

              <div class="flex justify-center items-center">
                
                <a class="flex items-center text-theme-9 mr-3" href="javascript:;" @click="showViewModal(role)">
                  <Tippy tag="a" href="javascript:;" class="tooltip" content="Visualizar">
                    <EyeIcon class="w-4 h-4 mr-1" />
                  </Tippy>
                </a>
                <a class="flex items-center mr-3" href="javascript:;" @click="showEditModal(role)">
                  <Tippy tag="a" href="javascript:;" class="tooltip" content="Editar">
                    <CheckSquareIcon class="w-4 h-4 mr-1" />
                  </Tippy>
                </a>
                <a class="flex items-center text-danger" href="javascript:;" @click="callDeleteModal(role.id)">
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

      <PaginationComponent class="w-full sm:w-auto sm:mr-auto" :limit="3" :keepLength="false" :data="roleStore.roles"
        @pagination-change-page="roleStore.fetchRoles" />
      <!-- <select class="w-20 form-select box mt-3 sm:mt-0">
        <option>10</option>
        <option>25</option>
        <option>35</option>
        <option>50</option>
      </select> -->
    </div>

    <New :show="newModal" @closed="newModal = false" @save="handleSaveRole"></New>
    <Edit v-if="roleToEdit" :show="editModal" :role="roleToEdit" @closed="editModal = false" @update="handleUpdateRole"></Edit>
    <View v-if="roleToView" :show="viewModal" :role="roleToView" @closed="viewModal = false"></View>
  </div>
</template>

<script setup>
import { onMounted, ref, reactive, computed } from "vue";
import { useRoleStore } from '@/stores/useRoleStore';
import PaginationComponent from '@/econome/components/pagination/Main.vue';
import Delete from "./Delete.vue";
import New from "./Create.vue";
import Edit from "./Edit.vue";
import View from "./View.vue";

// SEARCH

const searchQuery = ref('');

function searchRoles() {
  roleStore.fetchRoles(1, searchQuery.value);
}

function clearSearch() {
  searchQuery.value = '';
  roleStore.fetchRoles(1);
}

// VIEW

const viewModal = ref(false);
const roleToView = ref(null);

function showViewModal(role) {
  roleToView.value = role;
  viewModal.value = true;
}

// DELETE
const roleStore = useRoleStore();
const idToDelete = ref();
const deleteConfirmationModal = ref(false);

function callDeleteModal(id) {
  deleteConfirmationModal.value = true;
  idToDelete.value = id;
}

function handleDelete() {
  roleStore.deleteRole(idToDelete.value);
  roleStore.fetchRoles();
}

// CREATE

const newModal = ref(false);

function showNewModal(){
  newModal.value = true;
}

function handleSaveRole(newRole){
  roleStore.createRole({ name: newRole.name });
}

// UPDATE

const editModal = ref(false);
const roleToEdit = ref(null);

function showEditModal(role) {
  roleToEdit.value = role;
  editModal.value = true;
}

function handleUpdateRole(updatedRole) {
  roleStore.updateRole(updatedRole.id, { name: updatedRole.name });
}

// MODULE INFO

const title = ref('Casatro de Papéis');
const addButtonText = ref('Adicionar Novo Papel');

const columnsTitles = reactive([
  { "title": "ID", "style": "" },
  { "title": "NOME", "style": "" },
]);

// INITIAL DATA 

onMounted(async () => {
  await roleStore.fetchRoles();
});

// PAGINATION

const paginationInfo = computed(() => {
  if (roleStore.roles.data && roleStore.roles.data.length > 0) {
    const from = (roleStore.roles.meta.current_page - 1) * roleStore.roles.meta.per_page + 1;
    const to = from + roleStore.roles.data.length - 1;
    const total = roleStore.roles.meta.total;
    return `Exibindo do ${from} ao ${to} de ${total} lançamentos`;
  }
  return 'No entries found';
});
</script>
