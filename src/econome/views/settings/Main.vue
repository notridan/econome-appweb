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
              :options="{
                url: 'https://httpbin.org/post',
                thumbnailWidth: 150,
                maxFilesize: 0.5,
                acceptedFiles: 'image/png',
                headers: { 'My-Awesome-Header': 'header value' },
              }"
              class="dropzone"
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
import { useSettingsStore } from '@/stores/settingsStore';
// import Dropzone from 'dropzone';

const settingsStore = useSettingsStore();
const editedSettings = ref({});

onMounted(async () => {
  await settingsStore.fetchSettings();
  editedSettings.value = { ...settingsStore.currentSettings };
});

const onSubmit = async () => {
  await settingsStore.updateSettings(editedSettings.value);
};
</script>

<style scoped>
.dropzone {
  /* Adicione aqui o estilo personalizado para o componente Dropzone */
}
</style>
