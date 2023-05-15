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
    isLoading: false,
  }),

  actions: {
    async fetchRoles(page = 1) {
      this.isLoading = true;
      try {
        const response = await api.get(`/api/v1/roles?page=${page}`);
        this.roles = response.data;
      } catch (error) {
        console.error('Error fetching roles:', error);
        toast.error('Erro');
      } finally {
        this.isLoading = false;
      }
    },

    async fetchRole(id) {
      this.isLoading = true;
      try {
        const response = await api.get(`/api/v1/roles/${id}`);
        this.role = response.data;
      } catch (error) {
        console.error('Error fetching role:', error);
        toast.error('Erro');
      } finally {
        this.isLoading = false;
      }
    },

    async createRole(roleData) {
      try {
        const response = await api.post('/api/v1/roles', roleData);
        toast.success(response.data.message)
      } catch (error) {
        console.error('Error creating role:', error);
        toast.error('Erro');
      }
    },

    async updateRole(id, roleData) {
      try {
        await api.put(`/api/v1/roles/${id}`, roleData);
      } catch (error) {
        console.error('Error updating role:', error);
        toast.error('Erro');
      }
    },

    async deleteRole(id) {
      try {
        const response = await api.delete(`/api/v1/roles/${id}`);

        toast.success(response.data.message)
        
      } catch (error) {
        console.error('Error deleting role:', error);
        toast.error('Erro');
      }
    },
  },
});
