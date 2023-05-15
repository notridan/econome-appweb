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

export const usePermissionStore = defineStore({
  id: 'permission',

  state: () => ({
    permissions: [],
    permission: null,
  }),

  actions: {
    async fetchPermissions(page = 1, query = '') {
      let loader = $loading.show();
      try {
        const response = await api.get(`/api/v1/permissions?page=${page}&search=${query}`);
        this.permissions = response.data;
      } catch (error) {
        console.error('Error fetching permissions:', error);
        toast.error(error.response.data.message);
      } finally {
        loader.hide();
      }
    },

    async fetchPermission(id) {
      let loader = $loading.show();
      try {
        const response = await api.get(`/api/v1/permissions/${id}`);
        this.permission = response.data;
      } catch (error) {
        console.error('Error fetching permission:', error);
        toast.error(error.response.data.message);
      } finally {
        loader.hide();
      }
    },

    async createPermission(permissionData) {
      let loader = $loading.show();
      try {
        const response = await api.post('/api/v1/permissions', permissionData);
        toast.success(response.data.message)
        await this.fetchPermissions();
      } catch (error) {
        console.error('Error creating permission:', error);
        toast.error(error.response.data.message);
      } finally {
        loader.hide();
      }
    },

    async updatePermission(id, permissionData) {
      let loader = $loading.show();
      try {
        const response = await api.put(`/api/v1/permissions/${id}`, permissionData);
        toast.success(response.data.message);
        await this.fetchPermissions();
      } catch (error) {
        console.error('Error updating permission:', error);
        toast.error(error.response.data.message);
      } finally {
        loader.hide();
      }
    },

    async deletePermission(id) {
      let loader = $loading.show();
      try {
        const response = await api.delete(`/api/v1/permissions/${id}`);

        toast.success(response.data.message)

        await this.fetchPermissions();
        
      } catch (error) {
        console.error('Error deleting permission:', error);
        toast.error(error.response.data.message);
      } finally {
        loader.hide();
      }
    },
  },
});
