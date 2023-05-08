<template>
  <h2 class="intro-y text-lg font-medium mt-10">{{ title }}</h2>
  <div class="grid grid-cols-12 gap-6 mt-5">
    <div class="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
      <button class="btn btn-primary shadow-md mr-2">{{ addButtonText }}</button>

      <div class="hidden md:block mx-auto text-slate-500">
        {{ paginationInfo }}
      </div>
      <!-- <div class="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
        <div class="w-56 relative text-slate-500">
          <input
            type="text"
            class="form-control w-56 box pr-10"
            placeholder="Search..."
          />
          <SearchIcon class="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0" />
        </div>
      </div> -->
    </div>
    <!-- BEGIN: Data List -->
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
                <a class="flex items-center mr-3" href="javascript:;">
                  <CheckSquareIcon class="w-4 h-4 mr-1" /> Edit
                </a>
                <a class="flex items-center text-danger" href="javascript:;" @click="callDeleteModal(role.id)">
                  <Trash2Icon class="w-4 h-4 mr-1" /> Delete
                </a>
              </div>

            </td>
          </tr>
        </tbody>
        <DeleteConfirmation :show="deleteConfirmationModal" @closed="deleteConfirmationModal = false" @delete="handleDelete"></DeleteConfirmation>
      </table>
    </div>
    <!-- END: Data List -->
    <!-- BEGIN: Pagination -->
    <div class="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center">
      <!-- <TailwindPagination
          :limit="1"
          :keepLength="false"
          :item-classes="['border-none', 'flex']"
          :data="roleStore.roles"
          @pagination-change-page="roleStore.fetchRoles"
        /> -->

      <PaginationComponent :limit="3" :keepLength="false" :data="roleStore.roles"
        @pagination-change-page="roleStore.fetchRoles" />
    </div>
    <!-- <div
      class="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center"
    >
      <nav class="w-full sm:w-auto sm:mr-auto">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#">
              <ChevronsLeftIcon class="w-4 h-4" />
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              <ChevronLeftIcon class="w-4 h-4" />
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">...</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">1</a>
          </li>
          <li class="page-item active">
            <a class="page-link" href="#">2</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">3</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">...</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              <ChevronRightIcon class="w-4 h-4" />
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              <ChevronsRightIcon class="w-4 h-4" />
            </a>
          </li>
        </ul>
      </nav>
      <select class="w-20 form-select box mt-3 sm:mt-0">
        <option>10</option>
        <option>25</option>
        <option>35</option>
        <option>50</option>
      </select>
    </div> -->
    <!-- END: Pagination -->
  </div>
  <!-- BEGIN: Delete Confirmation Modal -->
  <!-- <Modal
    :show="deleteConfirmationModal"
    @hidden="deleteConfirmationModal = false"
  >
    <ModalBody class="p-0">
      <div class="p-5 text-center">
        <XCircleIcon class="w-16 h-16 text-danger mx-auto mt-3" />
        <div class="text-3xl mt-5">Are you sure?</div>
        <div class="text-slate-500 mt-2">
          Do you really want to delete these records? <br />This process cannot
          be undone.
        </div>
      </div>
      <div class="px-5 pb-8 text-center">
        <button
          type="button"
          @click="deleteConfirmationModal = false"
          class="btn btn-outline-secondary w-24 mr-1"
        >
          Cancel
        </button>
        <button type="button" class="btn btn-danger w-24">Delete</button>
      </div>
    </ModalBody>
  </Modal> -->

  <!-- END: Delete Confirmation Modal -->
</template>

<script setup>
import { onMounted, ref, reactive, computed } from "vue";
import { useRoleStore } from '@/stores/useRoleStore';
import PaginationComponent from '@/econome/components/pagination/Main.vue';
import DeleteConfirmation from "./DeleteConfirmation.vue";

const roleStore = useRoleStore();

const deleteConfirmationModal = ref(false);
const idToDelete = ref();

function callDeleteModal(id){
  deleteConfirmationModal.value = true;
  idToDelete.value = id;
}

function handleDelete(){
  roleStore.deleteRole(idToDelete.value);
}

const title = ref('Casatro de Papéis');
const addButtonText = ref('Adicionar Novo Papel');

const columnsTitles = reactive([
  { "title": "ID", "style": "" },
  { "title": "NOME", "style": "" },
]);

onMounted(async () => {
  await roleStore.fetchRoles();
  // editedRoles.value = { ...roleStore.currentRoles};
});

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
