import { defineStore } from 'pinia';
import api from '@/utils/api';

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

    async updateSettings(payload) {
      try {
        this.loading = true;
        await api.put('/api/v1/settings', payload);
        this.settings = payload;
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
});
