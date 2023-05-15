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

export const useRoleStore = defineStore({
  id: 'role',

  state: () => ({
    roles: [],
    role: null,
  }),

  actions: {
    async fetchRoles(page = 1, query = '') {
      let loader = $loading.show();
      try {
        const response = await api.get(`/api/v1/roles?page=${page}&search=${query}`);
        this.roles = response.data;
      } catch (error) {
        console.error('Error fetching roles:', error);
        toast.error(error.response.data.message);
      } finally {
        loader.hide();
      }
    },

    async fetchRole(id) {
      let loader = $loading.show();
      try {
        const response = await api.get(`/api/v1/roles/${id}`);
        this.role = response.data;
      } catch (error) {
        console.error('Error fetching role:', error);
        toast.error(error.response.data.message);
      } finally {
        loader.hide();
      }
    },

    async createRole(roleData) {
      let loader = $loading.show();
      try {
        const response = await api.post('/api/v1/roles', roleData);
        toast.success(response.data.message)
        await this.fetchRoles();
      } catch (error) {
        console.error('Error creating role:', error);
        toast.error(error.response.data.message);
      } finally {
        loader.hide();
      }
    },

    async updateRole(id, roleData) {
      let loader = $loading.show();
      try {
        const response = await api.put(`/api/v1/roles/${id}`, roleData);
        toast.success(response.data.message);
        await this.fetchRoles();
      } catch (error) {
        console.error('Error updating role:', error);
        toast.error(error.response.data.message);
      } finally {
        loader.hide();
      }
    },

    async deleteRole(id) {
      let loader = $loading.show();
      try {
        const response = await api.delete(`/api/v1/roles/${id}`);

        toast.success(response.data.message)
        
      } catch (error) {
        console.error('Error deleting role:', error);
        toast.error(error.response.data.message);
      } finally {
        loader.hide();
      }
    },
  },
});
