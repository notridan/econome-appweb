<!-- src/econome/views/settings/Main.vue -->
<template>
  <div class="intro-y flex items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">Configurações Gerais</h2>
  </div>

  <div class="grid grid-cols-12 gap-6 mt-5">
    <div class="intro-y col-span-12 lg:col-span-6">
      <div class="intro-y box">
        <div class="p-5">
          <div class="mb-3">
            <label for="logo-input" class="form-label">Logo</label>
            <Dropzone
              ref-key="dropzoneValidationRef"
              :options="dropzoneOptions"
              class="dropzone"
              @vdropzone-success="onDropzoneSuccess"
            >
              <div class="text-lg font-medium">
                Arraste sua logo aqui!
              </div>
              <div class="text-gray-600">
                Arraste ou clique aqui para selecionar sua nova logo
              </div>
            </Dropzone>
          </div>
          <div class="mt-3">
            <label for="name-input" class="form-label">Name</label>
            <input
              id="name-input"
              type="text"
              class="form-control"
              placeholder="App Name"
              v-model="editedSettings.app_name"
            />
          </div>
          <div class="mt-3">
            <label for="description-input" class="form-label">Description</label>
            <textarea
              id="description-input"
              rows="3"
              class="form-control"
              placeholder="App Description"
              v-model="editedSettings.app_description"
            ></textarea>
          </div>
          <button @click="onSubmit" class="btn btn-primary mt-5">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useSettingsStore } from '@/stores/useSettingsStore';
// import Dropzone from 'dropzone';

const settingsStore = useSettingsStore();
const editedSettings = ref({});

const token = localStorage.getItem("token");

const dropzoneOptions = {
  url: `${import.meta.env.VITE_API_BASE_URL}`+ '/api/v1/settings/logo-update',
  thumbnailWidth: 150,
  maxFilesize: 0.5,
  acceptedFiles: 'image/png',
  headers: { 'Authorization': 'Bearer '+token },
};
const appLogoFile = ref(null);

onMounted(async () => {
  await settingsStore.fetchSettings();
  editedSettings.value = { ...settingsStore.currentSettings };
});

const onDropzoneSuccess = (file, response) => {
  appLogoFile.value = file;
};

const onSubmit = async () => {
  const formData = new FormData();
  formData.append('app_name', editedSettings.value.app_name);
  formData.append('app_description', editedSettings.value.app_description);
  // if (appLogoFile.value) {
  //   formData.append('app_logo', appLogoFile.value);
  // }
  await settingsStore.updateSettings(formData);
};
</script>

<style scoped>
.dropzone {
  /* Adicione aqui o estilo personalizado para o componente Dropzone */
}
</style>
