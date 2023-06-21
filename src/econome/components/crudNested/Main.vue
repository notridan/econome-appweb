<template>
  <div>
    <div class="w-full flex justify-center border-t border-slate-200/60 dark:border-darkmode-400 mt-6">
      <div class="bg-white dark:bg-darkmode-600 px-5 -mt-3 text-slate-500">
          {{config.title}}
      </div>
    </div>
    <table class="table table-sm table-striped">
      <thead>
        <tr>
          <th v-for="(column, index) in config.fields" :key="index" :class="column.header_styles"
            v-show="column.crudPermissions && column.crudPermissions.index !== false">
            {{ column.title }}
          </th>
        </tr>
      </thead>
      <tbody v-if="entityStore.items && entityStore.items.data && entityStore.items.data.length">
        <tr v-for="(entity, index) in entityStore.items.data" :key="index" class="intro-x">
          <td v-for="column in config.fields" :key="column.model" :class="column.row_styles"
            v-show="column.crudPermissions && column.crudPermissions.index !== false">
            {{ entity[column.model] }}
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td :colspan="config.fields.length" class="text-center py-4 text-gray-300">
            - sem lançamentos -
          </td>
        </tr>
      </tbody>
    </table>

    <div class="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center float-right mt-5">
      <PaginationComponent class="w-full sm:w-auto sm:mr-auto" :limit="3" :keepLength="false" :data="entityStore.items"
        @pagination-change-page="entityStore.fetchItems" />
    </div>
  </div>
</template>

<script setup>
import { watch } from "vue";
import { createGenericStore } from '@/stores/useGenericStore';
import PaginationComponent from '@/econome/components/pagination/Main.vue';

// MODULE INFO

const props = defineProps({
  config: Object,
  masterId: Number
})

const config = props.config;

const useEntityStore = createGenericStore(config.tableName);
const entityStore = useEntityStore();

watch(() => props.masterId, async (newMasterId) => {
  await entityStore.fetchItems(1, '', newMasterId);
}, { immediate: true });

</script>