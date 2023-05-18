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

export const useUserStore = defineStore({
  id: 'user',

  state: () => ({
    users: [],
    user: null,
  }),

  actions: {
    async fetchUsers(page = 1, query = '') {
      let loader = $loading.show();
      try {
        const response = await api.get(`/api/v1/users?page=${page}&search=${query}`);
        this.users = response.data;
      } catch (error) {
        console.error('Error fetching users:', error);
        toast.error(error.response.data.message);
      } finally {
        loader.hide();
      }
    },

    async fetchUser(id) {
      let loader = $loading.show();
      try {
        const response = await api.get(`/api/v1/users/${id}`);
        this.user = response.data;
      } catch (error) {
        console.error('Error fetching user:', error);
        toast.error(error.response.data.message);
      } finally {
        loader.hide();
      }
    },

    async createUser(userData) {
      let loader = $loading.show();
      try {
        const response = await api.post('/api/v1/users', userData);
        toast.success(response.data.message)
        await this.fetchUsers();
      } catch (error) {
        console.error('Error creating user:', error);
        toast.error(error.response.data.message);
      } finally {
        loader.hide();
      }
    },

    async updateUser(id, userData) {
      let loader = $loading.show();
      try {
        const response = await api.put(`/api/v1/users/${id}`, userData);
        toast.success(response.data.message);
        await this.fetchUsers();
      } catch (error) {
        console.error('Error updating user:', error);
        toast.error(error.response.data.message);
      } finally {
        loader.hide();
      }
    },

    async deleteUser(id) {
      let loader = $loading.show();
      try {
        const response = await api.delete(`/api/v1/users/${id}`);

        toast.success(response.data.message)
        
      } catch (error) {
        console.error('Error deleting user:', error);
        toast.error(error.response.data.message);
      } finally {
        loader.hide();
      }
    },
  },
});
