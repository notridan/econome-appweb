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
              autocomplete="new-password"
              v-model="searchQuery"
              @input="searchUsers"
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
            <tr v-for="(user, index) in userStore.users.data" :key="index" class="intro-x">
              <td>{{ user.id }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.role }}</td>
              <td class="table-report__action">
  
                <div class="flex justify-center items-center">
                  <a class="flex items-center text-theme-9 mr-3" href="javascript:;" @click="showViewModal(user)">
                    <Tippy tag="a" href="javascript:;" class="tooltip" content="Visualizar">
                      <EyeIcon class="w-4 h-4 mr-1" />
                    </Tippy>
                  </a>
                  <a class="flex items-center mr-3" href="javascript:;" @click="showEditModal(user)">
                    <Tippy tag="a" href="javascript:;" class="tooltip" content="Editar">
                      <CheckSquareIcon class="w-4 h-4 mr-1" /> 
                    </Tippy>
                  </a>
                  <a class="flex items-center text-danger" href="javascript:;" @click="callDeleteModal(user.id)">
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
  
        <PaginationComponent class="w-full sm:w-auto sm:mr-auto" :limit="3" :keepLength="false" :data="userStore.users"
          @pagination-change-page="userStore.fetchUsers" />
      <!-- <select class="w-20 form-select box mt-3 sm:mt-0">
        <option>10</option>
        <option>25</option>
        <option>35</option>
        <option>50</option>
      </select> -->
    </div>

    <New :info="createInfo" :show="newModal" @closed="newModal = false" @save="handleSaveUser"></New>
    <Edit  :info="editInfo" v-if="userToEdit" :show="editModal" :entity="userToEdit" @closed="editModal = false" @update="handleUpdateUser"></Edit>
    <View :info="viewInfo" v-if="userToView" :show="viewModal" :entity="userToView" @closed="viewModal = false"></View>
  </div>
</template>

<script setup>
import { onMounted, ref, reactive, computed } from "vue";
import { useUserStore } from '@/stores/useUserStore';
import PaginationComponent from '@/econome/components/pagination/Main.vue';
import Delete from "@/econome/components/crud/Delete.vue";
import New from "@/econome/components/crud/Create.vue";
import Edit from "@/econome/components/crud/Edit.vue";
import View from "@/econome/components/crud/View.vue";
import api from '@/utils/api.js'

const userStore = useUserStore();

const roleOptions = reactive([]);

// SEARCH

const searchQuery = ref('');

function searchUsers() {
  userStore.fetchUsers(1, searchQuery.value);
}

function clearSearch() {
  searchQuery.value = '';
  userStore.fetchUsers(1);
}

// VIEW

const viewInfo = {
  title: 'Visualizar Usuário',
  fields: [
    {
      'title': 'ID',
      'model': 'id',
      'type': 'text',
    },
    {
      'title': 'Nome',
      'model': 'name',
      'type': 'text',
    },
    {
      'title': 'Email',
      'model': 'email',
      'type': 'text',
    },
    {
      'title': 'Papel',
      'model': 'role',
      'type': 'text',
    },
    // Adicione mais campos conforme necessário
  ]
};

const viewModal = ref(false);
const userToView = ref(null);

async function showViewModal(user) {
  await userStore.fetchUser(user.id);
  userToView.value = userStore.user.data;
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
  userStore.deleteUser(idToDelete.value);
  userStore.fetchUsers();
}

// CREATE

const createInfo = {
  title: 'Novo Usuário',
  fields: [
    {
      'title': 'Name',
      'model': 'name',
      'type': 'text',
      'placeholder': 'Digite o nome do Usuário'
    },
    {
      'title': 'Email',
      'model': 'email',
      'type': 'text',
      'placeholder': 'Digite o email do Usuário'
    },
    {
      'title': 'Senha',
      'model': 'password',
      'type': 'password',
      'placeholder': 'Digite a senha do Usuário',
    },
    {
      'title': 'Role',
      'model': 'role',
      'type': 'select',
      'placeholder': 'Select Role',
      'options': ['Admin', 'Editor', 'Viewer'] // Add your role options here
    },
  ]
};

const newModal = ref(false);

function showNewModal(){
  newModal.value = true;
}

function handleSaveUser(newUser){
  userStore.createUser(newUser);
}

// UPDATE

const editInfo = {
  title: 'Editar Usuário',
  fields: [
    {
      'title': 'name',
      'model': 'name',
      'type': 'text',
      'placeholder': 'Digite o nome'
    },
    {
      'title': 'Email',
      'model': 'email',
      'type': 'text',
      'placeholder': 'Digite o email'
    },
    {
      'title': 'Senha',
      'model': 'password',
      'type': 'password',
      'placeholder': 'Digite a senha do Usuário',
    },
    {
      'title': 'Role',
      'model': 'role',
      'type': 'select',
      'placeholder': 'Select Role',
      'options': roleOptions.value // Add your role options here
    },
  ]
};

const editModal = ref(false);
const userToEdit = ref(null);

async function showEditModal(user) {
  await userStore.fetchUser(user.id);
  userToEdit.value = userStore.user.data;
  editModal.value = true;
}

function handleUpdateUser(updatedUser) {
  userStore.updateUser(updatedUser.id, updatedUser);
}

// MODULE INFO

const title = ref('Cadastro de Usuários');
const addButtonText = ref('Adicionar Novo Usuário');

const columnsTitles = reactive([
  { "title": "ID", "style": "" },
  { "title": "NOME", "style": "" },
  { "title": "EMAIL", "style": "" },
  { "title": "PAPEL", "style": "" },
]);

// INITIAL DATA 

onMounted(async () => {
  await userStore.fetchUsers();
  await fetchRoleOptions();
});

// GET AVAILABLE ROLES

async function fetchRoleOptions() {
  try {
    const response = await api.get('/api/v1/roles-available');
    roleOptions.value = response.data;
    console.log(roleOptions.value);
  } catch (error) {
    console.error('Erro ao buscar as opções de função', error);
  }
}

// PAGINATION

const paginationInfo = computed(() => {
  if (userStore.users.data && userStore.users.data.length > 0) {
    const from = (userStore.users.meta.current_page - 1) * userStore.users.meta.per_page + 1;
    const to = from + userStore.users.data.length - 1;
    const total = userStore.users.meta.total;
    return `Exibindo do ${from} ao ${to} de ${total} lançamentos`;
  }
  return 'No entries found';
});
</script>