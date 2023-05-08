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

export const useSettingsStore = defineStore({
  id: 'settings',

  state: () => ({
    settings: {
      logo: '',
      name: '',
      description: '',
    },
    loading: false,
    error: null,
  }),

  getters: {
    currentSettings() {
      return this.settings;
    },
  },

  actions: {
    async fetchSettings() {
      try {
        this.loading = true;
        const response = await api.get('/api/v1/settings');
        this.settings = response.data;
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },

    async updateSettings(formData) {
      try {
        this.loading = true;
        await api.post('/api/v1/settings', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        const updatedSettings = Object.fromEntries(formData.entries());
        this.settings = updatedSettings;
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
});
