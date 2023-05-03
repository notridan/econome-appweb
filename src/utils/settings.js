import { useSettingsStore } from '@/stores/useSettingsStore';

export default {
  install: (app) => {
    const settingsStore = useSettingsStore();
    app.config.globalProperties.$settings = settingsStore.currentSettings;
  },
};