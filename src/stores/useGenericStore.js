import { defineStore } from 'pinia';
import api from '@/utils/api';
import { useToast } from "vue-toastification";
import { useLoading } from 'vue-loading-overlay';

const toast = useToast();
const $loading = useLoading({
  isFullPage: true,
  backgroundColor: "#000000"
});

export function createGenericStore(moduleName) {

  return defineStore({
    id: moduleName,

    state: () => ({
      items: [],
      item: null,
    }),

    actions: {
      async fetchItems(page = 1, query = '') {
        let loader = $loading.show();
        try {
          const response = await api.get(`/api/v1/${moduleName}?page=${page}&search=${query}`);
          this.items = response.data;
        } catch (error) {
          console.error(`Error fetching ${moduleName}:`, error);
          toast.error(error.response.data.message);
        } finally {
          loader.hide();
        }
      },

      async fetchItem(id) {
        let loader = $loading.show();
        try {
          const response = await api.get(`/api/v1/${moduleName}/${id}`);
          this.item = response.data;
        } catch (error) {
          console.error(`Error fetching ${moduleName}:`, error);
          toast.error(error.response.data.message);
        } finally {
          loader.hide();
        }
      },

      async createItem(itemData) {
        let loader = $loading.show();
        try {
          const response = await api.post(`/api/v1/${moduleName}`, itemData);
          toast.success(response.data.message);
          await this.fetchItems();
        } catch (error) {
          console.error(`Error creating ${moduleName}:`, error);
          toast.error(error.response.data.message);
        } finally {
          loader.hide();
        }
      },

      async updateItem(id, itemData) {
        let loader = $loading.show();
        try {
          const response = await api.put(`/api/v1/${moduleName}/${id}`, itemData);
          toast.success(response.data.message);
          await this.fetchItems();
        } catch (error) {
          console.error(`Error updating ${moduleName}:`, error);
          toast.error(error.response.data.message);
        } finally {
          loader.hide();
        }
      },

      async deleteItem(id) {
        let loader = $loading.show();
        try {
          const response = await api.delete(`/api/v1/${moduleName}/${id}`);
          toast.success(response.data.message);
        } catch (error) {
          console.error(`Error deleting ${moduleName}:`, error);
          toast.error(error.response.data.message);
        } finally {
          loader.hide();
        }
      },
    },
  });
}
