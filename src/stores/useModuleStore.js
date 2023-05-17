import { defineStore } from 'pinia';
import api from '@/utils/api';
import { useToast } from "vue-toastification";
import {useLoading} from 'vue-loading-overlay';

const toast = useToast();
const $loading = useLoading({
  // options
  isFullPage: true,
  backgroundColor: "#000000"
});

export const useModuleStore = defineStore({
  id: 'module',

  state: () => ({
    modules: [],
    module: null,
  }),

  actions: {
    async fetchModules(page = 1, query = '') {
      let loader = $loading.show();
      try {
        const response = await api.get(`/api/v1/modules?page=${page}&search=${query}`);
        this.modules = response.data;
      } catch (error) {
        console.error('Error fetching modules:', error);
        toast.error(error.response.data.message);
      } finally {
        loader.hide();
      }
    },

    async fetchModule(id) {
      let loader = $loading.show();
      try {
        const response = await api.get(`/api/v1/modules/${id}`);
        this.module = response.data;
      } catch (error) {
        console.error('Error fetching module:', error);
        toast.error(error.response.data.message);
      } finally {
        loader.hide();
      }
    },

    async createModule(moduleData) {
      let loader = $loading.show();
      try {
        const response = await api.post('/api/v1/modules', moduleData);
        toast.success(response.data.message)
        await this.fetchModules();
      } catch (error) {
        console.error('Error creating module:', error);
        toast.error(error.response.data.message);
      } finally {
        loader.hide();
      }
    },

    async updateModule(id, moduleData) {
      let loader = $loading.show();
      try {
        const response = await api.put(`/api/v1/modules/${id}`, moduleData);
        toast.success(response.data.message);
        await this.fetchModules();
      } catch (error) {
        console.error('Error updating module:', error);
        toast.error(error.response.data.message);
      } finally {
        loader.hide();
      }
    },

    async deleteModule(id) {
      let loader = $loading.show();
      try {
        const response = await api.delete(`/api/v1/modules/${id}`);

        toast.success(response.data.message)

        await this.fetchModules();
        
      } catch (error) {
        console.error('Error deleting module:', error);
        toast.error(error.response.data.message);
      } finally {
        loader.hide();
      }
    },
  },
});
