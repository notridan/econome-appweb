<template>
  <!-- BEGIN: Top Bar -->
  <div class="top-bar">
    <!-- BEGIN: Breadcrumb -->
    <nav aria-label="breadcrumb" class="-intro-x hidden xl:flex">
      <ol class="breadcrumb breadcrumb-light">
        <li class="breadcrumb-item"><a href="#">App</a></li>
        <li class="breadcrumb-item"><a href="#">Administrator</a></li>
        <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
      </ol>
    </nav>
    <!-- END: Breadcrumb -->
    <!-- BEGIN: Mobile Menu -->
    <div class="-intro-x xl:hidden mr-3 sm:mr-6">
      <div
        class="mobile-menu-toggler cursor-pointer"
        @click="$emit('setMobileMenu')"
      >
        <BarChart2Icon
          class="mobile-menu-toggler__icon transform rotate-90 dark:text-slate-500"
        />
      </div>
    </div>
    <!-- END: Mobile Menu -->
    <!-- BEGIN: Search -->
    <div class="intro-x relative ml-auto sm:mx-auto">
    </div>
  
    <!-- BEGIN: Account Menu -->
    <Dropdown  ref="accountDropdown" class="intro-x text-slate-200 h-10">
      <DropdownToggle
        tag="div"
        role="button"
        class="h-full dropdown-toggle flex items-center"
      >
        <div class="w-10 h-10 image-fit">
          <img
            alt="EconoMe"
            class="rounded-full border-2 border-white border-opacity-10 shadow-lg"
            src="src/assets/images/profile-picture.jpeg"
          />
        </div>
        <div class="hidden md:block ml-3">
          <div class="max-w-[7rem] truncate font-medium">
            {{ authStore.userProfile?.name }}
          </div>
          <div class="text-xs text-slate-400">{{ authStore.userProfile?.role }}</div>
        </div>
      </DropdownToggle>
      <DropdownMenu class="w-56">
        <DropdownContent @click="closeDropdownMenu">
          <DropdownItem>
            <UserIcon class="w-4 h-4 mr-2" /> Profile
          </DropdownItem>
          <DropdownItem>
            <LockIcon class="w-4 h-4 mr-2" /> Reset Password
          </DropdownItem>
          <DropdownDivider />
          <DropdownItem @click="logout">
            <ToggleRightIcon class="w-4 h-4 mr-2" /> Logout
          </DropdownItem>
        </DropdownContent>
      </DropdownMenu>
    </Dropdown>
    <!-- END: Account Menu -->
  </div>
  <!-- END: Top Bar -->
</template>

<script setup>
import { ref } from "vue";
import dom from "@left4code/tw-starter/dist/js/dom";
import { useAuthStore } from "@/stores/useAuthStore";

const searchResultModal = ref(false);
const searchInput = ref(false);

// Show search result modal
const showSearchResultModal = () => {
  searchResultModal.value = true;
};

// Set search input focus
const setSearchInputFocus = () => {
  searchInput.value.focus();
};

// On press event (Ctrl+k)
dom("body").on("keydown", function (e) {
  if ((e.ctrlKey || e.metaKey) && e.which == 75) {
    searchResultModal.value = true;
  }
});

const authStore = useAuthStore();

const logout = async () => {
  await authStore.onLogout();
};

const closeDropdownMenu = () => {
  document.body.click();
};

</script>
